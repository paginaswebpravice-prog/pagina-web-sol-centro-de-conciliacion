import { Metadata } from "next";
import ComoEsLaAudienciaContent from "./ComoEsLaAudienciaContent";

export const metadata: Metadata = {
  title:
    "¿Cómo es una audiencia de conciliación en Colombia? Guía paso a paso (2026)",

  description:
    "Descubre cómo es una audiencia de conciliación en Colombia, cuánto dura, qué sucede antes, cómo funciona la modalidad presencial y virtual, qué documentos llevar, qué ocurre si una parte no asiste y qué validez tiene el acta de conciliación.",

  keywords: [
    "cómo es una audiencia de conciliación",
    "audiencia de conciliación Colombia",
    "audiencia de conciliación Bogotá",
    "cómo funciona una audiencia de conciliación",
    "etapas de la audiencia de conciliación",
    "conciliación presencial",
    "conciliación virtual",
    "qué pasa en una audiencia de conciliación",
    "qué documentos llevar a conciliación",
    "qué pasa si no asisto a conciliación",
    "cuánto dura una audiencia de conciliación",
    "acta de conciliación",
    "conciliación extrajudicial Colombia",
    "centro de conciliación Bogotá",
    "conciliación civil Colombia",
    "conciliación comercial",
    "conciliación familiar",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
  },

  openGraph: {
    title:
      "¿Cómo es una audiencia de conciliación en Colombia? Guía paso a paso",

    description:
      "Conoce cómo funciona una audiencia de conciliación en Colombia, sus etapas, duración, modalidad presencial y virtual, documentos necesarios y recomendaciones antes de asistir.",

    url: "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "¿Cómo es una audiencia de conciliación en Colombia? Guía paso a paso",

    description:
      "Todo sobre las audiencias de conciliación en Colombia: etapas, duración, modalidad presencial y virtual, documentos y recomendaciones.",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",

      "@type": "Article",

      headline:
        "¿Cómo es una audiencia de conciliación en Colombia? Guía paso a paso",

      description:
        "Guía completa sobre cómo funciona una audiencia de conciliación en Colombia, qué sucede antes, durante y después del procedimiento.",

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
        "@id": "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
      },

      inLanguage: "es-CO",

      datePublished: "2026-07-06",

      dateModified: "2026-07-06",

      keywords:
        "audiencia de conciliación, conciliación Colombia, conciliación Bogotá, conciliación virtual, conciliación presencial",

      about: [
        "Audiencia de conciliación",
        "Conciliación extrajudicial",
        "Mecanismos alternativos de solución de conflictos",
      ],
    },

    {
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
          name: "Cómo es una audiencia de conciliación",
          item: "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo es una audiencia de conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La audiencia de conciliación es una reunión dirigida por un conciliador imparcial donde las partes exponen el conflicto, presentan pruebas, negocian posibles soluciones y, si llegan a un acuerdo, este queda consignado en un acta con efectos jurídicos.",
          },
        },

        {
          "@type": "Question",
          name: "¿Cuánto dura una audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La duración depende de la complejidad del conflicto y de la disposición de las partes para negociar. Muchas audiencias concluyen en una o dos horas, aunque algunas pueden requerir más de una sesión.",
          },
        },

        {
          "@type": "Question",
          name: "¿La audiencia puede ser virtual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Muchos centros de conciliación en Colombia realizan audiencias virtuales mediante plataformas digitales, con la misma validez jurídica que una audiencia presencial cuando se cumplen los requisitos legales.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué documentos debo llevar a una audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable llevar el documento de identidad, contratos, comprobantes de pago, correos electrónicos, conversaciones y cualquier otro documento relacionado con el conflicto.",
          },
        },

        {
          "@type": "Question",
          name: "¿Necesito un abogado para asistir a una audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No siempre es obligatorio. Dependiendo del caso, las partes pueden asistir directamente, aunque contar con asesoría jurídica puede facilitar la negociación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si una de las partes no asiste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El centro de conciliación puede expedir una constancia de inasistencia que, dependiendo del asunto, permitirá continuar con otras actuaciones legales.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si se llega a un acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El conciliador redacta un acta donde quedan consignadas las obligaciones asumidas por las partes. Este documento tiene efectos jurídicos y puede prestar mérito ejecutivo.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué sucede si no se logra un acuerdo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuando no es posible conciliar, las partes pueden acudir a otros mecanismos legales o iniciar el proceso judicial correspondiente, según el tipo de conflicto.",
          },
        },

        {
          "@type": "Question",
          name: "¿Quién dirige la audiencia de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La audiencia es dirigida por un conciliador autorizado, quien actúa de forma imparcial para facilitar el diálogo y promover un acuerdo entre las partes.",
          },
        },

        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos jurídicos y, en los casos previstos por la ley, presta mérito ejecutivo para exigir el cumplimiento de las obligaciones pactadas.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <ComoEsLaAudienciaContent />
    </>
  );
}
