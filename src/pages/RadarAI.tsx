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
  Search,
  BarChart3,
  Map,
  FileText,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Layers,
  Users,
  Building2,
  Cpu,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const problems = [
  {
    icon: AlertTriangle,
    title: "Comprou ferramenta de IA. Não usou.",
    description: "Subscrição de R$ 800/mês que ficou no cartão porque ninguém sabia como aplicar no processo real da empresa.",
  },
  {
    icon: Layers,
    title: "Fez treinamento. Voltou ao mesmo.",
    description: "Curso bonito, certificado entregue, operação igual. Porque nenhum treinamento genérico muda processo específico.",
  },
  {
    icon: AlertTriangle,
    title: "Piloto de IA que nunca virou produção.",
    description: "Prova de conceito empolgante, resultado real zero. Falta de diagnóstico antes = projeto errado no lugar certo.",
  },
];

const phases = [
  {
    number: "01",
    name: "Imersão na operação",
    objective: "Entender como sua empresa realmente funciona — não o organograma, a operação real.",
    deliveries: [
      "Entrevistas com gestores e operadores-chave",
      "Mapeamento dos fluxos de trabalho críticos",
      "Identificação de gargalos, retrabalho e desperdício de tempo",
      "Análise dos sistemas e dados disponíveis",
    ],
    color: "border-accent/50",
  },
  {
    number: "02",
    name: "Mapeamento de oportunidades",
    objective: "Localizar onde a IA gera retorno real — com critério técnico, não entusiasmo.",
    deliveries: [
      "Varredura de processos com maior potencial de automação",
      "Avaliação de viabilidade técnica por iniciativa",
      "Estimativa de impacto: tempo, custo e receita",
      "Classificação por esforço de implementação",
    ],
    color: "border-primary/50",
  },
  {
    number: "03",
    name: "Plano priorizado de implementação",
    objective: "Entregar um roteiro de ação — não uma lista de ideias, um plano executável.",
    deliveries: [
      "Mapa de oportunidades ranqueado por ROI estimado",
      "Quick wins: o que implementar em 30 dias com impacto imediato",
      "Iniciativas de médio prazo: 60 a 90 dias",
      "Visão de transformação: 6 a 12 meses",
    ],
    color: "border-accent/30",
  },
  {
    number: "04",
    name: "Apresentação executiva",
    objective: "Decisão tomada com base em dados, não em achismo ou pressão de fornecedor.",
    deliveries: [
      "Apresentação para C-level com tudo mapeado",
      "Cenários de investimento e retorno projetado",
      "Recomendação priorizada e fundamentada",
      "30 dias de acesso direto ao consultor para dúvidas",
    ],
    color: "border-primary/30",
  },
];

const deliverables = [
  {
    icon: Map,
    title: "Mapa de oportunidades de IA",
    description: "Documento específico para o seu negócio. Cada oportunidade identificada com contexto, viabilidade e impacto estimado. Não existe versão genérica — é feito do zero para a sua operação.",
  },
  {
    icon: BarChart3,
    title: "Estimativa de ROI por iniciativa",
    description: "Cada oportunidade mapeada vem com projeção de retorno: horas economizadas, custo reduzido, receita potencial. Para você decidir onde investir com critério, não com aposta.",
  },
  {
    icon: FileText,
    title: "Plano de implementação priorizado",
    description: "Roteiro executável dividido em fases — quick wins, médio prazo e transformação. Com o que fazer, em que ordem, e por que aquela sequência faz sentido para o seu caso.",
  },
  {
    icon: ShieldCheck,
    title: "Apresentação executiva para decisão",
    description: "Tudo consolidado em formato de apresentação para o time de liderança. Para que a decisão de implementação seja informada, fundamentada e sem surpresa orçamentária.",
  },
];

const profiles = [
  {
    icon: Building2,
    title: "CEO ou dono de empresa",
    description: "Ouve falar de IA todo dia, sabe que precisa agir, mas não quer gastar errado. Quer saber exatamente onde investir antes de comprometer orçamento.",
  },
  {
    icon: Users,
    title: "Diretor de operações ou COO",
    description: "Responsável por eficiência, tem gargalos que se repetem há anos. Precisa de um diagnóstico externo que mapeie com imparcialidade e profundidade técnica.",
  },
  {
    icon: TrendingUp,
    title: "Gestor que quer escalar sem aumentar headcount",
    description: "A equipe está no limite. Contratar mais não é viável agora. Quer saber o que a IA pode fazer antes de abrir mais uma vaga.",
  },
];

