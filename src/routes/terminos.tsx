import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumb } from "@/components/site/Breadcrumb";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — Lawyers Seguros" },
      { name: "description", content: "Términos y condiciones de uso del sitio web y los servicios de intermediación de seguros de Lawyers Seguros, corredor inscrito CMF N° 9816." },
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
          <Breadcrumb items={[{ label: "Legal" }, { label: "Términos y Condiciones" }]} />
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Legal</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-primary-foreground sm:text-5xl">
            Términos y Condiciones
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Última actualización: {ULTIMA_ACTUALIZACION}
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-4xl">
          <div className="prose prose-slate max-w-none text-foreground">

            <Aviso texto="Este documento constituye un contrato de adhesión en los términos del artículo 1545 del Código Civil de Chile. Al utilizar este sitio web o contratar los servicios de Lawyers Seguros, usted acepta íntegramente estos Términos y Condiciones." />

            <Seccion numero="1" titulo="Identificación del Titular">
              <p>
                El presente sitio web es operado por <strong>Lawyers Seguros</strong> (en adelante, "Lawyers Seguros" o "el Corredor"), corredor de seguros inscrito en el Registro de la Comisión para el Mercado Financiero (CMF) bajo el número <strong>9816</strong> (corredor no previsional vigente), con domicilio en Av. La Dehesa 222, Oficina 709, Lo Barnechea, Santiago de Chile, teléfono +56 9 8289 2804, correo electrónico: contacto@lawyers-seguros.cl.
              </p>
            </Seccion>

            <Seccion numero="2" titulo="Objeto y naturaleza del sitio web">
              <p>
                Este sitio tiene carácter <strong>exclusivamente informativo y comercial</strong>. Su finalidad es presentar los servicios de intermediación de seguros, recibir solicitudes de cotización y facilitar el contacto con potenciales clientes. La sola visita al sitio no genera ni perfecciona ningún contrato de seguro ni de intermediación.
              </p>
              <p>
                Los servicios de intermediación de seguros se materializan únicamente mediante la celebración de un contrato específico entre Lawyers Seguros y el cliente, conforme a lo dispuesto en el <strong>DFL N° 251</strong> sobre Compañías de Seguros y la <strong>NCG N° 454 de la CMF</strong> sobre Corredores de Seguros.
              </p>
            </Seccion>

            <Seccion numero="3" titulo="Calidad de intermediario — No es aseguradora">
              <p>
                Lawyers Seguros actúa en calidad de <strong>corredor de seguros independiente</strong>, en los términos del artículo 57 del <strong>DFL N° 251</strong>. En consecuencia:
              </p>
              <ul>
                <li>No es una compañía de seguros ni asume riesgo asegurador alguno.</li>
                <li>No puede comprometer o garantizar coberturas en nombre de compañías aseguradoras.</li>
                <li>Actúa como mandatario del asegurado, con plena independencia respecto de las compañías aseguradoras.</li>
                <li>Su remuneración proviene de la comisión que paga la compañía aseguradora, conforme a la regulación CMF vigente.</li>
                <li>Está sujeto a la fiscalización y normativa de la <strong>Comisión para el Mercado Financiero (CMF)</strong>.</li>
              </ul>
            </Seccion>

            <Seccion numero="4" titulo="Descripción de los servicios">
              <p>Lawyers Seguros ofrece los siguientes servicios, los cuales conforman el denominado "Círculo Virtuoso del Seguro":</p>
              <ol>
                <li><strong>Due Diligence / Auditoría de Seguros:</strong> Levantamiento del mapa de riesgos del cliente y análisis de sus pólizas vigentes para detectar brechas de cobertura, según lo dispuesto en la NCG N° 200 de la CMF sobre información mínima al asegurado.</li>
                <li><strong>Planificación Estratégica y Contratación:</strong> Diseño del plan de acción e intermediación en la suscripción de contratos de seguro conforme a los artículos 512 y siguientes del <strong>Código de Comercio</strong> (modificados por la <strong>Ley N° 20.667</strong>).</li>
                <li><strong>Gerenciamiento Externo de Pólizas:</strong> Administración de la cartera de pólizas durante toda su vigencia, incluyendo control de vencimientos, gestión de pagos y renovaciones.</li>
                <li><strong>Asistencia Jurídica en Siniestros:</strong> Apoyo jurídico y estratégico en la denuncia y tramitación de siniestros ante la compañía aseguradora.</li>
                <li><strong>Juicios de Seguros:</strong> Representación del asegurado en procedimientos arbitrales y judiciales en materia de seguros, a través de los profesionales abogados de Lawyers Seguros.</li>
              </ol>
              <p>
                Los servicios de los numerales 1 a 4 son sin costo para el cliente cuando Lawyers Seguros intermedia las pólizas respectivas. El servicio del numeral 5 (juicios) y la asesoría jurídica autónoma se rigen por honorarios convenidos expresamente.
              </p>
            </Seccion>

            <Seccion numero="5" titulo="Proceso de cotización — Carácter referencial">
              <p>
                Toda cotización, propuesta o comparativa de seguros facilitada por Lawyers Seguros a través de este sitio, correo electrónico, WhatsApp u otro medio tiene carácter <strong>referencial y no vinculante</strong>. La cobertura definitiva, las exclusiones, las franquicias y demás condiciones quedan determinadas exclusivamente por la <strong>póliza de seguro</strong> suscrita entre el asegurado y la compañía aseguradora, conforme al artículo 514 del Código de Comercio.
              </p>
              <p>
                Lawyers Seguros se compromete a presentar las opciones del mercado de forma objetiva e independiente, velando por los intereses del asegurado conforme a la <strong>NCG N° 454 CMF</strong>.
              </p>
            </Seccion>

            <Seccion numero="6" titulo="Responsabilidad del Corredor">
              <p>Lawyers Seguros responde frente al cliente de conformidad con los artículos 57 y 58 del DFL N° 251 y las normas de la CMF. En particular:</p>
              <ul>
                <li>Responde por los perjuicios causados al asegurado derivados de su negligencia o dolo en el ejercicio de la intermediación.</li>
                <li><strong>No responde</strong> por incumplimientos o insolvencia de las compañías aseguradoras con quienes se contraten pólizas.</li>
                <li><strong>No responde</strong> por la exactitud de la información proporcionada por el cliente para la cotización o contratación.</li>
                <li>No garantiza la aprobación de siniestros por parte de las aseguradoras, siendo su rol el de asistir y representar al asegurado en la gestión.</li>
              </ul>
            </Seccion>

            <Seccion numero="7" titulo="Obligaciones del usuario y del cliente">
              <p>Al utilizar este sitio y contratar los servicios de Lawyers Seguros, el usuario se obliga a:</p>
              <ul>
                <li>Proporcionar información veraz, completa y actualizada al solicitar cotizaciones o contratar seguros. La información falsa o incompleta puede invalidar coberturas conforme al artículo 524 del Código de Comercio.</li>
                <li>No utilizar el sitio con fines ilícitos, fraudulentos o contrarios a la buena fe.</li>
                <li>Notificar oportunamente cualquier cambio en la información relevante para la vigencia y cobertura de sus pólizas.</li>
                <li>Cumplir las obligaciones establecidas en cada póliza de seguro contratada.</li>
              </ul>
            </Seccion>

            <Seccion numero="8" titulo="Propiedad intelectual">
              <p>
                La marca "Lawyers Seguros", el logotipo, los textos, imágenes, diseños, código fuente y demás elementos del sitio web son propiedad exclusiva de Lawyers Seguros y están protegidos por las disposiciones de la <strong>Ley N° 17.336</strong> sobre Propiedad Intelectual y la <strong>Ley N° 19.039</strong> sobre Propiedad Industrial. Queda expresamente prohibida su reproducción, distribución o uso comercial sin autorización escrita previa.
              </p>
            </Seccion>

            <Seccion numero="9" titulo="Tratamiento de datos personales">
              <p>
                El tratamiento de los datos personales de los usuarios se rige por la <strong>Política de Privacidad</strong> de Lawyers Seguros, disponible en{" "}
                <a href="/privacidad" className="text-secondary underline hover:text-accent">/privacidad</a>, conforme a la <strong>Ley N° 19.628</strong> sobre Protección de la Vida Privada y la <strong>Ley N° 21.719</strong> sobre Protección de Datos Personales.
              </p>
            </Seccion>

            <Seccion numero="10" titulo="Protección al consumidor">
              <p>
                En lo que respecta a clientes personas naturales, son aplicables las disposiciones de la <strong>Ley N° 19.496</strong> sobre Protección de los Derechos de los Consumidores y las normas de la CMF sobre información al asegurado. Los clientes pueden recurrir al SERNAC o a la CMF en caso de infracciones a la normativa de protección al consumidor en el ámbito de los seguros.
              </p>
            </Seccion>

            <Seccion numero="11" titulo="Modificaciones a los Términos y Condiciones">
              <p>
                Lawyers Seguros se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento, con el fin de adecuarlos a cambios normativos, regulatorios o comerciales. Las modificaciones se publicarán en este mismo sitio web, indicando la fecha de última actualización. El uso continuado del sitio tras la publicación de cambios implica la aceptación de los nuevos términos.
              </p>
            </Seccion>

            <Seccion numero="12" titulo="Ley aplicable y jurisdicción">
              <p>
                Estos Términos y Condiciones se rigen por la legislación de la <strong>República de Chile</strong>. Para la resolución de cualquier controversia derivada de su interpretación o aplicación, las partes se someten a la competencia de los <strong>tribunales ordinarios de justicia de la ciudad de Santiago</strong>, sin perjuicio de la competencia especial de la <strong>CMF</strong> como organismo regulador y fiscalizador del mercado asegurador, ni de los mecanismos de resolución alternativa de conflictos previstos en la normativa sectorial.
              </p>
              <p>
                En materia de seguros, resultan igualmente aplicables las disposiciones del <strong>Código de Comercio</strong> (arts. 512 y ss., modificados por la Ley N° 20.667), el <strong>DFL N° 251</strong> y las Normas de Carácter General de la CMF.
              </p>
            </Seccion>

            <Seccion numero="13" titulo="Contacto">
              <p>Para consultas sobre estos Términos y Condiciones, puede contactarnos en:</p>
              <ul>
                <li><strong>Correo:</strong> contacto@lawyers-seguros.cl</li>
                <li><strong>Teléfono:</strong> +56 9 8289 2804</li>
                <li><strong>Dirección:</strong> Av. La Dehesa 222, Oficina 709, Lo Barnechea, Santiago</li>
                <li><strong>Inscripción CMF:</strong> N° 9816 (corredor no previsional vigente)</li>
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
      <div className="space-y-3 pl-11 text-sm leading-relaxed text-muted-foreground [&_a]:text-secondary [&_a:hover]:text-accent [&_li]:mb-1.5 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p]:text-foreground/80 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
