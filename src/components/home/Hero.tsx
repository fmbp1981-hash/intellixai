import { Link } from "react-router-dom";
import { ArrowRight, Target, Lightbulb, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Cada projeto começa com a pergunta que importa: qual número da sua empresa vai melhorar. Não vendemos tecnologia. Vendemos ROI mensurável.",
    color: "#22d3ee",
    bg: "bg-cyan-400/8 border-cyan-400/20",
  },
  {
    icon: Lightbulb,
    title: "Inovação Aplicada",
    description: "IA de última geração com método de implementação consolidado. Sem experimento, sem promessa vazia. Apenas o que funciona no seu setor.",
    color: "#facc15",
    bg: "bg-yellow-400/8 border-yellow-400/20",
  },
  {
    icon: Building2,
    title: "Parceria Contínua",
    description: "Não somos fornecedor de projeto. Somos parceiro de transformação. Acompanhamento, métrica clara e ajuste fino mês a mês.",
    color: "#a78bfa",
    bg: "bg-violet-500/8 border-violet-500/20",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#060D1A]">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top gradient */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#060D1A] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-center">

            {/* Left — Copy */}
            <div className="flex flex-col gap-0">

              <AnimatedSection animation="fade-right" delay={0}>
                <div className="flex w-fit items-center gap-2 bg-white/5 border border-accent/30 rounded-full px-4 py-2 mb-7 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-sm font-semibold text-accent/90">IA aplicada a resultado de negócio</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={80}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">
                  Sua empresa não precisa de{" "}
                  <span className="gradient-text">mais IA.</span>
                  <br />
                  Precisa de mais{" "}
                  <span className="gradient-text-gold">resultado com IA.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={180}>
                <p className="text-base md:text-lg text-white/55 mb-8 leading-relaxed max-w-xl">
                  A{" "}
                  <strong className="text-white/80">
                    <span className="gradient-text-gold">IntelliX</span>
                    <span className="gradient-text">.AI</span>
                  </strong>{" "}
                  desenha, constrói e implementa soluções de IA sob medida — que aumentam vendas, reduzem custo operacional e devolvem tempo para a equipe focar no que importa. Sem hype. Com método.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <Link to="/diagnostico">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.45)] hover:shadow-[0_0_45px_hsl(var(--accent)/0.65)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 group"
                    >
                      Agendar diagnóstico gratuito
                      <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
                    </Button>
                  </Link>
                  <Link to="/virada-inteligente">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/15 text-white/70 hover:border-primary/50 hover:text-primary hover:bg-primary/6 font-semibold px-8 py-6 rounded-xl transition-[border-color,color,background-color] duration-200"
                    >
                      Conhecer a Virada Inteligente
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-white/30">
                  Atendimento consultivo · Sem compromisso · Resposta em até 24h
                </p>
              </AnimatedSection>
            </div>

            {/* Right — Pillars */}
            <AnimatedSection animation="fade-left" delay={200} className="hidden lg:flex flex-col gap-3">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 p-4 rounded-xl border ${item.bg} hover:border-opacity-40 transition-[border-color] duration-300`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
