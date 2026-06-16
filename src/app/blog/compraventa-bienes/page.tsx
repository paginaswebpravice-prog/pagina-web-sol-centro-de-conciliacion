import type { Metadata } from "next";
import CompraventaBienesContent from "./CompraventaBienesContent";

export const metadata: Metadata = {
  title:
    "Conciliación en compraventa de bienes en Colombia | Solución de conflictos",
  description:
    "Conoce cómo resolver conflictos relacionados con la compraventa de bienes mediante conciliación en Colombia. Incumplimientos, pagos, entregas y garantías.",
  keywords: [
    "compraventa de bienes",
    "conciliación compraventa",
    "incumplimiento compraventa",
    "entrega de bienes",
    "conflictos contractuales",
    "conciliación Colombia",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
  },
  openGraph: {
    title: "Conciliación en compraventa de bienes en Colombia",
    description:
      "Aprende cómo resolver disputas relacionadas con la compraventa de bienes mediante conciliación extrajudicial.",
    url: "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación en compraventa de bienes en Colombia",
    description:
      "Guía completa sobre conciliación para resolver conflictos derivados de contratos de compraventa de bienes.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/compraventa-bienes",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puede conciliarse un conflicto de compraventa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos conflictos relacionados con la compraventa de bienes pueden resolverse mediante conciliación antes de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el vendedor no entrega el bien?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden intentar un acuerdo para exigir la entrega, solicitar devolución del dinero o pactar nuevas condiciones mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse legalmente en caso de incumplimiento.",
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

      <CompraventaBienesContent />
    </>
  );
}
