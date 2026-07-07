import type { Metadata } from "next";
import ConciliacionCivilBogotaContent from "./ConciliacionCivilBogotaContent";

export const metadata: Metadata = {
  title:
    "Conciliación civil en Bogotá y Colombia: cómo resolver conflictos sin demanda",

  description:
    "Descubre cómo funciona la conciliación civil en Bogotá y Colombia. Aprende qué conflictos pueden resolverse, requisitos, proceso, costos, beneficios y cómo evitar una demanda mediante un acuerdo con validez legal.",

  keywords: [
    "conciliación civil Bogotá",
    "conciliación civil Colombia",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial",
    "conflictos civiles",
    "resolver conflictos civiles",
    "audiencia de conciliación civil",
    "proceso de conciliación civil",
    "conciliación de deudas",
    "conciliación contratos",
    "conciliación entre particulares",
    "conciliación obligaciones civiles",
    "conciliación antes de demanda",
    "acuerdo conciliatorio",
    "acta de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",
  },

  openGraph: {
    title:
      "Conciliación civil en Bogotá: guía completa para resolver conflictos sin demanda",

    description:
      "Conoce cómo funciona la conciliación civil en Colombia, qué conflictos pueden resolverse, cómo solicitar una audiencia y cuáles son sus beneficios legales.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación civil en Bogotá | Guía completa",

    description:
      "Aprende cómo resolver conflictos civiles mediante conciliación antes de acudir a un proceso judicial.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Conciliación civil en Bogotá y Colombia: cómo resolver conflictos sin demanda",

    alternativeHeadline: "Guía completa sobre conciliación civil en Colombia",

    description:
      "Conoce qué es la conciliación civil, qué conflictos pueden resolverse, cómo funciona el procedimiento, cuáles son sus beneficios y cuándo puede evitar un proceso judicial.",

    image:
      "https://solcentrodeconciliacion.com/images/blog/conciliacion-civil-bogota.webp",

    inLanguage: "es-CO",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id":
        "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",
    },

    articleSection: "Conciliación Civil",

    keywords: [
      "conciliación civil",
      "conciliación Bogotá",
      "conciliación Colombia",
      "conciliación extrajudicial",
      "conflictos civiles",
      "acuerdos de conciliación",
      "acta de conciliación",
      "centro de conciliación",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Conciliación Civil",
      },
      {
        "@type": "Thing",
        name: "Resolución de conflictos",
      },
      {
        "@type": "Thing",
        name: "Métodos Alternativos de Solución de Conflictos",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación civil en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es un mecanismo alternativo de solución de conflictos mediante el cual las partes buscan llegar a un acuerdo con la ayuda de un conciliador, evitando en muchos casos un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué conflictos pueden resolverse mediante conciliación civil?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es posible conciliar conflictos relacionados con deudas, incumplimiento de contratos, préstamos de dinero, compraventas, arrendamientos, obligaciones económicas y otros asuntos patrimoniales permitidos por la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación civil es obligatoria antes de demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del tipo de conflicto, la conciliación puede constituir un requisito de procedibilidad antes de presentar una demanda ante la jurisdicción civil.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación civil?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La duración depende de la complejidad del conflicto y de la disponibilidad de las partes, aunque muchos casos pueden resolverse en una sola audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se puede hacer una conciliación civil virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Muchos centros de conciliación realizan audiencias virtuales con la misma validez jurídica que las presenciales, siempre que se cumplan los requisitos legales.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación civil?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar documentos de identidad, contratos, comprobantes de pago, facturas, correos electrónicos, conversaciones y cualquier otro soporte relacionado con el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si la otra parte no asiste a la audiencia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, el centro de conciliación podrá expedir la constancia correspondiente, la cual puede ser necesaria para ejercer otras acciones legales.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué sucede si no se cumple el acuerdo de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene efectos jurídicos y puede utilizarse para exigir el cumplimiento de las obligaciones pactadas conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Necesito abogado para asistir a una conciliación civil?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos no es obligatorio contar con abogado, aunque recibir orientación jurídica puede facilitar la preparación de la audiencia y la negociación.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación civil tiene validez legal en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo, este queda consignado en un acta de conciliación con efectos jurídicos conforme a la legislación colombiana.",
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

      <ConciliacionCivilBogotaContent />
    </>
  );
}
