import type { Metadata } from "next";
import LiquidacionSociedadPatrimonialContent from "./LiquidacionSociedadPatrimonialContent";

export const metadata: Metadata = {
  title:
    "Liquidación de Sociedad Patrimonial en Colombia (2026): Cómo Repartir Bienes por Conciliación",

  description:
    "Aprende cómo realizar la liquidación de la sociedad patrimonial entre compañeros permanentes mediante conciliación en Colombia. Conoce requisitos, bienes que pueden repartirse, documentos, ventajas y qué hacer si no existe acuerdo.",

  keywords: [
    "liquidación sociedad patrimonial",
    "liquidación de sociedad patrimonial colombia",
    "sociedad patrimonial compañeros permanentes",
    "repartición de bienes unión marital de hecho",
    "conciliación sociedad patrimonial",
    "liquidación bienes compañeros permanentes",
    "cómo liquidar sociedad patrimonial",
    "unión marital de hecho bienes",
    "conciliación familiar colombia",
    "liquidación unión marital de hecho",
    "distribución de bienes compañeros permanentes",
    "liquidación patrimonio pareja",
    "conciliación bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",
  },

  openGraph: {
    title: "Liquidación de Sociedad Patrimonial por Conciliación en Colombia",

    description:
      "Descubre cómo repartir los bienes entre compañeros permanentes mediante conciliación, evitando procesos judiciales largos y costosos.",

    url: "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",

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
      "Liquidación de sociedad patrimonial por conciliación en Colombia",

    alternativeHeadline:
      "Cómo liquidar una sociedad patrimonial entre compañeros permanentes",

    description:
      "Guía completa sobre la liquidación de sociedad patrimonial entre compañeros permanentes mediante conciliación en Colombia.",

    keywords:
      "liquidación sociedad patrimonial, conciliación familiar, unión marital de hecho, reparto de bienes, compañeros permanentes",

    inLanguage: "es-CO",

    author: {
      "@type": "Organization",

      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",

      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/liquidacion-sociedad-patrimonial",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué es la liquidación de la sociedad patrimonial entre compañeros permanentes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es el procedimiento mediante el cual los compañeros permanentes acuerdan la distribución de los bienes, derechos y obligaciones adquiridos durante la unión marital de hecho, pudiendo realizarse mediante conciliación cuando existe voluntad de ambas partes.",
        },
      },

      {
        "@type": "Question",

        name: "¿La liquidación de sociedad patrimonial puede hacerse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación permite que los compañeros permanentes lleguen a acuerdos sobre la distribución del patrimonio sin acudir inicialmente a un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué bienes pueden incluirse en una liquidación de sociedad patrimonial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, pueden incluirse inmuebles, vehículos, cuentas bancarias, inversiones, establecimientos de comercio, muebles y otros bienes adquiridos durante la convivencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si no existe acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando no es posible llegar a un acuerdo, las partes pueden acudir a las acciones judiciales previstas por la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez jurídica?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación produce efectos legales y obliga a las partes a cumplir los compromisos adquiridos en ella.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tarda una conciliación para liquidar una sociedad patrimonial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El tiempo depende de la complejidad del patrimonio y de la disposición de las partes para llegar a acuerdos, aunque normalmente resulta más rápida que un proceso judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuál es la diferencia entre sociedad patrimonial y sociedad conyugal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La sociedad patrimonial surge entre compañeros permanentes que conforman una unión marital de hecho, mientras que la sociedad conyugal nace con el matrimonio.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio contratar un abogado para una conciliación patrimonial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso concreto, las partes pueden recibir asesoría jurídica para comprender el alcance de los acuerdos y proteger adecuadamente sus derechos patrimoniales.",
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

      <LiquidacionSociedadPatrimonialContent />
    </>
  );
}
