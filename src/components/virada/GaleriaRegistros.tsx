import { useState, useEffect } from "react";
import { Calendar, MapPin, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { registrosVirada, type Midia } from "@/data/viradaRegistros";

interface GaleriaRegistrosProps {
  highlightId?: string;
}

export function GaleriaRegistros({ highlightId }: GaleriaRegistrosProps) {
  const [ativo, setAtivo] = useState<{ midias: Midia[]; index: number } | null>(null);

  const midiaAtual = ativo ? ativo.midias[ativo.index] : null;

  const navegar = (delta: number) => {
    setAtivo((prev) =>
      prev
        ? { ...prev, index: (prev.index + delta + prev.midias.length) % prev.midias.length }
        : prev
    );
  };

  return (
    <section className="py-24 bg-[#0A1525]">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Turmas realizadas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Registros da <span className="gradient-text-gold">Virada Inteligente</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Momentos reais das imersões conduzidas pela IntelliX.AI dentro das empresas.
          </p>
        </AnimatedSection>

        <div className="space-y-14">
          {registrosVirada.map((registro, ri) => (
            <AnimatedSection key={registro.id} animation="fade-up" delay={ri * 100}>
              <div id={registro.id} className="rounded-2xl border border-white/8 bg-white/4 p-6 md:p-8 scroll-mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {registro.cliente}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent">
                        {registro.formato}
                      </span>
                    </div>
                    <p className="text-sm text-white/55 max-w-2xl leading-relaxed">
                      {registro.descricao}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 text-xs text-white/45 flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent/70" />
                      {registro.data}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent/70" />
                      {registro.local}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {registro.midias.map((m, i) => (
                    <button
                      key={m.url}
                      type="button"
                      onClick={() => setAtivo({ midias: registro.midias, index: i })}
                      className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      <img
                        src={m.tipo === "video" ? m.poster ?? m.url : m.url}
                        alt={m.alt}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-[transform,opacity] duration-500"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-[#060D1A]/60 via-transparent to-transparent" />
                      {m.tipo === "video" && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-11 h-11 rounded-full bg-accent/85 flex items-center justify-center shadow-lg">
                            <Play className="w-5 h-5 text-accent-foreground ml-0.5" />
                          </span>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Dialog open={!!ativo} onOpenChange={(open) => !open && setAtivo(null)}>
        <DialogContent className="max-w-4xl bg-[#060D1A] border-white/10 p-2 md:p-4">
          {midiaAtual && (
            <div className="relative">
              {midiaAtual.tipo === "video" ? (
                <video
                  src={midiaAtual.url}
                  poster={midiaAtual.poster}
                  controls
                  autoPlay
                  className="w-full max-h-[75vh] rounded-lg bg-black"
                />
              ) : (
                <img
                  src={midiaAtual.url}
                  alt={midiaAtual.alt}
                  className="w-full max-h-[75vh] object-contain rounded-lg"
                />
              )}

              <p className="text-xs text-white/50 mt-3 px-1 pr-10">{midiaAtual.alt}</p>

              {ativo && ativo.midias.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Anterior"
                    onClick={() => navegar(-1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-accent hover:border-accent/40 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Próxima"
                    onClick={() => navegar(1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white/80 hover:text-accent hover:border-accent/40 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
