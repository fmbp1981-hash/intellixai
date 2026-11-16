// Normalização de telefone brasileiro para E.164 (+55DDNNNNNNNNN).

const DDDS_VALIDOS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
  37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64,
  65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
  89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

/**
 * Converte um telefone brasileiro digitado livremente em E.164.
 * Aceita "(81) 98851-4775", "81988514775", "+55 81 98851-4775", "0 81 98851-4775".
 * Retorna null se não for um número BR válido (fixo de 8 dígitos ou celular de 9 começando com 9).
 *
 * O código do país 55 só é removido quando o número tem 12 ou 13 dígitos começando com 55:
 * com 10 ou 11 dígitos, "55" é o DDD do Rio Grande do Sul.
 */
export function normalizarTelefoneBr(entrada: string): string | null {
  if (typeof entrada !== "string") return null;
  let digitos = entrada.replace(/\D/g, "");

  if (
    (digitos.length === 12 || digitos.length === 13) &&
    digitos.startsWith("55")
  ) {
    digitos = digitos.slice(2);
  } else if (
    (digitos.length === 11 || digitos.length === 12) &&
    digitos.startsWith("0")
  ) {
    // prefixo de longa distância nacional (0 + DDD)
    digitos = digitos.slice(1);
  }

  if (digitos.length !== 10 && digitos.length !== 11) return null;

  const ddd = Number(digitos.slice(0, 2));
  if (!DDDS_VALIDOS.has(ddd)) return null;

  const assinante = digitos.slice(2);
  if (assinante.length === 9 && !assinante.startsWith("9")) return null;
  if (assinante.length === 8 && !/^[2-5]/.test(assinante)) return null;

  return `+55${digitos}`;
}
