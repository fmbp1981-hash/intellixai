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
    <section className="py-24 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent/80">Resultados reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que sua empresa ganha em{" "}
            <span className="gradient-text-gold">90 dias</span>{" "}
            com IA aplicada
          </h2>
          <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed">
            Não é promessa de palco. São os ganhos que empresas reais têm conseguido extrair com IA bem aplicada — mensurados em estudos de mercado e replicáveis no seu negócio quando o projeto é desenhado certo desde o começo.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.category} animation="fade-up" delay={index * 80}>
              <div className="flex flex-col h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-[transform,box-shadow,border-color] duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-11 h-11 rounded-xl ${benefit.iconBg} border flex items-center justify-center flex-shrink-0`}>
                    <benefit.icon className="w-5 h-5" style={{ color: benefit.iconHex }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{benefit.category}</p>
                    <p className={`text-3xl font-black leading-none ${benefit.statColor}`}>{benefit.statistic}</p>
                  </div>
                </div>
                <h3 className="font-bold text-white text-sm mb-3 leading-snug">{benefit.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <p className="text-xs text-white/25 max-w-3xl mx-auto mb-8 leading-relaxed">
            Métricas baseadas em benchmarks do McKinsey Global Institute (2024), Boston Consulting Group (AI at Work 2025) e Harvard Business Review. Cada empresa terá ganhos diferentes conforme processo, maturidade digital e disciplina de implementação.
          </p>
          <p className="text-base font-semibold text-white/70 mb-5">
            Quanto a IA pode gerar de retorno no seu caso específico?
          </p>
          <Link to="/diagnostico?origem=roi-home">
            <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group">
              Quero entender meu potencial de ROI
              <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
