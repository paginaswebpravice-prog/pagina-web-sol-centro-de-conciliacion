import type { Metadata } from "next";
import IncumplimientoContratoContent from "./IncumplimientoContratoContent";

export const metadata: Metadata = {
  title:
    "¿Qué hacer si hay incumplimiento de contrato en Colombia? | Conciliación y soluciones legales 2026",

  description:
    "Conoce qué hacer cuando una persona o empresa incumple un contrato en Colombia. Aprende cuándo procede la conciliación, qué derechos tienes, cómo reclamar el cumplimiento del contrato y cuándo es posible iniciar una demanda.",

  keywords: [
    "incumplimiento de contrato",
    "qué hacer si incumplen un contrato",
    "conciliación por incumplimiento de contrato",
    "incumplimiento contractual Colombia",
    "demanda por incumplimiento de contrato",
    "conciliación extrajudicial Colombia",
    "conflictos contractuales",
    "incumplimiento contrato civil",
    "incumplimiento contrato comercial",
    "incumplimiento contrato prestación de servicios",
    "centro de conciliación Bogotá",
    "conciliación civil",
    "solución conflictos contractuales",
    "conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
  },

  openGraph: {
    title:
      "¿Qué hacer si hay incumplimiento de contrato en Colombia? | Guía 2026",

    description:
      "Descubre cómo resolver un incumplimiento contractual mediante conciliación, cuándo puedes reclamar el cumplimiento del contrato y qué alternativas legales existen en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",

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
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato#article",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
    },

    headline:
      "¿Qué hacer si hay incumplimiento de contrato en Colombia? Guía sobre conciliación y soluciones legales",

    alternativeHeadline:
      "Conciliación por incumplimiento de contrato en Colombia",

    description:
      "Conoce qué hacer cuando una persona o empresa incumple un contrato en Colombia. Aprende cuándo procede la conciliación, qué documentos necesitas, cuáles son tus derechos y qué alternativas legales existen.",

    image: ["https://solcentrodeconciliacion.com/logo_sol.png"],

    inLanguage: "es-CO",

    isAccessibleForFree: true,

    genre: [
      "Derecho Civil",
      "Conciliación",
      "Contratos",
      "Resolución de Conflictos",
    ],

    articleSection: [
      "Conciliación Civil",
      "Contratos",
      "Incumplimiento Contractual",
    ],

    keywords: [
      "incumplimiento de contrato",
      "conciliación por incumplimiento de contrato",
      "conciliación contractual",
      "contrato incumplido",
      "demanda por incumplimiento",
      "conflictos contractuales",
      "contratos civiles",
      "contratos comerciales",
      "centro de conciliación",
      "conciliación Bogotá",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",

      url: "https://solcentrodeconciliacion.com",
    },

    publisher: {
      "@type": "Organization",

      name: "Sol Centro de Conciliación",

      url: "https://solcentrodeconciliacion.com",

      logo: {
        "@type": "ImageObject",

        url: "https://solcentrodeconciliacion.com/logo.png",
      },
    },

    about: [
      {
        "@type": "Thing",
        name: "Incumplimiento de contrato",
      },
      {
        "@type": "Thing",
        name: "Conciliación extrajudicial",
      },
      {
        "@type": "Thing",
        name: "Contratos civiles",
      },
      {
        "@type": "Thing",
        name: "Contratos comerciales",
      },
    ],

    mentions: [
      {
        "@type": "Thing",
        name: "Conciliación",
      },
      {
        "@type": "Thing",
        name: "Contrato",
      },
      {
        "@type": "Thing",
        name: "Proceso judicial",
      },
      {
        "@type": "Thing",
        name: "Centro de Conciliación",
      },
    ],

    audience: {
      "@type": "Audience",
      audienceType:
        "Personas, empresarios, comerciantes y empresas en Colombia",
    },

    datePublished: "2026-07-10",

    dateModified: "2026-07-10",
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

        name: "Incumplimiento de contrato",

        item: "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué hacer cuando una persona incumple un contrato en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo primero es revisar las obligaciones pactadas en el contrato y reunir las pruebas del incumplimiento. Dependiendo del caso, las partes pueden acudir a un centro de conciliación para intentar resolver el conflicto antes de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué se considera un incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Existe incumplimiento cuando una de las partes no ejecuta las obligaciones pactadas, las cumple parcialmente, las realiza fuera del plazo acordado o las ejecuta de manera diferente a lo establecido en el contrato.",
        },
      },

      {
        "@type": "Question",
        name: "¿Es obligatorio intentar una conciliación antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos conflictos la conciliación extrajudicial constituye un requisito de procedibilidad antes de presentar una demanda. Esto dependerá de la naturaleza del conflicto y de las normas aplicables.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación por incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar el contrato firmado, anexos, facturas, comprobantes de pago, correos electrónicos, mensajes, cotizaciones y cualquier documento que demuestre las obligaciones asumidas y el incumplimiento.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué acuerdos pueden lograrse durante una conciliación contractual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden acordar nuevos plazos de cumplimiento, pagos pendientes, devolución de dinero, indemnizaciones, modificaciones al contrato o incluso su terminación por mutuo acuerdo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué sucede si la otra parte no quiere conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible llegar a un acuerdo o una de las partes no desea conciliar, podrán utilizarse los mecanismos legales previstos por la legislación colombiana para resolver la controversia.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede tardar una conciliación por incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según la disponibilidad de las partes y del centro de conciliación. Sin embargo, generalmente es mucho más rápido que un proceso judicial ordinario.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación tiene la misma validez que una sentencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación produce efectos jurídicos y los acuerdos alcanzados son obligatorios para las partes conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",
        name: "¿Puedo reclamar una indemnización por incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de las circunstancias y de lo pactado en el contrato, durante la conciliación las partes pueden negociar compensaciones económicas o, en caso de no llegar a un acuerdo, acudir a la vía judicial.",
        },
      },

      {
        "@type": "Question",
        name: "¿Cuáles son las ventajas de conciliar un conflicto contractual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite reducir costos, ahorrar tiempo, mantener las relaciones comerciales y encontrar soluciones construidas por las propias partes, evitando en muchos casos un proceso judicial prolongado.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <IncumplimientoContratoContent />
    </>
  );
}
