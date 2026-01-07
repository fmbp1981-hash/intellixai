import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects - Softer and more elegant */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles - Reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full animate-float shadow-[0_0_10px_hsl(var(--primary)/0.5)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative glowing dots - Smaller */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_hsl(var(--primary))]" />
      <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_20px_hsl(var(--accent))]" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_15px_hsl(190_100%_60%)]" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-20 w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_hsl(var(--primary))]" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-5 py-2 mb-8 animate-fade-in shadow-[0_0_25px_-5px_hsl(var(--primary)/0.4)]">
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Inteligência Artificial para Negócios</span>
          </div>

          {/* Headline - Harmonized sizes */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sistemas inteligentes que fazem sua empresa{" "}
            <span className="gradient-text text-glow">operar melhor</span>,{" "}
            <span className="gradient-text-gold text-glow-gold">vender mais</span> e depender menos de tarefas manuais
          </h1>

          {/* Subheadline - Reduced */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transformamos processos complexos em fluxos automatizados com IA.
            <span className="text-primary font-semibold"> Você foca no estratégico</span>, a tecnologia cuida do resto.
          </p>

          {/* CTAs - Proportional sizes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in mb-12" style={{ animationDelay: "0.3s" }}>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold text-lg px-8 py-5 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-all duration-300 hover:scale-105 group">
                Iniciar Diagnóstico Gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-primary/40 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-5 rounded-xl hover:border-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.4)] transition-all duration-300">
                Ver Cases de Sucesso
              </Button>
            </Link>
          </div>

          {/* Stats Row - Reduced */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Zap, value: "+40%", label: "Aumento em vendas" },
              { icon: TrendingUp, value: "-70%", label: "Tempo em processos" },
              { icon: Users, value: "24/7", label: "Atendimento ativo" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 glass-card px-5 py-3 rounded-xl border border-primary/15">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                  <stat.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge - Reduced */}
          <p className="mt-12 text-base animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <span className="text-primary font-semibold">Tecnologia invisível.</span>{" "}
            <span className="text-accent font-semibold">Resultado visível.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
