import type { Metadata } from "next";
import AcuerdosCivilesContent from "./AcuerdosCivilesContent";

export const metadata: Metadata = {
  title: "Acuerdos civiles extrajudiciales en Colombia | Conciliación civil",
  description:
    "Conoce cómo funcionan los acuerdos civiles extrajudiciales en Colombia, sus beneficios, validez legal y cómo pueden evitar procesos judiciales.",
  keywords: [
    "acuerdos civiles extrajudiciales",
    "conciliación civil Colombia",
    "acuerdo extrajudicial",
    "resolver conflicto sin demanda",
    "conciliación Bogotá",
    "acuerdo civil",
    "solución de conflictos Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acuerdos-civiles",
  },
  openGraph: {
    title: "Acuerdos civiles extrajudiciales en Colombia",
    description:
      "Descubre cómo resolver conflictos civiles mediante acuerdos extrajudiciales con plena validez legal.",
    url: "https://solcentrodeconciliacion.com/blog/acuerdos-civiles",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acuerdos civiles extrajudiciales en Colombia",
    description:
      "Guía completa sobre acuerdos civiles extrajudiciales y conciliación civil en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acuerdos-civiles",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acuerdo civil extrajudicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un acuerdo alcanzado entre las partes para resolver un conflicto civil sin necesidad de acudir inicialmente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos civiles tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando el acuerdo se formaliza mediante conciliación puede tener efectos jurídicos y ser exigible legalmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante acuerdos civiles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deudas, incumplimientos contractuales, daños y perjuicios, conflictos vecinales, arrendamientos y otras controversias civiles.",
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

      <AcuerdosCivilesContent />
    </>
  );
}
