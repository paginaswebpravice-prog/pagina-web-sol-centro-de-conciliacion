import type { Metadata } from "next";
import RegimenVisitasConciliacionContent from "./RegimenVisitasConciliacionContent";

export const metadata: Metadata = {
  title: "Régimen de visitas por conciliación en Colombia | Guía completa 2026",
  description:
    "Aprende cómo establecer un régimen de visitas mediante conciliación en Colombia. Acuerdos para hijos menores, horarios, vacaciones y visitas con validez legal.",
  keywords: [
    "régimen de visitas",
    "visitas por conciliación",
    "conciliación familiar Colombia",
    "régimen de visitas Bogotá",
    "visitas hijos menores",
    "custodia y visitas",
    "acuerdo de visitas",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",
  },
  openGraph: {
    title: "Régimen de visitas por conciliación en Colombia",
    description:
      "Guía sobre cómo acordar legalmente un régimen de visitas mediante conciliación familiar.",
    url: "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Régimen de visitas por conciliación en Colombia",
    description:
      "Guía sobre acuerdos de visitas para hijos menores mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/regimen-visitas-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede acordar un régimen de visitas mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los padres pueden establecer acuerdos relacionados con visitas, horarios y convivencia mediante conciliación familiar.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo queda consignado en un acta de conciliación con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede modificarse posteriormente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las circunstancias familiares es posible realizar una nueva conciliación para actualizar los acuerdos.",
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

      <RegimenVisitasConciliacionContent />
    </>
  );
}
