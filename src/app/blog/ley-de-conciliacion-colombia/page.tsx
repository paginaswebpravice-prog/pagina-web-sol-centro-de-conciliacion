import type { Metadata } from "next";
import LeyConciliacionContent from "./LeyConciliacionContent";

export const metadata: Metadata = {
  title:
    "Ley de conciliación en Colombia 2026: normas vigentes, requisitos y cómo funciona",
  description:
    "Conoce cuál es la ley de conciliación en Colombia, qué normas la regulan, cuándo la conciliación es obligatoria, qué validez tiene un acta y cómo funciona el proceso paso a paso.",
  keywords: [
    "ley de conciliación Colombia",
    "ley conciliación Colombia",
    "Ley 640 de 2001",
    "Ley 2220 de 2022",
    "conciliación extrajudicial Colombia",
    "conciliación en derecho",
    "ley conciliación extrajudicial",
    "mecanismos alternativos de solución de conflictos",
    "MASC Colombia",
    "acta de conciliación",
    "requisitos conciliación",
    "conciliación obligatoria",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
  },
  openGraph: {
    title:
      "Ley de conciliación en Colombia: normas vigentes, requisitos y guía completa",
    description:
      "Aprende qué ley regula la conciliación en Colombia, cuáles son las normas vigentes, cuándo aplica y qué efectos jurídicos tiene un acta de conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
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
      "Ley de conciliación en Colombia: normas vigentes y cómo funciona",
    description:
      "Guía completa sobre la legislación que regula la conciliación en Colombia, incluyendo la Ley 640 de 2001, la Ley 2220 de 2022 y el funcionamiento de los mecanismos alternativos de solución de conflictos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/ley-de-conciliacion-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la ley que regula la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación en Colombia se encuentra regulada principalmente por la Ley 640 de 2001, la Ley 2220 de 2022 y otras disposiciones que desarrollan los mecanismos alternativos de solución de conflictos.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez jurídica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando se alcanza un acuerdo dentro de un procedimiento de conciliación, el acta produce efectos jurídicos y genera obligaciones para las partes conforme a la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es obligatoria la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de conflicto. En algunos asuntos la conciliación constituye un requisito previo antes de presentar una demanda, mientras que en otros puede realizarse de forma voluntaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse diversos conflictos civiles, comerciales, familiares, de arrendamiento, propiedad horizontal y otros asuntos permitidos por la ley, siempre que sean susceptibles de acuerdo entre las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no se logra un acuerdo en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible llegar a un acuerdo, las partes conservan la posibilidad de acudir a las acciones judiciales previstas por la legislación aplicable.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación puede realizarse de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La legislación colombiana contempla el uso de herramientas tecnológicas para diferentes actuaciones relacionadas con la conciliación, de acuerdo con los requisitos legales vigentes.",
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

      <LeyConciliacionContent />
    </>
  );
}
