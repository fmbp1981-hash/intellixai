import { Link } from "react-router-dom";
import { ArrowRight, Zap, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07]"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Accent glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[160px]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Refined and subtle */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium text-primary/90 uppercase tracking-wider">Inteligência Artificial Corporativa</span>
          </div>

          {/* Headline - Professional and balanced */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-5 animate-fade-in text-foreground" style={{ animationDelay: "0.1s" }}>
            Sistemas inteligentes que fazem sua empresa{" "}
            <span className="gradient-text">operar melhor</span>,{" "}
            <span className="gradient-text-gold">vender mais</span>{" "}
            <span className="text-foreground">e depender menos de tarefas manuais</span>
          </h1>

          {/* Subheadline - Clean and professional */}
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Transformamos processos complexos em fluxos automatizados com IA.{" "}
            <span className="text-foreground">Você foca no estratégico</span>, a tecnologia cuida do resto.
          </p>

          {/* CTAs - Professional sizing */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in mb-10" style={{ animationDelay: "0.3s" }}>
            <Link to="/diagnostico">
              <Button size="lg" className="bg-gradient-to-r from-accent to-yellow-500 text-accent-foreground hover:from-accent/90 hover:to-yellow-500/90 font-semibold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                Iniciar Diagnóstico Gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border border-border text-foreground hover:bg-card hover:border-primary/40 font-medium px-6 py-4 rounded-lg transition-all duration-300">
                Ver Cases de Sucesso
              </Button>
            </Link>
          </div>

          {/* Stats Row - Clean and credible */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 animate-fade-in mb-8" style={{ animationDelay: "0.4s" }}>
            {[
              { icon: Zap, value: "+40%", label: "Aumento em vendas" },
              { icon: TrendingUp, value: "-70%", label: "Tempo em processos" },
              { icon: Users, value: "24/7", label: "Atendimento ativo" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 bg-card/50 border border-border/50 px-4 py-2.5 rounded-lg">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators - Professional and credible */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {["Implementação ágil", "Suporte dedicado", "ROI comprovado"].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
