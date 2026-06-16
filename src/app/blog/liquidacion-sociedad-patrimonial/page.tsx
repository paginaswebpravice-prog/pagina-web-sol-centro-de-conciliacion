import type { Metadata } from "next";
import LiquidacionSociedadPatrimonialContent from "./LiquidacionSociedadPatrimonialContent";

export const metadata: Metadata = {
  title:
    "Liquidación de sociedad patrimonial por conciliación en Colombia | Guía 2026",
  description:
    "Aprende cómo realizar la liquidación de sociedad patrimonial entre compañeros permanentes mediante conciliación en Colombia.",
  keywords: [
    "liquidación sociedad patrimonial",
    "sociedad patrimonial compañeros permanentes",
    "conciliación familiar Colombia",
    "liquidación bienes compañeros permanentes",
    "conciliación Bogotá",
    "separación compañeros permanentes",
    "repartición de bienes",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",
  },
  openGraph: {
    title: "Liquidación de sociedad patrimonial por conciliación en Colombia",
    description:
      "Guía sobre la liquidación de bienes entre compañeros permanentes mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",
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
      "Liquidación de sociedad patrimonial por conciliación en Colombia",
    description:
      "Cómo liquidar una sociedad patrimonial entre compañeros permanentes mediante conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una sociedad patrimonial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el patrimonio que se forma entre compañeros permanentes durante la convivencia y que puede liquidarse cuando finaliza la unión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede liquidarse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los compañeros permanentes pueden llegar a acuerdos sobre la distribución de bienes mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede servir como soporte para formalizar acuerdos patrimoniales.",
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

      <LiquidacionSociedadPatrimonialContent />
    </>
  );
}
