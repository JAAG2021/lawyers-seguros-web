import { createFileRoute, Link } from "@tanstack/react-router";
import { TrustBar } from "@/components/site/TrustBar";
import { CardRamo } from "@/components/site/CardRamo";
import { FadeUp } from "@/components/site/FadeUp";
import { BASE_URL, OG_IMAGE, EMAIL, WHATSAPP_URL, PHONE_TEL, ADDRESS_LINE } from "@/lib/constants";
import { SERVICIOS, INDUSTRIAS } from "@/lib/content";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "InsuranceAgency"],
  name: "Lawyers Seguros",
  description: "Corredora de seguros con criterio jurídico. Asesoría independiente para condominios y colegios.",
  url: BASE_URL,
  email: EMAIL,
  telephone: PHONE_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_LINE,
    addressLocality: "Lo Barnechea",
    addressRegion: "Región Metropolitana",
    addressCountry: "CL",
  },
  sameAs: [WHATSAPP_URL],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lawyers Seguros — Corredores con criterio jurídico" },
      { name: "description", content: "Asesoría en seguros para condominios y colegios con respaldo jurídico. Corredora independiente, sin exclusividad con aseguradoras." },
      { property: "og:title", content: "Lawyers Seguros — Corredores con criterio jurídico" },
      { property: "og:description", content: "Seguros revisados antes de contratar. Independencia comercial, criterio legal y experiencia en condominios y colegios." },
      { property: "og:image", content: OG_IMAGE },
    ],
  }),
  component: Home,
});

