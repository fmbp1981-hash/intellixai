import { Link } from "react-router-dom";
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
  Brain,
  Eye,
  Hammer,
  Gift,
  Clock,
  Zap,
  Building2,
  User,
  MessageCircle,
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
  Shield,
} from "lucide-react";

// ─── CHECKOUT ────────────────────────────────────────────────────────────────
// Substitua pelo link real gerado no painel Kiwify após criar o produto
const KIWIFY_VIRADA_URL = "https://pay.kiwify.com.br/2ULxCsN";

// ─── DATA ────────────────────────────────────────────────────────────────────

const methodology = [
  {
    icon: Brain,
    title: "Aprenda",
    description: "Apresentação direta da ferramenta e do contexto em que ela importa. 2 minutos, sem rodeio.",
  },
  {
    icon: Eye,
    title: "Veja",
    description: "O instrutor demonstra ao vivo com casos reais da sua empresa. 5 minutos de demonstração funcional.",
  },
  {
    icon: Hammer,
    title: "Faça",
    description: "Cada participante experimenta a ferramenta com sua própria tarefa real. 8 minutos de prática guiada.",
  },
  {
    icon: Gift,
    title: "Leva pra casa",
    description: "PDF com slides completos da imersão e 30 dias de suporte por WhatsApp.",
  },
];

const phases = [
  {
    number: "01",
    name: "Pré-imersão",
    objective: "Customizar a imersão para o contexto exato da sua empresa.",
    deliveries: [
      "Reunião de 30 minutos com o líder da empresa",
      "Mapeamento de 3 a 5 tarefas reais para usar durante a imersão",
      "Exemplos práticos customizados para o vocabulário da empresa",
    ],
    deadline: "5 dias antes da imersão",
  },
  {
    number: "02",
    name: "Imersão presencial",
    objective: "Equipe inteira sair do zero ao uso real das principais ferramentas de IA com tarefas reais.",
    deliveries: [
      "4 horas presenciais com até 20 participantes (turma aberta) ou 15 (in-company)",
      "Ferramentas de IA Generativa cobrindo o espectro do trabalho moderno: texto, pesquisa, reuniões, apresentações, análise de dados, agentes autônomos e mais",
      "Cada participante resolve no mínimo 1 tarefa real durante a imersão",
      "Material físico ou digital entregue na hora",
    ],
    deadline: "Dia agendado",
  },
  {
    number: "03",
    name: "Aplicação na semana seguinte",
    objective: "Garantir que o conhecimento vira hábito, não cai no esquecimento.",
    deliveries: [
      "Slides completos da imersão em PDF para consulta futura",
      "Desafio guiado para cada participante aplicar em uma nova tarefa",
    ],
    deadline: "Primeiros 7 dias pós-imersão",
  },
  {
    number: "04",
    name: "Suporte 30 dias",
    objective: "Resolver dúvidas reais que surgem quando a equipe começa a usar de verdade.",
    deliveries: [
      "Canal direto por WhatsApp com a IntelliX.AI",
      "Resposta a dúvidas técnicas e de aplicação",
      "Sugestão de próximos passos para evolução da equipe",
    ],
    deadline: "30 dias corridos pós-imersão",
  },
];

const differentials = [
  "Casos reais da sua empresa, não simulação. Cada exemplo usado durante a imersão sai do seu próprio dia a dia operacional.",
  "Cobre o espectro do trabalho moderno em 4 horas. Texto, pesquisa, reunião, apresentação, análise de dados, agente autônomo e visual — sem precisar de 40 horas de curso.",
  "Ministrada pelo fundador. Felipe Maranhão (Engenheiro Mecatrônico, MBA em IA para Negócios) está pessoalmente na sala. Não é instrutor terceirizado.",
  "Sai com tarefa resolvida, não com certificado. O objetivo é que a próxima reunião já use IA. Resultado mensurável em 7 dias.",
];

const roiCards = [
  {
    stat: "5 a 8h",
    category: "GANHO POR COLABORADOR / SEMANA",
    description: "Cada colaborador treinado economiza em média 5 a 8 horas semanais em tarefas que viraram rotina com IA — e-mails, atas, planilhas, relatórios.",
  },
  {
    stat: "1 tarefa",
    category: "RESOLVIDA NA HORA",
    description: "Cada participante sai da imersão com no mínimo uma tarefa real do trabalho resolvida com IA — não promessa, não simulação, resultado em mão.",
  },
  {
    stat: "dia 1",
    category: "APLICAÇÃO IMEDIATA",
    description: "Na manhã seguinte já tem referência concreta para replicar. Material de apoio entregue ao final com slides e exemplos customizados para sua empresa.",
  },
];

