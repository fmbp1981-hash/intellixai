export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image: string | null;
  category: string | null;
  author: string | null;
  published: boolean | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}
