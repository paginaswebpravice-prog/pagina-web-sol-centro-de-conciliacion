import type { Metadata } from "next";
import CobroDineroConciliacionContent from "./CobroDineroConciliacionContent";

export const metadata: Metadata = {
  title:
    "Cobro de dinero mediante conciliación en Colombia | Recuperar pagos sin demandar",
  description:
    "Aprende cómo recuperar dinero mediante conciliación en Colombia. Conoce cómo funciona el cobro de deudas, acuerdos de pago y alternativas antes de iniciar una demanda.",
  keywords: [
    "cobro de dinero conciliación",
    "recuperar deuda Colombia",
    "conciliación de deudas",
    "cobro extrajudicial",
    "acuerdo de pago",
    "conciliación civil Colombia",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cobro-dinero-conciliacion",
  },
  openGraph: {
    title: "Cobro de dinero mediante conciliación en Colombia",
    description:
      "Descubre cómo recuperar pagos pendientes mediante conciliación antes de acudir a un proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/cobro-dinero-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cobro de dinero mediante conciliación en Colombia",
    description:
      "Guía sobre recuperación de dinero y acuerdos de pago mediante conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/cobro-dinero-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo recuperar dinero mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite llegar a acuerdos de pago para recuperar dinero sin necesidad de acudir inmediatamente a una demanda judicial.",
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
        name: "¿Qué ocurre si la otra persona no paga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación puede servir como soporte para iniciar acciones legales encaminadas al cobro de la obligación.",
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

      <CobroDineroConciliacionContent />
    </>
  );
}
