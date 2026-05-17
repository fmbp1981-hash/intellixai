const clients = [
  {
    name: "Grupo Cavendish",
    description: "Consultoria empresarial",
    logo: "/logos/logo-cavendish.png",
    logoStyle: "object-cover",
    containerClass: "w-16 h-16 rounded-xl bg-transparent border border-white/10 overflow-hidden",
  },
  {
    name: "XPAG Brasil",
    description: "Recrutamento & seleção",
    logo: "/logos/logo-xpag.png",
    logoStyle: "object-contain p-2",
    containerClass: "w-16 h-16 rounded-xl bg-white border border-white/10 overflow-hidden",
  },
  {
    name: "Yolo Coliving",
    description: "Moradia e comunidade",
    logo: "/logos/logo-yolo.jpg",
    logoStyle: "object-cover",
    containerClass: "w-16 h-16 rounded-full border border-white/10 overflow-hidden",
  },
];

// Duplicar 4x para preencher a largura da tela sem gaps no loop
const marqueeItems = [...clients, ...clients, ...clients, ...clients];

export function LogoWall() {
  return (
    <section className="py-12 bg-[#0A1525] border-y border-white/6 overflow-hidden">

      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-white/25 mb-8">
        Empresas que confiam na IntelliX.AI
      </p>

      {/* Track com fade nas bordas */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {marqueeItems.map((client, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-2.5 mx-8 flex-shrink-0"
            >
              <div className={`${client.containerClass} group-hover:scale-105 group-hover:border-white/25 transition-[transform,border-color] duration-300 flex items-center justify-center`}>
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className={`w-full h-full ${client.logoStyle} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
              <div className="text-center">
                <p className="text-[11px] font-semibold text-white/40 group-hover:text-white/70 transition-colors duration-300 whitespace-nowrap">
                  {client.name}
                </p>
                <p className="text-[9px] text-white/20 mt-0.5 whitespace-nowrap">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
