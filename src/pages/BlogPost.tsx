import { useState, useEffect, useMemo, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Copy,
  Check,
  Linkedin,
  Twitter,
  Hash,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Layout } from "@/components/layout/Layout";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ─── Utility Functions ───────────────────────────────────────────

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function extractTableOfContents(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*/g, "").replace(/\*/g, "").trim();
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    items.push({ id, text, level: match[1].length });
  }
  return items;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// ─── Reading Progress Hook ───────────────────────────────────────

function useReadingProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const article = document.getElementById("article-content");
      if (!article) return;
      const rect = article.getBoundingClientRect();
      const articleTop = rect.top + window.scrollY;
      const articleHeight = rect.height;
      const scrolled = window.scrollY - articleTop;
      const percentage = Math.min(
        100,
        Math.max(0, (scrolled / (articleHeight - window.innerHeight)) * 100)
      );
      setProgress(percentage);
    }

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}

// ─── Share Buttons ───────────────────────────────────────────────

function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://intellixai.lovable.app/blog/${slug}`;

  const copyLink = useCallback(async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground uppercase tracking-wider mr-1 hidden sm:inline">
        Compartilhar
      </span>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={copyLink}
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>{copied ? "Copiado!" : "Copiar link"}</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </TooltipTrigger>
        <TooltipContent>LinkedIn</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </TooltipTrigger>
        <TooltipContent>Twitter</TooltipContent>
      </Tooltip>
    </div>
  );
}

// ─── Table of Contents ───────────────────────────────────────────