const pasos = [
  { n: "01", t: "Nos contactas", d: "Por WhatsApp, formulario o correo. Cuéntanos brevemente sobre tu edificio o institución." },
  { n: "02", t: "Revisamos tu situación", d: "Analizamos el riesgo real, la póliza vigente si tienes una, y las condiciones del mercado." },
  { n: "03", t: "Recibes un informe", d: "Propuesta con coberturas revisadas, exclusiones identificadas y recomendación documentada. Sin presión." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster="/videos/hero.jpg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          {/* Fallback si el video no carga */}
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&fit=crop"
            alt=""
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="container-page relative grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:py-28">
          <div>
            <span
              className="animate-hero inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-3 py-1 text-xs font-medium text-primary-foreground/85"
              style={{ animationDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Inscripción CMF 9816 vigente
            </span>
            <h1
              className="animate-hero mt-6 font-display text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Seguros revisados con<br /><span className="text-accent">criterio jurídico</span>, antes de contratar.
            </h1>
            <p
              className="animate-hero mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
              style={{ animationDelay: "260ms" }}
            >
              Broker de seguros con enfoque jurídico: un equipo de abogados que acompaña a empresas, comunidades y personas en todo el ciclo de vida de sus pólizas, desde la contratación hasta el siniestro y los juicios de seguros.
            </p>
            <div
              className="animate-hero mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "380ms" }}
            >
              <Link to="/revision-poliza" viewTransition className="btn-primary">Solicitar revisión de póliza</Link>
              <Link to="/contacto" viewTransition className="btn-outline">Cotizar seguro</Link>
            </div>
          </div>
          <div
            className="group animate-hero relative hidden lg:block"
            style={{ animationDelay: "500ms" }}
          >
            {/* Halo de brillo con latido suave */}
            <div className="absolute -inset-8 animate-pulse rounded-3xl bg-gradient-to-br from-accent/40 to-secondary/40 blur-3xl" />
            {/* Tarjeta de cristal con tinte oscuro para contraste legible sobre el video */}
            <div className="relative rounded-2xl border border-primary-foreground/20 bg-gradient-to-br from-primary/85 to-primary/65 p-8 shadow-2xl shadow-primary/50 ring-1 ring-white/10 backdrop-blur-md transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <div className="text-sm font-semibold uppercase tracking-wider text-accent">Lo que revisamos</div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-primary-foreground/25 to-transparent" />
              <ul className="mt-5 space-y-4 text-[15px] leading-snug text-primary-foreground">
                {["Exclusiones que invalidan la cobertura","Deducibles aplicables por siniestro","Cláusulas de rechazo poco visibles","Requisitos de denuncia y plazos","Responsabilidad civil del directorio"].map((x, i) => (
                  <li
                    key={x}
                    className="flex items-start gap-3 opacity-0"
                    style={{ animation: `stagger-in 0.45s ease-out ${620 + i * 80}ms both` }}
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-xs font-bold text-primary shadow-sm">✓</span>
                    <span className="font-medium">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <section className="py-20">
        <div className="container-page">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">El Círculo Virtuoso del Seguro</h2>
            <p className="mt-3 text-muted-foreground">Cinco servicios conectados que cubren el ciclo de vida completo de tus pólizas: del mapa de riesgos al juicio de seguros.</p>
          </FadeUp>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s, i) => (
              <FadeUp key={s.id} delay={i * 90} className="rounded-xl border border-border bg-surface p-6">
                <span className="font-display text-3xl font-bold text-accent/25">{s.numero}</span>
                <h3 className="mt-2 text-lg font-semibold text-primary">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.resumen}</p>
              </FadeUp>
            ))}
            <FadeUp delay={SERVICIOS.length * 90} className="flex flex-col justify-center rounded-xl border border-dashed border-secondary/40 bg-surface p-6">
              <h3 className="text-lg font-semibold text-primary">Conoce nuestra metodología</h3>
              <p className="mt-2 text-sm text-muted-foreground">Cada servicio tiene un proceso definido con trazabilidad jurídica.</p>
              <Link to="/servicios" viewTransition className="btn-ghost-dark mt-4 inline-flex w-fit">Ver servicios →</Link>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Dos verticales que conocemos a fondo</h2>
            <p className="mt-3 text-muted-foreground">Atendemos 16 industrias, con especialización destacada en sectores donde un error en la póliza puede costarle a la organización completa.</p>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <CardRamo
              eyebrow="Edificios y condominios"
              title="Seguro Condominio"
              description="Revisamos la póliza maestra para que cubra realmente áreas comunes, responsabilidad civil y exposiciones del directorio."
              bullets={["Incendio y daños en áreas comunes","Responsabilidad civil copropietarios","Daños a terceros","Robo en espacios comunes"]}
              to="/seguros/condominio"
              cta="Ver detalle"
            />
            <CardRamo
              eyebrow="Educación"
              title="Seguro Colegios"
              description="Cobertura institucional revisada para directores y sostenedores: responsabilidad civil, accidentes escolares e infraestructura."
              bullets={["Responsabilidad civil institucional","Accidentes escolares","Infraestructura y equipamiento","Eventos extracurriculares"]}
              to="/seguros/colegios"
              cta="Ver detalle"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <FadeUp className="mx-auto max-w-2xl text-center">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Industrias que atendemos</h2>
            <p className="mt-3 text-muted-foreground">Experiencia jurídica en seguros aplicada a los riesgos específicos de cada sector.</p>
          </FadeUp>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
            {INDUSTRIAS.map((industria, i) => (
              <FadeUp
                key={industria}
                delay={i * 35}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
              >
                {industria}
              </FadeUp>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/industrias" viewTransition className="btn-ghost-dark inline-flex">Ver todas las industrias →</Link>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Cómo funciona nuestra asesoría</h2>
            <p className="mt-3 text-muted-foreground">Sin presión, sin compromiso de cambio. Solo claridad antes de decidir.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pasos.map((p, i) => (
              <FadeUp key={p.n} delay={i * 120} className="relative rounded-xl border border-border bg-surface p-7">
                <span
                  className="animate-stamp font-display text-5xl font-bold text-accent/20"
                  style={{ animationDelay: `${200 + i * 120}ms` }}
                >
                  {p.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-primary">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Por qué asesorarse con criterio jurídico</h2>
            <p className="mt-4 text-muted-foreground">La diferencia entre una póliza y una cobertura efectiva está en el contrato. Lo leemos como abogados antes de recomendarte algo.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { t: "Coberturas reales", d: "Verificamos que las cláusulas correspondan al riesgo declarado, no a lo genérico del mercado." },
              { t: "Exclusiones visibles", d: "Identificamos qué situaciones quedan fuera antes de firmar, no después de un siniestro." },
              { t: "Deducibles claros", d: "Te explicamos cuánto pagará efectivamente la aseguradora en cada escenario." },
              { t: "Gestión de siniestros", d: "Acompañamos el proceso de denuncia con criterio legal para evitar rechazos formales." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-border bg-background p-5">
                <div className="text-base font-semibold text-primary">{x.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <FadeUp className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-background p-8 text-center md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary">
              Modelo comercial
            </span>
            <h2 className="text-2xl font-semibold sm:text-3xl">Nuestra asesoría es sin costo para ti</h2>
            <p className="max-w-xl text-muted-foreground">
              No cobramos por estudiar tu situación, diseñar tu plan ni acompañarte en siniestros: nuestros servicios son sin costo siempre que hagamos la intermediación de tus pólizas (salvo impugnaciones y juicios de seguros).
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page rounded-2xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="accent-rule" />
              <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">Conversemos sobre tu póliza</h2>
              <p className="mt-3 max-w-lg text-primary-foreground/80">Si ya tienes seguro vigente, hagamos una revisión jurídica antes de renovar. Si estás cotizando, te ayudamos a elegir con criterio.</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/revision-poliza" className="btn-primary">Solicitar revisión de póliza</Link>
              <Link to="/contacto" className="btn-outline">Hablar con un asesor</Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
