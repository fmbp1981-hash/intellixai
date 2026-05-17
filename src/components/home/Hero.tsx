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

      {/* ── Orbs animados ── */}
      <div className="animate-orb-1 absolute -top-20 left-[10%] w-[700px] h-[700px] bg-primary/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="animate-orb-2 absolute bottom-0 right-[5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="animate-orb-3 absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.18) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* ── Perspective grid ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-60%",
            right: "-60%",
            height: "100%",
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.07) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            transform: "perspective(480px) rotateX(72deg)",
            transformOrigin: "bottom center",
            maskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 25%, transparent 100%)",
          }}
        />
        {/* Glow center line */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px"
          style={{
            height: "60%",
            background: "linear-gradient(to top, hsl(var(--primary)/0.35), transparent)",
          }}
        />
      </div>

      {/* ── Radial pulse rings ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${i * 260}px`,
              height: `${i * 260}px`,
              border: "1px solid hsl(var(--primary) / 0.07)",
              animation: `ring-expand 6s ease-out ${i * 1.8}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Vinheta top / bottom ── */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060D1A] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060D1A] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-center">

            {/* ── Copy ── */}
            <div className="flex flex-col gap-0">

              <AnimatedSection animation="fade-right" delay={0}>
                {/* Badge glassmorphism */}
                <div className="flex w-fit items-center gap-2.5 rounded-full px-4 py-2 mb-8 border border-accent/25 bg-accent/8 backdrop-blur-md shadow-[0_0_20px_hsl(38_91%_58%/0.08)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
                  <span className="text-sm font-semibold text-accent/90 tracking-wide">IA aplicada a resultado de negócio</span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={80}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6 text-white">
                  Sua empresa não precisa de{" "}
                  <span className="gradient-text">mais IA.</span>
                  <br />
                  Precisa de mais{" "}
                  <span className="gradient-text-gold">resultado com IA.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={180}>
                <p className="text-base md:text-lg text-white/50 mb-9 leading-relaxed max-w-xl">
                  A{" "}
                  <strong className="text-white/80 font-semibold">
                    <span className="gradient-text-gold">IntelliX</span>
                    <span className="gradient-text">.AI</span>
                  </strong>{" "}
                  desenha, constrói e implementa soluções de IA sob medida — que aumentam vendas, reduzem custo operacional e devolvem tempo para a equipe focar no que importa. Sem hype. Com método.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <Link to="/diagnostico">
                    <Button
                      size="lg"
                      className="animate-cta-glow bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl hover:shadow-[0_0_55px_hsl(38_91%_58%/0.7)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 group"
                    >
                      Agendar diagnóstico gratuito
                      <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
                    </Button>
                  </Link>
                  <Link to="/virada-inteligente">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/12 text-white/65 hover:border-primary/45 hover:text-primary hover:bg-primary/6 font-semibold px-8 py-6 rounded-xl transition-[border-color,color,background-color] duration-200 backdrop-blur-sm"
                    >
                      Conhecer a Virada Inteligente
                    </Button>
                  </Link>
                </div>

                <p className="text-sm text-white/28 tracking-wide">
                  Atendimento consultivo · Sem compromisso · Resposta em até 24h
                </p>
              </AnimatedSection>
            </div>

            {/* ── Pilares ── */}
            <AnimatedSection animation="fade-left" delay={200} className="hidden lg:flex flex-col gap-3">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 p-4 rounded-2xl border ${item.bg} hover:bg-white/4 transition-[background-color,border-color] duration-300 backdrop-blur-sm`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white mb-1 tracking-tight">{item.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
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