const whySpecialist = [
  "Plataformas de diagnóstico entregam relatório automático baseado em template. O RADAR.AI entrega consultoria humana especializada — um especialista que mergulha na sua operação e pensa junto com você.",
  "Ferramenta genérica não conhece seu segmento, sua equipe, seus dados, seu fluxo. O especialista IntelliX.AI constrói o diagnóstico do zero, com base no que viu funcionando — e no que não funciona — em operações reais.",
  "Com o RADAR.AI, você não recebe uma lista de sugestões de IA. Você recebe um plano de ação personalizado, priorizado por impacto real no seu negócio específico — e um consultor ao seu lado para tirar dúvidas durante a implementação.",
];

const roiCards = [
  {
    stat: "R$ 0",
    category: "GASTO EM PROJETO DE IA NO LUGAR ERRADO",
    description: "O diagnóstico mapeia onde a IA gera retorno antes de qualquer investimento em desenvolvimento — eliminando o erro mais caro do mercado: construir no lugar errado.",
  },
  {
    stat: "30 dias",
    category: "PRIMEIRO QUICK WIN IMPLEMENTÁVEL",
    description: "Você sai do RADAR.AI com pelo menos uma oportunidade de alto impacto identificada, priorizada e pronta para execução imediata — sem precisar esperar o projeto completo.",
  },
  {
    stat: "3 a 5",
    category: "OPORTUNIDADES COM ROI ESTIMADO",
    description: "Cada oportunidade mapeada vem com projeção de impacto real: tempo economizado, custo reduzido, receita potencial. Você decide onde investir com dados, não com aposta.",
  },
];

