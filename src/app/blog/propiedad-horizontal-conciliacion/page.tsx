import type { Metadata } from "next";
import PropiedadHorizontalContent from "./PropiedadHorizontalContent";

export const metadata: Metadata = {
  title:
    "Conciliación en Propiedad Horizontal en Colombia: Conflictos entre Vecinos, Administración y Copropietarios (Guía 2026)",

  description:
    "Aprende cómo resolver conflictos de propiedad horizontal mediante conciliación en Colombia. Conoce qué casos pueden conciliarse, cuándo acudir a un centro de conciliación, derechos de los copropietarios, conflictos con la administración, cuotas de administración, ruido, mascotas, zonas comunes y mucho más.",

  keywords: [
    "conciliación propiedad horizontal Colombia",
    "conflictos propiedad horizontal",
    "conflictos entre vecinos",
    "problemas administración conjunto",
    "conciliación conjuntos residenciales",
    "conciliación edificios Colombia",
    "copropietarios Colombia",
    "administración propiedad horizontal",
    "Ley 675 de 2001",
    "ruidos vecinos",
    "zonas comunes",
    "cuotas de administración",
    "expensas comunes",
    "comité de convivencia",
    "centro de conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",
  },

  openGraph: {
    title:
      "Conciliación en Propiedad Horizontal en Colombia | Cómo Resolver Conflictos entre Vecinos",

    description:
      "Guía completa para solucionar conflictos entre vecinos, administración y copropietarios mediante conciliación en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación en Propiedad Horizontal | Guía Completa Colombia",

    description:
      "Resuelve conflictos entre vecinos, administradores y copropietarios mediante conciliación.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Conciliación en Propiedad Horizontal en Colombia: Cómo Resolver Conflictos entre Vecinos, Administración y Copropietarios",

    description:
      "Guía completa sobre conciliación en propiedad horizontal en Colombia. Aprende cómo solucionar conflictos relacionados con convivencia, cuotas de administración, zonas comunes, mascotas, ruido, parqueaderos y decisiones de la administración sin acudir inmediatamente a un proceso judicial.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/propiedad-horizontal-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos de propiedad horizontal pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con cuotas de administración, convivencia entre vecinos, uso de zonas comunes, parqueaderos, mascotas, daños a bienes comunes, administración del conjunto y otros asuntos conciliables.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación evita una demanda judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo, pueden evitar un proceso judicial y solucionar el conflicto de forma más rápida y económica.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si un vecino incumple el acuerdo de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación puede utilizarse para exigir judicialmente el cumplimiento del acuerdo cuando la ley lo permite.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puedo conciliar problemas por ruido excesivo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los conflictos derivados de ruidos, fiestas, comportamientos que afectan la convivencia y otras situaciones similares suelen ser susceptibles de conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden conciliar conflictos por mascotas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando existen desacuerdos relacionados con mascotas y convivencia, la conciliación puede ser una alternativa para alcanzar acuerdos entre las partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿La administración del conjunto puede participar en una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La administración, el consejo de administración y los copropietarios pueden participar cuando el conflicto así lo requiera.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre con las cuotas de administración pendientes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Las partes pueden negociar acuerdos de pago, plazos y demás condiciones mediante conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo acordado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación de propiedad horizontal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del caso, pero muchos conflictos pueden solucionarse en una o pocas audiencias.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio acudir primero a conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del tipo de conflicto y de las normas aplicables. En muchos casos constituye una alternativa recomendable antes de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación de propiedad horizontal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar el reglamento de propiedad horizontal, comunicaciones, actas de asamblea, fotografías, videos, recibos, documentos y demás pruebas relacionadas con el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden resolver conflictos sobre zonas comunes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Es posible conciliar diferencias relacionadas con parqueaderos, salones comunales, ascensores, piscinas, terrazas, pasillos y demás bienes comunes.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puedo asistir con abogado?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Las partes pueden asistir acompañadas de un abogado si consideran necesario recibir asesoría jurídica durante el procedimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué beneficios tiene la conciliación frente a un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Reduce tiempos, costos, desgaste emocional y favorece soluciones construidas de común acuerdo entre las partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿Dónde puedo solicitar una conciliación en propiedad horizontal en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Puede solicitarse en centros de conciliación autorizados que presten este servicio conforme a la legislación colombiana.",
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

      <PropiedadHorizontalContent />
    </>
  );
}
