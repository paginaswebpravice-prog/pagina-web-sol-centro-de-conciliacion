import type { Metadata } from "next";
import CentrosConciliacionColombiaContent from "./CentrosConciliacionColombiaContent";

export const metadata: Metadata = {
  title: "Centros de conciliación autorizados en Colombia | Guía",
  description:
    "Conoce qué son los centros de conciliación autorizados en Colombia, quiénes pueden operarlos y cómo acceder a sus servicios legales.",
  keywords: [
    "centros de conciliación Colombia",
    "conciliación autorizada Colombia",
    "MASC Colombia centros",
    "notarías conciliación Colombia",
    "consultorios jurídicos conciliación",
    "conciliación extrajudicial Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",
  },
  openGraph: {
    title: "Centros de conciliación autorizados en Colombia",
    description:
      "Guía sobre los centros autorizados para conciliación en Colombia y cómo funcionan.",
    url: "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Centros de conciliación autorizados en Colombia",
    description:
      "Explicación sobre los centros de conciliación autorizados y su función en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una entidad autorizada para facilitar la solución de conflictos mediante conciliación extrajudicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede operar un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Instituciones autorizadas como cámaras de comercio, notarías y entidades educativas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Son obligatorios los centros de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son necesarios cuando la ley exige conciliación previa antes de un proceso judicial.",
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

      <CentrosConciliacionColombiaContent />
    </>
  );
}
