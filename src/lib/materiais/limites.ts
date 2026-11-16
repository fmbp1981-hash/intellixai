// Decisão pura de rate limit e deduplicação (testável sem banco).
import { LIMITE_POR_IP } from "./constantes";

export interface SinaisAbuso {
  /** Cadastros gravados por este IP na janela de limite. */
  cadastrosRecentesDoIp: number;
  /** Já existe cadastro com o mesmo e-mail para o mesmo material na janela de dedupe. */
  jaSolicitouRecentemente: boolean;
}

export type DecisaoLimite =
  { acao: "permitir" } | { acao: "bloquear" } | { acao: "reaproveitar" };

/**
 * - bloquear: IP atingiu o limite de cadastros na janela.
 * - reaproveitar: mesmo e-mail pediu o mesmo material há pouco; entrega o link de novo
 *   sem gravar outro cadastro e sem reenviar e-mail.
 * - permitir: segue o fluxo normal.
 */
export function decidirLimite(
  sinais: SinaisAbuso,
  limitePorIp = LIMITE_POR_IP,
): DecisaoLimite {
  if (sinais.jaSolicitouRecentemente) return { acao: "reaproveitar" };
  if (sinais.cadastrosRecentesDoIp >= limitePorIp) return { acao: "bloquear" };
  return { acao: "permitir" };
}

export function inicioDaJanela(agora: Date, janelaMs: number): string {
  return new Date(agora.getTime() - janelaMs).toISOString();
}
