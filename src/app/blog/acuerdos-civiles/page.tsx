import type { Metadata } from "next";
import AcuerdosCivilesContent from "./AcuerdosCivilesContent";

export const metadata: Metadata = {
  title:
    "Acuerdos civiles extrajudiciales en Colombia: qué son, ejemplos, requisitos y validez legal (2026)",
  description:
    "Descubre qué es un acuerdo civil extrajudicial, cuándo conviene realizarlo, qué conflictos pueden resolverse mediante conciliación, ejemplos, requisitos, ventajas y su validez legal en Colombia.",
  keywords: [
    "acuerdos civiles extrajudiciales",
    "acuerdo civil",
    "acuerdo extrajudicial",
    "conciliación civil",
    "conciliación civil Colombia",
    "centro de conciliación civil",
    "acta de conciliación civil",
    "ejemplo acuerdo civil",
    "modelo acuerdo civil",
    "resolver conflicto sin demanda",
    "resolver conflicto civil",
    "acuerdo de pago civil",
    "conciliación Bogotá",
    "acuerdo legal Colombia",
    "validez acuerdo civil",
    "conciliación extrajudicial Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/acuerdos-civiles",
  },
  openGraph: {
    title:
      "Acuerdos civiles extrajudiciales: guía completa, ejemplos y validez legal",
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
    headline:
      "Acuerdos civiles extrajudiciales en Colombia: guía completa, requisitos, ejemplos y validez legal",
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
