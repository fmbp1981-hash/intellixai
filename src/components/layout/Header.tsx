import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-intellix.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/como-trabalhamos", label: "Como Trabalhamos" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_-10px_hsl(var(--primary)/0.3)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="group">
              <img 
                src={logo} 
                alt="IntelliX.AI" 
                className="h-20 md:h-24 w-auto drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.7)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary text-glow"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/diagnostico">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold glow-gold">
                Diagnóstico Gratuito
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/diagnostico" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-2">
                  Diagnóstico Gratuito
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
