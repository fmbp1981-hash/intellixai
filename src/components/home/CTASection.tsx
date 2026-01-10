import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image - Professional handshake/partnership context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 border border-border mb-6 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Próximos Passos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Vamos conversar sobre seu projeto?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma conversa com nossa equipe para entender como a <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span> pode 
            contribuir para a evolução tecnológica da sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/diagnostico">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 rounded-lg transition-all duration-300 group">
                Solicitar Diagnóstico
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-2 border-border text-foreground hover:bg-card hover:border-primary/40 font-medium px-8 py-6 rounded-lg transition-all duration-300">
                Entrar em Contato
              </Button>
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Atendimento consultivo · Sem compromisso · Resposta em até 24h
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
