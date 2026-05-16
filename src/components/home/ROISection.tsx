import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, MessageSquare, TrendingDown, Zap, BookOpen } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { LucideIcon } from "lucide-react";

interface ROIBenefit {
  statistic: string;
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
    category: "TEMPO ECONOMIZADO",
    title: "Mais tempo da equipe para o que importa",
    description: "Equipes treinadas em IA recuperam até 30% do tempo gasto em tarefas operacionais repetitivas — relatórios, e-mails, atas, planilhas. Tempo que volta para venda, atendimento e decisão estratégica.",
    icon: Clock,
    iconHex: "#22d3ee",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    statColor: "gradient-text",
  },
  {
    statistic: "até 3x",
    category: "MAIS LEADS QUALIFICADOS",
    title: "Pipeline comercial alimentado por IA",
    description: "Sistemas de prospecção e qualificação automática com IA podem entregar até 3x mais leads pré-qualificados para a equipe comercial, sem aumentar headcount. O time fecha. A IA encontra.",
    icon: TrendingUp,
    iconHex: "#facc15",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    statColor: "gradient-text-gold",
  },
  {
    statistic: "100%",
    category: "COBERTURA 24/7",
    title: "Atendimento que não fecha para o fim de semana",
    description: "IA conversacional bem treinada cobre 100% do horário fora do expediente — qualifica lead, agenda reunião, responde dúvida. Vendas que aconteciam só na segunda-feira agora acontecem na madrugada de sábado.",
    icon: MessageSquare,
    iconHex: "#a78bfa",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    statColor: "gradient-text-gold",
  },
  {
    statistic: "20–40%",
    category: "REDUÇÃO DE CUSTO",
    title: "Operação mais enxuta sem demitir",
    description: "Automação com IA reduz tipicamente 20 a 40% do custo operacional em áreas como atendimento, faturamento e governança. Não substitui pessoa — devolve pessoa para o que dá retorno.",
    icon: TrendingDown,
    iconHex: "#34d399",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    statColor: "gradient-text",
  },
  {
    statistic: "5 a 8h",
    category: "GANHO POR COLABORADOR / SEMANA",
    title: "Cada colaborador ganha quase um dia útil por semana",
    description: "Colaboradores treinados na Virada Inteligente relatam ganho médio de 5 a 8 horas por semana. Em uma equipe de 10 pessoas, isso é quase 80h/semana — duas pessoas inteiras de capacidade extra.",
    icon: Zap,
    iconHex: "#22d3ee",
    iconBg: "bg-cyan-400/10 border-cyan-400/20",
    statColor: "gradient-text",
  },
  {
    statistic: "1 semana",
    category: "ONBOARDING ACELERADO",
    title: "Novo colaborador produtivo em 1 semana",
    description: "Bases de conhecimento inteligentes reduzem o tempo de onboarding de 30–60 dias para 7–10 dias. O novato chega e já encontra resposta sem incomodar o time.",
    icon: BookOpen,
    iconHex: "#facc15",
    iconBg: "bg-yellow-400/10 border-yellow-400/20",
    statColor: "gradient-text-gold",
  },
];

export function ROISection() {
  return (
    <section className="py-16 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-5">
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
              <div className="p-5 rounded-2xl border border-white/8 bg-white/4 hover:-translate-y-0.5 hover:border-white/15 transition-[transform,border-color] duration-300 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${benefit.iconBg} border flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-4 h-4" style={{ color: benefit.iconHex }} />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/35 leading-tight">{benefit.category}</p>
                </div>
                <p className={`text-2xl font-black leading-none mb-1.5 ${benefit.statColor}`}>{benefit.statistic}</p>
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
