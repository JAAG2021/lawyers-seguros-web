import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convierte un nombre legible en un slug para nombre de archivo.
 * "Incendio / Sismo" -> "incendio-sismo", "Construcción" -> "construccion".
 */
export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .replace(/ü/g, "u")
    .replace(/[^a-z0-9]+/g, "-") // todo lo no alfanumérico -> guion
    .replace(/^-+|-+$/g, ""); // sin guiones al inicio/fin
}