function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav className="glass-card p-5 rounded-xl sticky top-28">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        Neste artigo
      </h4>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "toc-link",
                item.level === 3 && "toc-link-h3",
                activeId === item.id && "active"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ─── Blog Post Component ─────────────────────────────────────────

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = useBlogPost(slug || "");
  const { data: relatedPosts } = useBlogPosts(4);
  const progress = useReadingProgress();

  const otherPosts = relatedPosts
    ?.filter((p) => p.slug !== slug)
    .slice(0, 3);

  const readingTime = useMemo(
    () => (post ? estimateReadingTime(post.content) : 0),
    [post]
  );

  const toc = useMemo(
    () => (post ? extractTableOfContents(post.content) : []),
    [post]
  );

  const markdownComponents = useMemo<Components>(() => {
    let paragraphCount = 0;

    return {
      h2: ({ children }) => {
        const text = String(children);
        const id = slugify(text);
        return (
          <h2 id={id} className="group relative scroll-mt-24">
            <a
              href={`#${id}`}
              className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Link para ${text}`}
            >
              <Hash className="w-5 h-5 text-primary/50" />
            </a>
            {children}
          </h2>
        );
      },

      h3: ({ children }) => {
        const text = String(children);
        const id = slugify(text);
        return (
          <h3 id={id} className="group relative scroll-mt-24">
            <a
              href={`#${id}`}
              className="absolute -left-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label={`Link para ${text}`}
            >
              <Hash className="w-4 h-4 text-primary/50" />
            </a>
            {children}
          </h3>
        );
      },

      p: ({ children }) => {
        const childArray = Array.isArray(children) ? children : [children];
        const hasImage = childArray.some(
          (child: unknown) =>
            typeof child === "object" &&
            child !== null &&
            "type" in child &&
            (child as { type: unknown }).type === "img"
        );
        if (hasImage) {
          return <>{children}</>;
        }

        paragraphCount++;
        if (paragraphCount === 1) {
          return <p className="editorial-drop-cap">{children}</p>;
        }
        return <p>{children}</p>;
      },

      img: ({ src, alt }) => (
        <figure className="editorial-image-wrapper">
          <img
            src={src || ""}
            alt={alt || ""}
            className="rounded-xl shadow-lg shadow-primary/5"
            loading="lazy"
          />
          {alt && alt !== "" && (
            <figcaption className="editorial-caption">{alt}</figcaption>
          )}
        </figure>
      ),

      blockquote: ({ children }) => (
        <blockquote className="editorial-pull-quote">{children}</blockquote>
      ),

      hr: () => <div className="editorial-divider" />,

      ul: ({ children }) => <ul className="space-y-2 my-6">{children}</ul>,

      ol: ({ children }) => <ol className="space-y-2 my-6">{children}</ol>,

      li: ({ children }) => <li className="pl-1">{children}</li>,

      a: ({ href, children }) => {
        const isExternal = href?.startsWith("http");
        return (
          <a
            href={href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </a>
        );
      },
    };
  }, []);

  // ─── Loading State ───

  if (isLoading) {
    return (
      <Layout>
        <article className="pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Skeleton className="h-6 w-32 mb-8" />
            <div className="flex items-center justify-center gap-4 mb-6">
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-5 w-28" />
            </div>
            <Skeleton className="h-14 w-full mb-3" />
            <Skeleton className="h-14 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8" />
            <div className="flex items-center justify-between py-6 border-y border-border/50 mb-10">
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-9 w-9 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-80 w-full rounded-2xl mb-10" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>
        </article>
      </Layout>
    );
  }

  // ─── Error / Not Found ───

  if (error || !post) {
    return (
      <Layout>
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tag className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Artigo não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O artigo que você está procurando não existe ou foi removido.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para o Blog
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  // ─── Author initials ───

  const authorInitials =
    post.author
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "IX";

  // ─── Render ───

  return (
    <Layout>
      <Helmet>
        <title>{post.title} | IntelliX.AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        {post.cover_image && (
          <meta property="og:image" content={post.cover_image} />
        )}
        {post.published_at && (
          <meta
            property="article:published_time"
            content={post.published_at}
          />
        )}
        {post.author && (
          <meta property="article:author" content={post.author} />
        )}
        {post.category && (
          <meta property="article:section" content={post.category} />
        )}
        <link
          rel="canonical"
          href={`https://intellixai.lovable.app/blog/${post.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.cover_image && (
          <meta name="twitter:image" content={post.cover_image} />
        )}
      </Helmet>

      {/* Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* ── Article Header ── */}
          <header className="max-w-3xl mx-auto mb-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              {post.category && (
                <Badge
                  variant="secondary"
                  className="bg-primary/15 text-primary border-0"
                >
                  {post.category}
                </Badge>
              )}
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {readingTime} min de leitura
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground/80 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          {/* ── Author Bar + Share ── */}
          <div className="max-w-3xl mx-auto flex items-center justify-between py-6 border-y border-border/50 mb-10">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {authorInitials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-sm">
                  {post.author || "IntelliX.AI"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.published_at
                    ? format(
                        new Date(post.published_at),
                        "d 'de' MMMM 'de' yyyy",
                        { locale: ptBR }
                      )
                    : ""}
                </p>
              </div>
            </div>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* ── Cover Image ── */}
          {post.cover_image && (
            <div className="max-w-5xl mx-auto mb-12">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/10"
              />
            </div>
          )}

          {/* ── Content + Optional TOC Sidebar ── */}
          <div className="max-w-5xl mx-auto">
            <div
              className={cn(
                "grid gap-12",
                toc.length >= 3
                  ? "lg:grid-cols-[1fr_240px]"
                  : "max-w-3xl mx-auto"
              )}
            >
              {/* Article Body */}
              <div id="article-content" className="editorial-prose min-w-0">
                <ReactMarkdown components={markdownComponents}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* TOC Sidebar (large screens only) */}
              {toc.length >= 3 && (
                <aside className="hidden lg:block">
                  <TableOfContents items={toc} />
                </aside>
              )}
            </div>
          </div>

          {/* ── Author Bio Card ── */}
          <div className="max-w-3xl mx-auto mt-16">
            <Separator className="mb-10 bg-border/50" />
            <div className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row items-start gap-6">
              <Avatar className="w-16 h-16 border-2 border-primary/20 flex-shrink-0">
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                  {authorInitials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Escrito por
                </p>
                <p className="font-display font-bold text-lg mb-2">
                  {post.author || "IntelliX.AI"}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Especialista em Inteligência Artificial e Automação na
                  IntelliX.AI. Compartilhando insights sobre transformação
                  digital e inovação para impulsionar negócios.
                </p>
              </div>
            </div>
          </div>

          {/* ── Related Posts ── */}
          {otherPosts && otherPosts.length > 0 && (
            <div className="max-w-5xl mx-auto mt-20">
              <Separator className="mb-12 bg-border/50" />
              <h2 className="font-display text-2xl font-bold mb-8">
                Continue lendo
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {otherPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    {relatedPost.cover_image && (
                      <div className="relative h-44 overflow-hidden rounded-xl mb-4">
                        <img
                          src={relatedPost.cover_image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>
                    )}
                    {relatedPost.category && (
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedPost.category}
                      </Badge>
                    )}
                    <h3 className="font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    {relatedPost.published_at && (
                      <p className="text-xs text-muted-foreground">
                        {format(
                          new Date(relatedPost.published_at),
                          "d MMM yyyy",
                          { locale: ptBR }
                        )}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
