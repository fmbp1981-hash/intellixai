import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

// Neural Network Background Component - Much more visible
const NeuralBackground = () => {
  const nodes = [
    { x: 5, y: 15, size: 6 }, { x: 12, y: 40, size: 8 }, { x: 20, y: 20, size: 5 },
    { x: 28, y: 55, size: 7 }, { x: 35, y: 30, size: 6 }, { x: 42, y: 70, size: 8 },
    { x: 50, y: 25, size: 5 }, { x: 58, y: 50, size: 7 }, { x: 65, y: 15, size: 6 },
    { x: 72, y: 45, size: 8 }, { x: 80, y: 25, size: 5 }, { x: 88, y: 60, size: 7 },
    { x: 95, y: 35, size: 6 }, { x: 15, y: 75, size: 7 }, { x: 30, y: 85, size: 6 },
    { x: 45, y: 80, size: 8 }, { x: 60, y: 88, size: 5 }, { x: 75, y: 78, size: 7 },
    { x: 90, y: 85, size: 6 }, { x: 8, y: 55, size: 5 }, { x: 25, y: 65, size: 6 },
    { x: 55, y: 65, size: 7 }, { x: 85, y: 70, size: 5 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 11], [11, 12],
    [0, 19], [1, 20], [2, 4], [3, 20], [5, 21], [6, 8], [7, 21], [9, 22], [11, 22],
    [13, 14], [14, 15], [15, 16], [16, 17], [17, 18],
    [1, 13], [3, 14], [5, 15], [7, 16], [9, 17], [11, 18],
    [19, 20], [20, 21], [21, 22], [19, 13], [20, 14], [21, 16], [22, 18],
    [4, 21], [6, 21], [8, 22], [10, 22],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradientFooter" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(190 100% 60%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="nodeGlowFooter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(190 100% 70%)" stopOpacity="1" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFooter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="strongGlowFooter" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines - More visible */}
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
              stroke="url(#lineGradientFooter)"
              strokeWidth="2"
              filter="url(#glowFooter)"
              opacity="0.7"
              className="animate-pulse-slow"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}

        {/* Nodes - Larger and more glowing */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            {/* Outer pulsing ring */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 3}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.4"
              className="animate-ping"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: "3s" }}
            />
            {/* Large glow */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 2}
              fill="url(#nodeGlowFooter)"
              opacity="0.6"
              filter="url(#strongGlowFooter)"
            />
            {/* Core node */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill="hsl(190 100% 65%)"
              filter="url(#strongGlowFooter)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: "2s" }}
            />
            {/* Bright center */}
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size * 0.4}
              fill="white"
              opacity="0.95"
            />
          </g>
        ))}
      </svg>

      {/* Additional floating particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full animate-float shadow-[0_0_10px_hsl(var(--primary))]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
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
    <footer className="relative pt-28 pb-10 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_40%_2%)] via-[hsl(220_35%_6%)] to-[hsl(220_30%_10%)]" />

      {/* Neural Network Effect */}
      <NeuralBackground />

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

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
