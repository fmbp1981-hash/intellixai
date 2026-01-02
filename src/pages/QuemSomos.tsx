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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Quem é a <span className="gradient-text-gold text-glow-gold">IntelliX</span><span className="gradient-text-brand-blue">.AI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Somos uma empresa de tecnologia focada em transformar operações tradicionais 
              em operações inteligentes através de automação e inteligência artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card-glow p-8 lg:p-12 hover-lift hover-glow">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <Target className="text-primary icon-glow" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Democratizar o acesso à inteligência artificial para empresas de todos os tamanhos, 
                transformando processos complexos em fluxos simples e automatizados que geram 
                resultados reais e mensuráveis.
              </p>
            </div>

            <div className="glass-card-glow p-8 lg:p-12 hover-lift hover-glow">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="text-accent icon-glow-gold" size={32} />
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
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
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
                className="text-center animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-all duration-300 group-hover:shadow-[0_0_30px_hsl(192_100%_50%/0.3)]">
                  <value.icon className="text-primary icon-glow" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que IntelliX.AI */}
      <section className="py-24 bg-card/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que <span className="gradient-text-gold text-glow-gold">IntelliX</span><span className="gradient-text-brand-blue">.AI</span>?
              </h2>
            </div>
            
            <div className="gradient-border glass-card-glow p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Users className="text-primary icon-glow" size={28} />
                </div>
                <h3 className="text-xl font-semibold">Uma equipe que entende de negócios</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Não somos apenas desenvolvedores. Somos consultores de negócios que usam 
                tecnologia como ferramenta. Antes de escrever qualquer código, entendemos 
                profundamente o seu negócio, seus desafios e seus objetivos.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nossa abordagem combina metodologias ágeis de desenvolvimento com frameworks 
                de consultoria empresarial, garantindo que cada solução entregue tenha impacto 
                real e mensurável no seu resultado.
              </p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-primary font-semibold text-xl text-glow">
                  Tecnologia invisível. Resultado visível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
