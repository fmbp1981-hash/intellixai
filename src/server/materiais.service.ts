// Regra de negócio do pedido de material. Não importa nada do servidor diretamente:
// recebe as dependências (repository, Turnstile, e-mail) para poder ser testada com fakes.
import {
  JANELA_DEDUPE_MS,
  JANELA_LIMITE_MS,
  POLITICA_VERSAO,
  VALIDADE_LINK_SEGUNDOS,
} from "@/lib/materiais/constantes";
import { decidirLimite, inicioDaJanela } from "@/lib/materiais/limites";
import { mascararEmail, mascararIp } from "@/lib/materiais/mascara";
import { falha, sucesso, type Resposta } from "@/lib/materiais/resposta";
import { errosPorCampo, solicitarMaterialSchema } from "@/lib/materiais/schema";
import { normalizarTelefoneBr } from "@/lib/materiais/telefone";
import type {
  SolicitacaoAtendida,
  SolicitacaoMeta,
} from "@/lib/materiais/tipos";
import type { MaterialLeadInsert, MaterialRow } from "./materiais.db-types";

export interface DependenciasSolicitacao {
  verificarTurnstile: (
    token: string | undefined,
    ip: string | null,
  ) => Promise<"valido" | "invalido" | "desativado">;
  buscarMaterialParaEntrega: (
    slug: string,
  ) => Promise<Pick<MaterialRow, "id" | "titulo" | "arquivo_path"> | null>;
  contarCadastrosDoIpDesde: (ip: string, desdeIso: string) => Promise<number>;
  existeCadastroRecente: (
    materialId: string,
    email: string,
    desdeIso: string,
  ) => Promise<boolean>;
  inserirCadastro: (lead: MaterialLeadInsert) => Promise<void>;
  criarLinkAssinado: (
    arquivoPath: string,
    validadeSegundos: number,
  ) => Promise<string>;
  enviarEmail: (dados: {
    para: string;
    nome: string;
    tituloMaterial: string;
    downloadUrl: string;
  }) => Promise<boolean>;
  agora?: () => Date;
}

export interface ContextoRequisicao {
  ip: string | null;
  userAgent: string | null;
}

export type RespostaSolicitacao = Resposta<
  SolicitacaoAtendida,
  SolicitacaoMeta
>;

export async function processarSolicitacao(
  entrada: unknown,
  contexto: ContextoRequisicao,
  deps: DependenciasSolicitacao,
): Promise<RespostaSolicitacao> {
  // 1. Validação + honeypot
  const validacao = solicitarMaterialSchema.safeParse(entrada);
  if (!validacao.success) {
    const campos = errosPorCampo(validacao.error);
    if ("site" in campos)
      return falha("ROBO_DETECTADO", "Não foi possível processar o pedido.");
    return falha("VALIDACAO", "Confira os campos destacados.", campos);
  }
  const dados = validacao.data;
  const whatsapp = normalizarTelefoneBr(dados.whatsapp);
  if (!whatsapp) {
    return falha("VALIDACAO", "Confira os campos destacados.", {
      whatsapp: "Informe um WhatsApp válido com DDD.",
    });
  }
  const email = dados.email.trim().toLowerCase();
  const agora = (deps.agora ?? (() => new Date()))();
  const log = `email=${mascararEmail(email)} ip=${mascararIp(contexto.ip)} material=${dados.slug}`;

  try {
    // 2. Anti-robô
    const turnstile = await deps.verificarTurnstile(
      dados.turnstileToken,
      contexto.ip,
    );
    if (turnstile === "invalido") {
      console.warn(`[materiais] Turnstile inválido (${log})`);
      return falha(
        "ROBO_DETECTADO",
        "Não conseguimos confirmar que você não é um robô. Atualize a página e tente de novo.",
      );
    }

    // 3. Material
    const material = await deps.buscarMaterialParaEntrega(dados.slug);
    if (!material) {
      return falha(
        "MATERIAL_NAO_ENCONTRADO",
        "Este material não está mais disponível.",
      );
    }

    // 4. Limite por IP + deduplicação
    const [cadastrosDoIp, jaSolicitou] = await Promise.all([
      contexto.ip
        ? deps.contarCadastrosDoIpDesde(
            contexto.ip,
            inicioDaJanela(agora, JANELA_LIMITE_MS),
          )
        : Promise.resolve(0),
      deps.existeCadastroRecente(
        material.id,
        email,
        inicioDaJanela(agora, JANELA_DEDUPE_MS),
      ),
    ]);
    const decisao = decidirLimite({
      cadastrosRecentesDoIp: cadastrosDoIp,
      jaSolicitouRecentemente: jaSolicitou,
    });

    if (decisao.acao === "bloquear") {
      console.warn(`[materiais] Limite por IP atingido (${log})`);
      return falha(
        "LIMITE_EXCEDIDO",
        "Recebemos muitos pedidos desta conexão. Aguarde alguns minutos e tente de novo.",
      );
    }

    // 5. Link assinado
    const downloadUrl = await deps.criarLinkAssinado(
      material.arquivo_path,
      VALIDADE_LINK_SEGUNDOS,
    );

    if (decisao.acao === "reaproveitar") {
      console.info(`[materiais] Pedido repetido, sem novo cadastro (${log})`);
      return sucesso(
        { downloadUrl, emailEnviado: false },
        { duplicado: true, validadeSegundos: VALIDADE_LINK_SEGUNDOS },
      );
    }

    // 6. Cadastro (se falhar, não entrega o link)
    await deps.inserirCadastro({
      material_id: material.id,
      nome: dados.nome,
      whatsapp,
      email,
      consentimento_material: true,
      consentimento_novidades: dados.consentimentoNovidades,
      politica_versao: POLITICA_VERSAO,
      ip: contexto.ip,
      user_agent: contexto.userAgent ? contexto.userAgent.slice(0, 512) : null,
      origem: dados.origem ? dados.origem.slice(0, 200) : null,
    });

    // 7. E-mail (falha não derruba o pedido)
    const emailEnviado = await deps.enviarEmail({
      para: email,
      nome: dados.nome,
      tituloMaterial: material.titulo,
      downloadUrl,
    });

    console.info(
      `[materiais] Cadastro gravado, emailEnviado=${emailEnviado} (${log})`,
    );
    return sucesso(
      { downloadUrl, emailEnviado },
      { duplicado: false, validadeSegundos: VALIDADE_LINK_SEGUNDOS },
    );
  } catch (erro) {
    console.error(
      `[materiais] Erro ao processar pedido (${log})`,
      erro instanceof Error ? erro.message : "erro desconhecido",
    );
    return falha(
      "ERRO_INTERNO",
      "Não foi possível concluir agora. Tente de novo em instantes.",
    );
  }
}
