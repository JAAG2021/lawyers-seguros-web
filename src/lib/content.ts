// Contenido institucional extraído de la Presentación Comercial de Lawyers Seguros.
// Centralizado aquí para reutilizar en /servicios, /industrias, /productos y Home.

// — Círculo Virtuoso del Seguro: los 5 servicios y sus procesos (págs. 3-4) —
export type Servicio = {
  id: string;
  numero: string;
  titulo: string;
  resumen: string;
  procesos: string[];
};

export const SERVICIOS: Servicio[] = [
  {
    id: "due-diligence",
    numero: "01",
    titulo: "Due Diligence / Auditoría",
    resumen:
      "Levantamos el mapa de riesgos del cliente y lo contrastamos con sus pólizas vigentes para detectar brechas de cobertura.",
    procesos: [
      "Elaboración del mapa de riesgos",
      "Análisis de contratos de seguros vs. mapa de riesgo",
      "Evaluación y diagnóstico documentado",
    ],
  },
  {
    id: "planificacion",
    numero: "02",
    titulo: "Planificación estratégica y Contratación",
    resumen:
      "Diseñamos el plan de acción —contrataciones, modificaciones, rectificaciones y eliminación de pólizas— y lo ejecutamos vía intermediación.",
    procesos: [
      "Plan de acción según las capacidades del cliente",
      "Búsqueda de la mejor oferta en el mercado",
      "Redacción y suscripción de contratos según plan estratégico",
    ],
  },
  {
    id: "gerencia-externa",
    numero: "03",
    titulo: "Gerenciamiento externo de pólizas",
    resumen:
      "Administramos la cartera de pólizas del cliente durante toda su vigencia, controlando vencimientos, pagos y gestión.",
    procesos: [
      "Control y gestión de pagos",
      "Seguimiento de vencimientos y renovaciones",
      "Gestión integral de la cartera de pólizas",
    ],
  },
  {
    id: "siniestros",
    numero: "04",
    titulo: "Asistencia jurídica en siniestros",
    resumen:
      "Acompañamos jurídica y estratégicamente cada siniestro para evitar rechazos formales y maximizar la cobertura efectiva.",
    procesos: [
      "Denuncia y gestión del siniestro con criterio legal",
      "Apoyo jurídico y estratégico ante la aseguradora",
      "Negociaciones de liquidación",
    ],
  },
  {
    id: "juicios",
    numero: "05",
    titulo: "Juicios de seguros",
    resumen:
      "Cuando la vía administrativa no basta, representamos al cliente en juicios arbitrales y judiciales de seguros.",
    procesos: [
      "Análisis de antecedentes",
      "Elaboración de informe en derecho",
      "Gestión y tramitación judicial · Negociaciones",
    ],
  },
];

// — Diferenciadores: ¿Por qué nosotros? (pág. 5) —
export const DIFERENCIADORES: string[] = [
  "Estudiamos la situación real del cliente en sus seguros desde una perspectiva jurídica y financiera.",
  "Diseñamos un plan estratégico de desarrollo y crecimiento en contratos de seguros, según las capacidades y el modelo de negocio del cliente.",
  "Nuestros servicios son sin costo, siempre que hagamos la intermediación de sus pólizas (salvo impugnaciones y juicios de seguros).",
  "Lo asistimos jurídicamente en temas de seguros de forma permanente, tanto en nuevas contrataciones como en modificaciones de pólizas vigentes.",
  "Fiscalizamos y damos cumplimiento a las exigencias de seguros que contractualmente le sean requeridas al cliente.",
  "Apoyamos jurídica y estratégicamente en eventuales siniestros.",
  "Acompañamos a nuestros clientes en sus juicios de seguros.",
  "Estamos presentes en todo el ciclo de vida de sus pólizas.",
];

// — Industrias en las que participamos (pág. 6) —
export const INDUSTRIAS: string[] = [
  "Construcción",
  "Transporte",
  "Obras Civiles",
  "Frigoríficos",
  "Frutícolas",
  "Espectáculos",
  "Retail",
  "Plásticos",
  "Seguridad",
  "Inmobiliaria",
  "Médica",
  "Condominios",
  "Restaurant",
  "Servicios a la minería",
  "Responsabilidad Profesional",
  "Hogar y Autos",
];

// — Catálogo de Productos Quality (pág. 7) —
export type CategoriaProducto = {
  id: string;
  titulo: string;
  productos: string[];
};

export const PRODUCTOS: CategoriaProducto[] = [
  {
    id: "bienes",
    titulo: "Protección de Bienes",
    productos: ["Hogar", "Vehículos", "Incendio / Sismo", "Robo", "Arriendo"],
  },
  {
    id: "empresas",
    titulo: "Protección Empresas",
    productos: [
      "Accidentes Personales",
      "Perjuicio por Paralización",
      "RC General Empresa",
      "RC Directores y Ejecutivos",
      "RC Profesional",
      "Colectivos Vida / Salud",
    ],
  },
  {
    id: "credito",
    titulo: "Protección Crédito",
    productos: [
      "Desgravamen",
      "Desempleo",
      "Garantía Crédito",
      "Garantía Importación",
    ],
  },
  {
    id: "otros",
    titulo: "Otros Seguros",
    productos: ["Todo Riesgo Construcción", "Casco"],
  },
  {
    id: "prime",
    titulo: "Línea Prime",
    productos: [
      "Vida",
      "Salud",
      "Comunidades y Edificios",
      "Seguros Bienes y Empresas",
      "Seguros Individuales Personas",
      "Seguro Complementario Salud",
      "Seguro Catastrófico",
      "Rentas Vitalicias",
      "Agrícola",
      "APV",
    ],
  },
];
