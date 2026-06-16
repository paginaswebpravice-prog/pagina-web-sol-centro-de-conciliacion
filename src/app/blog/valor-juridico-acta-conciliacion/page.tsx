import type { Metadata } from "next";
import ValorJuridicoActaConciliacionContent from "./ValorJuridicoActaConciliacionContent";

export const metadata: Metadata = {
  title:
    "Valor jurídico del acta de conciliación en Colombia | Explicación clara",
  description:
    "Conoce qué valor jurídico tiene un acta de conciliación en Colombia, su fuerza legal, efectos y cuándo es exigible ante la ley.",
  keywords: [
    "acta de conciliación valor jurídico",
    "fuerza legal acta de conciliación Colombia",
    "conciliación Colombia efectos legales",
    "acta de conciliación es obligatoria",
    "cosa juzgada conciliación Colombia",
    "MASC Colombia acta conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",
  },
  openGraph: {
    title: "Valor jurídico del acta de conciliación en Colombia",
    description:
      "Explicación clara sobre la fuerza legal del acta de conciliación y sus efectos jurídicos.",
    url: "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Valor jurídico del acta de conciliación en Colombia",
    description:
      "Explicación del valor jurídico y efectos legales del acta de conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/valor-juridico-acta-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene valor legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, tiene plena validez jurídica en Colombia y es obligatoria para las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación es como una sentencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiene efectos similares a una sentencia judicial cuando hay acuerdo entre las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede demandar después de una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No sobre lo ya conciliado, ya que hace tránsito a cosa juzgada.",
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

      <ValorJuridicoActaConciliacionContent />
    </>
  );
}
