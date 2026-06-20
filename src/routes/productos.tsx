import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeUp } from "@/components/site/FadeUp";
import { HeroVideo } from "@/components/site/HeroVideo";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { PRODUCTOS } from "@/lib/content";
import { slugify } from "@/lib/utils";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Catálogo de seguros | Lawyers Seguros" },
      { name: "description", content: "Catálogo de seguros: protección de bienes, empresas, crédito, línea prime y más. Vida, salud, RC, incendio, vehículos, comunidades, garantías y rentas vitalicias." },
      { property: "og:title", content: "Productos — Catálogo de seguros | Lawyers Seguros" },
      { property: "og:description", content: "Intermediamos toda la gama de productos de seguros, revisados con criterio jurídico." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <HeroVideo src="/videos/productos.mp4" poster="/videos/productos.jpg" />
        <div className="container-page relative py-16 lg:py-20">
          <Breadcrumb items={[{ label: "Productos" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Productos</span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            Toda la gama de seguros, revisada con criterio jurídico.
          </h1>
          <p className="mt-5 max-w-2xl text-primary-foreground/80">
            Intermediamos productos para personas, bienes y empresas. Antes de recomendarte cualquiera, leemos el contrato como abogados.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page">
          <FadeUp className="max-w-2xl">
            <span className="accent-rule" />
            <h2 className="text-3xl font-semibold sm:text-4xl">Catálogo por categoría</h2>
            <p className="mt-3 text-muted-foreground">
              Explora nuestras líneas de productos. ¿No ves lo que buscas? Conversemos: trabajamos con coberturas a medida.
            </p>
          </FadeUp>

          <div className="mt-10">
            <Tabs defaultValue={PRODUCTOS[0].id}>
              <TabsList className="flex h-auto flex-wrap justify-start gap-1 bg-muted/60 p-1.5">
                {PRODUCTOS.map((cat) => (
                  <TabsTrigger key={cat.id} value={cat.id} className="text-sm">
                    {cat.titulo}
                  </TabsTrigger>
                ))}
              </TabsList>

              {PRODUCTOS.map((cat) => (
                <TabsContent key={cat.id} value={cat.id} className="mt-8">
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {cat.productos.map((producto) => (
                      <div
                        key={producto}
                        className="group relative isolate flex min-h-[140px] flex-col justify-end overflow-hidden rounded-xl border border-border bg-surface bg-cover bg-center p-4 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                        style={{ backgroundImage: `url(/images/productos/${slugify(producto)}.jpg)` }}
                      >
                        {/* Velo muy ligero solo en la base para anclar el texto */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/15 to-transparent transition-all duration-300 group-hover:from-black/45 group-hover:via-black/5" />
                        <div className="flex items-center gap-2">
                          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-primary shadow-sm transition-colors group-hover:bg-secondary group-hover:text-primary-foreground">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </span>
                          <span className="text-sm font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">{producto}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page rounded-2xl bg-primary p-10 text-primary-foreground md:p-14">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <span className="accent-rule" />
              <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">¿Qué producto necesita tu organización?</h2>
              <p className="mt-3 max-w-lg text-primary-foreground/80">
                Te ayudamos a elegir con criterio jurídico y a contratar la cobertura correcta. Recuerda: nuestra asesoría es sin costo cuando intermediamos tus pólizas.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contacto" className="btn-primary">Cotizar un seguro</Link>
              <Link to="/revision-poliza" className="btn-outline">Revisar mi póliza actual</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
