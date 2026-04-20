import { Metadata } from "next";
import DocumentoFamiliaContent from "./DocumentoFamiliaContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación familiar en Colombia: modelo, visitas, alimentos y custodia en Bogotá",
  description:
    "Guía completa sobre conciliación familiar en Colombia y Bogotá. Incluye modelo de acta, acuerdos de visitas, alimentos, custodia y recomendaciones legales.",
  keywords: [
    "acta conciliacion familiar Colombia",
    "conciliacion familiar Bogotá",
    "cuota alimentaria Colombia",
    "custodia y visitas Colombia",
    "modelo acta conciliacion familiar",
  ],
  openGraph: {
    title: "Acta de conciliación familiar en Colombia (modelo y guía completa)",
    description:
      "Aprende cómo hacer un acta de conciliación familiar en Colombia con modelo real, acuerdos de visitas, alimentos y custodia.",
    url: "https://solcentrodeconciliacion.com/blog/documento-familia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acta de conciliación familiar en Colombia (modelo completo)",
    description: "Guía práctica + modelo de conciliación familiar en Colombia.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/documento-familia",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Acta de conciliación familiar en Colombia: modelo, visitas, alimentos y custodia",
      description:
        "Guía completa sobre conciliación familiar en Colombia, incluyendo modelo de acta, acuerdos de visitas, alimentos y custodia.",
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
        "@id": "https://solcentrodeconciliacion.com/blog/documento-familia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es un acta de conciliación familiar en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un acuerdo legal entre las partes sobre temas familiares como alimentos, visitas y custodia, con efectos jurídicos exigibles.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación familiar es obligatoria en Bogotá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos casos sí, especialmente como requisito previo antes de iniciar procesos judiciales en temas de familia.",
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

      <DocumentoFamiliaContent />
    </>
  );
}
