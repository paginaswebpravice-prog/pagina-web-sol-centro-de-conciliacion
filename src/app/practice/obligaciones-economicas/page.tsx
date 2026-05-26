import { Metadata } from "next";
import ObligacionesEconomicasContent from "./ObligacionesEconomicasContent";

export const metadata: Metadata = {
  title:
    "Obligaciones económicas en Colombia | Conciliación de deudas y acuerdos de pago",

  description:
    "Conciliación de obligaciones económicas en Colombia. Resuelva deudas, acuerdos de pago y conflictos financieros sin procesos judiciales largos. Soluciones legales rápidas y efectivas en Bogotá y Colombia.",

  keywords: [
    "obligaciones económicas Colombia",
    "conciliación de deudas Colombia",
    "acuerdos de pago Bogotá",
    "resolver deudas sin demanda",
    "conciliación económica Colombia",
    "deudas entre particulares",
    "cobro de obligaciones Colombia",
    "negociación de deudas legales",
    "conciliación financiera Bogotá",
    "obligaciones comerciales Colombia",
    "acuerdo de pago legal",
    "centro de conciliación Bogotá",
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
      "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",
  },

  openGraph: {
    title:
      "Obligaciones económicas en Colombia | Acuerdos de pago y conciliación",

    description:
      "Resuelva deudas y obligaciones económicas mediante conciliación en Colombia. Evite demandas, embargos y procesos judiciales largos.",

    url: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Obligaciones económicas y conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Obligaciones económicas en Colombia | Conciliación de deudas",

    description:
      "Acuerdos legales para resolver deudas y obligaciones económicas sin procesos judiciales largos en Colombia.",

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

  category: "Derecho Civil y Financiero",
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación en obligaciones económicas en Colombia",

      description:
        "Servicio de conciliación para resolver deudas, obligaciones económicas y acuerdos de pago entre personas o empresas en Colombia sin necesidad de procesos judiciales.",

      url: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación en obligaciones económicas, deudas y acuerdos de pago",

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
          name: "¿Qué son las obligaciones económicas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Son compromisos financieros relacionados con pagos de dinero, préstamos, contratos, servicios u obligaciones comerciales entre personas o empresas.",
          },
        },

        {
          "@type": "Question",
          name: "¿Las deudas pueden resolverse mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Muchas deudas y conflictos económicos pueden resolverse mediante conciliación sin necesidad de iniciar procesos judiciales.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué pasa si no se paga una obligación económica?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "El incumplimiento puede generar demandas, procesos ejecutivos, embargos y otras consecuencias legales en Colombia.",
          },
        },

        {
          "@type": "Question",
          name: "¿Los acuerdos de pago tienen validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los acuerdos logrados en conciliación quedan consignados en un acta con efectos legales y cumplimiento obligatorio.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación ayuda a evitar embargos y demandas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación permite negociar soluciones rápidas y organizadas para evitar que el conflicto avance a procesos judiciales.",
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
          name: "Obligaciones económicas",
          item: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",
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

      <ObligacionesEconomicasContent />
    </>
  );
}
