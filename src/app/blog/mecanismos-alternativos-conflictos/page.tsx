import type { Metadata } from "next";
import MASCContent from "./MASCContent";

export const metadata: Metadata = {
  title:
    "Mecanismos alternativos de solución de conflictos en Colombia | Guía completa",
  description:
    "Conoce qué son los MASC en Colombia, cómo funcionan y cuáles son las alternativas al proceso judicial como la conciliación, mediación y arbitraje.",
  keywords: [
    "MASC Colombia",
    "mecanismos alternativos de solución de conflictos",
    "conciliación Colombia",
    "mediación Colombia",
    "arbitraje Colombia",
    "resolver conflictos sin juicio Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/mecanismos-alternativos-conflictos",
  },
  openGraph: {
    title: "Mecanismos alternativos de solución de conflictos en Colombia",
    description:
      "Guía completa sobre conciliación, mediación y arbitraje como alternativas al proceso judicial en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/mecanismos-alternativos-conflictos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mecanismos alternativos de solución de conflictos en Colombia",
    description:
      "Explicación de los MASC en Colombia y sus principales herramientas como conciliación, mediación y arbitraje.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/mecanismos-alternativos-conflictos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los MASC en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son mecanismos alternativos al proceso judicial para resolver conflictos de forma pacífica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los principales MASC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Conciliación, mediación y arbitraje.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los MASC tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, dependiendo del mecanismo utilizado pueden tener efectos jurídicos obligatorios.",
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

      <MASCContent />
    </>
  );
}
