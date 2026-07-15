import type { Metadata } from "next";
import TituloEjecutivoConciliacionContent from "./TituloEjecutivoConciliacionContent";

export const metadata: Metadata = {
  title:
    "Título Ejecutivo en la Conciliación en Colombia: ¿Cómo Ejecutar un Acta de Conciliación? | Guía 2026",

  description:
    "Descubre cuándo un acta de conciliación presta mérito ejecutivo en Colombia, qué significa jurídicamente, cómo exigir su cumplimiento ante un juez y qué hacer si una de las partes incumple el acuerdo.",

  keywords: [
    "título ejecutivo conciliación Colombia",
    "acta de conciliación presta mérito ejecutivo",
    "acta de conciliación título ejecutivo",
    "cómo ejecutar un acta de conciliación",
    "proceso ejecutivo por conciliación",
    "incumplimiento acta de conciliación",
    "demanda ejecutiva conciliación",
    "mérito ejecutivo conciliación",
    "cumplimiento acta de conciliación",
    "ejecutar acuerdo conciliatorio",
    "conciliación Colombia",
    "centro de conciliación",
    "conciliación civil Colombia",
    "conciliación comercial Colombia",
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
    title:
      "Título Ejecutivo en la Conciliación: ¿Cómo Hacer Cumplir un Acta de Conciliación en Colombia?",

    description:
      "Aprende cuándo un acta de conciliación tiene mérito ejecutivo, cómo reclamar judicialmente un incumplimiento y qué efectos legales produce el acuerdo firmado.",

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

    headline:
      "Título Ejecutivo en la Conciliación en Colombia: Cómo Ejecutar un Acta de Conciliación",

    description:
      "Guía completa sobre el mérito ejecutivo del acta de conciliación en Colombia, los requisitos para exigir su cumplimiento y el proceso ejecutivo cuando existe incumplimiento.",

    keywords: [
      "Título ejecutivo",
      "Acta de conciliación",
      "Mérito ejecutivo",
      "Proceso ejecutivo",
      "Conciliación Colombia",
    ],

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
        name: "¿Un acta de conciliación presta mérito ejecutivo en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando el acta contiene obligaciones claras, expresas y exigibles, presta mérito ejecutivo y permite acudir directamente a un proceso ejecutivo para reclamar el cumplimiento del acuerdo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué significa que un acta tenga título ejecutivo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Significa que el documento permite exigir judicialmente el cumplimiento de la obligación sin necesidad de iniciar primero un proceso para demostrar que la obligación existe.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ocurre si una persona incumple el acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La parte afectada puede presentar una demanda ejecutiva utilizando el acta de conciliación como título ejecutivo para solicitar el cumplimiento de las obligaciones pactadas.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué requisitos debe cumplir un acta de conciliación para ser ejecutable?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Debe contener obligaciones claras, expresas, exigibles y haber sido suscrita válidamente dentro de un procedimiento de conciliación autorizado por la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿Todas las conciliaciones tienen fuerza ejecutiva?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Siempre que el acuerdo cumpla los requisitos legales y establezca obligaciones exigibles, el acta puede servir como título ejecutivo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Se necesita abogado para iniciar el proceso ejecutivo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso y de la cuantía, puede ser necesaria la representación de un abogado. Es recomendable recibir asesoría jurídica antes de iniciar el proceso.",
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
