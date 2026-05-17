import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, MessageCircle, Clock, Zap, Shield, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "5581988514775";

const benefits = [
  { icon: Clock, text: "Resposta em até 24 horas" },
  { icon: Zap, text: "Consultoria inicial sem custo" },
  { icon: Shield, text: "Sem spam — seus dados ficam só aqui" },
];

function buildMessage(nome: string, whatsapp: string) {
  return [
    "👋 Olá! Vim pelo site da IntelliX.AI e gostaria de falar com a equipe.",
    "",
    `Nome: ${nome}`,
    whatsapp ? `WhatsApp: ${whatsapp}` : null,
  ].filter(Boolean).join("\n");
}

export function LeadCaptureForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = nome.trim().length >= 2 && whatsapp.trim().length >= 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    const msg = buildMessage(nome.trim(), whatsapp.trim());
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

    setSubmitted(true);
    setTimeout(() => window.open(url, "_blank"), 400);
  };

  return (
    <section id="falar-com-equipe" className="py-24 bg-[#0A1525] relative overflow-hidden scroll-mt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Copy */}
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Fale com a equipe</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Fale com a equipe{" "}
                <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span>
              </h2>

              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Deixa seu nome e WhatsApp — a gente entra em contato para entender o seu momento e indicar o melhor próximo passo.
              </p>

              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.text} className="flex items-center gap-3">
                    <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white/65 text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — Form / Success */}
            <AnimatedSection animation="fade-left" delay={150}>
              {submitted ? (
                <div className="rounded-2xl border border-accent/30 bg-accent/6 p-10 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    WhatsApp <span className="gradient-text-gold">abrindo!</span>
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    Se não abriu automaticamente,{" "}
                    <button
                      onClick={() => {
                        const msg = buildMessage(nome, whatsapp);
                        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
                      }}
                      className="text-accent underline underline-offset-2 hover:text-accent/80 transition-colors"
                    >
                      clique aqui
                    </button>
                    .
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/8 bg-white/4 p-8"
                >
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="lc-nome" className="text-sm font-medium text-white/65 mb-1.5 block">
                        Nome *
                      </Label>
                      <Input
                        id="lc-nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome"
                        required
                        className="h-11 bg-white/6 border-white/12 text-white placeholder:text-white/30 focus:border-accent/60 focus:bg-white/8 transition-[border-color,background-color] duration-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="lc-whatsapp" className="text-sm font-medium text-white/65 mb-1.5 block">
                        WhatsApp *
                      </Label>
                      <Input
                        id="lc-whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="(00) 00000-0000"
                        required
                        className="h-11 bg-white/6 border-white/12 text-white placeholder:text-white/30 focus:border-accent/60 focus:bg-white/8 transition-[border-color,background-color] duration-200"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!isValid}
                      className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-[box-shadow,opacity] duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none group"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Continuar no WhatsApp
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </div>

                  <p className="text-xs text-white/25 text-center mt-4">
                    Seus dados são usados exclusivamente para entrar em contato. Sem listas, sem spam.
                  </p>
                </form>
              )}
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
}
