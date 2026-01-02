import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo-intellix.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-card via-background to-background border-t border-primary/20 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="IntelliX.AI" 
                className="h-14 w-auto drop-shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.7)]" 
              />
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-primary text-glow tracking-tight">
                  IntelliX
                </span>
                <span className="text-xl font-bold gradient-text-gold">
                  .AI
                </span>
              </div>
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
            <h4 className="font-semibold text-foreground mb-4 text-primary">Navegação</h4>
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
            <h4 className="font-semibold text-foreground mb-4 text-primary">Soluções</h4>
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
            <h4 className="font-semibold text-foreground mb-4 text-primary">Contato</h4>
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
            <p className="text-xs text-muted-foreground mt-2">@ai_intellix</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} <span className="text-primary">IntelliX</span><span className="text-accent">.AI</span>. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/diagnostico" className="text-sm text-accent hover:text-accent/80 transition-colors font-semibold glow-gold px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent/20">
              Iniciar Diagnóstico
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