const faqs = [
  {
    q: "O RADAR.AI é um software ou uma consultoria?",
    a: "É consultoria especializada conduzida dentro da sua empresa. Não existe painel para acessar, não existe relatório automático. Um especialista IntelliX.AI vai até você, entende os processos in loco e entrega um diagnóstico construído especificamente para o seu negócio.",
  },
  {
    q: "Qual o tamanho mínimo de empresa para fazer sentido?",
    a: "O RADAR.AI funciona melhor para empresas com 10 a 200 colaboradores, faturamento acima de R$ 1M/ano e pelo menos um processo operacional recorrente com volume relevante. Abaixo disso, outros produtos IntelliX.AI podem entregar resultado com menor investimento.",
  },
  {
    q: "Quanto tempo leva o processo completo?",
    a: "O prazo varia conforme a complexidade da operação e a disponibilidade da equipe para os mapeamentos. O diagnóstico é conduzido dentro da empresa, com ritmo definido em conjunto com o cliente — sem prazo fixo imposto de fora.",
  },
  {
    q: "O RADAR.AI inclui a implementação das soluções?",
    a: "O RADAR.AI é o diagnóstico — o passo zero antes de qualquer implementação. Após o mapa de oportunidades, se a empresa quiser avançar para o desenvolvimento das soluções, a FORJA.AI (desenvolvimento sob medida) é o próximo passo natural. Mas a decisão de implementar é sempre do cliente.",
  },
  {
    q: "O diagnóstico é confidencial?",
    a: "Totalmente. Todo o material produzido durante o RADAR.AI é de propriedade exclusiva do cliente. A IntelliX.AI opera sob NDA e não reutiliza informações de um cliente em trabalhos para outros.",
  },
  {
    q: "Como é definido o investimento?",
    a: "O valor do RADAR.AI é definido em conversa, com base no tamanho da operação, complexidade dos processos a mapear e escopo acordado. Não existe tabela de preços fixa — cada diagnóstico é único, e o investimento reflete isso.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function RadarAI() {
  const whatsappUrl = `https://wa.me/5581988514775?text=${encodeURIComponent("Olá! Quero saber mais sobre o RADAR.AI — diagnóstico estratégico de IA para minha empresa.")}`;

  return (
    <Layout>
      <Helmet>
        <title>RADAR.AI | Diagnóstico Estratégico com IA · IntelliX.AI</title>
        <meta name="description" content="Mapeie as oportunidades de automação da sua empresa em 30 minutos. Diagnóstico estratégico B2B com inteligência artificial." />
        <meta property="og:title" content="RADAR.AI | Diagnóstico Estratégico com IA · IntelliX.AI" />
        <meta property="og:description" content="Mapeie as oportunidades de automação da sua empresa em 30 minutos. Diagnóstico estratégico B2B com inteligência artificial." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/radar-ai" />
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#060D1A]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/5 pointer-events-none" />

        {/* Radar SVG — signature detail */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 hidden lg:block pointer-events-none" aria-hidden="true">
          <div className="relative w-[520px] h-[520px]">
            <img src="/solucoes/radar-ai.svg" alt="" className="w-full h-full opacity-65" />
            <div
              className="absolute inset-0 rounded-full animate-radar-spin"
              style={{ background: "conic-gradient(from 0deg, transparent 75%, hsl(200 75% 48% / 0.22) 88%, transparent 100%)" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="max-w-3xl">

            <AnimatedSection animation="fade-up" delay={0}>
              <div className="flex w-fit items-center gap-2 bg-white/5 border border-primary/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
                <Search className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs font-semibold text-white/80 tracking-wide">
                  Consultoria estratégica · B2B · Diagnóstico especializado
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 tracking-tight">
                <span className="gradient-text">RADAR</span>
                <span className="gradient-text-gold">.AI</span>
                <br />
                <span className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  Onde está a IA que{" "}
                  <br className="hidden md:block" />
                  vale para o seu negócio?
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <p className="text-xl md:text-2xl text-white/55 leading-relaxed mb-4 max-w-2xl">
                Antes de gastar um centavo em projeto de IA, você precisa saber exatamente onde ela gera retorno na sua operação. Isso não vem de ferramenta automática — vem de um especialista que mergulha no seu negócio.
              </p>
              <p className="text-base text-white/35 mb-10 max-w-xl">
                Com o RADAR.AI, você não contrata mais uma plataforma. Você contrata inteligência especializada — um consultor sênior que constrói o diagnóstico do zero para a sua realidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 py-6 rounded-xl shadow-[0_0_30px_hsl(var(--accent)/0.45)] hover:shadow-[0_0_45px_hsl(var(--accent)/0.65)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quero o diagnóstico da minha empresa
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </a>
                <a href="#como-funciona">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 rounded-xl transition-[background-color,border-color] duration-200"
                  >
                    Ver como funciona
                  </Button>
                </a>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── 2. O PROBLEMA ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que acontece quando você investe{" "}
              <span className="gradient-text-gold">sem diagnóstico</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Não é falta de vontade. É falta do passo certo antes de agir.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {problems.map((problem, i) => (
              <AnimatedSection key={problem.title} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-7 rounded-2xl border border-red-500/15 bg-red-500/5 hover:border-red-500/25 transition-[border-color] duration-300">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                    <problem.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{problem.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{problem.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10">
            <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                O problema nunca foi a IA. Foi pular o diagnóstico e ir direto para a ferramenta errada{" "}
                <span className="gradient-text-gold">no processo errado.</span>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. O QUE É O RADAR.AI ───────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-primary/25 bg-white/4 p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">O que é o RADAR.AI</p>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                  Não é um relatório automático.{" "}
                  <span className="gradient-text-gold">É um especialista</span>{" "}
                  dentro da sua operação.
                </h2>

                <div className="space-y-5 text-white/70 leading-relaxed">
                  <p>
                    O RADAR.AI é um serviço de consultoria estratégica conduzido dentro da sua empresa. Um especialista IntelliX.AI vai até você, vivencia os processos in loco, entrevista equipes e analisa os dados — para identificar com precisão cirúrgica onde a IA gera o maior retorno no seu caso específico.
                  </p>
                  <p>
                    O resultado não é uma lista genérica de "como usar ChatGPT no trabalho". É um <strong className="text-white">mapa de oportunidades construído do zero para a sua realidade</strong> — com ROI estimado por iniciativa, plano de implementação priorizado e apresentação executiva para tomada de decisão.
                  </p>
                  <p className="text-white/90 font-semibold">
                    Você não compra um software. Você contrata inteligência especializada — e sai sabendo exatamente o que fazer, em que ordem, com que resultado esperado.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. COMO FUNCIONA ────────────────────────────────────────────────── */}
      <section id="como-funciona" className="py-24 bg-[#0A1525]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Como funciona o <span className="gradient-text">RADAR</span><span className="gradient-text-gold">.AI</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Quatro fases estruturadas. Do mapeamento da sua operação ao plano pronto para implementar.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-5">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.number} animation="fade-up" delay={i * 80}>
                <div className={`relative h-full p-7 rounded-2xl border ${phase.color} bg-white/4 hover:bg-white/6 transition-[background-color,border-color] duration-300 overflow-hidden`}>
                  <span className="absolute inset-0 flex items-center justify-center text-[9rem] font-black text-white/[0.04] select-none leading-none pointer-events-none">
                    {phase.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-black text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                        Fase {phase.number}
                      </span>
                      <h3 className="font-bold text-lg text-white">{phase.name}</h3>
                    </div>

                    <p className="text-sm text-white/50 mb-4 leading-relaxed">{phase.objective}</p>

                    <ul className="space-y-2 mb-5">
                      {phase.deliveries.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-white/75">
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
      </section>

      {/* ── 5. O QUE VOCÊ RECEBE ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#060D1A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que você recebe ao{" "}
              <span className="gradient-text">final</span>{" "}
              <span className="gradient-text-gold">do diagnóstico</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Quatro entregáveis concretos. Nenhum template — tudo construído para a sua empresa, sobre a sua operação.
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
              O que o diagnóstico vale{" "}
              <span className="gradient-text-mixed">em números</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Antes de gastar em projeto de IA, o diagnóstico correto define o que implementar — e evita o que não deve ser feito.
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
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que especialista —{" "}
              <span className="gradient-text-gold">não plataforma</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Existe uma diferença fundamental entre um relatório gerado por algoritmo e um diagnóstico construído por quem entende de operação e de IA ao mesmo tempo.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {whySpecialist.map((text, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 80}>
                <div className="flex gap-5 p-6 rounded-2xl border border-white/8 bg-white/4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-7 h-7 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center">
                      <span className="text-xs font-black text-accent">{i + 1}</span>
                    </div>
                  </div>
                  <p className="text-white/75 leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8">
            <div className="rounded-2xl border border-accent/30 bg-accent/6 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-2">A IntelliX.AI não vende IA. Vende resultado com IA.</p>
                  <p className="text-white/65 leading-relaxed">
                    Cada diagnóstico RADAR.AI é conduzido por Felipe Maranhão — Engenheiro Mecatrônico, MBA em IA para Negócios, 18+ anos de experiência em operação e tecnologia. Você não recebe um relatório assinado por "a equipe". Você recebe o trabalho de um especialista sênior que coloca o nome no diagnóstico.
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
              Para quem é o{" "}
              <span className="gradient-text">RADAR</span>
              <span className="gradient-text-gold">.AI</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Para líderes que querem decisão fundamentada — não mais uma aposta em tecnologia.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-5">
            {profiles.map((profile, i) => (
              <AnimatedSection key={profile.title} animation="fade-up" delay={i * 80}>
                <div className="flex flex-col h-full p-7 rounded-2xl border border-white/8 bg-white/4 hover:border-primary/25 hover:-translate-y-1 transition-[transform,border-color] duration-300">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <profile.icon className="w-5 h-5 text-primary" />
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
                  className="border border-white/8 rounded-xl px-6 bg-white/4 hover:border-primary/20 transition-[border-color] duration-200"
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-primary hover:no-underline py-5 [&[data-state=open]]:text-primary">
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-accent/5 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6 mx-auto">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-white">
              Antes de investir em <span className="gradient-text">IA</span>,{" "}
              <span className="gradient-text-gold">invista no diagnóstico.</span>
            </h2>
            <p className="text-lg text-white/50 mb-4 leading-relaxed">
              Um especialista IntelliX.AI analisa sua operação, mapeia onde a IA gera retorno real no seu caso e entrega um plano priorizado — para você decidir com dados, não com achismo.
            </p>
            <p className="text-base text-white/35 mb-10">
              Solução 100% personalizada. Sem template. Sem relatório automático. Sem promessa genérica.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-10 py-6 rounded-xl shadow-[0_0_35px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_50px_hsl(var(--accent)/0.7)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar diagnóstico RADAR.AI
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              {["Diagnóstico 100% personalizado", "Sem compromisso de implementação", "NDA incluso"].map((item) => (
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
