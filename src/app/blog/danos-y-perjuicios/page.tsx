import type { Metadata } from "next";
import DanosYPerjuiciosContent from "./DanosYPerjuiciosContent";

export const metadata: Metadata = {
  title:
    "Conciliación por daños y perjuicios en Colombia: ¿Cómo reclamar una indemnización?",

  description:
    "Aprende cómo reclamar daños y perjuicios mediante conciliación en Colombia. Conoce cuándo procede una indemnización, qué pruebas necesitas y cómo evitar un proceso judicial.",

  keywords: [
    "daños y perjuicios Colombia",
    "conciliación daños y perjuicios",
    "conciliación indemnización Colombia",
    "reclamar daños y perjuicios",
    "cómo reclamar una indemnización",
    "indemnización por daños Colombia",
    "reparación de perjuicios",
    "responsabilidad civil Colombia",
    "conciliación civil Bogotá",
    "indemnización económica Colombia",
    "acuerdo por daños y perjuicios",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
    "reclamación por perjuicios",
    "resolver daños mediante conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",
  },

  openGraph: {
    title:
      "Conciliación por daños y perjuicios en Colombia | Guía para reclamar una indemnización",

    description:
      "Descubre cuándo puedes reclamar daños y perjuicios mediante conciliación, qué documentos presentar y cómo lograr un acuerdo con validez legal.",

    url: "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "¿Cómo reclamar daños y perjuicios mediante conciliación en Colombia?",

    description:
      "Guía práctica sobre conciliación, indemnizaciones y reparación de perjuicios en Colombia.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Conciliación por daños y perjuicios en Colombia: guía para reclamar una indemnización",

    alternativeHeadline:
      "Cómo reclamar daños y perjuicios mediante conciliación en Colombia",

    description:
      "Guía completa para entender cuándo procede una reclamación por daños y perjuicios, cómo funciona la conciliación y qué acuerdos pueden alcanzarse sin acudir a un proceso judicial.",

    keywords: [
      "daños y perjuicios",
      "conciliación",
      "indemnización",
      "responsabilidad civil",
      "Colombia",
      "Bogotá",
    ],

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

      "@id": "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",
    },

    about: [
      {
        "@type": "Thing",

        name: "Conciliación",
      },
      {
        "@type": "Thing",

        name: "Daños y perjuicios",
      },
      {
        "@type": "Thing",

        name: "Responsabilidad civil",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué son los daños y perjuicios en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Son las pérdidas económicas, materiales o patrimoniales que una persona sufre como consecuencia de la acción u omisión de otra persona y que pueden dar lugar a una indemnización.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede reclamar una indemnización mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Muchos conflictos relacionados con daños y perjuicios pueden resolverse mediante conciliación, permitiendo que las partes acuerden la forma y el valor de la reparación sin acudir a un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pruebas debo presentar para reclamar daños y perjuicios?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable aportar contratos, facturas, fotografías, videos, correos electrónicos, conversaciones, cotizaciones, dictámenes técnicos y cualquier documento que permita demostrar la existencia del daño y su valor.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si no hay acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando no se logra un acuerdo, las partes conservan la posibilidad de acudir ante la autoridad judicial competente para resolver el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación produce efectos jurídicos y obliga a las partes a cumplir los compromisos adquiridos conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación por daños y perjuicios?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El tiempo depende de la complejidad del caso y de la disposición de las partes para negociar, aunque normalmente resulta mucho más rápido que un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio tener abogado para conciliar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del caso. En muchas conciliaciones las partes pueden participar directamente, aunque contar con asesoría jurídica puede facilitar la negociación cuando existen reclamaciones económicas importantes.",
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

      <DanosYPerjuiciosContent />
    </>
  );
}
