// Formato padrão de resposta IntelliX: { data, meta } no sucesso, { error: { code, message } } no erro.

export type CodigoErro =
  | "VALIDACAO"
  | "ROBO_DETECTADO"
  | "LIMITE_EXCEDIDO"
  | "MATERIAL_NAO_ENCONTRADO"
  | "ERRO_INTERNO";

export interface RespostaSucesso<T, M = Record<string, unknown>> {
  data: T;
  meta?: M;
}

export interface RespostaErro {
  error: {
    code: CodigoErro;
    message: string;
    campos?: Record<string, string>;
  };
}

export type Resposta<T, M = Record<string, unknown>> =
  RespostaSucesso<T, M> | RespostaErro;

export function sucesso<T, M = Record<string, unknown>>(
  data: T,
  meta?: M,
): RespostaSucesso<T, M> {
  return meta === undefined ? { data } : { data, meta };
}

export function falha(
  code: CodigoErro,
  message: string,
  campos?: Record<string, string>,
): RespostaErro {
  return campos
    ? { error: { code, message, campos } }
    : { error: { code, message } };
}

export function ehErro<T, M>(r: Resposta<T, M>): r is RespostaErro {
  return "error" in r;
}
