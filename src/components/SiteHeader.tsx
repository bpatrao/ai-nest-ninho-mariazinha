import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-arvore.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/missao", label: "Missão" },
  { to: "/como-contribuir", label: "Como Contribuir" },
  { to: "/voluntariado", label: "Ser Voluntário" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="O Ninho da Mariazinha — Início">
          <img
            src={logo}
            alt="Logótipo da Associação O Ninho da Mariazinha"
            width={64}
            height={64}
            className="h-12 w-auto object-contain sm:h-14"
          />
          <div className="leading-tight">
            <div className="font-display text-base font-bold text-foreground sm:text-lg">Associação O Ninho</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">da Mariazinha · Apoio Social</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/precisa-de-ajuda">Precisa de Ajuda?</Link>
          </Button>
        </div>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/precisa-de-ajuda"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-3 py-2.5 text-center text-base font-semibold text-accent-foreground"
            >
              Precisa de Ajuda?
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
