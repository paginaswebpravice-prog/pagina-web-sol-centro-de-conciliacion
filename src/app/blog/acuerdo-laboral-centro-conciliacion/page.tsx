import type { Metadata } from "next";
import AcuerdoLaboralCentroConciliacionContent from "./AcuerdoLaboralCentroConciliacionContent";

export const metadata: Metadata = {
  title:
    "Acuerdo laboral ante un centro de conciliación en Colombia: requisitos, validez legal y guía completa (2026)",

  description:
    "Conozca cómo realizar un acuerdo laboral ante un centro de conciliación en Colombia. Descubra qué conflictos pueden conciliarse, requisitos, efectos legales, beneficios, modelos de acuerdos y qué sucede si una de las partes incumple.",

  keywords: [
    "acuerdo laboral",
    "acuerdo laboral Colombia",
    "acuerdo entre trabajador y empleador",
    "conciliación laboral",
    "conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "centro de conciliación laboral",
    "acta de conciliación laboral",
    "modelo acuerdo laboral",
    "formato acuerdo laboral",
    "acuerdo liquidación laboral",
    "acuerdo terminación contrato laboral",
    "acuerdo pago prestaciones sociales",
    "acuerdo indemnización laboral",
    "conciliación extrajudicial laboral",
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
    canonical:
      "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",
  },

  openGraph: {
    title:
      "Acuerdo laboral ante un centro de conciliación | Guía completa 2026",

    description:
      "Aprenda cómo formalizar acuerdos laborales entre trabajador y empleador mediante conciliación. Requisitos, beneficios, efectos legales y preguntas frecuentes.",

    url: "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Acuerdo laboral por conciliación | Guía completa",

    description:
      "Todo sobre acuerdos laborales mediante conciliación en Colombia.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: "Acuerdo laboral ante un centro de conciliación en Colombia",

    alternativeHeadline:
      "Cómo formalizar un acuerdo laboral entre trabajador y empleador",

    description:
      "Guía completa sobre acuerdos laborales mediante conciliación, requisitos, beneficios, efectos legales y procedimiento en Colombia.",

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
      "@id":
        "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",
    },

    about: [
      {
        "@type": "Thing",
        name: "Conciliación laboral",
      },
      {
        "@type": "Thing",
        name: "Acuerdo laboral",
      },
      {
        "@type": "Thing",
        name: "Relaciones laborales",
      },
      {
        "@type": "Thing",
        name: "Resolución de conflictos laborales",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acuerdo laboral por conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un acuerdo voluntario entre trabajador y empleador formalizado ante un conciliador autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo queda contenido en un acta de conciliación con efectos jurídicos obligatorios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos laborales pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salarios, prestaciones, liquidaciones, indemnizaciones y otros conflictos laborales susceptibles de acuerdo.",
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

      <AcuerdoLaboralCentroConciliacionContent />
    </>
  );
}
