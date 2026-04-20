import { Metadata } from "next";
import ComoEsLaAudienciaContent from "./ComoEsLaAudienciaContent";

export const metadata: Metadata = {
  title:
    "Cómo es la audiencia de conciliación en Colombia: presencial o virtual en Bogotá",
  description:
    "Conoce cómo funciona una audiencia de conciliación en Colombia, presencial o virtual, sus etapas y recomendaciones para llegar a un acuerdo en Bogotá y Colombia.",
  keywords: [
    "audiencia de conciliación Colombia",
    "audiencia conciliación Bogotá",
    "conciliación virtual Colombia",
    "cómo funciona audiencia conciliación",
    "conciliación extrajudicial Bogotá",
  ],
  openGraph: {
    title:
      "Cómo es la audiencia de conciliación en Colombia: presencial o virtual",
    description:
      "Aprende cómo funciona una audiencia de conciliación en Colombia, sus etapas, modalidad presencial y virtual en Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo es la audiencia de conciliación en Colombia",
    description:
      "Guía completa sobre audiencias de conciliación en Colombia (presencial y virtual).",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Cómo es la audiencia de conciliación en Colombia: presencial o virtual en Bogotá",
      description:
        "Conoce cómo funciona una audiencia de conciliación en Colombia, presencial o virtual, sus etapas y recomendaciones para llegar a un acuerdo.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://solcentrodeconciliacion.com/blog/como-es-la-audiencia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo es una audiencia de conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La audiencia incluye instalación, exposición de las partes, negociación y redacción del acuerdo si se llega a un arreglo.",
          },
        },
        {
          "@type": "Question",
          name: "¿La audiencia de conciliación puede ser virtual en Bogotá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en Bogotá y Colombia muchas audiencias de conciliación se realizan de forma virtual mediante plataformas digitales.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ComoEsLaAudienciaContent />
    </>
  );
}
