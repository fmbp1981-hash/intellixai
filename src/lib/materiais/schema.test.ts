import { describe, expect, it } from "vitest";
import { errosPorCampo, solicitarMaterialSchema } from "./schema";

const valido = {
  nome: "Maria Souza",
  whatsapp: "(81) 98851-4775",
  email: "maria@exemplo.com.br",
  consentimentoMaterial: true,
  consentimentoNovidades: false,
  slug: "guia-agentes-ia",
  site: "",
};

function erros(entrada: unknown) {
  const r = solicitarMaterialSchema.safeParse(entrada);
  return r.success ? {} : errosPorCampo(r.error);
}

describe("solicitarMaterialSchema", () => {
  it("aceita um pedido válido", () => {
    expect(solicitarMaterialSchema.safeParse(valido).success).toBe(true);
  });

  it("aceita token do Turnstile e origem opcionais", () => {
    const r = solicitarMaterialSchema.safeParse({
      ...valido,
      turnstileToken: "tok",
      origem: "utm_source=instagram",
    });
    expect(r.success).toBe(true);
  });

  it("exige nome entre 2 e 80 caracteres", () => {
    expect(erros({ ...valido, nome: "A" })).toHaveProperty("nome");
    expect(erros({ ...valido, nome: "A".repeat(81) })).toHaveProperty("nome");
    expect(erros({ ...valido, nome: "  Al  " })).not.toHaveProperty("nome");
  });

  it("valida WhatsApp brasileiro", () => {
    expect(erros({ ...valido, whatsapp: "12345" })).toHaveProperty("whatsapp");
    expect(erros({ ...valido, whatsapp: "+1 415 555 0100" })).toHaveProperty(
      "whatsapp",
    );
  });

  it("valida e-mail", () => {
    expect(erros({ ...valido, email: "nao-e-email" })).toHaveProperty("email");
  });

  it("exige o consentimento do material", () => {
    const e = erros({ ...valido, consentimentoMaterial: false });
    expect(e["consentimentoMaterial"]).toMatch(/Política de Privacidade/);
  });

  it("consentimento de novidades precisa ser booleano", () => {
    expect(erros({ ...valido, consentimentoNovidades: "sim" })).toHaveProperty(
      "consentimentoNovidades",
    );
  });

  it("rejeita honeypot preenchido", () => {
    expect(erros({ ...valido, site: "http://spam" })).toHaveProperty("site");
  });

  it("rejeita slug inválido", () => {
    expect(erros({ ...valido, slug: "../segredo" })).toHaveProperty("slug");
    expect(erros({ ...valido, slug: "Guia Legal" })).toHaveProperty("slug");
  });
});
