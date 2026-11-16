import { describe, expect, it } from "vitest";
import { LIMITE_POR_IP } from "./constantes";
import { decidirLimite, inicioDaJanela } from "./limites";

describe("decidirLimite", () => {
  it("permite abaixo do limite", () => {
    expect(
      decidirLimite({
        cadastrosRecentesDoIp: LIMITE_POR_IP - 1,
        jaSolicitouRecentemente: false,
      }),
    ).toEqual({ acao: "permitir" });
  });

  it("bloqueia ao atingir 5 cadastros do mesmo IP", () => {
    expect(LIMITE_POR_IP).toBe(5);
    expect(
      decidirLimite({
        cadastrosRecentesDoIp: 5,
        jaSolicitouRecentemente: false,
      }),
    ).toEqual({
      acao: "bloquear",
    });
    expect(
      decidirLimite({
        cadastrosRecentesDoIp: 9,
        jaSolicitouRecentemente: false,
      }),
    ).toEqual({
      acao: "bloquear",
    });
  });

  it("reaproveita quando o mesmo e-mail já pediu o material na janela", () => {
    expect(
      decidirLimite({
        cadastrosRecentesDoIp: 0,
        jaSolicitouRecentemente: true,
      }),
    ).toEqual({
      acao: "reaproveitar",
    });
    // repetir o próprio pedido não é bloqueado nem grava de novo
    expect(
      decidirLimite({
        cadastrosRecentesDoIp: 7,
        jaSolicitouRecentemente: true,
      }),
    ).toEqual({
      acao: "reaproveitar",
    });
  });

  it("calcula o início da janela de 10 minutos", () => {
    const agora = new Date("2026-11-16T12:00:00.000Z");
    expect(inicioDaJanela(agora, 10 * 60 * 1000)).toBe(
      "2026-11-16T11:50:00.000Z",
    );
  });
});
