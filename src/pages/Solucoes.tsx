import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MessageSquare, Settings, Globe, Puzzle } from "lucide-react";

const solutions = [
  {
    icon: Search,
    title: "Prospecção & Vendas",
    description: "Sistemas inteligentes para qualificação automática de leads, automação de outbound e gestão de pipeline de vendas.",
    features: [
      "Qualificação automática de leads",
      "Automação de follow-ups",
      "Scoring de leads com IA",
      "Integração com CRMs",
    ],
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: MessageSquare,
    title: "Atendimento Inteligente",
    description: "Chatbots e assistentes virtuais que entendem, respondem e qualificam seus clientes 24 horas por dia.",
    features: [
      "Chatbots com IA conversacional",
      "Atendimento 24/7",
      "Qualificação automática",
      "Handoff para humanos",
    ],
    gradient: "from-accent to-yellow-400",
  },
  {
    icon: Settings,
    title: "Gestão & Operações",
    description: "Plataformas completas para gestão de clínicas, escritórios, operações e processos internos.",
    features: [
      "Gestão de agenda e pacientes",
      "Prontuários digitais",
      "Controle financeiro",
      "Dashboards gerenciais",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Presença digital profissional com sites institucionais e landing pages de alta conversão.",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "SEO integrado",
      "Integração com analytics",
    ],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: Puzzle,
    title: "Soluções Sob Medida",
    description: "Desenvolvimento personalizado de sistemas específicos para as necessidades únicas do seu negócio.",
    features: [
      "Análise de processos",
      "Arquitetura personalizada",
      "Integrações customizadas",
      "Suporte dedicado",
    ],
    gradient: "from-rose-500 to-pink-400",
  },
];

export default function Solucoes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossas <span className="gradient-text">Soluções</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Frameworks adaptáveis que resolvem problemas reais de diferentes segmentos. 
              Cada solução é personalizada para o seu contexto específico.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className="glass-card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${solution.gradient}`} />
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <solution.icon className="text-primary" size={32} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{solution.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6">{solution.description}</p>
                      <Link to="/diagnostico">
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                          Quero essa solução
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-card/50 rounded-xl p-6">
                      <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                        O que inclui
                      </h4>
                      <ul className="space-y-3">
                        {solution.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Desenvolvemos soluções sob medida para qualquer desafio. 
              Conte-nos sobre seu problema e criaremos a solução ideal.
            </p>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold glow-gold group">
                Falar sobre meu projeto
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
