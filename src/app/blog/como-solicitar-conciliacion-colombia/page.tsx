import type { Metadata } from "next";
import ComoSolicitarConciliacionColombiaContent from "./ComoSolicitarConciliacionColombiaContent";

export const metadata: Metadata = {
  title:
    "Cómo solicitar una conciliación en Colombia (Paso a paso 2026) | Requisitos, documentos y trámite",

  description:
    "Aprenda cómo solicitar una conciliación en Colombia paso a paso. Conozca dónde presentar la solicitud, requisitos, documentos, costos, tiempos de respuesta y cómo es el trámite ante un centro de conciliación.",

  keywords: [
    "cómo solicitar una conciliación",
    "cómo solicitar conciliación Colombia",
    "solicitud de conciliación",
    "cómo iniciar una conciliación",
    "cómo pedir una conciliación",
    "requisitos para solicitar conciliación",
    "documentos para conciliación",
    "centros de conciliación Colombia",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial",
    "conciliación Colombia",
    "conciliación Bogotá",
    "trámite conciliación",
    "MASC Colombia",
    "audiencia de conciliación",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
  },

  openGraph: {
    title: "Cómo solicitar una conciliación en Colombia | Guía paso a paso",

    description:
      "Descubra cómo solicitar una conciliación en Colombia, qué documentos necesita, dónde presentar la solicitud y cómo funciona todo el procedimiento.",

    url: "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo solicitar una conciliación en Colombia | Paso a paso",

    description:
      "Guía completa para iniciar una conciliación en Colombia, requisitos, documentos y proceso.",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: "Cómo solicitar una conciliación en Colombia: guía paso a paso",

    description:
      "Aprenda cómo iniciar una conciliación en Colombia, dónde presentar la solicitud, qué documentos debe aportar, cuáles son los requisitos y cómo se desarrolla el procedimiento.",

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
      "@id":
        "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
    },
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

        name: "Cómo solicitar una conciliación en Colombia",

        item: "https://solcentrodeconciliacion.com/blog/como-solicitar-conciliacion-colombia",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Cómo solicitar una conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Debe presentar una solicitud ante un centro de conciliación autorizado, una notaría habilitada o un consultorio jurídico, indicando los datos de las partes, la descripción del conflicto y los documentos que respalden su solicitud.",
        },
      },
      {
        "@type": "Question",

        name: "¿Dónde puedo solicitar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación puede solicitarse en centros de conciliación autorizados, notarías con funciones conciliatorias, consultorios jurídicos universitarios y otras entidades habilitadas por la ley.",
        },
      },
      {
        "@type": "Question",

        name: "¿Qué documentos necesito para solicitar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente se requiere documento de identidad, datos de la otra parte, una descripción clara del conflicto y cualquier contrato, factura, comprobante o documento relacionado con el caso.",
        },
      },
      {
        "@type": "Question",

        name: "¿Necesito abogado para iniciar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "En la mayoría de los casos no es obligatorio contar con abogado para presentar una solicitud de conciliación, aunque puede ser recomendable cuando el conflicto es complejo.",
        },
      },
      {
        "@type": "Question",

        name: "¿Cuánto demora una conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El tiempo depende de la complejidad del caso y de la disponibilidad de las partes. Muchos procesos pueden resolverse en una sola audiencia cuando existe voluntad de llegar a un acuerdo.",
        },
      },
      {
        "@type": "Question",

        name: "¿La conciliación puede realizarse de manera virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Muchos centros de conciliación ofrecen audiencias virtuales con la misma validez jurídica que las presenciales, siempre que se cumplan los requisitos legales.",
        },
      },
      {
        "@type": "Question",

        name: "¿Qué pasa si la otra parte no asiste a la audiencia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, el centro de conciliación puede expedir una constancia de inasistencia, documento que puede ser necesario para continuar con otras actuaciones legales.",
        },
      },
      {
        "@type": "Question",

        name: "¿Qué validez tiene el acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene plenos efectos jurídicos y, cuando la ley lo permite, puede prestar mérito ejecutivo para exigir judicialmente el cumplimiento de lo acordado.",
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ComoSolicitarConciliacionColombiaContent />
    </>
  );
}
