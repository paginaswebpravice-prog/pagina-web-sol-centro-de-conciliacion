import type { Metadata } from "next";
import TituloEjecutivoConciliacionContent from "./TituloEjecutivoConciliacionContent";

export const metadata: Metadata = {
  title: "Título ejecutivo y conciliación en Colombia | Guía clara",
  description:
    "Conoce qué es el título ejecutivo en la conciliación en Colombia y cómo permite exigir el cumplimiento de acuerdos conciliatorios ante un juez.",
  keywords: [
    "título ejecutivo conciliación Colombia",
    "acta de conciliación título ejecutivo",
    "ejecución acta conciliación Colombia",
    "conciliación fuerza ejecutiva",
    "MASC Colombia título ejecutivo",
    "cómo ejecutar conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/titulo-ejecutivo-conciliacion",
  },
  openGraph: {
    title: "Título ejecutivo y conciliación en Colombia",
    description:
      "Explicación clara sobre cómo el acta de conciliación funciona como título ejecutivo en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/titulo-ejecutivo-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Título ejecutivo y conciliación en Colombia",
    description:
      "Explicación del título ejecutivo dentro del sistema de conciliación en Colombia y su ejecución judicial.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/titulo-ejecutivo-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Un acta de conciliación es un título ejecutivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación presta mérito ejecutivo en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué significa título ejecutivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento que permite exigir el cumplimiento de una obligación ante un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se ejecuta una conciliación incumplida?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se inicia un proceso ejecutivo ante un juez con el acta de conciliación.",
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

      <TituloEjecutivoConciliacionContent />
    </>
  );
}
