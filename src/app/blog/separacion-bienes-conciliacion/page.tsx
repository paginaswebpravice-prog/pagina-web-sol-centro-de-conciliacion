import type { Metadata } from "next";
import SeparacionBienesConciliacionContent from "./SeparacionBienesConciliacionContent";

export const metadata: Metadata = {
  title: "Separación de bienes mediante conciliación en Colombia | Guía 2026",
  description:
    "Conoce cómo realizar la separación de bienes mediante conciliación en Colombia, sus ventajas, requisitos y efectos legales.",
  keywords: [
    "separación de bienes",
    "separación de bienes conciliación",
    "conciliación patrimonial Colombia",
    "repartición de bienes",
    "liquidación de bienes",
    "conciliación familiar Bogotá",
    "acuerdo patrimonial",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",
  },
  openGraph: {
    title: "Separación de bienes mediante conciliación en Colombia",
    description:
      "Aprende cómo acordar la separación de bienes mediante conciliación de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Separación de bienes mediante conciliación en Colombia",
    description:
      "Guía completa sobre la separación de bienes mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puede hacerse una separación de bienes mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las partes pueden acordar voluntariamente la distribución de bienes mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene efectos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene validez jurídica y puede hacerse exigible en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es más rápida que un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente sí. La conciliación suele permitir soluciones más ágiles y menos costosas.",
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

      <SeparacionBienesConciliacionContent />
    </>
  );
}
