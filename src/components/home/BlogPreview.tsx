import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, BookOpen, Lightbulb, Clock } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Zap,
    label: "Automação de Processos",
    description: "Fluxos, agentes e sistemas que eliminam trabalho manual das operações.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: TrendingUp,
    label: "Cases & Resultados",
    description: "Histórias reais de clientes com ROI verificável e métricas concretas.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: Lightbulb,
    label: "IA Aplicada a Negócios",
    description: "O que realmente muda no mercado — sem hype, com aplicação prática.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">
              <Clock className="w-3 h-3 text-white/35" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/35">Em construção</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Blog &{" "}
              <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Conteúdo prático sobre IA aplicada a negócios — sem hype, sem jargão. Em breve.
            </p>
          </div>
          <Link to="/blog" className="flex-shrink-0">
            <Button
              variant="outline"
              className="border-white/12 text-white/40 hover:border-white/25 hover:text-white/70 hover:bg-white/4 transition-[border-color,color,background-color] duration-200 group"
            >
              Acessar blog
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>

        {/* Category placeholders */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {categories.map((cat, i) => (
            <AnimatedSection key={cat.label} animation="fade-up" delay={i * 80}>
              <div className="relative flex flex-col h-full rounded-2xl border border-white/8 bg-white/3 p-7 overflow-hidden">

                {/* "Em breve" veil */}
                <div className="absolute inset-0 bg-[#060D1A]/50 backdrop-blur-[1px] flex items-center justify-center rounded-2xl z-10 pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20 border border-white/8 px-3 py-1 rounded-full">
                    Em breve
                  </span>
                </div>

                <div className={`w-10 h-10 rounded-xl ${cat.bg} border flex items-center justify-center mb-5`}>
                  <cat.icon className={`w-5 h-5 ${cat.color}`} />
                </div>

                <h3 className="font-bold text-white text-base mb-2">{cat.label}</h3>
                <p className="text-sm text-white/40 leading-relaxed mb-5">{cat.description}</p>

                {/* Skeleton lines simulando texto de artigo */}
                <div className="space-y-2 mt-auto">
                  <div className="h-1.5 bg-white/5 rounded-full w-full" />
                  <div className="h-1.5 bg-white/5 rounded-full w-4/5" />
                  <div className="h-1.5 bg-white/5 rounded-full w-3/5" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Notificação via WhatsApp */}
        <AnimatedSection className="text-center">
          <p className="text-white/25 text-sm mb-4">
            Quer ser notificado quando publicarmos os primeiros artigos?
          </p>
          <a
            href={`https://wa.me/5581988514775?text=${encodeURIComponent("Olá! Quero ser avisado quando o blog da IntelliX.AI publicar novos artigos.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-white/12 text-white/45 hover:border-primary/35 hover:text-primary hover:bg-primary/5 transition-[border-color,color,background-color] duration-200 group"
            >
              <BookOpen className="mr-2 w-4 h-4" />
              Me avise quando publicar
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </AnimatedSection>

      </div>
    </section>
  );
}
