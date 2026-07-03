import { Metadata } from "next";
import ActaAlimentosContent from "./ActaAlimentosContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación de alimentos en Colombia: ejemplo, formato y cómo hacerla (Guía 2026)",

  description:
    "Conoce cómo elaborar un acta de conciliación de alimentos en Colombia con ejemplo completo, formato, requisitos, documentos, efectos legales, incumplimiento, modificación de la cuota alimentaria y procedimiento paso a paso.",

  keywords: [
    "acta de conciliación de alimentos Colombia",
    "ejemplo acta de conciliación alimentos",
    "formato acta conciliación alimentos",
    "modelo acta conciliación alimentos",
    "conciliación alimentos Bogotá",
    "conciliación familiar Colombia",
    "cuota alimentaria Colombia",
    "modificar cuota alimentaria",
    "incumplimiento cuota alimentaria",
    "documentos conciliación alimentos",
    "cómo hacer un acta de conciliación",
    "centro de conciliación alimentos",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acta-alimentos",
  },

  openGraph: {
    title:
      "Acta de conciliación de alimentos en Colombia: ejemplo, formato y requisitos",

    description:
      "Guía completa con ejemplo de acta de conciliación de alimentos, formato, requisitos, documentos y efectos legales en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/acta-alimentos",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://solcentrodeconciliacion.com/og/acta-alimentos.jpg",
        width: 1200,
        height: 630,
        alt: "Acta de conciliación de alimentos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Acta de conciliación de alimentos: ejemplo y formato en Colombia",

    description:
      "Guía práctica para elaborar un acta de conciliación de alimentos con ejemplo, requisitos y efectos legales.",

    images: ["https://solcentrodeconciliacion.com/logo_sol.jpg"],
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",

      "@type": "Article",

      headline:
        "Acta de conciliación de alimentos en Colombia: ejemplo, formato, requisitos y guía completa 2026",

      description:
        "Guía completa para elaborar un acta de conciliación de alimentos en Colombia. Incluye ejemplo, formato, documentos, requisitos, efectos legales, incumplimiento y modificación de la cuota alimentaria.",

      image: "https://solcentrodeconciliacion.com/logo_sol.jpg",

      inLanguage: "es-CO",

      datePublished: "2026-01-01",

      dateModified: "2026-07-03",

      wordCount: "4200",

      articleSection: "Derecho de Familia",

      keywords: [
        "acta de conciliación de alimentos",
        "conciliación familiar",
        "cuota alimentaria",
        "derecho de familia",
        "conciliación Colombia",
      ],

      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },

      publisher: {
        "@type": "Organization",

        name: "Sol Centro de Conciliación",

        logo: {
          "@type": "ImageObject",
          url: "https://solcentrodeconciliacion.com/logo.png",
        },
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/acta-alimentos",
      },

      about: [
        {
          "@type": "Thing",
          name: "Conciliación de alimentos",
        },
        {
          "@type": "Thing",
          name: "Cuota alimentaria",
        },
        {
          "@type": "Thing",
          name: "Derecho de familia",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué es un acta de conciliación de alimentos en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Es un documento legal mediante el cual las partes acuerdan la cuota alimentaria, la forma de pago y demás obligaciones relacionadas con los alimentos, produciendo efectos jurídicos exigibles.",
          },
        },

        {
          "@type": "Question",

          name: "¿El acta de conciliación tiene validez legal?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. El acta presta mérito ejecutivo y hace tránsito a cosa juzgada conforme a la legislación colombiana.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué pasa si no se cumple el acta de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La parte afectada puede iniciar un proceso ejecutivo para exigir el cumplimiento de las obligaciones pactadas.",
          },
        },

        {
          "@type": "Question",

          name: "¿Se puede modificar una cuota alimentaria?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Cuando cambian las circunstancias económicas o las necesidades del beneficiario, puede realizarse una nueva conciliación.",
          },
        },

        {
          "@type": "Question",

          name: "¿Dónde puede hacerse una conciliación de alimentos?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "En centros de conciliación autorizados, consultorios jurídicos y demás entidades habilitadas por la ley colombiana.",
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
          name: "Acta de conciliación de alimentos",
          item: "https://solcentrodeconciliacion.com/blog/acta-alimentos",
        },
      ],
    },

    {
      "@context": "https://schema.org",

      "@type": "WebPage",

      name: "Acta de conciliación de alimentos en Colombia: ejemplo, formato y requisitos",

      url: "https://solcentrodeconciliacion.com/blog/acta-alimentos",

      description:
        "Guía completa sobre el acta de conciliación de alimentos en Colombia, con ejemplo, formato, requisitos, efectos legales y preguntas frecuentes.",

      inLanguage: "es-CO",

      isPartOf: {
        "@type": "WebSite",
        name: "Sol Centro de Conciliación",
        url: "https://solcentrodeconciliacion.com",
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://solcentrodeconciliacion.com/logo_sol.jpg",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <ActaAlimentosContent />
    </>
  );
}
