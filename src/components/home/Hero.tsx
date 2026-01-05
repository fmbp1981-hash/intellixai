import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects - More vibrant and animated */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/25 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/15 rounded-full blur-[180px] animate-pulse" style={{ animationDuration: "4s" }} />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-float" />

      {/* Grid Pattern - More visible */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1.5px, transparent 1.5px), linear-gradient(90deg, hsl(var(--primary)) 1.5px, transparent 1.5px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/50 rounded-full animate-float shadow-[0_0_15px_hsl(var(--primary))]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative glowing dots - Larger and more prominent */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_30px_hsl(var(--primary))]" />
      <div className="absolute top-40 right-32 w-5 h-5 bg-accent rounded-full animate-pulse shadow-[0_0_35px_hsl(var(--accent))]" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-32 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_25px_hsl(190_100%_60%)]" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-20 w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_30px_hsl(var(--primary))]" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-primary/20 border border-primary/40 rounded-full px-6 py-3 mb-10 animate-fade-in shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)]">
            <Sparkles size={20} className="text-primary animate-pulse" />
            <span className="text-base font-bold text-primary">Inteligência Artificial para Negócios</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Sistemas inteligentes que fazem sua empresa{" "}
            <span className="gradient-text text-glow">operar melhor</span>,{" "}
            <span className="gradient-text-gold text-glow-gold">vender mais</span> e depender menos de tarefas manuais
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transformamos processos complexos em fluxos automatizados com IA.
            <span className="text-primary font-semibold"> Você foca no estratégico</span>, a tecnologia cuida do resto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-16" style={{ animationDelay: "0.3s" }}>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold text-xl px-10 py-7 rounded-xl shadow-[0_0_40px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_60px_hsl(var(--accent)/0.7)] transition-all duration-300 hover:scale-105 group">
                Iniciar Diagnóstico Gratuito
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-primary/50 text-foreground hover:bg-primary/15 font-bold text-xl px-10 py-7 rounded-xl hover:border-primary hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] transition-all duration-300">
                Ver Cases de Sucesso
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Zap, value: "+40%", label: "Aumento em vendas" },
              { icon: TrendingUp, value: "-70%", label: "Tempo em processos" },
              { icon: Users, value: "24/7", label: "Atendimento ativo" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-4 glass-card px-6 py-4 rounded-2xl border border-primary/20">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <p className="mt-16 text-lg animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <span className="text-primary font-bold text-glow">Tecnologia invisível.</span>{" "}
            <span className="text-accent font-bold text-glow-gold">Resultado visível.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
