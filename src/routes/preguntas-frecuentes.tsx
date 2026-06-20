import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FadeUp } from "@/components/site/FadeUp";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes — Lawyers Seguros" },
      { name: "description", content: "Respuestas sobre seguros para condominios, colegios y revisión jurídica de pólizas." },
      { property: "og:title", content: "Preguntas frecuentes — Lawyers Seguros" },
      { property: "og:description", content: "Dudas frecuentes resueltas con criterio jurídico." },
    ],
  }),
  component: Page,
});

const general = [
  { q: "¿Por qué un corredor con criterio jurídico?", a: "Las pólizas son contratos. Leerlas legalmente reduce el riesgo de rechazos formales ante un siniestro y mejora la negociación con las aseguradoras." },
  { q: "¿Trabajan con todas las compañías?", a: "Sí. Como corredores independientes podemos intermediar con cualquier aseguradora del mercado chileno." },
  { q: "¿Cobran por la revisión de póliza?", a: "La primera revisión es sin costo. Si decides contratar a través nuestro, nuestra remuneración la paga la aseguradora vía comisión de corretaje." },
];

const condominio = [
  { q: "¿La póliza maestra cubre los departamentos?", a: "No. Cubre áreas comunes y responsabilidad del condominio. Cada propietario debe contratar su seguro de contenido." },
  { q: "¿Cubre filtraciones desde un departamento a otro?", a: "Depende de la cláusula de responsabilidad civil. Lo revisamos antes de recomendar la póliza." },
];

const colegios = [
  { q: "¿Cubre demandas por bullying?", a: "Algunas pólizas excluyen explícitamente actos disciplinarios. Revisamos esta cláusula caso por caso." },
  { q: "¿Cubre giras y salidas pedagógicas?", a: "Requiere extensión territorial y declaración previa de la actividad en muchas pólizas. Lo verificamos antes de cotizar." },
];

function Page() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-14">
          <Breadcrumb items={[{ label: "Preguntas frecuentes" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Preguntas frecuentes</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">Respuestas claras antes de firmar.</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page max-w-3xl space-y-12">
          <Group title="General" items={general} />
          <Group title="Condominio" items={condominio} />
          <Group title="Colegios" items={colegios} />

          <div className="rounded-2xl border border-border bg-surface p-8 text-center">
            <h3 className="text-2xl font-semibold">¿No encuentras tu pregunta?</h3>
            <p className="mt-2 text-muted-foreground">Escríbenos y la respondemos directamente.</p>
            <Link to="/contacto" className="btn-primary mt-5 inline-flex">Contactar a un asesor</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Group({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <FadeUp>
      <span className="accent-rule" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5"><FaqAccordion items={items} /></div>
    </FadeUp>
  );
}
