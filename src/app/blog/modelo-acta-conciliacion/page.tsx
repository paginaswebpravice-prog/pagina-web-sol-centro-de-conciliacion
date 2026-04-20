import { Metadata } from "next";
import ModeloActaConciliacionContent from "./ModeloActaConciliacionContent";

export const metadata: Metadata = {
  title: "Modelo de acta de conciliación en Colombia (ejemplo y formato 2026)",
  description:
    "Modelo de acta de conciliación en Colombia. Ejemplo completo, requisitos legales y formato listo para copiar en Bogotá y Colombia.",
  keywords: [
    "modelo acta conciliacion Colombia",
    "acta de conciliacion ejemplo",
    "formato acta conciliacion Bogota",
    "conciliacion extrajudicial Colombia",
    "acta conciliacion civil Colombia",
  ],
  openGraph: {
    title: "Modelo de acta de conciliación en Colombia (ejemplo completo)",
    description:
      "Aprende cómo hacer un acta de conciliación en Colombia con modelo real, requisitos legales y guía práctica.",
    url: "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modelo de acta de conciliación en Colombia",
    description:
      "Ejemplo completo + formato listo para usar en conciliación en Colombia.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Modelo de acta de conciliación en Colombia (ejemplo y formato)",
      description:
        "Ejemplo de acta de conciliación en Colombia con estructura completa, requisitos legales y guía práctica.",
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
        "@id":
          "https://solcentrodeconciliacion.com/blog/modelo-acta-conciliacion",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El acta de conciliación es un documento con efectos legales donde las partes dejan por escrito un acuerdo para resolver un conflicto sin necesidad de juicio.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, el acta de conciliación presta mérito ejecutivo, lo que significa que puede exigirse su cumplimiento ante un juez si una de las partes incumple.",
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

      <ModeloActaConciliacionContent />
    </>
  );
}
