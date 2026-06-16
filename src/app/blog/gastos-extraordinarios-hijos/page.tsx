import type { Metadata } from "next";
import GastosExtraordinariosHijosContent from "./GastosExtraordinariosHijosContent";

export const metadata: Metadata = {
  title:
    "Gastos extraordinarios de hijos en Colombia | Conciliación familiar 2026",
  description:
    "Conoce qué son los gastos extraordinarios de los hijos, cuáles pueden conciliarse y cómo establecer acuerdos claros entre los padres en Colombia.",
  keywords: [
    "gastos extraordinarios hijos",
    "conciliación familiar Colombia",
    "gastos médicos hijos",
    "gastos educativos hijos",
    "cuota alimentaria Colombia",
    "padres separados Colombia",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
  },
  openGraph: {
    title: "Gastos extraordinarios de hijos en Colombia",
    description:
      "Aprende cómo acordar y conciliar gastos extraordinarios relacionados con hijos menores.",
    url: "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gastos extraordinarios de hijos en Colombia",
    description:
      "Guía sobre conciliación de gastos extraordinarios relacionados con hijos menores.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/gastos-extraordinarios-hijos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los gastos extraordinarios de los hijos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son gastos no cubiertos por la cuota alimentaria ordinaria, como tratamientos médicos especiales, actividades extracurriculares o necesidades imprevistas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden acordarse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los padres pueden establecer cómo asumir estos gastos mediante un acuerdo conciliatorio.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse en caso de incumplimiento.",
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

      <GastosExtraordinariosHijosContent />
    </>
  );
}
