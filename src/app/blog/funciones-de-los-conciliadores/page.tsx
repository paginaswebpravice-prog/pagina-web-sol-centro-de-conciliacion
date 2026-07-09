import type { Metadata } from "next";
import FuncionesConciliadoresContent from "./FuncionesConciliadoresContent";

export const metadata: Metadata = {
  title:
    "Funciones de los conciliadores en Colombia: qué hacen, responsabilidades y funciones legales (2026)",

  description:
    "Conoce cuáles son las funciones de un conciliador en Colombia, qué puede y qué no puede hacer, cuáles son sus responsabilidades legales y cómo interviene durante una audiencia de conciliación.",

  keywords: [
    "funciones del conciliador",
    "funciones de los conciliadores",
    "qué hace un conciliador",
    "qué hace un conciliador en Colombia",
    "rol del conciliador",
    "responsabilidades del conciliador",
    "facultades del conciliador",
    "conciliador Colombia",
    "conciliación extrajudicial",
    "centro de conciliación",
    "audiencia de conciliación",
    "MASC Colombia",
    "conciliador imparcial",
    "conciliación en derecho",
    "ley de conciliación Colombia",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
  },

  openGraph: {
    title:
      "Funciones de los conciliadores en Colombia | Qué hacen y cuál es su papel legal",

    description:
      "Descubre cuál es el papel del conciliador, cuáles son sus funciones, responsabilidades, límites y por qué su actuación es fundamental durante una conciliación.",

    url: "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Funciones de los conciliadores en Colombia | Guía completa",

    description:
      "Conoce las funciones, deberes y responsabilidades del conciliador durante un proceso de conciliación.",
  },

  category: "Conciliación",

  authors: [
    {
      name: "Sol Centro de Conciliación",
    },
  ],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Funciones de los conciliadores en Colombia: qué hacen y cuáles son sus responsabilidades",

    alternativeHeadline:
      "Rol del conciliador dentro de una audiencia de conciliación",

    description:
      "Guía completa sobre las funciones de los conciliadores en Colombia, sus responsabilidades, deberes, límites legales y el papel que cumplen dentro de una audiencia de conciliación.",

    keywords: [
      "funciones del conciliador",
      "rol del conciliador",
      "qué hace un conciliador",
      "conciliador Colombia",
      "conciliación extrajudicial",
    ],

    inLanguage: "es-CO",

    articleSection: "Conciliación",

    wordCount: "2400",

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

      "@id":
        "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Cuál es la función principal de un conciliador?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La principal función del conciliador es facilitar el diálogo entre las partes para que construyan un acuerdo voluntario, legal y equilibrado sin imponer decisiones.",
        },
      },

      {
        "@type": "Question",

        name: "¿El conciliador puede decidir quién tiene la razón?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. El conciliador no actúa como juez ni emite sentencias. Su papel consiste en orientar la comunicación y verificar que los acuerdos cumplan con la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿El conciliador debe ser imparcial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante todo el procedimiento debe actuar con absoluta imparcialidad, neutralidad y confidencialidad, brindando igualdad de oportunidades a ambas partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué responsabilidades tiene un conciliador?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Entre sus responsabilidades se encuentran explicar el procedimiento, promover el diálogo, verificar la legalidad del acuerdo, redactar correctamente el acta de conciliación y garantizar que las partes comprendan el alcance jurídico de lo pactado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede un conciliador obligar a aceptar un acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. La conciliación es un mecanismo completamente voluntario y el conciliador no puede obligar a ninguna persona a aceptar una propuesta.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si no se logra un acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si las partes no alcanzan un acuerdo, finaliza la audiencia sin conciliación y cada una conserva la posibilidad de acudir a las autoridades judiciales cuando la ley lo permita.",
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

        name: "Funciones de los conciliadores",

        item: "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: "Funciones de los conciliadores en Colombia",

    description:
      "Conoce el papel, responsabilidades y límites legales del conciliador durante un proceso de conciliación.",

    url: "https://solcentrodeconciliacion.com/blog/funciones-de-los-conciliadores",

    inLanguage: "es-CO",

    isPartOf: {
      "@type": "WebSite",

      name: "Sol Centro de Conciliación",

      url: "https://solcentrodeconciliacion.com",
    },
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
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <FuncionesConciliadoresContent />
    </>
  );
}
