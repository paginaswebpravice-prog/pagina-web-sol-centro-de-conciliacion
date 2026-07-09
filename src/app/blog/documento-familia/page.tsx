import { Metadata } from "next";
import DocumentoFamiliaContent from "./DocumentoFamiliaContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación familiar en Colombia (Modelo 2026) | Alimentos, Custodia, Visitas y Ejemplo Completo",
  description:
    "Descarga un modelo de acta de conciliación familiar en Colombia. Aprende cómo realizar acuerdos sobre cuota alimentaria, custodia, régimen de visitas y obligaciones familiares con validez legal.",
  keywords: [
    "acta de conciliación familiar",
    "modelo acta de conciliación familiar",
    "ejemplo acta conciliación familiar",
    "conciliación familiar Colombia",
    "conciliación familiar Bogotá",
    "acta conciliación alimentos",
    "acta conciliación custodia",
    "acta conciliación visitas",
    "cuota alimentaria Colombia",
    "custodia de menores Colombia",
    "régimen de visitas Colombia",
    "modelo conciliación alimentos",
    "documento conciliación familiar",
    "conciliación extrajudicial familia",
  ],
  openGraph: {
    title:
      "Modelo de Acta de Conciliación Familiar en Colombia | Ejemplo Completo 2026",

    description:
      "Conoce cómo elaborar un acta de conciliación familiar con acuerdos sobre alimentos, custodia, visitas y obligaciones familiares en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/documento-familia",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },
  twitter: {
    card: "summary_large_image",

    title:
      "Modelo de Acta de Conciliación Familiar en Colombia | Guía Completa",

    description:
      "Modelo actualizado, requisitos, ejemplos y efectos legales del acta de conciliación familiar.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/documento-familia",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Acta de conciliación familiar en Colombia: modelo, visitas, alimentos y custodia",
      description:
        "Guía completa sobre conciliación familiar en Colombia, incluyendo modelo de acta, acuerdos de visitas, alimentos y custodia.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/documento-familia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación familiar en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un documento con validez jurídica en el que las partes plasman acuerdos relacionados con alimentos, custodia, régimen de visitas, obligaciones económicas u otros asuntos de familia. Cuando el acuerdo cumple los requisitos legales, puede exigirse en caso de incumplimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué asuntos pueden resolverse mediante una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación familiar puede utilizarse para acordar cuota alimentaria, custodia, cuidado personal de los hijos, régimen de visitas, gastos extraordinarios, responsabilidades de crianza y otros conflictos familiares susceptibles de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación familiar es obligatoria antes de presentar una demanda?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En determinados asuntos de familia la conciliación extrajudicial puede constituir un requisito previo antes de acudir a un proceso judicial. La necesidad de agotar este requisito depende del tipo de conflicto y de la normativa aplicable.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos debo presentar para una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente pueden solicitarse documentos de identidad, registro civil de los hijos, acuerdos anteriores si existen y cualquier soporte relacionado con ingresos, gastos o las circunstancias que motivan la conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué validez tiene un acta de conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El acta de conciliación tiene efectos jurídicos reconocidos por la legislación colombiana. En caso de incumplimiento, puede servir como fundamento para exigir el cumplimiento mediante los mecanismos legales correspondientes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puede modificarse un acta de conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando cambian las circunstancias económicas o familiares, las partes pueden celebrar una nueva conciliación para actualizar los acuerdos previamente suscritos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué ocurre si una de las partes incumple el acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si una de las partes incumple las obligaciones pactadas, el acta de conciliación puede utilizarse para adelantar las actuaciones legales previstas por la normativa colombiana.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es necesario asistir con abogado a una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos casos las partes pueden participar directamente en la audiencia de conciliación. Sin embargo, recibir orientación jurídica puede ser útil para comprender el alcance de los acuerdos que se van a suscribir.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto tiempo puede tardar una conciliación familiar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El tiempo varía según la disponibilidad de las partes, la complejidad del caso y la programación del centro de conciliación. En muchos casos el trámite resulta más ágil que un proceso judicial.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde puede realizarse una conciliación familiar en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación familiar puede adelantarse en centros de conciliación autorizados y demás entidades habilitadas por la legislación colombiana para prestar este servicio.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DocumentoFamiliaContent />
    </>
  );
}
