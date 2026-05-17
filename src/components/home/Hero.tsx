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

function GlobeWireframe() {
  const cyan = "#22d3ee";
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={cyan} stopOpacity="0.12" />
          <stop offset="100%" stopColor={cyan} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="globeHighlight" cx="35%" cy="30%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient glow behind */}
      <circle cx="250" cy="250" r="240" fill="url(#globeGlow)" />

      {/* Outer circle */}
      <circle cx="250" cy="250" r="230" stroke={cyan} strokeWidth="0.8" opacity="0.55" />

      {/* Latitude lines */}
      <ellipse cx="250" cy="78"  rx="152" ry="44" stroke={cyan} strokeWidth="0.6" opacity="0.35" />
      <ellipse cx="250" cy="135" rx="199" ry="59" stroke={cyan} strokeWidth="0.6" opacity="0.42" />
      <ellipse cx="250" cy="193" rx="222" ry="67" stroke={cyan} strokeWidth="0.65" opacity="0.48" />
      <ellipse cx="250" cy="250" rx="230" ry="69" stroke={cyan} strokeWidth="0.8" opacity="0.55" />
      <ellipse cx="250" cy="307" rx="222" ry="67" stroke={cyan} strokeWidth="0.65" opacity="0.48" />
      <ellipse cx="250" cy="365" rx="199" ry="59" stroke={cyan} strokeWidth="0.6" opacity="0.42" />
      <ellipse cx="250" cy="422" rx="152" ry="44" stroke={cyan} strokeWidth="0.6" opacity="0.35" />

      {/* Longitude lines */}
      <ellipse cx="250" cy="250" rx="18"  ry="230" stroke={cyan} strokeWidth="0.6" opacity="0.38" />
      <ellipse cx="250" cy="250" rx="115" ry="230" stroke={cyan} strokeWidth="0.6" opacity="0.38" transform="rotate(30 250 250)" />
      <ellipse cx="250" cy="250" rx="193" ry="230" stroke={cyan} strokeWidth="0.6" opacity="0.38" transform="rotate(60 250 250)" />
      <ellipse cx="250" cy="250" rx="230" ry="18"  stroke={cyan} strokeWidth="0.6" opacity="0.38" />
      <ellipse cx="250" cy="250" rx="193" ry="230" stroke={cyan} strokeWidth="0.6" opacity="0.38" transform="rotate(120 250 250)" />
      <ellipse cx="250" cy="250" rx="115" ry="230" stroke={cyan} strokeWidth="0.6" opacity="0.38" transform="rotate(150 250 250)" />

      {/* Pole dots */}
      <circle cx="250" cy="20"  r="4" fill={cyan} opacity="0.7" />
      <circle cx="250" cy="480" r="4" fill={cyan} opacity="0.5" />

      {/* Specular highlight (top-left arc) */}
      <path d="M 110 145 A 230 230 0 0 1 390 145" stroke="white" strokeWidth="1.2" opacity="0.18" fill="none" strokeLinecap="round" />

      {/* Inner highlight fill */}
      <circle cx="250" cy="250" r="229" fill="url(#globeHighlight)" />

      {/* Floating node dots on surface */}
      <circle cx="340" cy="155" r="3" fill={cyan} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="170" cy="200" r="2.5" fill={cyan} opacity="0.55">
        <animate attributeName="opacity" values="0.55;0.9;0.55" dur="3.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="390" cy="290" r="2" fill={cyan} opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.85;0.5" dur="4.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="210" cy="360" r="2.5" fill={cyan} opacity="0.55">
        <animate attributeName="opacity" values="0.55;0.95;0.55" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="330" r="2" fill={cyan} opacity="0.45">
        <animate attributeName="opacity" values="0.45;0.8;0.45" dur="3.8s" repeatCount="indefinite" />
      </circle>

      {/* Connection lines between nodes */}
      <line x1="340" y1="155" x2="390" y2="290" stroke={cyan} strokeWidth="0.5" opacity="0.25" />
      <line x1="170" y1="200" x2="210" y2="360" stroke={cyan} strokeWidth="0.5" opacity="0.2" />
      <line x1="340" y1="155" x2="170" y2="200" stroke={cyan} strokeWidth="0.5" opacity="0.2" />
      <line x1="390" y1="290" x2="300" y2="330" stroke={cyan} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

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
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.22) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* ── Globe wireframe — centro-direita ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "-8%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "520px",
          height: "520px",
          opacity: 0.38,
          filter: "drop-shadow(0 0 40px hsl(192 100% 42% / 0.2))",
        }}
      >
        <GlobeWireframe />
      </div>

      {/* Mobile: globe centered, lower opacity */}
      <div
        className="absolute pointer-events-none lg:hidden"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "340px",
          height: "340px",
          opacity: 0.12,
        }}
      >
        <GlobeWireframe />
      </div>

      {/* ── Vinheta top / bottom ── */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#060D1A] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060D1A] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-center">

            {/* ── Copy ── */}
            <div className="flex flex-col gap-0">

              <AnimatedSection animation="fade-right" delay={0}>
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
            <AnimatedSection animation="fade-left" delay={200} className="hidden lg:flex flex-col gap-3 relative z-10">
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
