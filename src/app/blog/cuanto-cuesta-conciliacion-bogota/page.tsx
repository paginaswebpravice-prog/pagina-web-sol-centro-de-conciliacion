import type { Metadata } from "next";
import CostoConciliacionBogotaContent from "./CostoConciliacionBogotaContent";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una conciliación en Bogotá? | Tarifas Colombia",
  description:
    "Conoce cuánto cuesta una conciliación en Bogotá, factores que influyen en el precio y cuándo puede ser gratuita en Colombia.",
  keywords: [
    "cuánto cuesta conciliación Bogotá",
    "precio conciliación Colombia",
    "tarifas conciliación Bogotá",
    "conciliación gratis Colombia",
    "costos centros de conciliación",
    "MASC Colombia costos",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cuanto-cuesta-conciliacion-bogota",
  },
  openGraph: {
    title: "¿Cuánto cuesta una conciliación en Bogotá?",
    description:
      "Tarifas, factores y casos donde la conciliación puede ser gratuita en Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/cuanto-cuesta-conciliacion-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuánto cuesta una conciliación en Bogotá?",
    description:
      "Explicación de los costos de la conciliación en Bogotá y factores que influyen en el valor.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/cuanto-cuesta-conciliacion-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación en Bogotá es gratuita?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En algunos casos puede ser gratuita, especialmente en consultorios jurídicos y entidades públicas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién paga la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente las partes pueden asumir el costo de forma compartida o según lo que acuerden.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué factores influyen en el costo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tipo de conflicto, la cuantía del caso y la entidad donde se realice el proceso.",
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

      <CostoConciliacionBogotaContent />
    </>
  );
}
