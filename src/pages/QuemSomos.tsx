import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Lightbulb, Rocket, Heart, GraduationCap, Award, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicidade Operacional",
    description: "Tecnologia complexa com interface simples. Você não precisa ser técnico para usar o que entregamos.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
  },
  {
    icon: Target,
    title: "Resultado acima de hype",
    description: "Não vendemos tendências. Entregamos soluções que funcionam e geram ROI mensurável no balanço.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
  },
  {
    icon: Heart,
    title: "Tecnologia a serviço do negócio",
    description: "A IA é meio, não fim. O objetivo é sempre resolver problemas reais — não impressionar com demos.",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    icon: Rocket,
    title: "Escala com eficiência",
    description: "Sistemas que crescem junto com você, sem aumentar proporcionalmente os custos operacionais.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const badges = [
  { icon: GraduationCap, label: "Eng. Mecatrônico" },
  { icon: Award, label: "MBA IA para Negócios — Faculdade Exame" },
  { icon: Briefcase, label: "+18 anos de experiência operacional" },
];

export default function QuemSomos() {
  return (
    <Layout>
      <Helmet>
        <title>Quem Somos | IntelliX.AI - Automação e IA para Empresas</title>
        <meta name="description" content="Conheça a IntelliX.AI: empresa especializada em automação inteligente, agentes de IA e transformação digital para PMEs brasileiras." />
        <meta property="og:title" content="Quem Somos | IntelliX.AI - Automação e IA para Empresas" />
        <meta property="og:description" content="Conheça a IntelliX.AI: empresa especializada em automação inteligente, agentes de IA e transformação digital para PMEs brasileiras." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/quem-somos" />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">Sobre a IntelliX.AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Quem é a{" "}
              <span className="gradient-text-gold">IntelliX</span>
              <span className="gradient-text">.AI</span>
            </h1>
            <p className="text-xl text-white/55 leading-relaxed">
              Empresa de inteligência artificial aplicada — transformamos operações em resultados mensuráveis através de soluções específicas para cada negócio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-20 bg-[#0A1525] relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <AnimatedSection animation="fade-up" delay={0}>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-8 lg:p-10 h-full hover:border-primary/30 transition-[border-color] duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/12 border border-primary/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-white mb-4">Nossa Missão</h2>
                <p className="text-white/55 leading-relaxed">
                  Democratizar o acesso à inteligência artificial para empresas de todos os tamanhos — transformando processos complexos em fluxos simples, automatizados e com resultados reais no balanço.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-8 lg:p-10 h-full hover:border-accent/30 transition-[border-color] duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/12 border border-accent/20 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-xl font-bold text-white mb-4">Nossa Visão</h2>
                <p className="text-white/55 leading-relaxed">
                  Ser a principal referência em inteligência artificial aplicada a negócios na América Latina — reconhecida por entregar soluções que realmente funcionam, com ROI verificável.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Os princípios que guiam{" "}
              <span className="gradient-text">cada entrega</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Não são frases de parede. São os critérios que usamos para decidir o que construir — e o que recusar.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} animation="fade-up" delay={index * 80}>
                <div className="flex flex-col h-full rounded-2xl border border-white/8 bg-white/4 p-6 hover:border-white/15 transition-[border-color] duration-300">
                  <div className={`w-11 h-11 rounded-xl ${value.bg} border flex items-center justify-center mb-5`}>
                    <value.icon className={`w-5 h-5 ${value.color}`} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-3">{value.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Fundador */}
      <section className="py-20 bg-[#0A1525] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/4 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">

          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Quem comanda a{" "}
              <span className="gradient-text-gold">IntelliX</span>
              <span className="gradient-text">.AI</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-8 lg:p-12 hover:border-accent/25 transition-[border-color] duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start">

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/25 to-primary/15 border border-accent/30 flex items-center justify-center">
                    <span className="text-2xl font-black gradient-text-gold">FM</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">Felipe Maranhão</h3>
                  <p className="text-accent font-semibold mb-5">Fundador & CEO — IntelliX.AI</p>

                  <p className="text-white/60 text-base leading-relaxed mb-4">
                    Engenheiro Mecatrônico com MBA em Inteligência Artificial para Negócios pela Faculdade Exame e mais de 18 anos de experiência em operações industriais e empresariais. Construiu a IntelliX.AI com uma premissa simples:
                  </p>

                  <blockquote className="border-l-2 border-accent/60 pl-4 mb-5">
                    <p className="text-white font-semibold text-base leading-relaxed">
                      "IA que não gera resultado mensurável não é IA — é hype caro."
                    </p>
                  </blockquote>

                  <p className="text-white/55 leading-relaxed mb-6">
                    Hoje lidera duas frentes simultâneas — a IntelliX.AI e o AÇAÍ-SE — aplicando inteligência artificial na prática, com clientes reais, problemas reais e resultados que aparecem no balanço.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {badges.map((item) => (
                      <div key={item.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/12">
                        <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span className="text-xs font-medium text-white/70">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 bg-[#060D1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/8 bg-white/4 p-10 lg:p-14 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">A diferença IntelliX.AI</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
                Não somos apenas devs.<br />
                Somos <span className="gradient-text">consultores de negócio</span>{" "}
                que usam <span className="gradient-text-gold">tecnologia como ferramenta.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Antes de escrever qualquer código, entendemos profundamente o seu negócio, seus gargalos e o que precisa mudar. Nossa abordagem combina metodologia de consultoria com execução técnica — garantindo que cada entrega tenha impacto real e mensurável.
              </p>
              <div className="border-t border-white/8 pt-8 mb-8">
                <p className="text-xl font-bold">
                  <span className="gradient-text">Tecnologia invisível.</span>{" "}
                  <span className="gradient-text-gold">Resultado visível.</span>
                </p>
              </div>
              <Link to="/diagnostico">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold px-8 shadow-[0_0_25px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.6)] transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 group"
                >
                  Agendar diagnóstico gratuito
                  <ArrowRight className="ml-2 group-hover:translate-x-0.5 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </Layout>
  );
}
