import { Metadata } from "next";
import IncumplimientoDeContratosContent from "./IncumplimientoDeContratosContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de contratos en Colombia | Conciliación contractual y solución sin demanda",

  description:
    "Conciliación por incumplimiento de contratos en Colombia. Resuelva conflictos contractuales entre empresas o particulares sin procesos judiciales largos. Acuerdos legales rápidos y efectivos en Bogotá y Colombia.",

  keywords: [
    "incumplimiento de contrato Colombia",
    "conciliación contractual Colombia",
    "conciliación contratos Bogotá",
    "conflictos contractuales Colombia",
    "demanda por incumplimiento de contrato",
    "resolver contratos incumplidos",
    "incumplimiento contractual empresas",
    "conciliación comercial Bogotá",
    "renegociación de contratos Colombia",
    "acuerdos legales contratos",
    "centro de conciliación contratos Bogotá",
    "solución de conflictos contractuales",
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
      "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",
  },

  openGraph: {
    title:
      "Incumplimiento de contratos en Colombia | Conciliación legal sin demanda",

    description:
      "Resuelva conflictos por incumplimiento contractual mediante conciliación en Colombia. Evite procesos judiciales largos y alcance acuerdos con validez legal.",

    url: "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Incumplimiento de contratos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Incumplimiento de contratos en Colombia | Conciliación contractual",

    description:
      "Soluciones legales rápidas para conflictos contractuales y acuerdos por incumplimiento de contratos en Colombia.",

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

  category: "Derecho Civil y Comercial",
};

export default function Page() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación por incumplimiento de contratos en Colombia",

      description:
        "Servicio de conciliación para resolver conflictos derivados del incumplimiento de contratos entre empresas o particulares en Colombia sin necesidad de procesos judiciales largos.",

      url: "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación en conflictos contractuales e incumplimiento de contratos",

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
          name: "¿Qué es un incumplimiento de contrato?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Ocurre cuando una de las partes no cumple total o parcialmente las obligaciones pactadas en un contrato.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se puede resolver un incumplimiento de contrato sin demanda?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En muchos casos, los conflictos contractuales pueden resolverse mediante conciliación sin acudir inmediatamente a un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué conflictos contractuales se pueden conciliar?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Pueden conciliarse conflictos relacionados con pagos incumplidos, retrasos, prestación de servicios, entrega de productos, terminación de contratos y obligaciones comerciales.",
          },
        },

        {
          "@type": "Question",
          name: "¿Los acuerdos de conciliación tienen validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos legales y puede exigirse jurídicamente en Colombia.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación ayuda a evitar procesos judiciales largos?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. La conciliación permite encontrar soluciones más rápidas, económicas y prácticas frente a conflictos contractuales.",
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
          name: "Incumplimiento de contratos",
          item: "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",
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

      <IncumplimientoDeContratosContent />
    </>
  );
}
