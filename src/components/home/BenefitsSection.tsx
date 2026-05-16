import { TrendingUp, MessageSquare, Zap, ShieldCheck, Brain, Hammer } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: TrendingUp,
    title: "Mais vendas com menos esforço",
    description: "Sistemas de prospecção e qualificação que entregam lead pronto para a equipe comercial. O time fecha. A IA encontra.",
    iconHex: "#22d3ee",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    hover: "hover:border-cyan-400/40",
  },
  {
    icon: MessageSquare,
    title: "Atendimento 24/7 que vende",
    description: "IA que conversa com o cliente fora do expediente, qualifica, agenda e transfere para humano só quando precisa. Sem perder venda no fim de semana.",
    iconHex: "#facc15",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    hover: "hover:border-yellow-400/40",
  },
  {
    icon: Zap,
    title: "Operação enxuta, decisão rápida",
    description: "Automação de processos repetitivos liberando até 30% do tempo da equipe para decisões estratégicas. Menos planilha, mais resultado.",
    iconHex: "#34d399",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    hover: "hover:border-emerald-500/40",
  },
  {
    icon: ShieldCheck,
    title: "Governança e compliance sem dor",
    description: "Sistemas que monitoram conformidade, geram relatórios automáticos e alertam riscos antes que virem multa. Tranquilidade jurídica em piloto automático.",
    iconHex: "#a78bfa",
    bg: "bg-violet-500/10 border-violet-500/20",
    hover: "hover:border-violet-500/40",
  },
  {
    icon: Brain,
    title: "Conhecimento que não se perde",
    description: "Bases de conhecimento inteligentes que respondem dúvidas operacionais em segundos. O novo colaborador chega produtivo na primeira semana.",
    iconHex: "#22d3ee",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    hover: "hover:border-cyan-400/40",
  },
  {
    icon: Hammer,
    title: "Soluções sob medida quando precisar",
    description: "Quando o problema é único, a solução também é. A FORJA.AI constrói sistemas proprietários do zero, integrados ao que sua empresa já usa.",
    iconHex: "#facc15",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    hover: "hover:border-yellow-400/40",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-[#0A1525] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Competências</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que a <span className="gradient-text-gold">IntelliX</span><span className="gradient-text">.AI</span> entrega
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Seis frentes de aplicação de IA que viraram resultado em empresas reais — cada uma com método próprio e métrica clara.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, index) => (
            <AnimatedSection key={cap.title} animation="fade-up" delay={index * 80}>
              <div className={`group flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 p-7 ${cap.hover} hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-[transform,box-shadow,border-color] duration-300`}>
                <div className={`w-11 h-11 rounded-xl ${cap.bg} border flex items-center justify-center mb-5 flex-shrink-0`}>
                  <cap.icon className="w-5 h-5" style={{ color: cap.iconHex }} />
                </div>
                <h3 className="font-bold text-white text-base mb-3 leading-snug">{cap.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
