import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .trim();
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validar API Key
    const authHeader = req.headers.get("Authorization");
    const apiKey = Deno.env.get("BLOG_API_KEY");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(
        JSON.stringify({ error: "Authorization header required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const providedKey = authHeader.replace("Bearer ", "");
    if (providedKey !== apiKey) {
      return new Response(
        JSON.stringify({ error: "Invalid API key" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Criar cliente Supabase com service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parsear body
    const body = await req.json();
    const { title, excerpt, content, cover_image, category, author, published, slug: providedSlug } = body;

    // Validar campos obrigatórios
    if (!title || !excerpt || !content) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: title, excerpt, content" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Gerar slug a partir do título se não fornecido
    let slug = providedSlug || generateSlug(title);

    // Verificar se slug já existe
    const { data: existingPost } = await supabase
      .from("blog_posts")
      .select("id, slug")
      .eq("slug", slug)
      .single();

    if (existingPost) {
      // Atualizar post existente
      const { data, error } = await supabase
        .from("blog_posts")
        .update({
          title,
          excerpt,
          content,
          cover_image: cover_image || null,
          category: category || "Geral",
          author: author || "IntelliX.AI",
          published: published ?? false,
          published_at: published ? new Date().toISOString() : null,
        })
        .eq("id", existingPost.id)
        .select()
        .single();

      if (error) {
        console.error("Error updating post:", error);
        return new Response(
          JSON.stringify({ error: "Failed to update post", details: error.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      return new Response(
        JSON.stringify({ message: "Post updated successfully", post: data }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Criar novo post
    const { data, error } = await supabase
      .from("blog_posts")
      .insert({
        title,
        slug,
        excerpt,
        content,
        cover_image: cover_image || null,
        category: category || "Geral",
        author: author || "IntelliX.AI",
        published: published ?? false,
        published_at: published ? new Date().toISOString() : null,
      })
      .select()
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return new Response(
        JSON.stringify({ error: "Failed to create post", details: error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "Post created successfully", post: data }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
