// Cliente Neon somente do servidor. A URL do banco contém senha e NUNCA pode
// ir para o bundle do navegador: por isso a variável não tem prefixo VITE_ e
// este arquivo só é importado dentro de handlers de server functions.
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | undefined;

export function getSql(): NeonQueryFunction<false, false> {
  if (_sql) return _sql;
  const url = process.env["NEON_DATABASE_URL"];
  if (!url) {
    throw new Error(
      "NEON_DATABASE_URL não está definida no ambiente do servidor.",
    );
  }
  _sql = neon(url);
  return _sql;
}
