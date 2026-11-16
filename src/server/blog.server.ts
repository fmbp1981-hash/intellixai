import { getSql } from "@/integrations/neon/client.server";
import type { BlogPost } from "@/types/blog";

export async function buscarPostsPublicados(): Promise<BlogPost[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, slug, excerpt, content, cover_image, category,
           author, published, published_at, created_at, updated_at
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC
  `;
  return rows as BlogPost[];
}

export async function buscarPostPorSlug(
  slug: string,
): Promise<BlogPost | null> {
  const sql = getSql();
  const rows = await sql`
    SELECT id, title, slug, excerpt, content, cover_image, category,
           author, published, published_at, created_at, updated_at
    FROM blog_posts
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `;
  return (rows[0] as BlogPost | undefined) ?? null;
}
