import type { Metadata } from "next";
import DespidoInjustificadoConciliacionContent from "./DespidoInjustificadoConciliacionContent";

export const metadata: Metadata = {
  title:
    "Conciliación por despido injustificado en Colombia | Guía completa 2026",
  description:
    "Conoce cómo funciona la conciliación por despido injustificado en Colombia, qué acuerdos pueden alcanzarse y cuándo acudir a un centro de conciliación.",
  keywords: [
    "despido injustificado conciliacion",
    "conciliacion laboral colombia",
    "indemnizacion despido injustificado",
    "acuerdo laboral colombia",
    "centro de conciliacion laboral",
    "despido sin justa causa colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",
  },
  openGraph: {
    title: "Conciliación por despido injustificado en Colombia",
    description:
      "Alternativas para resolver conflictos laborales mediante conciliación tras un despido sin justa causa.",
    url: "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación por despido injustificado en Colombia",
    description:
      "Guía sobre conciliación laboral por despido injustificado, indemnizaciones y acuerdos entre empleador y trabajador.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/despido-injustificado-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un despido injustificado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la terminación del contrato laboral sin una causa legalmente válida o sin cumplir los requisitos establecidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Empleador y trabajador pueden llegar a acuerdos sobre indemnizaciones, pagos pendientes y terminación de la relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite alcanzar acuerdos voluntarios sin necesidad de acudir a un proceso judicial.",
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

      <DespidoInjustificadoConciliacionContent />
    </>
  );
}
