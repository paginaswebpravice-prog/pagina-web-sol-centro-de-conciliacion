import type { Metadata } from "next";
import ConciliacionBogotaContent from "./ConciliacionBogotaContent";

export const metadata: Metadata = {
  title:
    "Conciliación en Bogotá: cómo funciona, requisitos, centros de conciliación y guía completa 2026",

  description:
    "Descubre cómo funciona la conciliación en Bogotá, dónde realizarla, cuáles son los requisitos, qué conflictos pueden resolverse y cómo iniciar una audiencia de conciliación con validez legal en Colombia.",

  keywords: [
    "conciliación en Bogotá",
    "centro de conciliación Bogotá",
    "centros de conciliación en Bogotá",
    "conciliación Bogotá Colombia",
    "conciliación extrajudicial Bogotá",
    "cómo hacer una conciliación en Bogotá",
    "requisitos conciliación Bogotá",
    "audiencia de conciliación Bogotá",
    "conciliación civil Bogotá",
    "conciliación familiar Bogotá",
    "conciliación laboral Bogotá",
    "conciliación comercial Bogotá",
    "resolver conflictos Bogotá",
    "MASC Bogotá",
    "acta de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",
  },

  openGraph: {
    title:
      "Conciliación en Bogotá: requisitos, beneficios y cómo iniciar tu proceso",

    description:
      "Aprende cómo realizar una conciliación en Bogotá, qué documentos necesitas, dónde acudir y cómo resolver conflictos civiles, familiares, laborales y comerciales sin acudir a un juicio.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",

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
      "Conciliación en Bogotá: cómo funciona, requisitos y centros de conciliación",

    alternativeHeadline:
      "Guía completa sobre conciliación en Bogotá para resolver conflictos sin acudir a un juez",

    description:
      "Conoce cómo funciona la conciliación en Bogotá, qué conflictos pueden resolverse, cuáles son los requisitos, dónde realizar una audiencia y qué efectos jurídicos tiene el acta de conciliación.",

    inLanguage: "es-CO",

    keywords: [
      "conciliación en Bogotá",
      "centro de conciliación Bogotá",
      "conciliación civil",
      "conciliación familiar",
      "conciliación laboral",
      "conciliación comercial",
      "acta de conciliación",
      "audiencia de conciliación",
      "resolver conflictos",
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
      {
        "@type": "Thing",

        name: "Conciliación",
      },

      {
        "@type": "Thing",

        name: "Mecanismos Alternativos de Solución de Conflictos",
      },

      {
        "@type": "Thing",

        name: "Conciliación Extrajudicial",
      },

      {
        "@type": "Place",

        name: "Bogotá",
      },
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-en-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué es la conciliación en Bogotá?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación en Bogotá es un mecanismo alternativo de solución de conflictos mediante el cual dos o más personas buscan llegar a un acuerdo con la ayuda de un conciliador autorizado, evitando en muchos casos un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Dónde se puede realizar una conciliación en Bogotá?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Puede realizarse en centros de conciliación autorizados, notarías, consultorios jurídicos y otras entidades habilitadas por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué conflictos pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, pueden conciliarse conflictos civiles, familiares, comerciales, laborales, de arrendamiento, obligaciones económicas, contratos y otros asuntos permitidos por la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación evita una demanda judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando las partes llegan a un acuerdo durante la conciliación, generalmente no es necesario acudir a un proceso judicial respecto del conflicto conciliado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación en Bogotá?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La duración depende de la complejidad del caso y de la disposición de las partes, aunque muchos asuntos pueden resolverse en una sola audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos se necesitan para iniciar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente se solicita el documento de identidad y la documentación relacionada con el conflicto, como contratos, facturas, comprobantes, comunicaciones u otras pruebas pertinentes.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio asistir a una audiencia de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En determinados asuntos la conciliación puede constituir un requisito previo antes de presentar una demanda, según lo previsto por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si la otra parte no asiste a la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del procedimiento y del tipo de conflicto, podrán expedirse las constancias correspondientes para continuar con las actuaciones legales que resulten procedentes.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse conforme a la legislación colombiana en caso de incumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación puede realizarse de manera virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Muchos centros de conciliación cuentan con mecanismos para desarrollar audiencias virtuales cuando las condiciones del caso lo permiten.",
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

      <ConciliacionBogotaContent />
    </>
  );
}
