import type { Metadata } from "next";
import ReclamacionSalarialConciliacionContent from "./ReclamacionSalarialConciliacionContent";

export const metadata: Metadata = {
  title:
    "Reclamación salarial mediante conciliación en Colombia | ¿Cómo reclamar salarios pendientes sin demandar? (Guía 2026)",

  description:
    "Aprende cómo reclamar salarios pendientes, horas extras, prestaciones sociales, comisiones y liquidaciones mediante conciliación laboral en Colombia. Guía completa 2026 para trabajadores y empleadores.",

  keywords: [
    "reclamación salarial Colombia",
    "reclamar salarios pendientes",
    "salarios atrasados Colombia",
    "conciliación laboral Colombia",
    "conciliación por salarios",
    "empleador no paga salario",
    "reclamar prestaciones sociales",
    "reclamar horas extras",
    "liquidación laboral",
    "conciliación trabajador empleador",
    "pago de salarios atrasados",
    "acuerdo laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",
  },

  openGraph: {
    title:
      "¿Cómo reclamar salarios pendientes mediante conciliación en Colombia?",

    description:
      "Descubre cómo recuperar salarios atrasados, prestaciones sociales, horas extras y otros derechos laborales mediante conciliación antes de acudir a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Cómo reclamar salarios pendientes mediante conciliación laboral?",

    description:
      "Guía práctica para trabajadores y empleadores sobre reclamaciones salariales mediante conciliación en Colombia.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "¿Cómo reclamar salarios pendientes mediante conciliación en Colombia?",

    description:
      "Guía completa sobre reclamaciones salariales mediante conciliación laboral en Colombia. Conoce cómo reclamar salarios, prestaciones sociales, horas extras, comisiones y otros derechos laborales.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    articleSection: "Conciliación Laboral",

    keywords:
      "reclamación salarial, conciliación laboral Colombia, salarios pendientes, prestaciones sociales, horas extras, liquidación laboral",

    about: [
      "Conciliación laboral",
      "Reclamación salarial",
      "Salarios pendientes",
      "Prestaciones sociales",
      "Derecho laboral colombiano",
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Puedo reclamar salarios pendientes mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación laboral permite que trabajador y empleador intenten resolver voluntariamente conflictos relacionados con salarios pendientes antes de acudir a un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué derechos laborales pueden reclamarse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, pueden discutirse salarios pendientes, horas extras, prestaciones sociales, vacaciones, comisiones, bonificaciones, liquidaciones laborales y otros conceptos susceptibles de conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos debo llevar a una conciliación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable presentar contrato de trabajo, desprendibles de nómina, comprobantes de pago, liquidaciones, comunicaciones entre las partes y cualquier soporte relacionado con la reclamación.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acuerdo logrado en conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acuerdo queda consignado en un acta de conciliación que produce efectos jurídicos y establece obligaciones para las partes conforme a la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede acordarse un pago por cuotas durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Las partes pueden pactar pagos inmediatos, pagos parciales o cronogramas de pago por cuotas, siempre que exista acuerdo entre ellas.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si no se logra un acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si no se alcanza un acuerdo, las partes conservan la posibilidad de acudir a las acciones judiciales previstas por la legislación laboral colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio asistir con abogado a una conciliación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La necesidad de contar con abogado dependerá de las circunstancias particulares del caso. Recibir orientación jurídica puede facilitar la toma de decisiones durante la conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación laboral es más rápida que un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos sí. La conciliación permite intentar una solución negociada en menos tiempo que un proceso judicial laboral, aunque la duración dependerá de cada situación concreta.",
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

      <ReclamacionSalarialConciliacionContent />
    </>
  );
}
