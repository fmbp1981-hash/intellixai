import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, Settings, Globe, Puzzle, Users, Send, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const solutions = [
  {
    icon: Search,
    title: "Prospecção & Vendas",
    description: "Automatize a captura e qualificação de leads com IA. Agende reuniões automaticamente e aumente suas conversões.",
    benefits: ["Leads qualificados 24/7", "Agendamento automático", "+40% conversão"],
  },
  {
    icon: MessageSquare,
    title: "Atendimento Inteligente",
    description: "Chatbots com IA que entendem contexto, respondem dúvidas e resolvem problemas sem intervenção humana.",
    benefits: ["Suporte 24 horas", "Respostas instantâneas", "-70% tempo espera"],
  },
  {
    icon: Users,
    title: "CRM Personalizado",
    description: "Sistema de gestão de relacionamento 100% adaptado ao fluxo de trabalho da sua empresa.",
    benefits: ["100% sob medida", "Automação inteligente", "Dashboard integrado"],
  },
  {
    icon: Send,
    title: "Disparador WhatsApp",
    description: "Plataforma de disparo em massa via API Oficial do WhatsApp com automações inteligentes.",
    benefits: ["API Oficial WhatsApp", "Disparo em massa", "Automação de campanhas"],
  },
  {
    icon: Settings,
    title: "Gestão & Operações",
    description: "Dashboards inteligentes e automação de processos internos com dados em tempo real.",
    benefits: ["Dados em tempo real", "Processos automatizados", "+60% eficiência"],
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Sites otimizados para conversão com IA integrada e design focado em resultados.",
    benefits: ["SEO otimizado", "Alta conversão", "Design premium"],
  },
  {
    icon: Puzzle,
    title: "Soluções Sob Medida",
    description: "Desenvolvemos soluções personalizadas para desafios únicos do seu negócio.",
    benefits: ["100% personalizado", "Tecnologia de ponta", "Suporte dedicado"],
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image - Team collaboration/business context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-background/98" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-6 backdrop-blur-sm">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Portfólio de Soluções</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Soluções desenvolvidas pela <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de soluções em inteligência artificial, 
            personalizadas para atender às necessidades específicas de cada cliente.
          </p>
        </AnimatedSection>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 60}
            >
              <div className="group h-full bg-card/70 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.15)] transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Main CTA */}
        <AnimatedSection animation="fade-up" delay={400} className="text-center">
          <Link to="/solucoes">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 rounded-lg transition-all duration-300 group"
            >
              Ver portfólio completo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
