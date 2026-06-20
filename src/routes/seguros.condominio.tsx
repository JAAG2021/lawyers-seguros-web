import { createFileRoute, Link } from "@tanstack/react-router";
import { FormCotizacion } from "@/components/site/FormCotizacion";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/seguros/condominio")({
  head: () => ({
    meta: [
      { title: "Seguro Condominio — Lawyers Seguros" },
      { name: "description", content: "Asesoría jurídica en seguro para condominios: incendio, responsabilidad civil copropietarios, daños a terceros y robo en áreas comunes." },
      { property: "og:title", content: "Seguro Condominio — Lawyers Seguros" },
      { property: "og:description", content: "Revisamos exclusiones, deducibles y cláusulas críticas antes de recomendar la póliza de tu edificio." },
    ],
  }),
  component: Page,
});

const coberturas = [
  { t: "Incendio y daños en áreas comunes", d: "Estructura, pasillos, hall, salas comunes y equipamiento del edificio." },
  { t: "Responsabilidad civil copropietarios", d: "Cobertura ante daños a terceros derivados de la operación del condominio." },
  { t: "Daños a terceros", d: "Eventos originados en el edificio que afecten a vecinos, transeúntes o vehículos." },
  { t: "Robo en espacios comunes", d: "Sustracción de bienes muebles y equipamiento de áreas comunes." },
];

const faqs = [
  { q: "¿La póliza maestra del edificio cubre el departamento?", a: "No. La póliza maestra cubre áreas comunes y responsabilidad del condominio. Cada copropietario debe contratar su seguro individual de contenido." },
  { q: "¿Qué pasa si la administración cambia de aseguradora?", a: "Revisamos la continuidad de cobertura y los plazos para evitar zonas grises entre pólizas, especialmente para siniestros en curso." },
  { q: "¿Pueden revisar la póliza vigente antes de renovar?", a: "Sí, ese es nuestro servicio principal. Entregamos un informe escrito con exclusiones, deducibles y recomendaciones concretas." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/condominio.mp4" poster="/videos/condominio.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Seguros" }, { label: "Condominio" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Ramo B2B · Condominios</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            Su edificio tiene riesgos que la póliza estándar no siempre cubre.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Lo revisamos antes de recomendar. Asesoría especializada para administradores y comités de copropietarios.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/revision-poliza" className="btn-primary">Solicitar revisión de póliza</Link>
            <a href="#cotizar" className="btn-outline">Cotizar seguro de condominio</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <FadeUp>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Coberturas principales</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">Estructuramos cada propuesta según el perfil real del edificio: antigüedad, uso, número de unidades y siniestralidad histórica.</p>
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
            <p className="mt-3 text-muted-foreground">Una propuesta sin revisar el contrato es publicidad. Esto es lo que leemos línea por línea:</p>
            <ul className="mt-6 space-y-3 text-sm">
              {["Exclusiones específicas para edificios antiguos o con uso mixto","Deducibles por siniestro y por evento","Cláusulas de subrogación y franquicias deducibles","Requisitos formales de denuncia y plazos","Coberturas opcionales pertinentes al riesgo real"].map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-background p-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Diferencial legal</div>
            <h3 className="mt-2 text-2xl font-semibold">Por qué un abogado hace diferencia en seguros de condominio</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Las pólizas son contratos de adhesión con lenguaje técnico-legal. Una cláusula mal interpretada por la administración puede convertir un siniestro cubierto en un rechazo formal. Leemos el contrato como abogados, no como vendedores.
            </p>
            <Link to="/quienes-somos" className="btn-ghost-dark mt-5 inline-flex">Conoce al equipo →</Link>
          </div>
        </div>
      </section>

      <section id="cotizar" className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Cotiza tu seguro de condominio</h2>
            <p className="mt-3 text-muted-foreground">Cuéntanos brevemente sobre el edificio. Te enviamos una propuesta revisada en horario hábil.</p>
            <div className="mt-6 rounded-xl border border-border bg-surface p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-secondary">¿Prefieres hablar directamente?</div>
              <p className="mt-2 text-sm text-muted-foreground">Escríbenos por WhatsApp o coordina una reunión.</p>
              <Link to="/contacto" className="btn-ghost-dark mt-4 inline-flex">Ir a contacto →</Link>
            </div>
          </div>
          <FormCotizacion ramo="Condominio" />
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <span className="accent-rule" />
          <h2 className="text-3xl font-semibold">Preguntas frecuentes — Condominio</h2>
          <div className="mt-8 max-w-3xl">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
