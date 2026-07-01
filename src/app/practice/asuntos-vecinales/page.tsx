import { Metadata } from "next";
import AsuntosVecinalesContent from "./AsuntosVecinalesContent";

export const metadata: Metadata = {
  title:
    "Conciliación entre vecinos en Colombia | Solucione conflictos vecinales sin demanda",

  description:
    "Resuelva conflictos vecinales en Colombia sin necesidad de demanda judicial. Conciliación en Bogotá para problemas de ruido, convivencia, zonas comunes, parqueaderos y disputas entre vecinos.",

  keywords: [
    "conflictos vecinales Colombia",
    "problemas entre vecinos Bogotá",
    "conciliación vecinal Colombia",
    "ruido excesivo vecinos",
    "problemas de convivencia conjuntos residenciales",
    "uso indebido zonas comunes",
    "disputas vecinales Colombia",
    "conciliación propiedad horizontal",
    "conflictos de convivencia Bogotá",
    "problemas parqueaderos conjuntos",
    "centro de conciliación vecinos Bogotá",
    "resolver conflictos vecinales sin demanda",
    "conciliación extrajudicial convivencia",
    "abogados conflictos vecinales Colombia",
  ],

  authors: [{ name: "Sol Centro de Conciliación" }],

  creator: "Sol Centro de Conciliación",

  publisher: "Sol Centro de Conciliación",

  metadataBase: new URL("https://solcentrodeconciliacion.com"),

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",
  },

  openGraph: {
    title:
      "Conciliación entre vecinos en Colombia | Evite demandas y resuelva conflictos de convivencia",

    description:
      "Evite demandas entre vecinos. Resuelva conflictos de convivencia, ruido y zonas comunes mediante conciliación legal en Bogotá y Colombia.",

    url: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación en conflictos vecinales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Conciliación entre vecinos en Colombia | Soluciones legales para conflictos vecinales",

    description:
      "Soluciones legales para conflictos entre vecinos, ruido, convivencia y zonas comunes en Colombia.",

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

      name: "Conciliación en conflictos vecinales en Colombia",

      description:
        "Servicio de conciliación en Bogotá y Colombia para resolver conflictos entre vecinos relacionados con convivencia, ruido, parqueaderos, uso de zonas comunes y propiedad horizontal.",

      url: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",

      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },

      serviceType:
        "Conciliación en conflictos vecinales y convivencia ciudadana",

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

          name: "¿Qué conflictos vecinales se pueden resolver mediante conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación permite resolver conflictos relacionados con ruido excesivo, uso de zonas comunes, parqueaderos, convivencia en conjuntos residenciales, límites de propiedad y disputas entre vecinos.",
          },
        },

        {
          "@type": "Question",

          name: "¿La conciliación entre vecinos tiene validez legal en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los acuerdos logrados mediante conciliación quedan consignados en un acta con efectos legales y cumplimiento obligatorio para las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Por qué es recomendable conciliar antes de demandar a un vecino?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La conciliación ayuda a evitar procesos judiciales largos, reducir conflictos de convivencia y encontrar soluciones rápidas que beneficien a ambas partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Se pueden conciliar problemas de ruido y convivencia en conjuntos residenciales?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los conflictos por ruido, fiestas, mascotas, zonas comunes y convivencia en edificios o conjuntos residenciales pueden resolverse mediante conciliación.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo iniciar una conciliación por problemas vecinales en Colombia?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "El proceso inicia con una solicitud ante un centro de conciliación autorizado donde se citan las partes para intentar llegar a un acuerdo con apoyo de un conciliador.",
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

          name: "Asuntos vecinales",

          item: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",
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

      <AsuntosVecinalesContent />
    </>
  );
}
