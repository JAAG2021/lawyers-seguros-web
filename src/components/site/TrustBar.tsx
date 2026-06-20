export function TrustBar() {
  const items = [
    { k: "CMF", v: "Inscripción 9816 vigente" },
    { k: "Independiente", v: "Sin conflicto con aseguradoras" },
    { k: "Jurídico", v: "Revisión por abogado" },
    { k: "Lo Barnechea", v: "Santiago de Chile" },
  ];

  return (
    <div className="border-y border-border bg-surface">
      <div className="container-page grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.k}
            className="flex items-start gap-3 opacity-0"
            style={{
              animation: `stagger-in 0.5s ease-out ${120 + i * 100}ms both`,
            }}
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{it.k}</div>
              <div className="text-sm text-foreground">{it.v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
