// Verificação do Cloudflare Turnstile no servidor.
const SITEVERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type ResultadoTurnstile = "valido" | "invalido" | "desativado";

export async function verificarTurnstile(
  token: string | undefined,
  ip: string | null,
): Promise<ResultadoTurnstile> {
  const segredo = process.env["TURNSTILE_SECRET_KEY"];
  if (!segredo) {
    console.warn(
      "[materiais] TURNSTILE_SECRET_KEY ausente: verificação anti-robô DESATIVADA (aceitável só em desenvolvimento).",
    );
    return "desativado";
  }
  if (!token) return "invalido";

  const corpo = new FormData();
  corpo.append("secret", segredo);
  corpo.append("response", token);
  if (ip) corpo.append("remoteip", ip);

  try {
    const resposta = await fetch(SITEVERIFY_URL, {
      method: "POST",
      body: corpo,
    });
    if (!resposta.ok) {
      console.error(`[materiais] Turnstile respondeu HTTP ${resposta.status}`);
      return "invalido";
    }
    const json = (await resposta.json()) as {
      success?: boolean;
      "error-codes"?: string[];
    };
    if (json.success === true) return "valido";
    console.warn(
      `[materiais] Turnstile recusou o token: ${(json["error-codes"] ?? []).join(",")}`,
    );
    return "invalido";
  } catch (erro) {
    console.error(
      "[materiais] Falha ao consultar o Turnstile",
      erro instanceof Error ? erro.message : erro,
    );
    return "invalido";
  }
}
