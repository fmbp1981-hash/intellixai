import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects - More vibrant */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
      
      {/* Grid Pattern - More visible */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative glowing dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_20px_hsl(var(--primary))]" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_20px_hsl(var(--accent))]" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_20px_hsl(var(--primary))]" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-4 py-2 mb-8 animate-fade-in shadow-[0_0_30px_-5px_hsl(var(--primary)/0.4)]">
            <Sparkles size={16} className="text-primary icon-glow" />
            <span className="text-sm font-medium text-primary">Inteligência Artificial para Negócios</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sistemas inteligentes que fazem sua empresa{" "}
            <span className="gradient-text text-glow">operar melhor</span>,{" "}
            <span className="gradient-text-gold text-glow-gold">vender mais</span> e depender menos de tarefas manuais
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transformamos processos complexos em fluxos automatizados com IA. 
            Você foca no estratégico, a tecnologia cuida do resto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8 py-6 glow-gold group">
                Iniciar Diagnóstico Gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/15 font-semibold text-lg px-8 py-6 hover:border-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] transition-all">
                Ver Cases de Sucesso
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="mt-12 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-primary font-medium text-glow">Tecnologia invisível.</span>{" "}
            <span className="text-accent font-medium text-glow-gold">Resultado visível.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
