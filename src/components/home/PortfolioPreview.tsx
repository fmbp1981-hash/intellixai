import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

type Product = {
  name: string;
  url: string;
  isExternal: boolean;
};

type Case = {
  client: string;
  initials: string;
  segment: string;
  frente: string;
  badge: string;
  description: string;
  deliveries: string[];
  products: Product[];
  gradient: string;
  avatarGradient: string;
  borderHover: string;
};

const cases: Case[] = [
  {
    client: "Grupo Cavendish",
    initials: "GC",
    segment: "Governança · Real Estate · Consultoria",
    frente: "FORJA.AI",
    badge: "4 soluções",
    description:
      "Ecossistema digital completo construído sob medida: da governança corporativa à presença digital das marcas do grupo. Quatro entregas especializadas, todas em produção.",
    deliveries: [
      "Sistema GIG — governança, compliance e riscos com 39 tabelas",
      "Fluxo de aprovação com RLS por perfil de acesso",
      "3 sites institucionais com identidade e performance",
      "Dashboards executivos com relatórios automáticos",
    ],
    products: [
      { name: "Sistema GIG", url: "https://cavendish-gig.vercel.app/auth", isExternal: true },
      { name: "Cavendish Consultoria", url: "https://www.cavendishconsultoria.com.br/", isExternal: true },
      { name: "Grupo Cavendish", url: "https://www.grupocavendish.com.br/", isExternal: true },
      { name: "Be Your Home", url: "https://www.beyourhome.com.br/", isExternal: true },
    ],
    gradient: "from-violet-500 to-purple-400",
    avatarGradient: "from-violet-500/30 to-purple-400/20",
    borderHover: "hover:border-violet-500/30",
  },
  {
    client: "XPAG Brasil",
    initials: "XP",
    segment: "Vendas B2B",
    frente: "FORJA.AI",
    badge: "2 soluções",
    description:
      "Plataforma de prospecção inteligente com IA + presença digital profissional. Do lead qualificado no WhatsApp ao site institucional — soluções 100% personalizadas para o negócio.",
    deliveries: [
      "LeadFinder Pro — agente IA + WhatsApp + pipeline B2B",
      "Scoring automático de leads por perfil ideal de cliente",
      "Integração nativa Evolution API + WhatsApp",
      "Site institucional com identidade de marca",
    ],
    products: [
      { name: "LeadFinder Pro", url: "https://prospect-pulse-54.vercel.app/", isExternal: true },
      { name: "Site XPAG Brasil", url: "https://xpagbrasil-one-page.vercel.app/", isExternal: true },
    ],
    gradient: "from-primary to-cyan-400",
    avatarGradient: "from-primary/30 to-cyan-400/20",
    borderHover: "hover:border-primary/30",
  },
  {
    client: "Yolo Coliving",
    initials: "YC",
    segment: "Real Estate · Coliving",
    frente: "FORJA.AI + Virada Inteligente",
    badge: "Em entrega",
    description:
      "Imersão Virada Inteligente entregue e confirmada. Yolo AI Hub — hub de automação comercial com SDR de IA, SmartMatch e Dashboard — em desenvolvimento final e com entrega prevista para breve.",
    deliveries: [
      "Imersão Virada Inteligente — equipe capacitada em 9 ferramentas de IA ✓",
      "Yolo SDR — agente IA autônomo no WhatsApp 24/7 (em entrega)",
      "SmartMatch — segmentação inteligente de leads via Bitrix24 (em entrega)",
      "Dashboard + Kanban com métricas e funil em tempo real (em entrega)",
    ],
    products: [
      { name: "Yolo AI Hub", url: "/virada-inteligente", isExternal: false },
      { name: "Virada Inteligente", url: "/virada-inteligente", isExternal: false },
    ],
    gradient: "from-accent to-yellow-400",
    avatarGradient: "from-accent/30 to-yellow-400/20",
    borderHover: "hover:border-accent/30",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-24 bg-[#0A1525] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Projetos vivos em operação
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Soluções reais,{" "}
              <span className="gradient-text-gold">resultados verificáveis.</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Cada projeto entregue pela IntelliX.AI está em produção e gerando resultado agora — você pode verificar.
            </p>
          </div>
          <Link to="/cases" className="flex-shrink-0">
            <Button
              variant="outline"
              className="border-white/15 text-white/70 hover:border-accent/40 hover:text-accent hover:bg-accent/5 transition-[border-color,color,background-color] duration-200 group"
            >
              Ver todos os cases
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
        </AnimatedSection>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <AnimatedSection key={c.client} animation="fade-up" delay={i * 100}>
              <div
                className={`flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 overflow-hidden ${c.borderHover} hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-300`}
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${c.gradient} flex-shrink-0`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Client header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.avatarGradient} border border-white/10 flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-sm font-black text-white">{c.initials}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-white text-base leading-tight">{c.client}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${c.gradient} bg-opacity-20 text-white`}>
                          {c.badge}
                        </span>
                      </div>
                      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-white/6 border border-white/10 text-white/50 mt-1">
                        {c.segment}
                      </span>
                    </div>
                  </div>

                  {/* Frente */}
                  <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">
                    Entrega via {c.frente}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/55 leading-relaxed mb-5">
                    {c.description}
                  </p>

                  {/* Deliveries */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {c.deliveries.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Products / Links */}
                  <div className="border-t border-white/8 pt-5 mt-auto">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                      Acessar entregas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.products.map((p) =>
                        p.isExternal ? (
                          <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-white/12 bg-white/4 text-white/60 hover:border-white/25 hover:text-white hover:bg-white/8 transition-[border-color,color,background-color] duration-200"
                          >
                            {p.name}
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        ) : (
                          <Link
                            key={p.name}
                            to={p.url}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-accent/30 bg-accent/6 text-accent hover:border-accent/50 hover:bg-accent/10 transition-[border-color,background-color] duration-200"
                          >
                            {p.name}
                            <ArrowRight className="w-3 h-3 flex-shrink-0" />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-14">
          <p className="text-white/40 text-sm mb-5">
            Quer ser o próximo case? Começa com uma conversa de 30 minutos.
          </p>
          <Link to="/diagnostico">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 shadow-[0_0_25px_hsl(var(--accent)/0.35)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.55)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
            >
              Agendar diagnóstico gratuito
              <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={16} />
            </Button>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
