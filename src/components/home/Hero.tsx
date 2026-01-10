import { Link } from "react-router-dom";
import { ArrowRight, Building2, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - Corporate office/business environment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
        }}
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-background/85" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge - Corporate and subtle */}
              <div className="inline-flex items-center gap-2 bg-card/80 border border-border rounded-full px-4 py-2 mb-8 animate-fade-in backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Consultoria em Inteligência Artificial</span>
              </div>

              {/* Headline - Institutional and impactful */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in text-foreground" style={{ animationDelay: "0.1s" }}>
                Transforme sua operação com{" "}
                <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span>
                {" "}— Inteligência Artificial que gera resultados reais
              </h1>

              {/* Subheadline - Concise and impactful */}
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
                Desenvolvemos soluções personalizadas de IA que automatizam processos, potencializam vendas e elevam a eficiência operacional da sua empresa.
              </p>

              {/* CTAs - Professional and institutional */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in mb-8" style={{ animationDelay: "0.3s" }}>
                <Link to="/quem-somos">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 rounded-lg transition-all duration-300 group">
                    Conheça a IntelliX
                    <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button size="lg" variant="outline" className="border-2 border-border text-foreground hover:bg-card hover:border-primary/40 font-medium px-8 py-6 rounded-lg transition-all duration-300">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Corporate values/pillars */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="space-y-4">
                {[
                  { 
                    icon: Target, 
                    title: "Foco em Resultados", 
                    description: "Soluções orientadas a métricas e ROI mensurável desde o primeiro mês." 
                  },
                  { 
                    icon: Lightbulb, 
                    title: "Inovação Aplicada", 
                    description: "Tecnologia de ponta adaptada à realidade e necessidades do seu negócio." 
                  },
                  { 
                    icon: Building2, 
                    title: "Parceria de Longo Prazo", 
                    description: "Acompanhamento contínuo e evolução constante dos sistemas implementados." 
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
