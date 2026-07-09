import type { Metadata } from "next";
import GastosExtraordinariosHijosContent from "./GastosExtraordinariosHijosContent";

export const metadata: Metadata = {
  title:
    "Gastos extraordinarios de los hijos en Colombia: quién los paga, ejemplos y cómo conciliarlos en 2026",

  description:
    "Descubre qué son los gastos extraordinarios de los hijos en Colombia, quién debe asumirlos, cuáles no están incluidos en la cuota alimentaria y cómo llegar a un acuerdo mediante conciliación familiar.",

  keywords: [
    "gastos extraordinarios hijos",
    "gastos extraordinarios hijos Colombia",
    "gastos extraordinarios cuota alimentaria",
    "qué son los gastos extraordinarios",
    "quién paga gastos extraordinarios hijos",
    "gastos médicos hijos",
    "gastos educativos hijos",
    "gastos escolares hijos",
    "conciliación familiar Colombia",
    "conciliación cuota alimentaria",
    "modificación cuota alimentaria",
    "padres separados Colombia",
    "derecho de familia Colombia",
    "centro de conciliación Bogotá",
    "conciliación Bogotá",
  ],

  authors: [
    {
      name: "Sol Centro de Conciliación",
    },
  ],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  category: "Derecho de Familia",

  classification: "Conciliación Familiar",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
  },

  openGraph: {
    title:
      "Gastos extraordinarios de los hijos en Colombia: quién los paga y cómo conciliarlos",

    description:
      "Aprende cuáles gastos hacen parte de la cuota alimentaria, cuáles son extraordinarios y cómo acordarlos legalmente mediante conciliación familiar.",

    url: "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "Gastos extraordinarios de los hijos en Colombia | Guía completa",

    description:
      "Todo sobre gastos extraordinarios, cuota alimentaria y conciliación familiar en Colombia.",
  },

  other: {
    "geo.region": "CO-DC",
    "geo.placename": "Bogotá",
    language: "es-CO",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline:
      "Gastos extraordinarios de los hijos en Colombia: quién debe pagarlos y cómo conciliarlos",

    description:
      "Guía completa sobre gastos extraordinarios de los hijos, cuota alimentaria y conciliación familiar en Colombia.",

    inLanguage: "es-CO",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    datePublished: "2026-01-01",

    dateModified: "2026-07-09",

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id":
        "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
    },

    keywords:
      "gastos extraordinarios hijos, cuota alimentaria, conciliación familiar, derecho de familia Colombia",

    articleSection: "Derecho de Familia",

    about: [
      {
        "@type": "Thing",

        name: "Conciliación Familiar",
      },

      {
        "@type": "Thing",

        name: "Cuota alimentaria",
      },

      {
        "@type": "Thing",

        name: "Gastos extraordinarios",
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

        name: "Gastos extraordinarios de los hijos",

        item: "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: "Gastos extraordinarios de los hijos en Colombia",

    url: "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",

    description:
      "Información sobre gastos extraordinarios de hijos, conciliación familiar y cuota alimentaria en Colombia.",

    inLanguage: "es-CO",

    isPartOf: {
      "@type": "WebSite",

      name: "Sol Centro de Conciliación",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los gastos extraordinarios de los hijos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son gastos que no hacen parte de la cuota alimentaria ordinaria y surgen por necesidades especiales, imprevistas o excepcionales del menor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién debe pagar los gastos extraordinarios de los hijos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente ambos padres deben contribuir de acuerdo con su capacidad económica o conforme al acuerdo de conciliación existente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los gastos médicos hacen parte de los gastos extraordinarios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, especialmente cuando corresponden a tratamientos, cirugías, medicamentos o procedimientos no contemplados dentro de la cuota alimentaria habitual.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los padres pueden acordar estos gastos mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación familiar permite establecer porcentajes, formas de pago, plazos y procedimientos para asumir los gastos extraordinarios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si uno de los padres incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si existe un acta de conciliación válida, el acuerdo puede exigirse por las vías legales correspondientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los gastos educativos siempre son extraordinarios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso concreto y de lo pactado por los padres. Algunos gastos educativos pueden estar incluidos dentro de la cuota alimentaria y otros no.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede modificarse un acuerdo sobre gastos extraordinarios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las circunstancias económicas o las necesidades del menor, es posible realizar una nueva conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite resolver el conflicto mediante acuerdos voluntarios y con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos sirven para demostrar un gasto extraordinario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facturas, recibos, órdenes médicas, matrículas, comprobantes de pago y demás documentos que acrediten la necesidad y el valor del gasto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a conciliación antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependerá del caso concreto y de la naturaleza del conflicto, pero la conciliación suele ser una alternativa eficaz para lograr acuerdos antes de acudir a un proceso judicial.",
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
          __html: JSON.stringify(webPageSchema),
        }}
      />

      <GastosExtraordinariosHijosContent />
    </>
  );
}
