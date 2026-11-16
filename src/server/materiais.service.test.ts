import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  POLITICA_VERSAO,
  VALIDADE_LINK_SEGUNDOS,
} from "@/lib/materiais/constantes";
import type { MaterialLeadInsert } from "./materiais.db-types";
import {
  processarSolicitacao,
  type DependenciasSolicitacao,
} from "./materiais.service";
import { montarEmailMaterial } from "./email.server";

const entradaValida = {
  nome: "Maria Souza",
  whatsapp: "(81) 98851-4775",
  email: "  Maria@Exemplo.COM.br ",
  consentimentoMaterial: true,
  consentimentoNovidades: true,
  slug: "guia-agentes-ia",
  site: "",
  turnstileToken: "tok",
  origem: "utm_source=instagram",
};

const contexto = { ip: "200.1.2.3", userAgent: "Mozilla/5.0" };

function criarDeps(over: Partial<DependenciasSolicitacao> = {}) {
  const inseridos: MaterialLeadInsert[] = [];
  const deps: DependenciasSolicitacao = {
    verificarTurnstile: vi.fn(async () => "valido" as const),
    buscarMaterialParaEntrega: vi.fn(async () => ({
      id: "mat-1",
      titulo: "Guia",
      arquivo_path: "guias/guia.pdf",
    })),
    contarCadastrosDoIpDesde: vi.fn(async () => 0),
    existeCadastroRecente: vi.fn(async () => false),
    inserirCadastro: vi.fn(async (lead: MaterialLeadInsert) => {
      inseridos.push(lead);
    }),
    criarLinkAssinado: vi.fn(
      async () => "https://exemplo.supabase.co/sign/guia.pdf?token=t",
    ),
    enviarEmail: vi.fn(async () => true),
    agora: () => new Date("2026-11-16T12:00:00.000Z"),
    ...over,
  };
  return { deps, inseridos };
}

let logs: string[] = [];
beforeEach(() => {
  logs = [];
  for (const nivel of ["info", "warn", "error", "log"] as const) {
    vi.spyOn(console, nivel).mockImplementation((...args: unknown[]) => {
      logs.push(args.map(String).join(" "));
    });
  }
});
afterEach(() => vi.restoreAllMocks());

