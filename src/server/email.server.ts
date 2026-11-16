// Envio do e-mail com o link do material via API REST da Resend.
import { escaparHtml } from "@/lib/materiais/texto";
import { CONTATO_PRIVACIDADE } from "@/lib/materiais/constantes";

const RESEND_URL = "https://api.resend.com/emails";
const REMETENTE = "IntelliX.AI <materiais@intellixai.com.br>";

export interface EmailMaterial {
  para: string;
  nome: string;
  tituloMaterial: string;
  downloadUrl: string;
}

export function montarEmailMaterial(dados: EmailMaterial): {
  subject: string;
  html: string;
  text: string;
} {
  const primeiroNome = dados.nome.trim().split(/\s+/)[0] ?? "";
  const nome = escaparHtml(primeiroNome);
  const titulo = escaparHtml(dados.tituloMaterial);
  const url = escaparHtml(dados.downloadUrl);
  const subject = `Seu material: ${dados.tituloMaterial}`;
  const html = `<!doctype html>
<html lang="pt-BR"><body style="margin:0;padding:24px;background:#0A1525;font-family:Arial,Helvetica,sans-serif;color:#E6EDF5">
  <div style="max-width:560px;margin:0 auto;background:#0F1E33;border-radius:16px;padding:32px">
    <p style="font-size:16px;margin:0 0 16px">Olá, ${nome}!</p>
    <p style="font-size:16px;margin:0 0 24px">Aqui está o material que você pediu: <strong>${titulo}</strong>.</p>
    <p style="margin:0 0 24px"><a href="${url}" style="display:inline-block;background:#F5A623;color:#0A1525;text-decoration:none;font-weight:bold;padding:14px 24px;border-radius:12px">Baixar material</a></p>
    <p style="font-size:13px;color:#9FB0C3;margin:0 0 8px">O link é válido por 1 hora. Se expirar, peça de novo na página do material.</p>
    <p style="font-size:13px;color:#9FB0C3;margin:0">Você recebeu este e-mail porque pediu o material no site da IntelliX.AI. Dúvidas ou pedidos sobre seus dados: ${escaparHtml(CONTATO_PRIVACIDADE)}.</p>
  </div>
</body></html>`;
  const text = [
    `Olá, ${primeiroNome}!`,
    "",
    `Aqui está o material que você pediu: ${dados.tituloMaterial}.`,
    `Baixar: ${dados.downloadUrl}`,
    "",
    "O link é válido por 1 hora. Se expirar, peça de novo na página do material.",
    `Dúvidas ou pedidos sobre seus dados: ${CONTATO_PRIVACIDADE}.`,
  ].join("\n");
  return { subject, html, text };
}

/** Retorna true se a Resend aceitou o envio. Nunca lança: falha de e-mail não derruba o pedido. */
export async function enviarEmailMaterial(
  dados: EmailMaterial,
): Promise<boolean> {
  const chave = process.env["RESEND_API_KEY"];
  if (!chave) {
    console.warn("[materiais] RESEND_API_KEY ausente: e-mail não enviado.");
    return false;
  }
  const { subject, html, text } = montarEmailMaterial(dados);
  try {
    const resposta = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${chave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REMETENTE,
        to: [dados.para],
        subject,
        html,
        text,
      }),
    });
    if (!resposta.ok) {
      console.error(`[materiais] Resend respondeu HTTP ${resposta.status}`);
      return false;
    }
    return true;
  } catch (erro) {
    console.error(
      "[materiais] Falha ao chamar a Resend",
      erro instanceof Error ? erro.message : erro,
    );
    return false;
  }
}
