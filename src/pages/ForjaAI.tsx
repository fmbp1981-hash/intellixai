import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Hammer,
  Code2,
  Cpu,
  GitMerge,
  Bot,
  BarChart3,
  Database,
  Workflow,
  FileCode2,
  ShieldCheck,
  Clock,
  Sparkles,
  Building2,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const solutionTypes = [
  {
    icon: Bot,
    title: "Agentes de IA conversacionais",
    description: "Atendimento, prospecção, suporte e qualificação de leads. Agentes treinados no conhecimento da sua empresa, integrados ao seu WhatsApp ou plataforma.",
    examples: ["Agente de vendas B2B", "Atendimento 24/7 personalizado", "Qualificação automática de leads"],
  },
  {
    icon: Workflow,
    title: "Automação de processos operacionais",
    description: "Fluxos que hoje dependem de pessoas para copiar, colar, aprovar e encaminhar — automatizados com IA e integrados à sua stack atual.",
    examples: ["Geração automática de relatórios", "Aprovações inteligentes", "Processamento de documentos"],
  },
  {
    icon: GitMerge,
    title: "Integrações de IA com sistemas existentes",
    description: "IA conectada ao seu CRM, ERP, WhatsApp, planilha ou sistema legado. Sem substituir o que funciona — potencializando com inteligência.",
    examples: ["IA no seu CRM atual", "WhatsApp + Evolution API", "Integração com ERPs"],
  },
  {
    icon: BarChart3,
    title: "Dashboards e análise preditiva",
    description: "Dados que você já tem transformados em inteligência acionável. Painéis que antecipam gargalos, sugerem ações e reduzem tempo de decisão.",
    examples: ["Previsão de demanda", "Análise de churn", "Dashboard executivo com IA"],
  },
  {
    icon: Database,
    title: "Bases de conhecimento inteligentes",
    description: "O conhecimento crítico da sua empresa — manuais, processos, histórico — organizado e acessível via consulta em linguagem natural.",
    examples: ["Onboarding acelerado", "Suporte interno com IA", "Repositório de decisões"],
  },
  {
    icon: Code2,
    title: "Ferramentas internas sob medida",
    description: "Quando nenhuma plataforma do mercado resolve o seu problema específico. Desenvolvemos a ferramenta certa para o fluxo certo.",
    examples: ["Gerador de proposta personalizado", "Ferramenta de briefing com IA", "Assistente de vendas customizado"],
  },
];

const phases = [
  {
    number: "01",
    name: "Discovery",
    objective: "Entender o problema real antes de propor qualquer solução.",
    deliveries: [
      "Sessões com gestores e operadores do processo-alvo",
      "Mapeamento do fluxo atual e dos pontos de fricção",
      "Definição do critério de sucesso — como vamos medir que funcionou",
      "Validação de viabilidade técnica e escopo inicial",
    ],
    duration: "3 a 5 dias úteis",
  },
  {
    number: "02",
    name: "Arquitetura da solução",
    objective: "Desenhar antes de construir — para não refazer no meio do caminho.",
    deliveries: [
      "Proposta técnica detalhada com stack e integrações",
      "Fluxo da solução mapeado e validado com o cliente",
      "Cronograma de entregas com marcos claros",
      "Aprovação antes do início do desenvolvimento",
    ],
    duration: "3 a 5 dias úteis",
  },
  {
    number: "03",
    name: "Desenvolvimento",
    objective: "Construir a solução com os melhores modelos e ferramentas para o problema específico.",
    deliveries: [
      "Desenvolvimento iterativo com entregas intermediárias",
      "Testes com dados reais da operação do cliente",
      "Ajustes baseados no feedback de uso real",
      "Documentação técnica durante o desenvolvimento",
    ],
    duration: "Conforme escopo acordado",
  },
  {
    number: "04",
    name: "Entrega, integração e treinamento",
    objective: "A solução em produção, a equipe usando, o cliente no controle.",
    deliveries: [
      "Deploy na infraestrutura do cliente ou acordada",
      "Integração com sistemas existentes testada e validada",
      "Treinamento da equipe que vai operar a solução",
      "Entrega do código-fonte — propriedade intelectual do cliente",
    ],
    duration: "Dia de go-live",
  },
  {
    number: "05",
    name: "Suporte pós-entrega",
    objective: "Garantir que a solução evolui com o negócio — não para no dia da entrega.",
    deliveries: [
      "Período de suporte técnico acordado contratualmente",
      "Canal direto para bugs, ajustes e dúvidas de operação",
      "Reunião de retrospectiva pós-implantação",
      "Proposta de evolução se o escopo crescer",
    ],
    duration: "Conforme contrato",
  },
];

