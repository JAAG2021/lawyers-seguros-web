import { createFileRoute } from "@tanstack/react-router";
import { FormCotizacion } from "@/components/site/FormCotizacion";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { WHATSAPP_URL, EMAIL, PHONE, PHONE_TEL, ADDRESS_LINE, ADDRESS_AREA, MAPS_URL } from "@/lib/constants";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Lawyers Seguros" },
      { name: "description", content: "Contacta a Lawyers Seguros: WhatsApp, teléfono, correo, formulario y oficina en Lo Barnechea, Santiago." },
      { property: "og:title", content: "Contacto — Lawyers Seguros" },
      { property: "og:description", content: "Conversemos sobre tu póliza. Respuesta en horario hábil." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Contacto" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contacto</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">Conversemos sobre tu seguro.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">Te respondemos en horario hábil. Si tu caso es urgente, escríbenos por WhatsApp.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold">Canales directos</h2>
            <div className="mt-6 space-y-4">
              <ContactCard
                label="WhatsApp"
                value="Escríbenos directamente"
                detail="Respuesta más rápida en horario hábil"
                href={WHATSAPP_URL}
                cta="Abrir WhatsApp"
              />
              <ContactCard
                label="Teléfono"
                value={PHONE}
                detail="Llámanos en horario hábil"
                href={`tel:${PHONE_TEL}`}
                cta="Llamar"
              />
              <ContactCard
                label="Correo electrónico"
                value={EMAIL}
                detail="Para consultas formales y envío de pólizas"
                href={`mailto:${EMAIL}`}
                cta="Enviar correo"
              />
              <ContactCard
                label="Oficina"
                value={ADDRESS_LINE}
                detail={`${ADDRESS_AREA} · Lunes a viernes, 9:00 a 18:00 hrs`}
                href={MAPS_URL}
                cta="Ver en mapa"
              />
            </div>

          </div>

          <FormCotizacion ramo="General" />
        </div>
      </section>
    </>
  );
}

function ContactCard({ label, value, detail, href, cta }: { label: string; value: string; detail: string; href: string; cta: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-start justify-between gap-6 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-secondary">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-secondary">{label}</div>
        <div className="mt-1.5 text-lg font-semibold text-primary">{value}</div>
        <div className="mt-1 text-sm text-muted-foreground">{detail}</div>
      </div>
      <span className="mt-1 shrink-0 text-sm font-semibold text-secondary opacity-0 transition-opacity group-hover:opacity-100">{cta} →</span>
    </a>
  );
}
