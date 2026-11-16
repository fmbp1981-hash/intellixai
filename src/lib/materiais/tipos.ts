// Tipos públicos (seguros para o navegador). Nunca incluem arquivo_path.

export interface MaterialPublico {
  slug: string;
  titulo: string;
  descricao: string | null;
  capaUrl: string | null;
}

export interface SolicitacaoAtendida {
  downloadUrl: string;
  emailEnviado: boolean;
}

export interface SolicitacaoMeta {
  /** true quando o mesmo e-mail já tinha pedido este material há pouco (não gravou de novo). */
  duplicado: boolean;
  /** Validade do link, em segundos. */
  validadeSegundos: number;
}
