import type { Metadata } from "next";
import RequisitosConciliacionContent from "./RequisitosConciliacionContent";

export const metadata: Metadata = {
  title: "Requisitos legales para conciliar en Colombia | Guía completa",
  description:
    "Conoce los requisitos legales para iniciar una conciliación en Colombia y qué condiciones deben cumplirse para resolver conflictos de forma extrajudicial.",
  keywords: [
    "requisitos para conciliar Colombia",
    "conciliación Colombia requisitos legales",
    "conciliación extrajudicial requisitos",
    "cómo iniciar conciliación Colombia",
    "MASC Colombia requisitos",
    "centro de conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",
  },
  openGraph: {
    title: "Requisitos legales para conciliar en Colombia",
    description:
      "Guía clara sobre los requisitos necesarios para iniciar una conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Requisitos legales para conciliar en Colombia",
    description:
      "Explicación de los requisitos legales para iniciar una conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona natural o jurídica con un conflicto susceptible de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se necesita abogado para conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre es obligatorio, pero puede ser recomendable según el caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conflictos civiles, laborales, familiares, inmobiliarios y de propiedad horizontal.",
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

      <RequisitosConciliacionContent />
    </>
  );
}
