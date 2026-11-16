// Repository de materiais: único ponto que fala com o Supabase (service role).
import type { SupabaseClient } from "@supabase/supabase-js";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type {
  MateriaisDatabase,
  MaterialLeadInsert,
  MaterialRow,
} from "./materiais.db-types";

const BUCKET = "materiais";

function db(): SupabaseClient<MateriaisDatabase> {
  // Cast único: o cliente gerado ainda não conhece as tabelas novas.
  return supabaseAdmin as unknown as SupabaseClient<MateriaisDatabase>;
}

type MaterialPublicoRow = Pick<
  MaterialRow,
  "slug" | "titulo" | "descricao" | "capa_url"
>;

export async function listarMateriaisAtivos(): Promise<MaterialPublicoRow[]> {
  const { data, error } = await db()
    .from("materiais")
    .select("slug, titulo, descricao, capa_url")
    .eq("ativo", true)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Falha ao listar materiais: ${error.message}`);
  return data ?? [];
}

export async function buscarMaterialPublico(
  slug: string,
): Promise<MaterialPublicoRow | null> {
  const { data, error } = await db()
    .from("materiais")
    .select("slug, titulo, descricao, capa_url")
    .eq("slug", slug)
    .eq("ativo", true)
    .maybeSingle();
  if (error) throw new Error(`Falha ao buscar material: ${error.message}`);
  return data;
}

/** Uso interno do servidor: inclui id e arquivo_path. Nunca devolver ao navegador. */
export async function buscarMaterialParaEntrega(
  slug: string,
): Promise<Pick<MaterialRow, "id" | "titulo" | "arquivo_path"> | null> {
  const { data, error } = await db()
    .from("materiais")
    .select("id, titulo, arquivo_path")
    .eq("slug", slug)
    .eq("ativo", true)
    .maybeSingle();
  if (error) throw new Error(`Falha ao buscar material: ${error.message}`);
  return data;
}

export async function contarCadastrosDoIpDesde(
  ip: string,
  desdeIso: string,
): Promise<number> {
  const { count, error } = await db()
    .from("material_leads")
    .select("id", { count: "exact", head: true })
    .eq("ip", ip)
    .gte("created_at", desdeIso);
  if (error)
    throw new Error(`Falha ao contar cadastros por IP: ${error.message}`);
  return count ?? 0;
}

export async function existeCadastroRecente(
  materialId: string,
  emailNormalizado: string,
  desdeIso: string,
): Promise<boolean> {
  const { count, error } = await db()
    .from("material_leads")
    .select("id", { count: "exact", head: true })
    .eq("material_id", materialId)
    .eq("email", emailNormalizado)
    .gte("created_at", desdeIso);
  if (error)
    throw new Error(`Falha ao verificar cadastro recente: ${error.message}`);
  return (count ?? 0) > 0;
}

export async function inserirCadastro(lead: MaterialLeadInsert): Promise<void> {
  const { error } = await db().from("material_leads").insert(lead);
  if (error)
    throw new Error(
      `Falha ao gravar cadastro: ${error.code ?? ""} ${error.message}`,
    );
}

export async function criarLinkAssinado(
  arquivoPath: string,
  validadeSegundos: number,
): Promise<string> {
  const { data, error } = await db()
    .storage.from(BUCKET)
    .createSignedUrl(arquivoPath, validadeSegundos, { download: true });
  if (error || !data)
    throw new Error(
      `Falha ao gerar link assinado: ${error?.message ?? "sem dados"}`,
    );
  return data.signedUrl;
}
