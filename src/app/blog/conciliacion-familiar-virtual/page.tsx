import type { Metadata } from "next";
import ConciliacionFamiliarVirtualContent from "./ConciliacionFamiliarVirtualContent";

export const metadata: Metadata = {
  title: "Conciliación familiar virtual en Colombia | Audiencias online 2026",
  description:
    "Conoce cómo funciona la conciliación familiar virtual en Colombia, sus ventajas, requisitos y los asuntos familiares que pueden resolverse mediante audiencias virtuales.",
  keywords: [
    "conciliación familiar virtual",
    "conciliación virtual Colombia",
    "audiencia virtual conciliación",
    "conciliación familiar Bogotá",
    "conciliación online Colombia",
    "centro de conciliación virtual",
    "conciliación por videollamada",
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
    title: "Conciliación familiar virtual en Colombia",
    description:
      "Descubre cómo funcionan las audiencias virtuales de conciliación familiar en Colombia.",
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
    headline: "Conciliación familiar virtual en Colombia",
    description:
      "Guía completa sobre conciliación familiar virtual, audiencias online y resolución de conflictos familiares en Colombia.",
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
