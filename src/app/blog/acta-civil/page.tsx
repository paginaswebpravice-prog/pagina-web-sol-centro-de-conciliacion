import { Metadata } from "next";
import ActaCivilContent from "./ActaCivilContent";

export const metadata: Metadata = {
  title: "Acta de conciliación civil en Colombia (modelo y guía 2026)",
  description:
    "Modelo de acta de conciliación civil en Colombia. Guía completa para acuerdos de pago, deudas, contratos y efectos legales en Bogotá y Colombia.",

  keywords: [
    "acta de conciliacion civil Colombia",
    "modelo acta conciliacion Bogota",
    "acuerdo de pago conciliacion Colombia",
    "conciliacion civil deuda Colombia",
    "acta conciliacion contrato Colombia",
  ],

  openGraph: {
    title: "Acta de conciliación civil en Colombia (modelo y guía completa)",
    description:
      "Aprende cómo hacer un acta de conciliación civil en Colombia con modelo real, efectos legales y guía práctica.",
    url: "https://solcentrodeconciliacion.com/blog/acta-civil",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://solcentrodeconciliacion.com/og/acta-civil.jpg",
        width: 1200,
        height: 630,
        alt: "Acta de conciliación civil en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Acta de conciliación civil en Colombia",
    description:
      "Guía completa + modelo de acta de conciliación civil en Colombia.",
    images: ["https://solcentrodeconciliacion.com/og/acta-civil.jpg"],
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acta-civil",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",

      headline: "Acta de conciliación civil en Colombia",
      description:
        "Guía completa sobre el acta de conciliación civil en Colombia, modelos, efectos legales y acuerdos de pago.",

      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
        logo: {
          "@type": "ImageObject",
          url: "https://solcentrodeconciliacion.com/logo.png",
        },
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/acta-civil",
      },

      inLanguage: "es-CO",
      datePublished: "2026-01-01",
      dateModified: "2026-01-01",

      articleSection: "Derecho civil",

      about: [
        "conciliación civil Colombia",
        "acuerdos de pago Bogotá",
        "acta de conciliación civil",
        "deudas y contratos Colombia",
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación civil en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un acuerdo legal entre partes para resolver conflictos como deudas o incumplimientos contractuales, con efectos legales en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación civil tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en Colombia el acta de conciliación tiene efectos de cosa juzgada y presta mérito ejecutivo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no se cumple un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se puede iniciar un proceso ejecutivo para exigir el cumplimiento ante un juez.",
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

      <ActaCivilContent />
    </>
  );
}
