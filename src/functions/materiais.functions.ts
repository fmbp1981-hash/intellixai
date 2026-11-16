import { createServerFn } from "@tanstack/react-start";
import {
  slugSchema,
  type SolicitarMaterialEntrada,
} from "@/lib/materiais/schema";
import { extrairIp } from "@/lib/materiais/texto";
import type { MaterialPublico } from "@/lib/materiais/tipos";
import type { RespostaSolicitacao } from "@/server/materiais.service";

// Wrappers de server function. O código de servidor (service role, Resend, Turnstile)
// é importado dinamicamente dentro dos handlers para nunca ir ao bundle do navegador.
// Só campos públicos saem daqui: arquivo_path nunca é devolvido.

function paraPublico(row: {
  slug: string;
  titulo: string;
  descricao: string | null;
  capa_url: string | null;
}): MaterialPublico {
  return {
    slug: row.slug,
    titulo: row.titulo,
    descricao: row.descricao,
    capaUrl: row.capa_url,
  };
}

export const listarMateriais = createServerFn({ method: "GET" }).handler(
  async (): Promise<MaterialPublico[]> => {
    try {
      const { listarMateriaisAtivos } =
        await import("@/server/materiais.repository.server");
      const rows = await listarMateriaisAtivos();
      return rows.map(paraPublico);
    } catch (erro) {
      console.error(
        "[materiais] Falha ao listar",
        erro instanceof Error ? erro.message : erro,
      );
      return [];
    }
  },
);

export const obterMaterial = createServerFn({ method: "GET" })
  .validator((input: { slug: string }) => {
    const r = slugSchema.safeParse(input?.slug);
    return { slug: r.success ? r.data : "" };
  })
  .handler(async ({ data }): Promise<MaterialPublico | null> => {
    if (!data.slug) return null;
    try {
      const { buscarMaterialPublico } =
        await import("@/server/materiais.repository.server");
      const row = await buscarMaterialPublico(data.slug);
      return row ? paraPublico(row) : null;
    } catch (erro) {
      console.error(
        "[materiais] Falha ao buscar",
        erro instanceof Error ? erro.message : erro,
      );
      return null;
    }
  });

export const solicitarMaterial = createServerFn({ method: "POST" })
  // A validação de verdade (zod) roda dentro do handler para devolver
  // { error: { code, message } } em vez de lançar exceção.
  .validator((input: SolicitarMaterialEntrada) => input)
  .handler(async ({ data }): Promise<RespostaSolicitacao> => {
    const [
      { getRequestHeader },
      { processarSolicitacao },
      repo,
      { verificarTurnstile },
      { enviarEmailMaterial },
    ] = await Promise.all([
      import("@tanstack/react-start/server"),
      import("@/server/materiais.service"),
      import("@/server/materiais.repository.server"),
      import("@/server/turnstile.server"),
      import("@/server/email.server"),
    ]);
    const ip = extrairIp((nome) => getRequestHeader(nome as never));
    const userAgent = getRequestHeader("user-agent") ?? null;
    return processarSolicitacao(
      data,
      { ip, userAgent },
      {
        verificarTurnstile,
        buscarMaterialParaEntrega: repo.buscarMaterialParaEntrega,
        contarCadastrosDoIpDesde: repo.contarCadastrosDoIpDesde,
        existeCadastroRecente: repo.existeCadastroRecente,
        inserirCadastro: repo.inserirCadastro,
        criarLinkAssinado: repo.criarLinkAssinado,
        enviarEmail: enviarEmailMaterial,
      },
    );
  });
