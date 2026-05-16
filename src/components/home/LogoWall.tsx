import { AnimatedSection } from "@/hooks/useScrollAnimation";

const clients = [
  {
    name: "Grupo Cavendish",
    initials: "GC",
    description: "Consultoria empresarial",
    iconHex: "#22d3ee",
    bg: "bg-cyan-400/8 border-cyan-400/20",
  },
  {
    name: "XPAG Brasil",
    initials: "XP",
    description: "Recrutamento & seleção",
    iconHex: "#facc15",
    bg: "bg-yellow-400/8 border-yellow-400/20",
  },
  {
    name: "Yolo Coliving",
    initials: "YC",
    description: "Moradia e comunidade",
    iconHex: "#a78bfa",
    bg: "bg-violet-500/8 border-violet-500/20",
  },
];

export function LogoWall() {
  return (
    <section className="py-14 bg-[#0A1525] border-y border-white/6">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-1">
            Empresas que confiam na IntelliX.AI
          </p>
          <p className="text-xs text-white/20">
            Projetos vivos em operação · Parcerias de longo prazo
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clients.map((client) => (
            <AnimatedSection key={client.name} animation="fade-up">
              <div className="group flex flex-col items-center gap-3">
                <div
                  className={`w-16 h-16 rounded-2xl ${client.bg} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <span className="text-base font-black" style={{ color: client.iconHex }}>
                    {client.initials}
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-white/55 group-hover:text-white/80 transition-colors duration-300">
                    {client.name}
                  </p>
                  <p className="text-[10px] text-white/25 mt-0.5">{client.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
