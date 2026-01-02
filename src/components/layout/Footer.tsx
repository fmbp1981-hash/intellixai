import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-[hsl(220_30%_8%)] border-t border-primary/30 overflow-hidden">
      {/* Subtle particle/halo background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/6 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="IntelliX.AI" 
                className="h-20 md:h-24 w-auto drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.7)]"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sistemas inteligentes que fazem sua empresa operar melhor, vender mais e depender menos de tarefas manuais.
            </p>
            <p className="font-medium text-sm">
              <span className="text-primary text-glow">Tecnologia invisível.</span>{" "}
              <span className="gradient-text-gold">Resultado visível.</span>
            </p>
          </div>

          {/* Links */}
          <div className="glass-card-glow p-6">
            <h4 className="font-semibold mb-4 gradient-text-gold text-glow-gold">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors hover-glow inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-muted-foreground hover:text-primary text-sm transition-colors hover-glow inline-block">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-muted-foreground hover:text-primary text-sm transition-colors hover-glow inline-block">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors hover-glow inline-block">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/como-trabalhamos" className="text-muted-foreground hover:text-primary text-sm transition-colors hover-glow inline-block">
                  Como Trabalhamos
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div className="glass-card-glow p-6">
            <h4 className="font-semibold mb-4 gradient-text-gold text-glow-gold">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground text-sm">Prospecção & Vendas</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Atendimento Inteligente</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Gestão & Operações</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Sites & Landing Pages</span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Soluções Sob Medida</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="glass-card-glow p-6">
            <h4 className="font-semibold mb-4 gradient-text-gold text-glow-gold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary icon-glow" />
                <a href="mailto:contato@intellix.ai" className="hover:text-primary transition-colors">
                  contato@intellix.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary icon-glow" />
                <a href="tel:+5581988514775" className="hover:text-primary transition-colors">
                  +55 81 98851-4775
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary icon-glow mt-0.5" />
                <span>Recife, PE - Brasil</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com/company/intellixai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/ai_intellix"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
                aria-label="Instagram @ai_intellix"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 mt-6 pt-4 flex justify-center items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} IntelliX.AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
