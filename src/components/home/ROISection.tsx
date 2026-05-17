import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, MessageSquare, TrendingDown, Zap, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ROIBenefit {
  statistic: string;
  countTo: number | null;
  countPrefix: string;
  countSuffix: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconHex: string;
  iconBg: string;
  statColor: string;
}

const benefits: ROIBenefit[] = [
  {
    statistic: "até 30%",
    countTo: 30,
    countPrefix: "até ",
    countSuffix: "%",
    category: "TEMPO ECONOMIZADO",
    title: "Mais tempo da equipe para o que importa",
    description: "",
    icon: Clock,
    iconHex: "#22d3ee",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    statColor: "gradient-text",
  },
  {
    statistic: "até 3x",
    countTo: 3,
    countPrefix: "até ",
    countSuffix: "x",
    category: "MAIS LEADS QUALIFICADOS",
    title: "Pipeline comercial alimentado por IA",
    description: "",
    icon: TrendingUp,
    iconHex: "#facc15",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    statColor: "gradient-text-gold",
  },
  {
    statistic: "100%",
    countTo: 100,
    countPrefix: "",
    countSuffix: "%",
    category: "COBERTURA 24/7",
    title: "Atendimento que não fecha para o fim de semana",
    description: "",
    icon: MessageSquare,
    iconHex: "#a78bfa",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    statColor: "gradient-text-gold",
  },
  {
    statistic: "20–40%",
    countTo: null,
    countPrefix: "",
    countSuffix: "",
    category: "REDUÇÃO DE CUSTO",
    title: "Operação mais enxuta sem demitir",
    description: "",
    icon: TrendingDown,
    iconHex: "#34d399",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    statColor: "gradient-text",
  },
  {
    statistic: "5 a 8h",
    countTo: null,
    countPrefix: "",
    countSuffix: "",
    category: "GANHO POR COLABORADOR / SEMANA",
    title: "Cada colaborador ganha quase um dia útil",
    description: "",
    icon: Zap,
    iconHex: "#22d3ee",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    statColor: "gradient-text",
  },
  {
    statistic: "1 semana",
    countTo: null,
    countPrefix: "",
    countSuffix: "",
    category: "ONBOARDING ACELERADO",
    title: "Novo colaborador produtivo em 1 semana",
    description: "",
    icon: BookOpen,
    iconHex: "#facc15",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    statColor: "gradient-text-gold",
  },
];

function StatNumber({ benefit }: { benefit: ROIBenefit }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || benefit.countTo === null) return;
    const dur = 1400;
    let start = 0;
    const target = benefit.countTo;
    const raf = (t: number) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [started, benefit.countTo]);

  return (
    <p
      ref={ref}
      className={`text-2xl font-black leading-none mb-1.5 tabular-nums ${benefit.statColor}`}
    >
      {benefit.countTo !== null
        ? `${benefit.countPrefix}${value}${benefit.countSuffix}`
        : benefit.statistic}
    </p>
  );
}

export function ROISection() {
  return (
    <section className="py-16 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent/80">Resultados reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            O que sua empresa ganha em{" "}
            <span className="gradient-text-gold">90 dias</span>{" "}
            com IA aplicada
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Ganhos mensurados em estudos de mercado — replicáveis quando o projeto é desenhado certo desde o começo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.category} animation="fade-up" delay={index * 60}>
              <div className="card-glass rounded-2xl p-5 h-full group hover:-translate-y-0.5">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${benefit.iconBg} border flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-4 h-4" style={{ color: benefit.iconHex }} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 leading-tight">{benefit.category}</p>
                </div>
                <StatNumber benefit={benefit} />
                <p className="text-xs text-white/55 leading-snug">{benefit.title}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link to="/diagnostico?origem=roi-home">
            <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group">
              Quero entender meu potencial de ROI
              <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
