import type { Metadata } from "next";
import CasosConciliacionAntesDeDemandarContent from "./CasosConciliacionAntesDeDemandarContent";

export const metadata: Metadata = {
  title:
    "¿Cuándo se debe conciliar antes de demandar en Colombia? Casos y ejemplos",
  description:
    "Conoce en qué casos se debe intentar una conciliación antes de demandar en Colombia, cuándo es requisito de procedibilidad y qué situaciones pueden resolverse mediante conciliación.",
  keywords: [
    "conciliación antes de demandar",
    "cuándo se debe conciliar antes de demandar",
    "casos de conciliación antes de demandar",
    "conciliación requisito de procedibilidad",
    "conciliación prejudicial Colombia",
    "cuándo es obligatoria la conciliación",
    "casos que requieren conciliación",
    "conciliación extrajudicial Colombia",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/casos-conciliacion-antes-de-demandar",
  },
  openGraph: {
    title:
      "¿Cuándo se debe conciliar antes de demandar en Colombia? Casos y ejemplos",
    description:
      "Descubre cuándo la conciliación debe intentarse antes de presentar una demanda y qué conflictos pueden resolverse mediante este mecanismo.",
    url: "https://solcentrodeconciliacion.com/blog/casos-conciliacion-antes-de-demandar",
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
      "¿Cuándo se debe conciliar antes de demandar en Colombia? Casos y ejemplos",
    description:
      "Guía sobre los casos en los que puede ser necesario intentar una conciliación antes de presentar una demanda en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://solcentrodeconciliacion.com/blog/casos-conciliacion-antes-de-demandar",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Siempre es obligatorio conciliar antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. La conciliación como requisito de procedibilidad depende del tipo de asunto, la jurisdicción y las condiciones establecidas por la legislación colombiana. No todos los conflictos requieren agotar esta etapa antes de acudir a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué significa que la conciliación sea requisito de procedibilidad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Significa que, en determinados asuntos, la persona debe intentar previamente una conciliación antes de presentar la demanda, salvo las excepciones previstas por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué casos pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de la naturaleza del conflicto y de que los derechos involucrados sean susceptibles de conciliación, pueden abordarse asuntos relacionados con obligaciones económicas, contratos, arrendamientos, daños, conflictos familiares y otras controversias permitidas por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si intento conciliar y no llegamos a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando no se logra un acuerdo, la situación puede continuar por las vías legales correspondientes. En los casos en los que la conciliación constituye requisito de procedibilidad, la constancia correspondiente puede ser necesaria para continuar con el trámite judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación reemplaza una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede evitar una demanda cuando las partes alcanzan un acuerdo sobre el conflicto. Sin embargo, si no existe acuerdo y el asunto puede llevarse ante un juez, la parte interesada podrá acudir a la vía judicial cuando se cumplan los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Un acuerdo de conciliación tiene efectos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación puede producir efectos jurídicos importantes y, cuando cumple los requisitos legales, presta mérito ejecutivo y hace tránsito a cosa juzgada respecto de lo acordado.",
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

      <CasosConciliacionAntesDeDemandarContent />
    </>
  );
}
