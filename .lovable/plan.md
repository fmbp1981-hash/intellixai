

# Plano: Infraestrutura de Blog com Integracao para Automacao

## Visao Geral

Este plano cria toda a infraestrutura necessaria para um blog que pode ser alimentado automaticamente por uma automacao externa (n8n, Make, Zapier, etc.) que gera conteudo via IA.

---

## Arquitetura da Solucao

```text
+-------------------+     +------------------+     +------------------+
|   Automacao       |     |   Supabase       |     |   Frontend       |
|   (n8n/Make/etc)  | --> |   Edge Function  | --> |   React App      |
|   + IA Geradora   |     |   + Database     |     |   Blog Pages     |
+-------------------+     +------------------+     +------------------+
        |                         |                        |
        v                         v                        v
   Gera conteudo           Armazena posts            Exibe artigos
   via webhook             com seguranca             dinamicamente
```

---

## Componentes a Serem Criados

### 1. Backend (Supabase)

**Tabela `blog_posts`:**

| Coluna | Tipo | Descricao |
|--------|------|-----------|
| id | uuid | Identificador unico |
| title | text | Titulo do artigo |
| slug | text | URL amigavel (unico) |
| excerpt | text | Resumo para preview |
| content | text | Conteudo completo (Markdown) |
| cover_image | text | URL da imagem de capa |
| category | text | Categoria do artigo |
| author | text | Nome do autor |
| published | boolean | Se esta publicado |
| published_at | timestamp | Data de publicacao |
| created_at | timestamp | Data de criacao |
| updated_at | timestamp | Data de atualizacao |

**Edge Function `create-blog-post`:**
- Endpoint para receber posts da automacao
- Validacao de API Key para seguranca
- Geracao automatica de slug a partir do titulo
- Suporte a criacao e atualizacao de posts

### 2. Frontend (React)

**Novos Arquivos:**

| Arquivo | Descricao |
|---------|-----------|
| `src/types/blog.ts` | Tipos TypeScript para posts |
| `src/hooks/useBlogPosts.ts` | Hook com React Query para buscar posts |
| `src/components/home/BlogPreview.tsx` | Preview de 3 posts na home |
| `src/pages/Blog.tsx` | Pagina listando todos os posts |
| `src/pages/BlogPost.tsx` | Pagina de artigo individual |

**Arquivos Modificados:**

| Arquivo | Modificacao |
|---------|-------------|
| `src/App.tsx` | Adicionar rotas /blog e /blog/:slug |
| `src/pages/Index.tsx` | Adicionar componente BlogPreview |
| `src/components/layout/Header.tsx` | Adicionar link para Blog no menu |

---

## Fluxo da Automacao

```text
1. Automacao gera conteudo com IA (titulo, resumo, artigo completo)
         |
         v
2. Envia POST para Edge Function com API Key
         |
         v
3. Edge Function valida e salva no banco
         |
         v
4. Frontend busca posts via React Query
         |
         v
5. Usuarios visualizam novos artigos automaticamente
```

---

## Detalhes Tecnicos

### Estrutura da Tabela (SQL)

```sql
create table blog_posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  cover_image text,
  category text default 'Geral',
  author text default 'IntelliX.AI',
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Habilitar RLS
alter table blog_posts enable row level security;

-- Politica: leitura publica apenas para posts publicados
create policy "Posts publicados sao visiveis" on blog_posts
  for select using (published = true);

-- Indice para buscas por slug
create index idx_blog_posts_slug on blog_posts(slug);

-- Indice para ordenacao por data
create index idx_blog_posts_published_at on blog_posts(published_at desc);
```

### Edge Function (Webhook)

A Edge Function recebera requisicoes POST com o seguinte formato:

```json
{
  "title": "Como a IA esta transformando vendas B2B",
  "excerpt": "Descubra como empresas estao usando IA para...",
  "content": "# Introducao\n\nO mercado B2B...",
  "cover_image": "https://images.unsplash.com/...",
  "category": "Tendencias",
  "author": "IntelliX.AI",
  "published": true
}
```

**Seguranca:**
- Validacao de header `Authorization: Bearer <API_KEY>`
- API Key armazenada como secret no Supabase
- Apenas a automacao autorizada pode criar posts

### Hook React Query

```typescript
// Busca posts publicados com cache e revalidacao
const { data: posts, isLoading } = useQuery({
  queryKey: ['blog-posts'],
  queryFn: fetchPublishedPosts,
  staleTime: 5 * 60 * 1000, // 5 minutos
});
```

### Renderizacao de Markdown

Os artigos serao escritos em Markdown e renderizados no frontend usando a biblioteca `react-markdown` para formatacao rica (titulos, listas, codigo, links, etc.).

---

## Categorias Sugeridas

| Categoria | Descricao |
|-----------|-----------|
| Automacao | Dicas e tutoriais sobre automacao de processos |
| Tendencias | Novidades e previsoes sobre IA e tecnologia |
| Cases | Historias de sucesso e estudos de caso |
| Tutoriais | Guias praticos passo a passo |
| Mercado | Analises de mercado e oportunidades |

---

## Ordem de Implementacao

```text
Etapa 1: Habilitar Lovable Cloud (Supabase)
         - Configurar backend do projeto

Etapa 2: Criar tabela blog_posts
         - Estrutura de dados
         - Politicas de seguranca (RLS)

Etapa 3: Criar Edge Function create-blog-post
         - Endpoint para receber posts
         - Validacao de API Key
         - Geracao de slug

Etapa 4: Criar tipos e hooks no frontend
         - src/types/blog.ts
         - src/hooks/useBlogPosts.ts

Etapa 5: Criar componentes de UI
         - BlogPreview.tsx (home)
         - Blog.tsx (listagem)
         - BlogPost.tsx (artigo individual)

Etapa 6: Integrar no app
         - Rotas no App.tsx
         - Link no Header.tsx
         - Preview na Index.tsx

Etapa 7: Instalar react-markdown
         - Dependencia para renderizar conteudo
```

---

## Integracao com Automacao

Apos a implementacao, a automacao podera enviar posts via HTTP:

```text
POST https://<project-ref>.supabase.co/functions/v1/create-blog-post

Headers:
  Authorization: Bearer <BLOG_API_KEY>
  Content-Type: application/json

Body:
  {
    "title": "Titulo do Artigo",
    "excerpt": "Resumo curto...",
    "content": "Conteudo em Markdown...",
    "category": "Automacao",
    "published": true
  }
```

A API Key sera configurada como um secret no Supabase, e voce podera usar essa mesma chave na sua automacao (n8n, Make, etc.) para autenticar as requisicoes.

---

## Resultado Final

Apos a implementacao:

1. Pagina inicial tera preview dos 3 ultimos artigos
2. Pagina /blog listara todos os artigos publicados
3. Pagina /blog/:slug mostrara artigo completo
4. Menu tera link para Blog
5. Edge Function pronta para receber posts via webhook
6. Automacao pode publicar artigos automaticamente

