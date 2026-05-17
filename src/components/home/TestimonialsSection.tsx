import { AnimatedSection } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote:
      "A IntelliX.AI não veio com tecnologia pronta. Veio entender o nosso negócio primeiro. O RADAR.AI identificou três oportunidades que a gente não estava vendo — e o resultado apareceu em menos de 60 dias.",
    name: "Ricardo Almeida",
    role: "Diretor Executivo",
    company: "Grupo Cavendish",
    initials: "RA",
    avatarColor: "from-cyan-500 to-primary",
    badge: "RADAR.AI",
    badgeClass: "bg-cyan-400/10 border-cyan-400/25 text-cyan-300",
    accentBar: "from-cyan-400 to-primary",
  },
  {
    quote:
      "Em 3 horas de Virada Inteligente, minha equipe saiu usando IA de verdade — não teoria. Já na semana seguinte, quatro colaboradores tinham automatizado tarefas que tomavam horas do dia.",
    name: "Fernanda Costa",
    role: "Head de People",
    company: "XPAG Brasil",
    initials: "FC",
    avatarColor: "from-yellow-400 to-amber-500",
    badge: "Virada Inteligente",
    badgeClass: "bg-yellow-400/10 border-yellow-400/25 text-yellow-300",
    accentBar: "from-accent to-yellow-400",
  },
  {
    quote:
      "Pensávamos que IA era para grandes empresas. A IntelliX.AI mostrou que pequenas mudanças bem colocadas geram resultado imediato. Atendimento automatizado, qualificação de leads — tudo rodando.",
    name: "Bruno Melo",
    role: "CEO",
    company: "Yolo Coliving",
    initials: "BM",
    avatarColor: "from-emerald-400 to-teal-500",
    badge: "FORJA.AI",
    badgeClass: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
    accentBar: "from-emerald-500 to-teal-400",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0A1525] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        <AnimatedSection className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white/50">
              Quem usa, recomenda
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            O que nossos{" "}
            <span className="gradient-text-gold">clientes</span>{" "}
            <span className="gradient-text">dizem</span>
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto leading-relaxed">
            Resultado real, de quem está usando IA aplicada no dia a dia da operação.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} animation="fade-up" delay={i * 80}>
              <div className="card-glass rounded-2xl overflow-hidden h-full flex flex-col group hover:-translate-y-1">

                {/* Accent bar top */}
                <div className={`h-[3px] bg-gradient-to-r ${t.accentBar} flex-shrink-0`} />

                <div className="p-6 flex flex-col flex-1">

                  {/* Quote mark */}
                  <div
                    className="text-5xl font-black leading-none mb-4 select-none"
                    style={{
                      backgroundImage: "linear-gradient(135deg, hsl(38 91% 60%), hsl(38 91% 75%))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                    aria-hidden="true"
                  >
                    "
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-sm text-white/70 leading-relaxed flex-1 mb-6">
                    {t.quote}
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(0,0,0,0.3)]`}>
                      <span className="text-[11px] font-black text-white">{t.initials}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-white leading-tight">{t.name}</p>
                      <p className="text-xs text-white/40 leading-tight mt-0.5">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <span className={`inline-flex items-center text-[9px] font-bold px-2 py-0.5 rounded-full border flex-shrink-0 ${t.badgeClass}`}>
                      {t.badge}
                    </span>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
