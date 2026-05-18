import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Building2, User, Search, Hammer, Map, Users } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

// ─── Data ────────────────────────────────────────────────────────────────────

const b2bFronts = [
  {
    icon: Search,
    image: "/solucoes/radar-ai.svg",
    imageContainerClass: "h-32 bg-[#060d1a] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain opacity-80",
    badge: "Consultoria estratégica",
    name: "RADAR.AI",
    nameGold: "RADAR",
    nameCyan: ".AI",
    tagline: "Onde está a IA que mais gera resultado no seu negócio — antes de você gastar um centavo em projeto.",
    bullets: [
      "Diagnóstico completo em 2 a 4 semanas",
      "Mapa de oportunidades com ROI estimado por iniciativa",
      "Plano priorizado: quick wins + roadmap de 6 a 12 meses",
    ],
    ctaLabel: "Conhecer o RADAR.AI",
    ctaHref: "/radar-ai",
    topBar: "from-cyan-400 to-primary",
    iconBg: "bg-cyan-400/12 border-cyan-400/25",
    iconColor: "#22d3ee",
    badgeClass: "bg-cyan-400/10 border-cyan-400/25 text-cyan-300",
    checkColor: "text-cyan-400",
    cta: "border-cyan-400/35 text-cyan-300 hover:border-cyan-400/60 hover:bg-cyan-400/6",
    borderHover: "hover:border-cyan-400/25",
  },
  {
    icon: Hammer,
    image: "/solucoes/forja-ai.svg",
    imageContainerClass: "h-32 bg-[#0d0900] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain opacity-80",
    badge: "Desenvolvimento sob medida",
    name: "FORJA.AI",
    nameGold: "FORJA",
    nameCyan: ".AI",
    tagline: "Quando o problema é único, a solução também é. Sistemas de IA construídos do zero para sua empresa.",
    bullets: [
      "Sistemas e agentes de IA específicos para o seu processo",
      "Integração com seus sistemas atuais — sem substituir o que funciona",
      "Propriedade intelectual do código 100% entregue ao cliente",
    ],
    ctaLabel: "Conhecer a FORJA.AI",
    ctaHref: "/forja-ai",
    topBar: "from-accent to-yellow-400",
    iconBg: "bg-yellow-400/12 border-yellow-400/25",
    iconColor: "#facc15",
    badgeClass: "bg-yellow-400/10 border-yellow-400/25 text-yellow-300",
    checkColor: "text-yellow-400",
    cta: "border-yellow-400/35 text-yellow-300 hover:border-yellow-400/60 hover:bg-yellow-400/6",
    borderHover: "hover:border-yellow-400/25",
  },
  {
    icon: Users,
    image: "/virada-brain-clean.png",
    imageContainerClass: "h-36 bg-[#060d1a] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain",
    badge: "Imersão executiva in-company",
    name: "Virada Inteligente",
    nameGold: "Virada",
    nameCyan: " Inteligente",
    tagline: "Em 3 horas, sua equipe inteira sai do zero ao uso real de 9 ferramentas de IA no dia a dia.",
    bullets: [
      "Formato in-company com tarefas reais da sua empresa",
      "Cada participante sai com 1 tarefa concreta resolvida com IA",
      "30 dias de suporte por WhatsApp após a imersão",
    ],
    ctaLabel: "Conhecer a Virada Inteligente",
    ctaHref: "/virada-inteligente",
    topBar: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/12 border-emerald-500/25",
    iconColor: "#34d399",
    badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    checkColor: "text-emerald-400",
    cta: "border-emerald-500/35 text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-500/6",
    borderHover: "hover:border-emerald-500/25",
  },
];

