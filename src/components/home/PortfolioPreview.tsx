import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredProjects = [
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
                
                <span className="inline-block text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                  {project.segment}
                </span>
                
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
