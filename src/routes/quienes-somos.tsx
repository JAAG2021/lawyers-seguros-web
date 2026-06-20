import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { DIFERENCIADORES } from "@/lib/content";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes somos — Lawyers Seguros" },
      { name: "description", content: "Lawyers Seguros — corredora con respaldo jurídico e independencia comercial. Asesoría especializada en condominios y colegios." },
      { property: "og:title", content: "Quiénes somos — Lawyers Seguros" },
      { property: "og:description", content: "Corredora independiente con representación legal. Conoce a nuestro equipo y datos verificables ante la CMF." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/quienes-somos.mp4" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Quiénes somos" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Quiénes somos</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            Un broker de seguros con enfoque jurídico e innovador.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Somos un equipo profesional, principalmente abogados, orientado a la planificación jurídica estratégica y a la confección de contratos de seguros para blindar a nuestros clientes desde el prisma jurídico.
          </p>
        </div>
      </section>

      <section className="py-16">
        <FadeUp className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <div className="text-center">
                  <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border-2 border-accent/50 font-display text-4xl">LS</div>
                  <div className="mt-3 font-display text-lg">Representante legal</div>
                  <div className="text-sm text-primary-foreground/70">Foto profesional</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Nuestro enfoque</h2>
            <p className="mt-3 text-muted-foreground">
              Acompañamos a nuestros clientes durante toda la vigencia de sus contratos de seguros, al momento del siniestro y ante eventuales juicios. Ponemos a su disposición nuestra experticia en distintas áreas del derecho para traducir las pólizas a decisiones claras. No vendemos coberturas: recomendamos contratos.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Independencia comercial", d: "No tenemos exclusividad ni metas con ninguna aseguradora." },
                { t: "Revisión documentada", d: "Entregamos informe escrito de cada propuesta o póliza." },
                { t: "Acompañamiento en siniestros", d: "Estamos durante la denuncia, no solo al firmar." },
                { t: "Lenguaje claro", d: "Explicamos las cláusulas técnicas en términos operativos." },
              ].map((x) => (
                <div key={x.t} className="rounded-xl border border-border bg-surface p-5">
                  <div className="font-semibold text-primary">{x.t}</div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <FadeUp className="max-w-2xl">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">¿Por qué nosotros?</h2>
            <p className="mt-2 text-muted-foreground">Lo que nos distingue de una corredora tradicional.</p>
          </FadeUp>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {DIFERENCIADORES.map((d, i) => (
              <FadeUp key={i} delay={i * 60} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-bold text-primary">✓</span>
                <span className="text-muted-foreground">{d}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <FadeUp>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Datos verificables</h2>
            <p className="mt-2 text-muted-foreground">Toda la información es pública y verificable en el sitio de la Comisión para el Mercado Financiero.</p>
          </FadeUp>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "Tipo de entidad", v: "Corredora de seguros no previsional" },
              { k: "Inscripción CMF", v: "Vigente (verificable en cmf.cl)" },
              { k: "Independencia", v: "Sin exclusividad con ninguna aseguradora" },
              { k: "Domicilio", v: "Av. La Dehesa 222, Oficina 709, Lo Barnechea, Santiago" },
            ].map((x, i) => (
              <FadeUp key={x.k} delay={i * 80} className="rounded-xl border border-border bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{x.k}</div>
                <div className="mt-2 text-sm font-medium text-foreground">{x.v}</div>
              </FadeUp>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/revision-poliza" className="btn-primary">Solicitar revisión de póliza</Link>
            <Link to="/contacto" className="btn-ghost-dark">Hablar con un asesor</Link>
          </div>
        </div>
      </section>
    </>
  );
}
