import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  to: ComponentProps<typeof Link>["to"];
  cta: string;
};

export function CardRamo({ eyebrow, title, description, bullets, to, cta }: Props) {
  return (
    <article
      className="group flex flex-col rounded-xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 ease-out
        hover:-translate-y-[6px]
        hover:border-secondary/40
        hover:shadow-[0_20px_48px_-12px_color-mix(in_oklab,var(--color-secondary)_22%,transparent)]"
    >
      <span className="accent-rule" />
      <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{eyebrow}</div>
      <h3 className="mt-2 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-5 space-y-2 text-sm">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-2">
        <Link
          to={to}
          viewTransition
          className="btn-ghost-dark transition-all duration-200 group-hover:border-secondary group-hover:text-secondary"
        >
          {cta} →
        </Link>
      </div>
    </article>
  );
}