const notFor = [
  "Quem quer resultado em 24h sem entender o problema",
  "Quem busca o menor preço, não a melhor solução",
  "Quem quer template com nome da empresa trocado",
  "Quem não tem processo definido para automatizar",
];

const deliverables = [
  {
    icon: FileCode2,
    title: "Código-fonte entregue",
    description: "A propriedade intelectual da solução é do cliente. Você recebe o repositório, a documentação e o direito de modificar, expandir e repassar para outro desenvolvedor se precisar.",
  },
  {
    icon: ShieldCheck,
    title: "Solução em produção, testada",
    description: "Não entregamos protótipo. Entregamos sistema funcionando com dados reais, integrado ao ambiente do cliente e validado pela equipe que vai operar.",
  },
  {
    icon: Users,
    title: "Equipe treinada para operar",
    description: "De nada adianta a melhor IA se ninguém sabe usar. Treinamento prático incluído — as pessoas certas sabendo fazer as coisas certas com a ferramenta certa.",
  },
  {
    icon: Clock,
    title: "Suporte e evolução pós-entrega",
    description: "A solução não para no go-live. Suporte técnico acordado em contrato e proposta de evolução quando o negócio crescer e o escopo precisar acompanhar.",
  },
];

const profiles = [
  {
    icon: Building2,
    title: "Empresas com processo único e volume",
    description: "Operação que nenhum software do mercado resolve bem. Volume suficiente para justificar uma solução própria — não um workaround em planilha.",
  },
  {
    icon: TrendingUp,
    title: "Negócios que já cresceram demais para o manual",
    description: "O processo funcionava quando eram 5 pessoas. Com 20, virou gargalo. A solução é IA sob medida, não contratar mais 5.",
  },
  {
    icon: Cpu,
    title: "Líderes que já sabem onde querem chegar",
    description: "Você já fez o diagnóstico (ou tem clareza do problema). Agora quer um especialista que transforme essa clareza em sistema funcionando.",
  },
];

const roiCards = [
  {
    stat: "100%",
    category: "PROPRIEDADE INTELECTUAL ENTREGUE",
    description: "O código, os modelos e a documentação são seus — sem mensalidade de plataforma, sem lock-in. Você pode modificar, expandir ou repassar para outro desenvolvedor quando quiser.",
  },
  {
    stat: "0",
    category: "VAGAS PARA TAREFAS AUTOMATIZADAS",
    description: "Processos que hoje dependem de pessoas para tarefas repetitivas são automatizados com IA sob medida. A equipe foca no que realmente exige julgamento humano — e o volume cresce sem crescer o headcount.",
  },
  {
    stat: "3 a 16",
    category: "SEMANAS DO DISCOVERY AO GO-LIVE",
    description: "Do entendimento do problema ao sistema em produção. Soluções simples em 3 a 4 semanas. Projetos complexos em até 4 meses — com cronograma aprovado antes de uma linha de código ser escrita.",
  },
];

