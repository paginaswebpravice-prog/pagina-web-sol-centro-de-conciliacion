import type { Metadata } from "next";
import DanosYPerjuiciosContent from "./DanosYPerjuiciosContent";

export const metadata: Metadata = {
  title:
    "Conciliación por daños y perjuicios en Colombia | Reparación de afectaciones económicas",
  description:
    "Conoce cómo funciona la conciliación por daños y perjuicios en Colombia, cuándo procede una indemnización y cómo alcanzar acuerdos sin acudir a un proceso judicial.",
  keywords: [
    "daños y perjuicios Colombia",
    "conciliación daños y perjuicios",
    "indemnización Colombia",
    "reparación económica",
    "conciliación civil",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",
  },
  openGraph: {
    title: "Conciliación por daños y perjuicios en Colombia",
    description:
      "Aprende cómo resolver conflictos relacionados con daños económicos mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación por daños y perjuicios en Colombia",
    description:
      "Guía completa sobre conciliación para reclamaciones por daños y perjuicios en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/danos-y-perjuicios",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los daños y perjuicios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son las afectaciones económicas o patrimoniales que una persona sufre como consecuencia de la acción u omisión de otra persona.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar una indemnización?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchas reclamaciones por daños y perjuicios pueden resolverse mediante conciliación antes de acudir a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
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

      <DanosYPerjuiciosContent />
    </>
  );
}
