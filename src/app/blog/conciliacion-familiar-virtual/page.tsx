import type { Metadata } from "next";
import ConciliacionFamiliarVirtualContent from "./ConciliacionFamiliarVirtualContent";

export const metadata: Metadata = {
  title:
    "Conciliación Familiar Virtual en Colombia: Audiencias Online con Validez Legal | Guía 2026",
  description:
    "Descubre cómo funciona la conciliación familiar virtual en Colombia. Conoce los requisitos, cómo asistir a una audiencia online, qué conflictos pueden resolverse, la validez legal del acta y cómo participar desde cualquier ciudad o desde el exterior.",
  keywords: [
    "conciliación familiar virtual",
    "conciliación familiar virtual Colombia",
    "conciliación virtual Colombia",
    "conciliación familiar online",
    "audiencia virtual conciliación",
    "audiencia virtual de conciliación",
    "conciliación por videollamada",
    "centro de conciliación virtual",
    "conciliación desde el exterior",
    "conciliación familiar Bogotá",
    "cuota alimentaria virtual",
    "custodia virtual",
    "conciliación de alimentos virtual",
    "conciliación régimen de visitas",
    "acta de conciliación virtual",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-virtual",
  },
  openGraph: {
    title:
      "Conciliación Familiar Virtual en Colombia: Cómo Funciona una Audiencia Online",
    description:
      "Aprende cómo funciona una conciliación familiar virtual, qué requisitos debes cumplir, qué asuntos pueden resolverse y la validez legal de los acuerdos alcanzados en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-virtual",
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
      "Conciliación Familiar Virtual en Colombia: Cómo Funciona, Requisitos y Validez Legal",
    description:
      "Guía completa sobre la conciliación familiar virtual en Colombia. Conoce cómo participar en una audiencia online, los documentos necesarios, los conflictos familiares que pueden resolverse y la validez jurídica del acta de conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-familiar-virtual",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación virtual tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos alcanzados mediante conciliación virtual tienen la misma validez jurídica que los realizados de manera presencial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos familiares pueden conciliarse virtualmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuotas alimentarias, custodia, régimen de visitas, gastos extraordinarios y otros conflictos familiares conciliables.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir presencialmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Cuando la conciliación se programa bajo modalidad virtual, las partes pueden participar desde cualquier lugar con conexión a internet.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación familiar virtual tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando se realiza conforme a la legislación colombiana, la conciliación familiar virtual produce acuerdos con la misma validez jurídica que una audiencia presencial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación familiar virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona que necesite resolver un conflicto familiar susceptible de conciliación, como cuota alimentaria, custodia, régimen de visitas o acuerdos económicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo participar si vivo fuera de Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La modalidad virtual permite que las personas participen desde el exterior siempre que cumplan los requisitos establecidos para la audiencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos necesito para una conciliación familiar virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere documento de identidad, soportes relacionados con el conflicto y los documentos que permitan sustentar las solicitudes presentadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué asuntos familiares pueden resolverse mediante conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre otros, cuota alimentaria, custodia, régimen de visitas, gastos extraordinarios de los hijos y diversos acuerdos familiares permitidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si una persona no asiste a la audiencia virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador dejará constancia de la inasistencia y el trámite continuará conforme a la normativa aplicable al caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura una audiencia de conciliación familiar virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del conflicto y de la disposición de las partes para llegar a un acuerdo. En muchos casos puede desarrollarse en una sola sesión.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir presencialmente al centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En la modalidad virtual las partes participan mediante plataformas tecnológicas autorizadas sin necesidad de desplazarse físicamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta firmada virtualmente puede exigirse legalmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede hacerse valer conforme a la legislación colombiana cuando cumple los requisitos legales.",
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

      <ConciliacionFamiliarVirtualContent />
    </>
  );
}
