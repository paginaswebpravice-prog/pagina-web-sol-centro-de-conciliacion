import type { Metadata } from "next";
import DeudasEntreParticularesContent from "./DeudasEntreParticularesContent";

export const metadata: Metadata = {
  title:
    "Conciliación por deudas entre particulares en Colombia | Recuperar dinero sin demandar",
  description:
    "Conoce cómo funciona la conciliación por deudas entre particulares en Colombia, cómo cobrar una deuda sin demanda y qué validez tiene el acuerdo conciliatorio.",
  keywords: [
    "deudas entre particulares",
    "conciliación por deudas",
    "cobro de deudas Colombia",
    "conciliación civil",
    "acuerdo de pago deuda",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/deudas-entre-particulares",
  },
  openGraph: {
    title: "Conciliación por deudas entre particulares en Colombia",
    description:
      "Aprende cómo recuperar dinero mediante conciliación sin necesidad de iniciar un proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/deudas-entre-particulares",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación por deudas entre particulares en Colombia",
    description:
      "Guía sobre conciliación para recuperar deudas entre particulares en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/deudas-entre-particulares",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo cobrar una deuda mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite que las partes acuerden el pago de una deuda sin necesidad de iniciar una demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo de pago tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si el deudor no paga después de conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acreedor puede utilizar el acta de conciliación para iniciar acciones judiciales de cobro.",
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

      <DeudasEntreParticularesContent />
    </>
  );
}
