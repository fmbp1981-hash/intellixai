import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

// Subtle Neural Network Background
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
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
    [0, 10], [1, 11], [3, 12], [4, 13], [5, 14], [7, 15], [8, 16],
    [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16],
    [10, 17], [11, 18], [12, 19], [13, 20], [14, 21], [15, 22], [16, 23],
    [17, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23],
    [1, 12], [4, 14], [6, 15], [11, 19], [13, 21],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((conn, i) => {
          const fromNode = nodes[conn[0]];
          const toNode = nodes[conn[1]];
          return (
            <line
              key={`line-${i}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#footerLineGradient)"
              strokeWidth="1"
              opacity="0.5"
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-group-${i}`}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="hsl(var(--primary))"
              opacity="0.15"
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2.5"
              fill="url(#nodeGradient)"
              opacity="0.7"
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="1"
              fill="white"
              opacity="0.8"
            />
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
    { href: "/portfolio", label: "Portfólio" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/como-trabalhamos", label: "Como Trabalhamos" },
    { href: "/contato", label: "Contato" },
  ];

  const solutions = [
    "Prospecção & Vendas com IA",
    "Atendimento Inteligente",
    "Gestão & Operações",
    "Sites & Landing Pages",
    "Soluções Sob Medida",
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(240_30%_6%)] via-[hsl(240_28%_10%)] to-card" />
      
      {/* Neural network effect */}
      <NeuralBackground />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="IntelliX.AI"
                className="h-28 md:h-36 w-auto transition-all duration-300 hover:opacity-90"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformamos negócios com soluções inteligentes de automação e IA.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/intellixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-base font-semibold text-foreground tracking-wide mb-5">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-base font-semibold text-foreground tracking-wide mb-5">
              Soluções
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Space_Grotesk'] text-base font-semibold text-foreground tracking-wide mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@intellix.ai"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 text-primary/70" />
                  contato@intellix.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+5581988514775"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 text-primary/70" />
                  +55 81 98851-4775
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary/70" />
                  Recife, PE - Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} IntelliX.AI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/politica-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
