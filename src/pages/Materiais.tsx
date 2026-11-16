import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import type { MaterialPublico } from "@/lib/materiais/tipos";
import { separarDescricao } from "@/lib/materiais/texto";

export default function Materiais({
  materiais,
}: {
  materiais: MaterialPublico[];
}) {
  return (
    <Layout>
      <section className="py-16 sm:py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                Materiais gratuitos
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-5">
              Materiais da <span className="gradient-text-gold">IntelliX</span>
              <span className="gradient-text">.AI</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed">
              Guias práticos sobre IA aplicada ao negócio. Escolha um, deixe seu
              contato e baixe na hora.
            </p>
          </div>

          {materiais.length === 0 ? (
            <p className="text-center text-white/50">
              Nenhum material disponível no momento. Volte em breve.
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {materiais.map((m) => {
                const { resumo } = separarDescricao(m.descricao);
                return (
                  <li key={m.slug}>
                    <Link
                      to="/materiais/$slug"
                      params={{ slug: m.slug }}
                      className="glass-card hover-lift flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {m.capaUrl ? (
                        <img
                          src={m.capaUrl}
                          alt=""
                          loading="lazy"
                          className="aspect-[16/9] w-full object-cover"
                        />
                      ) : null}
                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-lg font-bold text-white mb-2">
                          {m.titulo}
                        </h2>
                        {resumo ? (
                          <p className="text-sm text-white/55 leading-relaxed line-clamp-3 mb-4">
                            {resumo}
                          </p>
                        ) : null}
                        <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          Quero este material
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </Layout>
  );
}
