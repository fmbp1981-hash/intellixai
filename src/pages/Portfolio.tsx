import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    name: "IntelliX CRM",
    type: "CRM Personalizado",
    segment: "Produto IntelliX",
    description: "Sistema de gestão de relacionamento 100% adaptável ao fluxo de trabalho da sua empresa. Gerencie leads, clientes e oportunidades de forma inteligente com dashboards personalizados.",
    url: "#",
    gradient: "from-indigo-500 to-violet-400",
    isInternal: true,
  },
  {
    name: "IntelliX Disparo",
    type: "Disparador WhatsApp em Massa",
    segment: "Produto IntelliX",
    description: "Plataforma de disparo em massa via API Oficial do WhatsApp. Campanhas segmentadas, automações inteligentes e atendimento escalável com total segurança e conformidade.",
    url: "#",
    gradient: "from-green-500 to-emerald-400",
    isInternal: true,
  },
  {
    name: "LeadFinder Pro",
    type: "Plataforma de Prospecção",
    segment: "Vendas B2B",
    description: "Sistema completo de qualificação automática de leads com automação de outbound, scoring inteligente e integração com CRMs. Aumenta a eficiência das equipes de vendas em até 3x.",
    url: "https://prospect-pulse-54.vercel.app/",
    gradient: "from-primary to-cyan-400",
  },
  {
    name: "Vo.AI",
    type: "CRM Inteligente com IA",
    segment: "Agências de Viagem",
    description: "Plataforma completa para gestão de agências de viagem com atendimento via IA, automação de vendas, gestão de clientes e orçamentos personalizados.",
    url: "https://vo-ai.vercel.app/",
    gradient: "from-accent to-yellow-400",
  },
  {
    name: "Sistema GIG",
    type: "Portal de Governança",
    segment: "Consultoria Empresarial",
    description: "Sistema de gestão e controle corporativo para consultorias especializadas em governança, compliance e gestão de riscos empresariais.",
    url: "https://cavendish-gig.vercel.app/auth",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "ClinicaFlow",
    type: "Gestão de Pacientes",
    segment: "Clínicas Odontológicas",
    description: "Plataforma integrada de gestão para clínicas odontológicas com agenda inteligente, prontuários digitais, controle financeiro e comunicação automatizada com pacientes.",
    url: "https://allo-oral-clinic-gest-o.vercel.app/",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "VibeGuard",
    type: "Ambiente de Controle",
    segment: "Compliance & Segurança",
    description: "Sistema de monitoramento de atividades e indicadores de segurança para empresas que precisam de controle rigoroso sobre suas operações.",
    url: "https://vibeguard-monitor.vercel.app/",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    name: "XPagBrasil",
    type: "Landing Page",
    segment: "Fintech / Pagamentos",
    description: "Página de alta conversão para soluções de pagamento e serviços financeiros, otimizada para captura de leads qualificados.",
    url: "https://xpagbrasil-one-page.vercel.app/",
    gradient: "from-blue-500 to-indigo-400",
  },
  {
    name: "Be Your Home",
    type: "Site Imobiliário",
    segment: "Incorporadora",
    description: "Portal de imóveis com apresentação profissional de empreendimentos, galeria de fotos, tour virtual e captação de leads interessados.",
    url: "https://grupo-cavendish-byh-site.vercel.app/",
    gradient: "from-amber-500 to-orange-400",
  },
  {
    name: "Grupo Cavendish",
    type: "Site Institucional Premium",
    segment: "Consultoria de Governança",
    description: "Presença digital completa para consultoria empresarial de alto nível, com apresentação de serviços, equipe e cases de sucesso.",
    url: "https://grupo-cavendish.vercel.app/",
    gradient: "from-slate-500 to-gray-400",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nosso <span className="gradient-text">Portfólio</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Conheça as soluções que já criamos para empresas de diferentes segmentos. 
              Cada projeto é único, desenvolvido com IA e automação inteligente.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.url}
                target={project.isInternal ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`glass-card group hover-lift overflow-hidden animate-fade-in flex flex-col relative ${project.isInternal ? 'ring-2 ring-primary/40' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                {/* Internal Product Badge */}
                {project.isInternal && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded-full">
                    Produto IntelliX
                  </span>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-xl mb-1 group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.type}</p>
                    </div>
                    {!project.isInternal && (
                      <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" size={20} />
                    )}
                  </div>
                  
                  <span className={`inline-block self-start text-xs font-medium px-3 py-1 rounded-full mb-4 ${project.isInternal ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
                    {project.segment}
                  </span>
                  
                  <p className="text-muted-foreground text-sm flex-1">{project.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="text-sm text-primary font-medium group-hover:underline">
                      {project.isInternal ? 'Em breve →' : 'Visitar projeto →'}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer um projeto como esses?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cada solução começa com um diagnóstico gratuito. Conte-nos sobre seu negócio 
              e criaremos algo único para você.
            </p>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold glow-gold group">
                Iniciar meu projeto
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
