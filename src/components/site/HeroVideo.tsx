type Props = {
  /** Ruta del video, p. ej. "/videos/servicios.mp4" */
  src: string;
  /** Imagen de respaldo (primer frame) mientras carga el video, p. ej. "/videos/servicios.jpg" */
  poster?: string;
};

/**
 * Fondo de video para los heroes. Se coloca como primer hijo dentro de una
 * <section className="relative overflow-hidden bg-primary ...">. El color
 * primary de la sección actúa como respaldo si el video no carga, manteniendo
 * el texto legible en todo momento.
 */
export function HeroVideo({ src, poster }: Props) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster={poster}
        className="absolute inset-0 h-full w-full object-cover object-center"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Velo para contraste del texto */}
      <div className="absolute inset-0 bg-primary/80" />
      {/* Patrón de puntos sutil, igual que el hero principal */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  );
}
