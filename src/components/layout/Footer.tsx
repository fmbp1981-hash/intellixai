import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="IntelliX.AI" className="h-10 w-auto" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sistemas inteligentes que fazem sua empresa operar melhor, vender mais e depender menos de tarefas manuais.
            </p>
            <p className="text-primary font-medium text-sm">
              Tecnologia invisível. Resultado visível.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/como-trabalhamos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Como Trabalhamos
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Soluções</h4>
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
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contato@intellix.ai" className="hover:text-primary transition-colors">
                  contato@intellix.ai
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+5581988514775" className="hover:text-primary transition-colors">
                  +55 81 98851-4775
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>Recife, PE - Brasil</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} IntelliX.AI. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/diagnostico" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              Iniciar Diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
