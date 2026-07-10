import type { Metadata } from "next";
import Ley2220Content from "./Ley2220Content";

export const metadata: Metadata = {
  title:
    "Ley 2220 de 2022: Qué Cambió en la Conciliación en Colombia (Guía 2026)",

  description:
    "Conoce qué establece la Ley 2220 de 2022, cuáles fueron los principales cambios en la conciliación en Colombia, cuándo aplica el requisito de procedibilidad y cómo funciona actualmente.",

  keywords: [
    "Ley 2220 de 2022",
    "Ley 2220 de 2022 explicada",
    "qué dice la Ley 2220",
    "cambios Ley 2220",
    "Ley 2220 conciliación",
    "Ley 2220 Colombia",
    "Ley 2220 PDF",
    "conciliación extrajudicial",
    "centro de conciliación",
    "MASC Colombia",
    "Sistema Nacional de Conciliación",
    "requisito de procedibilidad",
    "acta de conciliación",
    "conciliación virtual",
    "Ley 640 y Ley 2220",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/ley-2220-de-2022",
  },

  openGraph: {
    title: "Ley 2220 de 2022: Cambios en la Conciliación en Colombia",

    description:
      "Descubre qué cambió con la Ley 2220 de 2022, cómo funciona actualmente la conciliación en Colombia y cuándo es obligatoria.",

    url: "https://solcentrodeconciliacion.com/blog/ley-2220-de-2022",

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
      "Ley 2220 de 2022: Guía Completa sobre la Nueva Conciliación en Colombia",

    description:
      "Explicación completa de la Ley 2220 de 2022, sus principales cambios, el Sistema Nacional de Conciliación, los mecanismos alternativos de solución de conflictos y el requisito de procedibilidad.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/ley-2220-de-2022",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la Ley 2220 de 2022?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La Ley 2220 de 2022 regula el Sistema Nacional de Conciliación y fortalece los mecanismos alternativos de solución de conflictos en Colombia, promoviendo acuerdos rápidos y el acceso efectivo a la justicia.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué cambió con la Ley 2220 de 2022?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La ley modernizó el sistema de conciliación, fortaleció el uso de medios virtuales, actualizó las funciones de los centros de conciliación y consolidó el marco legal de los MASC en Colombia.",
        },
      },

      {
        "@type": "Question",
        name: "¿La Ley 2220 reemplazó la Ley 640 de 2001?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La Ley 2220 de 2022 actualiza y reemplaza gran parte del régimen anterior sobre conciliación, incorporando nuevas reglas para el Sistema Nacional de Conciliación y adaptándolo a las necesidades actuales.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuándo es obligatoria la conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del tipo de proceso. En algunos asuntos civiles, de familia y comerciales la conciliación constituye un requisito de procedibilidad antes de presentar una demanda.",
        },
      },

      {
        "@type": "Question",
        name: "¿Se puede realizar una conciliación virtual con la Ley 2220?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La Ley 2220 reconoce el uso de herramientas tecnológicas para desarrollar audiencias virtuales, siempre que se cumplan los requisitos legales correspondientes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene plenos efectos jurídicos y presta mérito ejecutivo, por lo que puede exigirse judicialmente si alguna de las partes incumple lo acordado.",
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

      <Ley2220Content />
    </>
  );
}
