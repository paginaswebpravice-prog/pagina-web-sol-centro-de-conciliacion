import type { Metadata } from "next";
import CentrosConciliacionBogotaContent from "./CentrosConciliacionBogotaContent";

export const metadata: Metadata = {
  title: "Centros de conciliación en Bogotá | Dónde acudir en Colombia",
  description:
    "Conoce dónde acudir en Bogotá para iniciar un proceso de conciliación, qué tipos de centros existen y cómo funcionan los MASC en Colombia.",
  keywords: [
    "centros de conciliación Bogotá",
    "conciliación Bogotá Colombia",
    "dónde conciliar en Bogotá",
    "MASC Bogotá",
    "centros autorizados conciliación Colombia",
    "conciliación extrajudicial Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",
  },
  openGraph: {
    title: "Centros de conciliación en Bogotá",
    description:
      "Dónde acudir en Bogotá para iniciar una conciliación y resolver conflictos sin juicio en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Centros de conciliación en Bogotá",
    description:
      "Guía sobre dónde acudir en Bogotá para realizar conciliaciones extrajudiciales en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-de-conciliacion-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde están los centros de conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Bogotá existen centros autorizados por el Ministerio de Justicia, notarías y consultorios jurídicos de universidades.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede acudir a un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona natural o jurídica que tenga un conflicto susceptible de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene costo en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del centro; algunos son gratuitos y otros cobran tarifas según el tipo de caso.",
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

      <CentrosConciliacionBogotaContent />
    </>
  );
}
