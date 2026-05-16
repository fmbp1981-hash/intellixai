import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Hammer, Map, Users } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const fronts = [
  {
    icon: Search,
    image: "/solucoes/radar-ai.svg",
    imageContainerClass: "h-28",
    imageClass: "w-full h-full object-cover object-left",
    name: "RADAR.AI",
    nameGold: "RADAR",
    nameCyan: ".AI",
    target: "B2B · Diagnóstico estratégico",
    headline: "Antes de investir em IA, saiba exatamente onde ela gera retorno na sua operação.",
    deliveries: [
      "Especialista mergulhado na sua operação por 2 a 4 semanas",
      "Mapa de oportunidades com ROI estimado por iniciativa",
      "Plano priorizado: quick wins + roadmap de 6 a 12 meses",
    ],
    url: "/radar-ai",
    // Cyan / primary
    topBar: "from-cyan-400 to-primary",
    iconBg: "bg-cyan-400/15 border-cyan-400/30",
    iconColor: "text-cyan-400",
    badge: "bg-cyan-400/12 border-cyan-400/30 text-cyan-300",
    cta: "border-cyan-400/40 text-cyan-300 hover:border-cyan-400/70 hover:bg-cyan-400/8",
    glow: "hover:shadow-[0_20px_50px_rgba(0,180,220,0.12)]",
    activeBorder: "hover:border-cyan-400/30",
  },
  {
    icon: Hammer,
    image: "/solucoes/forja-ai.svg",
    imageContainerClass: "h-28",
    imageClass: "w-full h-full object-cover object-left",
    name: "FORJA.AI",
    nameGold: "FORJA",
    nameCyan: ".AI",
    target: "B2B · Desenvolvimento sob medida",
    headline: "Quando o problema é único, a solução precisa ser construída do zero — com IA.",
    deliveries: [
      "Sistemas e agentes de IA específicos para o seu processo",
      "Integração com o que você já usa — sem substituir o que funciona",
      "Código entregue ao cliente. Propriedade intelectual 100% sua.",
    ],
    url: "/forja-ai",
    // Gold / accent
    topBar: "from-accent to-yellow-400",
    iconBg: "bg-yellow-400/15 border-yellow-400/30",
    iconColor: "text-yellow-400",
    badge: "bg-yellow-400/12 border-yellow-400/30 text-yellow-300",
    cta: "border-yellow-400/40 text-yellow-300 hover:border-yellow-400/70 hover:bg-yellow-400/8",
    glow: "hover:shadow-[0_20px_50px_rgba(220,180,0,0.12)]",
    activeBorder: "hover:border-yellow-400/30",
  },
  {
    icon: Map,
    image: "/solucoes/trilha-ai.svg",
    imageContainerClass: "h-28",
    imageClass: "w-full h-full object-cover object-left",
    name: "TRILHA.AI",
    nameGold: "TRILHA",
    nameCyan: ".AI",
    target: "B2C · Mentoria individual",
    headline: "Sua trilha de IA personalizada — com plano, sessões práticas 1:1 e acompanhamento.",
    deliveries: [
      "Diagnóstico inicial + plano de trilha sob medida",
      "Sessões 1:1 com Felipe Maranhão usando suas tarefas reais",
      "Canal direto entre sessões para dúvidas de aplicação",
    ],
    url: "/trilha-ai",
    // Violet
    topBar: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
    badge: "bg-violet-500/12 border-violet-500/30 text-violet-300",
    cta: "border-violet-500/40 text-violet-300 hover:border-violet-500/70 hover:bg-violet-500/8",
    glow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.12)]",
    activeBorder: "hover:border-violet-500/30",
  },
  {
    icon: Users,
    image: "/virada-brain-clean.png",
    imageContainerClass: "h-32 bg-[#060d1a] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain",
    name: "Virada Inteligente",
    nameGold: "Virada",
    nameCyan: " Inteligente",
    target: "In-company + Turma aberta",
    headline: "Em 3 horas, sua equipe inteira sai do zero ao uso real de 9 ferramentas de IA.",
    deliveries: [
      "Imersão presencial com metodologia Aprenda · Veja · Faça",
      "Conteúdo customizado com tarefas reais da sua empresa",
      "30 dias de suporte pós-imersão por WhatsApp",
    ],
    url: "/virada-inteligente",
    // Emerald
    topBar: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    iconColor: "text-emerald-400",
    badge: "bg-emerald-500/12 border-emerald-500/30 text-emerald-300",
    cta: "border-emerald-500/40 text-emerald-300 hover:border-emerald-500/70 hover:bg-emerald-500/8",
    glow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]",
    activeBorder: "hover:border-emerald-500/30",
  },
];

export function SolutionsPreview() {
  return (
    <section className="py-24 bg-[#060D1A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <AnimatedSection className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/12 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/60">
              4 frentes de atuação
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Uma solução <span className="gradient-text">especializada</span>{" "}
            para cada <span className="gradient-text-gold">estágio do negócio</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Não existe resposta genérica para problema específico. Cada frente da IntelliX.AI foi criada para um contexto diferente — e entregada por especialista, não por plataforma.
          </p>
        </AnimatedSection>

        {/* Grid 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {fronts.map((f, i) => (
            <AnimatedSection key={f.name} animation="fade-up" delay={i * 60}>
              <div className={`group flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 overflow-hidden ${f.activeBorder} hover:-translate-y-1 ${f.glow} transition-[transform,box-shadow,border-color] duration-300`}>

                {("image" in f && f.image) ? (
                  <div className={`overflow-hidden flex-shrink-0 relative ${ (f as { imageContainerClass?: string }).imageContainerClass ?? "h-24" }`}>
                    <img
                      src={(f as { image: string }).image}
                      alt={f.name}
                      className={(f as { imageClass?: string }).imageClass ?? "w-full h-full object-cover object-left"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
                  </div>
                ) : (
                  <div className={`h-[3px] bg-gradient-to-r ${f.topBar} flex-shrink-0`} />
                )}

                <div className="p-5 flex flex-col flex-1">
                  {/* Icon + name + badge */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-xl ${f.iconBg} border flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity duration-300`}>
                      <f.icon className={`w-4 h-4 ${f.iconColor}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-base text-white leading-tight mb-0.5">
                        <span className="gradient-text-gold">{f.nameGold}</span>
                        <span className="gradient-text">{f.nameCyan}</span>
                      </h3>
                      <span className={`inline-flex items-center text-[9px] font-bold px-1.5 py-0.5 rounded-full border ${f.badge}`}>
                        {f.target}
                      </span>
                    </div>
                  </div>

                  {/* Headline */}
                  <p className="text-sm font-semibold text-white leading-snug mb-4">
                    {f.headline}
                  </p>

                  {/* Deliveries */}
                  <ul className="space-y-2 mb-5 flex-1">
                    {f.deliveries.slice(0, 2).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-white/55 leading-snug">
                        <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-white/25" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={f.url}>
                    <Button
                      variant="outline"
                      size="sm"
                      className={`w-full border text-xs transition-[border-color,background-color] duration-200 group/btn ${f.cta}`}
                    >
                      Conhecer a frente
                      <ArrowRight className="ml-1.5 w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center">
          <p className="text-white/35 text-sm mb-4">Não sabe qual frente faz sentido pro seu momento?</p>
          <Link to="/solucoes">
            <Button
              variant="outline"
              className="border-white/15 text-white/60 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-[border-color,color,background-color] duration-200 group"
            >
              Ver comparativo completo das soluções
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
