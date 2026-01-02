import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Lightbulb, PenTool, Cpu, MonitorSmartphone, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico do Negócio",
    description: "Começamos entendendo profundamente sua operação, desafios e objetivos. Sem isso, não há solução que funcione.",
    details: "Mapeamos processos, identificamos gargalos e entendemos onde a tecnologia pode gerar mais impacto.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Identificação dos Gargalos",
    description: "Analisamos onde estão os maiores desperdícios de tempo, dinheiro e oportunidades.",
    details: "Priorizamos os problemas por impacto e viabilidade, criando um roadmap claro de soluções.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Desenho da Solução Ideal",
    description: "Projetamos a arquitetura da solução considerando suas necessidades específicas e possibilidades de escala.",
    details: "Prototipamos fluxos, definimos integrações e validamos a proposta antes de começar o desenvolvimento.",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Automação e IA nos Bastidores",
    description: "Desenvolvemos o sistema com as tecnologias mais adequadas, incluindo automações e inteligência artificial.",
    details: "Usamos n8n, APIs modernas e modelos de IA para criar soluções robustas e escaláveis.",
  },
  {
    number: "05",
    icon: MonitorSmartphone,
    title: "Interface Simples para Você",
    description: "Entregamos uma experiência de uso simples e intuitiva. Você não precisa ser técnico para operar.",
    details: "Toda a complexidade fica nos bastidores. Para você, o sistema é simples e direto.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Evolução Contínua",
    description: "Monitoramos resultados e otimizamos continuamente. A solução evolui junto com seu negócio.",
    details: "Coletamos dados de uso, identificamos melhorias e implementamos atualizações regulares.",
  },
];

export default function ComoTrabalhamos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="gradient-text">Trabalhamos</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Nossa metodologia combina consultoria de negócios com desenvolvimento ágil. 
              Cada projeto segue um processo estruturado para garantir resultados reais.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div 
                    key={step.number}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-6 md:gap-12">
                      {/* Number Circle */}
                      <div className="relative z-10 shrink-0">
                        <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                          <step.icon className="text-primary" size={24} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="glass-card p-6 lg:p-8 flex-1 hover-lift">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-foreground mb-3">{step.description}</p>
                        <p className="text-muted-foreground text-sm">{step.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Tecnologia invisível.</span>
              <br />
              <span className="gradient-text-gold">Resultado visível.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Acreditamos que a melhor tecnologia é aquela que você nem percebe que está usando. 
              Sistemas complexos nos bastidores, experiência simples para você e sua equipe.
            </p>
            <p className="text-muted-foreground text-lg mb-10">
              O que importa não é quantas automações implementamos ou quantos modelos de IA usamos. 
              O que importa é o resultado no seu negócio: mais vendas, menos custos, mais eficiência.
            </p>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold glow-gold group">
                Vamos começar?
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
