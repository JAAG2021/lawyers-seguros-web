import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Lawyers Seguros" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales de Lawyers Seguros, conforme a la Ley N° 19.628 y Ley N° 21.719 de Chile." },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: Page,
});

const ULTIMA_ACTUALIZACION = "20 de junio de 2026";

function Page() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-14 lg:py-18">
          <Breadcrumb items={[{ label: "Legal" }, { label: "Política de Privacidad" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Legal</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-4xl">
          <div className="prose prose-slate max-w-none text-foreground">

            <Aviso texto="Lawyers Seguros respeta y protege la privacidad de las personas. Esta Política describe cómo recopilamos, usamos y protegemos sus datos personales, conforme a la Ley N° 19.628 sobre Protección de la Vida Privada y la Ley N° 21.719 sobre Protección de Datos Personales de Chile." />

            <Seccion numero="1" titulo="Responsable del Tratamiento">
              <p>
                El responsable del tratamiento de datos personales es <strong>Lawyers Seguros</strong>, corredor de seguros inscrito en la CMF bajo el N° 9816, con domicilio en Av. La Dehesa 222, Oficina 709, Lo Barnechea, Santiago, Chile.
              </p>
              <p>
                <strong>Contacto del responsable:</strong><br />
                Correo electrónico: contacto@lawyers-seguros.cl<br />
                Teléfono: +56 9 8289 2804
              </p>
            </Seccion>

            <Seccion numero="2" titulo="Datos personales que recopilamos">
              <p>Recopilamos los siguientes datos personales, según la forma de interacción con nuestros servicios:</p>
              <TablaSimple
                headers={["Categoría", "Datos específicos", "Fuente"]}
                filas={[
                  ["Datos de contacto", "Nombre, apellido, teléfono, correo electrónico", "Formulario web, WhatsApp, teléfono"],
                  ["Datos de identificación", "RUT (cuando sea necesario para cotización o contratación)", "Proporcionados por el cliente"],
                  ["Datos del bien asegurado", "Tipo de inmueble, vehículo, actividad económica, número de empleados", "Proporcionados por el cliente"],
                  ["Datos de pólizas", "Número de póliza, compañía aseguradora, coberturas vigentes", "Proporcionados por el cliente o aseguradoras"],
                  ["Datos de navegación", "Dirección IP, tipo de navegador, páginas visitadas, duración de la visita", "Automática (cookies técnicas y analíticas)"],
                ]}
              />
              <p>No recopilamos datos sensibles en los términos del artículo 2 letra g) de la Ley N° 19.628, tales como datos de salud, origen racial, creencias religiosas o filiación política, salvo que sean estrictamente necesarios para un ramo de seguro específico y con consentimiento expreso.</p>
            </Seccion>

            <Seccion numero="3" titulo="Finalidad del tratamiento">
              <p>Sus datos personales son tratados para las siguientes finalidades:</p>
              <ul>
                <li><strong>Cotización y contratación de seguros:</strong> Preparar propuestas, comparativas y gestionar la contratación de pólizas con compañías aseguradoras registradas en la CMF.</li>
                <li><strong>Gestión de la relación comercial:</strong> Administrar la cartera de pólizas, gestionar renovaciones, vencimientos y modificaciones.</li>
                <li><strong>Asistencia jurídica y en siniestros:</strong> Tramitar siniestros y, cuando corresponda, representar al cliente ante aseguradoras o tribunales.</li>
                <li><strong>Cumplimiento de obligaciones regulatorias:</strong> Cumplir con exigencias de la CMF, el SII y otras autoridades competentes (arts. 57 y 58, DFL N° 251).</li>
                <li><strong>Comunicaciones comerciales:</strong> Enviar información sobre servicios de Lawyers Seguros relacionados con los contratados, cuando el titular haya dado su consentimiento.</li>
                <li><strong>Mejora del sitio web:</strong> Analizar el uso del sitio mediante datos agregados y anónimos.</li>
              </ul>
            </Seccion>

            <Seccion numero="4" titulo="Base legal del tratamiento">
              <p>El tratamiento de sus datos personales se fundamenta en las siguientes bases legales, conforme a la Ley N° 19.628 y, de manera anticipada, a los principios de la Ley N° 21.719:</p>
              <ul>
                <li><strong>Consentimiento del titular</strong> (art. 4 Ley N° 19.628): para el envío de comunicaciones comerciales y el uso de cookies analíticas.</li>
                <li><strong>Ejecución de la relación contractual:</strong> para gestionar cotizaciones, contratos de intermediación y siniestros.</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> para satisfacer exigencias de la CMF, el SII y la normativa sectorial de seguros.</li>
                <li><strong>Interés legítimo:</strong> para la mejora de los servicios y la seguridad del sitio web, siempre que no prevalezca sobre los derechos del titular.</li>
              </ul>
            </Seccion>

            <Seccion numero="5" titulo="Transferencia de datos a terceros">
              <p>Lawyers Seguros puede comunicar sus datos personales a los siguientes destinatarios:</p>
              <ul>
                <li><strong>Compañías de seguros inscritas en la CMF:</strong> para elaborar cotizaciones, contratar pólizas y gestionar siniestros. Estas compañías actúan como responsables autónomos del tratamiento para sus propias finalidades.</li>
                <li><strong>Reaseguradoras:</strong> cuando la naturaleza del riesgo lo requiera, conforme a la práctica del mercado asegurador.</li>
                <li><strong>Autoridades regulatorias y judiciales:</strong> CMF, SII, tribunales de justicia u otras autoridades, cuando sea exigido por ley o por resolución judicial.</li>
                <li><strong>Prestadores de servicios tecnológicos:</strong> proveedores de correo, almacenamiento en la nube y formularios web, bajo acuerdos de confidencialidad y únicamente para cumplir las finalidades descritas.</li>
              </ul>
              <p>Lawyers Seguros <strong>no vende, arrienda ni cede</strong> datos personales a terceros con fines comerciales ajenos a los descritos en esta política.</p>
            </Seccion>

            <Seccion numero="6" titulo="Derechos del titular — ARCO y nuevos derechos (Ley 21.719)">
              <p>Como titular de datos personales, usted tiene los siguientes derechos:</p>
              <ul>
                <li><strong>Acceso:</strong> Conocer qué datos personales suyos trata Lawyers Seguros, con qué finalidad y a quién se han comunicado.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Cancelación / Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios para la finalidad para la que fueron recogidos, o cuando retire su consentimiento.</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos, en particular para fines de comunicaciones comerciales.</li>
                <li><strong>Portabilidad</strong> (Ley N° 21.719, cuando entre en vigencia plena): Recibir sus datos en formato estructurado y de uso común.</li>
                <li><strong>Bloqueo temporal:</strong> Solicitar la suspensión del tratamiento mientras se resuelve una impugnación sobre la exactitud de los datos.</li>
              </ul>
              <p>Estos derechos se ejercen de forma gratuita, salvo en casos de solicitudes manifiestamente infundadas o excesivas.</p>
            </Seccion>

            <Seccion numero="7" titulo="Cómo ejercer sus derechos">
              <p>Para ejercer sus derechos, envíe una solicitud escrita a:</p>
              <ul>
                <li><strong>Correo electrónico:</strong> contacto@lawyers-seguros.cl</li>
                <li><strong>Dirección postal:</strong> Av. La Dehesa 222, Oficina 709, Lo Barnechea, Santiago</li>
              </ul>
              <p>La solicitud debe incluir: nombre completo, RUT, correo de contacto, derecho que desea ejercer y, en su caso, documentación que lo respalde. Lawyers Seguros responderá dentro del plazo de <strong>30 días hábiles</strong> contados desde la recepción de la solicitud, conforme a la Ley N° 19.628 y los plazos que establezca la Ley N° 21.719 una vez en plena vigencia.</p>
              <p>En caso de no obtener respuesta satisfactoria, usted puede recurrir al <strong>Consejo para la Transparencia</strong> (competente en materias de la Ley N° 19.628) o a la autoridad de protección de datos que establezca la Ley N° 21.719 una vez constituida.</p>
            </Seccion>

            <Seccion numero="8" titulo="Cookies y tecnologías de seguimiento">
              <TablaSimple
                headers={["Tipo", "Finalidad", "¿Requiere consentimiento?"]}
                filas={[
                  ["Técnicas / esenciales", "Funcionamiento básico del sitio, seguridad, formularios", "No"],
                  ["Analíticas", "Estadísticas de uso agregadas y anónimas (p. ej., Google Analytics)", "Sí"],
                  ["Preferencias", "Recordar opciones del usuario (idioma, sesión)", "Sí"],
                ]}
              />
              <p>
                Puede gestionar o desactivar las cookies desde la configuración de su navegador. La desactivación de cookies técnicas puede afectar el funcionamiento del sitio. Para saber cómo gestionar cookies en los navegadores más comunes, consulte la ayuda de Chrome, Firefox, Safari o Edge.
              </p>
            </Seccion>

            <Seccion numero="9" titulo="Seguridad de los datos">
              <p>
                Lawyers Seguros aplica medidas técnicas y organizativas adecuadas para proteger sus datos personales contra acceso no autorizado, pérdida, alteración o divulgación, conforme al estándar de la industria y las exigencias de la CMF para intermediarios de seguros. Entre estas medidas se incluyen: cifrado en tránsito (HTTPS/TLS), control de acceso basado en roles, y acuerdos de confidencialidad con proveedores tecnológicos.
              </p>
              <p>
                En caso de producirse una vulneración de seguridad que afecte sus datos, Lawyers Seguros notificará a los afectados y a las autoridades competentes conforme a los plazos y procedimientos que establece la Ley N° 21.719.
              </p>
            </Seccion>

            <Seccion numero="10" titulo="Retención de datos">
              <p>Los datos personales se conservan durante los siguientes plazos:</p>
              <ul>
                <li><strong>Datos de clientes con pólizas vigentes:</strong> durante toda la vigencia de la relación comercial.</li>
                <li><strong>Datos de clientes con pólizas terminadas:</strong> 5 años adicionales a la expiración de la póliza, conforme a las obligaciones de registro de la CMF (NCG N° 454) y los plazos de prescripción del Código Civil.</li>
                <li><strong>Datos de solicitudes de cotización sin contratación:</strong> hasta 2 años desde la última interacción.</li>
                <li><strong>Datos de navegación y cookies analíticas:</strong> hasta 26 meses.</li>
              </ul>
              <p>Transcurridos estos plazos, los datos serán eliminados o anonimizados de forma definitiva.</p>
            </Seccion>

            <Seccion numero="11" titulo="Menores de edad">
              <p>
                Los servicios de Lawyers Seguros están dirigidos a personas naturales mayores de 18 años o a personas jurídicas. No recopilamos intencionalmente datos personales de menores de 14 años. Si tomamos conocimiento de que hemos recopilado datos de un menor sin el consentimiento de sus padres o tutor legal, eliminaremos dichos datos de forma inmediata.
              </p>
            </Seccion>

            <Seccion numero="12" titulo="Transferencias internacionales de datos">
              <p>
                En caso de utilizar proveedores tecnológicos ubicados fuera de Chile (p. ej., servicios de correo o analítica en la nube), dichas transferencias se realizarán adoptando las garantías adecuadas conforme a la legislación chilena vigente y a los estándares internacionales de protección de datos (incluyendo, en lo aplicable, los mecanismos de la Ley N° 21.719 una vez en plena vigencia).
              </p>
            </Seccion>

            <Seccion numero="13" titulo="Modificaciones a esta Política">
              <p>
                Lawyers Seguros puede actualizar esta Política de Privacidad para reflejar cambios normativos, regulatorios o en sus prácticas de tratamiento de datos. Las modificaciones se publicarán en esta misma página con la fecha de actualización. Si los cambios son sustanciales, notificaremos a los titulares cuyos datos tratamos a través de correo electrónico u otro medio adecuado.
              </p>
            </Seccion>

            <Seccion numero="14" titulo="Marco normativo de referencia">
              <ul>
                <li><strong>Ley N° 19.628</strong> sobre Protección de la Vida Privada (vigente)</li>
                <li><strong>Ley N° 21.719</strong> sobre Protección de Datos Personales (aprobada 2024, vigencia progresiva a partir de 2026)</li>
                <li><strong>DFL N° 251</strong> sobre Compañías de Seguros, Sociedades Anónimas y Bolsas de Comercio</li>
                <li><strong>Ley N° 20.667</strong> que regula el Contrato de Seguro</li>
                <li><strong>NCG N° 454 CMF</strong> — Normas sobre Corredores de Seguros</li>
                <li><strong>NCG N° 200 CMF</strong> — Información mínima al asegurado</li>
                <li><strong>Ley N° 19.496</strong> — Protección de los Derechos de los Consumidores</li>
                <li><strong>Código Civil</strong> — arts. 1545 y ss.</li>
                <li><strong>Código de Comercio</strong> — arts. 512 y ss.</li>
              </ul>
            </Seccion>

          </div>
        </div>
      </section>
    </>
  );
}

function Aviso({ texto }: { texto: string }) {
  return (
    <div className="mb-10 rounded-xl border border-accent/30 bg-accent/5 px-6 py-4">
      <p className="text-sm font-medium text-foreground">{texto}</p>
    </div>
  );
}

function Seccion({ numero, titulo, children }: { numero: string; titulo: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="mb-4 flex items-center gap-3 text-xl font-semibold text-primary">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent/15 font-display text-sm font-bold text-accent">
          {numero}
        </span>
        {titulo}
      </h2>
      <div className="space-y-3 pl-11 text-sm leading-relaxed [&_a]:text-secondary [&_a:hover]:text-accent [&_li]:mb-1.5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

function TablaSimple({ headers, filas }: { headers: string[]; filas: string[][] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-surface">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-secondary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {filas.map((fila, i) => (
            <tr key={i} className="bg-background">
              {fila.map((celda, j) => (
                <td key={j} className="px-4 py-3 text-foreground/80">
                  {celda}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
