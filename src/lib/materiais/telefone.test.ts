import { describe, expect, it } from "vitest";
import { normalizarTelefoneBr } from "./telefone";

describe("normalizarTelefoneBr", () => {
  it.each([
    ["(81) 98851-4775", "+5581988514775"],
    ["81988514775", "+5581988514775"],
    ["+55 81 98851-4775", "+5581988514775"],
    ["55 81 98851-4775", "+5581988514775"],
    ["081 98851-4775", "+5581988514775"],
    ["(11) 3333-4444", "+551133334444"],
    ["5533334444", "+555533334444"], // fixo do RS: DDD 55, não código do país
    ["55988887777", "+5555988887777"], // celular do RS: DDD 55
    ["+55 55 98888-7777", "+5555988887777"],
  ])("normaliza %s para %s", (entrada, esperado) => {
    expect(normalizarTelefoneBr(entrada)).toBe(esperado);
  });

  it.each([
    "",
    "123",
    "8198851477", // 10 dígitos com assinante começando em 9: celular sem o nono dígito
    "(81) 88851-4775", // celular de 9 dígitos que não começa com 9
    "(20) 98851-4775", // DDD inexistente
    "+1 415 555 0100",
    "819885147751234",
    "abc",
  ])("rejeita %s", (entrada) => {
    expect(normalizarTelefoneBr(entrada)).toBeNull();
  });
});
