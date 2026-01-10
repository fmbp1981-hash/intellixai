import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const featuredProjects = [
  {
    name: "IntelliX CRM",
    type: "CRM Personalizado",
    segment: "Produto IntelliX",
    description: "Sistema de gestão de relacionamento 100% adaptável ao fluxo de trabalho da sua empresa.",
    url: "#",
    gradient: "from-indigo-500 to-violet-400",
    isInternal: true,
  },
  {
    name: "IntelliX Disparo",
    type: "Disparador WhatsApp",
    segment: "Produto IntelliX",
    description: "Plataforma de disparo em massa via API Oficial do WhatsApp com automações inteligentes.",
    url: "#",
    gradient: "from-green-500 to-emerald-400",
    isInternal: true,
  },
  {
    name: "LeadFinder Pro",
    type: "Plataforma de Prospecção",
    segment: "Vendas B2B",
    description: "Qualificação automática de leads e automação de outbound para equipes de vendas.",
    url: "https://prospect-pulse-54.vercel.app/",
    gradient: "from-primary to-cyan-400",
  },
  {
    name: "Vo.AI",
    type: "CRM Inteligente",
    segment: "Agências de Viagem",
    description: "Atendimento com IA, gestão de clientes e automação de vendas para o setor de turismo.",
    url: "https://vo-ai.vercel.app/",
    gradient: "from-accent to-yellow-400",
  },
  {
    name: "ClinicaFlow",
    type: "Gestão de Pacientes",
    segment: "Clínicas Odontológicas",
    description: "Agenda inteligente, prontuários digitais e controle financeiro integrado.",
    url: "https://allo-oral-clinic-gest-o.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Image - Success/achievement context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-card/98" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Projetos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Cases e Produtos
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça as soluções desenvolvidas pela <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span>
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="border-border text-foreground hover:bg-card hover:border-primary/40 group">
              Ver portfólio completo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.name}
              animation="fade-up"
              delay={index * 80}
            >
              <a
                href={project.url}
                target={project.isInternal ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`block bg-background/60 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden h-full ${project.isInternal ? 'ring-1 ring-primary/20' : ''}`}
              >
                {/* Gradient Header */}
                <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-5 relative">
                  {/* Internal Product Badge */}
                  {project.isInternal && (
                    <span className="absolute top-3 right-3 text-[10px] font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Produto
                    </span>
                  )}
                  
                  <div className="mb-3">
                    <h3 className="font-semibold text-base mb-1 text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{project.type}</p>
                  </div>
                  
                  <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 bg-card text-muted-foreground border border-border">
                    {project.segment}
                  </span>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                  
                  {!project.isInternal && (
                    <ExternalLink className="absolute bottom-4 right-4 text-muted-foreground w-4 h-4" />
                  )}
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
