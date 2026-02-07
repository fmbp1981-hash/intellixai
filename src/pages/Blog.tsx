import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Tag, Clock, User, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Layout } from "@/components/layout/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// ─── Utility ─────────────────────────────────────────────────────

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// ─── Blog Listing Page ───────────────────────────────────────────

const Blog = () => {
  const { data: posts, isLoading, error } = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    if (!posts) return [];
    const cats = posts
      .map((p) => p.category)
      .filter((c): c is string => c !== null && c !== "");
    return [...new Set(cats)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    if (!activeCategory) return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const featuredPost = filteredPosts[0] || null;
  const remainingPosts = filteredPosts.slice(1);

  return (
    <Layout>
      <Helmet>
        <title>Blog & Insights | IntelliX.AI - Automação e IA</title>
        <meta
          name="description"
          content="Conteúdo exclusivo sobre automação, inteligência artificial e transformação digital para impulsionar seu negócio."
        />
        <meta property="og:title" content="Blog & Insights | IntelliX.AI" />
        <meta
          property="og:description"
          content="Conteúdo exclusivo sobre automação, inteligência artificial e transformação digital para impulsionar seu negócio."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/blog" />
      </Helmet>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* ── Header ── */}
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Blog</span> & Insights
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Conteúdo exclusivo sobre automação, inteligência artificial e
              transformação digital para impulsionar seu negócio.
            </p>
          </div>

          {/* ── Category Filters ── */}
          {!isLoading && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              <button
                onClick={() => setActiveCategory(null)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === null
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
                      : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* ── Loading State ── */}
          {isLoading && (
            <div>
              {/* Hero skeleton */}
              <div className="grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden border border-primary/10 mb-12">
                <Skeleton className="h-64 md:h-80 w-full" />
                <div className="p-8 space-y-4">
                  <Skeleton className="h-6 w-24 rounded-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <div className="flex items-center gap-3 pt-4">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
              {/* Grid skeleton */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-card rounded-2xl overflow-hidden border border-primary/10"
                  >
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Error State ── */}
          {error && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                Erro ao carregar artigos. Tente novamente mais tarde.
              </p>
            </div>
          )}

          {/* ── Empty State ── */}
          {!isLoading && !error && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tag className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {activeCategory
                  ? `Nenhum artigo em "${activeCategory}"`
                  : "Nenhum artigo publicado"}
              </h3>
              <p className="text-muted-foreground">
                {activeCategory
                  ? "Tente outra categoria ou veja todos os artigos."
                  : "Em breve teremos conteúdo incrível para você!"}
              </p>
              {activeCategory && (
                <button
                  onClick={() => setActiveCategory(null)}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Ver todos os artigos
                </button>
              )}
            </div>
          )}

          {/* ── Featured / Hero Post ── */}
          {!isLoading && featuredPost && (
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block mb-12"
            >
              <div className="grid md:grid-cols-2 gap-0 bg-card rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                {/* Image */}
                {featuredPost.cover_image ? (
                  <div className="relative h-64 md:h-full min-h-[320px] overflow-hidden">
                    <img
                      src={featuredPost.cover_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-card/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-64 md:h-full min-h-[320px] bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                    <Tag className="w-16 h-16 text-primary/20" />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {featuredPost.category && (
                      <Badge className="bg-primary/15 text-primary border-0">
                        {featuredPost.category}
                      </Badge>
                    )}
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {estimateReadingTime(featuredPost.content)} min
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {featuredPost.author && (
                      <span className="flex items-center gap-2">
                        <Avatar className="w-7 h-7">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {featuredPost.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")
                              .slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        {featuredPost.author}
                      </span>
                    )}
                    {featuredPost.published_at && (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {format(
                          new Date(featuredPost.published_at),
                          "d MMM yyyy",
                          { locale: ptBR }
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* ── Remaining Posts Grid ── */}
          {!isLoading && remainingPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] hover:-translate-y-1"
                >
                  {post.cover_image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
                      <Tag className="w-10 h-10 text-primary/20" />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {post.category && (
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1 ml-auto">
                        <Clock className="w-3 h-3" />
                        {estimateReadingTime(post.content)} min
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/30">
                      {post.author && (
                        <span className="flex items-center gap-1.5">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                      )}
                      {post.published_at && (
                        <span className="ml-auto">
                          {format(
                            new Date(post.published_at),
                            "d MMM yyyy",
                            { locale: ptBR }
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
