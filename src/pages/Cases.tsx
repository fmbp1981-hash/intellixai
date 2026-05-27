import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

type Product = {
  name: string;
  url: string;
  isExternal: boolean;
};

type Case = {
  client: string;
  segment: string;
  logo: string;
  logoClass: string;
  logoContainer: string;
  badge: string;
  frente: string;
  slug: string;
  headline: string;
  description: string;
  deliveries: string[];
  products: Product[];
  gradient: string;
  borderHover: string;
  avatarGradient: string;
};

const cases: Case[] = [
  {
    client: "Grupo Cavendish",
    segment: "Governança · Real Estate · Consultoria",
    logo: "/logos/logo-cavendish.png",
    logoClass: "object-cover",
    logoContainer: "bg-transparent",
    badge: "4 soluções entregues",
    frente: "FORJA.AI",
    slug: "grupo-cavendish",
    headline: "De processos manuais em planilhas a um ecossistema digital completo — governança, marca e presença online integradas.",
    description:
      "O Grupo Cavendish precisava de controle real sobre seus processos de governança e de uma presença digital à altura das marcas do grupo. A IntelliX.AI entregou o Sistema GIG — central de gestão e aprovações — e três sites institucionais, cada um com identidade própria. Hoje o grupo opera com visibilidade total, acesso por perfil e marca digital profissional em todas as frentes.",
    deliveries: [
      "Controle centralizado de compliance, riscos e aprovações corporativas",
      "Cada usuário acessa apenas o que é do seu escopo — sem risco de exposição",
      "Fluxos de aprovação que eliminaram papel, e-mail e atrasos",
      "Dashboards que entregam o status do negócio em tempo real para os executivos",
      "3 marcas do grupo com presença digital profissional e rastreável",
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
    segment: "Vendas B2B",
    logo: "/logos/logo-xpag.png",
    logoClass: "object-contain p-2.5",
    logoContainer: "bg-white",
    badge: "2 soluções entregues",
    frente: "FORJA.AI",
    slug: "xpag-brasil",
    headline: "Um SDR com IA trabalhando 24h por dia — mais reuniões qualificadas, menos tempo em leads que não vão fechar.",
    description:
      "A XPAG precisava escalar prospecção sem escalar headcount. A IntelliX.AI criou o LeadFinder Pro: um agente de IA que aborda, qualifica e pontua cada lead via WhatsApp — e passa para o time comercial somente os contatos com real potencial de fechamento. Complementando, um site institucional B2B que transmite autoridade e converte visitantes em oportunidades.",
    deliveries: [
      "Qualificação automática de leads via WhatsApp — o agente trabalha enquanto o time descansa",
      "Scoring que prioriza os leads com maior chance de fechamento",
      "Agenda do time de vendas preenchida com reuniões que valem o tempo",
      "Visibilidade completa do pipeline comercial em tempo real",
      "Presença digital B2B que gera autoridade no mercado",
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
    segment: "Real Estate · Coliving",
    logo: "/logos/logo-yolo.jpg",
    logoClass: "object-cover",
    logoContainer: "bg-transparent",
    badge: "Em entrega",
    frente: "FORJA.AI + Virada Inteligente",
    slug: "yolo-coliving",
    headline: "Virada Inteligente entregue e confirmada. Yolo AI Hub — o próximo grande passo — em desenvolvimento final.",
    description:
      "A IntelliX.AI já entregou a imersão Virada Inteligente para toda a equipe do Yolo Coliving. Agora, o Yolo AI Hub está em desenvolvimento final: três módulos integrados (SDR de IA no WhatsApp, SmartMatch de leads e Dashboard de performance) que vão automatizar o processo comercial completo. Primeira entrega prevista para breve.",
    deliveries: [
      "Virada Inteligente concluída — equipe capacitada com as principais ferramentas de IA",
      "Yolo SDR — agente IA autônomo no WhatsApp (em entrega)",
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

export default function Cases() {
  return (
    <Layout>
      <Helmet>
        <title>Cases de Sucesso | IntelliX.AI - Resultados Reais com IA</title>
        <meta name="description" content="Veja como empresas brasileiras transformaram suas operações com automação e IA. Cases reais, métricas reais, resultados mensuráveis." />
        <meta property="og:title" content="Cases de Sucesso | IntelliX.AI - Resultados Reais com IA" />
        <meta property="og:description" content="Veja como empresas brasileiras transformaram suas operações com automação e IA. Cases reais, métricas reais, resultados mensuráveis." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/cases" />
      </Helmet>
      {/* Hero */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  Projetos vivos em operação
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Soluções reais.{" "}
                <span className="gradient-text-gold">Resultados verificáveis.</span>
              </h1>
              <p className="text-lg text-white/50 leading-relaxed">
                Cada entrega da IntelliX.AI está em produção agora, gerando resultado para o negócio do cliente. Você pode acessar e ver com seus próprios olhos.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {cases.map((c, index) => (
              <AnimatedSection key={c.client} animation="fade-up" delay={index * 100}>
                <div
                  className={`rounded-2xl border border-white/8 bg-white/3 overflow-hidden ${c.borderHover} transition-[border-color] duration-300`}
                >
                  {/* Top bar */}
                  <div className={`h-1 bg-gradient-to-r ${c.gradient}`} />

                  <div className="p-8 md:p-10">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row gap-5 mb-7">
                      <div
                        className={`w-14 h-14 rounded-xl ${c.logoContainer} border border-white/10 overflow-hidden flex-shrink-0`}
                      >
                        <img src={c.logo} alt={c.client} className={`w-full h-full ${c.logoClass}`} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1.5">
                          <h2 className="text-xl font-bold text-white">{c.client}</h2>
                          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${c.gradient} text-white`}>
                            {c.badge}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/6 border border-white/10 text-white/50">
                            {c.segment}
                          </span>
                          <span className="text-xs text-white/30">via</span>
                          <span className="text-xs font-semibold text-accent/80">{c.frente}</span>
                        </div>
                      </div>
                    </div>

                    {/* Headline */}
                    <p className="text-base font-semibold text-white leading-snug mb-3">
                      {c.headline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-white/55 leading-relaxed mb-6">
                      {c.description}
                    </p>

                    {/* Deliveries */}
                    <div className="mb-7">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-3">
                        O que foi entregue
                      </p>
                      <ul className="space-y-2.5">
                        {c.deliveries.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Case detail link */}
                    <Link to={`/cases/${c.slug}`} className="block mb-5">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-accent/30 text-accent hover:border-accent/55 hover:bg-accent/8 transition-[border-color,background-color] duration-200 group"
                      >
                        Ver case completo
                        <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>

                    {/* Products / Links */}
                    <div className="border-t border-white/8 pt-5">
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
                              className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg border border-white/12 bg-white/4 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/8 transition-[border-color,color,background-color] duration-200"
                            >
                              {p.name}
                              <ExternalLink className="w-3 h-3 flex-shrink-0" />
                            </a>
                          ) : (
                            <Link
                              key={p.name}
                              to={p.url}
                              className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg border border-accent/35 bg-accent/6 text-accent hover:border-accent/55 hover:bg-accent/12 transition-[border-color,background-color] duration-200"
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quer ser o próximo case?
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Começa com um diagnóstico gratuito de 30 minutos. Mapeamos 3 oportunidades reais de IA no seu negócio — sem compromisso, sem enrolação.
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
