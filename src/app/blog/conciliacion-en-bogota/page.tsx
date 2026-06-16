import type { Metadata } from "next";
import ConciliacionBogotaContent from "./ConciliacionBogotaContent";

export const metadata: Metadata = {
  title: "Conciliación en Bogotá: guía completa | Colombia",
  description:
    "Conoce cómo funciona la conciliación en Bogotá, dónde realizarla, requisitos, beneficios y cómo resolver conflictos legales sin ir a juicio en Colombia.",
  keywords: [
    "conciliación en Bogotá",
    "conciliación Bogotá Colombia",
    "centros de conciliación Bogotá",
    "cómo conciliar en Bogotá",
    "MASC Bogotá",
    "conciliación extrajudicial Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",
  },
  openGraph: {
    title: "Conciliación en Bogotá: guía completa",
    description:
      "Todo lo que debes saber para conciliar en Bogotá y resolver conflictos sin proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación en Bogotá: guía completa",
    description:
      "Guía sobre cómo funciona la conciliación en Bogotá dentro de los MASC en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Dónde se puede conciliar en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En centros de conciliación autorizados, notarías y entidades habilitadas por el Ministerio de Justicia en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación en Bogotá es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos casos puede ser requisito de procedibilidad antes de acudir a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente puede resolverse en una sola audiencia si las partes llegan a un acuerdo.",
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

      <ConciliacionBogotaContent />
    </>
  );
}
