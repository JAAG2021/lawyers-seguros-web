import { createFileRoute, Link } from "@tanstack/react-router";
import { FormCotizacion } from "@/components/site/FormCotizacion";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/seguros/colegios")({
  head: () => ({
    meta: [
      { title: "Seguro Colegios — Lawyers Seguros" },
      { name: "description", content: "Seguros para colegios revisados jurídicamente: responsabilidad civil institucional, accidentes escolares, infraestructura y actividades extracurriculares." },
      { property: "og:title", content: "Seguro Colegios — Lawyers Seguros" },
      { property: "og:description", content: "Asesoría especializada para directores y sostenedores. Evaluamos el riesgo institucional antes de contratar." },
    ],
  }),
  component: Page,
});

const coberturas = [
  { t: "Responsabilidad civil institucional", d: "Cobertura ante demandas por hechos ocurridos en la operación del establecimiento." },
  { t: "Accidentes escolares", d: "Cobertura para alumnos y docentes durante actividades académicas y recreativas." },
  { t: "Infraestructura y equipamiento", d: "Edificios, salas, laboratorios, gimnasios y equipamiento tecnológico." },
  { t: "Eventos y actividades extracurriculares", d: "Salidas pedagógicas, talleres y eventos institucionales fuera del recinto." },
];

const faqs = [
  { q: "¿La responsabilidad civil institucional cubre demandas de apoderados?", a: "Depende de la redacción del contrato. Revisamos exclusiones específicas relacionadas con responsabilidad pedagógica, bullying y eventos disciplinarios." },
  { q: "¿Los accidentes escolares ya están cubiertos por la cobertura estatal?", a: "El seguro escolar estatal cubre ciertos eventos básicos. Las pólizas complementarias amplían rangos de cobertura y prestaciones, y son revisables." },
  { q: "¿Pueden evaluar la póliza actual de nuestro colegio?", a: "Sí. Realizamos una revisión jurídica documentada antes de cualquier propuesta de cambio o renovación." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/colegios.mp4" poster="/videos/colegios.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Seguros" }, { label: "Colegios" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Ramo B2B · Educación</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            La responsabilidad civil de una institución educacional exige una revisión jurídica antes de contratar.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Asesoramos a directores y sostenedores con criterio legal, no comercial. Evaluamos el riesgo institucional completo.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/revision-poliza" className="btn-primary">Evaluar riesgo institucional</Link>
            <a href="#cotizar" className="btn-outline">Cotizar seguro para colegios</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <FadeUp>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Coberturas principales</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Adaptamos la cobertura al tamaño, modalidad y nivel educacional del establecimiento.</p>
          </FadeUp>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {coberturas.map((c, i) => (
              <FadeUp key={c.t} delay={i * 100} className="rounded-xl border border-border bg-surface p-6">
                <div className="text-lg font-semibold text-primary">{c.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Qué revisamos antes de recomendar</h2>
            <p className="mt-3 text-muted-foreground">Adaptado al riesgo educacional real, no a coberturas genéricas:</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Cláusulas de responsabilidad pedagógica y disciplinaria","Cobertura durante salidas pedagógicas y giras","Exclusiones relativas a actividades deportivas","Deducibles por evento y por institución","Responsabilidad civil del directorio y sostenedores"].map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-background p-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Diferencial legal</div>
            <h3 className="mt-2 text-2xl font-semibold">Por qué un abogado hace diferencia en seguros educacionales</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              La responsabilidad civil educacional combina normativa específica del Ministerio de Educación con criterios jurisprudenciales. Una póliza estándar rara vez contempla esta complejidad. Nuestra revisión integra ambas dimensiones.
            </p>
            <Link to="/quienes-somos" className="btn-ghost-dark mt-5 inline-flex">Conoce al equipo →</Link>
          </div>
        </div>
      </section>

      <section id="cotizar" className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Cotiza el seguro de tu colegio</h2>
            <p className="mt-3 text-muted-foreground">Comparte datos básicos del establecimiento. Te enviamos una propuesta jurídicamente revisada.</p>
            <div className="mt-6 rounded-xl border border-border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">¿Prefieres conversarlo?</div>
              <p className="mt-2 text-sm text-muted-foreground">Coordinamos una reunión con el sostenedor o equipo directivo.</p>
              <Link to="/contacto" className="btn-ghost-dark mt-4 inline-flex">Ir a contacto →</Link>
            </div>
          </div>
          <FormCotizacion ramo="Colegios" />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <span className="accent-rule" />
          <h2 className="text-3xl font-semibold">Preguntas frecuentes — Colegios</h2>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
