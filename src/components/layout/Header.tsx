import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Zap, Briefcase, Stethoscope, Users, Cog, MessageSquare, Phone, Search, Hammer, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-intellix.png";

const solucoesLinks = [
  { href: "/radar-ai", label: "RADAR.AI", sub: "Diagnóstico estratégico · B2B", icon: Search, iconHex: "#22d3ee", iconBg: "bg-cyan-400/12 border-cyan-400/25" },
  { href: "/forja-ai", label: "FORJA.AI", sub: "Desenvolvimento sob medida · B2B", icon: Hammer, iconHex: "#facc15", iconBg: "bg-yellow-400/12 border-yellow-400/25" },
  { href: "/trilha-ai", label: "TRILHA.AI", sub: "Mentoria individual · B2C", icon: Map, iconHex: "#a78bfa", iconBg: "bg-violet-500/12 border-violet-500/25" },
  { href: "/virada-inteligente", label: "Virada Inteligente", sub: "Imersão in-company e turma aberta", icon: Users, iconHex: "#34d399", iconBg: "bg-emerald-500/12 border-emerald-500/25" },
];

const mainNavLinks = [
  { href: "/cases", label: "Cases", icon: Briefcase },
  { href: "/diagnostico", label: "Diagnóstico", icon: Stethoscope },
  { href: "/#falar-com-equipe", label: "Fale Conosco", icon: Phone, isAnchor: true },
];

const moreLinks = [
  { href: "/quem-somos", label: "Quem Somos", icon: Users },
  { href: "/como-trabalhamos", label: "Como Trabalhamos", icon: Cog },
  { href: "/contato", label: "Contato", icon: MessageSquare },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#060D1A]/95 backdrop-blur-xl border-b border-primary/30 shadow-[0_4px_40px_-10px_hsl(var(--primary)/0.4)]"
          : "bg-[#060D1A]/80 backdrop-blur-xl border-b border-primary/20"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0">
            <img
              src={logo}
              alt="IntelliX.AI"
              className="h-24 md:h-28 w-auto drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_30px_hsl(var(--primary)/0.8)] group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Links Diretos Visíveis */}
          <nav className="hidden lg:flex items-center gap-2">

            {/* Soluções dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`relative px-5 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center gap-2 group ${
                  location.pathname.startsWith("/solucoes") || location.pathname.startsWith("/radar") || location.pathname.startsWith("/forja") || location.pathname.startsWith("/trilha") || location.pathname.startsWith("/virada")
                    ? "text-primary bg-primary/15 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                    : "text-white/80 hover:text-primary hover:bg-primary/10"
                }`}>
                  <Zap className="w-5 h-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  Soluções
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-72 bg-[#0A1525]/98 backdrop-blur-xl border border-primary/20 shadow-xl shadow-primary/10 p-2"
              >
                {solucoesLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        to={link.href}
                        className={`flex items-start gap-3 px-3 py-3 rounded-lg cursor-pointer transition-colors ${
                          isActive(link.href) ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/6"
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-xl ${link.iconBg} border flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Icon className="w-4 h-4" style={{ color: link.iconHex }} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-sm leading-tight">{link.label}</p>
                          <p className="text-xs text-white/40 mt-0.5">{link.sub}</p>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator className="my-1 bg-white/8" />
                <DropdownMenuItem asChild>
                  <Link
                    to="/solucoes"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-white/40 hover:text-white/60 hover:bg-white/4 transition-colors cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Ver comparativo completo das soluções
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {mainNavLinks.map((link) => {
              const Icon = link.icon;
              const isAnchorLink = 'isAnchor' in link && link.isAnchor;
              
              if (isAnchorLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-5 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center gap-2 group text-white/80 hover:text-primary hover:bg-primary/10"
                  >
                    <Icon className="w-5 h-5 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                    {link.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-5 py-3 rounded-xl font-semibold text-base transition-all duration-300 flex items-center gap-2 group ${
                    isActive(link.href)
                      ? "text-primary bg-primary/15 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                      : "text-white/80 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive(link.href) ? "text-primary" : "group-hover:text-primary group-hover:scale-110"
                  }`} />
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
                  )}
                </Link>
              );
            })}

            {/* Dropdown para mais opções */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-5 py-3 rounded-xl font-semibold text-base text-white/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 group">
                  Mais
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-[#0A1525]/98 backdrop-blur-xl border border-primary/30 shadow-xl shadow-primary/20"
              >
                {moreLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link
                        to={link.href}
                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
                          isActive(link.href) ? "text-primary bg-primary/10" : "hover:text-primary"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link to="/diagnostico" className="hidden md:block">
              <Button className="bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground hover:from-accent/90 hover:to-yellow-400/90 font-bold px-6 py-3 rounded-xl shadow-[0_0_25px_hsl(var(--accent)/0.5)] hover:shadow-[0_0_35px_hsl(var(--accent)/0.7)] transition-all duration-300 hover:scale-105">
                Diagnóstico Gratuito
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-6 space-y-1 bg-[#0A1525]/98 backdrop-blur-xl rounded-2xl mb-4 border border-primary/20">
            {/* Soluções section header */}
            <p className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-white/25">Soluções</p>
            {solucoesLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 text-base font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-primary bg-primary/15"
                      : "text-white/70 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
            <div className="mx-6 my-2 border-t border-white/8" />
            {[...mainNavLinks, ...moreLinks].map((link, index) => {
              const Icon = link.icon;
              const isAnchorLink = 'isAnchor' in link && link.isAnchor;
              
              if (isAnchorLink) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 px-6 py-4 text-lg font-semibold transition-all duration-300 text-white/70 hover:text-primary hover:bg-primary/10"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </a>
                );
              }
              
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-primary bg-primary/15"
                      : "text-white/70 hover:text-primary hover:bg-primary/10"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
            <div className="px-4 pt-4">
              <Link to="/diagnostico" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold py-4 rounded-xl shadow-[0_0_20px_hsl(var(--accent)/0.4)]">
                  Diagnóstico Gratuito
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
