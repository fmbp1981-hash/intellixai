import { Zap, Target, Clock, TrendingUp, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Tarefas repetitivas executadas automaticamente, liberando sua equipe para o que importa.",
  },
  {
    icon: Target,
    title: "Leads Qualificados",
    description: "Prospecção automatizada que entrega apenas oportunidades com real potencial de conversão.",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Chatbots inteligentes que respondem, qualificam e agendam mesmo fora do horário comercial.",
  },
  {
    icon: TrendingUp,
    title: "Escala sem Proporção",
    description: "Aumente a capacidade operacional sem aumentar proporcionalmente os custos.",
  },
  {
    icon: Shield,
    title: "Dados Centralizados",
    description: "Informações integradas em um só lugar, com dashboards claros para decisões rápidas.",
  },
  {
    icon: Headphones,
    title: "Interface Simples",
    description: "Tecnologia complexa nos bastidores, experiência simples para você e sua equipe.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que você <span className="gradient-text">ganha</span> com a IntelliX.AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sistemas que trabalham para você, não o contrário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="glass-card p-8 hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
