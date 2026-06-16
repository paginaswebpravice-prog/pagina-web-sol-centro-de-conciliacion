import type { Metadata } from "next";
import ConciliacionArrendamientoContent from "./ConciliacionArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conciliación por arrendamiento en Colombia | Resolver conflictos entre arrendador e inquilino",
  description:
    "Aprende cómo funciona la conciliación por arrendamiento en Colombia. Soluciona conflictos por cánones, desocupación, incumplimientos y daños sin acudir a juicio.",
  keywords: [
    "conciliación arrendamiento",
    "conflictos de arrendamiento",
    "arrendador e inquilino",
    "conciliación contrato de arriendo",
    "problemas de arrendamiento",
    "desalojo conciliación",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
  },
  openGraph: {
    title: "Conciliación por arrendamiento en Colombia",
    description:
      "Conoce cómo resolver conflictos entre arrendadores e inquilinos mediante conciliación extrajudicial.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación por arrendamiento en Colombia",
    description:
      "Guía completa sobre conciliación para resolver conflictos derivados de contratos de arrendamiento.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-arrendamiento",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos de arrendamiento pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con cánones vencidos, restitución del inmueble, daños, servicios públicos, depósitos y obligaciones contractuales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita una demanda de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite llegar a acuerdos voluntarios antes de iniciar procesos judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo de conciliación es obligatorio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir lo acordado.",
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

      <ConciliacionArrendamientoContent />
    </>
  );
}
