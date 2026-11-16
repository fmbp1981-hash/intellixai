import { z } from "zod";
import { normalizarTelefoneBr } from "./telefone";

const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Campos que a pessoa preenche no formulário (validação no navegador e no servidor). */
export const formularioMaterialSchema = z.object({
  nome: z
    .string({ required_error: "Informe seu nome." })
    .trim()
    .min(2, "O nome precisa ter pelo menos 2 letras.")
    .max(80, "O nome pode ter no máximo 80 caracteres."),
  whatsapp: z
    .string({ required_error: "Informe seu WhatsApp." })
    .trim()
    .refine((v) => normalizarTelefoneBr(v) !== null, {
      message:
        "Informe um WhatsApp válido com DDD, por exemplo (81) 98851-4775.",
    }),
  email: z
    .string({ required_error: "Informe seu e-mail." })
    .trim()
    .max(254, "E-mail muito longo.")
    .email("Informe um e-mail válido."),
  consentimentoMaterial: z.boolean().refine((v) => v === true, {
    message:
      "Para receber o material, marque que concorda com a Política de Privacidade.",
  }),
  consentimentoNovidades: z.boolean(),
});

export type FormularioMaterial = z.infer<typeof formularioMaterialSchema>;

/** Payload completo enviado para a server function. */
export const solicitarMaterialSchema = formularioMaterialSchema.extend({
  slug: z
    .string()
    .trim()
    .min(1)
    .max(120)
    .regex(SLUG_REGEX, "Material inválido."),
  // honeypot: campo invisível; humanos deixam vazio
  site: z.string().max(0, "Requisição inválida."),
  turnstileToken: z.string().max(4096).optional(),
  origem: z.string().trim().max(200).optional(),
});

export type SolicitarMaterialEntrada = z.input<typeof solicitarMaterialSchema>;
export type SolicitarMaterialValidado = z.output<
  typeof solicitarMaterialSchema
>;

export const slugSchema = z.string().trim().min(1).max(120).regex(SLUG_REGEX);

/** Achata os erros do zod em { campo: mensagem } (primeira mensagem de cada campo). */
export function errosPorCampo(erro: z.ZodError): Record<string, string> {
  const campos: Record<string, string> = {};
  for (const issue of erro.issues) {
    const chave = issue.path.join(".") || "_";
    if (!(chave in campos)) campos[chave] = issue.message;
  }
  return campos;
}
