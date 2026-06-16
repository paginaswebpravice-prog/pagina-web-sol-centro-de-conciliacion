import type { Metadata } from "next";
import RequisitosConciliarBogotaContent from "./RequisitosConciliarBogotaContent";

export const metadata: Metadata = {
  title: "Requisitos para conciliar en Bogotá | Colombia",
  description:
    "Conoce los requisitos para conciliar en Bogotá, documentos necesarios, pasos del proceso y condiciones para iniciar una conciliación en Colombia.",
  keywords: [
    "requisitos para conciliar Bogotá",
    "documentos conciliación Colombia",
    "cómo conciliar en Bogotá",
    "MASC Colombia requisitos",
    "conciliación extrajudicial requisitos",
    "pasos conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
  },
  openGraph: {
    title: "Requisitos para conciliar en Bogotá",
    description:
      "Documentos, pasos y condiciones para iniciar una conciliación en Bogotá, Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Requisitos para conciliar en Bogotá",
    description:
      "Guía sobre requisitos y documentación necesaria para iniciar una conciliación en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué documentos necesito para conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso, pero normalmente se requiere documento de identidad y soportes del conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio llevar abogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es obligatorio, pero puede ser recomendable en casos complejos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona natural o jurídica con un conflicto susceptible de conciliación.",
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

      <RequisitosConciliarBogotaContent />
    </>
  );
}
