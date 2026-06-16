import type { Metadata } from "next";
import AcuerdosFamiliaresContent from "./AcuerdosFamiliaresContent";

export const metadata: Metadata = {
  title: "Acuerdos familiares extrajudiciales en Colombia | Guía completa 2026",
  description:
    "Conoce cómo funcionan los acuerdos familiares extrajudiciales en Colombia y cómo la conciliación permite resolver conflictos familiares de manera rápida y legal.",
  keywords: [
    "acuerdos familiares",
    "acuerdos familiares extrajudiciales",
    "conciliación familiar Colombia",
    "conciliación familiar Bogotá",
    "acuerdos de familia",
    "resolución de conflictos familiares",
    "centro de conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acuerdos-familiares",
  },
  openGraph: {
    title: "Acuerdos familiares extrajudiciales en Colombia",
    description:
      "Aprende cómo formalizar acuerdos familiares mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/acuerdos-familiares",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acuerdos familiares extrajudiciales en Colombia",
    description:
      "Guía completa sobre acuerdos familiares mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acuerdos-familiares",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los acuerdos familiares extrajudiciales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son acuerdos alcanzados por miembros de una familia mediante conciliación, sin necesidad de acudir inicialmente a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando se formalizan mediante conciliación, los acuerdos tienen efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué temas pueden resolverse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alimentos, custodia, visitas, gastos de menores, separación de bienes y otros asuntos conciliables.",
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

      <AcuerdosFamiliaresContent />
    </>
  );
}
