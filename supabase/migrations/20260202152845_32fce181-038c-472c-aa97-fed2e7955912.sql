-- Criar tabela blog_posts
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT DEFAULT 'Geral',
  author TEXT DEFAULT 'IntelliX.AI',
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Politica: leitura publica apenas para posts publicados
CREATE POLICY "Posts publicados sao visiveis publicamente"
ON public.blog_posts
FOR SELECT
USING (published = true);

-- Indice para buscas por slug
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Indice para ordenacao por data de publicacao
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);

-- Funcao para atualizar o updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_posts_updated_at();