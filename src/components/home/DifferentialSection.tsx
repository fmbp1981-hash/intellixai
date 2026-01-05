import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const differentials = [
  "IA nos bastidores, interface simples para você",
  "Soluções personalizadas para cada segmento",
  "Integração com suas ferramentas atuais",
  "Resultados mensuráveis desde o primeiro mês",
  "Suporte contínuo e evolução constante",
];

const steps = [
  {
    title: "Diagnóstico Personalizado",
    description: "Entendemos seu negócio antes de propor qualquer solução",
    color: "primary",
  },
  {
    title: "Implementação Rápida",
    description: "Sistemas funcionando em semanas, não meses",
    color: "accent",
  },
  {
    title: "Evolução Contínua",
    description: "Melhorias constantes baseadas em dados reais",
    color: "primary",
  },
];

export function DifferentialSection() {
  return (
    <section className="py-28 bg-card relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection animation="fade-right">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-primary">Por que a IntelliX?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Tecnologia invisível.</span>
              <br />
              <span className="gradient-text-gold text-glow-gold">Resultado visível.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Não vendemos promessas de IA futurista. Entregamos sistemas que funcionam <span className="text-primary font-semibold">hoje</span>,
              resolvem problemas reais e geram resultados mensuráveis para o seu negócio.
            </p>

            <ul className="space-y-5 mb-12">
              {differentials.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.4)]">
                    <CheckCircle2 className="text-primary-foreground" size={18} />
                  </div>
                  <span className="text-lg font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/como-trabalhamos">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/15 font-bold text-lg px-8 py-6 rounded-xl group">
                Conheça nossa metodologia
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur-2xl" />

              <div className="relative glass-card-glow p-10 lg:p-14 rounded-3xl">
                <h3 className="text-2xl font-bold gradient-text mb-10 text-center">Nossa Metodologia</h3>

                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6 group">
                      <div className={`relative flex-shrink-0`}>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color === 'accent' ? 'from-accent to-yellow-400' : 'from-primary to-cyan-400'} flex items-center justify-center shadow-[0_0_25px_hsl(var(--${step.color})/0.5)] group-hover:scale-110 transition-transform`}>
                          <span className="text-xl font-bold text-white">{index + 1}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                        )}
                      </div>
                      <div className="pt-2">
                        <p className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{step.title}</p>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/25 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
