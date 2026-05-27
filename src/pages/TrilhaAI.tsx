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
  Sparkles,
  User,
  Briefcase,
  TrendingUp,
  Target,
  Calendar,
  Map,
  GraduationCap,
  Award,
  Zap,
  Brain,
  BarChart3,
  Workflow,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const profiles = [
  {
    icon: Briefcase,
    title: "Profissional liberal ou CLT",
    description: "Quer usar IA para ser mais produtivo, se destacar no mercado e fazer em 4 horas o que antes levava o dia todo.",
  },
  {
    icon: User,
    title: "Empreendedor solo ou microempresário",
    description: "Precisa fazer muito com pouco. A TRILHA.AI mapeia quais ferramentas de IA substituem parte de um time que você ainda não tem.",
  },
  {
    icon: TrendingUp,
    title: "Gestor ou líder de equipe",
    description: "Quer aprender pessoalmente antes de levar para o time — e entender o que faz sentido implementar no contexto da sua operação.",
  },
];

const journey = [
  {
    number: "01",
    name: "Diagnóstico inicial",
    description: "Sessão de mapeamento: rotina, ferramentas em uso, gargalos, objetivos. Você sai com uma lista priorizada de onde a IA vai gerar mais impacto no seu caso específico.",
    duration: "1 sessão de 60 min",
  },
  {
    number: "02",
    name: "Plano personalizado",
    description: "Baseado no diagnóstico, Felipe monta seu Plano de Trilha — quais ferramentas aprender, em que ordem, com quais tarefas reais suas como contexto de prática.",
    duration: "Entregue em até 48h",
  },
  {
    number: "03",
    name: "Sessões práticas 1:1",
    description: "Encontros ao vivo onde você aprende usando suas próprias tarefas. Sem exercícios genéricos. O e-mail que você precisa escrever agora. O relatório que você entrega sexta-feira.",
    duration: "60 min por sessão",
  },
  {
    number: "04",
    name: "Acompanhamento contínuo",
    description: "Canal direto entre sessões para dúvidas de aplicação. Quando travar em algo real, você tem onde perguntar — sem esperar a próxima sessão.",
    duration: "Acesso por WhatsApp",
  },
];

const competencies = [
  {
    icon: Brain,
    title: "Prompt engineering aplicado",
    description: "Escrever instruções que geram resultado útil, não genérico. A diferença entre o ChatGPT que impressiona e o que decepciona.",
  },
  {
    icon: Workflow,
    title: "Automação de rotina",
    description: "Identificar e automatizar tarefas repetitivas do seu trabalho específico — não tutoriais genéricos do YouTube.",
  },
  {
    icon: BarChart3,
    title: "Análise e síntese com IA",
    description: "Processar documentos, reuniões, relatórios e extrair insight em minutos. NotebookLM, Perplexity e outros na prática.",
  },
  {
    icon: Target,
    title: "IA como copiloto de decisão",
    description: "Usar IA para estruturar problemas, mapear riscos e chegar a decisões mais rápidas e fundamentadas.",
  },
  {
    icon: Zap,
    title: "Criação e comunicação",
    description: "Textos, apresentações, e-mails e propostas com qualidade maior em menos tempo. Com a sua voz, não a voz da IA.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizado contínuo em IA",
    description: "Saber como aprender novas ferramentas sozinho. O campo muda rápido — você aprende a pescar, não só a comer o peixe.",
  },
];

