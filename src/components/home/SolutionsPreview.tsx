import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, Settings, Globe, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Prospecção & Vendas",
    description: "Qualificação automática de leads, automação de outbound e gestão de pipeline.",
    benefit: "Aumente suas vendas em até 40%",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "Atendimento Inteligente",
    description: "Chatbots com IA que entendem e respondem seus clientes 24/7.",
    benefit: "Reduza tempo de resposta em 80%",
    gradient: "from-accent to-yellow-400",
  },
  {
    icon: Settings,
    title: "Gestão & Operações",
    description: "Plataformas completas para gestão de clínicas, escritórios e processos.",
    benefit: "Automatize 60% das tarefas manuais",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Presença digital profissional com alta conversão e SEO otimizado.",
    benefit: "Converta 3x mais visitantes",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Puzzle,
    title: "Soluções Sob Medida",
    description: "Desenvolvimento personalizado para as necessidades únicas do seu negócio.",
    benefit: "100% adaptado ao seu contexto",
    gradient: "from-rose-500 to-pink-400",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossas <span className="gradient-text">Soluções</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Frameworks inteligentes prontos para transformar cada área do seu negócio
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="glass-card group hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${solution.gradient}`} />
              
              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="text-white" size={28} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Benefit badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {solution.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/solucoes">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
              Ver todas as soluções
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
