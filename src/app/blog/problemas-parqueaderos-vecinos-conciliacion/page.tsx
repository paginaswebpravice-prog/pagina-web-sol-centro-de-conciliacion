import type { Metadata } from "next";
import ConciliacionIncumplimientoContratoContent from "./ConciliacionIncumplimientoContratoContent";

export const metadata: Metadata = {
  title:
    "Conciliación por incumplimiento de contrato en Colombia: cómo reclamar y llegar a un acuerdo",
  description:
    "¿Incumplieron un contrato contigo? Conoce cómo funciona la conciliación por incumplimiento de contrato en Colombia, qué se puede acordar y cuándo acudir a un centro de conciliación.",
  keywords: [
    "conciliación por incumplimiento de contrato",
    "incumplimiento de contrato Colombia",
    "conciliación incumplimiento contractual",
    "reclamar incumplimiento de contrato",
    "conflicto contractual conciliación",
    "acuerdo por incumplimiento de contrato",
    "conciliación civil Colombia",
    "conciliación extrajudicial contrato",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-incumplimiento-contrato",
  },
  openGraph: {
    title:
      "Conciliación por incumplimiento de contrato en Colombia: cómo resolver el conflicto",
    description:
      "Descubre cómo resolver un incumplimiento contractual mediante conciliación, qué acuerdos pueden lograrse y cuándo es conveniente acudir a un centro de conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-incumplimiento-contrato",
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
      "Conciliación por incumplimiento de contrato en Colombia: cómo reclamar y llegar a un acuerdo",
    description:
      "Guía sobre la conciliación por incumplimiento de contrato en Colombia, las posibles soluciones y los acuerdos que pueden alcanzarse entre las partes.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-incumplimiento-contrato",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar un incumplimiento de contrato en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo de las características del caso y de que se trate de derechos disponibles, las partes pueden acudir a un centro de conciliación para intentar llegar a un acuerdo sobre las obligaciones pendientes, pagos, entregas, devoluciones u otras consecuencias del incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se puede acordar en una conciliación por incumplimiento de contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden negociar, entre otros aspectos, el pago de una obligación, nuevos plazos de cumplimiento, la entrega de bienes o servicios, devoluciones de dinero o fórmulas para resolver el conflicto de acuerdo con las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Necesito demandar antes de intentar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. En muchos conflictos contractuales las partes pueden intentar resolver directamente la controversia mediante conciliación antes de iniciar un proceso judicial, siempre que el asunto sea susceptible de ser conciliado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no se alcanza un acuerdo, las partes pueden evaluar las alternativas legales disponibles según el tipo de conflicto y las circunstancias particulares del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo de conciliación tiene efectos legales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación puede producir efectos jurídicos conforme a la legislación colombiana y al contenido del acuerdo alcanzado por las partes.",
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

      <ConciliacionIncumplimientoContratoContent />
    </>
  );
}
