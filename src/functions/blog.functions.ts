import { createServerFn } from "@tanstack/react-start";
import type { BlogPost } from "@/types/blog";

// Wrappers de server function: o corpo do handler roda só no servidor.
// O acesso ao Neon é importado dinamicamente para nunca entrar no bundle do cliente.

export const listarPostsPublicados = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPost[]> => {
    const { buscarPostsPublicados } = await import("@/server/blog.server");
    return buscarPostsPublicados();
  },
);

export const obterPostPublicado = createServerFn({ method: "GET" })
  .validator((input: { slug: string }) => {
    const slug = typeof input?.slug === "string" ? input.slug.trim() : "";
    if (!slug || slug.length > 200) throw new Error("Slug inválido.");
    return { slug };
  })
  .handler(async ({ data }): Promise<BlogPost | null> => {
    const { buscarPostPorSlug } = await import("@/server/blog.server");
    return buscarPostPorSlug(data.slug);
  });
