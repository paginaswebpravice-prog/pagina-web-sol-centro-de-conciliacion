import type { Metadata } from "next";
import CasosConciliacionLaboralContent from "./CasosConciliacionLaboralContent";

export const metadata: Metadata = {
  title:
    "Casos donde la conciliación laboral sí funciona en Colombia | Ejemplos reales",
  description:
    "Conoce casos donde la conciliación laboral funciona en Colombia. Ejemplos de acuerdos sobre liquidaciones, salarios, prestaciones sociales, despidos y conflictos laborales.",
  keywords: [
    "casos conciliación laboral",
    "conciliación laboral Colombia",
    "ejemplos conciliación laboral",
    "acuerdos laborales",
    "liquidación laboral conciliación",
    "conflictos laborales Colombia",
    "centro de conciliación laboral",
    "acuerdo trabajador empleador",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
  },
  openGraph: {
    title: "Casos donde la conciliación laboral sí funciona en Colombia",
    description:
      "Descubre ejemplos prácticos de conflictos laborales resueltos mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Casos donde la conciliación laboral sí funciona en Colombia",
    description:
      "Ejemplos de conflictos laborales que pueden resolverse mediante conciliación entre trabajadores y empleadores.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación laboral sirve para reclamar salarios pendientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Uno de los usos más frecuentes de la conciliación laboral es resolver conflictos relacionados con salarios adeudados y pagos pendientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar liquidaciones laborales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las diferencias sobre liquidaciones laborales pueden resolverse mediante acuerdos conciliatorios con plena validez jurídica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no llegan a un acuerdo, pueden acudir posteriormente a las vías judiciales correspondientes.",
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

      <CasosConciliacionLaboralContent />
    </>
  );
}
