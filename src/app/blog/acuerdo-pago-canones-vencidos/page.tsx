import type { Metadata } from "next";
import AcuerdoPagoCanonesContent from "./AcuerdoPagoCanonesContent";

export const metadata: Metadata = {
  title:
    "Acuerdo de pago de cánones vencidos en Colombia: modelo, formato y guía legal 2026",

  description:
    "Aprenda cómo hacer un acuerdo de pago por cánones de arrendamiento vencidos en Colombia. Incluye modelo, ejemplo, requisitos, efectos legales y cómo evitar una demanda de restitución del inmueble.",

  keywords: [
    "acuerdo de pago cánones vencidos",
    "modelo acuerdo de pago arriendo",
    "formato acuerdo de pago arrendamiento",
    "deuda arriendo Colombia",
    "cánones vencidos Colombia",
    "conciliación arrendamiento",
    "acuerdo pago alquiler atrasado",
    "ejemplo acuerdo pago arriendo",
    "negociar deuda arriendo",
    "acuerdo pago canon vencido",
    "conciliación arrendador arrendatario",
    "cómo pagar deuda de arriendo",
    "modelo conciliación arrendamiento",
    "evitar demanda restitución inmueble",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",
  },

  openGraph: {
    title:
      "Acuerdo de pago de cánones vencidos en Colombia | Modelo y guía 2026",

    description:
      "Modelo completo de acuerdo de pago por arriendos vencidos. Descubre cómo negociar la deuda y evitar procesos judiciales mediante conciliación.",

    url: "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Acuerdos de pago para cánones vencidos en Colombia",
    description:
      "Guía sobre cómo negociar deudas por cánones de arrendamiento vencidos mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/acuerdo-pago-canones-vencidos",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo hacer un acuerdo de pago por cánones vencidos?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El acuerdo debe indicar el valor total de la deuda, las cuotas, fechas de pago, forma de pago, consecuencias del incumplimiento y las firmas de las partes. Lo ideal es formalizarlo mediante un centro de conciliación.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si el arrendatario no paga los cánones vencidos?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El arrendador puede iniciar procesos de cobro ejecutivo o restitución del inmueble, dependiendo del caso concreto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Un acuerdo de pago firmado en conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación presta mérito ejecutivo y hace tránsito a cosa juzgada en los asuntos conciliables.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden negociar intereses por mora del arriendo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante la conciliación las partes pueden acordar descuentos, condonaciones parciales o nuevas condiciones de pago.",
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

      <AcuerdoPagoCanonesContent />
    </>
  );
}
