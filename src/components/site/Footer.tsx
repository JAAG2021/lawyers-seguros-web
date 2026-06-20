import { Link } from "@tanstack/react-router";
import { WHATSAPP_URL, EMAIL, LINKEDIN_URL, PHONE, PHONE_TEL, ADDRESS_FULL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-primary pb-16 text-primary-foreground md:pb-0">
      <div className="container-page grid gap-10 py-14 md:grid-cols-6">
        <div className="md:col-span-2">
          <div className="font-display text-xl font-semibold">Lawyers Seguros</div>
          <p className="mt-3 max-w-md text-sm text-primary-foreground/75">
            Broker de seguros con enfoque jurídico. Un equipo de abogados que acompaña a empresas, comunidades y personas en todo el ciclo de vida de sus pólizas.
          </p>
          <div className="mt-5 space-y-1 text-sm text-primary-foreground/75">
            <div>Inscripción CMF N° 9816 (corredor no previsional vigente)</div>
            <div>{ADDRESS_FULL}</div>
            <div>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-accent">Tel: {PHONE}</a>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-md border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Correo electrónico"
              className="grid h-9 w-9 place-items-center rounded-md border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-md border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-accent">Soluciones</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/servicios" className="hover:text-accent">Servicios</Link></li>
            <li><Link to="/industrias" className="hover:text-accent">Industrias</Link></li>
            <li><Link to="/productos" className="hover:text-accent">Productos</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-accent">Seguros</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/seguros/condominio" className="hover:text-accent">Seguro Condominio</Link></li>
            <li><Link to="/seguros/colegios" className="hover:text-accent">Seguro Colegios</Link></li>
            <li><Link to="/revision-poliza" className="hover:text-accent">Revisión de póliza</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-accent">Empresa</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/quienes-somos" className="hover:text-accent">Quiénes somos</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-accent">Preguntas frecuentes</Link></li>
            <li><Link to="/contacto" className="hover:text-accent">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-accent">Legal</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/terminos" className="hover:text-accent">Términos y Condiciones</Link></li>
            <li><Link to="/privacidad" className="hover:text-accent">Política de Privacidad</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <div>© {year} Lawyers Seguros. Todos los derechos reservados. · CMF N° 9816</div>
          <div>Sitio desarrollado por JAAGSOLUTIONS</div>
        </div>
      </div>
    </footer>
  );
}
