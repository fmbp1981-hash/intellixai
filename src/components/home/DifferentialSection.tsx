import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const differentials = [
  "IA nos bastidores, interface simples para você",
  "Soluções personalizadas para cada segmento",
  "Integração com suas ferramentas atuais",
  "Resultados mensuráveis desde o primeiro mês",
  "Suporte contínuo e evolução constante",
];

export function DifferentialSection() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="gradient-text">Tecnologia invisível.</span>
              <br />
              <span className="gradient-text-gold">Resultado visível.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Não vendemos promessas de IA futurista. Entregamos sistemas que funcionam hoje, 
              resolvem problemas reais e geram resultados mensuráveis para o seu negócio.
            </p>
            
            <ul className="space-y-4 mb-10">
              {differentials.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="text-primary shrink-0" size={22} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link to="/como-trabalhamos">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Conheça nossa metodologia
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="glass-card p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 animate-pulse" />
                  <div>
                    <p className="font-semibold text-lg">Diagnóstico Personalizado</p>
                    <p className="text-muted-foreground text-sm">Entendemos seu negócio antes de propor qualquer solução</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 animate-pulse" style={{ animationDelay: "0.3s" }} />
                  <div>
                    <p className="font-semibold text-lg">Implementação Rápida</p>
                    <p className="text-muted-foreground text-sm">Sistemas funcionando em semanas, não meses</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 animate-pulse" style={{ animationDelay: "0.6s" }} />
                  <div>
                    <p className="font-semibold text-lg">Evolução Contínua</p>
                    <p className="text-muted-foreground text-sm">Melhorias constantes baseadas em dados reais</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
