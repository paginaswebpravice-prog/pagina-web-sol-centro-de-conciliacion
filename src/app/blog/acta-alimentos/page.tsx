import { Metadata } from "next";
import ActaAlimentosContent from "./ActaAlimentosContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación de alimentos en Colombia: ejemplo, formato, requisitos y guía completa 2026",
  description:
    "Aprende cómo elaborar un acta de conciliación de alimentos en Colombia. Conoce el formato, ejemplo completo, requisitos, documentos, efectos legales, incumplimiento y procedimiento paso a paso.",

  keywords: [
    "acta de conciliación alimentos Colombia",
    "cuota alimentaria Bogotá",
    "ejemplo acta conciliación alimentos",
    "derecho de familia Colombia",
    "conciliación extrajudicial alimentos",
  ],

  openGraph: {
    title:
      "Acta de conciliación de alimentos en Colombia (ejemplo y guía completa)",
    description:
      "Aprende cómo hacer un acta de conciliación de alimentos en Colombia con ejemplo real, requisitos legales y guía paso a paso.",
    url: "https://solcentrodeconciliacion.com/blog/acta-alimentos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://solcentrodeconciliacion.com/og/acta-alimentos.jpg", // crea esta imagen luego
        width: 1200,
        height: 630,
        alt: "Acta de conciliación de alimentos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Acta de conciliación de alimentos en Colombia (ejemplo completo)",
    description:
      "Guía práctica + ejemplo real de acta de alimentos en Colombia.",
    images: ["https://solcentrodeconciliacion.com/og/acta-alimentos.jpg"],
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acta-alimentos",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Acta de conciliación de alimentos en Colombia (ejemplo y guía completa)",
      description:
        "Guía completa sobre el acta de conciliación de alimentos en Colombia, incluyendo ejemplo, requisitos legales y artículo 411 del Código Civil.",

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
        "@id": "https://solcentrodeconciliacion.com/blog/acta-alimentos",
      },

      inLanguage: "es-CO",
      datePublished: "2026-01-01",
      dateModified: "2026-01-01",
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación de alimentos en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un documento legal donde se fija la cuota alimentaria, forma de pago y obligaciones entre las partes con efectos jurídicos exigibles.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no se cumple un acta de alimentos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se puede iniciar un proceso de ejecución judicial para exigir el pago.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ActaAlimentosContent />
    </>
  );
}
