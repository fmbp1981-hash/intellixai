import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card max-w-4xl mx-auto p-8 md:p-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">100% Gratuito</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para transformar sua operação?
          </h2>
          
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Faça nosso diagnóstico gratuito e descubra exatamente quais processos podem ser 
            automatizados e quanto você pode ganhar em eficiência.
          </p>
          
          <Link to="/diagnostico">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-10 py-6 glow-gold group">
              Iniciar Diagnóstico Gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Sem compromisso. Resposta em até 24h.
          </p>
        </div>
      </div>
    </section>
  );
}
