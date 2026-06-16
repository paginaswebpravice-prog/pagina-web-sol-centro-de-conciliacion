import type { Metadata } from "next";
import EmpresaNoAsisteConciliacionContent from "./EmpresaNoAsisteConciliacionContent";

export const metadata: Metadata = {
  title: "¿Qué pasa si la empresa no asiste a la conciliación? | Colombia 2026",
  description:
    "Conoce las consecuencias cuando una empresa o empleador no asiste a una audiencia de conciliación laboral en Colombia y cuáles son las alternativas para el trabajador.",
  keywords: [
    "empresa no asiste conciliacion",
    "empleador no asiste conciliacion",
    "conciliacion laboral colombia",
    "inasistencia audiencia conciliacion",
    "constancia de no conciliacion",
    "centro de conciliacion laboral",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",
  },
  openGraph: {
    title: "¿Qué pasa si la empresa no asiste a la conciliación?",
    description:
      "Conoce las consecuencias jurídicas de la inasistencia del empleador a una audiencia de conciliación laboral en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué pasa si la empresa no asiste a la conciliación?",
    description:
      "Guía sobre las consecuencias de la inasistencia del empleador a una audiencia de conciliación laboral en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/empresa-no-asiste-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué ocurre si la empresa no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede dejar constancia de inasistencia y el trabajador podrá continuar con las acciones legales que considere procedentes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La empresa puede justificar su ausencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo del caso, la empresa puede presentar una justificación válida y solicitar una nueva programación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación puede realizarse sin la empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es posible llegar a un acuerdo conciliatorio sin la participación de ambas partes.",
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

      <EmpresaNoAsisteConciliacionContent />
    </>
  );
}
