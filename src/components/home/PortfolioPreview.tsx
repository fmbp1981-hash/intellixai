import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Cases de <span className="gradient-text">Sucesso</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça algumas das soluções que já criamos.
            </p>
          </div>
          <Link to="/portfolio">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 group">
              Ver todos os projetos
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target={project.isInternal ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`glass-card group hover-lift overflow-hidden animate-fade-in relative ${project.isInternal ? 'ring-1 ring-primary/30' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              {/* Internal Product Badge */}
              {project.isInternal && (
                <span className="absolute top-4 right-4 text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                  IntelliX
                </span>
              )}
              
              <div className="p-5">
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.type}</p>
                </div>
                
                <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${project.isInternal ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                  {project.segment}
                </span>
                
                <p className="text-muted-foreground text-xs line-clamp-3">{project.description}</p>
                
                {!project.isInternal && (
                  <ExternalLink className="absolute bottom-4 right-4 text-muted-foreground group-hover:text-primary transition-colors" size={16} />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
