import { useQuery } from "@tanstack/react-query";
import { sql } from "@/integrations/neon/client";
import type { BlogPost } from "@/types/blog";

async function fetchPublishedPosts(): Promise<BlogPost[]> {
  const rows = await sql`
    SELECT id, title, slug, excerpt, content, cover_image, category,
           author, published, published_at, created_at, updated_at
    FROM blog_posts
    WHERE published = true
    ORDER BY published_at DESC
  `;
  return rows as BlogPost[];
}

async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const rows = await sql`
    SELECT id, title, slug, excerpt, content, cover_image, category,
           author, published, published_at, created_at, updated_at
    FROM blog_posts
    WHERE slug = ${slug} AND published = true
    LIMIT 1
  `;
  return (rows[0] as BlogPost) || null;
}

export function useBlogPosts(limit?: number) {
  return useQuery({
    queryKey: ["blog-posts", limit],
    queryFn: async () => {
      const posts = await fetchPublishedPosts();
      return limit ? posts.slice(0, limit) : posts;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => fetchPostBySlug(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
