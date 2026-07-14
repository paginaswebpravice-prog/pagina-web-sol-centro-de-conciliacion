import { Metadata } from "next";
import PasoAPasoDelTramiteContent from "./PasoAPasoDelTramiteContent";

export const metadata: Metadata = {
  title:
    "Paso a paso del trámite de conciliación en Colombia (Guía 2026): requisitos, audiencia y acta final",

  description:
    "Conoce cómo es el trámite de conciliación en Colombia paso a paso. Aprende cómo presentar la solicitud, qué sucede en la audiencia, cuánto tarda el proceso, qué documentos necesitas y qué efectos tiene el acta de conciliación.",

  keywords: [
    "paso a paso conciliación Colombia",
    "trámite de conciliación Colombia",
    "cómo hacer una conciliación",
    "cómo funciona una conciliación",
    "proceso conciliación Colombia",
    "audiencia de conciliación",
    "solicitud de conciliación",
    "centro de conciliación",
    "acta de conciliación",
    "conciliación extrajudicial",
    "conciliación civil",
    "conciliación familiar",
    "conciliación laboral",
    "conciliación Bogotá",
    "qué pasa en una audiencia de conciliación",
    "cómo solicitar conciliación",
    "duración de una conciliación",
    "documentos para conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",
  },

  openGraph: {
    title:
      "¿Cómo es el trámite de conciliación en Colombia? Guía paso a paso (2026)",

    description:
      "Descubre cada etapa del proceso de conciliación en Colombia: solicitud, citación, audiencia, acuerdos, firma del acta y efectos jurídicos.",

    url: "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Proceso de conciliación en Colombia explicado paso a paso",

    description:
      "Guía completa para entender cómo funciona una conciliación en Colombia desde la solicitud hasta el acta final.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Paso a paso del trámite de conciliación en Colombia: guía completa 2026",

    description:
      "Guía práctica para conocer todas las etapas del trámite de conciliación en Colombia, desde la presentación de la solicitud hasta la expedición del acta de conciliación.",

    keywords:
      "conciliación Colombia, trámite conciliación, audiencia conciliación, acta conciliación, solicitud conciliación",

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

      "@id": "https://solcentrodeconciliacion.com/blog/paso-a-paso-del-tramite",
    },
  };

  const howToSchema = {
    "@context": "https://schema.org",

    "@type": "HowTo",

    name: "Cómo realizar el trámite de conciliación en Colombia",

    description:
      "Explicación paso a paso del proceso de conciliación en Colombia.",

    totalTime: "P30D",

    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Presentar la solicitud",
        text: "El interesado radica una solicitud de conciliación indicando los hechos, las partes involucradas y sus pretensiones.",
      },

      {
        "@type": "HowToStep",
        position: 2,
        name: "Revisión del caso",
        text: "El centro de conciliación analiza si el asunto puede ser conciliado conforme a la legislación colombiana.",
      },

      {
        "@type": "HowToStep",
        position: 3,
        name: "Citación de las partes",
        text: "Se programa una audiencia y se notifica a las personas involucradas.",
      },

      {
        "@type": "HowToStep",
        position: 4,
        name: "Audiencia de conciliación",
        text: "Las partes dialogan con la ayuda del conciliador buscando llegar a un acuerdo voluntario.",
      },

      {
        "@type": "HowToStep",
        position: 5,
        name: "Firma del acta",
        text: "Si existe acuerdo, se firma un acta con efectos jurídicos; de lo contrario se expide la constancia correspondiente.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo es el paso a paso de una conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El trámite normalmente comprende la presentación de la solicitud, la revisión del caso por el centro de conciliación, la citación de las partes, la audiencia de conciliación y la expedición del acta de conciliación o de la constancia correspondiente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda un proceso de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de la disponibilidad de las partes y de la complejidad del caso. Generalmente es mucho más rápido que un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se recomienda presentar el documento de identidad, contratos, facturas, comprobantes de pago, comunicaciones y cualquier otro documento relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra parte no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si la persona citada no comparece sin una justificación válida, el centro de conciliación podrá dejar constancia de la inasistencia, documento que puede tener efectos dentro de un eventual proceso judicial según el caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de conflicto. En algunos asuntos constituye un requisito de procedibilidad antes de presentar una demanda, mientras que en otros es completamente voluntaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si las partes llegan a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador elabora un acta de conciliación donde quedan consignados los compromisos adquiridos por las partes. Este documento tiene efectos jurídicos establecidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no hay acuerdo durante la audiencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando no es posible lograr un acuerdo, el conciliador expide una constancia de no conciliación, permitiendo que las partes continúen con las acciones legales que correspondan.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién dirige la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La audiencia es dirigida por un conciliador autorizado, quien actúa como un tercero imparcial para facilitar el diálogo entre las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para asistir a una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos no es obligatorio, aunque contar con asesoría jurídica puede facilitar la negociación y ayudar a proteger los derechos de cada una de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué validez tiene un acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando la conciliación finaliza con un acuerdo, el acta puede producir efectos jurídicos como prestar mérito ejecutivo y hacer tránsito a cosa juzgada, de acuerdo con la legislación colombiana.",
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

        name: "Paso a paso del trámite de conciliación",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PasoAPasoDelTramiteContent />
    </>
  );
}
