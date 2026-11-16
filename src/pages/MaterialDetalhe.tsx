import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { FormularioMaterialCard } from "@/components/materiais/FormularioMaterial";
import type { MaterialPublico } from "@/lib/materiais/tipos";
import { separarDescricao } from "@/lib/materiais/texto";

export default function MaterialDetalhe({
  material,
}: {
  material: MaterialPublico;
}) {
  const { resumo, topicos } = separarDescricao(material.descricao);

  return (
    <Layout>
      <section className="py-12 sm:py-20 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/materiais"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Todos os materiais
            </Link>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4">
                  Material gratuito
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  {material.titulo}
                </h1>
                {material.capaUrl ? (
                  <img
                    src={material.capaUrl}
                    alt={`Capa do material ${material.titulo}`}
                    className="mb-6 w-full rounded-2xl border border-white/10 object-cover"
                  />
                ) : null}
                {resumo ? (
                  <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
                    {resumo}
                  </p>
                ) : null}
                {topicos.length > 0 ? (
                  <div>
                    <h2 className="text-base font-bold text-white mb-4">
                      O que você vai aprender
                    </h2>
                    <ul className="space-y-3">
                      {topicos.map((t) => (
                        <li key={t} className="flex items-start gap-3">
                          <CheckCircle2
                            className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-white/70 text-sm sm:text-base">
                            {t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <FormularioMaterialCard
                  slug={material.slug}
                  titulo={material.titulo}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