const formats = [
  {
    name: "Sessão avulsa",
    color: "border-white/15",
    accent: "text-white/60",
    badge: "Explorar",
    description: "Ideal para quem quer experimentar antes de se comprometer. Uma sessão focada em um desafio específico do seu trabalho.",
    includes: [
      "60 minutos ao vivo com Felipe",
      "1 desafio real resolvido com IA",
      "Gravação da sessão",
    ],
    price: "Sob consulta",
    cta: "Agendar sessão avulsa",
    featured: false,
  },
  {
    name: "Pacote mensal",
    color: "border-accent/50",
    accent: "text-accent",
    badge: "Mais escolhido",
    description: "Acompanhamento estruturado. 4 sessões por mês + suporte contínuo. Para quem quer resultado consistente, não aprendizado esporádico.",
    includes: [
      "4 sessões de 60 min por mês",
      "Plano de trilha personalizado",
      "Acesso direto por WhatsApp entre sessões",
      "Gravação de todas as sessões",
    ],
    price: "Sob consulta",
    cta: "Solicitar proposta mensal",
    featured: true,
  },
  {
    name: "Imersão intensiva",
    color: "border-primary/40",
    accent: "text-primary",
    badge: "Acelerado",
    description: "Para quem precisa subir de nível rápido. Bloco intensivo de sessões em duas semanas com foco em um objetivo específico.",
    includes: [
      "6 sessões em 2 semanas",
      "Diagnóstico completo inicial",
      "Plano de trilha + material de apoio",
      "30 dias de suporte pós-imersão",
    ],
    price: "Sob consulta",
    cta: "Solicitar proposta intensiva",
    featured: false,
  },
];

const roiCards = [
  {
    stat: "3h+",
    category: "RECUPERADAS POR DIA NA ROTINA",
    description: "Profissionais que completam a TRILHA.AI relatam recuperar em média 3 horas diárias — tarefas de texto, análise e comunicação que a IA assume sem reduzir a qualidade do trabalho.",
  },
  {
    stat: "100%",
    category: "FOCADO NO SEU CASO ESPECÍFICO",
    description: "Nenhuma sessão é igual à de outro cliente. O plano é montado com base no seu diagnóstico — suas tarefas, suas ferramentas, seu setor. Sem conteúdo genérico de turma ou template.",
  },
  {
    stat: "4",
    category: "SESSÕES PARA TRANSFORMAR A ROTINA",
    description: "Para a maioria dos profissionais, 4 sessões são suficientes para integrar IA em 80% das tarefas recorrentes. A partir daí, o acompanhamento evolui para novos desafios e objetivos.",
  },
];

