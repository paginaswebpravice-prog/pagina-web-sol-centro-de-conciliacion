import { Metadata } from "next";
import ModeloActaConciliacionContent from "./ModeloActaConciliacionContent";

export const metadata: Metadata = {
  title:
    "Modelo de Acta de Conciliación en Colombia: Ejemplo, Formato y Guía Completa (2026)",

  description:
    "Descubre un modelo de acta de conciliación en Colombia con ejemplo práctico, formato explicado, requisitos legales, estructura, efectos jurídicos y recomendaciones para elaborar acuerdos válidos.",

  keywords: [
    "modelo acta de conciliación",
    "modelo acta conciliación Colombia",
    "ejemplo acta de conciliación",
    "formato acta conciliación",
    "cómo hacer un acta de conciliación",
    "estructura acta conciliación",
    "acta de conciliación ejemplo Colombia",
    "requisitos acta conciliación",
    "acta conciliación civil",
    "acta conciliación familiar",
    "acta conciliación comercial",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
  },

  openGraph: {
    title: "Modelo de Acta de Conciliación en Colombia (Ejemplo Completo 2026)",

    description:
      "Aprende cómo elaborar un acta de conciliación con un ejemplo completo, requisitos legales, estructura y recomendaciones prácticas.",

    url: "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Modelo de Acta de Conciliación en Colombia | Ejemplo y Formato",

    description:
      "Ejemplo práctico, estructura y guía para elaborar un acta de conciliación con validez legal.",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",

      "@type": "Article",

      headline:
        "Modelo de Acta de Conciliación en Colombia: Ejemplo, Formato y Requisitos",

      description:
        "Guía completa para conocer cómo elaborar un modelo de acta de conciliación en Colombia, incluyendo ejemplo práctico, estructura, efectos legales y recomendaciones.",

      keywords:
        "modelo acta conciliación, ejemplo acta conciliación, formato acta conciliación, conciliación Colombia",

      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      inLanguage: "es-CO",

      datePublished: "2026-01-01",

      dateModified: "2026-07-14",

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
      },
    },
    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué es un modelo de acta de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Es un formato de referencia que muestra la estructura general de un acta de conciliación y sirve como guía para documentar los acuerdos alcanzados entre las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿El acta de conciliación tiene validez legal?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Cuando cumple los requisitos establecidos por la legislación colombiana, el acta presta mérito ejecutivo y hace tránsito a cosa juzgada.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué debe contener un acta de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Debe incluir la identificación de las partes, el conflicto, los acuerdos alcanzados, las obligaciones, las fechas de cumplimiento y las firmas correspondientes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Puedo utilizar un mismo modelo para cualquier conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "No. Cada conciliación tiene particularidades, por lo que el contenido del acta debe adaptarse al caso concreto.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué sucede si una persona incumple el acta?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La parte afectada puede acudir ante un juez para solicitar el cumplimiento de las obligaciones cuando el acta cumple los requisitos legales.",
          },
        },
      ],
    },
    {
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
          name: "Modelo de acta de conciliación",
          item: "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ModeloActaConciliacionContent />
    </>
  );
}
