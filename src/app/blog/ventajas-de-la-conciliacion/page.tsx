import type { Metadata } from "next";
import VentajasConciliacionContent from "./VentajasConciliacionContent";

export const metadata: Metadata = {
  title: "Ventajas de la conciliación frente a un proceso judicial en Colombia",
  description:
    "Conoce las ventajas de la conciliación frente a una demanda judicial en Colombia. Descubre cómo ahorrar tiempo, dinero y desgaste emocional al resolver conflictos.",
  keywords: [
    "ventajas de la conciliación",
    "conciliación en Colombia",
    "conciliación Bogotá",
    "proceso judicial Colombia",
    "beneficios de la conciliación",
    "conciliación extrajudicial",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",
  },
  openGraph: {
    title:
      "Ventajas de la conciliación frente a un proceso judicial en Colombia",
    description:
      "Descubre por qué la conciliación puede ser una alternativa más rápida, económica y efectiva que acudir a un proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",
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
      "Ventajas de la conciliación frente a un proceso judicial en Colombia",
    description:
      "Conoce las principales ventajas de la conciliación frente a una demanda judicial en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/ventajas-de-la-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación es más rápida que una demanda judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación suele resolverse en menos tiempo que un proceso judicial tradicional.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene plenos efectos jurídicos y puede exigirse judicialmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es más económica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente sí. La conciliación reduce costos asociados a procesos judiciales prolongados.",
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

      <VentajasConciliacionContent />
    </>
  );
}
