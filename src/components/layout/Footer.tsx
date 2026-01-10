import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

// Subtle Neural Network Background
const NeuralBackground = () => {
  const nodes = [
    { x: 5, y: 20 }, { x: 20, y: 30 }, { x: 35, y: 15 }, { x: 50, y: 35 },
    { x: 65, y: 20 }, { x: 80, y: 30 }, { x: 95, y: 25 },
    { x: 10, y: 55 }, { x: 30, y: 50 }, { x: 50, y: 60 }, { x: 70, y: 50 }, { x: 90, y: 58 },
    { x: 15, y: 80 }, { x: 40, y: 85 }, { x: 60, y: 78 }, { x: 85, y: 82 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [0, 7], [2, 8], [3, 9], [4, 10], [6, 11],
    [7, 8], [8, 9], [9, 10], [10, 11],
    [7, 12], [9, 13], [10, 14], [11, 15],
    [12, 13], [13, 14], [14, 15],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="footerLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
        </defs>

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
              strokeWidth="0.5"
              opacity="0.6"
            />
          );
        })}

        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="hsl(var(--primary))"
            opacity="0.4"
          />
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
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary/80 hover:text-primary hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
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
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
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
