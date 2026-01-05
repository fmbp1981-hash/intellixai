import { Zap, Target, Clock, TrendingUp, Shield, Headphones, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Tarefas repetitivas executadas automaticamente, liberando sua equipe para o que importa.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Target,
    title: "Leads Qualificados",
    description: "Prospecção automatizada que entrega apenas oportunidades com real potencial de conversão.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "Chatbots inteligentes que respondem, qualificam e agendam mesmo fora do horário comercial.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: TrendingUp,
    title: "Escala sem Proporção",
    description: "Aumente a capacidade operacional sem aumentar proporcionalmente os custos.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: Shield,
    title: "Dados Centralizados",
    description: "Informações integradas em um só lugar, com dashboards claros para decisões rápidas.",
    gradient: "from-rose-500 to-red-400",
  },
  {
    icon: Headphones,
    title: "Interface Simples",
    description: "Tecnologia complexa nos bastidores, experiência simples para você e sua equipe.",
    gradient: "from-indigo-500 to-violet-400",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Benefícios</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que você <span className="gradient-text">ganha</span> com a IntelliX.AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistemas que trabalham <span className="text-primary font-semibold">para você</span>, não o contrário.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedSection
              key={benefit.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="glass-card p-10 hover-lift group h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`} style={{ width: '72px', height: '72px' }}>
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-2xl mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
