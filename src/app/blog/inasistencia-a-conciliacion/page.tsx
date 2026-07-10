import type { Metadata } from "next";
import InasistenciaConciliacionContent from "./InasistenciaConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Qué pasa si no asisto a una conciliación en Colombia? Consecuencias legales (2026)",

  description:
    "Descubre qué ocurre si una persona no asiste a una audiencia de conciliación en Colombia. Conoce las consecuencias, la constancia de inasistencia, cuándo puedes demandar y qué hacer si tu ausencia estuvo justificada.",

  keywords: [
    "qué pasa si no asisto a una conciliación",
    "inasistencia a conciliación Colombia",
    "no asistir a audiencia de conciliación",
    "constancia de inasistencia conciliación",
    "qué pasa si no voy a conciliación",
    "consecuencias de no asistir a conciliación",
    "puedo demandar si no asistieron a conciliación",
    "conciliación prejudicial Colombia",
    "audiencia de conciliación Colombia",
    "centro de conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
  },

  openGraph: {
    title:
      "¿Qué pasa si no asisto a una conciliación en Colombia? Guía Completa",

    description:
      "Conoce las consecuencias legales de faltar a una audiencia de conciliación, cuándo se expide la constancia de inasistencia y si es posible presentar una demanda posteriormente.",

    url: "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",

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
      "¿Qué pasa si una persona no asiste a una conciliación en Colombia?",

    alternativeHeadline:
      "Consecuencias legales de no asistir a una audiencia de conciliación",

    description:
      "Conoce qué sucede cuando una persona no comparece a una audiencia de conciliación, cuándo se expide la constancia de inasistencia, si puede presentarse una demanda y cuáles son las consecuencias jurídicas.",

    keywords: [
      "inasistencia conciliación",
      "audiencia de conciliación",
      "constancia de inasistencia",
      "demanda después de conciliación",
      "conciliación Colombia",
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
      "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
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

        name: "¿Qué pasa si no asisto a una conciliación?",

        item: "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
      },
    ],
  };

  const speakableSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    speakable: {
      "@type": "SpeakableSpecification",

      cssSelector: ["h1", "h2", ".heroText"],
    },

    url: "https://solcentrodeconciliacion.com/blog/inasistencia-a-conciliacion",
  };

  const howToSchema = {
    "@context": "https://schema.org",

    "@type": "HowTo",

    name: "Qué hacer cuando la otra persona no asiste a una conciliación",

    step: [
      {
        "@type": "HowToStep",

        name: "Asistir a la audiencia",

        text: "Presentarse en la fecha y hora indicadas por el centro de conciliación.",
      },

      {
        "@type": "HowToStep",

        name: "Esperar el llamado",

        text: "El conciliador verificará la asistencia de las partes citadas.",
      },

      {
        "@type": "HowToStep",

        name: "Solicitar la constancia",

        text: "Si la otra parte no comparece, el conciliador podrá expedir la constancia de inasistencia según corresponda.",
      },

      {
        "@type": "HowToStep",

        name: "Continuar el trámite",

        text: "Dependiendo del asunto, la constancia permitirá iniciar otras actuaciones legales o judiciales.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué pasa si una persona no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador puede expedir una constancia de inasistencia que podrá utilizarse para continuar con otras actuaciones legales o judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo demandar si la otra parte no asiste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos la constancia emitida por el centro de conciliación permite acreditar el intento conciliatorio previo y continuar con la demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿La audiencia se reprograma automáticamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La decisión dependerá de las circunstancias del caso y de las reglas aplicables al trámite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si llego tarde a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependerá de las circunstancias y de si la audiencia continúa desarrollándose. Lo recomendable es informar oportunamente cualquier retraso al centro de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo justificar mi inasistencia a una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando existe una causa debidamente justificada, esta puede ponerse en conocimiento del centro de conciliación para que sea valorada conforme al procedimiento aplicable.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación puede programarse nuevamente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos casos sí. La posibilidad de reprogramar dependerá de la naturaleza del conflicto y de las circunstancias que dieron lugar a la inasistencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿La constancia de inasistencia tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La constancia expedida por el centro de conciliación puede servir para demostrar que se intentó resolver el conflicto mediante conciliación antes de acudir a otras instancias.",
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(speakableSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
      />

      <InasistenciaConciliacionContent />
    </>
  );
}
