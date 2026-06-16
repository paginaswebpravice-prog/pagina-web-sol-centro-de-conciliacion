import type { Metadata } from "next";
import MarcoLegalConciliacionContent from "./MarcoLegalConciliacionContent";

export const metadata: Metadata = {
  title: "Marco legal de la conciliación extrajudicial en Colombia | Normativa",
  description:
    "Conoce el marco legal de la conciliación extrajudicial en Colombia, sus normas principales y cómo está regulado este mecanismo alternativo de solución de conflictos.",
  keywords: [
    "marco legal conciliación Colombia",
    "conciliación extrajudicial Colombia",
    "Ley 2220 de 2022 conciliación",
    "MASC Colombia normativa",
    "ley conciliación Colombia",
    "normas conciliación extrajudicial",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",
  },
  openGraph: {
    title: "Marco legal de la conciliación extrajudicial en Colombia",
    description:
      "Normas y regulación de la conciliación extrajudicial en Colombia como mecanismo alternativo de solución de conflictos.",
    url: "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marco legal de la conciliación extrajudicial en Colombia",
    description:
      "Explicación del marco normativo de la conciliación extrajudicial en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/marco-legal-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué regula la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Está regulada por la Constitución, la Ley 2220 de 2022 y otras normas del sistema de justicia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En general es voluntaria, aunque en algunos casos puede ser requisito de procedibilidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tiene fuerza de cosa juzgada y presta mérito ejecutivo cuando cumple los requisitos legales.",
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

      <MarcoLegalConciliacionContent />
    </>
  );
}
