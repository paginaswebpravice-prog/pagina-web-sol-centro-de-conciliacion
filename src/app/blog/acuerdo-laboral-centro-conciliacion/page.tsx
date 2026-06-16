import type { Metadata } from "next";
import AcuerdoLaboralCentroConciliacionContent from "./AcuerdoLaboralCentroConciliacionContent";

export const metadata: Metadata = {
  title: "Acuerdo laboral ante centro de conciliación en Colombia | Guía 2026",
  description:
    "Conoce cómo formalizar un acuerdo laboral ante un centro de conciliación en Colombia, sus beneficios, requisitos y validez legal.",
  keywords: [
    "acuerdo laboral",
    "centro de conciliación laboral",
    "conciliación laboral Colombia",
    "acuerdo entre trabajador y empleador",
    "acta de conciliación laboral",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",
  },
  openGraph: {
    title: "Acuerdo laboral ante centro de conciliación",
    description:
      "Aprende cómo formalizar acuerdos laborales con plena validez jurídica mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acuerdo laboral ante centro de conciliación",
    description:
      "Guía completa sobre acuerdos laborales mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acuerdo-laboral-centro-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acuerdo laboral por conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un acuerdo voluntario entre trabajador y empleador formalizado ante un conciliador autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo queda contenido en un acta de conciliación con efectos jurídicos obligatorios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos laborales pueden conciliarse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salarios, prestaciones, liquidaciones, indemnizaciones y otros conflictos laborales susceptibles de acuerdo.",
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

      <AcuerdoLaboralCentroConciliacionContent />
    </>
  );
}
