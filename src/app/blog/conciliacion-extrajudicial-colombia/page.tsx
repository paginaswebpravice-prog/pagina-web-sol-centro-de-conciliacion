import type { Metadata } from "next";
import ConciliacionExtrajudicialColombiaContent from "./ConciliacionExtrajudicialColombiaContent";

export const metadata: Metadata = {
  title:
    "Conciliación Extrajudicial en Colombia: Qué es, Cómo Funciona y Cuándo es Obligatoria | Guía 2026",

  description:
    "Aprende qué es la conciliación extrajudicial en Colombia, cuándo es obligatoria antes de demandar, qué asuntos pueden conciliarse, cuánto tarda, cuáles son sus beneficios y qué validez tiene el acta de conciliación.",

  keywords: [
    "conciliación extrajudicial Colombia",
    "qué es la conciliación extrajudicial",
    "cómo funciona la conciliación extrajudicial",
    "conciliación en derecho Colombia",
    "centro de conciliación Colombia",
    "acta de conciliación",
    "requisito de procedibilidad",
    "conciliación antes de demandar",
    "conciliación civil",
    "conciliación laboral",
    "conciliación familiar",
    "MASC Colombia",
    "solución alternativa de conflictos",
    "conciliación virtual Colombia",
    "conciliación jurídica Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title:
      "Conciliación Extrajudicial en Colombia: Qué es, Cómo Funciona y Cuándo Aplica",

    description:
      "Descubre cómo resolver conflictos mediante conciliación extrajudicial en Colombia, cuándo es obligatoria y cuáles son sus ventajas frente a un proceso judicial.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },
};
export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://solcentrodeconciliacion.com/blog/conciliacion-extrajudicial-colombia",
    },

    headline:
      "Conciliación Extrajudicial en Colombia: Qué es, Cómo Funciona y Cuándo es Obligatoria",

    alternativeHeadline:
      "Guía completa sobre la conciliación extrajudicial en Colombia",

    description:
      "Conoce qué es la conciliación extrajudicial en Colombia, cuándo debe realizarse antes de presentar una demanda, cuáles son sus beneficios, qué conflictos pueden resolverse y qué efectos legales tiene el acta de conciliación.",

    image:
      "https://solcentrodeconciliacion.com/images/blog/conciliacion-extrajudicial-colombia.jpg",

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

    datePublished: "2026-01-01",

    dateModified: "2026-07-07",

    inLanguage: "es-CO",

    articleSection: "Conciliación",

    keywords: [
      "conciliación extrajudicial",
      "conciliación Colombia",
      "MASC",
      "centros de conciliación",
      "acta de conciliación",
      "conciliación civil",
      "conciliación laboral",
      "conciliación familiar",
    ],

    about: {
      "@type": "Thing",
      name: "Conciliación Extrajudicial en Colombia",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación extrajudicial en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación extrajudicial es un mecanismo alternativo de solución de conflictos mediante el cual dos o más partes intentan llegar a un acuerdo con la ayuda de un conciliador autorizado, sin necesidad de acudir inicialmente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación extrajudicial es obligatoria antes de presentar una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En determinados asuntos sí puede constituir un requisito de procedibilidad antes de presentar una demanda judicial. Su aplicación depende del tipo de conflicto y de la normativa vigente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es posible conciliar numerosos conflictos civiles, comerciales, familiares y laborales, siempre que la ley permita a las partes llegar a un acuerdo sobre los derechos en discusión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del conflicto y de la disponibilidad de las partes. Muchos casos pueden resolverse en una sola audiencia cuando existe voluntad para llegar a un acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si la otra parte no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si la persona convocada no comparece, el conciliador dejará la constancia correspondiente. Dependiendo del caso, este documento puede ser necesario para continuar con las acciones judiciales previstas por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y, según el caso, puede prestar mérito ejecutivo, lo que permite exigir el cumplimiento de los acuerdos alcanzados.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación extrajudicial puede realizarse de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados ofrecen la posibilidad de realizar audiencias virtuales, siempre que se cumplan los requisitos establecidos por la normativa colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para asistir a una conciliación extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del tipo de asunto, las partes pueden asistir directamente o contar con el acompañamiento de un abogado para recibir orientación jurídica y proteger mejor sus intereses durante la audiencia.",
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

      <ConciliacionExtrajudicialColombiaContent />
    </>
  );
}
