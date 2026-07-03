import type { Metadata } from "next";
import ArbitrajeVsConciliacionContent from "./ArbitrajeVsConciliacionContent";

export const metadata: Metadata = {
  title:
    "Arbitraje o conciliación en Colombia: diferencias, ventajas y cuál elegir (Guía 2026)",
  description:
    "Descubre las diferencias entre arbitraje y conciliación en Colombia, cuándo utilizar cada mecanismo, costos, ventajas, desventajas, tiempos de resolución y cuál es la mejor opción según tu caso.",
  keywords: [
    "arbitraje vs conciliación Colombia",
    "diferencia arbitraje conciliación",
    "MASC Colombia",
    "arbitraje Colombia qué es",
    "conciliación Colombia qué es",
    "mecanismos alternativos Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/arbitraje-vs-conciliacion",
  },
  openGraph: {
    title: "Arbitraje vs conciliación en Colombia",
    description:
      "Diferencias entre arbitraje y conciliación dentro de los mecanismos alternativos de solución de conflictos en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/arbitraje-vs-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Arbitraje vs conciliación en Colombia",
    description:
      "Comparación entre arbitraje y conciliación como mecanismos alternativos de solución de conflictos en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/arbitraje-vs-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre arbitraje y conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la conciliación las partes llegan a un acuerdo voluntario, mientras que en el arbitraje un tercero toma una decisión obligatoria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es más rápido?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ambos son más rápidos que un proceso judicial, pero la conciliación suele ser más flexible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál tiene más fuerza legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El arbitraje tiene una decisión obligatoria similar a una sentencia, mientras que la conciliación depende del acuerdo entre las partes.",
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

      <ArbitrajeVsConciliacionContent />
    </>
  );
}
