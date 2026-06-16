import type { Metadata } from "next";
import ConciliacionLaboralBogotaContent from "./ConciliacionLaboralBogotaContent";

export const metadata: Metadata = {
  title: "Conciliación laboral en Bogotá | Colombia",
  description:
    "Conoce cómo funciona la conciliación laboral en Bogotá, qué conflictos se pueden resolver y cómo evitar procesos judiciales laborales en Colombia.",
  keywords: [
    "conciliación laboral Bogotá",
    "conflictos laborales Colombia",
    "liquidación laboral conciliación",
    "MASC laboral Colombia",
    "salarios conciliación Bogotá",
    "derecho laboral conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
  },
  openGraph: {
    title: "Conciliación laboral en Bogotá",
    description:
      "Solución de conflictos laborales mediante conciliación en Bogotá, Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación laboral en Bogotá",
    description:
      "Guía sobre conciliación laboral para resolver conflictos entre empleadores y trabajadores en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué se puede conciliar en materia laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Salarios, liquidaciones, prestaciones sociales, indemnizaciones y otros derechos laborales.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos es requisito antes de iniciar un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
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

      <ConciliacionLaboralBogotaContent />
    </>
  );
}
