import { Metadata } from "next";
import ObligacionesEconomicasContent from "./ObligacionesEconomicasContent";

export const metadata: Metadata = {
  title:
    "Obligaciones Económicas en Colombia | Acuerdos de Pago y Conciliación sin Demanda",

  description:
    "Resuelva obligaciones económicas, deudas y acuerdos de pago mediante conciliación en Colombia. Evite procesos ejecutivos, embargos y demandas con soluciones legales rápidas y válidas en Bogotá y todo el país.",

  keywords: [
    "obligaciones económicas Colombia",
    "conciliación obligaciones económicas",
    "conciliación de deudas",
    "acuerdo de pago Colombia",
    "acuerdos de pago legales",
    "negociación de deudas",
    "reconocimiento de deuda",
    "cobro de obligaciones",
    "proceso ejecutivo Colombia",
    "evitar embargo por deuda",
    "deudas entre particulares",
    "deudas comerciales",
    "deudas civiles",
    "conciliación financiera",
    "cobro ejecutivo",
    "pagarés Colombia",
    "obligaciones civiles",
    "obligaciones comerciales",
    "conciliación Bogotá",
    "centro de conciliación Colombia",
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
      "Obligaciones Económicas en Colombia | Conciliación de Deudas y Acuerdos de Pago",

    description:
      "Negocie deudas, acuerdos de pago y obligaciones económicas mediante conciliación. Evite demandas, embargos y procesos ejecutivos con acuerdos de validez legal.",

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

    title:
      "Conciliación de Obligaciones Económicas | Acuerdos de Pago en Colombia",

    description:
      "Resuelva conflictos por deudas y obligaciones económicas mediante conciliación. Acuerdos rápidos, legales y sin largos procesos judiciales.",

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

      name: "Conciliación de Obligaciones Económicas en Colombia",

      description:
        "Servicio de conciliación para resolver conflictos relacionados con obligaciones económicas, deudas civiles, obligaciones comerciales, acuerdos de pago, reconocimiento de deuda y negociación de obligaciones entre personas o empresas en Colombia.",

      url: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación de deudas, acuerdos de pago y obligaciones económicas",

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
          name: "¿Qué son las obligaciones económicas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Son compromisos de carácter económico adquiridos entre personas o empresas, como préstamos, pagos pendientes, contratos, facturas, pagarés u otras obligaciones dinerarias.",
          },
        },

        {
          "@type": "Question",
          name: "¿Las deudas pueden resolverse mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Muchas deudas civiles y comerciales pueden solucionarse mediante conciliación, permitiendo alcanzar acuerdos de pago sin acudir inicialmente a un proceso judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué acuerdos pueden lograrse durante la conciliación?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Las partes pueden negociar pagos por cuotas, nuevos plazos, reducción de intereses, reconocimiento de deuda, compensaciones económicas y otras alternativas que faciliten el cumplimiento de la obligación.",
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
          name: "¿Qué documentos sirven para demostrar una obligación económica?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Contratos, pagarés, facturas, comprobantes de pago, transferencias bancarias, estados de cuenta, correos electrónicos, mensajes y demás soportes que acrediten la existencia de la obligación.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación ayuda a evitar un proceso ejecutivo?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos casos sí. Si las partes llegan a un acuerdo durante la conciliación, pueden evitar que el conflicto avance hacia un proceso ejecutivo o una demanda judicial.",
          },
        },

        {
          "@type": "Question",
          name: "¿También aplica para empresas?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Empresas, comerciantes, proveedores y personas naturales pueden acudir a la conciliación para resolver conflictos derivados de obligaciones económicas.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué ocurre si una persona incumple el acuerdo conciliado?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "El acuerdo puede exigirse judicialmente, ya que el acta de conciliación tiene fuerza legal conforme a la legislación colombiana.",
          },
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "HowTo",

      name: "Cómo resolver una obligación económica mediante conciliación",

      step: [
        {
          "@type": "HowToStep",
          name: "Identificar la obligación económica",
        },
        {
          "@type": "HowToStep",
          name: "Reunir contratos y soportes",
        },
        {
          "@type": "HowToStep",
          name: "Presentar la solicitud de conciliación",
        },
        {
          "@type": "HowToStep",
          name: "Negociar un acuerdo de pago",
        },
        {
          "@type": "HowToStep",
          name: "Firmar el acta de conciliación",
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
