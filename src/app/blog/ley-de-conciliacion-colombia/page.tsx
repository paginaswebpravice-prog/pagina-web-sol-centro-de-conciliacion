import type { Metadata } from "next";
import LeyConciliacionContent from "./LeyConciliacionContent";

export const metadata: Metadata = {
  title: "Ley de conciliación en Colombia | Marco normativo actualizado",
  description:
    "Conoce la ley de conciliación en Colombia, su marco normativo, cómo funciona la conciliación extrajudicial y su validez jurídica.",
  keywords: [
    "ley de conciliación Colombia",
    "conciliación extrajudicial Colombia",
    "normativa conciliación Colombia",
    "ley 640 de 2001 conciliación",
    "mecanismos alternativos de solución de conflictos Colombia",
    "MASC Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
  },
  openGraph: {
    title: "Ley de conciliación en Colombia",
    description:
      "Marco normativo de la conciliación extrajudicial en Colombia explicado de forma clara.",
    url: "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ley de conciliación en Colombia",
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
      "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué regula la ley de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Regula la conciliación como mecanismo alternativo de solución de conflictos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué norma regula la conciliación extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Principalmente la Ley 640 de 2001 y otras normas del sistema MASC en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez jurídica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene efectos legales y puede ser exigible.",
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

      <LeyConciliacionContent />
    </>
  );
}
