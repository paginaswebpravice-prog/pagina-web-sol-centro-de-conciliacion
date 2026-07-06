import type { Metadata } from "next";
import CobroDineroConciliacionContent from "./CobroDineroConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Cómo recuperar un dinero prestado? Cobro de dinero mediante conciliación en Colombia",
  description:
    "Aprenda cómo recuperar una deuda o dinero prestado mediante conciliación en Colombia. Conozca el proceso, acuerdos de pago, documentos necesarios, ventajas y qué hacer si el deudor incumple.",
  keywords: [
    "cobro de dinero",
    "recuperar dinero",
    "recuperar una deuda",
    "cómo cobrar una deuda",
    "conciliación de deudas",
    "acuerdo de pago",
    "cobro extrajudicial",
    "recuperar dinero prestado",
    "cobro de obligaciones",
    "deudas entre particulares",
    "conciliación civil Colombia",
    "recuperación de cartera",
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

    datePublished: "2026-07-06",
    dateModified: "2026-07-06",
    inLanguage: "es-CO",
    articleSection: "Propiedad Horizontal",
    keywords:
      "Cobro de administración, propiedad horizontal, conciliación, cuotas de administración, expensas comunes",
    about: {
      "@type": "Thing",
      name: "Conciliación en propiedad horizontal",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Administradores de propiedad horizontal y propietarios",
    },
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
