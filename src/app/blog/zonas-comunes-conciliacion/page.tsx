import type { Metadata } from "next";
import ZonasComunesContent from "./ZonasComunesContent";

export const metadata: Metadata = {
  title: "Uso de zonas comunes y conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo resolver conflictos por el uso de zonas comunes en propiedad horizontal en Colombia mediante conciliación de forma legal y efectiva.",
  keywords: [
    "zonas comunes Colombia",
    "propiedad horizontal zonas comunes",
    "conflictos zonas comunes",
    "conciliación conjuntos residenciales",
    "uso parqueaderos comunes Colombia",
    "convivencia edificios Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/zonas-comunes-conciliacion",
  },
  openGraph: {
    title: "Uso de zonas comunes y conciliación en Colombia",
    description:
      "Soluciona conflictos por uso de zonas comunes mediante conciliación en Colombia de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/zonas-comunes-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Uso de zonas comunes y conciliación en Colombia",
    description:
      "Guía sobre conflictos y solución mediante conciliación en el uso de zonas comunes en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/zonas-comunes-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué se consideran zonas comunes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son espacios compartidos como pasillos, parques, piscinas y parqueaderos en propiedad horizontal.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden regular conflictos en zonas comunes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, mediante conciliación en Colombia se pueden resolver estos conflictos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no hay acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede acudir a instancias judiciales o administrativas.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ZonasComunesContent />
    </>
  );
}
