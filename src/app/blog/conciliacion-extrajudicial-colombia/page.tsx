import type { Metadata } from "next";
import ConciliacionExtrajudicialColombiaContent from "./ConciliacionExtrajudicialColombiaContent";

export const metadata: Metadata = {
  title: "Conciliación extrajudicial en Colombia | Guía completa",
  description:
    "Conoce qué es la conciliación extrajudicial en Colombia, cómo funciona, en qué casos aplica y su importancia dentro de los mecanismos alternativos de solución de conflictos.",
  keywords: [
    "conciliación extrajudicial Colombia",
    "MASC Colombia",
    "conciliación en derecho Colombia",
    "centros de conciliación Colombia",
    "solución de conflictos Colombia",
    "acta de conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",
  },
  openGraph: {
    title: "Conciliación extrajudicial en Colombia",
    description:
      "Guía completa sobre la conciliación extrajudicial como mecanismo de solución de conflictos en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación extrajudicial en Colombia",
    description:
      "Explicación del mecanismo de conciliación extrajudicial en Colombia y su funcionamiento.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo alternativo de solución de conflictos que permite resolver disputas sin acudir a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatoria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos casos sí es requisito de procedibilidad antes de presentar una demanda judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación tiene efectos legales y puede prestarse como título ejecutivo.",
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

      <ConciliacionExtrajudicialColombiaContent />
    </>
  );
}
