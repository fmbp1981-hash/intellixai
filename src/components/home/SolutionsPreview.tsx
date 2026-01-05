import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, Settings, Globe, Puzzle, Sparkles, TrendingUp, Clock, Zap } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: Search,
    title: "Prospecção & Vendas",
    description: "Automatize a captura e qualificação de leads com IA. Agende reuniões automaticamente e aumente suas conversões.",
    benefits: ["Leads qualificados 24/7", "Agendamento automático", "+40% conversão"],
    gradient: "from-blue-500 to-cyan-400",
    shadowColor: "shadow-blue-500/30",
    bgGlow: "bg-blue-500/20",
  },
  {
    icon: MessageSquare,
    title: "Atendimento Inteligente",
    description: "Chatbots com IA que entendem contexto, respondem dúvidas e resolvem problemas sem intervenção humana.",
    benefits: ["Suporte 24 horas", "Respostas instantâneas", "-70% tempo espera"],
    gradient: "from-purple-500 to-pink-400",
    shadowColor: "shadow-purple-500/30",
    bgGlow: "bg-purple-500/20",
  },
  {
    icon: Settings,
    title: "Gestão & Operações",
    description: "Dashboards inteligentes e automação de processos internos. Tome decisões baseadas em dados em tempo real.",
    benefits: ["Dados em tempo real", "Processos automatizados", "+60% eficiência"],
    gradient: "from-orange-500 to-amber-400",
    shadowColor: "shadow-orange-500/30",
    bgGlow: "bg-orange-500/20",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites otimizados para conversão com IA integrada. Design moderno e foco em resultados mensuráveis.",
    benefits: ["SEO otimizado", "Alta conversão", "Design premium"],
    gradient: "from-green-500 to-emerald-400",
    shadowColor: "shadow-green-500/30",
    bgGlow: "bg-green-500/20",
  },
  {
    icon: Puzzle,
    title: "Soluções Sob Medida",
    description: "Desenvolvemos soluções personalizadas para desafios únicos do seu negócio com tecnologia de ponta.",
    benefits: ["100% personalizado", "Tecnologia de ponta", "Suporte dedicado"],
    gradient: "from-rose-500 to-pink-400",
    shadowColor: "shadow-rose-500/30",
    bgGlow: "bg-rose-500/20",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Nossas Soluções</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="gradient-text">Transforme seu negócio</span>
            <br />
            <span className="gradient-text-gold text-glow-gold">com Inteligência Artificial</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas e personalizadas para automatizar processos,
            aumentar vendas e revolucionar a experiência dos seus clientes.
          </p>
        </AnimatedSection>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={index}
              animation="scale"
              delay={index * 100}
              className={index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <div className={`group h-full glass-card p-8 rounded-3xl border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl ${solution.shadowColor} hover:-translate-y-3 relative overflow-hidden`}>
                {/* Gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.gradient}`} />
                
                {/* Background glow on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${solution.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.gradient} p-0.5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg ${solution.shadowColor}`}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                    <solution.icon className="w-10 h-10 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className={`w-7 h-7 rounded-full bg-gradient-to-r ${solution.gradient} flex items-center justify-center shadow-md`}>
                        {i === 0 && <TrendingUp className="w-4 h-4 text-white" />}
                        {i === 1 && <Clock className="w-4 h-4 text-white" />}
                        {i === 2 && <Zap className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to="/solucoes" 
                  className="inline-flex items-center gap-2 text-primary font-bold text-lg group/link hover:gap-4 transition-all"
                >
                  Saiba mais
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Main CTA */}
        <AnimatedSection animation="fade-up" delay={500} className="text-center">
          <Link to="/solucoes">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-cyan-400 to-primary hover:from-primary/90 hover:via-cyan-400/90 hover:to-primary/90 text-primary-foreground font-bold px-12 py-7 text-xl rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.7)] transition-all duration-300 hover:scale-105 group"
            >
              Ver todas as soluções
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
