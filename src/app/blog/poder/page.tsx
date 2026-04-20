import { Metadata } from "next";
import PoderContent from "./PoderContent";

export const metadata: Metadata = {
  title:
    "Poder para audiencia de conciliación en Colombia | Modelo de poder especial",
  description:
    "Modelo de poder para audiencia de conciliación en Colombia. Formato de poder especial para abogados, requisitos, usos y validez legal en Bogotá y Colombia.",
  keywords: [
    "poder conciliacion Colombia",
    "modelo poder conciliacion Bogota",
    "poder especial conciliacion Colombia",
    "audiencia conciliacion poder abogado",
    "representacion conciliacion Colombia",
  ],
  openGraph: {
    title:
      "Poder para audiencia de conciliación en Colombia (modelo y guía legal)",
    description:
      "Aprende cómo hacer un poder para conciliación en Colombia con modelo editable, requisitos y recomendaciones legales.",
    url: "https://solcentrodeconciliacion.com/blog/poder",
    siteName: "Abogados en Bogotá Colombia",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poder para conciliación en Colombia",
    description:
      "Modelo de poder especial para audiencia de conciliación en Colombia.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/poder",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Poder para asistir a audiencia de conciliación en Colombia",
      description:
        "Guía completa sobre el poder para conciliación en Colombia, modelo, usos, requisitos y recomendaciones legales.",
      author: {
        "@type": "Organization",
        name: "Pravice Abogados",
      },
      publisher: {
        "@type": "Organization",
        name: "Pravice Abogados",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/poder",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un poder para conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un documento mediante el cual una persona autoriza a otra para representarla en una audiencia de conciliación en Colombia.",
          },
        },
        {
          "@type": "Question",
          name: "¿Se necesita abogado para conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No siempre es obligatorio, pero es recomendable cuando el caso tiene implicaciones jurídicas o económicas importantes.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde se usa el poder para conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se utiliza en centros de conciliación, notarías, cámaras de comercio y conciliaciones virtuales en Colombia.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PoderContent />
    </>
  );
}
