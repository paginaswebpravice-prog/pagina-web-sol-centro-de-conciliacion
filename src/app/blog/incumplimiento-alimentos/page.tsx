import type { Metadata } from "next";
import IncumplimientoAlimentosContent from "./IncumplimientoAlimentosContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de conciliación de alimentos en Colombia | Qué hacer en 2026",
  description:
    "Conoce qué hacer cuando una persona incumple un acuerdo de cuota alimentaria firmado mediante conciliación en Colombia.",
  keywords: [
    "incumplimiento cuota alimentaria",
    "incumplimiento conciliación alimentos",
    "demanda por alimentos",
    "acta de conciliación alimentos",
    "cuota alimentaria Colombia",
    "conciliación familiar Bogotá",
    "incumplimiento acta conciliación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",
  },
  openGraph: {
    title: "Incumplimiento de conciliación de alimentos en Colombia",
    description:
      "Qué hacer cuando una persona incumple una cuota alimentaria acordada mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Incumplimiento de conciliación de alimentos en Colombia",
    description:
      "Guía sobre las acciones legales disponibles cuando se incumple una conciliación de alimentos.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-alimentos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué pasa si no pagan la cuota alimentaria acordada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El beneficiario puede iniciar acciones legales para exigir el cumplimiento del acuerdo contenido en el acta de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación presta mérito ejecutivo y puede hacerse cumplir judicialmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede embargar al deudor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso y de la decisión judicial, pueden existir medidas para garantizar el cumplimiento de las obligaciones alimentarias.",
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

      <IncumplimientoAlimentosContent />
    </>
  );
}
