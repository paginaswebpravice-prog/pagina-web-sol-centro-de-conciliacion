import type { Metadata } from "next";
import ConciliacionCuotaAlimentariaContent from "./ConciliacionCuotaAlimentariaContent";

export const metadata: Metadata = {
  title: "Conciliación de cuota alimentaria en Colombia | Guía completa 2026",
  description:
    "Conoce cómo funciona la conciliación de cuota alimentaria en Colombia, cómo fijar una cuota para menores de edad, qué documentos se necesitan y qué sucede en caso de incumplimiento.",
  keywords: [
    "cuota alimentaria Colombia",
    "conciliación cuota alimentaria",
    "alimentos para menores",
    "conciliación familiar Bogotá",
    "fijar cuota alimentaria",
    "cuota alimentaria hijos",
    "centro de conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
  },
  openGraph: {
    title: "Conciliación de cuota alimentaria en Colombia | Guía completa",
    description:
      "Aprende cómo establecer una cuota alimentaria mediante conciliación en Colombia y cuáles son sus efectos legales.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación de cuota alimentaria en Colombia",
    description:
      "Guía completa sobre conciliación de cuota alimentaria para menores de edad en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-cuota-alimentaria",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una conciliación de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un procedimiento mediante el cual los padres pueden acordar el valor, forma y periodicidad de la cuota alimentaria con la ayuda de un conciliador.",
        },
      },
      {
        "@type": "Question",
        name: "¿La cuota alimentaria acordada tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo consignado en un acta de conciliación tiene efectos jurídicos y puede exigirse en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué cubre una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede incluir alimentación, educación, salud, vivienda, vestuario, recreación y demás necesidades del menor.",
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

      <ConciliacionCuotaAlimentariaContent />
    </>
  );
}
