import { Metadata } from "next";
import IncumplimientoDeContratosContent from "./IncumplimientoDeContratosContent";

export const metadata: Metadata = {
  title:
    "¿Incumplieron un contrato? Conciliación por incumplimiento de contratos en Colombia",

  description:
    "¿Incumplieron un contrato? Resuelva conflictos por incumplimiento de contratos civiles, comerciales, de prestación de servicios, compraventa, arrendamiento y contratos entre empresas mediante conciliación en Colombia. Evite procesos judiciales largos y obtenga acuerdos con validez legal.",

  keywords: [
    "incumplimiento de contrato Colombia",
    "incumplimiento contractual",
    "demanda por incumplimiento de contrato",
    "conciliación contractual",
    "conciliación contratos Bogotá",
    "conflictos contractuales",
    "incumplimiento contrato prestación de servicios",
    "incumplimiento contrato de compraventa",
    "incumplimiento contrato comercial",
    "incumplimiento contrato civil",
    "resolver incumplimiento de contrato",
    "cómo demandar por incumplimiento de contrato",
    "qué hacer si incumplen un contrato",
    "conciliación comercial",
    "acuerdos contractuales",
    "renegociación de contratos",
    "incumplimiento de obligaciones contractuales",
    "incumplimiento entre empresas",
    "incumplimiento entre particulares",
    "conciliación empresarial",
    "contratos civiles Colombia",
    "contratos comerciales Colombia",
    "incumplimiento prestación de servicios",
    "incumplimiento pago contrato",
    "centro de conciliación contratos",
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
      "¿Incumplieron un contrato? Solución legal mediante conciliación en Colombia",

    description:
      "Recupere pagos, renegocie obligaciones o llegue a acuerdos legales sin acudir a un proceso judicial por incumplimiento de contrato.",

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

    title:
      "Incumplimiento de contratos | Solución rápida mediante conciliación",

    description:
      "Concilie conflictos derivados de contratos civiles, comerciales o de prestación de servicios sin iniciar una demanda.",

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
        "Conciliación por incumplimiento de contratos civiles, comerciales, empresariales, prestación de servicios, compraventa y obligaciones contractuales",

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

        {
          "@type": "Question",
          name: "¿Qué pasa cuando una persona incumple un contrato en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cuando una de las partes incumple las obligaciones pactadas, la otra puede intentar resolver el conflicto mediante conciliación o acudir posteriormente a las acciones judiciales correspondientes.",
          },
        },

        {
          "@type": "Question",
          name: "¿Se puede conciliar un contrato de prestación de servicios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Los conflictos derivados de contratos de prestación de servicios pueden resolverse mediante conciliación cuando las partes buscan acuerdos sobre pagos, cumplimiento o terminación del contrato.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué documentos debo presentar en una conciliación contractual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable presentar el contrato, facturas, comprobantes de pago, correos electrónicos, mensajes, cotizaciones y cualquier documento relacionado con el incumplimiento.",
          },
        },

        {
          "@type": "Question",
          name: "¿Puede una empresa acudir a conciliación por incumplimiento contractual?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Empresas, comerciantes y personas naturales pueden acudir a conciliación para resolver conflictos derivados de relaciones comerciales o civiles.",
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
