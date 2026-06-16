import type { Metadata } from "next";
import ComoSolicitarConciliacionColombiaContent from "./ComoSolicitarConciliacionColombiaContent";

export const metadata: Metadata = {
  title: "Cómo solicitar una conciliación en Colombia | Guía paso a paso",
  description:
    "Aprende cómo solicitar una conciliación en Colombia, dónde hacerlo, requisitos, pasos del proceso y qué esperar en la audiencia de conciliación.",
  keywords: [
    "cómo solicitar conciliación Colombia",
    "conciliación en Colombia pasos",
    "solicitud conciliación Bogotá",
    "MASC Colombia trámite",
    "audiencia de conciliación Colombia",
    "centros de conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
  },
  openGraph: {
    title: "Cómo solicitar una conciliación en Colombia",
    description:
      "Guía práctica para iniciar una conciliación en Colombia paso a paso.",
    url: "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cómo solicitar una conciliación en Colombia",
    description:
      "Guía paso a paso para solicitar una conciliación en Colombia y resolver conflictos sin proceso judicial.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde se solicita una conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En centros de conciliación autorizados, notarías o consultorios jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué necesito para iniciar el trámite?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Documento de identidad, datos de la otra parte y soportes del conflicto si existen.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede resolverse en pocos días o en una sola audiencia dependiendo del caso.",
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

      <ComoSolicitarConciliacionColombiaContent />
    </>
  );
}
