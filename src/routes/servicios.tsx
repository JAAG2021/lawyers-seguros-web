import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { SERVICIOS, DIFERENCIADORES } from "@/lib/content";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — El Círculo Virtuoso del Seguro | Lawyers Seguros" },
      { name: "description", content: "Due diligence, planificación estratégica, gerenciamiento de pólizas, asistencia jurídica en siniestros y juicios de seguros. Acompañamos al cliente en todo el ciclo de vida de sus pólizas." },
      { property: "og:title", content: "Servicios — El Círculo Virtuoso del Seguro | Lawyers Seguros" },
      { property: "og:description", content: "Un broker jurídico que acompaña al cliente en todas las etapas: del mapa de riesgos al juicio de seguros." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/servicios.mp4" poster="/videos/servicios.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Servicios" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Qué hacemos</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            El Círculo Virtuoso del Seguro.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Acompañamos a nuestros clientes en todas las etapas, desde el levantamiento del mapa de riesgos hasta los juicios de seguros. Cinco servicios conectados que cubren el ciclo de vida completo de cada póliza.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/revision-poliza" className="btn-primary">Solicitar revisión de póliza</Link>
            <Link to="/contacto" className="btn-outline">Hablar con un asesor</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FadeUp className="max-w-2xl">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Nuestros servicios y sus procesos</h2>
            <p className="mt-3 text-muted-foreground">
              Cada servicio tiene un proceso definido. Así garantizamos trazabilidad jurídica en cada decisión sobre tus seguros.
            </p>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <FadeUp
                key={s.id}
                delay={i * 100}
                className="group flex flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-accent/40 hover:bg-white hover:shadow-[0_24px_56px_-12px_color-mix(in_oklab,var(--color-accent)_18%,transparent)]"
              >
                <span className="font-display text-4xl font-bold text-accent/50 transition-colors duration-300 group-hover:text-accent">{s.numero}</span>
                <h3 className="mt-3 text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-secondary">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.resumen}</p>
                <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                  {s.procesos.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent transition-all duration-300 group-hover:scale-150 group-hover:bg-secondary" />
                      <span className="transition-colors duration-300 group-hover:text-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">¿Por qué nosotros?</h2>
            <p className="mt-4 text-muted-foreground">
              Somos un broker de seguros con enfoque jurídico e innovador: un equipo conformado principalmente por abogados, orientado a blindar a sus clientes desde el prisma jurídico.
            </p>
            <div className="mt-6 rounded-xl border border-accent/30 bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Modelo comercial</div>
              <p className="mt-2 text-sm font-medium text-foreground">
                Nuestros servicios son sin costo para el cliente, siempre que hagamos la intermediación de sus pólizas.
              </p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {DIFERENCIADORES.map((d, i) => (
              <FadeUp key={i} delay={i * 60} as="li" className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] font-bold text-primary">✓</span>
                <span className="text-muted-foreground">{d}</span>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page rounded-2xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="accent-rule" />
              <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">Estamos en todo el ciclo de vida de tus pólizas</h2>
              <p className="mt-3 max-w-lg text-primary-foreground/80">
                Desde la contratación hasta el siniestro y los eventuales juicios. Conversemos sobre cómo proteger tu organización con criterio jurídico.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contacto" className="btn-primary">Agendar diagnóstico</Link>
              <Link to="/industrias" className="btn-outline">Ver industrias que atendemos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