const faqs = [
  {
    q: "As sessões são presenciais ou online?",
    a: "As sessões da TRILHA.AI são online, via Google Meet ou similar. Isso permite atender profissionais em qualquer cidade, com flexibilidade de horário.",
  },
  {
    q: "Preciso ter conhecimento prévio em IA?",
    a: "Não. A TRILHA.AI começa do diagnóstico — independente do seu nível atual. Se você já usa algumas ferramentas, aceleramos a partir daí. Se está começando do zero, construímos a base certa para o seu contexto.",
  },
  {
    q: "Como funciona o suporte entre sessões?",
    a: "Você tem acesso direto ao Felipe por WhatsApp. Não é um grupo com outros alunos — é canal privado para dúvidas de aplicação real que surgem no seu dia a dia entre as sessões.",
  },
  {
    q: "Quem é Felipe Maranhão?",
    a: "Engenheiro Mecatrônico com 18+ anos de experiência em operação e tecnologia, MBA em Inteligência Artificial para Negócios pela Faculdade Exame, fundador da IntelliX.AI. Não é influencer de IA — é operador. Usa IA todos os dias para rodar uma empresa real.",
  },
  {
    q: "Qual a diferença entre a TRILHA.AI e a Virada Inteligente?",
    a: "A Virada Inteligente é uma imersão de grupo de 4 horas, presencial, ideal para treinar equipes inteiras de uma vez. A TRILHA.AI é mentoria 1:1 de longo prazo, online, para quem quer aprofundamento personalizado no seu caso específico. Formatos complementares.",
  },
  {
    q: "Posso contratar a TRILHA.AI para minha equipe?",
    a: "A TRILHA.AI é desenhada para acompanhamento individual. Para treinar equipes em grupo, o formato ideal é a Virada Inteligente in-company. Para líderes que querem primeiro aprender sozinhos e depois levar para o time, a TRILHA.AI faz todo sentido.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function TrilhaAI() {
  const whatsappUrl = `https://wa.me/5581988514775?text=${encodeURIComponent("Olá! Quero saber mais sobre a TRILHA.AI — mentoria individual de IA.")}`;

  return (
    <Layout>
      <Helmet>
        <title>TRILHA.AI | Mentoria Individual em IA · IntelliX.AI</title>
        <meta name="description" content="Aprenda a implementar inteligência artificial no seu negócio com mentoria personalizada. Trilha B2C para empreendedores e profissionais." />
        <meta property="og:title" content="TRILHA.AI | Mentoria Individual em IA · IntelliX.AI" />
        <meta property="og:description" content="Aprenda a implementar inteligência artificial no seu negócio com mentoria personalizada. Trilha B2C para empreendedores e profissionais." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/trilha-ai" />
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#060D1A]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-primary/8 pointer-events-none" />
        {/* Vertical trail line — signature detail */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent pointer-events-none hidden xl:block" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="grid xl:grid-cols-[58%_42%] gap-12 items-center max-w-6xl mx-auto">

            {/* Left — text */}
            <div>
            <AnimatedSection animation="fade-right" delay={0}>
              <div className="flex w-fit items-center gap-2 bg-white/5 border border-accent/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Map className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <span className="text-xs font-semibold text-white/80 tracking-wide">
                  Mentoria individual · 1:1 · Online
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={100}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                <span className="gradient-text-gold">TRILHA</span>
                <span className="gradient-text">.AI</span>
                <br />
                <span className="text-white text-4xl md:text-5xl xl:text-6xl font-bold">
                  Sua trilha de IA.
                  <br />
                  Do seu jeito.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <p className="text-xl md:text-2xl text-white/55 leading-relaxed mb-4 max-w-2xl">
                Mentoria 1:1 com Felipe Maranhão para profissionais e empreendedores que querem aplicar IA no próprio trabalho — com plano personalizado, sessões práticas e acompanhamento contínuo.
              </p>
              <p className="text-base text-white/35 mb-10 max-w-xl">
                Sem curso gravado. Sem turma. Sem conteúdo genérico. Só você, seu trabalho real e o mentor ao seu lado.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.45)] hover:shadow-[0_0_45px_hsl(var(--accent)/0.65)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quero começar minha trilha
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
                <a href="#formatos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 rounded-xl transition-[background-color,border-color] duration-200"
                  >
                    Ver formatos disponíveis
                  </Button>
                </a>
              </div>
            </AnimatedSection>
            </div>

            {/* Right — SVG illustration */}
            <AnimatedSection animation="fade-left" delay={300} className="hidden xl:flex items-center justify-center">
              <img
                src="/solucoes/trilha-ai.svg"
                alt=""
                className="w-64 h-64 animate-trilha-float"
                aria-hidden="true"
              />
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── 2. PARA QUEM É ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Para quem é a{" "}
              <span className="gradient-text-gold">TRILHA</span>
              <span className="gradient-text">.AI</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Não é para todo mundo — é para quem quer resultado real, não mais um curso que vai virar atalho de pasta.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {profiles.map((profile, i) => (
              <AnimatedSection key={profile.title} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/25 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <profile.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{profile.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{profile.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMO FUNCIONA — JORNADA ──────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como funciona a <span className="gradient-text-gold">jornada</span>
            </h2>
            <p className="text-white/50 text-lg">
              Cada trilha começa pelo diagnóstico do seu caso — nenhum plano é igual ao outro.
            </p>
          </AnimatedSection>

          {/* Timeline vertical */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-accent/60 via-primary/40 to-accent/20 hidden sm:block" />

            <div className="space-y-0">
              {journey.map((step, i) => (
                <AnimatedSection key={step.number} animation="fade-up" delay={i * 100}>
                  <div className="relative flex gap-6 pb-10 last:pb-0">
                    {/* Node */}
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-12 h-12 rounded-full bg-[#060D1A] border-2 border-accent/60 flex items-center justify-center z-10">
                        <span className="text-xs font-black text-accent">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1 pb-2">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="sm:hidden text-xs font-black text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-bold text-white">{step.name}</h3>
                        <span className="text-xs text-primary font-medium bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-white/55 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. O MENTOR ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-white/8 bg-white/4 p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 flex items-center justify-center">
                    <span className="text-2xl font-black gradient-text-gold">FM</span>
                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Seu mentor</p>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-1">Felipe Maranhão</h2>
                  <p className="text-primary text-sm font-semibold mb-5">CEO & Fundador · IntelliX.AI</p>

                  <p className="text-white/65 leading-relaxed mb-6">
                    Engenheiro Mecatrônico com 18+ anos de experiência em operação, tecnologia e gestão. MBA em Inteligência Artificial para Negócios pela Faculdade Exame. Fundou a IntelliX.AI para transformar o que aprendeu aplicando IA em operações reais em método replicável para outros profissionais e empresas.
                  </p>

                  <p className="text-white/65 leading-relaxed mb-7">
                    Não é influencer de IA. É operador. Usa IA todos os dias para rodar empresa, prospectar clientes, escrever conteúdo, tomar decisões e treinar equipes. O que ele ensina na TRILHA.AI é o que ele faz, não o que ele viu num paper.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      { icon: GraduationCap, text: "MBA IA para Negócios" },
                      { icon: Award, text: "18+ anos de experiência" },
                      { icon: Briefcase, text: "Fundador IntelliX.AI" },
                    ].map((cred) => (
                      <div key={cred.text} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/4 border border-white/8 text-xs text-white/60 font-medium">
                        <cred.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                        {cred.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. COMPETÊNCIAS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que você <span className="gradient-text-gold">desenvolve</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Competências concretas, não teoria. Cada uma construída com tarefas reais do seu trabalho.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {competencies.map((comp, i) => (
              <AnimatedSection key={comp.title} animation="fade-up" delay={i * 70}>
                <div className="flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/25 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <comp.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{comp.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{comp.description}</p>
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
              O que muda na sua rotina{" "}
              <span className="gradient-text-mixed">em números</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Resultado concreto, não promessa de curso. A TRILHA.AI é medida pelo impacto real no seu trabalho.
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

      {/* ── 7. FORMATOS ─────────────────────────────────────────────────────── */}
      <section id="formatos" className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Formatos <span className="gradient-text-gold">disponíveis</span>
            </h2>
            <p className="text-white/50 text-lg">
              Escolha o formato que faz sentido pro seu momento. O investimento é definido em conversa — sem tabela de preços genérica.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {formats.map((format, i) => (
              <AnimatedSection key={format.name} animation="fade-up" delay={i * 80}>
                <div className={`relative flex flex-col h-full rounded-2xl border ${format.color} bg-white/4 overflow-hidden`}>
                  {format.featured && (
                    <div className="h-1 bg-gradient-to-r from-accent to-yellow-400" />
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-lg font-bold text-white">{format.name}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                        format.featured
                          ? "text-accent bg-accent/10 border-accent/30"
                          : "text-white/40 bg-white/5 border-white/10"
                      }`}>
                        {format.badge}
                      </span>
                    </div>

                    <p className="text-sm text-white/55 leading-relaxed mb-6">{format.description}</p>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {format.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${format.featured ? "text-accent" : "text-primary"}`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="p-3 rounded-xl bg-white/4 border border-white/8 mb-5 text-center">
                      <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-1">Investimento</p>
                      <p className={`text-sm font-semibold ${format.accent}`}>Proposta personalizada sob consulta</p>
                    </div>

                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        className={`w-full font-bold group ${
                          format.featured
                            ? "bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-[box-shadow] duration-200"
                            : "variant-outline border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-[background-color] duration-200"
                        }`}
                      >
                        {format.cta}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
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

      {/* ── 9. CTA RODAPÉ ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 mb-6 mx-auto">
              <Sparkles className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Pronto para começar{" "}
              <span className="gradient-text">sua</span>{" "}
              <span className="gradient-text-gold">trilha?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Começa com uma conversa. Sem formulário longo, sem compromisso imediato. Só você contando o que quer resolver — e a gente vendo se faz sentido.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-10 py-6 rounded-xl shadow-[0_0_35px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.7)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Felipe no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {["Diagnóstico inicial gratuito", "Sem compromisso", "Online — qualquer cidade"].map((item) => (
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
