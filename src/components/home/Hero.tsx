import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Inteligência Artificial para Negócios</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sistemas inteligentes que fazem sua empresa{" "}
            <span className="gradient-text">operar melhor</span>,{" "}
            <span className="gradient-text-gold">vender mais</span> e depender menos de tarefas manuais
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
              <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6">
                Ver Cases de Sucesso
              </Button>
            </Link>
          </div>

          {/* Trust Badge */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="text-primary font-medium">Tecnologia invisível.</span>{" "}
            <span className="text-accent font-medium">Resultado visível.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
