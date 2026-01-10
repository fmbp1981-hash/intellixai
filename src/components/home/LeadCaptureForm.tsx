import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, Phone, Building2, CheckCircle2, Zap, Clock, Shield } from "lucide-react";
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
    <section id="falar-com-equipe" className="py-24 bg-card relative overflow-hidden scroll-mt-32">
      {/* Background Image - Office/corporate context */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-card/95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Contato</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Entre em contato com nossa equipe
              </h2>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulário e nossa equipe entrará em contato para entender suas 
                necessidades e apresentar as soluções mais adequadas.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Resposta em até 24 horas" },
                  { icon: Zap, text: "Consultoria inicial sem custo" },
                  { icon: Shield, text: "Soluções sob medida" },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 text-foreground"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection animation="fade-left" delay={200}>
              <form
                onSubmit={handleSubmit}
                className="bg-background/80 backdrop-blur-sm p-8 rounded-xl border border-border space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    Nome completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-card border-border focus:border-primary rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
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
                    className="h-12 bg-card border-border focus:border-primary rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
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
                    className="h-12 bg-card border-border focus:border-primary rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    Empresa <span className="text-muted-foreground font-normal">(opcional)</span>
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Nome da sua empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary rounded-lg"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Enviar mensagem
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Seus dados estão protegidos. Não enviamos spam.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
