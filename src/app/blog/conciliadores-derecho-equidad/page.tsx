import type { Metadata } from "next";
import ConciliadoresDerechoEquidadContent from "./ConciliadoresDerechoEquidadContent";

export const metadata: Metadata = {
  title:
    "Conciliadores en derecho y en equidad en Colombia | Diferencias clave",
  description:
    "Conoce las diferencias entre conciliadores en derecho y en equidad en Colombia, sus funciones, formación y cuándo se utiliza cada uno.",
  keywords: [
    "conciliador en derecho Colombia",
    "conciliador en equidad Colombia",
    "diferencias conciliadores Colombia",
    "MASC Colombia conciliación",
    "tipos de conciliadores",
    "conciliación en derecho vs equidad",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliadores-derecho-equidad",
  },
  openGraph: {
    title: "Conciliadores en derecho y en equidad en Colombia",
    description:
      "Diferencias entre conciliadores en derecho y en equidad dentro del sistema de conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliadores-derecho-equidad",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliadores en derecho y en equidad en Colombia",
    description:
      "Explicación de las diferencias entre conciliadores en derecho y en equidad en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliadores-derecho-equidad",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre conciliador en derecho y en equidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador en derecho aplica normas jurídicas, mientras que el de equidad busca soluciones justas basadas en el sentido común.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es más formal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador en derecho tiene un enfoque más formal y jurídico.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ambos tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, ambos pueden generar acuerdos con validez jurídica si están debidamente autorizados.",
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

      <ConciliadoresDerechoEquidadContent />
    </>
  );
}
