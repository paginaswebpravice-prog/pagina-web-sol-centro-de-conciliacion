import { Metadata } from "next";
import ActasEjemplosContent from "./ActasEjemplosContent";

/* ================= METADATA (SEO REAL) ================= */
export const metadata: Metadata = {
  title: "Actas de conciliación en Colombia: ejemplos y modelos en Bogotá",
  description:
    "Ejemplos de actas de conciliación en Colombia. Modelos de acuerdos de pago, formatos legales y recomendaciones prácticas en Bogotá.",
  keywords: [
    "acta de conciliación Colombia",
    "modelo acta conciliación Bogotá",
    "ejemplos conciliación Colombia",
    "acuerdos de pago conciliación",
    "formato acta conciliación",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
  },

  openGraph: {
    title: "Actas de conciliación en Colombia: ejemplos y modelos",
    description:
      "Aprende cómo hacer un acta de conciliación en Colombia con ejemplos reales y formatos legales.",
    url: "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ejemplos de actas de conciliación en Colombia",
    description:
      "Guía completa con modelos de actas de conciliación en Bogotá y Colombia.",
  },
};

export default function ActasEjemplosSeo() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Actas de conciliación en Colombia: ejemplos y recomendaciones",
      description:
        "Ejemplos de actas de conciliación en Colombia, acuerdos de pago y formatos legales en Bogotá y Colombia.",
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
        "@id": "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
      },
      contentLocation: {
        "@type": "Place",
        name: "Bogotá, Colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué debe contener un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Debe incluir identificación de las partes, obligaciones claras, fechas, valores y forma de cumplimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en Colombia el acta de conciliación presta mérito ejecutivo y puede exigirse ante un juez.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* ================= CONTENIDO ================= */}
      <ActasEjemplosContent />
    </>
  );
}
