import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[hsl(220_30%_4%)] via-[hsl(220_30%_8%)] to-[hsl(220_30%_12%)] border-t border-primary/30 overflow-hidden">
      {/* Neural connections background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Neural network SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Connection lines */}
          <g stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4">
            <line x1="10%" y1="20%" x2="25%" y2="35%" className="animate-pulse-slow" />
            <line x1="25%" y1="35%" x2="40%" y2="25%" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            <line x1="40%" y1="25%" x2="55%" y2="40%" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="55%" y1="40%" x2="70%" y2="30%" className="animate-pulse-slow" style={{ animationDelay: '0.3s' }} />
            <line x1="70%" y1="30%" x2="85%" y2="45%" className="animate-pulse-slow" style={{ animationDelay: '0.7s' }} />
            <line x1="25%" y1="35%" x2="30%" y2="60%" className="animate-pulse-slow" style={{ animationDelay: '0.2s' }} />
            <line x1="30%" y1="60%" x2="50%" y2="70%" className="animate-pulse-slow" style={{ animationDelay: '0.8s' }} />
            <line x1="50%" y1="70%" x2="70%" y2="60%" className="animate-pulse-slow" style={{ animationDelay: '0.4s' }} />
            <line x1="70%" y1="60%" x2="85%" y2="75%" className="animate-pulse-slow" style={{ animationDelay: '1.2s' }} />
            <line x1="55%" y1="40%" x2="50%" y2="70%" className="animate-pulse-slow" style={{ animationDelay: '0.6s' }} />
            <line x1="15%" y1="70%" x2="30%" y2="60%" className="animate-pulse-slow" style={{ animationDelay: '0.9s' }} />
            <line x1="40%" y1="25%" x2="30%" y2="60%" className="animate-pulse-slow" style={{ animationDelay: '1.1s' }} />
            <line x1="70%" y1="30%" x2="70%" y2="60%" className="animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          </g>
          
          {/* Neural nodes */}
          <g>
            <circle cx="10%" cy="20%" r="4" fill="url(#nodeGlow)" className="animate-pulse-glow" />
            <circle cx="25%" cy="35%" r="5" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
            <circle cx="40%" cy="25%" r="4" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.6s' }} />
            <circle cx="55%" cy="40%" r="6" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.9s' }} />
            <circle cx="70%" cy="30%" r="4" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
            <circle cx="85%" cy="45%" r="5" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
            <circle cx="30%" cy="60%" r="5" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
            <circle cx="50%" cy="70%" r="6" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
            <circle cx="70%" cy="60%" r="4" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
            <circle cx="85%" cy="75%" r="5" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
            <circle cx="15%" cy="70%" r="4" fill="url(#nodeGlow)" className="animate-pulse-glow" style={{ animationDelay: '0.8s' }} />
          </g>
        </svg>
        
        {/* Subtle glow overlays */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-primary/4 rounded-full blur-[60px]" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <img 
                src={logo} 
                alt="IntelliX.AI" 
                className="h-24 md:h-28 w-auto drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.7)]"
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