describe("processarSolicitacao", () => {
  it("caminho feliz: grava, envia e-mail e devolve { data, meta }", async () => {
    const { deps, inseridos } = criarDeps();
    const r = await processarSolicitacao(entradaValida, contexto, deps);

    expect(r).toEqual({
      data: {
        downloadUrl: "https://exemplo.supabase.co/sign/guia.pdf?token=t",
        emailEnviado: true,
      },
      meta: { validadeSegundos: VALIDADE_LINK_SEGUNDOS },
    });
    expect(deps.criarLinkAssinado).toHaveBeenCalledWith("guias/guia.pdf", 3600);
    expect(inseridos).toEqual([
      {
        material_id: "mat-1",
        nome: "Maria Souza",
        whatsapp: "+5581988514775",
        email: "maria@exemplo.com.br",
        consentimento_material: true,
        consentimento_novidades: true,
        politica_versao: POLITICA_VERSAO,
        ip: "200.1.2.3",
        user_agent: "Mozilla/5.0",
        origem: "utm_source=instagram",
      },
    ]);
    expect(deps.enviarEmail).toHaveBeenCalledWith(
      expect.objectContaining({
        para: "maria@exemplo.com.br",
        tituloMaterial: "Guia",
      }),
    );
  });

  it("não loga e-mail nem telefone em claro", async () => {
    const { deps } = criarDeps();
    await processarSolicitacao(entradaValida, contexto, deps);
    const tudo = logs.join("\n").toLowerCase();
    expect(tudo).not.toContain("maria@exemplo");
    expect(tudo).not.toContain("988514775");
    expect(tudo).not.toContain("200.1.2.3");
  });

  it("erro de validação devolve { error: { code, message, campos } }", async () => {
    const { deps } = criarDeps();
    const r = await processarSolicitacao(
      { ...entradaValida, nome: "A" },
      contexto,
      deps,
    );
    expect(r).toMatchObject({
      error: { code: "VALIDACAO", campos: { nome: expect.any(String) } },
    });
    expect(deps.inserirCadastro).not.toHaveBeenCalled();
  });

  it("entrada que não é objeto vira erro de validação", async () => {
    const { deps } = criarDeps();
    const r = await processarSolicitacao(null, contexto, deps);
    expect(r).toMatchObject({ error: { code: "VALIDACAO" } });
  });

  it("honeypot preenchido é tratado como robô e não chama nada", async () => {
    const { deps } = criarDeps();
    const r = await processarSolicitacao(
      { ...entradaValida, site: "x" },
      contexto,
      deps,
    );
    expect(r).toMatchObject({ error: { code: "ROBO_DETECTADO" } });
    expect(deps.verificarTurnstile).not.toHaveBeenCalled();
    expect(deps.inserirCadastro).not.toHaveBeenCalled();
  });

  it("Turnstile inválido bloqueia", async () => {
    const { deps } = criarDeps({
      verificarTurnstile: vi.fn(async () => "invalido" as const),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toMatchObject({ error: { code: "ROBO_DETECTADO" } });
    expect(deps.inserirCadastro).not.toHaveBeenCalled();
  });

  it("Turnstile desativado (sem segredo) deixa seguir", async () => {
    const { deps } = criarDeps({
      verificarTurnstile: vi.fn(async () => "desativado" as const),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toHaveProperty("data");
  });

  it("material inexistente devolve MATERIAL_NAO_ENCONTRADO", async () => {
    const { deps } = criarDeps({
      buscarMaterialParaEntrega: vi.fn(async () => null),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toMatchObject({ error: { code: "MATERIAL_NAO_ENCONTRADO" } });
  });

  it("limite por IP bloqueia sem gerar link nem gravar", async () => {
    const { deps } = criarDeps({
      contarCadastrosDoIpDesde: vi.fn(async () => 5),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toMatchObject({ error: { code: "LIMITE_EXCEDIDO" } });
    expect(deps.criarLinkAssinado).not.toHaveBeenCalled();
    expect(deps.inserirCadastro).not.toHaveBeenCalled();
    expect(deps.contarCadastrosDoIpDesde).toHaveBeenCalledWith(
      "200.1.2.3",
      "2026-11-16T11:50:00.000Z",
    );
  });

  it("sem IP não consulta o limite por IP", async () => {
    const { deps } = criarDeps();
    const r = await processarSolicitacao(
      entradaValida,
      { ip: null, userAgent: null },
      deps,
    );
    expect(r).toHaveProperty("data");
    expect(deps.contarCadastrosDoIpDesde).not.toHaveBeenCalled();
  });

  it("pedido repetido devolve o link sem gravar de novo nem reenviar e-mail", async () => {
    const { deps } = criarDeps({
      existeCadastroRecente: vi.fn(async () => true),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toEqual({
      data: { downloadUrl: expect.any(String), emailEnviado: false },
      meta: { validadeSegundos: VALIDADE_LINK_SEGUNDOS },
    });
    expect(deps.existeCadastroRecente).toHaveBeenCalledWith(
      "mat-1",
      "maria@exemplo.com.br",
      "2026-11-16T11:50:00.000Z",
    );
    expect(deps.inserirCadastro).not.toHaveBeenCalled();
    expect(deps.enviarEmail).not.toHaveBeenCalled();
  });

  it("falha ao gravar não entrega o link", async () => {
    const { deps } = criarDeps({
      inserirCadastro: vi.fn(async () => {
        throw new Error("db fora");
      }),
    });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toEqual({
      error: { code: "ERRO_INTERNO", message: expect.any(String) },
    });
    expect(deps.enviarEmail).not.toHaveBeenCalled();
  });

  it("falha no e-mail não derruba o pedido", async () => {
    const { deps } = criarDeps({ enviarEmail: vi.fn(async () => false) });
    const r = await processarSolicitacao(entradaValida, contexto, deps);
    expect(r).toMatchObject({ data: { emailEnviado: false } });
  });
});

describe("montarEmailMaterial", () => {
  it("escapa nome e título e cita a validade de 1 hora", () => {
    const { html, text, subject } = montarEmailMaterial({
      para: "a@b.com",
      nome: "<b>Zé</b> Silva",
      tituloMaterial: "Guia <script>",
      downloadUrl: "https://x/y?a=1&b=2",
    });
    expect(html).not.toContain("<b>Zé</b>");
    expect(html).toContain("&lt;b&gt;Zé&lt;/b&gt;");
    expect(html).toContain("Guia &lt;script&gt;");
    expect(html).toContain("https://x/y?a=1&amp;b=2");
    expect(html).toContain("1 hora");
    expect(text).toContain("1 hora");
    expect(subject).toBe("Seu material: Guia <script>");
  });
});
