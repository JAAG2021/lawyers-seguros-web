import { Link } from "@tanstack/react-router";
import { useState } from "react";

const segurosLinks = [
  { to: "/seguros/condominio", label: "Seguro Condominio" },
  { to: "/seguros/colegios", label: "Seguro Colegios" },
  { to: "/revision-poliza", label: "Revisión de póliza" },
] as const;

const mainLinks = [
  { to: "/servicios", label: "Servicios" },
  { to: "/industrias", label: "Industrias" },
  { to: "/productos", label: "Productos" },
  { to: "/quienes-somos", label: "Quiénes somos" },
  { to: "/preguntas-frecuentes", label: "FAQ" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[color:var(--color-surface)]/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold">L</span>
          <span className="font-display text-lg font-semibold text-primary">Lawyers <span className="text-secondary">Seguros</span></span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <Link to="/servicios" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            Servicios
          </Link>
          <Link to="/industrias" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            Industrias
          </Link>
          <Link to="/productos" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            Productos
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors hover:text-secondary">
              Seguros
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5 transition-transform group-hover:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-56 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                {segurosLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-secondary"
                    activeProps={{ className: "text-secondary" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/quienes-somos" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            Quiénes somos
          </Link>
          <Link to="/preguntas-frecuentes" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            FAQ
          </Link>
          <Link to="/contacto" className="text-sm font-medium text-foreground/80 transition-colors hover:text-secondary" activeProps={{ className: "text-secondary" }}>
            Contacto
          </Link>
        </nav>
        <div className="hidden lg:block">
          <Link to="/contacto" className="btn-primary">Cotizar</Link>
        </div>
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
        >
          <span className="i-menu">≡</span>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            <Link to="/servicios" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Servicios</Link>
            <Link to="/industrias" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Industrias</Link>
            <Link to="/productos" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">Productos</Link>
            <div className="mt-1 px-3 pt-1 text-xs font-semibold uppercase tracking-wider text-secondary">Seguros</div>
            {segurosLinks.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <div className="my-1 border-t border-border" />
            {mainLinks.slice(3).map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                {l.label}
              </Link>
            ))}
            <Link to="/contacto" onClick={() => setOpen(false)} className="btn-primary mt-2">Cotizar</Link>
          </div>
        </div>
      )}
    </header>
  );
}
