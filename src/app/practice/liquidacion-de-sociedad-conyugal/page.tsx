import { Metadata } from "next";
import LiquidacionDeSociedadConyugalContent from "./LiquidacionDeSociedadConyugalContent";

export const metadata: Metadata = {
  title:
    "Liquidación de Sociedad Conyugal en Colombia | Reparto de Bienes sin Demanda | Sol Centro de Conciliación",

  description:
    "Realice la liquidación de sociedad conyugal en Colombia mediante conciliación. Acuerde el reparto de bienes, inmuebles, vehículos, deudas e inversiones sin procesos judiciales largos. Atención en Bogotá y todo Colombia.",

  keywords: [
    "liquidación de sociedad conyugal Colombia",
    "liquidación sociedad conyugal Bogotá",
    "reparto de bienes divorcio",
    "reparto de bienes separación",
    "cómo liquidar sociedad conyugal",
    "división de bienes matrimonio",
    "liquidación patrimonial Colombia",
    "liquidación de bienes unión marital",
    "liquidación de sociedad patrimonial",
    "conciliación reparto de bienes",
    "acuerdo de liquidación de bienes",
    "liquidación de activos y pasivos",
    "divorcio y reparto de bienes",
    "bienes adquiridos durante el matrimonio",
    "sociedad conyugal bienes",
    "cómo repartir bienes después del divorcio",
    "centro de conciliación Bogotá",
    "conciliación de familia Colombia",
  ],

  authors: [
    {
      name: "Sol Centro de Conciliación",
    },
  ],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",
  },

  openGraph: {
    title:
      "Liquidación de Sociedad Conyugal en Colombia | Reparto Legal de Bienes sin Juicio",

    description:
      "Acuerde el reparto de bienes, inmuebles, vehículos, cuentas, inversiones y deudas mediante conciliación. Evite procesos judiciales largos y obtenga un acuerdo con validez legal.",

    url: "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Liquidación de sociedad conyugal en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Liquidación de Sociedad Conyugal | Reparto de Bienes en Colombia",

    description:
      "Resuelva la liquidación patrimonial mediante conciliación. Acuerdos rápidos, legales y sin largos procesos judiciales.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Derecho de Familia",
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación para Liquidación de Sociedad Conyugal en Colombia",

      description:
        "Servicio de conciliación para liquidar la sociedad conyugal, repartir bienes, activos, pasivos, inmuebles, vehículos, inversiones y obligaciones económicas derivadas del matrimonio o unión marital de hecho en Colombia.",

      url: "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación para liquidación de sociedad conyugal, división patrimonial y reparto de bienes",

      provider: {
        "@type": "Organization",

        name: "Sol Centro de Conciliación",

        url: "https://solcentrodeconciliacion.com",

        logo: {
          "@type": "ImageObject",
          url: "https://solcentrodeconciliacion.com/logo.png",
        },
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es la liquidación de sociedad conyugal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Es el procedimiento mediante el cual se distribuyen los bienes, derechos, activos y deudas adquiridos durante el matrimonio o la unión marital de hecho, permitiendo definir qué corresponde a cada una de las partes.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se puede liquidar la sociedad conyugal mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando ambas partes están dispuestas a llegar a un acuerdo, la conciliación permite realizar la liquidación sin acudir inicialmente a un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué bienes hacen parte de la sociedad conyugal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependiendo del caso, pueden incluirse inmuebles, vehículos, cuentas bancarias, inversiones, empresas, muebles, créditos y demás bienes adquiridos durante la vigencia de la sociedad conyugal.",
          },
        },

        {
          "@type": "Question",
          name: "¿También se reparten las deudas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Durante la liquidación también pueden definirse las obligaciones económicas y deudas que formen parte del patrimonio común.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si una persona no está de acuerdo con el reparto de bienes?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación busca facilitar un acuerdo entre las partes. Si no es posible lograrlo, podrán utilizarse los mecanismos judiciales previstos por la ley.",
          },
        },

        {
          "@type": "Question",
          name: "¿El acuerdo de conciliación tiene validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos legales y presta mérito ejecutivo cuando cumple los requisitos establecidos por la legislación colombiana.",
          },
        },

        {
          "@type": "Question",
          name: "¿Es necesario tener inventario de bienes antes de conciliar?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable contar con una relación clara de bienes, activos, pasivos y soportes documentales para facilitar una negociación organizada.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación ayuda a evitar un proceso judicial?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando se alcanza un acuerdo entre las partes, es posible evitar un proceso judicial largo, reduciendo tiempos, costos y conflictos familiares.",
          },
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "HowTo",

      name: "Cómo liquidar una sociedad conyugal mediante conciliación en Colombia",

      step: [
        {
          "@type": "HowToStep",
          name: "Identificar los bienes y deudas",
        },
        {
          "@type": "HowToStep",
          name: "Presentar la solicitud de conciliación",
        },
        {
          "@type": "HowToStep",
          name: "Asistir a la audiencia de conciliación",
        },
        {
          "@type": "HowToStep",
          name: "Llegar a un acuerdo sobre el reparto patrimonial",
        },
        {
          "@type": "HowToStep",
          name: "Firmar el acta de conciliación",
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SEO SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <LiquidacionDeSociedadConyugalContent />
    </>
  );
}
