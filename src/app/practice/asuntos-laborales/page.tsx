import { Metadata } from "next";
import AsuntosLaboralesContent from "./AsuntosLaboralesContent";

export const metadata: Metadata = {
  title:
    "Conciliación laboral en Colombia | Despidos, liquidaciones, indemnizaciones y salarios pendientes",

  description:
    "Resuelva conflictos laborales mediante conciliación en Colombia. Solucione despidos sin justa causa, liquidaciones, indemnizaciones, salarios pendientes, prestaciones sociales, horas extras, acoso laboral y terminación de contratos sin acudir a una demanda judicial.",
  keywords: [
    "conciliación laboral Colombia",
    "abogados laborales Bogotá",
    "conflictos laborales Colombia",
    "despido sin justa causa Colombia",
    "liquidación laboral Colombia",
    "salarios adeudados conciliación",
    "derecho laboral Bogotá",
    "conciliación trabajadores y empresas",
    "acuerdo laboral sin demanda",
    "reclamos laborales Colombia",
    "horas extras no pagadas Colombia",
    "indemnización laboral conciliación",
    "centro de conciliación laboral Bogotá",
    "conciliación extrajudicial laboral",
    "despido injustificado Colombia",
    "despido sin justa causa",
    "liquidación por despido",
    "indemnización por despido",
    "prestaciones sociales",
    "cesantías",
    "prima de servicios",
    "vacaciones pendientes",
    "horas extras",
    "recargos nocturnos",
    "salario no pagado",
    "acoso laboral",
    "terminación de contrato",
    "renuncia laboral",
    "fuero de estabilidad",
    "reintegro laboral",
    "conciliación Ministerio del Trabajo",
    "conciliación trabajador empleador",
    "reclamación laboral",
    "conflictos empresa trabajador",
  ],

  authors: [{ name: "Sol Centro de Conciliación" }],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",
  },

  openGraph: {
    title:
      "Conciliación laboral en Colombia | Solucione conflictos laborales sin demanda",

    description:
      "Resuelva conflictos laborales en Bogotá y Colombia mediante conciliación legal. Acuerdos rápidos en despidos, liquidaciones, salarios y contratos laborales.",

    url: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación laboral en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conciliación laboral en Colombia | Soluciones laborales legales",
    description:
      "Evite demandas laborales en Colombia. Conciliación para despidos, liquidaciones, salarios y conflictos entre trabajadores y empleadores.",
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

      name: "Conciliación laboral en Colombia",

      description:
        "Servicio de conciliación laboral en Bogotá y Colombia para resolver conflictos entre trabajadores y empleadores relacionados con despidos, liquidaciones, salarios, prestaciones sociales y contratos laborales.",

      url: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación laboral, conflictos laborales y acuerdos extrajudiciales",

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

          name: "¿Qué conflictos laborales se pueden resolver mediante conciliación en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación laboral permite resolver conflictos relacionados con despidos sin justa causa, liquidaciones laborales, salarios pendientes, prestaciones sociales, horas extras, incumplimiento de contratos y acuerdos de terminación laboral.",
          },
        },

        {
          "@type": "Question",

          name: "¿La conciliación laboral tiene validez legal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. El acuerdo alcanzado en una conciliación laboral queda consignado en un acta con plena validez jurídica y cumplimiento obligatorio para las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cuáles son los beneficios de la conciliación laboral frente a una demanda?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación laboral permite ahorrar tiempo y costos legales, evitar procesos judiciales largos, alcanzar acuerdos rápidos y reducir conflictos entre trabajador y empleador.",
          },
        },

        {
          "@type": "Question",

          name: "¿Se puede conciliar una liquidación laboral o indemnización?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. En Colombia es posible conciliar temas relacionados con liquidaciones laborales, indemnizaciones, pagos pendientes y acuerdos económicos derivados de la relación laboral.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo iniciar una conciliación laboral en Bogotá o Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El proceso inicia con una solicitud ante un centro de conciliación autorizado. Posteriormente se programa una audiencia donde las partes intentan llegar a un acuerdo con acompañamiento de un conciliador.",
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
          name: "Asuntos laborales",
          item: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",
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

      <AsuntosLaboralesContent />
    </>
  );
}
