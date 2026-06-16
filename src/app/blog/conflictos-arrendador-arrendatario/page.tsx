import type { Metadata } from "next";
import ConflictosArrendamientoContent from "./ConflictosArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conflictos entre arrendador y arrendatario en Colombia | Guía completa",
  description:
    "Conoce los conflictos más comunes entre arrendador y arrendatario en Colombia y cómo resolverlos mediante conciliación sin procesos judiciales.",
  keywords: [
    "conflictos arrendador arrendatario Colombia",
    "problemas arrendamiento Colombia",
    "conciliación arrendamiento Bogotá",
    "disputas contrato de arriendo",
    "incumplimiento arrendamiento Colombia",
    "solución conflictos arrendamiento",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",
  },
  openGraph: {
    title: "Conflictos entre arrendador y arrendatario en Colombia",
    description:
      "Soluciona conflictos de arrendamiento mediante conciliación en Colombia de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conflictos entre arrendador y arrendatario en Colombia",
    description:
      "Guía sobre los conflictos más comunes en contratos de arrendamiento en Colombia y cómo resolverlos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-arrendador-arrendatario",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuáles son los conflictos más comunes en arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los más comunes incluyen falta de pago, daños al inmueble, incumplimiento del contrato y problemas de entrega del inmueble.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se resuelven los conflictos de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Colombia pueden resolverse mediante conciliación antes de acudir a procesos judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es obligatoria, pero es altamente recomendable por ser más rápida y económica.",
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

      <ConflictosArrendamientoContent />
    </>
  );
}
