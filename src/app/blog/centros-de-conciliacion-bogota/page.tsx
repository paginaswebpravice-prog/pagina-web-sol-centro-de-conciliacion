import type { Metadata } from "next";
import CentrosConciliacionBogotaContent from "./CentrosConciliacionBogotaContent";

export const metadata: Metadata = {
  title:
    "Centros de conciliación en Bogotá: guía completa para iniciar una conciliación en 2026",
  description:
    "Descubre cuáles son los centros de conciliación en Bogotá, cómo funcionan, quiénes pueden acudir, qué documentos necesitas, cuánto cuesta una conciliación y cómo iniciar el proceso paso a paso en un centro autorizado.",
  keywords: [
    "centros de conciliación Bogotá",
    "centro de conciliación Bogotá",
    "dónde conciliar en Bogotá",
    "conciliación Bogotá",
    "centros autorizados conciliación",
    "conciliación extrajudicial Bogotá",
    "centros de conciliación autorizados Bogotá",
    "proceso de conciliación Bogotá",
    "conciliación civil Bogotá",
    "conciliación familiar Bogotá",
    "conciliación laboral Bogotá",
    "conciliación comercial Bogotá",
    "audiencia de conciliación Bogotá",
    "MASC Bogotá",
    "Ministerio de Justicia conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",
  },
  openGraph: {
    title:
      "Centros de conciliación en Bogotá: dónde acudir y cómo funciona el proceso",
    description:
      "Conoce los centros de conciliación autorizados en Bogotá, los requisitos, documentos necesarios y el procedimiento para resolver conflictos mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Centros de conciliación en Bogotá: guía completa para iniciar una conciliación en Colombia",
    description:
      "Guía sobre dónde acudir en Bogotá para realizar conciliaciones extrajudiciales en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",

    articleSection: "Conciliación Extrajudicial",

    inLanguage: "es-CO",

    about: [
      "Centros de conciliación",
      "Conciliación en Bogotá",
      "Conciliación extrajudicial",
      "MASC",
      "Resolución de conflictos",
    ],

    keywords:
      "centros de conciliación Bogotá, conciliación extrajudicial, conciliación civil, conciliación comercial",

    audience: {
      "@type": "Audience",
      audienceType: "Ciudadanos y empresas en Colombia",
    },

    areaServed: {
      "@type": "City",
      name: "Bogotá",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde hay centros de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Bogotá existen centros de conciliación autorizados por el Ministerio de Justicia y del Derecho, así como algunos consultorios jurídicos, cámaras de comercio y otras entidades habilitadas para prestar este servicio conforme a la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una entidad autorizada para administrar procesos de conciliación extrajudicial, facilitando que las partes resuelvan sus conflictos mediante acuerdos con validez jurídica sin acudir inicialmente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede acudir a un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden acudir personas naturales, empresas, comerciantes, arrendadores, arrendatarios y cualquier persona que tenga un conflicto susceptible de resolverse mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse en un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, pueden conciliarse conflictos civiles, comerciales, familiares, laborales, de arrendamiento, acuerdos de pago, obligaciones contractuales y otros asuntos permitidos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo solicitar una audiencia de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se presenta una solicitud ante un centro de conciliación autorizado, aportando la información del conflicto, los datos de la otra parte y la documentación que soporte la solicitud.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos necesito para iniciar una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los documentos dependen del tipo de conflicto, pero normalmente se recomienda presentar el documento de identidad, contratos, facturas, comprobantes de pago, comunicaciones y cualquier otra prueba relacionada con el caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta acudir a un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del centro de conciliación, la naturaleza del conflicto y la cuantía del asunto. Algunos servicios son gratuitos y otros tienen tarifas establecidas conforme a la normatividad vigente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto demora una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según la disponibilidad de las partes y la complejidad del conflicto. En muchos casos es posible resolver el asunto en una o pocas audiencias.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito un abogado para acudir a un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre es obligatorio contar con abogado. Sin embargo, dependiendo del tipo de conflicto, recibir asesoría jurídica puede facilitar la negociación y la elaboración de un acuerdo adecuado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra persona no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si la persona citada no comparece, el centro de conciliación dejará la constancia correspondiente y la parte interesada podrá evaluar las alternativas legales disponibles según su caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación en Bogotá puede realizarse de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación ofrecen audiencias virtuales, permitiendo que las partes participen a distancia cuando las condiciones del caso lo permiten.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo logrado en una conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo y este queda consignado en un acta de conciliación, el documento produce los efectos jurídicos previstos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo saber si un centro de conciliación está autorizado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable verificar que el centro esté autorizado conforme a la normativa vigente y que cuente con conciliadores habilitados para prestar el servicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las empresas también pueden acudir a un centro de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las empresas pueden utilizar la conciliación para resolver conflictos comerciales, contractuales, civiles, de cartera, arrendamientos y otros asuntos susceptibles de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué acudir a un centro de conciliación antes de presentar una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede permitir una solución más rápida, reducir costos, preservar las relaciones entre las partes y evitar un proceso judicial cuando es posible alcanzar un acuerdo voluntario.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <CentrosConciliacionBogotaContent />
    </>
  );
}
