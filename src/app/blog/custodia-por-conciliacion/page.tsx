import type { Metadata } from "next";
import CustodiaPorConciliacionContent from "./CustodiaPorConciliacionContent";

export const metadata: Metadata = {
  title:
    "Custodia y cuidado personal mediante conciliación en Colombia | Guía 2026",
  description:
    "Conoce cómo acordar la custodia y el cuidado personal de hijos menores mediante conciliación en Colombia. Guía sobre acuerdos parentales, visitas y responsabilidades.",
  keywords: [
    "custodia por conciliación",
    "cuidado personal menores",
    "custodia hijos Colombia",
    "conciliación familiar Bogotá",
    "régimen de visitas",
    "custodia compartida Colombia",
    "acuerdo de custodia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",
  },
  openGraph: {
    title: "Custodia y cuidado personal mediante conciliación en Colombia",
    description:
      "Aprende cómo establecer acuerdos de custodia, cuidado personal y visitas mediante conciliación familiar.",
    url: "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Custodia y cuidado personal mediante conciliación en Colombia",
    description:
      "Guía sobre acuerdos de custodia y cuidado personal de hijos menores mediante conciliación familiar.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/custodia-por-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La custodia puede acordarse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los padres pueden llegar a acuerdos relacionados con la custodia y el cuidado personal de los hijos mediante conciliación familiar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede acordar un régimen de visitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite definir horarios, frecuencia y condiciones para las visitas del padre o madre que no convive permanentemente con el menor.",
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

      <CustodiaPorConciliacionContent />
    </>
  );
}
