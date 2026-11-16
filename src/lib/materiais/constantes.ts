// Constantes compartilhadas (seguras para o navegador).

/** Versão da Política de Privacidade vigente. Gravada junto com cada cadastro. */
export const POLITICA_VERSAO = "2026-11-16";
export const POLITICA_DATA_EXTENSO = "16 de novembro de 2026";

export const CONTATO_PRIVACIDADE = "contato@intellixai.com.br";

/** Retenção dos cadastros de materiais, em meses. */
export const RETENCAO_MESES = 24;

/** Validade do link de download assinado, em segundos (1 hora). */
export const VALIDADE_LINK_SEGUNDOS = 60 * 60;

/**
 * Limites anti-abuso. Ajuste aqui se uma campanha gerar bloqueios indevidos.
 *
 * Limitações conhecidas (o limite é calculado consultando material_leads, sem cache/memória):
 * - só contam cadastros GRAVADOS: tentativas recusadas (validação, robô, limite) e pedidos
 *   repetidos não contam;
 * - pedido repetido do mesmo e-mail para o mesmo material (dentro de JANELA_DEDUPE_MS) não
 *   passa pelo limite por IP: devolve um novo link sem gravar nem reenviar e-mail;
 * - sem IP identificável na requisição, não há limite por IP (só o Turnstile e o dedupe);
 * - várias pessoas atrás do mesmo IP (rede móvel com NAT, Wi-Fi de empresa) dividem o limite;
 * - duas requisições simultâneas podem passar juntas (não há trava atômica).
 */
export const LIMITE_POR_IP = 5;
export const JANELA_LIMITE_MS = 10 * 60 * 1000;
export const JANELA_DEDUPE_MS = 10 * 60 * 1000;
