import type { Metadata } from "next";
import DespidoInjustificadoConciliacionContent from "./DespidoInjustificadoConciliacionContent";

export const metadata: Metadata = {
  title:
    "Conciliación por Despido Injustificado en Colombia | Evite una Demanda Laboral",

  description:
    "¿Fue despedido sin justa causa o busca resolver un conflicto laboral? Conozca cómo funciona la conciliación por despido injustificado en Colombia, qué derechos pueden reclamarse, cómo negociar una indemnización y cuándo un acuerdo tiene validez jurídica.",

  keywords: [
    "despido injustificado conciliación",
    "conciliación laboral Colombia",
    "despido sin justa causa Colombia",
    "indemnización despido injustificado",
    "acuerdo laboral",
    "conciliación trabajador empleador",
    "conciliación Ministerio del Trabajo",
    "conflictos laborales",
    "liquidación laboral",
    "prestaciones sociales",
    "salarios pendientes",
    "acta de conciliación laboral",
    "centro de conciliación laboral",
    "conciliación Bogotá",
    "derechos del trabajador",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",
  },

  openGraph: {
    title:
      "Despido Injustificado en Colombia: ¿Cómo Resolverlo Mediante Conciliación?",

    description:
      "Aprenda cómo negociar indemnizaciones, liquidaciones y demás derechos laborales mediante conciliación antes de iniciar una demanda judicial.",

    url: "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",

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
      "Conciliación por Despido Injustificado en Colombia: Guía Completa para Trabajadores y Empleadores",

    description:
      "Conozca cómo resolver un despido injustificado mediante conciliación en Colombia, negociar indemnizaciones, salarios, prestaciones sociales y evitar procesos judiciales prolongados.",

    keywords: [
      "despido injustificado",
      "conciliación laboral",
      "indemnización laboral",
      "despido sin justa causa",
      "conflictos laborales",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué se considera un despido injustificado en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Se presenta cuando el empleador termina el contrato de trabajo sin una justa causa prevista por la ley o sin cumplir los requisitos legales correspondientes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Es posible resolver un despido injustificado mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación permite que trabajador y empleador lleguen a acuerdos relacionados con indemnizaciones, liquidaciones, salarios pendientes, prestaciones sociales y demás obligaciones laborales.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué derechos laborales pueden discutirse durante una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Pueden abordarse indemnizaciones, liquidación final, prestaciones sociales, vacaciones, salarios pendientes, bonos, acuerdos de pago y otros derechos derivados de la terminación del contrato.",
        },
      },

      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acuerdo queda consignado en un acta de conciliación que tiene efectos jurídicos y obliga a las partes a cumplir los compromisos adquiridos.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ocurre si el empleador incumple el acuerdo conciliatorio?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación constituye un documento con efectos legales que puede utilizarse para exigir el cumplimiento de las obligaciones pactadas.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación evita presentar una demanda laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En muchos casos sí. Cuando las partes alcanzan un acuerdo satisfactorio, la conciliación permite solucionar el conflicto sin necesidad de iniciar un proceso judicial.",
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

      <DespidoInjustificadoConciliacionContent />
    </>
  );
}
