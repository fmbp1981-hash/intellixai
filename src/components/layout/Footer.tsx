import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

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
    <footer className="relative pt-20 pb-8 bg-card border-t border-border">
      {/* Subtle gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="IntelliX.AI"
                className="h-28 md:h-32 w-auto transition-all duration-300 hover:opacity-90"
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
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
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
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
              Soluções
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@intellix.ai"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  contato@intellix.ai
                </a>
              </li>
              <li>
                <a
                  href="tel:+5581988514775"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +55 81 98851-4775
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  Recife, PE - Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

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
