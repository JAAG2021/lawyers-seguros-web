import { useRef, useState } from "react";
import { FORMSPREE_URL } from "@/lib/constants";

type Ramo = "Condominio" | "Colegios" | "Revisión de póliza" | "General";

const cargoOptions: Partial<Record<Ramo, string[]>> = {
  Condominio: ["Administrador", "Presidente del comité", "Miembro del comité", "Otro"],
  Colegios: ["Director(a)", "Sostenedor(a)", "Administración", "Otro"],
  "Revisión de póliza": ["Administrador", "Director(a)", "Sostenedor(a)", "Otro"],
};

type Status = "idle" | "loading" | "success" | "error";

const MAX_PDF_BYTES = 10 * 1024 * 1024; // 10 MB (límite Formspree Gold)

export function FormCotizacion({ ramo }: { ramo: Ramo }) {
  const [status, setStatus] = useState<Status>("idle");
  const [archivo, setArchivo] = useState<File | null>(null);
  const [errorArchivo, setErrorArchivo] = useState<string | null>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  function handleArchivo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setErrorArchivo(null);
    if (!file) { setArchivo(null); return; }
    if (file.type !== "application/pdf") {
      setErrorArchivo("Solo se aceptan archivos PDF.");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_PDF_BYTES) {
      setErrorArchivo("El archivo supera el límite de 10 MB.");
      e.target.value = "";
      return;
    }
    setArchivo(file);
  }

  function quitarArchivo() {
    setArchivo(null);
    setErrorArchivo(null);
    if (inputFileRef.current) inputFileRef.current.value = "";
  }

  function formatBytes(bytes: number) {
    return bytes < 1024 * 1024
      ? `${(bytes / 1024).toFixed(0)} KB`
      : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  const institucionLabel =
    ramo === "Colegios"
      ? "Nombre del establecimiento"
      : ramo === "Condominio"
        ? "Nombre del edificio o condominio"
        : "Organización (opcional)";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-secondary/30 bg-surface p-8 text-center">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary/10 text-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-secondary">Solicitud recibida</div>
        <h3 className="mt-2 text-2xl font-semibold">Gracias, te contactamos pronto.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {archivo
            ? "Recibimos tu solicitud y la póliza adjunta. Un asesor la revisará y te contactará en horario hábil."
            : "Un asesor revisará tu caso y se comunicará durante el día hábil siguiente."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
      <div>
        <span className="accent-rule" />
        <h3 className="text-2xl font-semibold">Solicita tu cotización</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Ramo: <strong className="text-foreground">{ramo}</strong>. Respondemos en horario hábil.
        </p>
      </div>
      <input type="hidden" name="ramo" value={ramo} />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Nombre y apellido" name="nombre" required />
        {cargoOptions[ramo] && (
          <SelectField label="Cargo" name="cargo" options={cargoOptions[ramo]!} required />
        )}
        <Field label={institucionLabel} name="institucion" className="md:col-span-2" />
        <Field label="Teléfono (WhatsApp)" name="telefono" type="tel" required />
        <Field label="Correo electrónico" name="email" type="email" required />
        <SelectField
          label="¿Tiene seguro vigente?"
          name="seguro"
          options={["Sí", "No", "No estoy seguro"]}
          required
          className="md:col-span-2"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">Comentarios (opcional)</label>
        <textarea
          name="comentarios"
          rows={3}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-shadow duration-200"
        />
      </div>

      {/* Adjunto PDF opcional */}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Póliza vigente — adjunte su PDF{" "}
          <span className="font-normal text-muted-foreground">(opcional · máx. 10 MB)</span>
        </label>

        {!archivo ? (
          <label
            htmlFor="poliza_pdf"
            className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-input bg-background px-4 py-6 text-center transition-colors hover:border-secondary/60 hover:bg-secondary/5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-muted-foreground/60 transition-colors group-hover:text-secondary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-secondary">
              Haz clic para adjuntar su póliza en PDF
            </span>
            <span className="text-xs text-muted-foreground/70">
              Si ya tiene un seguro vigente, adjúntelo para que nuestro equipo lo revise con criterio jurídico.
            </span>
            <input
              ref={inputFileRef}
              id="poliza_pdf"
              name="poliza_adjunta"
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleArchivo}
              className="sr-only"
            />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 rounded-lg border border-secondary/30 bg-secondary/5 px-4 py-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 shrink-0 text-secondary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <div className="overflow-hidden">
                <p className="truncate text-sm font-medium text-foreground">{archivo.name}</p>
                <p className="text-xs text-muted-foreground">{formatBytes(archivo.size)}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={quitarArchivo}
              aria-label="Quitar archivo"
              className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        )}

        {errorArchivo && (
          <p className="mt-1.5 text-xs text-destructive">{errorArchivo}</p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 px-4 py-2 text-sm text-destructive">
          Hubo un problema al enviar. Intenta nuevamente o escríbenos por WhatsApp.
        </p>
      )}

      <label className="flex items-start gap-2.5">
        <input
          type="checkbox"
          name="acepta_terminos"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-secondary"
        />
        <span className="text-xs text-muted-foreground">
          He leído y acepto los{" "}
          <a href="/terminos" target="_blank" rel="noreferrer" className="font-medium text-secondary underline hover:text-accent">
            Términos y Condiciones
          </a>{" "}
          y la{" "}
          <a href="/privacidad" target="_blank" rel="noreferrer" className="font-medium text-secondary underline hover:text-accent">
            Política de Privacidad
          </a>{" "}
          de Lawyers Seguros. Autorizo el tratamiento de mis datos para la gestión de mi solicitud, conforme a la Ley N° 19.628.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === "loading" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}

function Field({
  label, name, type = "text", required, className = "",
}: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-shadow duration-200"
      />
    </div>
  );
}

function SelectField({
  label, name, options, required, className = "",
}: {
  label: string; name: string; options: string[]; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-foreground">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-shadow duration-200"
      >
        <option value="" disabled>Selecciona…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
