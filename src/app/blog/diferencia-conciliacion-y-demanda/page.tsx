import type { Metadata } from "next";
import DiferenciaConciliacionYDemandaContent from "./DiferenciaConciliacionYDemandaContent";

export const metadata: Metadata = {
  title:
    "Diferencia entre conciliación y demanda judicial en Colombia | Guía completa 2026",

  description:
    "Descubre la diferencia entre conciliación y demanda judicial en Colombia. Aprende cuándo conviene conciliar, cuándo demandar y qué opción puede ayudarte a resolver tu conflicto de forma más eficiente.",

  keywords: [
    "diferencia entre conciliación y demanda",
    "conciliación o demanda judicial",
    "qué es mejor conciliación o demanda",
    "conciliación en Colombia",
    "conciliación en Bogotá",
    "demanda judicial Colombia",
    "proceso judicial Colombia",
    "conciliación extrajudicial Colombia",
    "conciliación vs juicio",
    "demanda o conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/diferencia-conciliacion-y-demanda",
  },

  openGraph: {
    title: "Diferencia entre conciliación y demanda judicial en Colombia",
    description:
      "Aprende cuándo conviene acudir a conciliación y cuándo es necesario iniciar una demanda judicial en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/diferencia-conciliacion-y-demanda",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: "Diferencia entre conciliación y demanda judicial en Colombia",

    description:
      "Conoce las diferencias entre conciliación y demanda judicial en Colombia y descubre cuál alternativa puede ser más adecuada para resolver tu conflicto.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    articleSection: "Conciliación Extrajudicial",

    keywords:
      "diferencia entre conciliación y demanda, conciliación en Colombia, demanda judicial Colombia, conciliación en Bogotá",

    about: [
      "Conciliación Extrajudicial",
      "Resolución de conflictos",
      "Demanda judicial",
      "Derecho civil",
      "Conciliación en Colombia",
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/diferencia-conciliacion-y-demanda",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es más rápido, una conciliación o una demanda judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación suele ser considerablemente más rápida que una demanda judicial, ya que busca alcanzar acuerdos voluntarios entre las partes sin necesidad de un proceso ante un juez.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿Puedo demandar después de intentar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Si no se alcanza un acuerdo durante la conciliación, las partes pueden acudir posteriormente a los mecanismos judiciales correspondientes.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria antes de demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En diversos asuntos civiles, comerciales y familiares en Colombia, la conciliación extrajudicial constituye un requisito previo antes de presentar una demanda.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué es más económico: conciliar o demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente la conciliación implica menores costos que un proceso judicial debido a que reduce trámites, tiempo y gastos asociados a un litigio.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación evita un juicio?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes logran un acuerdo conciliatorio válido, normalmente se evita la necesidad de iniciar un proceso judicial.",
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

      <DiferenciaConciliacionYDemandaContent />
    </>
  );
}
