import type { Metadata } from "next";
import PagoLiquidacionConciliacionContent from "./PagoLiquidacionConciliacionContent";

export const metadata: Metadata = {
  title:
    "Pago de liquidación laboral mediante conciliación en Colombia (Guía 2026): derechos, acuerdos y procedimiento",

  description:
    "Aprende cómo reclamar el pago de una liquidación laboral mediante conciliación en Colombia. Conoce cuándo procede, documentos necesarios, derechos del trabajador, acuerdos de pago y cómo evitar una demanda laboral.",

  keywords: [
    "pago de liquidación laboral",
    "liquidación laboral conciliación",
    "conciliación laboral Colombia",
    "reclamar liquidación laboral",
    "empresa no paga liquidación",
    "acuerdo de pago liquidación laboral",
    "prestaciones sociales conciliación",
    "audiencia conciliación laboral",
    "liquidación laboral Colombia",
    "derechos del trabajador",
    "conciliación entre trabajador y empleador",
    "acta de conciliación laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",
  },

  openGraph: {
    title:
      "Pago de liquidación laboral mediante conciliación en Colombia | Guía completa 2026",

    description:
      "Conoce cómo resolver diferencias sobre liquidaciones laborales mediante conciliación, evitar procesos judiciales y lograr acuerdos con respaldo legal.",

    url: "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Pago de liquidación laboral mediante conciliación | Guía 2026",

    description:
      "Descubre cuándo puedes conciliar una liquidación laboral, qué documentos presentar y cómo resolver el conflicto sin acudir a un juicio.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Pago de liquidación laboral mediante conciliación en Colombia: guía completa",

    alternativeHeadline:
      "Cómo conciliar el pago de una liquidación laboral en Colombia",

    description:
      "Guía práctica sobre la conciliación laboral para resolver conflictos relacionados con liquidaciones, prestaciones sociales, indemnizaciones y acuerdos de pago entre empleadores y trabajadores.",

    keywords: [
      "liquidación laboral",
      "conciliación laboral",
      "prestaciones sociales",
      "acuerdo laboral",
      "empresa no paga liquidación",
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

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Se puede conciliar el pago de una liquidación laboral en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación laboral permite que trabajador y empleador lleguen a acuerdos sobre liquidaciones, salarios, prestaciones sociales, indemnizaciones y demás obligaciones derivadas del contrato de trabajo.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si la empresa no paga la liquidación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando existen diferencias sobre el pago de la liquidación, las partes pueden acudir a una audiencia de conciliación para intentar resolver el conflicto antes de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente es recomendable presentar contrato de trabajo, desprendibles de nómina, liquidación entregada por la empresa, comprobantes de pago y cualquier documento relacionado con la terminación del contrato.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación laboral tiene efectos legales?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación produce importantes efectos jurídicos cuando cumple los requisitos establecidos por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede acordar el pago de la liquidación en cuotas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante la conciliación las partes pueden pactar cronogramas de pago, fechas y demás condiciones para cumplir las obligaciones asumidas.",
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

      <PagoLiquidacionConciliacionContent />
    </>
  );
}
