import type { Metadata } from "next";
import ReclamacionSalarialConciliacionContent from "./ReclamacionSalarialConciliacionContent";

export const metadata: Metadata = {
  title:
    "Reclamación salarial mediante conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo reclamar salarios pendientes mediante conciliación laboral en Colombia y resolver conflictos sin necesidad de acudir a una demanda judicial.",
  keywords: [
    "reclamación salarial Colombia",
    "salarios pendientes",
    "conciliación laboral",
    "cobro de salarios",
    "pago de salarios atrasados",
    "conciliación por salarios",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",
  },
  openGraph: {
    title: "Reclamación salarial mediante conciliación en Colombia",
    description:
      "Aprende cómo recuperar salarios pendientes mediante conciliación laboral y evitar procesos judiciales largos.",
    url: "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Reclamación salarial mediante conciliación en Colombia",
    description:
      "Guía para recuperar salarios pendientes mediante conciliación laboral en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/reclamacion-salarial-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo reclamar salarios pendientes mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación laboral permite buscar acuerdos sobre salarios adeudados antes de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo presentar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar contrato laboral, comprobantes de pago, desprendibles de nómina y cualquier soporte relacionado con la deuda salarial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo consignado en un acta de conciliación tiene efectos jurídicos y puede exigirse en caso de incumplimiento.",
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

      <ReclamacionSalarialConciliacionContent />
    </>
  );
}