const faqs = [
  {
    q: "Minha equipe não tem conhecimento técnico de IA. Vai conseguir acompanhar?",
    a: "A Virada foi desenhada para nível iniciante absoluto. Não é necessário conhecimento prévio em IA, programação ou tecnologia. O único pré-requisito é trazer o notebook e uma tarefa real que você queira resolver.",
  },
  {
    q: "O treinamento funciona para qual tamanho de empresa?",
    a: "A Virada in-company funciona para empresas com 10 a 30 colaboradores na sala. Acima disso, recomendamos duas turmas. Para empresas menores (5 a 9 pessoas) também é viável — fale com a gente sobre formato adaptado.",
  },
  {
    q: "É presencial ou pode ser online?",
    a: "A Virada é exclusivamente presencial. A metodologia \"Aprenda · Veja · Faça\" depende da presença física para o acompanhamento individual durante a prática guiada. Imersões online não entregam o mesmo resultado.",
  },
  {
    q: "Quais ferramentas são ensinadas?",
    a: "A Virada cobre o espectro do trabalho moderno com IA — sem fixar uma quantidade exata, porque algumas ferramentas exigem mais tempo e outras cobrem múltiplas necessidades. O conteúdo inclui ferramentas para escrita, pesquisa com fontes, atas de reunião, apresentações, análise de dados, agentes autônomos e criação visual. Exemplos frequentemente usados: Claude, ChatGPT, Perplexity, Gemini, Fireflies, NotebookLM, Gamma e Google AI Studio. A customização pré-imersão garante que o foco vai para o que mais impacta a rotina da sua equipe.",
  },
  {
    q: "O que cada participante sai levando?",
    a: "Cada participante sai com pelo menos uma tarefa real resolvida com IA, slides completos da imersão em PDF e 30 dias de suporte por WhatsApp para tirar dúvidas de aplicação.",
  },
  {
    q: "Quem ministra a Virada?",
    a: "Felipe Maranhão, CEO e fundador da IntelliX.AI. Engenheiro Mecatrônico com 18+ anos de experiência, MBA em Inteligência Artificial para Negócios pela Faculdade Exame. Não é instrutor terceirizado — é o fundador na sala.",
  },
];

