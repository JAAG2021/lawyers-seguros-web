type Item = { q: string; a: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
      {items.map((it, i) => (
        <details key={i} className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:bg-muted/50">
            <span>{it.q}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-secondary transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
