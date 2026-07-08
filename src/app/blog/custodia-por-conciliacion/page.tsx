import type { Metadata } from "next";
import CustodiaPorConciliacionContent from "./CustodiaPorConciliacionContent";

export const metadata: Metadata = {
  title:
    "Custodia de Hijos por Conciliación en Colombia (2026) | Acuerdo de Custodia, Visitas y Cuidado Personal",

  description:
    "Conoce cómo acordar la custodia de hijos mediante conciliación en Colombia. Descubre cómo definir el cuidado personal, régimen de visitas, vacaciones, responsabilidades de los padres y qué hacer si no existe un acuerdo.",

  keywords: [
    "custodia por conciliación",
    "custodia de hijos Colombia",
    "cuidado personal del menor",
    "custodia compartida Colombia",
    "custodia hijos Bogotá",
    "conciliación familiar",
    "conciliación custodia hijos",
    "régimen de visitas",
    "visitas hijos conciliación",
    "acuerdo de custodia",
    "custodia menores",
    "conciliación familiar Bogotá",
    "custodia y visitas",
    "custodia de menores",
    "custodia de hijos por conciliación",
    "acta de conciliación custodia",
    "conciliación derecho de familia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",
  },

  openGraph: {
    title:
      "Custodia de Hijos por Conciliación en Colombia | Guía Completa 2026",

    description:
      "Aprende cómo acordar la custodia, cuidado personal y régimen de visitas mediante conciliación familiar en Colombia sin acudir inicialmente a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",

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
      "Custodia de Hijos por Conciliación en Colombia: Cómo Llegar a un Acuerdo de Custodia, Cuidado Personal y Régimen de Visitas",

    description:
      "Guía completa sobre la conciliación familiar para establecer acuerdos relacionados con custodia de hijos, cuidado personal, visitas, vacaciones y responsabilidades parentales en Colombia.",

    keywords: [
      "custodia por conciliación",
      "custodia hijos",
      "cuidado personal",
      "conciliación familiar",
      "régimen de visitas",
      "custodia compartida",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    about: [
      "Custodia de hijos",
      "Conciliación familiar",
      "Derecho de familia",
      "Régimen de visitas",
      "Cuidado personal",
    ],

    wordCount: 3300,

    inLanguage: "es-CO",

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿La custodia de un hijo puede acordarse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los padres pueden llegar a acuerdos relacionados con la custodia, el cuidado personal y otros aspectos de la crianza mediante conciliación familiar, siempre que se protejan los derechos del menor.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación permite establecer un régimen de visitas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante la conciliación es posible definir horarios, fines de semana, vacaciones, fechas especiales y demás condiciones para las visitas del padre o madre que no convive con el menor.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué es el cuidado personal del menor?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es la responsabilidad relacionada con la atención diaria del niño o adolescente, incluyendo su alimentación, educación, salud, bienestar y desarrollo integral.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué temas pueden acordarse en una conciliación familiar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es posible acordar custodia, cuidado personal, régimen de visitas, vacaciones, comunicación con los hijos, responsabilidades parentales y otros aspectos relacionados con la convivencia familiar.",
        },
      },

      {
        "@type": "Question",
        name: "¿El acta de conciliación sobre custodia tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y las partes deben cumplir los compromisos adquiridos conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ocurre si uno de los padres incumple el acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El incumplimiento del acta de conciliación puede generar consecuencias jurídicas y permitir que la parte afectada solicite el cumplimiento de lo acordado por las vías legales correspondientes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Puede modificarse un acuerdo de custodia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando cambian las circunstancias familiares o las necesidades del menor, las partes pueden celebrar una nueva conciliación para actualizar los acuerdos.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación evita acudir a un juez?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos sí. Cuando existe voluntad de diálogo, la conciliación permite resolver el conflicto sin iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos conviene llevar a una audiencia de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente es recomendable llevar documentos de identidad, registro civil del menor, acuerdos previos y cualquier soporte relacionado con la situación familiar.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación protege el interés superior del menor?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Todo acuerdo relacionado con niños, niñas y adolescentes debe respetar el principio del interés superior del menor y garantizar la protección de sus derechos.",
        },
      },

      {
        "@type": "Question",
        name: "¿Puede realizarse una conciliación virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Muchos centros de conciliación ofrecen audiencias virtuales, facilitando la participación de los padres cuando las circunstancias lo permiten.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación es más rápida que un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente sí. La conciliación suele permitir acuerdos en menor tiempo que un proceso judicial relacionado con custodia o visitas.",
        },
      },

      {
        "@type": "Question",
        name: "¿Es posible acordar la custodia compartida mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las circunstancias lo permiten y resulta beneficioso para el menor, los padres pueden construir acuerdos relacionados con custodia compartida y distribución de responsabilidades.",
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

      <CustodiaPorConciliacionContent />
    </>
  );
}
