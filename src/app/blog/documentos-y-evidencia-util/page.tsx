import { Metadata } from "next";
import DocumentoYEvidenciaUtilContent from "./DocumentoYEvidenciaUtilContent";

export const metadata: Metadata = {
  title:
    "¿Qué documentos llevar a una conciliación en Colombia? Guía completa de pruebas y evidencia (2026)",

  description:
    "Descubre qué documentos, pruebas y evidencia debes presentar en una audiencia de conciliación en Colombia. Conoce qué llevar según el tipo de conflicto y cómo preparar tu caso para aumentar las posibilidades de lograr un acuerdo.",

  keywords: [
    "qué documentos llevar a una conciliación",
    "documentos para conciliación Colombia",
    "evidencia para conciliación",
    "pruebas para conciliación",
    "qué llevar a audiencia de conciliación",
    "documentos conciliación Bogotá",
    "documentos conciliación familiar",
    "documentos conciliación civil",
    "evidencia conciliación comercial",
    "pruebas conciliación extrajudicial",
    "cómo preparar una conciliación",
    "documentos para conciliación extrajudicial",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",
  },

  openGraph: {
    title:
      "¿Qué documentos llevar a una conciliación en Colombia? Guía completa",

    description:
      "Aprende qué pruebas y documentos presentar en una audiencia de conciliación para fortalecer tu posición y facilitar un acuerdo.",

    url: "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",

    siteName: "Sol Centro de Conciliación",

    locale: "es_CO",

    type: "article",
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Qué documentos llevar a una conciliación en Colombia? (Guía 2026)",

    description:
      "Checklist completo de documentos y evidencia para una audiencia de conciliación.",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",

      "@type": "Article",

      headline:
        "¿Qué documentos llevar a una conciliación en Colombia? Guía completa de evidencia y pruebas",

      description:
        "Conoce qué documentos, pruebas y evidencia pueden ayudarte durante una audiencia de conciliación en Colombia y cómo prepararlos correctamente.",

      author: {
        "@type": "Organization",

        name: "Sol Centro de Conciliación",
      },

      publisher: {
        "@type": "Organization",

        name: "Sol Centro de Conciliación",
      },

      articleSection: "Conciliación Extrajudicial",

      keywords:
        "documentos conciliación, evidencia conciliación, pruebas conciliación Colombia, audiencia conciliación",

      about: [
        "Conciliación",

        "Pruebas",

        "Documentos",

        "Resolución de conflictos",

        "Conciliación Extrajudicial",

        "Audiencia de conciliación",
      ],

      mainEntityOfPage: {
        "@type": "WebPage",

        "@id":
          "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",
      },
    },
  ];

  const faqSchema = [
    {
      "@context": "https://schema.org",

      "@type": "FAQPage",

      mainEntity: [
        {
          "@type": "Question",

          name: "¿Qué documentos debo llevar a una audiencia de conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Depende del tipo de conflicto. Generalmente es recomendable presentar documentos de identidad, contratos, facturas, comprobantes de pago, conversaciones, correos electrónicos y cualquier evidencia relacionada con el caso.",
          },
        },

        {
          "@type": "Question",

          name: "¿Los chats de WhatsApp sirven como evidencia en una conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Los mensajes de WhatsApp pueden ayudar a demostrar conversaciones, acuerdos o incumplimientos cuando guardan relación con el conflicto que será objeto de conciliación.",
          },
        },

        {
          "@type": "Question",

          name: "¿Es obligatorio presentar pruebas durante una conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "No siempre es obligatorio, pero llevar documentos y evidencia organizada facilita la negociación y aumenta las posibilidades de alcanzar un acuerdo entre las partes.",
          },
        },

        {
          "@type": "Question",

          name: "¿Puedo asistir a una conciliación si no tengo todos los documentos?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Sí. Aunque contar con soportes completos es recomendable, también pueden utilizarse otros medios de prueba como correos electrónicos, mensajes, fotografías o comprobantes disponibles.",
          },
        },

        {
          "@type": "Question",

          name: "¿Cómo organizar la evidencia antes de una conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "Lo ideal es clasificar los documentos por fechas, identificar los hechos principales, resaltar los soportes más importantes y llevar copias físicas o digitales para facilitar la revisión durante la audiencia.",
          },
        },

        {
          "@type": "Question",

          name: "¿Qué pasa si la otra parte niega los hechos durante la conciliación?",

          acceptedAnswer: {
            "@type": "Answer",

            text: "La documentación y la evidencia presentada ayudan a sustentar la posición de cada parte y permiten que el conciliador comprenda mejor el origen del conflicto para orientar una posible solución.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <DocumentoYEvidenciaUtilContent />
    </>
  );
}
