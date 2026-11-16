import { describe, expect, it } from "vitest";
import { mascararEmail, mascararIp, mascararTelefone } from "./mascara";

describe("mascaramento para logs", () => {
  it("mascara e-mail sem expor usuário nem domínio", () => {
    const m = mascararEmail("felipe.silva@empresa.com.br");
    expect(m).toBe("f***@***.br");
    expect(m).not.toContain("silva");
    expect(m).not.toContain("empresa");
  });

  it("e-mail inválido vira ***", () => {
    expect(mascararEmail("sem-arroba")).toBe("***");
    expect(mascararEmail("")).toBe("***");
  });

  it("mascara telefone mostrando só os 2 últimos dígitos", () => {
    expect(mascararTelefone("+5581988514775")).toBe("***75");
    expect(mascararTelefone("12")).toBe("***");
  });

  it("mascara IP", () => {
    expect(mascararIp("200.150.10.20")).toBe("200.150.x.x");
    expect(mascararIp("2001:db8:85a3::8a2e:370:7334")).toBe("2001:db8:****");
    expect(mascararIp(null)).toBe("sem-ip");
  });
});
