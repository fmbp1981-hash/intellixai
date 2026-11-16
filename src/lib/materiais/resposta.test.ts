import { describe, expect, it } from "vitest";
import { ehErro, falha, sucesso } from "./resposta";

describe("formato de resposta IntelliX", () => {
  it("sucesso tem data e, opcionalmente, meta", () => {
    expect(sucesso({ a: 1 })).toEqual({ data: { a: 1 } });
    expect(sucesso({ a: 1 }, { duplicado: false })).toEqual({
      data: { a: 1 },
      meta: { duplicado: false },
    });
  });

  it("erro tem error.code e error.message", () => {
    expect(falha("LIMITE_EXCEDIDO", "Aguarde.")).toEqual({
      error: { code: "LIMITE_EXCEDIDO", message: "Aguarde." },
    });
    expect(falha("VALIDACAO", "Confira.", { nome: "curto" })).toEqual({
      error: {
        code: "VALIDACAO",
        message: "Confira.",
        campos: { nome: "curto" },
      },
    });
  });

  it("ehErro distingue os dois formatos", () => {
    expect(ehErro(falha("ERRO_INTERNO", "x"))).toBe(true);
    expect(ehErro(sucesso(1))).toBe(false);
  });
});
