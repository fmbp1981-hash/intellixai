import { AnimatedSection } from "@/hooks/useScrollAnimation";

const clients = [
  {
    name: "Grupo Cavendish",
    description: "Consultoria empresarial",
    logo: "/logos/logo-cavendish.png",
    logoStyle: "object-cover",
    containerClass: "w-20 h-20 rounded-2xl bg-transparent border border-white/10 overflow-hidden",
  },
  {
    name: "XPAG Brasil",
    description: "Recrutamento & seleção",
    logo: "/logos/logo-xpag.png",
    logoStyle: "object-contain p-3",
    containerClass: "w-20 h-20 rounded-2xl bg-white border border-white/10 overflow-hidden",
  },
  {
    name: "Yolo Coliving",
    description: "Moradia e comunidade",
    logo: "/logos/logo-yolo.jpg",
    logoStyle: "object-cover",
    containerClass: "w-20 h-20 rounded-full border border-white/10 overflow-hidden",
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
                <div className={`${client.containerClass} group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`w-full h-full ${client.logoStyle}`}
                  />
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
