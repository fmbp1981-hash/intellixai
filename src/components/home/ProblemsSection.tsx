import { Clock, Users, TrendingDown, Database, AlertCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const challenges = [
  {
    icon: Clock,
    title: "Processos Manuais",
    description: "Operações repetitivas que consomem recursos e limitam a escalabilidade do negócio.",
  },
  {
    icon: Users,
    title: "Capacidade de Atendimento",
    description: "Demanda crescente que excede a capacidade da equipe em horário comercial.",
  },
  {
    icon: TrendingDown,
    title: "Conversão de Oportunidades",
    description: "Leads qualificados que não avançam por falta de acompanhamento sistemático.",
  },
  {
    icon: Database,
    title: "Integração de Dados",
    description: "Informações fragmentadas em múltiplos sistemas sem visão unificada.",
  },
];

export function ProblemsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image - Business analytics/data context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-background/92" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-6 backdrop-blur-sm">
            <AlertCircle className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Desafios Empresariais</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Desafios que impactam a eficiência operacional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Identificamos os principais obstáculos que empresas enfrentam na busca por maior 
            produtividade e competitividade no mercado atual.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <AnimatedSection
              key={challenge.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <challenge.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">{challenge.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{challenge.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
