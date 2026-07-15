import type { Metadata } from "next";
import RegimenVisitasConciliacionContent from "./RegimenVisitasConciliacionContent";

export const metadata: Metadata = {
  title:
    "Régimen de visitas en Colombia: Acuerdo por conciliación para hijos menores | Guía 2026",

  description:
    "Conoce cómo establecer un régimen de visitas mediante conciliación en Colombia. Aprende cómo acordar horarios, vacaciones, fines de semana, fechas especiales y qué hacer cuando uno de los padres incumple el acuerdo.",

  keywords: [
    "régimen de visitas",
    "régimen de visitas Colombia",
    "conciliación régimen de visitas",
    "acuerdo de visitas",
    "visitas hijos menores",
    "custodia y visitas",
    "visitas padre e hijo",
    "visitas madre e hijo",
    "conciliación familiar",
    "modificar régimen de visitas",
    "incumplimiento régimen de visitas",
    "centro de conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",
  },

  openGraph: {
    title:
      "Régimen de visitas en Colombia: Cómo acordarlo mediante conciliación",

    description:
      "Guía completa para establecer un régimen de visitas con validez legal. Horarios, vacaciones, fines de semana, incumplimientos y modificaciones.",

    url: "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",

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
      "Régimen de visitas en Colombia: Cómo establecer un acuerdo mediante conciliación",

    description:
      "Guía completa para acordar un régimen de visitas mediante conciliación familiar en Colombia, incluyendo horarios, vacaciones, derechos de los padres y protección del interés superior del menor.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un régimen de visitas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es el acuerdo que regula la forma en que un padre o madre comparte tiempo con su hijo cuando no convive permanentemente con él, garantizando el bienestar y el interés superior del menor.",
        },
      },

      {
        "@type": "Question",

        name: "¿El régimen de visitas puede establecerse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los padres pueden acudir a un centro de conciliación para acordar días, horarios, vacaciones, comunicación y demás aspectos relacionados con las visitas, dejando todo consignado en un acta de conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si uno de los padres incumple el régimen de visitas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, el incumplimiento puede dar lugar a acciones legales para exigir el cumplimiento del acuerdo contenido en el acta de conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es posible modificar un régimen de visitas ya acordado?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando cambian las circunstancias familiares, los padres pueden realizar una nueva conciliación para actualizar el acuerdo.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden acordar las vacaciones escolares?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Es habitual incluir vacaciones, Semana Santa, Navidad, Año Nuevo y otras fechas especiales dentro del régimen de visitas.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede realizarse una conciliación virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Muchos centros de conciliación ofrecen audiencias virtuales cuando las condiciones del caso lo permiten.",
        },
      },

      {
        "@type": "Question",

        name: "¿Quién decide el régimen de visitas durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Las decisiones las toman los propios padres. El conciliador facilita el diálogo, pero no impone condiciones ni reemplaza la voluntad de las partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acuerdo logrado queda consignado en un acta de conciliación que produce efectos jurídicos y puede hacerse valer conforme a la legislación colombiana.",
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

      <RegimenVisitasConciliacionContent />
    </>
  );
}
