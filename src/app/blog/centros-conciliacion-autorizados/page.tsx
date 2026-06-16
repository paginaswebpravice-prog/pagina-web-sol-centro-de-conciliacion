import type { Metadata } from "next";
import CentrosConciliacionContent from "./CentrosConciliacionContent";

export const metadata: Metadata = {
  title: "Centros de conciliación autorizados en Colombia | Guía completa",
  description:
    "Conoce qué son los centros de conciliación autorizados en Colombia, quién los regula y quiénes pueden prestar este servicio legalmente.",
  keywords: [
    "centros de conciliación Colombia",
    "conciliación autorizada Colombia",
    "Ministerio de Justicia conciliación",
    "quién puede conciliar Colombia",
    "centros de conciliación autorizados ley",
    "MASC Colombia centros conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
  },
  openGraph: {
    title: "Centros de conciliación autorizados en Colombia",
    description:
      "Quiénes pueden prestar servicios de conciliación legalmente en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
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
      "Explicación de los centros autorizados para prestar servicios de conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién autoriza los centros de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El Ministerio de Justicia y del Derecho de Colombia es la entidad encargada de autorizar los centros de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede ser conciliador?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Personas capacitadas y acreditadas por el Ministerio de Justicia pueden actuar como conciliadores.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los centros de conciliación son públicos o privados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden ser públicos o privados, siempre que estén autorizados por la ley.",
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

      <CentrosConciliacionContent />
    </>
  );
}
