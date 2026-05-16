import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

const NeuralBackground = () => {
  const nodes = [
    { x: 5, y: 15 }, { x: 15, y: 25 }, { x: 25, y: 10 }, { x: 35, y: 30 },
    { x: 45, y: 18 }, { x: 55, y: 28 }, { x: 65, y: 12 }, { x: 75, y: 25 },
    { x: 85, y: 20 }, { x: 95, y: 30 },
    { x: 8, y: 50 }, { x: 22, y: 45 }, { x: 38, y: 55 }, { x: 52, y: 48 },
    { x: 68, y: 52 }, { x: 82, y: 45 }, { x: 92, y: 55 },
    { x: 5, y: 75 }, { x: 18, y: 82 }, { x: 32, y: 78 }, { x: 48, y: 85 },
    { x: 62, y: 80 }, { x: 78, y: 88 }, { x: 92, y: 75 },
  ];
  const connections = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],
    [0,10],[1,11],[3,12],[4,13],[5,14],[7,15],[8,16],
    [10,11],[11,12],[12,13],[13,14],[14,15],[15,16],
    [10,17],[11,18],[12,19],[13,20],[14,21],[15,22],[16,23],
    [17,18],[18,19],[19,20],[20,21],[21,22],[22,23],
    [1,12],[4,14],[6,15],[11,19],[13,21],
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5">
              <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0.5">
              <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
        {connections.map((conn, i) => {
          const from = nodes[conn[0]]; const to = nodes[conn[1]];
          return <line key={i} x1={`${from.x}%`} y1={`${from.y}%`} x2={`${to.x}%`} y2={`${to.y}%`} stroke="url(#footerLineGradient)" strokeWidth="1" opacity="0.4" />;
        })}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle cx={`${node.x}%`} cy={`${node.y}%`} r="4" fill="hsl(var(--primary))" opacity="0.1" />
            <circle cx={`${node.x}%`} cy={`${node.y}%`} r="2.5" fill="url(#nodeGradient)" opacity="0.6" />
            <circle cx={`${node.x}%`} cy={`${node.y}%`} r="1" fill="white" opacity="0.7" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/cases", label: "Cases" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/como-trabalhamos", label: "Como Trabalhamos" },
    { href: "/contato", label: "Contato" },
  ];

  const frentes = [
    { href: "/radar-ai", label: "RADAR.AI — Diagnóstico estratégico" },
    { href: "/forja-ai", label: "FORJA.AI — Desenvolvimento sob medida" },
    { href: "/trilha-ai", label: "TRILHA.AI — Mentoria individual" },
    { href: "/virada-inteligente", label: "Virada Inteligente — Imersão in-company" },
    { href: "/diagnostico", label: "Diagnóstico Gratuito" },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030810] via-[#060D1A] to-[#0A1525]" />
      <NeuralBackground />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src={logo} alt="IntelliX.AI" className="h-28 md:h-32 w-auto transition-opacity duration-300 hover:opacity-85" />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              IA aplicada a resultado de negócio — sem hype, com método.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/intellixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:border-primary/50 hover:text-primary hover:bg-primary/8 hover:scale-110 transition-[border-color,color,background-color,transform] duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:border-accent/50 hover:text-accent hover:bg-accent/8 hover:scale-110 transition-[border-color,color,background-color,transform] duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Links Rápidos</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Frentes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Soluções</h3>
            <ul className="space-y-2.5">
              {frentes.map((f) => (
                <li key={f.href}>
                  <Link
                    to={f.href}
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">Contato</h3>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:contato@intellixai.com.br" className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary/60 flex-shrink-0" />
                  contato@intellixai.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5581988514775" className="flex items-center gap-3 text-white/45 hover:text-white text-sm transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary/60 flex-shrink-0" />
                  +55 81 98851-4775
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/35 text-sm">
                  <MapPin className="w-4 h-4 text-primary/60 flex-shrink-0" />
                  Recife, PE — Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {currentYear} IntelliX.AI. Todos os direitos reservados.</p>
          <p className="text-white/15">Recife, PE · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
