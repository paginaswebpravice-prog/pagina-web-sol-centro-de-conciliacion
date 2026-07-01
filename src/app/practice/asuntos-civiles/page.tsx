import { Metadata } from "next";
import AsuntosCivilesContent from "./AsuntosCivilesContent";

const url = "https://solcentrodeconciliacion.com/practice/asuntos-civiles";

export const metadata: Metadata = {
  title:
    "Conciliación civil en Colombia: resuelva deudas, incumplimientos y conflictos sin demanda",

  description:
    "Solicite una conciliación civil en Colombia para resolver deudas, incumplimientos de contratos, arrendamientos, acuerdos de pago, indemnizaciones y otros conflictos civiles sin acudir inmediatamente a un proceso judicial.",

  keywords: [
    "conciliación civil Colombia",
    "abogados civiles Bogotá",
    "conflictos civiles Colombia",
    "resolver deudas sin demanda",
    "conciliación extrajudicial civil",
    "incumplimiento de contratos Colombia",
    "conciliación arrendamientos Bogotá",
    "deudas entre particulares Colombia",
    "obligaciones económicas Colombia",
    "abogados conciliación civil",
    "demanda civil Colombia",
    "cobro de deudas Colombia",
    "problemas contractuales Colombia",
    "centro de conciliación Bogotá",
    "conciliación legal Colombia",
  ],

  alternates: {
    canonical: url,
  },

  openGraph: {
    title:
      "Conciliación civil en Colombia | Solucione deudas y conflictos sin demanda",

    description:
      "Evite procesos judiciales largos. Resuelva conflictos civiles, deudas, contratos y arrendamientos mediante conciliación legal en Bogotá y Colombia.",

    url,
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://solcentrodeconciliacion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación civil en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Conciliación civil en Colombia | Deudas y conflictos legales",

    description:
      "Conciliación civil rápida y legal en Colombia para contratos, deudas, arrendamientos y obligaciones económicas.",

    images: ["https://solcentrodeconciliacion.com/og-image.jpg"],
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
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",

      name: "Conciliación civil en Colombia",

      description:
        "Servicio de conciliación civil en Colombia para resolver conflictos relacionados con deudas, contratos, arrendamientos, obligaciones económicas y responsabilidad civil.",

      url,

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType: [
        "Conciliación civil",
        "Conciliación de contratos",
        "Conciliación de arrendamientos",
        "Cobro de deudas",
        "Obligaciones económicas",
      ],

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
          name: "¿Qué conflictos civiles se pueden conciliar en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Se pueden conciliar conflictos relacionados con deudas, incumplimiento de contratos, arrendamientos, obligaciones económicas y responsabilidad civil.",
          },
        },

        {
          "@type": "Question",
          name: "¿La conciliación civil tiene validez legal?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. El acta de conciliación tiene efectos legales y puede exigirse judicialmente en caso de incumplimiento.",
          },
        },

        {
          "@type": "Question",
          name: "¿Es obligatorio conciliar antes de demandar?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos procesos civiles en Colombia, la conciliación extrajudicial es un requisito previo antes de presentar una demanda.",
          },
        },

        {
          "@type": "Question",
          name: "¿Qué ventajas tiene la conciliación civil?",

          acceptedAnswer: {
            "@type": "Answer",
            text: "La conciliación permite resolver conflictos más rápido, reducir costos legales y evitar procesos judiciales largos y desgastantes.",
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
          name: "Asuntos civiles",
          item: url,
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <AsuntosCivilesContent />
    </>
  );
}
