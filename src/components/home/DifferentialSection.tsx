import { CheckCircle2, ArrowRight, Sparkles, Target, Puzzle, HeartHandshake, LayoutGrid } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const differentials = [
  {
    icon: Target,
    text: "Resultado mensurável desde o primeiro mês — métrica antes de qualquer linha de código",
    iconHex: "#facc15",
  },
  {
    icon: Puzzle,
    text: "Integração com o que já existe — sem migração traumática, sem descartar sistemas",
    iconHex: "#22d3ee",
  },
  {
    icon: HeartHandshake,
    text: "IA que amplifica a equipe, não substitui — colaboradores mais produtivos, não desempregados",
    iconHex: "#34d399",
  },
  {
    icon: LayoutGrid,
    text: "Frentes complementares — do diagnóstico ao desenvolvimento proprietário sob medida",
    iconHex: "#a78bfa",
  },
  {
    icon: Sparkles,
    text: "Parceiro de transformação mês a mês — não fornecedor de projeto que some após o deploy",
    iconHex: "#facc15",
  },
];

const methodology = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "RADAR.AI mapeia processos, identifica gaps e prioriza as alavancas de maior retorno para o seu momento.",
    color: "#22d3ee",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Escopo, cronograma e métricas de sucesso definidos antes de escrever uma linha de código.",
    color: "#facc15",
  },
  {
    step: "03",
    title: "Implementação",
    description: "FORJA.AI constrói com stack consolidada e integra ao que já existe na sua operação.",
    color: "#a78bfa",
  },
  {
    step: "04",
    title: "Evolução",
    description: "Monitoramento contínuo, ajustes e expansão baseados em dados reais — não em achismo.",
    color: "#34d399",
  },
];

export function DifferentialSection() {
  return (
    <section className="py-24 bg-[#0A1525] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-primary/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <AnimatedSection animation="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Diferenciais</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
              Por que escolher a{" "}
              <span className="gradient-text-gold">IntelliX</span>
              <span className="gradient-text">.AI</span>
            </h2>
            <p className="text-lg text-white/50 mb-9 leading-relaxed">
              Combinamos método proprietário com profundo entendimento de negócio para entregar soluções que realmente movem os números — sem hype, com responsabilidade sobre o resultado.
            </p>

            <ul className="space-y-4 mb-10">
              {differentials.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.iconHex }} />
                  <span className="text-white/65 text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>

            <Link to="/como-trabalhamos">
              <Button
                size="lg"
                variant="outline"
                className="border-white/15 text-white/60 hover:border-primary/40 hover:text-primary hover:bg-primary/6 font-medium px-7 py-5 rounded-xl transition-[border-color,color,background-color] duration-200 group"
              >
                Conheça nossa metodologia
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <div className="rounded-2xl border border-white/8 bg-white/4 p-8">
              <h3 className="text-lg font-bold text-white mb-8 text-center">Nossa Metodologia</h3>

              <div className="space-y-6">
                {methodology.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border"
                      style={{
                        backgroundColor: `${item.color}18`,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      <span className="text-sm font-black" style={{ color: item.color }}>{item.step}</span>
                    </div>
                    <div className="pt-1">
                      <p className="font-bold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/6">
                <p className="text-xs text-white/30 text-center leading-relaxed">
                  Cada fase tem entregável claro e aprovação do cliente antes de avançar.
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
