import type { Metadata } from "next";
import ConflictosFamiliaresDineroBienesContent from "./ConflictosFamiliaresDineroBienesContent";

export const metadata: Metadata = {
  title:
    "Conflictos familiares por dinero o bienes: ¿se pueden resolver mediante conciliación en Colombia?",
  description:
    "¿Tienes un conflicto familiar por dinero, préstamos, bienes o deudas? Conoce cuándo es posible acudir a conciliación en Colombia y cómo buscar un acuerdo.",
  keywords: [
    "conflictos familiares por dinero",
    "conflictos familiares por bienes",
    "conciliación familiar Colombia",
    "problemas familiares por dinero",
    "disputas familiares por bienes",
    "préstamos entre familiares",
    "deudas entre familiares",
    "acuerdos familiares Colombia",
    "conciliación por dinero",
    "conciliación por bienes",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-familiares-dinero-bienes-conciliacion",
  },
  openGraph: {
    title:
      "Conflictos familiares por dinero o bienes: cómo resolverlos mediante conciliación",
    description:
      "Descubre cómo la conciliación puede ayudar a resolver conflictos familiares relacionados con préstamos, deudas, dinero y bienes en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conflictos-familiares-dinero-bienes-conciliacion",
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
      "Conflictos familiares por dinero o bienes: ¿se pueden resolver mediante conciliación en Colombia?",
    description:
      "Guía sobre la conciliación como alternativa para resolver conflictos familiares relacionados con dinero, préstamos, deudas y bienes en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conflictos-familiares-dinero-bienes-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar un conflicto familiar por dinero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo de la naturaleza del conflicto y de los derechos involucrados, las partes pueden acudir a una conciliación para intentar llegar a un acuerdo sobre préstamos, deudas, obligaciones económicas u otras controversias de carácter disponible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede llegar a un acuerdo sobre bienes familiares mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En determinados casos sí. La conciliación puede permitir que las partes dialoguen y construyan acuerdos relacionados con obligaciones, pagos, compensaciones o situaciones patrimoniales que legalmente puedan ser objeto de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario tener un contrato escrito entre familiares para conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La ausencia de un documento escrito no impide por sí sola que las partes intenten resolver voluntariamente el conflicto mediante conciliación, aunque las circunstancias y pruebas disponibles pueden ser importantes para analizar el caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo en una conciliación familiar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no llegan a un acuerdo, podrán evaluar otras alternativas disponibles según las características del caso, incluyendo las acciones judiciales o mecanismos que correspondan.",
        },
      },
      {
        "@type": "Question",
        name: "¿Un acuerdo alcanzado en conciliación tiene efectos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando el acuerdo se formaliza válidamente en un acta de conciliación, puede producir los efectos jurídicos establecidos por la legislación colombiana.",
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

      <ConflictosFamiliaresDineroBienesContent />
    </>
  );
}
