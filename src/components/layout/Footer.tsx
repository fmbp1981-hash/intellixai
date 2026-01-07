import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

// Neural Network Background Component - Elegant & Visible
const NeuralBackground = () => {
  const nodes = [
    // Top layer
    { x: 5, y: 15 }, { x: 15, y: 25 }, { x: 25, y: 12 }, { x: 35, y: 30 },
    { x: 45, y: 18 }, { x: 55, y: 28 }, { x: 65, y: 15 }, { x: 75, y: 25 },
    { x: 85, y: 20 }, { x: 95, y: 30 },
    // Middle layer
    { x: 10, y: 50 }, { x: 22, y: 45 }, { x: 38, y: 55 }, { x: 50, y: 48 },
    { x: 62, y: 52 }, { x: 78, y: 45 }, { x: 90, y: 55 },
    // Bottom layer
    { x: 8, y: 75 }, { x: 20, y: 82 }, { x: 35, y: 78 }, { x: 48, y: 85 },
    { x: 60, y: 80 }, { x: 75, y: 88 }, { x: 88, y: 75 }, { x: 95, y: 82 },
  ];

  const connections = [
    // Top connections
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9],
    // Top to middle
    [0, 10], [1, 11], [3, 12], [4, 13], [5, 14], [7, 15], [8, 16],
    // Middle connections
    [10, 11], [11, 12], [12, 13], [13, 14], [14, 15], [15, 16],
    // Middle to bottom
    [10, 17], [11, 18], [12, 19], [13, 20], [14, 21], [15, 22], [16, 23],
    // Bottom connections
    [17, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23],
    // Cross connections for depth
    [1, 12], [4, 14], [6, 15], [11, 19], [13, 21],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          {/* Gradient for lines */}
          <linearGradient id="lineGradientPremium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          
          {/* Glow filter for nodes */}
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Animated gradient */}
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="hsl(190 100% 50%)" stopOpacity="0.6">
              <animate attributeName="stop-opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Connection Lines - Elegant thin lines */}
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
              stroke="url(#lineGradientPremium)"
              strokeWidth="1.5"
              opacity="0.6"
            />
          );
        })}

        {/* Nodes with glow effect */}
        {nodes.map((node, i) => (
          <g key={`node-group-${i}`}>
            {/* Outer glow */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="6"
              fill="hsl(var(--primary))"
              opacity="0.15"
            />
            {/* Main node */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="3"
              fill="url(#pulseGradient)"
              filter="url(#nodeGlow)"
              opacity="0.8"
            />
            {/* Center bright point */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="1.5"
              fill="white"
              opacity="0.9"
            />
          </g>
        ))}

        {/* Decorative accent lines */}
        <line
          x1="0%" y1="40%"
          x2="100%" y2="40%"
          stroke="url(#lineGradientPremium)"
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="0%" y1="70%"
          x2="100%" y2="70%"
          stroke="url(#lineGradientPremium)"
          strokeWidth="0.5"
          opacity="0.2"
        />
      </svg>

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            left: `${8 + i * 8}%`,
            top: `${20 + (i % 4) * 20}%`,
            animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}
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
    { href: "/diagnostico", label: "Diagnóstico" },
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
    <footer className="relative pt-24 pb-10 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_40%_3%)] via-[hsl(220_35%_5%)] to-background" />

      {/* Neural Network Effect - Subtle */}
      <NeuralBackground />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <img
                src={logo}
                alt="IntelliX.AI"
                className="h-24 md:h-28 w-auto drop-shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all duration-300 group-hover:drop-shadow-[0_0_60px_hsl(var(--primary)/0.9)] group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Transformamos negócios com soluções inteligentes de automação e IA.
              <span className="block mt-2 text-primary font-semibold">Conecte-se ao futuro.</span>
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/intellixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)]"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-card-glow p-6 rounded-2xl">
            <h3 className="text-xl font-bold gradient-text-gold text-glow-gold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group text-base"
                  >
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="glass-card-glow p-6 rounded-2xl">
            <h3 className="text-xl font-bold gradient-text-gold text-glow-gold mb-6">Soluções</h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <span className="text-muted-foreground flex items-center gap-3 text-base">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 animate-pulse shadow-[0_0_8px_hsl(var(--primary))]" />
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="glass-card-glow p-6 rounded-2xl">
            <h3 className="text-xl font-bold gradient-text-gold text-glow-gold mb-6">Contato</h3>
            <ul className="space-y-5">
              <li>
                <a
                  href="mailto:contato@intellix.ai"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  contato@intellix.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+5581988514775"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  +55 81 98851-4775
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)/0.3)]">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Recife, PE - Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with glow */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8 shadow-[0_0_10px_hsl(var(--primary)/0.5)]" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
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
