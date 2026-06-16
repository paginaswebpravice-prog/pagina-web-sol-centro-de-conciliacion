import type { Metadata } from "next";
import IncumplimientoContratoContent from "./IncumplimientoContratoContent";

export const metadata: Metadata = {
  title:
    "Conciliación por incumplimiento de contrato en Colombia | Solución de conflictos",
  description:
    "Conoce cómo funciona la conciliación por incumplimiento de contrato en Colombia y cómo resolver disputas contractuales sin acudir a un proceso judicial.",
  keywords: [
    "incumplimiento de contrato",
    "conciliación contractual",
    "conciliación civil Colombia",
    "demanda por incumplimiento de contrato",
    "contratos Colombia",
    "conciliación extrajudicial",
    "conflictos contractuales",
    "incumplimiento contractual",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
  },
  openGraph: {
    title: "Conciliación por incumplimiento de contrato en Colombia",
    description:
      "Aprende cómo resolver conflictos derivados del incumplimiento de contratos mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación por incumplimiento de contrato en Colombia",
    description:
      "Guía sobre conciliación contractual y resolución de conflictos por incumplimiento de contratos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ocurre cuando una de las partes no cumple total o parcialmente las obligaciones pactadas en un contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un incumplimiento contractual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos conflictos derivados de contratos pueden resolverse mediante conciliación extrajudicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite alcanzar acuerdos sin necesidad de acudir a un proceso judicial.",
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

      <IncumplimientoContratoContent />
    </>
  );
}
