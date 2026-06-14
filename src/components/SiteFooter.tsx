import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import logo from "@/assets/logo-arvore.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-5 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logótipo O Ninho da Mariazinha" width={64} height={64} loading="lazy" className="h-14 w-auto object-contain" />
            <div className="font-display text-lg font-bold leading-tight">O Ninho<br /><span className="text-sm font-normal text-muted-foreground">da Mariazinha</span></div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Há 20 anos a construir esperança, dignidade e apoio para quem mais precisa, em Coimbra.
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Navegar</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/quem-somos" className="text-muted-foreground hover:text-foreground">Quem Somos</Link></li>
            <li><Link to="/missao" className="text-muted-foreground hover:text-foreground">Missão</Link></li>
            <li><Link to="/noticias" className="text-muted-foreground hover:text-foreground">Notícias</Link></li>
            <li><Link to="/contactos" className="text-muted-foreground hover:text-foreground">Contactos</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Envolver-se</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/voluntariado" className="text-muted-foreground hover:text-foreground">Ser Voluntário</Link></li>
            <li><Link to="/como-contribuir" className="text-muted-foreground hover:text-foreground">Como Contribuir</Link></li>
            <li><Link to="/precisa-de-ajuda" className="text-muted-foreground hover:text-foreground">Precisa de Ajuda?</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /><span>Estrada de Eiras, 67<br />3025-069 Coimbra</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /><span>239 444 672</span></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /><span>geral@ninhodamariazinha.pt</span></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider">Redes Sociais</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="https://www.instagram.com/oninhodamariazinha/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ExternalLink className="h-4 w-4 shrink-0" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/ONinhodaMariazinha/?locale=pt_PT&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <ExternalLink className="h-4 w-4 shrink-0" /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Associação O Ninho da Mariazinha · IPSS · Todos os direitos reservados</span>
          <span>Made By JIPR</span>
        </div>
      </div>
    </footer>
  );
}
