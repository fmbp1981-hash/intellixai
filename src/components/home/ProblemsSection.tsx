import { AlertTriangle, Clock, Users, TrendingDown, XCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const problems = [
  {
    icon: Clock,
    title: "Processos Manuais",
    description: "Tarefas repetitivas consomem horas que poderiam ser investidas em crescimento estratégico.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Atendimento Lento",
    description: "Clientes esperam respostas imediatas, mas sua equipe não consegue dar conta da demanda.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: TrendingDown,
    title: "Leads Perdidos",
    description: "Oportunidades escapam por falta de follow-up ou qualificação adequada.",
    color: "from-rose-500 to-red-500",
  },
  {
    icon: AlertTriangle,
    title: "Dados Desorganizados",
    description: "Informações espalhadas em planilhas e sistemas que não conversam entre si.",
    color: "from-amber-500 to-yellow-500",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-destructive/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-destructive/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-destructive/15 border border-destructive/30 mb-8">
            <XCircle className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-sm font-bold text-destructive">Problemas Comuns</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Esses problemas estão <span className="text-destructive">travando</span> seu crescimento?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você reconhece algum desses desafios, sua empresa está <span className="text-destructive font-semibold">deixando dinheiro na mesa</span>.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <AnimatedSection
              key={problem.title}
              animation="scale"
              delay={index * 100}
            >
              <div className="glass-card p-8 hover-lift group h-full border border-destructive/10 hover:border-destructive/30 transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <problem.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-destructive transition-colors">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
