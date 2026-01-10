import { CheckCircle2, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const differentials = [
  "Tecnologia avançada com interface intuitiva",
  "Soluções desenvolvidas sob medida para cada cliente",
  "Integração completa com sistemas existentes",
  "Resultados mensuráveis desde o primeiro mês",
  "Acompanhamento contínuo e suporte dedicado",
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Análise detalhada dos processos e necessidades do negócio",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Definição de escopo, cronograma e métricas de sucesso",
  },
  {
    step: "03",
    title: "Implementação",
    description: "Desenvolvimento e deploy das soluções em ambiente de produção",
  },
  {
    step: "04",
    title: "Evolução",
    description: "Monitoramento contínuo e melhorias baseadas em dados",
  },
];

export function DifferentialSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image - Professional meeting/consulting context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-background/95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Diferenciais</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Por que escolher a <span className="gradient-text">IntelliX.AI</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Combinamos expertise técnica com profundo entendimento de negócios para entregar 
              soluções que realmente fazem a diferença na operação das empresas.
            </p>

            <ul className="space-y-4 mb-8">
              {differentials.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/como-trabalhamos">
              <Button size="lg" variant="outline" className="border-2 border-border text-foreground hover:bg-card hover:border-primary/40 font-medium px-6 py-5 rounded-lg group">
                Conheça nossa metodologia
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-8 text-center">Nossa Metodologia</h3>

              <div className="space-y-6">
                {methodology.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{item.step}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
