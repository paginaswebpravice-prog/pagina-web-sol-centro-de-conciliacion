import type { Metadata } from "next";
import DiferenciaConciliacionYDemandaContent from "./DiferenciaConciliacionYDemandaContent";

export const metadata: Metadata = {
  title:
    "Diferencia entre conciliación y demanda judicial en Colombia: ¿Cuál conviene más en 2026?",

  description:
    "Descubre las diferencias entre la conciliación y la demanda judicial en Colombia. Conoce cuál es más rápida, económica y cuándo la conciliación es obligatoria antes de demandar.",

  keywords: [
    "diferencia entre conciliación y demanda",
    "conciliación o demanda judicial",
    "qué es mejor conciliación o demanda",
    "conciliación extrajudicial Colombia",
    "demanda judicial Colombia",
    "cuándo es obligatoria la conciliación",
    "ventajas de la conciliación",
    "conciliación vs juicio",
    "proceso judicial Colombia",
    "conciliación en Bogotá",
    "conciliación civil Colombia",
    "antes de demandar debo conciliar",
    "conciliación antes de demanda",
    "centro de conciliación Colombia",
    "cómo funciona la conciliación",
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
    title:
      "Diferencia entre conciliación y demanda judicial en Colombia: ¿Cuál elegir?",

    description:
      "Conoce cuándo conviene acudir a una conciliación, cuándo presentar una demanda judicial y cuáles son sus principales diferencias en Colombia.",

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

    headline:
      "Diferencia entre conciliación y demanda judicial en Colombia: ¿Cuál es la mejor opción?",

    description:
      "Guía completa sobre las diferencias entre conciliación y demanda judicial en Colombia, cuándo conviene cada una, sus ventajas, tiempos, costos y efectos legales.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    articleSection: [
      "Conciliación",
      "Conciliación Extrajudicial",
      "Resolución de Conflictos",
      "Derecho Civil",
    ],

    keywords: [
      "diferencia entre conciliación y demanda",
      "conciliación extrajudicial",
      "demanda judicial Colombia",
      "conciliación o demanda",
      "qué es mejor conciliar o demandar",
      "ventajas de la conciliación",
      "conciliación obligatoria",
      "proceso judicial",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Conciliación Extrajudicial",
      },
      {
        "@type": "Thing",
        name: "Demanda Judicial",
      },
      {
        "@type": "Thing",
        name: "Resolución de Conflictos",
      },
      {
        "@type": "Thing",
        name: "Mecanismos Alternativos de Solución de Conflictos",
      },
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

      {
        "@type": "Question",
        name: "¿Qué ventajas tiene la conciliación frente a un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación suele ser más rápida, económica y flexible que una demanda judicial. Además, permite que las partes construyan soluciones de común acuerdo y evita, en muchos casos, largos procesos ante los jueces.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene la misma validez que una sentencia judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene plenos efectos jurídicos y presta mérito ejecutivo en los casos previstos por la ley, por lo que las obligaciones pactadas pueden exigirse legalmente si alguna de las partes incumple.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Entre otros, pueden conciliarse conflictos relacionados con arrendamientos, cobro de deudas, incumplimientos contractuales, asuntos familiares, conflictos civiles, comerciales y reclamaciones por daños y perjuicios, siempre que la ley lo permita.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no se llega a un acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si no se alcanza un acuerdo, las partes conservan la posibilidad de acudir posteriormente a la jurisdicción competente para que un juez resuelva el conflicto mediante un proceso judicial.",
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
