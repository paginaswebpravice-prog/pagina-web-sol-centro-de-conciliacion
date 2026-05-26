import { Metadata } from "next";
import CustodiaYRegimenDeVisitasContent from "./CustodiaYRegimenDeVisitasContent";

export const metadata: Metadata = {
  title:
    "Custodia y régimen de visitas en Colombia | Conciliación familiar y acuerdos legales en Bogotá",

  description:
    "Conciliación de custodia y régimen de visitas en Colombia. Acuerdos legales sobre cuidado personal, visitas, custodia compartida y bienestar de los hijos sin procesos judiciales largos en Bogotá y Colombia.",

  keywords: [
    "custodia de hijos Colombia",
    "régimen de visitas Colombia",
    "conciliación custodia Bogotá",
    "custodia compartida Colombia",
    "acuerdos de visitas hijos",
    "conciliación familiar Colombia",
    "custodia y visitas sin demanda",
    "abogados custodia hijos Bogotá",
    "cuidado personal menores Colombia",
    "acuerdos familiares legales",
    "centro de conciliación familia Bogotá",
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
      "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",
  },

  openGraph: {
    title:
      "Custodia y régimen de visitas en Colombia | Acuerdos legales sin demanda",

    description:
      "Resuelva conflictos de custodia y visitas mediante conciliación familiar en Colombia. Acuerdos legales rápidos y enfocados en el bienestar del menor.",

    url: "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custodia y régimen de visitas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Custodia y régimen de visitas en Colombia | Conciliación familiar",

    description:
      "Acuerdos legales sobre custodia, visitas y cuidado personal de hijos mediante conciliación en Colombia.",

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

      name: "Conciliación en custodia y régimen de visitas en Colombia",

      description:
        "Servicio de conciliación familiar para acuerdos de custodia, cuidado personal y régimen de visitas de hijos en Colombia sin necesidad de procesos judiciales largos.",

      url: "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación familiar en custodia de hijos y régimen de visitas",

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
          name: "¿Qué es la custodia de un hijo en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La custodia es el derecho y deber de cuidar, convivir y tomar decisiones relacionadas con el bienestar del menor.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué es el régimen de visitas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "El régimen de visitas regula el tiempo, forma y condiciones en las que uno de los padres puede compartir con sus hijos después de una separación.",
          },
        },

        {
          "@type": "Question",
          name: "¿La custodia y visitas se pueden conciliar sin juez?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En Colombia, muchos acuerdos de custodia y régimen de visitas pueden resolverse mediante conciliación familiar sin acudir inicialmente a un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Los acuerdos de conciliación tienen validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos legales y cumplimiento obligatorio en Colombia.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se puede modificar un acuerdo de custodia o visitas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Cuando cambian las necesidades del menor o las circunstancias familiares, los acuerdos pueden modificarse mediante una nueva conciliación.",
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
          name: "Custodia y régimen de visitas",
          item: "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",
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

      <CustodiaYRegimenDeVisitasContent />
    </>
  );
}
