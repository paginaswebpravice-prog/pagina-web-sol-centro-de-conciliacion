import type { Metadata } from "next";
import QueEsLaConciliacionLaboralContent from "./QueEsLaConciliacionLaboralContent";

export const metadata: Metadata = {
  title:
    "¿Qué es la conciliación laboral en Colombia? Guía completa, requisitos y beneficios (2026)",

  description:
    "Aprende qué es la conciliación laboral en Colombia, cuándo procede, qué conflictos pueden resolverse, cuánto cuesta, cómo solicitarla y qué validez tiene el acta de conciliación.",

  keywords: [
    "qué es la conciliación laboral",
    "conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "cómo funciona la conciliación laboral",
    "audiencia de conciliación laboral",
    "acta de conciliación laboral",
    "conflictos laborales Colombia",
    "conciliación trabajador empleador",
    "centro de conciliación laboral",
    "liquidación laboral conciliación",
    "prestaciones sociales conciliación",
    "conciliación extrajudicial laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",
  },

  openGraph: {
    title:
      "¿Qué es la conciliación laboral en Colombia? Requisitos, beneficios y proceso",

    description:
      "Descubre cómo resolver conflictos entre trabajadores y empleadores mediante conciliación laboral. Guía completa actualizada.",

    url: "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",

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
      "¿Qué es la conciliación laboral en Colombia? Guía completa para trabajadores y empleadores",

    description:
      "Conoce cómo funciona la conciliación laboral en Colombia, cuándo puede solicitarse, qué conflictos pueden resolverse, cuánto tarda el procedimiento y cuál es la validez jurídica del acta de conciliación.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/que-es-la-conciliacion-laboral",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo mediante el cual trabajadores y empleadores buscan resolver un conflicto relacionado con la relación laboral mediante un acuerdo voluntario con la intervención de un conciliador autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos laborales pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con salarios, prestaciones sociales, liquidaciones, vacaciones, indemnizaciones, bonificaciones, horas extras y otros derechos laborales permitidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral evita una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo, normalmente no es necesario acudir a un proceso judicial sobre los asuntos conciliados.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación laboral tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede prestar mérito ejecutivo cuando cumple los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quiénes pueden participar en una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden participar trabajadores, empleadores, representantes legales o apoderados debidamente autorizados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende de la complejidad del caso, aunque normalmente el procedimiento es mucho más rápido que un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe acuerdo, las partes conservan la posibilidad de acudir ante la jurisdicción laboral para que el conflicto sea resuelto por un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral puede realizarse de forma virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales cuando las condiciones legales lo permiten.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son las ventajas de conciliar antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Permite ahorrar tiempo, reducir costos, preservar la relación laboral cuando es posible y obtener acuerdos con efectos jurídicos sin un juicio prolongado.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <QueEsLaConciliacionLaboralContent />
    </>
  );
}
