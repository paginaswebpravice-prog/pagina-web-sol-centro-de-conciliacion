import type { Metadata } from "next";
import MASCContent from "./MASCContent";

export const metadata: Metadata = {
  title:
    "Mecanismos Alternativos de Solución de Conflictos (MASC) en Colombia | Guía Completa 2026",

  description:
    "Descubre qué son los Mecanismos Alternativos de Solución de Conflictos (MASC), cuáles existen en Colombia, cómo funcionan, cuándo aplican y qué ventajas ofrecen frente a un proceso judicial.",

  keywords: [
    "MASC Colombia",
    "mecanismos alternativos de solución de conflictos",
    "mecanismos alternativos de solucion de conflictos colombia",
    "qué son los MASC",
    "conciliación extrajudicial",
    "mediación Colombia",
    "arbitraje Colombia",
    "amigable composición",
    "negociación conflictos",
    "resolver conflictos sin demanda",
    "resolver conflictos sin juicio",
    "Ley 2220 de 2022",
    "centro de conciliación",
    "justicia alternativa Colombia",
    "MASC ley 2220",
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
    title: "¿Qué son los MASC en Colombia? Tipos, ventajas y cómo funcionan",

    description:
      "Aprende qué son los Mecanismos Alternativos de Solución de Conflictos, cuándo utilizarlos, qué dice la Ley 2220 de 2022 y cómo resolver conflictos sin acudir a un juicio.",

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

    headline:
      "Mecanismos Alternativos de Solución de Conflictos (MASC) en Colombia: Guía Completa",

    description:
      "Guía completa sobre los Mecanismos Alternativos de Solución de Conflictos en Colombia. Conoce qué son los MASC, cuáles existen, cómo funcionan, qué dice la Ley 2220 de 2022 y cuándo pueden reemplazar un proceso judicial.",

    keywords: [
      "MASC",
      "conciliación",
      "mediación",
      "arbitraje",
      "amigable composición",
      "negociación",
      "Ley 2220",
      "justicia alternativa",
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
      "https://solcentrodeconciliacion.com/blog/mecanismos-alternativos-conflictos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los Mecanismos Alternativos de Solución de Conflictos (MASC)?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Los MASC son procedimientos reconocidos por la legislación colombiana que permiten resolver conflictos sin acudir directamente a un proceso judicial. Entre ellos se encuentran la conciliación, el arbitraje, la amigable composición, la negociación y otros mecanismos previstos por la ley.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuál es el MASC más utilizado en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación extrajudicial es uno de los mecanismos más utilizados debido a su rapidez, menores costos y porque el acta de conciliación puede tener fuerza de cosa juzgada y prestar mérito ejecutivo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ley regula los MASC en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Actualmente la Ley 2220 de 2022 fortalece y regula gran parte del sistema de Mecanismos Alternativos de Solución de Conflictos en Colombia.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuándo es recomendable acudir a un MASC?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando las partes desean resolver un conflicto de manera más rápida, económica y mediante acuerdos voluntarios antes de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",
        name: "¿Los acuerdos obtenidos mediante un MASC tienen validez jurídica?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo del mecanismo utilizado y del cumplimiento de los requisitos legales, los acuerdos pueden producir efectos jurídicos obligatorios y ser exigibles ante la ley.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://solcentrodeconciliacion.com",
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://solcentrodeconciliacion.com/blog",
      },

      {
        "@type": "ListItem",
        position: 3,
        name: "Mecanismos Alternativos de Solución de Conflictos",
        item: "https://solcentrodeconciliacion.com/blog/mecanismos-alternativos-conflictos",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <MASCContent />
    </>
  );
}
