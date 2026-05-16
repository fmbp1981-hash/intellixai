import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  MessageCircle,
  Quote,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

type Product = { name: string; url: string; isExternal: boolean };
type Metric = { stat: string; label: string; context: string };
type Phase = { title: string; deliveries: string[] };

type Case = {
  slug: string;
  client: string;
  logo: string;
  logoClass: string;
  logoContainer: string;
  segment: string;
  frente: string;
  gradient: string;
  avatarGradient: string;
  tagline: string;
  challenge: string;
  challengePoints: string[];
  solutionIntro: string;
  phases: Phase[];
  metrics: Metric[];
  products: Product[];
  quote?: { text: string; author: string; role: string };
  nextSlug: string;
  nextClient: string;
};

const cases: Record<string, Case> = {
  "grupo-cavendish": {
    slug: "grupo-cavendish",
    client: "Grupo Cavendish",
    logo: "/logos/logo-cavendish.png",
    logoClass: "object-cover",
    logoContainer: "bg-transparent",
    segment: "Governança · Real Estate · Consultoria",
    frente: "FORJA.AI",
    gradient: "from-violet-500 to-purple-400",
    avatarGradient: "from-violet-500/30 to-purple-400/20",
    tagline: "De planilhas e e-mails a um ecossistema digital completo — governança, compliance e 3 marcas com presença online profissional.",
    challenge:
      "O Grupo Cavendish operava três marcas distintas — Cavendish Consultoria, Grupo Cavendish e Be Your Home — cada uma com processos de governança fragmentados. Aprovações eram trocadas por e-mail, compliance era reativo, riscos não tinham visibilidade centralizada. A presença digital das marcas era amadora e inconsistente com o posicionamento premium do grupo.",
    challengePoints: [
      "Aprovações e fluxos de governança gerenciados por e-mail e planilha",
      "Sem controle de acesso por perfil — todo colaborador via tudo",
      "Risco e compliance sem dashboards ou alertas proativos",
      "3 marcas premium com sites desatualizados e sem identidade coesa",
      "Nenhuma visibilidade centralizada para a liderança sobre o estado do negócio",
    ],
    solutionIntro:
      "A IntelliX.AI construiu um ecossistema digital completo para o grupo: o Sistema GIG como central de governança corporativa e três sites institucionais com identidade visual própria para cada marca. Quatro entregas, todas em produção.",
    phases: [
      {
        title: "Sistema GIG — Governança Integrada do Grupo",
        deliveries: [
          "Portal centralizado de compliance, riscos e aprovações corporativas",
          "Controle de acesso por perfil — cada usuário acessa só o que é do seu escopo",
          "Fluxos de aprovação digitais que eliminaram papel e e-mail",
          "Dashboards executivos com status em tempo real para a liderança",
          "Relatórios automáticos por período, departamento e indicador",
        ],
      },
      {
        title: "3 Sites Institucionais com Identidade Premium",
        deliveries: [
          "Cavendish Consultoria — posicionamento consultivo B2B com autoridade",
          "Grupo Cavendish — hub corporativo das marcas do grupo",
          "Be Your Home — plataforma de real estate com captação de leads",
          "Design consistente com a proposta premium de cada marca",
          "Performance e SEO otimizados para conversão orgânica",
        ],
      },
    ],
    metrics: [
      {
        stat: "4",
        label: "soluções em produção",
        context: "Sistema GIG + 3 sites institucionais — todos verificáveis e acessíveis agora",
      },
      {
        stat: "Zero",
        label: "aprovações por e-mail",
        context: "Todos os fluxos de aprovação corporativa migrados para o Sistema GIG com trilha de auditoria",
      },
      {
        stat: "3",
        label: "marcas com identidade digital",
        context: "Cavendish Consultoria, Grupo Cavendish e Be Your Home — cada uma com posicionamento e site próprio",
      },
    ],
    products: [
      { name: "Sistema GIG", url: "https://cavendish-gig.vercel.app/auth", isExternal: true },
      { name: "Cavendish Consultoria", url: "https://www.cavendishconsultoria.com.br/", isExternal: true },
      { name: "Grupo Cavendish", url: "https://www.grupocavendish.com.br/", isExternal: true },
      { name: "Be Your Home", url: "https://www.beyourhome.com.br/", isExternal: true },
    ],
    nextSlug: "xpag-brasil",
    nextClient: "XPAG Brasil",
  },

  "xpag-brasil": {
    slug: "xpag-brasil",
    client: "XPAG Brasil",
    logo: "/logos/logo-xpag.png",
    logoClass: "object-contain p-2.5",
    logoContainer: "bg-white",
    segment: "Vendas B2B",
    frente: "FORJA.AI",
    gradient: "from-primary to-cyan-400",
    avatarGradient: "from-primary/30 to-cyan-400/20",
    tagline: "Um agente de IA qualificando leads no WhatsApp 24h por dia — e um site institucional que converte visitantes em oportunidades B2B.",
    challenge:
      "A XPAG Brasil precisava escalar prospecção B2B sem escalar o time. O processo manual de abordagem e qualificação de leads consumia horas do time comercial em contatos que nunca iriam fechar. Sem critério de priorização, a agenda era dominada por leads frios enquanto oportunidades reais ficavam em espera. A presença digital não conversava com o posicionamento B2B da empresa.",
    challengePoints: [
      "Time comercial gastando tempo qualificando leads frios manualmente",
      "Sem critério objetivo de priorização — todos os leads eram tratados igual",
      "Abordagem via WhatsApp dependia de um vendedor disponível para responder",
      "Perda de oportunidades por demora na primeira resposta",
      "Site institucional sem identidade B2B e sem geração de leads",
    ],
    solutionIntro:
      "A IntelliX.AI desenvolveu o LeadFinder Pro — plataforma de prospecção inteligente com agente de IA autônomo no WhatsApp — e um site institucional B2B que transmite autoridade e gera contatos qualificados.",
    phases: [
      {
        title: "LeadFinder Pro — Prospecção Inteligente com IA",
        deliveries: [
          "Agente de IA que aborda, qualifica e classifica leads no WhatsApp sem intervenção humana",
          "Scoring automático por perfil ideal de cliente — identifica quem tem potencial real",
          "Pipeline comercial com visibilidade completa do funil em tempo real",
          "Handoff automático para o closer só quando o lead está qualificado",
          "Histórico completo de cada conversa para o time acompanhar",
        ],
      },
      {
        title: "Site Institucional XPAG Brasil",
        deliveries: [
          "Identidade visual e copy posicionados para o mercado B2B",
          "Estrutura de captação de leads integrada ao pipeline comercial",
          "Performance e tempo de carregamento otimizados",
          "Responsivo e acessível em qualquer dispositivo",
        ],
      },
    ],
    metrics: [
      {
        stat: "24/7",
        label: "qualificação ativa no WhatsApp",
        context: "O agente de IA aborda e qualifica leads mesmo quando o time comercial está offline",
      },
      {
        stat: "0",
        label: "leads frios na agenda do closer",
        context: "O scoring elimina da agenda do time qualquer lead sem perfil de fechamento confirmado",
      },
      {
        stat: "2",
        label: "soluções integradas",
        context: "LeadFinder Pro e site institucional trabalhando juntos — leads do site caem direto no pipeline",
      },
    ],
    products: [
      { name: "LeadFinder Pro", url: "https://prospect-pulse-54.vercel.app/", isExternal: true },
      { name: "Site XPAG Brasil", url: "https://xpagbrasil-one-page.vercel.app/", isExternal: true },
    ],
    nextSlug: "yolo-coliving",
    nextClient: "Yolo Coliving",
  },

  "yolo-coliving": {
    slug: "yolo-coliving",
    client: "Yolo Coliving",
    logo: "/logos/logo-yolo.jpg",
    logoClass: "object-cover",
    logoContainer: "bg-transparent",
    segment: "Real Estate · Coliving",
    frente: "FORJA.AI + Virada Inteligente",
    gradient: "from-accent to-yellow-400",
    avatarGradient: "from-accent/30 to-yellow-400/20",
    tagline: "Virada Inteligente entregue — equipe do Yolo usando IA no dia a dia. Yolo AI Hub em desenvolvimento final, próxima entrega confirmada.",
    challenge:
      "O Yolo Coliving gerencia propriedades premium em destinos litorâneos e enfrentava dois desafios simultâneos: o processo comercial era manual e dependente de pessoas para cada etapa de prospecção, e a equipe operacional estava completamente à margem do uso de IA — enquanto o mercado imobiliário já se transformava ao redor.",
    challengePoints: [
      "Prospecção e qualificação de leads feitas manualmente — lenta e dependente de pessoa disponível",
      "Leads no Bitrix24 sem critério de segmentação ou prioridade de abordagem",
      "Time comercial dividido entre prospectar e fechar — sem foco em nenhum dos dois",
      "Nenhuma visibilidade de métricas do processo comercial em tempo real",
      "Equipe operacional sem fluência em IA enquanto o mercado evoluía ao redor",
    ],
    solutionIntro:
      "A IntelliX.AI conduziu a imersão Virada Inteligente — já entregue e confirmada — e está desenvolvendo o Yolo AI Hub: três módulos integrados que vão colocar um SDR virtual operando 24/7 no WhatsApp, segmentando leads e entregando visibilidade total do funil. Próxima entrega prevista para breve.",
    phases: [
      {
        title: "Virada Inteligente — Entregue ✓",
        deliveries: [
          "Imersão presencial de 3h com toda a equipe do Yolo Coliving",
          "9 ferramentas de IA aplicadas em tarefas reais da operação de coliving",
          "Cada participante saiu com pelo menos 1 tarefa real resolvida com IA",
          "Material customizado para o vocabulário e rotinas do negócio",
          "30 dias de suporte pós-imersão por WhatsApp",
        ],
      },
      {
        title: "Yolo AI Hub — Em Desenvolvimento Final",
        deliveries: [
          "Yolo SDR — agente IA autônomo que prospecta e qualifica leads no WhatsApp sem parar",
          "SmartMatch — segmentação inteligente dos leads do Bitrix24 por perfil e momento de compra",
          "Dashboard + Kanban — métricas do SDR, funil e performance em tempo real para a liderança",
          "Integração bidirecional com Bitrix24 — leads entram e saem do CRM automaticamente",
          "Handoff para closer com contexto completo da conversa — o humano fecha, a IA prospecta",
        ],
      },
    ],
    metrics: [
      {
        stat: "100%",
        label: "da equipe capacitada em IA",
        context: "Toda a equipe saiu da Virada Inteligente aplicando IA em tarefas reais do coliving — resultado entregue e verificável",
      },
      {
        stat: "Em breve",
        label: "Yolo AI Hub em produção",
        context: "SDR + SmartMatch + Dashboard finalizando desenvolvimento — próxima grande entrega do ecossistema Yolo × IntelliX.AI",
      },
      {
        stat: "24/7",
        label: "SDR virtual (previsto)",
        context: "Quando entrar em produção, o Yolo SDR vai prospectar e qualificar leads continuamente — inclusive fora do horário comercial",
      },
    ],
    products: [
      { name: "Yolo AI Hub", url: "/virada-inteligente", isExternal: false },
      { name: "Virada Inteligente", url: "/virada-inteligente", isExternal: false },
    ],
    quote: {
      text: "Em 3 horas a equipe inteira passou a usar IA de verdade no trabalho — não como curiosidade, como ferramenta diária. Isso a gente não conseguiria com nenhum curso online.",
      author: "Equipe Yolo Coliving",
      role: "Primeira turma in-company · Maio 2026",
    },
    nextSlug: "grupo-cavendish",
    nextClient: "Grupo Cavendish",
  },
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const c = slug ? cases[slug] : null;

  if (!c) return <Navigate to="/cases" replace />;

  const whatsappUrl = `https://wa.me/5581988514775?text=${encodeURIComponent("Olá! Vi o case " + c.client + " no site da IntelliX.AI e quero conversar sobre uma solução para meu negócio.")}`;

  return (
    <Layout>
      <Helmet>
        <title>{c.client} | Cases | IntelliX.AI</title>
        <meta name="description" content={c.tagline} />
        <meta property="og:title" content={`${c.client} | Cases | IntelliX.AI`} />
        <meta property="og:description" content={c.tagline} />
        <meta property="og:url" content={`https://intellixai.com.br/cases/${c.slug}`} />
        <link rel="canonical" href={`https://intellixai.com.br/cases/${c.slug}`} />
      </Helmet>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient.replace("from-", "from-").replace("to-", "to-")} opacity-5 pointer-events-none`} />
        <div className={`absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br ${c.gradient} opacity-[0.04] rounded-full blur-[140px] pointer-events-none`} />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <AnimatedSection animation="fade-up">
            <Link to="/cases" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors duration-200 mb-10 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Todos os cases
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={80}>
            <div className="flex items-start gap-5 mb-8">
              <div className={`w-16 h-16 rounded-2xl ${c.logoContainer} border border-white/10 overflow-hidden flex-shrink-0`}>
                <img src={c.logo} alt={c.client} className={`w-full h-full ${c.logoClass}`} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl font-black text-white">{c.client}</h1>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${c.gradient} text-white`}>
                    via {c.frente}
                  </span>
                </div>
                <span className="text-sm text-white/40">{c.segment}</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl font-bold text-white leading-snug mb-5 max-w-3xl">
              {c.tagline}
            </p>

            {/* Product links */}
            <div className="flex flex-wrap gap-2 mb-10">
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
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <Link
                    key={p.name}
                    to={p.url}
                    className="inline-flex items-center gap-1.5 text-xs px-3.5 py-2 rounded-lg border border-accent/35 bg-accent/6 text-accent hover:border-accent/55 hover:bg-accent/12 transition-[border-color,background-color] duration-200"
                  >
                    {p.name}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                )
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── O DESAFIO ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-1">O desafio</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  O problema que <span className="gradient-text-gold">precisava de solução</span>
                </h2>
              </div>
            </div>

            <p className="text-white/65 leading-relaxed mb-7 text-base">{c.challenge}</p>

            <ul className="space-y-3">
              {c.challengePoints.map((point) => (
                <li key={point} className="flex items-start gap-3 p-4 rounded-xl border border-red-500/10 bg-red-500/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400/70 mt-2 flex-shrink-0" />
                  <p className="text-sm text-white/65 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── A SOLUÇÃO ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-10">
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-1">A solução</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  O que a <span className="gradient-text">IntelliX.AI</span>{" "}
                  <span className="gradient-text-gold">construiu</span>
                </h2>
              </div>
            </div>
            <p className="text-white/65 leading-relaxed">{c.solutionIntro}</p>
          </AnimatedSection>

          <div className="space-y-5">
            {c.phases.map((phase, i) => (
              <AnimatedSection key={phase.title} animation="fade-up" delay={i * 80}>
                <div className="rounded-2xl border border-white/8 bg-white/4 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${c.gradient}`} />
                  <div className="p-7">
                    <h3 className="font-bold text-white mb-4 text-base">{phase.title}</h3>
                    <ul className="space-y-2.5">
                      {phase.deliveries.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1525] border-y border-white/6">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="mb-10">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-1">O resultado</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Em <span className="gradient-text-mixed">números verificáveis</span>
                </h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {c.metrics.map((m, i) => (
              <AnimatedSection key={m.label} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/4 hover:-translate-y-1 hover:border-accent/25 transition-[transform,border-color] duration-300">
                  <p className="text-5xl font-black gradient-text-gold mb-1">{m.stat}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">{m.label}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{m.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Quote */}
          {c.quote && (
            <AnimatedSection className="mt-8">
              <div className="relative rounded-2xl border border-accent/20 bg-accent/5 p-8 overflow-hidden">
                <Quote className="absolute top-5 right-5 w-10 h-10 text-accent/10" />
                <blockquote className="text-white/80 text-base leading-relaxed mb-4 italic max-w-2xl">
                  "{c.quote.text}"
                </blockquote>
                <p className="text-sm font-semibold text-accent">{c.quote.author}</p>
                <p className="text-xs text-white/35">{c.quote.role}</p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ── PRÓXIMO CASE + CTA ───────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">

            {/* Próximo case */}
            <AnimatedSection animation="fade-right">
              <Link to={`/cases/${c.nextSlug}`} className="block group">
                <div className="h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-white/20 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-4">Próximo case</p>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors duration-200">
                    {c.nextClient}
                  </h3>
                  <p className="text-sm text-white/45 mb-5">Ver o case completo →</p>
                  <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                    Ver case
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection animation="fade-left">
              <div className="h-full p-7 rounded-2xl border border-accent/25 bg-accent/5 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                    Quer um case como este?
                  </p>
                  <p className="text-white text-base font-semibold leading-snug mb-4">
                    Começa com 30 minutos. Mapeamos 3 oportunidades de IA no seu negócio — sem compromisso.
                  </p>
                </div>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com a IntelliX.AI
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

    </Layout>
  );
}
