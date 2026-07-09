import type { Metadata } from "next";
import EmpresaNoAsisteConciliacionContent from "./EmpresaNoAsisteConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Qué pasa si la empresa no asiste a la conciliación laboral en Colombia? Consecuencias legales, constancia y qué hacer en 2026",

  description:
    "Descubra qué ocurre cuando una empresa o empleador no asiste a una audiencia de conciliación laboral en Colombia, qué consecuencias puede generar la inasistencia, si se expide una constancia, qué derechos conserva el trabajador y cuáles son las alternativas disponibles después de la audiencia.",

  keywords: [
    "empresa no asiste conciliación",
    "empresa no asiste conciliación laboral",
    "empleador no asiste conciliación",
    "empleador no comparece conciliación",
    "qué pasa si la empresa no asiste a la conciliación",
    "qué pasa si el empleador no va a la conciliación",
    "empresa no fue a la conciliación laboral",
    "empresa no comparece audiencia de conciliación",
    "inasistencia audiencia conciliación laboral",
    "constancia de inasistencia conciliación",
    "constancia de no conciliación laboral",
    "conciliación laboral Colombia",
    "centro de conciliación laboral",
    "audiencia de conciliación laboral",
    "trabajador conciliación laboral",
    "conflicto laboral Colombia",
    "conciliación trabajador empleador",
    "qué hacer si la empresa no asiste",
    "empresa no responde conciliación",
    "empresa no comparece audiencia laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",
  },

  openGraph: {
    title:
      "¿Qué pasa si la empresa no asiste a la conciliación laboral en Colombia?",

    description:
      "Conozca las consecuencias jurídicas cuando un empleador no asiste a una audiencia de conciliación laboral, qué documento expide el conciliador y qué alternativas tiene el trabajador.",

    url: "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",

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
      "¿Qué pasa si la empresa no asiste a la conciliación laboral en Colombia?",

    description:
      "Guía completa sobre las consecuencias de la inasistencia del empleador a una audiencia de conciliación laboral, la constancia de no comparecencia y las alternativas disponibles para el trabajador.",

    keywords: [
      "empresa no asiste conciliación",
      "empleador no asiste conciliación",
      "conciliación laboral",
      "constancia de inasistencia",
      "trabajador",
      "conflicto laboral",
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
      "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué pasa si la empresa no asiste a la conciliación laboral?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando el empleador no comparece a la audiencia, el conciliador deja constancia de la inasistencia y no es posible celebrar un acuerdo conciliatorio durante esa diligencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿La empresa puede justificar la inasistencia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Dependiendo de las circunstancias, la empresa podrá presentar una justificación por su ausencia y, cuando corresponda, solicitar una nueva programación de la audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación puede realizarse sin la empresa?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. La conciliación requiere la participación de ambas partes para que pueda alcanzarse un acuerdo voluntario.",
        },
      },

      {
        "@type": "Question",

        name: "¿La empresa recibe una multa por no asistir a la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Las consecuencias dependen de las circunstancias del caso y de la normativa aplicable. La inasistencia queda registrada mediante la constancia correspondiente.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documento entrega el conciliador cuando la empresa no comparece?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Normalmente se expide una constancia o acta en la que se registra la inasistencia del empleador y el resultado de la audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿El trabajador puede continuar con otras actuaciones después de la audiencia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La ausencia del empleador no impide que el trabajador evalúe las alternativas legales disponibles para la protección de sus derechos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede programarse una nueva audiencia de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso concreto y de la voluntad de las partes, podrá evaluarse la posibilidad de realizar una nueva audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es importante conservar la constancia de inasistencia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Este documento permite acreditar el resultado de la audiencia y conservar un registro organizado del procedimiento conciliatorio.",
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

      <EmpresaNoAsisteConciliacionContent />
    </>
  );
}
