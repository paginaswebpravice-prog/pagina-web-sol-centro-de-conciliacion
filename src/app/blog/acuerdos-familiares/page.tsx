import type { Metadata } from "next";
import AcuerdosFamiliaresContent from "./AcuerdosFamiliaresContent";

export const metadata: Metadata = {
  title:
    "Acuerdos familiares por conciliación en Colombia: alimentos, custodia, visitas y más",
  description:
    "Aprende cómo realizar acuerdos familiares por conciliación en Colombia. Conoce qué asuntos pueden conciliarse, requisitos, beneficios, validez legal y cómo evitar un proceso judicial.",
  keywords: [
    "acuerdos familiares",
    "acuerdo familiar",
    "acuerdos familiares Colombia",
    "conciliación familiar",
    "conciliación de familia",
    "conciliación familiar Bogotá",
    "centro de conciliación familiar",
    "acuerdo de alimentos",
    "acuerdo cuota alimentaria",
    "custodia por conciliación",
    "régimen de visitas conciliación",
    "conciliación custodia hijos",
    "conciliación separación bienes",
    "acuerdo padres hijos",
    "resolver conflictos familiares",
    "acta conciliación familiar",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acuerdos-familiares",
  },
  openGraph: {
    title: "Acuerdos familiares por conciliación en Colombia | Guía completa",
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
    headline: "Acuerdos familiares por conciliación en Colombia: guía completa",
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
