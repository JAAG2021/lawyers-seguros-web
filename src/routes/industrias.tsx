import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { INDUSTRIAS } from "@/lib/content";
import { slugify } from "@/lib/utils";

export const Route = createFileRoute("/industrias")({
  head: () => ({
    meta: [
      { title: "Industrias que atendemos — Lawyers Seguros" },
      { name: "description", content: "Construcción, transporte, minería, inmobiliaria, médica, retail, condominios y más. Asesoría jurídica en seguros para 16 sectores productivos." },
      { property: "og:title", content: "Industrias que atendemos — Lawyers Seguros" },
      { property: "og:description", content: "Experiencia jurídica en seguros aplicada a los riesgos específicos de cada industria." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/industrias.mp4" poster="/videos/industrias.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Industrias" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Industrias</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            Conocemos los riesgos de tu industria.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Cada sector tiene exposiciones distintas y contratos de seguro con cláusulas críticas propias. Ponemos a tu disposición nuestra experticia en distintas áreas del derecho aplicada a los riesgos reales de tu actividad.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FadeUp className="max-w-2xl">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Sectores en los que participamos</h2>
            <p className="mt-3 text-muted-foreground">
              Desde grandes obras de construcción hasta comunidades y hogares: estructuramos coberturas a la medida de cada riesgo.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIAS.map((industria, i) => (
              <FadeUp
                key={industria}
                delay={i * 40}
                className="group relative isolate flex min-h-[140px] flex-col justify-end overflow-hidden rounded-xl border border-border bg-surface bg-cover bg-center p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                style={{ backgroundImage: `url(/images/industrias/${slugify(industria)}.jpg)` }}
              >
                {/* Gradiente de abajo hacia arriba: opaco abajo (texto), transparente arriba (imagen) */}
                {/* Velo muy ligero solo en la base para anclar el texto */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-all duration-300 group-hover:from-black/40 group-hover:via-black/5" />
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-sm transition-colors group-hover:bg-secondary group-hover:text-primary-foreground">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">{industria}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page rounded-2xl border border-border bg-background p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="accent-rule" />
              <h2 className="text-3xl font-semibold sm:text-4xl">¿Tu industria no está en la lista?</h2>
              <p className="mt-3 max-w-lg text-muted-foreground">
                Trabajamos con riesgos de las más diversas actividades. Cuéntanos sobre tu operación y diseñamos un plan de seguros a tu medida.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contacto" className="btn-primary">Conversemos tu caso</Link>
              <Link to="/productos" className="btn-ghost-dark">Ver catálogo de productos →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
