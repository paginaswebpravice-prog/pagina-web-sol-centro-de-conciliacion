import type { Metadata } from "next";
import RestitucionDineroContent from "./RestitucionDineroContent";

export const metadata: Metadata = {
  title:
    "¿Cómo recuperar dinero por incumplimiento en Colombia? | Conciliación y acuerdos de pago (Guía 2026)",

  description:
    "Aprende cómo recuperar dinero por incumplimiento de contratos, préstamos, ventas o servicios mediante conciliación en Colombia. Conoce los requisitos, documentos, acuerdos de pago y qué hacer si la otra parte no cumple.",

  keywords: [
    "cómo recuperar dinero",
    "recuperar dinero por incumplimiento",
    "restitución de dinero",
    "devolución de dinero Colombia",
    "conciliación para recuperar dinero",
    "acuerdo de pago",
    "incumplimiento de contrato",
    "cobro de deudas",
    "recuperar préstamo de dinero",
    "conciliación civil",
    "conciliación Bogotá",
    "acta de conciliación",
    "mérito ejecutivo",
    "recuperar dinero sin demanda",
    "cobro de obligaciones",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/restitucion-dinero",
  },

  openGraph: {
    title:
      "¿Cómo recuperar dinero por incumplimiento en Colombia? | Guía completa",

    description:
      "Descubre cuándo procede la restitución de dinero mediante conciliación, qué documentos necesitas y cómo lograr acuerdos con efectos jurídicos.",

    url: "https://solcentrodeconciliacion.com/blog/restitucion-dinero",

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
      "¿Cómo recuperar dinero por incumplimiento mediante conciliación en Colombia?",

    description:
      "Guía completa sobre restitución de dinero, acuerdos de pago, incumplimiento contractual y conciliación civil en Colombia.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/restitucion-dinero",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede recuperar dinero mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite llegar a acuerdos de pago o de restitución económica cuando existe un incumplimiento contractual, una deuda o una obligación pendiente entre las partes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué pasa si la persona no cumple el acta de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación presta mérito ejecutivo y puede utilizarse para exigir judicialmente el cumplimiento del acuerdo firmado.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos sirven para demostrar una deuda?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Contratos, facturas, comprobantes de consignación, transferencias bancarias, pagarés, recibos, correos electrónicos, mensajes de WhatsApp y cualquier documento que demuestre la existencia de la obligación.",
        },
      },

      {
        "@type": "Question",
        name: "¿Es obligatorio demandar para recuperar el dinero?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre. En muchos casos la conciliación permite solucionar el conflicto mediante acuerdos voluntarios sin necesidad de iniciar un proceso judicial.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué obligaciones económicas pueden conciliarse?",

        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre otras, préstamos personales, incumplimientos de contratos, compraventas, prestación de servicios, arrendamientos, facturas pendientes y acuerdos comerciales.",
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

      <RestitucionDineroContent />
    </>
  );
}