const b2cFronts = [
  {
    icon: Map,
    image: "/solucoes/trilha-ai.svg",
    imageContainerClass: "h-32 bg-[#06040f] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain opacity-80",
    badge: "Mentoria individual",
    name: "TRILHA.AI",
    nameGold: "TRILHA",
    nameCyan: ".AI",
    tagline: "Mentoria 1:1 para líderes e empreendedores que querem aplicar IA no próprio negócio — não no slide do próximo trimestre.",
    bullets: [
      "Sessões individuais online ou presenciais em Recife",
      "Plano de trilha personalizado com suas tarefas reais",
      "Canal direto entre sessões para dúvidas de aplicação",
    ],
    ctaLabel: "Conhecer a TRILHA.AI",
    ctaHref: "/trilha-ai",
    topBar: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-500/12 border-violet-500/25",
    iconColor: "#a78bfa",
    badgeClass: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    checkColor: "text-violet-400",
    cta: "border-violet-500/35 text-violet-300 hover:border-violet-500/60 hover:bg-violet-500/6",
    borderHover: "hover:border-violet-500/25",
  },
  {
    icon: Users,
    image: "/virada-brain-clean.png",
    imageContainerClass: "h-36 bg-[#060d1a] flex items-center justify-center",
    imageClass: "h-full w-auto object-contain",
    badge: "Imersão em turma aberta",
    name: "Virada Inteligente",
    nameGold: "Virada",
    nameCyan: " Inteligente",
    tagline: "A mesma imersão executiva que treinou equipes inteiras, agora em formato de turma aberta para profissionais e líderes.",
    bullets: [
      "3 horas presenciais com 9 ferramentas de IA ao vivo",
      "Aplicação prática em tarefas reais do seu trabalho",
      "Vagas limitadas — turmas com até 20 participantes",
    ],
    ctaLabel: "Ver próximas turmas",
    ctaHref: "/virada-inteligente#turmas",
    topBar: "from-emerald-500 to-teal-400",
    iconBg: "bg-emerald-500/12 border-emerald-500/25",
    iconColor: "#34d399",
    badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    checkColor: "text-emerald-400",
    cta: "border-emerald-500/35 text-emerald-300 hover:border-emerald-500/60 hover:bg-emerald-500/6",
    borderHover: "hover:border-emerald-500/25",
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

type Front = typeof b2bFronts[0];

function FrontCard({ front, delay = 0 }: { front: Front; delay?: number }) {
  const Icon = front.icon;
  const hasImage = "image" in front && Boolean(front.image);
  return (
    <AnimatedSection animation="fade-up" delay={delay}>
      <div className={`group flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 overflow-hidden ${front.borderHover} hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-300`}>

        {hasImage ? (
          <div className={`overflow-hidden flex-shrink-0 relative ${ (front as { imageContainerClass?: string }).imageContainerClass ?? "h-40" }`}>
            <img
              src={(front as { image: string }).image}
              alt={front.name}
              className={(front as { imageClass?: string }).imageClass ?? "w-full h-full object-cover object-left"}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
          </div>
        ) : (
          <div className={`h-[3px] bg-gradient-to-r ${front.topBar} flex-shrink-0`} />
        )}

        <div className="p-5 md:p-6 flex flex-col flex-1">

          {/* Badge + icon */}
          <div className="flex items-start gap-4 mb-5">
            <div className={`w-11 h-11 rounded-xl ${front.iconBg} border flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-5 h-5" style={{ color: front.iconColor }} />
            </div>
            <div className="min-w-0">
              <h3 className="font-black text-lg text-white leading-tight mb-1">
                <span className="gradient-text-gold">{front.nameGold}</span>
                <span className="gradient-text">{front.nameCyan}</span>
              </h3>
              <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${front.badgeClass}`}>
                {front.badge}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm font-semibold text-white leading-snug mb-5">
            {front.tagline}
          </p>

          {/* Bullets */}
          <ul className="space-y-2.5 mb-7 flex-1">
            {front.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5">
                <CheckCircle className={`w-4 h-4 ${front.checkColor} mt-0.5 flex-shrink-0`} />
                <span className="text-sm text-white/65 leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to={front.ctaHref}>
            <Button
              variant="outline"
              size="sm"
              className={`w-full border transition-[border-color,background-color] duration-200 group/btn ${front.cta}`}
            >
              {front.ctaLabel}
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

function SectionDivider({ label, type }: { label: string; type: "B2B" | "B2C" }) {
  const isB2B = type === "B2B";
  return (
    <div className="flex items-center gap-4 my-12">
      <div className={`flex-1 h-px bg-gradient-to-r from-transparent ${isB2B ? "to-primary/30" : "to-violet-500/30"}`} />
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-widest ${
        isB2B
          ? "border-primary/25 bg-primary/8 text-primary"
          : "border-violet-500/25 bg-violet-500/8 text-violet-300"
      }`}>
        {isB2B ? <Building2 className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
        {label}
      </div>
      <div className={`flex-1 h-px bg-gradient-to-l from-transparent ${isB2B ? "to-primary/30" : "to-violet-500/30"}`} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Solucoes() {
  return (
    <Layout>
      <Helmet>
        <title>Soluções de IA para Empresas | IntelliX.AI</title>
        <meta name="description" content="IA sob medida para empresas B2B e para o crescimento pessoal e profissional. Conheça o ecossistema IntelliX: RADAR.AI, FORJA.AI, TRILHA.AI e mais." />
        <meta property="og:title" content="Soluções de IA para Empresas | IntelliX.AI" />
        <meta property="og:description" content="IA sob medida para empresas B2B e para o crescimento pessoal e profissional. Conheça o ecossistema IntelliX." />
        <meta property="og:url" content="https://intellixai.com.br/solucoes" />
        <link rel="canonical" href="https://intellixai.com.br/solucoes" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">4 frentes de atuação</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluções organizadas pelo que{" "}
              <span className="gradient-text-gold">o seu momento</span>{" "}
              <span className="gradient-text">exige</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Empresa, líder ou profissional — escolha por onde começar. Cada frente tem método próprio e entrega mensurável.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Frentes */}
      <section className="pb-20 bg-[#0A1525]">
        <div className="container mx-auto px-4">

          <SectionDivider label="Para Empresas · B2B" type="B2B" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
            {b2bFronts.map((front, i) => (
              <FrontCard key={front.name + front.badge} front={front} delay={i * 80} />
            ))}
          </div>

          <SectionDivider label="Para Profissionais · B2C" type="B2C" />
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {b2cFronts.map((front, i) => (
              <FrontCard key={front.name + front.badge} front={front} delay={i * 80} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-primary/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Não sabe por qual frente começar?
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              O Diagnóstico Gratuito mapeia exatamente onde a IA gera mais resultado no seu negócio — antes de qualquer investimento.
            </p>
            <Link to="/diagnostico">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                Agendar diagnóstico gratuito
                <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
}
