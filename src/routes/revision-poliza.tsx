import { createFileRoute } from "@tanstack/react-router";
import { FormCotizacion } from "@/components/site/FormCotizacion";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/revision-poliza")({
  head: () => ({
    meta: [
      { title: "Revisión de póliza — Lawyers Seguros" },
      { name: "description", content: "Análisis jurídico de tu póliza vigente antes de renovar. Exclusiones, deducibles, cláusulas de rechazo y requisitos de denuncia." },
      { property: "og:title", content: "Revisión de póliza — Lawyers Seguros" },
      { property: "og:description", content: "Antes de renovar, revisemos el contrato. Informe escrito y sin compromiso." },
    ],
  }),
  component: Page,
});

const incluye = [
  { t: "Exclusiones", d: "Identificamos qué situaciones quedan fuera de cobertura aunque la portada de la póliza diga otra cosa." },
  { t: "Deducibles", d: "Calculamos cuánto pagará efectivamente la aseguradora en escenarios reales." },
  { t: "Cláusulas de rechazo", d: "Detectamos requisitos formales que invalidan siniestros si no se cumplen al pie de la letra." },
  { t: "Requisitos de denuncia", d: "Plazos, documentos y procedimientos exigidos para que un siniestro sea cubierto." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/revision-poliza.mp4" poster="/videos/revision-poliza.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Seguros" }, { label: "Revisión de póliza" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Servicio jurídico</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            ¿Ya tienes un seguro? Lo revisamos antes de renovar.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Análisis jurídico documentado de tu póliza vigente. Sin costo y sin compromiso de cambio de aseguradora.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <FadeUp>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Cómo funciona el proceso</h2>
            <ol className="mt-6 space-y-5">
              {[
                { n: "01", t: "Compartes tu póliza actual", d: "Nos envías el contrato vigente y datos básicos del riesgo." },
                { n: "02", t: "Revisión jurídica", d: "Nuestro equipo analiza coberturas, exclusiones, deducibles y procedimientos formales." },
                { n: "03", t: "Informe escrito", d: "Recibes un documento con hallazgos críticos y recomendaciones concretas." },
                { n: "04", t: "Decisión informada", d: "Decides si renovar, modificar o cotizar alternativas. Sin presión." },
              ].map((s, i) => (
                <li key={s.n} className="flex gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="animate-stamp grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary font-display text-sm font-bold text-secondary-foreground" style={{ animationDelay: `${200 + i * 100}ms` }}>{s.n}</span>
                  <div>
                    <div className="font-semibold text-primary">{s.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <span className="accent-rule" />
              <h3 className="text-2xl font-semibold">Qué incluye la revisión</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {incluye.map((x, i) => (
                  <FadeUp key={x.t} delay={i * 80} className="rounded-xl border border-border bg-surface p-5">
                    <div className="font-semibold text-primary">{x.t}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{x.d}</p>
                  </FadeUp>
                ))}
              </div>
            </div>
          </FadeUp>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <FormCotizacion ramo="Revisión de póliza" />
          </div>
        </div>
      </section>
    </>
  );
}
