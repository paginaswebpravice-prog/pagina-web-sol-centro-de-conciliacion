import { Metadata } from "next";
import LiquidacionDeSociedadConyugalContent from "./LiquidacionDeSociedadConyugalContent";

export const metadata: Metadata = {
  title:
    "Liquidación de sociedad conyugal en Colombia | Reparto de bienes y conciliación familiar",

  description:
    "Liquidación de sociedad conyugal en Colombia mediante conciliación. Reparto legal de bienes, deudas y activos tras separación o divorcio sin procesos judiciales largos en Bogotá y Colombia.",

  keywords: [
    "liquidación sociedad conyugal Colombia",
    "reparto de bienes divorcio Colombia",
    "conciliación sociedad conyugal Bogotá",
    "división de bienes matrimonio",
    "separación de bienes Colombia",
    "liquidación de bienes pareja",
    "liquidación patrimonial divorcio",
    "acuerdo de bienes divorcio",
    "conciliación familiar Colombia",
    "reparto de bienes sin demanda",
    "centro de conciliación familia Bogotá",
    "liquidación bienes unión marital",
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
      "Liquidación de sociedad conyugal en Colombia | Reparto legal de bienes",

    description:
      "Resuelva el reparto de bienes tras separación o divorcio mediante conciliación en Colombia. Soluciones legales rápidas y sin procesos judiciales largos.",

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

    title:
      "Liquidación de sociedad conyugal en Colombia | Conciliación familiar",

    description:
      "Acuerdos legales para reparto de bienes y liquidación patrimonial en Colombia sin procesos judiciales largos.",

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

      name: "Liquidación de sociedad conyugal en Colombia",

      description:
        "Servicio de conciliación para la liquidación de sociedad conyugal, reparto de bienes y división patrimonial tras separación o divorcio en Colombia.",

      url: "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación en liquidación de sociedad conyugal y reparto de bienes",

      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
        url: "https://solcentrodeconciliacion.com",
      },
    },

    {
      "@context": "https://schema.org",
      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es la liquidación de sociedad conyugal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Es el proceso mediante el cual se reparten los bienes, activos y deudas adquiridos durante el matrimonio o unión marital.",
          },
        },

        {
          "@type": "Question",
          name: "¿La liquidación de bienes puede hacerse sin juicio?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En muchos casos, la liquidación de sociedad conyugal puede realizarse mediante conciliación sin necesidad de iniciar un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué bienes entran en la sociedad conyugal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Pueden incluirse inmuebles, vehículos, cuentas bancarias, inversiones, bienes muebles y deudas adquiridas durante la relación.",
          },
        },

        {
          "@type": "Question",
          name: "¿Los acuerdos de conciliación tienen validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos jurídicos y cumplimiento obligatorio en Colombia.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación ayuda a evitar conflictos familiares?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación permite alcanzar acuerdos más rápidos, organizados y menos desgastantes emocionalmente para ambas partes.",
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
          name: "Áreas de práctica",
          item: "https://solcentrodeconciliacion.com/practice",
        },

        {
          "@type": "ListItem",
          position: 3,
          name: "Liquidación de sociedad conyugal",
          item: "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",
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