const faqs = [
  {
    q: "Qual a diferença entre a FORJA.AI e uma software house comum?",
    a: "Uma software house entrega código. A FORJA.AI entrega resultado de negócio com IA. Isso significa que antes de escrever uma linha de código, um especialista IntelliX.AI entende profundamente o seu processo, define o que precisa ser construído e por quê — e acompanha a implementação até o sistema estar funcionando na operação real, não só no ambiente de teste.",
  },
  {
    q: "A propriedade intelectual da solução é minha?",
    a: "Sim, 100%. O código, a documentação, os modelos treinados — tudo é entregue ao cliente ao final do projeto. Você pode modificar, expandir, repassar para outro desenvolvedor ou internalizar a manutenção. Sem lock-in.",
  },
  {
    q: "Vocês trabalham com quais tecnologias?",
    a: "A stack é definida pelo problema, não pelo nosso conforto. Trabalhamos com os principais modelos de linguagem (GPT-4o, Claude, Gemini), ferramentas de automação (n8n, Make), APIs de WhatsApp (Evolution API), bancos de dados relacionais e vetoriais, e qualquer integração que o cliente precisar. O critério é: o que resolve melhor o problema específico.",
  },
  {
    q: "Como é definido o investimento de um projeto FORJA.AI?",
    a: "Cada projeto é único — e o investimento reflete isso. Não existe tabela de preços. O valor é definido após o Discovery, com base em escopo, complexidade, integrações necessárias e prazo. Você aprova antes de qualquer desenvolvimento começar.",
  },
  {
    q: "Quanto tempo leva um projeto típico?",
    a: "Depende do escopo. Soluções mais simples (agente conversacional com integração única) podem ser entregues em 3 a 4 semanas. Projetos com múltiplas integrações, modelos customizados e fluxos complexos podem levar de 2 a 4 meses. O cronograma é definido na fase de arquitetura e aprovado antes do desenvolvimento.",
  },
  {
    q: "E se o escopo mudar durante o projeto?",
    a: "Mudança de escopo é tratada com transparência: documentamos o que mudou, avaliamos o impacto em prazo e custo e apresentamos uma adenda ao contrato. Sem surpresa no final. O que está no contrato é o que é entregue — e qualquer expansão é acordada formalmente.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ForjaAI() {
  const whatsappUrl = `https://wa.me/5581988514775?text=${encodeURIComponent("Olá! Quero saber mais sobre a FORJA.AI — desenvolvimento de soluções de IA sob medida.")}`;

  return (
    <Layout>
      <Helmet>
        <title>FORJA.AI | Desenvolvimento de IA Sob Medida · IntelliX.AI</title>
        <meta name="description" content="Sistemas de automação e agentes de IA desenvolvidos para o seu negócio. Soluções B2B customizadas com entrega rápida." />
        <meta property="og:title" content="FORJA.AI | Desenvolvimento de IA Sob Medida · IntelliX.AI" />
        <meta property="og:description" content="Sistemas de automação e agentes de IA desenvolvidos para o seu negócio. Soluções B2B customizadas com entrega rápida." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/forja-ai" />
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#060D1A]">

        {/* Blueprint grid — signature detail */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(38 91% 58%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-primary/6 pointer-events-none" />

        {/* Diagonal accent line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden xl:block pointer-events-none" style={{ right: "38%" }} />

        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="grid xl:grid-cols-[58%_42%] gap-12 items-center max-w-6xl mx-auto">

            {/* Left — text */}
            <div>
              <AnimatedSection animation="fade-right" delay={0}>
                <div className="flex w-fit items-center gap-2 bg-white/5 border border-accent/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                  <Hammer className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide">
                    Soluções sob medida · B2B · Desenvolvimento especializado
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={100}>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                  <span className="gradient-text-gold">FORJA</span>
                  <span className="gradient-text">.AI</span>
                  <br />
                  <span className="text-white text-4xl md:text-5xl xl:text-55xl font-bold leading-tight">
                    Quando o problema
                    <br />é único, a solução
                    <br />
                    <span className="gradient-text-gold">também é.</span>
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={200}>
                <p className="text-xl text-white/55 leading-relaxed mb-4 max-w-xl">
                  Sistemas de IA construídos do zero para a operação específica da sua empresa. Integrados aos seus sistemas. Com propriedade intelectual entregue.
                </p>
                <p className="text-base text-white/35 mb-10 max-w-lg">
                  Você não contrata mais uma plataforma genérica. Você contrata um especialista que forja — com precisão, do início ao fim — a solução certa para o seu problema real.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.45)] hover:shadow-[0_0_45px_hsl(var(--accent)/0.65)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Quero uma solução sob medida
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                  <a href="#como-funciona">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 rounded-xl transition-[background-color,border-color] duration-200"
                    >
                      Ver o processo
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — SVG + stats/proof */}
            <AnimatedSection animation="fade-left" delay={300} className="hidden xl:block">
              <div className="flex flex-col items-center gap-6">
              <img src="/solucoes/forja-ai.svg" alt="" className="w-52 h-52 animate-forge-pulse" aria-hidden="true" />
              <div className="space-y-4 w-full">
                {[
                  { label: "Código entregue ao cliente", sub: "Propriedade intelectual 100% sua — sem lock-in", accent: true },
                  { label: "Integrado ao que você já usa", sub: "CRM, ERP, WhatsApp, planilha — sem substituir o que funciona", accent: false },
                  { label: "Specialist-led, não template-driven", sub: "Um especialista que entende seu negócio antes de escrever uma linha", accent: false },
                  { label: "Resultado em produção, não protótipo", sub: "Entregamos sistema funcionando com dados reais, testado pela sua equipe", accent: false },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={`flex items-start gap-4 p-5 rounded-xl border transition-[border-color] duration-300 ${
                      item.accent
                        ? "border-accent/40 bg-accent/6"
                        : "border-white/8 bg-white/4"
                    }`}
                  >
                    <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${item.accent ? "text-accent" : "text-primary"}`} />
                    <div>
                      <p className={`text-sm font-bold ${item.accent ? "text-accent" : "text-white"}`}>{item.label}</p>
                      <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── 2. PARA QUEM NÃO É ──────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1525] border-b border-white/6">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 md:w-48">
                <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-2">Honestidade antes de tudo</p>
                <h2 className="text-xl font-black text-white">A FORJA.AI <span className="gradient-text-gold">não é</span> para todo mundo.</h2>
              </div>
              <div className="flex-1 grid sm:grid-cols-2 gap-3">
                {notFor.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-white/3">
                    <X className="w-4 h-4 text-red-400/70 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white/55">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. TIPOS DE SOLUÇÃO ─────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que a{" "}
              <span className="gradient-text-gold">FORJA</span>
              <span className="gradient-text">.AI</span>
              {" "}constrói
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Seis categorias de solução — cada uma adaptada ao problema específico da sua operação. Nenhuma é entregue igual a outro cliente.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutionTypes.map((sol, i) => (
              <AnimatedSection key={sol.title} animation="fade-up" delay={i * 70}>
                <div className="flex flex-col h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/25 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <sol.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-4 flex-1">{sol.description}</p>
                  <div className="space-y-1.5">
                    {sol.examples.map((ex) => (
                      <div key={ex} className="flex items-center gap-2 text-xs text-white/40">
                        <span className="w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                        {ex}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section id="como-funciona" className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como a solução é <span className="gradient-text-gold">forjada</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Cinco fases estruturadas. Do entendimento do problema à solução em produção — sem atalhos que voltam como retrabalho.
            </p>
          </AnimatedSection>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent/60 via-primary/40 to-transparent hidden sm:block" />

            <div className="space-y-0">
              {phases.map((phase, i) => (
                <AnimatedSection key={phase.number} animation="fade-up" delay={i * 90}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-12 h-12 rounded-full bg-[#0A1525] border-2 border-accent/50 flex items-center justify-center z-10">
                        <span className="text-xs font-black text-accent">{phase.number}</span>
                      </div>
                    </div>

                    <div className="flex-1 pt-1 pb-4 border-b border-white/6 last:border-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="sm:hidden text-xs font-black text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                          {phase.number}
                        </span>
                        <h3 className="text-lg font-bold text-white">{phase.name}</h3>
                        <span className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-sm text-white/45 mb-4 leading-relaxed">{phase.objective}</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {phase.deliveries.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-white/70">
                            <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
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
        </div>
      </section>

      {/* ── 5. O QUE VOCÊ RECEBE ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que você recebe ao{" "}
              <span className="gradient-text">final</span>{" "}
              <span className="gradient-text-gold">do projeto</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Não entregamos projeto. Entregamos solução funcionando — com tudo que a sua equipe precisa para operar e evoluir sem depender de nós.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-5">
            {deliverables.map((item, i) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={i * 80}>
                <div className="flex gap-5 p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/25 hover:-translate-y-1 transition-[transform,border-color] duration-300 h-full">
                  <div className="flex-shrink-0">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ROI BLOCK ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0A1525] border-y border-white/6">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              O que a solução entrega{" "}
              <span className="gradient-text-mixed">além do código</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Cada projeto FORJA.AI é medido por resultado de negócio — não por linhas entregues.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {roiCards.map((card, i) => (
              <AnimatedSection key={card.category} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/4 hover:-translate-y-1 hover:border-accent/30 transition-[transform,border-color] duration-300">
                  <p className="text-5xl font-black gradient-text-gold mb-1">{card.stat}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-3">{card.category}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{card.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. POR QUE ESPECIALISTA ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-accent/25 bg-accent/5 p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">O diferencial IntelliX.AI</p>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                  Você não contrata uma agência de desenvolvimento.{" "}
                  <span className="gradient-text-gold">Você contrata um especialista em resultado com IA.</span>
                </h2>

                <div className="space-y-5 text-white/70 leading-relaxed">
                  <p>
                    A maioria das agências entrega código. A IntelliX.AI entrega <strong className="text-white">resultado de negócio construído com IA</strong>. A diferença está no que acontece antes do desenvolvimento: um especialista que entende operação, entende IA e entende o seu negócio — tudo ao mesmo tempo.
                  </p>
                  <p>
                    Isso significa que a solução entregue foi pensada para o seu fluxo real, testada com os seus dados reais e validada pela sua equipe real. Não é um MVP genérico que vai precisar de refatoração em seis meses.
                  </p>
                  <p className="text-white/90 font-semibold">
                    Cada projeto FORJA.AI é conduzido por Felipe Maranhão — Engenheiro Mecatrônico, MBA em IA para Negócios, 18+ anos de experiência. Você sabe com quem está construindo. E o que é construído é exclusivamente seu.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. PARA QUEM É ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Para quem a{" "}
              <span className="gradient-text-gold">FORJA</span>
              <span className="gradient-text">.AI</span>
              {" "}faz sentido
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {profiles.map((profile, i) => (
              <AnimatedSection key={profile.title} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/25 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <profile.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-3">{profile.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{profile.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Perguntas <span className="gradient-text-gold">frequentes</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-white/8 rounded-xl px-6 bg-white/4 hover:border-accent/20 transition-[border-color] duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-accent hover:no-underline py-5 [&[data-state=open]]:text-accent">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/55 leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 10. CTA RODAPÉ ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-primary/5 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(38 91% 58%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 mb-6 mx-auto">
              <Hammer className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Seu problema é <span className="gradient-text">único</span>.{" "}
              <span className="gradient-text-gold">A solução também vai ser.</span>
            </h2>
            <p className="text-lg text-white/50 mb-4 leading-relaxed">
              Um especialista IntelliX.AI entende o seu negócio, arquiteta a solução certa e constrói do zero — com a sua operação como referência, não um template de outro cliente.
            </p>
            <p className="text-base text-white/30 mb-10">
              Código entregue. IP seu. Equipe treinada. Resultado em produção.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-10 py-6 rounded-xl shadow-[0_0_35px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.7)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero construir minha solução
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {["Proposta personalizada", "IP entregue ao cliente", "Sem lock-in"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  <span className="text-xs text-white/40">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
}
