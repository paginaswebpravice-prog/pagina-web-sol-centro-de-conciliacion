import { Metadata } from "next";
import ActasEjemplosContent from "./ActasEjemplosContent";

/* ================= METADATA (SEO REAL) ================= */
export const metadata: Metadata = {
  title:
    "Ejemplos de actas de conciliación en Colombia: modelos, formatos y casos prácticos (Guía 2026)",

  description:
    "Conozca ejemplos de actas de conciliación en Colombia para acuerdos de pago, conflictos civiles, comerciales, familiares y de arrendamiento. Aprenda qué debe contener un acta válida, sus efectos legales y descargue modelos de referencia.",

  keywords: [
    "ejemplo acta de conciliación",
    "acta de conciliación ejemplo Colombia",
    "modelo acta de conciliación",
    "formato acta de conciliación",
    "cómo hacer un acta de conciliación",
    "modelo acuerdo de pago conciliación",
    "ejemplo conciliación civil",
    "acta conciliación comercial",
    "acta conciliación familiar",
    "acta conciliación arrendamiento",
    "modelo conciliación extrajudicial",
    "acta conciliación Bogotá",
    "ejemplos conciliación Colombia",
    "acta de conciliación PDF",
    "redacción acta de conciliación",
    "qué debe contener un acta de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
  },

  openGraph: {
    title:
      "Ejemplos de actas de conciliación en Colombia | Modelos completos 2026",

    description:
      "Aprenda cómo elaborar un acta de conciliación correctamente. Consulte modelos, ejemplos reales, formatos y recomendaciones jurídicas para acuerdos civiles, comerciales y familiares.",

    url: "https://solcentrodeconciliacion.com/blog/actas-ejemplos",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Ejemplos de actas de conciliación en Colombia | Guía completa",

    description:
      "Modelos, formatos y ejemplos prácticos de actas de conciliación para diferentes tipos de conflictos.",
  },
};

export default function ActasEjemplosSeo() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline:
        "Ejemplos de actas de conciliación en Colombia: modelos, formatos y casos prácticos",

      alternativeHeadline:
        "Cómo elaborar correctamente un acta de conciliación en Colombia",

      description:
        "Guía completa con modelos de actas de conciliación, ejemplos de acuerdos de pago, conciliaciones civiles, comerciales, familiares y recomendaciones para redactar acuerdos claros y ejecutables.",

      inLanguage: "es-CO",

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
        "@id": "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
      },

      about: [
        {
          "@type": "Thing",
          name: "Acta de conciliación",
        },
        {
          "@type": "Thing",
          name: "Conciliación extrajudicial",
        },
        {
          "@type": "Thing",
          name: "Acuerdo de pago",
        },
        {
          "@type": "Thing",
          name: "Resolución de conflictos",
        },
      ],

      keywords: [
        "acta de conciliación ejemplo",
        "modelo acta conciliación",
        "formato conciliación",
        "ejemplo acuerdo conciliatorio",
        "conciliación Colombia",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es el documento que contiene los acuerdos alcanzados por las partes durante una audiencia de conciliación y deja constancia de las obligaciones asumidas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué debe contener un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debe incluir la identificación de las partes, descripción del conflicto, obligaciones, fechas, valores, forma de cumplimiento, firmas y datos del centro de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación produce efectos jurídicos conforme a la legislación colombiana cuando ha sido elaborada dentro de un procedimiento de conciliación autorizado.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si una persona incumple el acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del contenido del acuerdo y de la normativa aplicable, el incumplimiento puede dar lugar a las acciones legales correspondientes para exigir su cumplimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se redacta un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debe redactarse utilizando obligaciones claras, fechas específicas, valores determinados y condiciones verificables que permitan comprender exactamente los compromisos adquiridos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué tipos de actas de conciliación existen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Existen actas relacionadas con asuntos civiles, comerciales, familiares, de arrendamiento, acuerdos de pago, conflictos contractuales y otras materias susceptibles de conciliación.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quién redacta el acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El conciliador es quien elabora el acta con base en los acuerdos alcanzados durante la audiencia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se puede modificar un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las modificaciones dependerán de las circunstancias del caso y de la voluntad de las partes conforme al procedimiento legal aplicable.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde puedo realizar una conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Las conciliaciones pueden realizarse en centros de conciliación autorizados y demás entidades habilitadas por la ley.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué documentos suelen requerirse para una conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente se presentan documentos relacionados con el conflicto, la identificación de las partes y los soportes que permitan sustentar las pretensiones.",
          },
        },
        {
          "@type": "Question",
          name: "¿Un acta de conciliación sirve como prueba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El acta constituye un documento que acredita el desarrollo de la conciliación y el contenido de los acuerdos alcanzados.",
          },
        },
        {
          "@type": "Question",
          name: "¿Es recomendable utilizar modelos de actas de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los modelos sirven como guía para conocer la estructura general del documento, aunque cada conciliación debe adaptarse a las circunstancias particulares del caso.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* ================= CONTENIDO ================= */}
      <ActasEjemplosContent />
    </>
  );
}
