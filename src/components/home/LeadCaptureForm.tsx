import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, Building2, Sparkles, CheckCircle2, Zap, Clock, Shield } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

export function LeadCaptureForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    toast({
      title: "🎉 Cadastro realizado com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });

    setFormData({ name: "", email: "", whatsapp: "", company: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card-glow p-16 rounded-3xl border-2 border-primary/40">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-cyan-400 to-primary flex items-center justify-center shadow-[0_0_60px_hsl(var(--primary)/0.6)] animate-pulse">
                <CheckCircle2 className="w-14 h-14 text-primary-foreground" />
              </div>
              <h3 className="text-4xl font-bold gradient-text mb-6">
                Obrigado pelo seu interesse!
              </h3>
              <p className="text-xl text-muted-foreground">
                Recebemos seus dados e nossa equipe entrará em contato muito em breve.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="falar-com-equipe" className="py-24 relative overflow-hidden scroll-mt-32">
      {/* Background Effects - More pronounced */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/30 mb-8 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-bold text-primary">Contato Rápido</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="gradient-text">Fale com nossa</span>
                <br />
                <span className="gradient-text-gold text-glow-gold">equipe agora</span>
              </h2>

              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato para apresentar as 
                <span className="text-primary font-semibold"> melhores soluções em IA</span> para seu negócio.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Clock, text: "Resposta em até 24 horas" },
                  { icon: Zap, text: "Consultoria inicial gratuita" },
                  { icon: Shield, text: "Soluções personalizadas" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.4)] group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-shadow">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-medium text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                {/* Glow effect behind form */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-cyan-400/30 rounded-[2rem] blur-2xl" />
                
                <form
                  onSubmit={handleSubmit}
                  className="relative glass-card-glow p-10 rounded-3xl border-2 border-primary/30 space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold gradient-text mb-2">
                      Fale com nossa equipe
                    </h3>
                    <p className="text-muted-foreground">Preencha seus dados abaixo</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      Nome completo *
                    </Label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-14 pl-5 text-lg bg-background/60 border-primary/30 focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] rounded-xl transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 pl-5 text-lg bg-background/60 border-primary/30 focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] rounded-xl transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      className="h-14 pl-5 text-lg bg-background/60 border-primary/30 focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] rounded-xl transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-primary" />
                      Empresa <span className="text-muted-foreground font-normal">(opcional)</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-14 pl-5 text-lg bg-background/60 border-primary/30 focus:border-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] rounded-xl transition-all"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 text-xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary hover:from-primary/90 hover:via-cyan-400/90 hover:to-primary/90 rounded-xl shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-300 group"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-3">
                        <span className="w-6 h-6 border-3 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-3">
                        Quero ser contactado
                        <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                      </span>
                    )}
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    🔒 Seus dados estão seguros. Não enviamos spam.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
