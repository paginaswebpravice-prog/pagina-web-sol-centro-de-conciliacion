import type { Metadata } from "next";
import ConciliacionFamiliarBogotaContent from "./ConciliacionFamiliarBogotaContent";

export const metadata: Metadata = {
  title: "Conciliación familiar en Bogotá | Colombia",
  description:
    "Conoce cómo funciona la conciliación familiar en Bogotá, qué casos se pueden resolver y cómo ayuda a evitar procesos judiciales en Colombia.",
  keywords: [
    "conciliación familiar Bogotá",
    "conciliación familia Colombia",
    "custodia conciliación Bogotá",
    "alimentos conciliación Colombia",
    "divorcio conciliación Bogotá",
    "MASC familia Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",
  },
  openGraph: {
    title: "Conciliación familiar en Bogotá",
    description:
      "Solución de conflictos familiares mediante conciliación en Bogotá, Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación familiar en Bogotá",
    description:
      "Guía sobre conciliación familiar para resolver conflictos como custodia, alimentos y visitas en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué temas se pueden conciliar en familia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custodia, alimentos, régimen de visitas, separación de bienes y otros conflictos familiares.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación familiar es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos es requisito previo antes de acudir a un juez de familia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Tiene validez legal el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene plena validez jurídica en Colombia.",
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

      <ConciliacionFamiliarBogotaContent />
    </>
  );
}
