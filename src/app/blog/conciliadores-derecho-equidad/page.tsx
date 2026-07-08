import type { Metadata } from "next";
import ConciliadoresDerechoEquidadContent from "./ConciliadoresDerechoEquidadContent";

export const metadata: Metadata = {
  title:
    "Conciliadores en derecho y en equidad en Colombia: diferencias, funciones y cuál elegir (2026)",
  description:
    "Conoce las diferencias entre un conciliador en derecho y un conciliador en equidad en Colombia. Descubre sus funciones, competencias, cuándo acudir a cada uno y cuál puede ayudarte según tu caso.",
  keywords: [
    "conciliador en derecho",
    "conciliador en equidad",
    "conciliadores en Colombia",
    "diferencia entre conciliador en derecho y en equidad",
    "qué hace un conciliador en derecho",
    "qué hace un conciliador en equidad",
    "funciones del conciliador",
    "conciliación en derecho Colombia",
    "conciliación en equidad Colombia",
    "mecanismos alternativos de solución de conflictos",
    "centro de conciliación",
    "conciliación Colombia",
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
    title:
      "Conciliadores en derecho y en equidad en Colombia | Diferencias y funciones",
    description:
      "Aprende cuándo interviene un conciliador en derecho, cuándo participa un conciliador en equidad y cuáles son las principales diferencias entre ambos.",
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
    headline:
      "Conciliadores en derecho y en equidad en Colombia: diferencias, funciones y cuándo acudir a cada uno",
    description:
      "Guía completa sobre las diferencias entre conciliadores en derecho y conciliadores en equidad en Colombia, sus funciones, requisitos, competencias y casos en los que interviene cada uno.",
    keywords: [
      "conciliador en derecho",
      "conciliador en equidad",
      "conciliación en Colombia",
      "MASC",
      "centros de conciliación",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Conciliador en derecho",
      },
      {
        "@type": "Thing",
        name: "Conciliador en equidad",
      },
      {
        "@type": "Thing",
        name: "Conciliación en Colombia",
      },
    ],
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
        name: "¿Cuál es la diferencia entre un conciliador en derecho y un conciliador en equidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador en derecho actúa con fundamento en las normas jurídicas vigentes y generalmente es un abogado acreditado. El conciliador en equidad busca facilitar acuerdos apoyándose en criterios de justicia, convivencia y equidad dentro de la comunidad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos logrados con un conciliador en equidad tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Siempre que el procedimiento se realice conforme a la legislación colombiana y dentro de las competencias establecidas, los acuerdos pueden producir efectos jurídicos y ser exigibles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo debo acudir a un conciliador en derecho?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente cuando el conflicto involucra asuntos civiles, comerciales, familiares, laborales u otras materias que requieren un análisis jurídico especializado y la intervención de un centro de conciliación autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos puede resolver un conciliador en equidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Principalmente conflictos comunitarios, vecinales o de convivencia, siempre que sean conciliables y estén dentro de las competencias establecidas por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿El conciliador puede imponer una decisión?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La función del conciliador consiste en facilitar el diálogo y promover acuerdos voluntarios entre las partes. La decisión final depende exclusivamente de quienes participan en la conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál tipo de conciliador es mejor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No existe uno mejor que otro. La elección depende de la naturaleza del conflicto, de las normas aplicables y del mecanismo de conciliación más adecuado para cada caso.",
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
