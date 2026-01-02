import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Heart, Lightbulb, Users, Rocket } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicidade Operacional",
    description: "Tecnologia complexa com interface simples. Você não precisa ser técnico para usar.",
  },
  {
    icon: Target,
    title: "Resultado Acima de Hype",
    description: "Não vendemos tendências. Entregamos soluções que funcionam e geram ROI mensurável.",
  },
  {
    icon: Heart,
    title: "Tecnologia a Serviço do Negócio",
    description: "A IA é meio, não fim. O objetivo sempre é resolver problemas reais do seu negócio.",
  },
  {
    icon: Rocket,
    title: "Escala com Eficiência",
    description: "Sistemas que crescem junto com você, sem aumentar proporcionalmente os custos.",
  },
];

export default function QuemSomos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quem é a <span className="gradient-text">IntelliX.AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos uma empresa de tecnologia focada em transformar operações tradicionais 
              em operações inteligentes através de automação e inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 lg:p-12 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Democratizar o acesso à inteligência artificial para empresas de todos os tamanhos, 
                transformando processos complexos em fluxos simples e automatizados que geram 
                resultados reais e mensuráveis.
              </p>
            </div>

            <div className="glass-card p-8 lg:p-12 hover-lift">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="text-accent" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Ser a principal referência em inteligência artificial aplicada a negócios 
                na América Latina, reconhecida por entregar soluções que realmente funcionam 
                e transformam a forma como empresas operam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Os princípios que guiam cada decisão e cada linha de código que escrevemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que IntelliX */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que <span className="gradient-text-gold">IntelliX</span>?
              </h2>
            </div>
            
            <div className="glass-card p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-primary" size={32} />
                <h3 className="text-xl font-semibold">Uma equipe que entende de negócios</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Não somos apenas desenvolvedores. Somos consultores de negócios que usam 
                tecnologia como ferramenta. Antes de escrever qualquer código, entendemos 
                profundamente o seu negócio, seus desafios e seus objetivos.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Nossa abordagem combina metodologias ágeis de desenvolvimento com frameworks 
                de consultoria empresarial, garantindo que cada solução entregue tenha impacto 
                real e mensurável no seu resultado.
              </p>
              <p className="text-primary font-medium text-lg">
                Tecnologia invisível. Resultado visível.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
