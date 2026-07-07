import type { Metadata } from "next";
import ConciliacionArrendamientoContent from "./ConciliacionArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conciliación por arrendamiento en Colombia: solución legal para conflictos de arriendo",
  description:
    "Descubre cómo resolver conflictos de arrendamiento en Colombia mediante conciliación. Conoce qué hacer ante cánones vencidos, incumplimientos, restitución del inmueble, daños, servicios públicos y acuerdos entre arrendador e inquilino sin acudir inmediatamente a un proceso judicial.",
  keywords: [
    "conciliación arrendamiento",
    "conciliación contrato de arrendamiento",
    "conciliación contrato de arriendo",
    "conflictos de arrendamiento",
    "conflictos entre arrendador e inquilino",
    "cánones de arrendamiento",
    "cánones vencidos",
    "restitución del inmueble",
    "entrega del inmueble",
    "incumplimiento contrato de arrendamiento",
    "problemas de arriendo",
    "deudas de arriendo",
    "conciliación civil",
    "conciliación Colombia",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
  },
  openGraph: {
    title: "Conciliación por arrendamiento en Colombia",
    description:
      "Conoce cómo resolver conflictos entre arrendadores e inquilinos mediante conciliación extrajudicial.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
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
      "Conciliación por arrendamiento en Colombia: cómo resolver conflictos entre arrendador e inquilino sin demandar",

    alternativeHeadline:
      "Guía sobre conciliación en contratos de arrendamiento en Colombia",

    description:
      "Guía completa sobre conciliación por arrendamiento en Colombia. Aprende cómo resolver conflictos entre arrendador e inquilino relacionados con cánones de arrendamiento, incumplimientos, restitución del inmueble, daños, servicios públicos y acuerdos antes de acudir a un proceso judicial.",

    image:
      "https://solcentrodeconciliacion.com/images/blog/conciliacion-arrendamiento.webp",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
      logo: {
        "@type": "ImageObject",
        url: "https://solcentrodeconciliacion.com/logo_sol.png",
      },
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
    },

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",

    inLanguage: "es-CO",

    articleSection: "Conciliación",

    datePublished: "2026-07-07",

    dateModified: "2026-07-07",

    wordCount: "3200",

    keywords: [
      "conciliación por arrendamiento",
      "conciliación contrato de arrendamiento",
      "conciliación contrato de arriendo",
      "conflictos de arrendamiento",
      "arrendador e inquilino",
      "cánones de arrendamiento",
      "cánones vencidos",
      "restitución del inmueble",
      "entrega del inmueble",
      "incumplimiento contrato de arrendamiento",
      "problemas de arriendo",
      "deudas de arriendo",
      "conciliación civil",
      "conciliación extrajudicial",
      "conciliación Bogotá",
      "conciliación Colombia",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Conciliación",
      },
      {
        "@type": "Thing",
        name: "Arrendamiento",
      },
      {
        "@type": "Thing",
        name: "Contrato de arrendamiento",
      },
      {
        "@type": "Thing",
        name: "Conflictos civiles",
      },
      {
        "@type": "Thing",
        name: "Resolución alternativa de conflictos",
      },
    ],

    mentions: [
      {
        "@type": "Thing",
        name: "Canon de arrendamiento",
      },
      {
        "@type": "Thing",
        name: "Arrendador",
      },
      {
        "@type": "Thing",
        name: "Arrendatario",
      },
      {
        "@type": "Thing",
        name: "Restitución del inmueble",
      },
      {
        "@type": "Thing",
        name: "Incumplimiento contractual",
      },
      {
        "@type": "Thing",
        name: "Servicios públicos",
      },
      {
        "@type": "Thing",
        name: "Daños al inmueble",
      },
      {
        "@type": "Thing",
        name: "Acuerdo de conciliación",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos de arrendamiento pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite resolver conflictos relacionados con el pago de cánones de arrendamiento, entrega o restitución del inmueble, daños, servicios públicos, depósitos, incumplimientos contractuales y otras diferencias entre arrendador e inquilino, siempre que el asunto sea conciliable conforme a la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita una demanda por arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí. Si las partes llegan a un acuerdo durante la audiencia de conciliación, pueden solucionar el conflicto sin necesidad de iniciar un proceso judicial, lo que representa un ahorro de tiempo y costos.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo logrado en una conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo queda consignado en un acta de conciliación que tiene efectos jurídicos y puede exigirse legalmente si alguna de las partes incumple lo pactado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar cánones de arrendamiento vencidos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Uno de los asuntos más frecuentes en conciliación es la negociación de cánones vencidos mediante acuerdos de pago, plazos o reconocimiento de la deuda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el arrendatario no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si la persona citada no asiste sin justificación, el centro de conciliación puede expedir una constancia de inasistencia que, dependiendo del caso, puede servir para continuar con otras acciones legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación por arrendamiento puede realizarse de forma virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados en Colombia ofrecen audiencias virtuales, siempre que se cumplan los requisitos establecidos para garantizar la identificación y participación de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito un abogado para solicitar una conciliación por arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la mayoría de los casos no es obligatorio contar con un abogado para iniciar una conciliación, aunque recibir orientación jurídica puede facilitar la preparación del caso y la negociación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación por arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar el contrato de arrendamiento, documentos de identidad, comprobantes de pago, conversaciones, inventarios, fotografías, recibos de servicios públicos y cualquier otro soporte relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación por arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del caso y de la disposición de las partes para negociar. En muchos casos el conflicto puede resolverse en una sola audiencia de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si una de las partes incumple el acuerdo de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si una de las partes incumple las obligaciones pactadas en el acta de conciliación, la otra podrá acudir a los mecanismos legales correspondientes para exigir su cumplimiento conforme a la legislación colombiana.",
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
        name: "Conciliación por arrendamiento",
        item: "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
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

      <ConciliacionArrendamientoContent />
    </>
  );
}
