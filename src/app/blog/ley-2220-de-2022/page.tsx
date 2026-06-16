import type { Metadata } from "next";
import Ley2220Content from "./Ley2220Content";

export const metadata: Metadata = {
  title: "Ley 2220 de 2022 explicada | Conciliación en Colombia",
  description:
    "Conoce los aspectos más importantes de la Ley 2220 de 2022 en Colombia y cómo regula la conciliación y los mecanismos alternativos de solución de conflictos.",
  keywords: [
    "Ley 2220 de 2022 Colombia",
    "conciliación Colombia ley 2220",
    "MASC Colombia 2022",
    "mecanismos alternativos de solución de conflictos",
    "conciliación extrajudicial Colombia",
    "normativa conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/ley-2220-de-2022",
  },
  openGraph: {
    title: "Ley 2220 de 2022 explicada",
    description:
      "Resumen claro de la Ley 2220 de 2022 y su impacto en la conciliación en Colombia.",
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
    headline: "Ley 2220 de 2022 explicada",
    description:
      "Explicación de la Ley 2220 de 2022 y su impacto en los mecanismos alternativos de solución de conflictos en Colombia.",
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
        name: "¿Qué regula la Ley 2220 de 2022?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regula el sistema de conciliación y mecanismos alternativos de solución de conflictos en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué cambia con la Ley 2220 de 2022?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fortalece y moderniza el sistema de conciliación y MASC en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatoria la conciliación según esta ley?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso, en algunos conflictos es requisito previo antes de acudir a la justicia.",
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
