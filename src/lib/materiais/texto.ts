// Utilidades de texto para a página e o e-mail de materiais.

/** Escapa HTML para inserir texto do usuário com segurança no corpo do e-mail. */
export function escaparHtml(texto: string): string {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Separa a descrição em parágrafo de abertura e tópicos ("o que você vai aprender").
 * Linhas iniciadas por "-", "*" ou "•" viram tópicos; o resto vira texto corrido.
 */
export function separarDescricao(descricao: string | null | undefined): {
  resumo: string;
  topicos: string[];
} {
  const linhas = (descricao ?? "")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const topicos: string[] = [];
  const resumo: string[] = [];
  for (const linha of linhas) {
    const m = /^[-*•]\s+(.+)$/.exec(linha);
    if (m?.[1]) topicos.push(m[1]);
    else resumo.push(linha);
  }
  return { resumo: resumo.join(" "), topicos };
}

/** Lê o IP do cliente de um conjunto de cabeçalhos (Cloudflare primeiro). Retorna null se inválido. */
export function extrairIp(
  obterCabecalho: (nome: string) => string | null | undefined,
): string | null {
  const candidatos = [
    obterCabecalho("cf-connecting-ip"),
    obterCabecalho("x-real-ip"),
    obterCabecalho("x-forwarded-for")?.split(",")[0],
  ];
  for (const c of candidatos) {
    const ip = c?.trim();
    if (ip && ipValido(ip)) return ip;
  }
  return null;
}

export function ipValido(ip: string): boolean {
  if (ip.length > 45) return false;
  const v4 =
    /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  if (v4.test(ip)) return true;
  // IPv6: só hex e ":" (com no máximo um "::"), e um IPv4 opcional no fim
  if (!/^[0-9a-fA-F:.]+$/.test(ip) || !ip.includes(":")) return false;
  if ((ip.match(/::/g) ?? []).length > 1) return false;
  const grupos = ip.split(":");
  return (
    grupos.length >= 3 &&
    grupos.length <= 8 &&
    grupos.every((g) => g.length <= 4 || g.includes("."))
  );
}
