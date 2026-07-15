import type { Metadata } from "next";
import RequisitosConciliacionContent from "./RequisitosConciliacionContent";

export const metadata: Metadata = {
  title:
    "Requisitos para Conciliar en Colombia: Documentos, Pasos y Requisitos Legales (Guía 2026)",

  description:
    "Conoce los requisitos para iniciar una conciliación en Colombia. Descubre qué documentos necesitas, quién puede conciliar, qué casos son conciliables, los pasos del proceso y cómo preparar la audiencia.",

  keywords: [
    "requisitos para conciliar Colombia",
    "requisitos legales conciliación",
    "cómo iniciar una conciliación",
    "documentos para conciliación",
    "qué necesito para conciliar",
    "quién puede conciliar",
    "centro de conciliación Colombia",
    "conciliación extrajudicial Colombia",
    "solicitud de conciliación",
    "audiencia de conciliación",
    "acta de conciliación",
    "MASC Colombia",
    "conciliación civil",
    "conciliación familiar",
    "conciliación comercial",
    "conciliación laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",
  },

  openGraph: {
    title:
      "Requisitos para Conciliar en Colombia: Documentos, Pasos y Requisitos Legales",

    description:
      "Aprende cuáles son los requisitos legales para iniciar una conciliación en Colombia, qué documentos presentar y cómo funciona el procedimiento.",

    url: "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",

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
      "Requisitos para Conciliar en Colombia: Documentos, Pasos y Requisitos Legales",

    description:
      "Guía completa sobre los requisitos para iniciar una conciliación en Colombia, la documentación necesaria, quién puede solicitarla, qué asuntos pueden conciliarse y cómo se desarrolla una audiencia.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/requisitos-legales-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué requisitos debo cumplir para iniciar una conciliación en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es necesario que exista un conflicto susceptible de conciliación, identificar correctamente a las partes involucradas y presentar la información o documentos que respalden el caso.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos se necesitan para una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del conflicto, pero normalmente se presentan documentos de identidad, contratos, facturas, comprobantes de pago, correos electrónicos, mensajes y demás soportes relacionados con la controversia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio contratar un abogado para conciliar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No siempre. Muchas conciliaciones pueden iniciarse directamente por las partes, aunque recibir orientación jurídica puede ser recomendable en casos complejos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué conflictos pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Entre otros, pueden conciliarse conflictos civiles, familiares, comerciales, de arrendamiento y algunos asuntos laborales, siempre que la ley permita llegar a acuerdos sobre ellos.",
        },
      },

      {
        "@type": "Question",

        name: "¿Cuánto tiempo puede tardar una conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El tiempo depende del caso y de la disponibilidad de las partes, aunque muchas conciliaciones logran resolverse en una sola audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿El acta de conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes llegan a un acuerdo, este queda consignado en un acta de conciliación que produce efectos jurídicos conforme a la legislación colombiana.",
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

      <RequisitosConciliacionContent />
    </>
  );
}
