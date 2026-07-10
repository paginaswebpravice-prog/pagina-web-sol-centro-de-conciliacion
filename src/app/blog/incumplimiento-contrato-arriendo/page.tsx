import type { Metadata } from "next";
import IncumplimientoArriendoContent from "./IncumplimientoArriendoContent";

export const metadata: Metadata = {
  title:
    "¿Qué hacer por incumplimiento de contrato de arriendo en Colombia? | Conciliación y soluciones legales",

  description:
    "Conoce qué hacer si el arrendador o el arrendatario incumplen un contrato de arriendo en Colombia. Descubre cuándo acudir a conciliación, qué documentos necesitas y qué alternativas existen antes de una demanda.",

  keywords: [
    "incumplimiento contrato de arriendo",
    "incumplimiento contrato de arrendamiento",
    "arrendatario no paga arriendo",
    "arrendador incumple contrato",
    "conciliación contrato de arriendo",
    "conciliación arrendamiento",
    "problemas de arrendamiento",
    "restitución de inmueble",
    "entrega de inmueble",
    "canon de arrendamiento",
    "conflictos entre arrendador y arrendatario",
    "centro de conciliación Bogotá",
    "conciliación Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",
  },

  openGraph: {
    title:
      "¿Qué hacer si existe un incumplimiento del contrato de arriendo en Colombia?",

    description:
      "Aprende cómo resolver conflictos entre arrendadores e inquilinos mediante conciliación antes de acudir a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id":
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo#article",

    headline:
      "¿Qué hacer si hay incumplimiento de contrato de arriendo en Colombia?",

    alternativeHeadline:
      "Conciliación por incumplimiento del contrato de arrendamiento",

    description:
      "Guía completa sobre conciliación por incumplimiento del contrato de arriendo en Colombia, derechos del arrendador, derechos del arrendatario y alternativas legales.",

    inLanguage: "es-CO",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    about: [
      {
        "@type": "Thing",
        name: "Contrato de arrendamiento",
      },
      {
        "@type": "Thing",
        name: "Conciliación",
      },
      {
        "@type": "Thing",
        name: "Incumplimiento contractual",
      },
    ],

    keywords: [
      "incumplimiento contrato de arriendo",
      "arrendatario no paga",
      "conciliación arrendamiento",
      "conflictos de arriendo",
      "restitución inmueble",
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué hacer si el inquilino incumple el contrato de arriendo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando el arrendatario incumple el contrato, el arrendador puede intentar una conciliación para buscar acuerdos sobre pago de cánones, entrega del inmueble, reparación de daños u otras obligaciones antes de acudir a un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si el arrendador incumple el contrato de arrendamiento?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El arrendatario también puede solicitar una audiencia de conciliación cuando considera que el propietario incumplió las obligaciones establecidas en el contrato.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio conciliar antes de demandar por un contrato de arriendo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del conflicto y de las normas aplicables, la conciliación puede constituir un requisito previo antes de iniciar determinadas acciones judiciales.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación de arrendamiento?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar el contrato de arrendamiento, comprobantes de pago, inventarios, comunicaciones entre las partes, fotografías, recibos y cualquier documento relacionado con el incumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede acordar la entrega voluntaria del inmueble?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante la conciliación las partes pueden pactar la fecha de entrega del inmueble, el pago de cánones pendientes, acuerdos sobre depósitos, servicios públicos y demás obligaciones.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ventajas tiene la conciliación frente a un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación suele ser más rápida, económica y flexible. Además permite que las partes construyan soluciones mutuamente beneficiosas y, en muchos casos, evita litigios prolongados.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si no hay acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si no se logra un acuerdo, las partes conservan la posibilidad de acudir a los mecanismos judiciales previstos por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los acuerdos alcanzados en una conciliación tienen efectos jurídicos y son obligatorios para las partes conforme a la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden conciliar cánones de arrendamiento atrasados?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Es posible negociar pagos pendientes, acuerdos de pago, plazos, descuentos o cualquier otra solución que las partes consideren conveniente.",
        },
      },

      {
        "@type": "Question",

        name: "¿Quién puede solicitar una conciliación por incumplimiento de contrato de arriendo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Tanto el arrendador como el arrendatario pueden acudir a un centro de conciliación cuando exista un conflicto relacionado con el contrato de arrendamiento.",
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

      <IncumplimientoArriendoContent />
    </>
  );
}
