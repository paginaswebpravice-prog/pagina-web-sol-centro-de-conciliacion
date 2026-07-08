import type { Metadata } from "next";
import CostoConciliacionBogotaContent from "./CostoConciliacionBogotaContent";

export const metadata: Metadata = {
  title:
    "¿Cuánto cuesta una conciliación en Bogotá? Costos, tarifas y factores que influyen (2026)",
  description:
    "Conoce cuánto cuesta una conciliación en Bogotá y Colombia, qué factores influyen en el valor, quién paga el trámite, cuándo puede ser gratuita y por qué suele ser más económica que un proceso judicial.",
  keywords: [
    "cuánto cuesta una conciliación en Bogotá",
    "cuánto vale una conciliación",
    "precio conciliación Colombia",
    "tarifas conciliación Bogotá",
    "costo conciliación Colombia",
    "conciliación gratis Colombia",
    "quién paga la conciliación",
    "centro de conciliación Bogotá",
    "acta de conciliación costo",
    "conciliación extrajudicial Colombia",
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
    title:
      "¿Cuánto cuesta una conciliación en Bogotá? Costos, tarifas y cuándo puede ser gratuita",
    description:
      "Descubre qué factores determinan el costo de una conciliación en Colombia, cuándo puede ser gratuita y por qué es una alternativa más económica que un proceso judicial.",
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
    headline:
      "¿Cuánto cuesta una conciliación en Bogotá? Costos, tarifas y factores que influyen",
    description:
      "Guía completa sobre el costo de una conciliación en Bogotá y Colombia. Conoce los factores que influyen en las tarifas, quién asume el pago, cuándo puede ser gratuita y por qué este mecanismo suele ser más económico que un proceso judicial.",
    keywords: [
      "costo conciliación Bogotá",
      "precio conciliación Colombia",
      "tarifas conciliación",
      "conciliación gratuita",
      "conciliación extrajudicial",
    ],
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
        name: "¿Cuánto cuesta una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del tipo de conflicto, la cuantía del caso y del centro de conciliación donde se realice el trámite. Cada entidad puede manejar tarifas diferentes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación puede ser gratuita?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Algunas entidades públicas y consultorios jurídicos universitarios ofrecen servicios de conciliación gratuitos o con tarifas reducidas, dependiendo del caso y de los requisitos establecidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién debe pagar los costos de una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden acordar cómo asumir los costos del procedimiento. En algunos casos el pago se divide entre ambas partes y en otros una sola persona asume el valor total.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué factores influyen en el precio de una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Influyen aspectos como el tipo de conflicto, la cuantía económica, la complejidad del asunto y la entidad donde se realice la conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es más económica que un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente sí. La conciliación suele implicar menores costos, menos tiempo y un procedimiento más ágil que un proceso judicial tradicional.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo, este queda consignado en un acta de conciliación con efectos jurídicos y fuerza vinculante conforme a la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo saber cuánto costará mi conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable consultar directamente con el centro de conciliación, ya que el valor depende de las características específicas del caso y de las tarifas aplicables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Vale la pena pagar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, porque permite resolver el conflicto de forma más rápida, reduce costos frente a un proceso judicial y ofrece un acuerdo con efectos legales.",
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
