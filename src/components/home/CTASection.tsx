import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

export function CTASection() {
  return (
    <section className="py-24 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-primary/6 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/12 mb-7 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-white/60">Próximos passos</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vamos conversar sobre{" "}
            <span className="gradient-text-gold">o seu projeto</span>?
          </h2>

          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma conversa com nossa equipe para entender como a{" "}
            <span className="gradient-text-gold">IntelliX</span>
            <span className="gradient-text">.AI</span>{" "}
            pode transformar a operação da sua empresa — sem hype, com resultado mensurável.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
              </Button>
            </Link>
            <Link to="/cases">
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-white/60 hover:border-primary/40 hover:text-primary hover:bg-primary/6 font-medium px-8 py-6 rounded-xl transition-[border-color,color,background-color] duration-200"
              >
                Ver cases reais
              </Button>
            </Link>
          </div>

          <p className="mt-7 text-sm text-white/25">
            Atendimento consultivo · Sem compromisso · Resposta em até 24h
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
