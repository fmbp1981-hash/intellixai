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
  /** Validade do link, em segundos. */
  validadeSegundos: number;
}