const inCompanyIncludes = [
  "Imersão exclusiva para sua equipe (até 15 participantes)",
  "Reunião de pré-imersão para customização completa",
  "Casos reais da sua empresa durante a imersão",
  "Material de apoio customizado",
  "30 dias de suporte por WhatsApp pós-imersão",
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ViradaInteligente() {
  const whatsappUrl = `https://wa.me/5581988514775?text=${encodeURIComponent("Olá, IntelliX.AI! Quero saber mais sobre a Virada Inteligente com IA.")}`;

  return (
    <Layout>
      <Helmet>
        <title>Virada Inteligente | Imersão em IA · IntelliX.AI</title>
        <meta name="description" content="Imersão in-company e turma aberta para transformar sua equipe com IA. Aprenda a automatizar processos e ganhar escala." />
        <meta property="og:title" content="Virada Inteligente | Imersão em IA · IntelliX.AI" />
        <meta property="og:description" content="Imersão in-company e turma aberta para transformar sua equipe com IA. Aprenda a automatizar processos e ganhar escala." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/virada-inteligente" />
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#060D1A]">
        {/* Subtle grid/circuit texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/6 pointer-events-none" />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 xl:gap-16 items-center max-w-6xl mx-auto">

            {/* Left — Brain visual */}
            <AnimatedSection animation="fade-right" delay={0} className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-[460px]">
                <img
                  src="/virada-brain-clean.png"
                  alt="Rede neural — representação visual da Virada Inteligente com IA"
                  className="w-full object-contain drop-shadow-[0_0_60px_rgba(245,166,35,0.25)] select-none"
                  draggable={false}
                />
              </div>
            </AnimatedSection>

            {/* Right — Text + CTA */}
            <div className="flex flex-col">

              <AnimatedSection animation="fade-left" delay={60}>
                <div className="flex w-fit items-center gap-2 bg-white/5 border border-accent/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span className="text-xs font-semibold text-white/80 tracking-wide">
                    Imersão executiva · 4 horas · Presencial
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={160}>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                  <span className="text-white">Virada</span>
                  <br />
                  <span className="text-white">Inteligente</span>
                  <br />
                  <span className="gradient-text-gold">com </span>
                  <span className="gradient-text">IA</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-left" delay={260}>
                <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-lg">
                  Em <strong className="text-white font-bold">4 horas</strong>, sua equipe inteira sai do zero ao uso real das{" "}
                  <strong className="text-white font-bold">principais ferramentas de IA</strong>{" "}
                  no dia a dia. Sem teoria, sem palco. Mão na massa do início ao fim.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold px-6 py-6 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.45)] hover:shadow-[0_0_45px_hsl(var(--accent)/0.65)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group text-sm"
                    >
                      <Building2 className="w-4 h-4 mr-2 flex-shrink-0" />
                      Quero a Virada in-company
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                  <a href="#turmas">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-6 py-6 rounded-xl transition-[background-color,border-color] duration-200 text-sm"
                    >
                      <User className="w-4 h-4 mr-2 flex-shrink-0" />
                      Ver turmas abertas
                    </Button>
                  </a>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-accent font-semibold">
                    Turma inaugural · 22/05/2026 · Yolo Coliving · 25 participantes
                  </p>
                  <p className="text-xs text-white/35">
                    A partir de R$&nbsp;4.800 in-company · Turma aberta R$&nbsp;1.097 · 30 dias de suporte inclusos
                  </p>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </div>
      </section>

      {/* ── 2. O QUE É ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              O que é a{" "}
              <span className="gradient-text-gold">Virada Inteligente</span>{" "}
              <span className="gradient-text">com IA</span>
            </h2>
            <p className="text-lg text-white/55 max-w-3xl mx-auto leading-relaxed">
              Uma imersão executiva de 4 horas — formato in-company ou turma aberta — onde sua equipe aprende a aplicar as principais ferramentas de IA Generativa em tarefas reais do trabalho.
              Sem pré-requisito técnico. Sem teoria longa. A metodologia é simples:{" "}
              <strong className="text-white">aprenda, veja funcionando, faça com a sua própria tarefa, sai usando.</strong>
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methodology.map((item, i) => (
              <AnimatedSection key={item.title} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/30 hover:-translate-y-1 transition-[transform,border-color] duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold gradient-text-gold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POR QUE EXISTE (PAS) ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Por que a <span className="gradient-text-gold">Virada Inteligente</span> existe
            </h2>
          </AnimatedSection>

          <div className="space-y-0">
            {[
              {
                label: "A dor real",
                color: "border-red-500/40",
                text: "Sua equipe vê notícia de IA todo dia. Concorrente posta no LinkedIn que \"implementou IA\". Algum gerente trouxe um curso de ChatGPT no fim de semana. E na segunda-feira nada muda. As planilhas continuam manuais, os e-mails continuam genéricos, as reuniões continuam virando ata que ninguém lê. A IA virou conversa de palco, não ferramenta de trabalho.",
              },
              {
                label: "Por que isso continua acontecendo",
                color: "border-primary/50",
                text: "Porque ninguém tem 40 horas para fazer um curso. Porque os tutoriais do YouTube ensinam a brincar com IA, não a resolver problema real. Porque a equipe não confia no que não viu funcionando com a tarefa dela. E porque, no fundo, falta alguém presente, ao lado, mostrando como adaptar cada ferramenta para a rotina específica da sua empresa.",
              },
              {
                label: "A virada acontece aqui",
                color: "border-accent/70",
                text: "Em 4 horas presenciais, sua equipe usa as principais ferramentas de IA com tarefas reais do trabalho dela. Não slide. Não simulação. A planilha que ela faz toda semana, o e-mail que ela escreve todo dia, o relatório que ela tem medo de fazer. Sai com isso pronto e sabendo refazer sozinha amanhã. Essa é a virada. Não é treinamento. É operação inicial.",
              },
            ].map((block, i) => (
              <AnimatedSection key={block.label} animation="fade-up" delay={i * 100}>
                <div className={`border-l-4 ${block.color} pl-6 py-7 ${i < 2 ? "border-b border-white/8" : ""}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">{block.label}</p>
                  <p className="text-white/80 leading-relaxed">{block.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Como funciona a <span className="gradient-text-gold">Virada Inteligente</span>
            </h2>
            <p className="text-white/50 text-lg">
              Quatro fases. Quatro horas. Equipe saindo de lá usando IA em tarefa real do trabalho.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.number} animation="fade-up" delay={i * 80}>
                <div className="relative h-full p-6 rounded-2xl border border-white/8 bg-white/4 hover:border-accent/30 transition-[border-color] duration-300 overflow-hidden">
                  <span className="absolute top-4 right-5 text-6xl font-black text-accent/8 select-none leading-none">
                    {phase.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-black text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                        Fase {phase.number}
                      </span>
                      <h3 className="font-bold text-lg text-white">{phase.name}</h3>
                    </div>

                    <p className="text-sm text-white/50 mb-4 leading-relaxed">{phase.objective}</p>

                    <ul className="space-y-2 mb-4">
                      {phase.deliveries.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-white/75">
                          <CheckCircle className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs text-primary font-medium">{phase.deadline}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DIFERENCIAL ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="relative rounded-2xl border-l-4 border-accent bg-white/4 p-8 md:p-12 overflow-hidden border border-white/8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                    O que torna a{" "}
                    <span className="gradient-text-gold">Virada Inteligente</span>{" "}
                    diferente
                  </h2>

                  <ul className="space-y-5">
                    {differentials.map((d, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <p className="text-white/75 leading-relaxed">{d}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. QUANDO E COMO PARTICIPAR ─────────────────────────────────────── */}
      <section id="turmas" className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Quando e como <span className="gradient-text-gold">participar</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Turma aberta */}
            <AnimatedSection animation="fade-right">
              <div className="relative flex flex-col h-full rounded-2xl border border-accent/35 bg-white/4 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-accent to-yellow-400" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="w-4 h-4 text-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">Turma aberta</span>
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-white/50">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Próxima turma sendo agendada — entre na lista de espera</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Recife/PE (presencial)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Vagas limitadas a 20 participantes por turma</span>
                    </div>
                  </div>

                  <div className="border border-accent/20 rounded-xl p-5 bg-black/20 mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Pronto para dar a virada com IA?</p>
                    <p className="text-3xl font-black text-white mb-1">
                      12x de R$&nbsp;113,46
                    </p>
                    <p className="text-sm text-white/50 mb-3">ou <strong className="text-white">R$&nbsp;1.097,00</strong> à vista</p>
                    <div className="flex items-center gap-2 p-2.5 rounded-lg bg-accent/10 border border-accent/20 mb-3">
                      <Zap className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      <span className="text-xs font-semibold text-accent">
                        Early bird: R$&nbsp;897,00 — até 15 dias antes da data
                      </span>
                    </div>
                    <p className="text-xs italic text-accent/80 font-medium">
                      "Quanto mais tempo você não usa IA, mais tempo você perde!"
                    </p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <a href={KIWIFY_VIRADA_URL} target="_blank" rel="noopener noreferrer" className="block">
                      <Button className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-black text-base hover:from-accent/90 hover:to-yellow-400/90 shadow-[0_0_30px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.7)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group py-6">
                        Contratar agora
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </a>

                    {/* Métodos de pagamento */}
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-white/60">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        Cartão
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#32BCAD]/10 border border-[#32BCAD]/25 text-[11px] font-bold text-[#32BCAD]">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                        PIX
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-white/60">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M8 4v16M12 4v16M16 4v16"/></svg>
                        Boleto
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-bold text-white/50">
                        <Shield className="w-3 h-3" />
                        Compra segura
                      </span>
                    </div>

                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-xs text-white/40 hover:text-[#25D366] transition-colors duration-200">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Tem dúvidas? Fale antes pelo WhatsApp
                    </a>
                  </div>

                  <p className="text-xs text-white/30 text-center mt-3">
                    *Parcelamento em até 12x no cartão de crédito. PIX e boleto à vista.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* In-company */}
            <AnimatedSection animation="fade-left">
              <div className="relative flex flex-col h-full rounded-2xl border border-primary/30 bg-white/4 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-cyan-400" />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">In-company</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    Quero levar a Virada para minha empresa
                  </h3>
                  <p className="text-sm text-white/50 mb-5 leading-relaxed">
                    Para empresas que querem a imersão exclusiva, com casos da própria operação.
                  </p>

                  <ul className="space-y-3 mb-6 flex-1">
                    {inCompanyIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mb-5">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Investimento</p>
                    <p className="text-base font-semibold text-white">Proposta personalizada sob consulta</p>
                  </div>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-primary/40 text-primary hover:bg-primary/10 font-bold group">
                      Solicitar proposta in-company
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── 7. ROI BLOCK ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#060D1A] border-y border-white/6">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              O que sua equipe leva embora —{" "}
              <span className="gradient-text-mixed">em números</span>
            </h2>
            <p className="text-white/50">
              Três ganhos mensuráveis que sua equipe inteira começa a entregar a partir da semana seguinte à imersão.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5 mb-6">
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

          <AnimatedSection>
            <p className="text-xs text-white/25 text-center max-w-2xl mx-auto">
              Métricas baseadas em benchmarks do Boston Consulting Group (AI at Work 2025) e McKinsey GenAI Workplace Report (2024) e na metodologia Aprenda · Veja · Faça da Virada Inteligente.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. FAQ ──────────────────────────────────────────────────────────── */}
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

      {/* ── 9. CTA RODAPÉ ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-primary/6 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              A <span className="gradient-text">virada</span> da sua equipe{" "}
              <span className="gradient-text-gold">começa hoje.</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              4 horas presenciais, espectro completo de ferramentas de IA, equipe inteira saindo de lá usando IA em tarefa real.{" "}
              Sem hype, sem teoria, sem promessa vazia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold px-8 py-6 rounded-xl shadow-[0_0_35px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.7)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar proposta in-company
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 rounded-xl transition-[background-color,border-color] duration-200 group"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Entrar na lista de turma aberta
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {["Atendimento consultivo", "Sem compromisso", "Resposta em até 24h"].map((item) => (
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
