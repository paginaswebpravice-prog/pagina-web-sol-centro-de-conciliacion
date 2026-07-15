import type { Metadata } from "next";
import SeparacionBienesConciliacionContent from "./SeparacionBienesConciliacionContent";

export const metadata: Metadata = {
  title:
    "Separación de bienes mediante conciliación en Colombia: requisitos, proceso y efectos legales | Guía 2026",

  description:
    "Descubre cómo hacer una separación de bienes mediante conciliación en Colombia. Conoce los requisitos, documentos, procedimiento, ventajas, efectos legales y cómo repartir bienes sin acudir a un juicio.",

  keywords: [
    "separación de bienes",
    "separación de bienes por conciliación",
    "separación de bienes Colombia",
    "liquidación de sociedad conyugal",
    "liquidación de sociedad patrimonial",
    "repartición de bienes",
    "división de bienes matrimonio",
    "conciliación patrimonial",
    "conciliación familiar",
    "cómo separar bienes",
    "separación de bienes Bogotá",
    "acuerdo patrimonial",
    "distribución de bienes",
    "bienes matrimonio Colombia",
    "conciliación bienes",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",
  },

  openGraph: {
    title:
      "Separación de bienes mediante conciliación en Colombia | Cómo repartir el patrimonio sin juicio",

    description:
      "Aprende cómo realizar una separación de bienes mediante conciliación, qué documentos necesitas, cuáles bienes pueden repartirse y qué efectos legales produce el acuerdo.",

    url: "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",

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
      "Separación de bienes mediante conciliación en Colombia: guía completa 2026",

    description:
      "Guía completa sobre la separación de bienes mediante conciliación en Colombia, incluyendo requisitos, documentos, procedimiento, efectos legales, ventajas y preguntas frecuentes.",

    keywords:
      "separación de bienes, conciliación patrimonial, liquidación sociedad conyugal, separación de bienes Colombia",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/separacion-bienes-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se pueden repartir bienes mediante conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes están de acuerdo, la conciliación permite establecer la forma en que serán distribuidos los bienes y las obligaciones patrimoniales, dejando constancia en un acta con efectos jurídicos.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué bienes pueden incluirse en una conciliación patrimonial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso, pueden incluirse inmuebles, vehículos, cuentas bancarias, inversiones, establecimientos de comercio, muebles, enseres y obligaciones económicas compartidas.",
        },
      },

      {
        "@type": "Question",
        name: "¿La separación de bienes mediante conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Los acuerdos logrados mediante conciliación producen efectos jurídicos y pueden convertirse en una herramienta importante para formalizar los compromisos asumidos por las partes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos se recomiendan para una separación de bienes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es recomendable aportar documentos de identidad, certificados de tradición de inmuebles, tarjetas de propiedad de vehículos, extractos bancarios, soportes de inversiones y cualquier documento que permita identificar el patrimonio objeto del acuerdo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ocurre si después una de las partes incumple el acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del contenido del acta y de la normativa aplicable, el acuerdo podrá hacerse valer por los mecanismos legales correspondientes cuando exista incumplimiento.",
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

      <SeparacionBienesConciliacionContent />
    </>
  );
}
