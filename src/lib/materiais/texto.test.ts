import { describe, expect, it } from "vitest";
import { escaparHtml, extrairIp, ipValido, separarDescricao } from "./texto";

describe("texto", () => {
  it("escapa HTML", () => {
    expect(escaparHtml(`<script>"a" & 'b'</script>`)).toBe(
      "&lt;script&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/script&gt;",
    );
  });

  it("separa resumo e tópicos da descrição", () => {
    expect(
      separarDescricao("Intro do guia.\n- Tópico 1\n* Tópico 2\n• Tópico 3"),
    ).toEqual({
      resumo: "Intro do guia.",
      topicos: ["Tópico 1", "Tópico 2", "Tópico 3"],
    });
    expect(separarDescricao(null)).toEqual({ resumo: "", topicos: [] });
  });

  it("extrai IP priorizando o cabeçalho da Cloudflare", () => {
    const headers: Record<string, string> = {
      "cf-connecting-ip": "200.1.2.3",
      "x-forwarded-for": "10.0.0.1, 10.0.0.2",
    };
    expect(extrairIp((n) => headers[n])).toBe("200.1.2.3");
    expect(
      extrairIp((n) => ({ "x-forwarded-for": "10.0.0.1, 10.0.0.2" })[n]),
    ).toBe("10.0.0.1");
  });

  it("descarta IP inválido (não quebra a coluna inet)", () => {
    expect(extrairIp(() => "nao-e-ip")).toBeNull();
    expect(extrairIp(() => undefined)).toBeNull();
    expect(ipValido("999.1.1.1")).toBe(false);
    expect(ipValido("2001:db8::1")).toBe(true);
    expect(ipValido("::1")).toBe(true);
  });
});
