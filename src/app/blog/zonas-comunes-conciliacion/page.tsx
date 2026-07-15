import type { Metadata } from "next";
import ZonasComunesContent from "./ZonasComunesContent";

export const metadata: Metadata = {
  title:
    "Zonas comunes en propiedad horizontal: derechos, conflictos y conciliación en Colombia | Guía 2026",

  description:
    "Conoce cómo resolver conflictos por el uso de zonas comunes en propiedad horizontal. Aprende qué dice la Ley 675 de 2001, cuándo acudir a conciliación y cuáles son los derechos y obligaciones de propietarios, residentes y administración.",

  keywords: [
    "zonas comunes propiedad horizontal",
    "uso de zonas comunes Colombia",
    "Ley 675 de 2001 zonas comunes",
    "conflictos zonas comunes",
    "conciliación propiedad horizontal",
    "parqueaderos propiedad horizontal",
    "salón comunal propiedad horizontal",
    "piscinas conjuntos residenciales",
    "administración propiedad horizontal",
    "problemas zonas comunes conjunto residencial",
    "derechos propietarios zonas comunes",
    "convivencia propiedad horizontal",
    "conciliación conflictos vecinos",
    "reglamento propiedad horizontal",
    "propiedad horizontal Colombia",
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
    title:
      "Zonas comunes en propiedad horizontal: cómo resolver conflictos mediante conciliación",

    description:
      "Descubre qué hacer cuando existen conflictos por parqueaderos, piscinas, salones comunales, zonas verdes u otras áreas compartidas en propiedad horizontal en Colombia.",

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

    headline:
      "Zonas comunes en propiedad horizontal: derechos, conflictos y conciliación en Colombia",

    description:
      "Guía completa sobre el uso de zonas comunes en propiedad horizontal, conflictos frecuentes, conciliación, Ley 675 de 2001 y soluciones legales en Colombia.",

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

    inLanguage: "es-CO",

    articleSection: "Propiedad Horizontal",

    keywords:
      "zonas comunes, propiedad horizontal, conciliación, Ley 675 de 2001, conflictos vecinales, convivencia",

    about: [
      "Propiedad Horizontal",
      "Conciliación",
      "Zonas comunes",
      "Convivencia",
      "Ley 675 de 2001",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son las zonas comunes en propiedad horizontal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Son los espacios de uso compartido dentro de una copropiedad, como pasillos, ascensores, piscinas, parques, salones comunales, parqueaderos comunes y demás áreas destinadas al beneficio colectivo.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué ley regula las zonas comunes en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La Ley 675 de 2001 regula el régimen de propiedad horizontal en Colombia y establece las reglas relacionadas con el uso, administración y conservación de las zonas comunes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué hacer cuando un vecino utiliza indebidamente las zonas comunes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Lo recomendable es intentar primero una solución dialogada o acudir a la administración del conjunto. Si el conflicto continúa, puede solicitarse una audiencia de conciliación.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación sirve para resolver conflictos por parqueaderos o zonas comunes?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación es uno de los mecanismos más utilizados para solucionar diferencias relacionadas con parqueaderos, piscinas, salones comunales, zonas verdes y demás áreas comunes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Los acuerdos alcanzados en conciliación son obligatorios?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo y este queda consignado en un acta de conciliación, dicho documento puede producir efectos jurídicos como mérito ejecutivo y cosa juzgada.",
        },
      },

      {
        "@type": "Question",
        name: "¿Siempre es necesario presentar una demanda?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. En muchos conflictos relacionados con propiedad horizontal, la conciliación permite encontrar soluciones más rápidas, económicas y orientadas a preservar la convivencia.",
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
