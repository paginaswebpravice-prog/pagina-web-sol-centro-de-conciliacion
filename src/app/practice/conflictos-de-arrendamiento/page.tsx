import { Metadata } from "next";
import ConflictosDeArrendamientoContent from "./ConflictosDeArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conflictos de arrendamiento en Colombia | Conciliación entre arrendador y arrendatario en Bogotá",

  description:
    "Resuelva conflictos de arrendamiento en Colombia sin necesidad de demanda judicial. Conciliación para canon de arriendo, restitución de inmueble, incumplimientos de contrato, deudas y problemas entre arrendador y arrendatario en Bogotá y Colombia.",

  keywords: [
    "conflictos de arrendamiento Colombia",
    "conciliación arrendamientos Bogotá",
    "problemas arrendador y arrendatario",
    "incumplimiento contrato de arrendamiento",
    "restitución de inmueble Colombia",
    "canon de arrendamiento adeudado",
    "deudas de arriendo Colombia",
    "abogados arrendamiento Bogotá",
    "conciliación canon de arriendo",
    "problemas de alquiler Colombia",
    "desalojo arrendamiento conciliación",
    "conflictos inmobiliarios Colombia",
    "centro de conciliación arrendamiento",
    "conciliación extrajudicial arrendamientos",
  ],

  authors: [{ name: "Sol Centro de Conciliación" }],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",
  },

  openGraph: {
    title:
      "Conflictos de arrendamiento en Colombia | Soluciones legales sin demanda",

    description:
      "Evite procesos judiciales por arriendos. Conciliación rápida y legal para conflictos entre arrendadores y arrendatarios en Colombia.",

    url: "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación en conflictos de arrendamiento en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Conflictos de arrendamiento en Colombia | Conciliación legal rápida",

    description:
      "Resuelva problemas de arriendo, incumplimientos y restitución de inmueble mediante conciliación en Bogotá y Colombia.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Legal Services",
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",

      "@type": "LegalService",

      name: "Conciliación en conflictos de arrendamiento en Colombia",

      description:
        "Servicio de conciliación en Bogotá y Colombia para resolver conflictos entre arrendadores y arrendatarios relacionados con contratos de arrendamiento, canon de arriendo, restitución de inmueble y obligaciones contractuales.",

      url: "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType: "Conciliación en arrendamientos y conflictos inmobiliarios",

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

          name: "¿Qué conflictos de arrendamiento se pueden resolver mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación permite resolver conflictos relacionados con canon de arrendamiento, incumplimiento de contrato, restitución de inmueble, daños al bien arrendado, deudas por servicios públicos y terminación anticipada del contrato.",
          },
        },

        {
          "@type": "Question",

          name: "¿La conciliación de arrendamiento tiene validez legal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los acuerdos logrados en una conciliación quedan consignados en un acta con efectos legales y cumplimiento obligatorio para las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Se puede evitar un proceso de restitución de inmueble mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. En muchos casos la conciliación permite llegar a acuerdos de entrega del inmueble, pagos pendientes o reorganización de obligaciones sin acudir a un proceso judicial largo.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cuáles son los beneficios de conciliar un conflicto de arrendamiento?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación ayuda a ahorrar tiempo y costos legales, recuperar dinero más rápido, evitar demandas judiciales y encontrar soluciones prácticas entre arrendador y arrendatario.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo iniciar una conciliación de arrendamiento en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El proceso inicia con una solicitud ante un centro de conciliación autorizado. Posteriormente las partes son citadas a una audiencia para intentar llegar a un acuerdo legal.",
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

          name: "Conflictos de arrendamiento",

          item: "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",
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

      <ConflictosDeArrendamientoContent />
    </>
  );
}
