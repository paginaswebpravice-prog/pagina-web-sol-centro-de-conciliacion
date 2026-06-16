import type { Metadata } from "next";
import ConciliacionPadresSeparadosContent from "./ConciliacionPadresSeparadosContent";

export const metadata: Metadata = {
  title: "Conciliación entre padres separados en Colombia | Guía completa 2026",
  description:
    "Conoce cómo la conciliación entre padres separados permite resolver conflictos sobre hijos, visitas, custodia, alimentos y acuerdos familiares en Colombia.",
  keywords: [
    "padres separados",
    "conciliación familiar Colombia",
    "custodia hijos",
    "régimen de visitas",
    "cuota alimentaria",
    "conciliación Bogotá",
    "acuerdo entre padres",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",
  },
  openGraph: {
    title: "Conciliación entre padres separados en Colombia",
    description:
      "Guía para resolver conflictos familiares mediante conciliación entre padres separados.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación entre padres separados en Colombia",
    description:
      "Cómo resolver conflictos relacionados con hijos, visitas, custodia y alimentos mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-padres-separados",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué temas pueden conciliar padres separados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden acordar asuntos relacionados con custodia, cuidado personal, régimen de visitas, cuota alimentaria y otras responsabilidades respecto de los hijos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos alcanzados en conciliación quedan consignados en un acta con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede modificar un acuerdo posteriormente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las circunstancias familiares puede realizarse una nueva conciliación.",
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

      <ConciliacionPadresSeparadosContent />
    </>
  );
}
