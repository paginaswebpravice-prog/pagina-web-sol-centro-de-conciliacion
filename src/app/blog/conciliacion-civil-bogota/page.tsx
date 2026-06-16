import type { Metadata } from "next";
import ConciliacionCivilBogotaContent from "./ConciliacionCivilBogotaContent";

export const metadata: Metadata = {
  title: "Conciliación civil en Bogotá | Colombia",
  description:
    "Conoce cómo funciona la conciliación civil en Bogotá, qué conflictos se pueden resolver y cómo evitar procesos judiciales en Colombia.",
  keywords: [
    "conciliación civil Bogotá",
    "conflictos civiles Colombia",
    "deudas conciliación Bogotá",
    "MASC civil Colombia",
    "conciliación extrajudicial civil",
    "resolver conflictos civiles Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",
  },
  openGraph: {
    title: "Conciliación civil en Bogotá",
    description:
      "Resolución de conflictos civiles en Bogotá mediante conciliación extrajudicial.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación civil en Bogotá",
    description:
      "Guía sobre conciliación civil para resolver conflictos como deudas, contratos y obligaciones en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-civil-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué conflictos civiles se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deudas, contratos, incumplimientos y obligaciones civiles entre particulares.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación civil es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos es requisito antes de iniciar una demanda civil.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene validez legal el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene efectos jurídicos en Colombia.",
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

      <ConciliacionCivilBogotaContent />
    </>
  );
}
