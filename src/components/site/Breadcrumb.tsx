import { Link } from "@tanstack/react-router";

type Item = { label: string; href?: string };

export function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <div className="mb-6">
    <nav
      aria-label="Ruta de navegación"
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
    >
      <Link
        to="/"
        className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-accent"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        Inicio
      </Link>

      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-white/40">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          {item.href ? (
            <Link to={item.href} className="text-white/80 transition-colors hover:text-accent">
              {item.label}
            </Link>
          ) : (
            <span className="text-accent">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
    </div>
  );
}
