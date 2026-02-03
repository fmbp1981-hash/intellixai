import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { data: posts, isLoading, error } = useBlogPosts();

  return (
    <Layout>
      <Helmet>
        <title>Blog & Insights | Intellix - Automação e IA</title>
        <meta 
          name="description" 
          content="Conteúdo exclusivo sobre automação, inteligência artificial e transformação digital para impulsionar seu negócio." 
        />
        <meta property="og:title" content="Blog & Insights | Intellix" />
        <meta 
          property="og:description" 
          content="Conteúdo exclusivo sobre automação, inteligência artificial e transformação digital para impulsionar seu negócio." 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/blog" />
      </Helmet>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Blog</span> & Insights
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Conteúdo exclusivo sobre automação, inteligência artificial e transformação digital para impulsionar seu negócio.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-2xl overflow-hidden border border-primary/10">
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
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                Erro ao carregar artigos. Tente novamente mais tarde.
              </p>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !error && (!posts || posts.length === 0) && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tag className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Nenhum artigo publicado</h3>
              <p className="text-muted-foreground">
                Em breve teremos conteúdo incrível para você!
              </p>
            </div>
          )}

          {/* Posts Grid */}
          {!isLoading && posts && posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] hover:-translate-y-1"
                >
                  {post.cover_image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      {post.category && (
                        <span className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    {!post.cover_image && post.category && (
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {post.author && (
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                      )}
                      {post.published_at && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.published_at).toLocaleDateString("pt-BR")}
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
