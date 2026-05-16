import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Lightbulb, PenTool, Cpu, MonitorSmartphone, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Mapeamos sua operação em até 30 minutos de conversa. Saímos com 3 oportunidades de IA identificadas, faixa de investimento estimada e próximo passo claro.",
    detail: "Sem formulário genérico. Sem apresentação corporativa. Uma conversa direta sobre o que trava sua empresa.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    bar: "from-cyan-400 to-primary",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Priorização por Impacto",
    description: "Classificamos os gargalos por impacto financeiro real e viabilidade técnica. Você decide onde começar.",
    detail: "Muitos problemas, pouco tempo. Priorizamos o que vai mover o ponteiro mais rápido — com menor risco de implementação.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    bar: "from-accent to-yellow-400",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Desenho da Solução",
    description: "Prototipamos o fluxo completo, definimos integrações e validamos a proposta com você antes de escrever uma linha de código.",
    detail: "Você aprova o que vai ser construído. Zero surpresas no meio do projeto.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
    bar: "from-violet-500 to-purple-400",
  },
  {
    number: "04",
    icon: Cpu,
    title: "Construção com IA e Automação",
    description: "Desenvolvemos o sistema com as ferramentas certas para o seu problema — não com as ferramentas que estão na moda.",
    detail: "n8n, GPT Maker, Evolution API, APIs de IA generativa. Escolhemos a ferramenta pelo resultado, não pela tecnologia.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    bar: "from-emerald-500 to-teal-400",
  },
  {
    number: "05",
    icon: MonitorSmartphone,
    title: "Entrega com Treinamento",
    description: "Você e a equipe entram em operação no mesmo dia da entrega. A complexidade fica nos bastidores.",
    detail: "Documentação simples, treinamento prático, suporte na primeira semana. O sistema chega produtivo desde o primeiro acesso.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    bar: "from-cyan-400 to-primary",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Evolução Contínua",
    description: "Monitoramos métricas, identificamos melhorias e evoluímos o sistema mês a mês. A solução cresce junto com o seu negócio.",
    detail: "Resultado não é entrega. É o número que mudou no seu dashboard depois que a IA entrou em produção.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    bar: "from-accent to-yellow-400",
  },
];

export default function ComoTrabalhamos() {
  return (
    <Layout>
      <Helmet>
        <title>Como Trabalhamos | IntelliX.AI - Método e Processo</title>
        <meta name="description" content="Veja como a IntelliX.AI entrega soluções de IA: diagnóstico, estratégia, implementação e acompanhamento contínuo." />
        <meta property="og:title" content="Como Trabalhamos | IntelliX.AI - Método e Processo" />
        <meta property="og:description" content="Veja como a IntelliX.AI entrega soluções de IA: diagnóstico, estratégia, implementação e acompanhamento contínuo." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/como-trabalhamos" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Metodologia IntelliX.AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como <span className="gradient-text">Trabalhamos</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed">
              Metodologia que combina consultoria de negócios com execução técnica. Cada projeto segue um processo estruturado — do diagnóstico ao resultado mensurável.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-[#0A1525] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* Desktop: 2-column grid / Mobile: stack */}
            <div className="grid md:grid-cols-2 gap-5">
              {steps.map((step, index) => (
                <AnimatedSection key={step.number} animation="fade-up" delay={index * 70}>
                  <div className="group rounded-2xl border border-white/8 bg-white/4 overflow-hidden hover:border-white/15 hover:-translate-y-0.5 transition-[transform,border-color] duration-300 h-full">

                    {/* Top bar */}
                    <div className={`h-[3px] bg-gradient-to-r ${step.bar}`} />

                    <div className="p-6 lg:p-7 flex flex-col h-full">
                      {/* Number + Icon */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-xl ${step.bg} border flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-5 h-5 ${step.color}`} />
                        </div>
                        <span className="text-4xl font-black text-white/8 select-none leading-none">{step.number}</span>
                      </div>

                      <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-sm text-white/60 leading-relaxed mb-3 flex-1">{step.description}</p>
                      <p className="text-xs text-white/35 leading-relaxed border-t border-white/6 pt-3 mt-auto">{step.detail}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Filosofia / CTA */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="gradient-text">Tecnologia invisível.</span>
              <br />
              <span className="gradient-text-gold">Resultado visível.</span>
            </h2>
            <p className="text-white/50 text-lg mb-4 leading-relaxed">
              A melhor tecnologia é aquela que você nem percebe que está usando. Sistemas complexos nos bastidores, experiência simples para você e sua equipe.
            </p>
            <p className="text-white/40 mb-10 leading-relaxed">
              O que importa não é quantas automações implementamos. O que importa é o resultado no seu negócio: mais vendas, menos custos, mais eficiência.
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
