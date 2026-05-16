import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const WHATSAPP_NUMBER = "5581988514775";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 81 98851-4775",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da IntelliX.AI e gostaria de conversar.")}`,
    isExternal: true,
    color: "text-[#25D366]",
    bg: "bg-[#25D366]/10 border-[#25D366]/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@intellixai.com.br",
    href: "mailto:contato@intellixai.com.br",
    isExternal: false,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Recife, PE — Brasil",
    href: null,
    isExternal: false,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 81 98851-4775",
    href: "tel:+5581988514775",
    isExternal: false,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

export default function Contato() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da IntelliX.AI e gostaria de conversar.")}`;

  return (
    <Layout>
      <Helmet>
        <title>Contato | IntelliX.AI - Fale com Nossa Equipe</title>
        <meta name="description" content="Entre em contato com a IntelliX.AI. WhatsApp, email e redes sociais para tirar dúvidas e começar seu projeto de automação." />
        <meta property="og:title" content="Contato | IntelliX.AI - Fale com Nossa Equipe" />
        <meta property="og:description" content="Entre em contato com a IntelliX.AI. WhatsApp, email e redes sociais para tirar dúvidas e começar seu projeto de automação." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/contato" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Fale com a equipe</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos <span className="gradient-text">conversar</span>?
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Prefira o WhatsApp — é onde a conversa evolui mais rápido. Uma mensagem chega diretamente para Felipe Maranhão.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Principal — WhatsApp */}
      <section className="py-12 bg-[#0A1525]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="rounded-2xl border border-[#25D366]/30 bg-[#25D366]/6 p-8 md:p-10 hover:border-[#25D366]/55 hover:bg-[#25D366]/10 transition-[border-color,background-color] duration-300 group cursor-pointer">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-xl font-bold text-white mb-2">Falar no WhatsApp</h2>
                    <p className="text-white/55 mb-4 leading-relaxed">
                      Conversa direta, sem filtros. Conte brevemente o que você precisa e em minutos você já tem uma resposta real.
                    </p>
                    <span className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-sm group-hover:gap-3 transition-[gap] duration-200">
                      Abrir WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-[#0A1525]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6 text-center">Outras formas de contato</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item, index) => (
                <AnimatedSection key={item.label} animation="fade-up" delay={index * 60}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/6 transition-[border-color,background-color] duration-200 group"
                    >
                      <div className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-white/35 font-medium mb-0.5">{item.label}</p>
                        <p className="text-sm text-white/80 font-medium truncate group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 rounded-xl border border-white/8 bg-white/4">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-white/35 font-medium mb-0.5">{item.label}</p>
                        <p className="text-sm text-white/80 font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Diagnóstico como alternativa */}
      <section className="py-20 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-primary/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-white/35 text-sm mb-4">Prefere uma conversa mais estruturada?</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Faça o <span className="gradient-text-gold">Diagnóstico Gratuito</span>
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Responda 3 etapas rápidas e mapeamos qual frente IntelliX.AI gera mais resultado para o seu negócio. Depois a gente agenda uma conversa de 30 minutos.
            </p>
            <Link to="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                Fazer diagnóstico gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
}
