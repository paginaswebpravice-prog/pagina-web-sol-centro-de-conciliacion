import type { Metadata } from "next";
import PrescripcionYConciliacionContent from "./PrescripcionYConciliacionContent";

export const metadata: Metadata = {
  title: "Prescripción y conciliación en Colombia: efectos legales y términos",
  description:
    "Conoce cómo se relacionan la prescripción y la conciliación en Colombia, cuándo se suspenden los términos y qué efectos jurídicos genera una solicitud de conciliación.",
  keywords: [
    "prescripción y conciliación",
    "prescripción Colombia",
    "conciliación extrajudicial Colombia",
    "suspensión de la prescripción",
    "caducidad y conciliación",
    "centro de conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",
  },
  openGraph: {
    title:
      "Prescripción y conciliación en Colombia: efectos legales y términos",
    description:
      "Aprende cómo afecta la conciliación los términos de prescripción y qué debes tener en cuenta antes de presentar una reclamación.",
    url: "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Prescripción y conciliación en Colombia: efectos legales y términos",
    description:
      "Guía sobre la relación entre la prescripción y la conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/prescripcion-y-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación suspende la prescripción?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En determinados casos la solicitud de conciliación extrajudicial puede suspender los términos de prescripción mientras se desarrolla el trámite.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si dejo vencer los términos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La acción puede extinguirse por prescripción o caducidad, impidiendo reclamar judicialmente ciertos derechos.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación reemplaza la demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. Si no se logra acuerdo, la conciliación puede servir como requisito previo para acudir a la vía judicial.",
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

      <PrescripcionYConciliacionContent />
    </>
  );
}
