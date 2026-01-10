import { Zap, Target, Clock, TrendingUp, Shield, BarChart3, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Fluxos de trabalho automatizados que reduzem erros e aumentam a velocidade operacional.",
  },
  {
    icon: Target,
    title: "Qualificação de Leads",
    description: "Sistemas inteligentes que identificam e priorizam oportunidades de maior potencial.",
  },
  {
    icon: Clock,
    title: "Disponibilidade Contínua",
    description: "Atendimento automatizado que opera 24 horas, 7 dias por semana.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Infraestrutura que cresce junto com sua empresa sem aumento proporcional de custos.",
  },
  {
    icon: Shield,
    title: "Centralização de Dados",
    description: "Visão unificada das informações para tomada de decisões mais assertivas.",
  },
  {
    icon: BarChart3,
    title: "Métricas em Tempo Real",
    description: "Dashboards executivos com indicadores de performance atualizados continuamente.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Image - Technology/innovation context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-card/95" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Competências</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            O que a <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span> entrega
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções tecnológicas que transformam a operação das empresas, 
            gerando resultados mensuráveis e sustentáveis.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <AnimatedSection
              key={capability.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-background/60 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.15)] transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <capability.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
