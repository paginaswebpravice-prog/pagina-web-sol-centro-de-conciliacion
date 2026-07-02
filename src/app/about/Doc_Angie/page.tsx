import { Metadata } from "next";
import DocAngieContent from "./DocAngieContent";

export const metadata: Metadata = {
  title:
    "Angie Rivera | Abogada Conciliadora en Bogotá | Conciliación Comercial y Recuperación de Cartera",

  description:
    "Conoce a Angie Rivera, abogada conciliadora en Bogotá especializada en conciliación comercial, recuperación de cartera, derecho comercial y acuerdos de pago. Agenda tu orientación jurídica.",

  keywords: [
    "Angie Rivera",
    "abogada conciliadora Bogotá",
    "abogada conciliadora Colombia",
    "conciliación comercial",
    "conciliación empresarial",
    "recuperación de cartera",
    "acuerdos de pago",
    "derecho comercial",
    "abogada derecho comercial",
    "procesos ejecutivos",
    "recuperación de activos",
    "negociación de obligaciones",
    "abogado comercial Bogotá",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/about/Doc_Angie",
  },

  openGraph: {
    title:
      "Angie Rivera | Abogada Conciliadora en Bogotá especializada en Derecho Comercial",

    description:
      "Especialista en conciliación comercial, recuperación de cartera, acuerdos de pago y resolución de conflictos empresariales en Colombia.",

    url: "https://solcentrodeconciliacion.com/about/Doc_Angie",

    siteName: "SOL Centro de Conciliación",

    locale: "es_CO",

    type: "profile",

    images: [
      {
        url: "https://solcentrodeconciliacion.com/doc-angie.jpg",
        width: 1200,
        height: 630,
        alt: "Angie Rivera - Abogada Conciliadora en Bogotá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Angie Rivera | Abogada Conciliadora en Bogotá | Derecho Comercial",
    description:
      "Especialista en conciliación comercial, recuperación de cartera y acuerdos de pago para empresas y particulares.",
    images: ["https://solcentrodeconciliacion.com/doc-angie.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Angie Rivera",

    jobTitle: "Abogada Conciliadora y Especialista en Derecho Comercial",

    description:
      "Abogada conciliadora en Bogotá especializada en conciliación comercial, recuperación de cartera, acuerdos de pago, derecho comercial y resolución de conflictos empresariales.",

    image: "https://solcentrodeconciliacion.com/doc-angie.jpg",

    url: "https://solcentrodeconciliacion.com/about/Doc_Angie",

    worksFor: {
      "@type": "LegalService",
      name: "SOL Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
    },

    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },

    knowsAbout: [
      "Conciliación Extrajudicial",
      "Conciliación Comercial",
      "Derecho Comercial",
      "Recuperación de Cartera",
      "Acuerdos de Pago",
      "Procesos Ejecutivos",
      "Recuperación de Activos",
      "Negociación Empresarial",
      "Resolución Alternativa de Conflictos",
    ],

    hasOccupation: {
      "@type": "Occupation",
      name: "Abogada Conciliadora",
      occupationLocation: {
        "@type": "Country",
        name: "Colombia",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <DocAngieContent />
    </>
  );
}
