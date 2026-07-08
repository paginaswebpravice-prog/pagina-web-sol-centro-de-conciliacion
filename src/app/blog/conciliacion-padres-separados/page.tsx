import type { Metadata } from "next";
import ConciliacionPadresSeparadosContent from "./ConciliacionPadresSeparadosContent";

export const metadata: Metadata = {
  title:
    "Conciliación entre padres separados en Colombia: custodia, visitas y cuota alimentaria | Guía 2026",

  description:
    "Aprende cómo funciona la conciliación entre padres separados en Colombia para acordar custodia, régimen de visitas, cuota alimentaria y demás responsabilidades frente a los hijos sin acudir inmediatamente a un proceso judicial.",

  keywords: [
    "conciliación padres separados",
    "conciliación familiar Colombia",
    "conciliación custodia hijos",
    "conciliación régimen de visitas",
    "conciliación cuota alimentaria",
    "acuerdo entre padres separados",
    "custodia compartida Colombia",
    "visitas hijos Colombia",
    "alimentos hijos conciliación",
    "conciliación familiar Bogotá",
    "acta de conciliación familiar",
    "conflictos familiares Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",
  },

  openGraph: {
    title:
      "Conciliación entre padres separados: custodia, visitas y alimentos en Colombia",

    description:
      "Conoce cómo resolver mediante conciliación conflictos relacionados con hijos, custodia, visitas, cuota alimentaria y demás acuerdos familiares en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",

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
      "Conciliación entre padres separados en Colombia: guía sobre custodia, visitas y cuota alimentaria",

    description:
      "Descubre cómo la conciliación familiar permite a los padres separados llegar a acuerdos sobre custodia, régimen de visitas, cuota alimentaria, responsabilidades compartidas y demás asuntos relacionados con el bienestar de los hijos.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué asuntos pueden acordar los padres separados mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Los padres pueden llegar a acuerdos relacionados con la custodia, cuidado personal, régimen de visitas, cuota alimentaria, gastos extraordinarios, vacaciones, educación, salud y demás responsabilidades respecto de sus hijos.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación entre padres separados tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando el acuerdo se celebra ante un centro de conciliación autorizado, queda consignado en un acta de conciliación que produce efectos jurídicos obligatorios para ambas partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede modificar un acuerdo de conciliación posteriormente?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Si cambian las circunstancias económicas de los padres o las necesidades de los hijos, puede realizarse una nueva conciliación para actualizar los acuerdos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es posible conciliar únicamente la cuota alimentaria?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los padres pueden solicitar una conciliación únicamente para fijar, modificar o revisar la cuota alimentaria sin necesidad de discutir otros aspectos familiares.",
        },
      },

      {
        "@type": "Question",

        name: "¿También pueden acordarse las visitas de los hijos?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Uno de los asuntos más frecuentes es definir el régimen de visitas, horarios, vacaciones, fechas especiales y demás aspectos relacionados con el contacto entre padres e hijos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si uno de los padres incumple el acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene fuerza legal, por lo que su incumplimiento puede dar lugar a las acciones previstas por la ley para exigir su cumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede realizarse una conciliación familiar de manera virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales, permitiendo que los padres participen incluso cuando viven en ciudades diferentes o en el exterior.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es mejor intentar una conciliación antes de iniciar un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos sí. La conciliación permite alcanzar acuerdos en menos tiempo, reducir costos, disminuir el desgaste emocional y proteger el bienestar de los hijos antes de acudir a un juez.",
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

      <ConciliacionPadresSeparadosContent />
    </>
  );
}
