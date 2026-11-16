import { useQuery } from "@tanstack/react-query";
import {
  listarPostsPublicados,
  obterPostPublicado,
} from "@/functions/blog.functions";

export function useBlogPosts(limit?: number) {
  return useQuery({
    queryKey: ["blog-posts", limit],
    queryFn: async () => {
      const posts = await listarPostsPublicados();
      return limit ? posts.slice(0, limit) : posts;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => obterPostPublicado({ data: { slug } }),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}
