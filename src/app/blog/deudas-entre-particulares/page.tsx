import type { Metadata } from "next";
import DeudasEntreParticularesContent from "./DeudasEntreParticularesContent";

export const metadata: Metadata = {
  title:
    "Conciliación por Deudas entre Particulares en Colombia | Cómo Cobrar sin Demandar (Guía 2026)",

  description:
    "Aprende cómo cobrar una deuda entre particulares sin iniciar una demanda. Conoce cómo funciona la conciliación, cuándo procede, qué documentos presentar, cómo lograr un acuerdo de pago y qué hacer si el deudor incumple en Colombia.",

  keywords: [
    "deudas entre particulares",
    "cómo cobrar una deuda",
    "cómo cobrar un dinero prestado",
    "persona no me quiere pagar",
    "conciliación por deudas",
    "acuerdo de pago",
    "cobro de dinero prestado",
    "cobrar sin demandar",
    "conciliación civil Colombia",
    "conciliación Bogotá",
    "recuperar dinero prestado",
    "deudor incumple acuerdo",
    "qué hacer si no me pagan",
    "acta de conciliación deuda",
    "conciliación de pago",
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
    title:
      "¿Cómo Cobrar una Deuda entre Particulares sin Demandar? | Guía Colombia 2026",

    description:
      "Descubre cómo recuperar un dinero prestado mediante conciliación, negociar acuerdos de pago y qué hacer cuando una persona no cumple con una obligación económica.",

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

    headline:
      "Cómo cobrar una deuda entre particulares mediante conciliación en Colombia",

    description:
      "Guía completa para recuperar dinero prestado mediante conciliación. Conoce cómo funciona el procedimiento, los acuerdos de pago, la documentación necesaria y las alternativas cuando el deudor incumple.",

    keywords:
      "deudas entre particulares, conciliación civil, cobrar deuda, acuerdo de pago, dinero prestado, conciliación Colombia",

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
        name: "¿Cómo puedo cobrar una deuda entre particulares sin demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación permite que acreedor y deudor lleguen a un acuerdo voluntario sobre el pago de la obligación sin iniciar un proceso judicial. En la audiencia pueden pactarse plazos, cuotas y demás condiciones de pago.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué documentos sirven para demostrar una deuda?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del caso pueden presentarse pagarés, contratos, letras de cambio, consignaciones, transferencias bancarias, facturas, mensajes de WhatsApp, correos electrónicos y cualquier otro documento que evidencie la existencia de la obligación.",
        },
      },

      {
        "@type": "Question",
        name: "¿Qué pasa si el deudor incumple el acuerdo de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acta de conciliación tiene efectos jurídicos. Si el deudor incumple lo acordado, el acreedor puede utilizarla para iniciar las acciones legales correspondientes.",
        },
      },

      {
        "@type": "Question",
        name: "¿Se puede negociar el pago por cuotas durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Las partes pueden acordar pagos por cuotas, nuevos plazos, descuentos, garantías o cualquier otra forma de cumplimiento que beneficie a ambas partes.",
        },
      },

      {
        "@type": "Question",
        name: "¿La conciliación tiene la misma validez que un contrato?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acuerdo queda consignado en un acta de conciliación con efectos jurídicos, lo que brinda seguridad y respaldo legal a las obligaciones asumidas por las partes.",
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
