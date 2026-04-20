import type { Metadata } from "next";
import QueEsLaConciliacionContent from "./QueEsLaConciliacionContent";

export const metadata: Metadata = {
  title: "¿Qué es la conciliación en Colombia y para qué sirve?",
  description:
    "Conoce qué es la conciliación en Colombia, cómo funciona en Bogotá y para qué sirve la conciliación extrajudicial.",
  keywords: [
    "conciliación en Colombia",
    "conciliación en Bogotá",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
  },
  openGraph: {
    title: "¿Qué es la conciliación en Colombia y para qué sirve?",
    description:
      "Aprende cómo funciona la conciliación en Colombia y Bogotá, sus beneficios y cómo iniciar el proceso.",
    url: "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la conciliación en Colombia y para qué sirve?",
    description:
      "Conoce qué es la conciliación en Colombia, cómo funciona en Bogotá y para qué sirve la conciliación extrajudicial.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación en Colombia es un mecanismo de solución de conflictos donde las partes llegan a un acuerdo con la ayuda de un conciliador sin necesidad de un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos procesos civiles, comerciales y de familia en Colombia, la conciliación extrajudicial es un requisito antes de presentar una demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación tiene validez legal y presta mérito ejecutivo.",
        },
      },
    ],
  };

  return (
    <>
      {/* ✅ SCHEMA EN SEO (como tú lo vienes trabajando) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <QueEsLaConciliacionContent />
    </>
  );
}
