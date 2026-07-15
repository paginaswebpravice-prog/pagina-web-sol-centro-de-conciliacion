import type { Metadata } from "next";
import TerminacionContratoMutuoAcuerdoContent from "./TerminacionContratoMutuoAcuerdoContent";

export const metadata: Metadata = {
  title:
    "Terminación de contrato por mutuo acuerdo en Colombia: requisitos, liquidación y conciliación | Guía 2026",

  description:
    "Conoce cómo realizar una terminación de contrato por mutuo acuerdo en Colombia. Descubre requisitos, derechos del trabajador, liquidación, conciliación y cómo evitar futuros conflictos laborales.",

  keywords: [
    "terminación de contrato por mutuo acuerdo",
    "terminación contrato laboral mutuo acuerdo",
    "acuerdo de terminación laboral",
    "terminar contrato laboral Colombia",
    "conciliación laboral",
    "liquidación laboral",
    "acta de conciliación laboral",
    "mutuo acuerdo trabajador empleador",
    "derechos del trabajador",
    "liquidación prestaciones sociales",
    "terminación laboral sin demanda",
    "centro de conciliación laboral",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",
  },

  openGraph: {
    title:
      "Terminación de contrato por mutuo acuerdo en Colombia | Requisitos y Conciliación",

    description:
      "Aprende cómo finalizar un contrato laboral por mutuo acuerdo, qué debe incluir el acuerdo, cuándo acudir a conciliación y cuáles son los derechos del trabajador.",

    url: "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",

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
      "Terminación de contrato por mutuo acuerdo en Colombia: guía completa 2026",

    description:
      "Todo lo que debes saber sobre la terminación de contrato laboral por mutuo acuerdo en Colombia, la conciliación laboral, la liquidación y los efectos legales del acuerdo.",

    keywords: [
      "terminación de contrato por mutuo acuerdo",
      "conciliación laboral",
      "liquidación laboral",
      "acuerdo laboral",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿La terminación de contrato por mutuo acuerdo es legal en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Siempre que exista consentimiento libre entre empleador y trabajador, la terminación por mutuo acuerdo es una forma válida de finalizar el contrato laboral en Colombia.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación es obligatoria para terminar un contrato por mutuo acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No siempre. Sin embargo, acudir a un centro de conciliación brinda mayor seguridad jurídica y permite dejar constancia formal del acuerdo alcanzado.",
        },
      },

      {
        "@type": "Question",

        name: "¿La empresa debe pagar liquidación y prestaciones sociales?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La terminación por mutuo acuerdo no elimina el deber de pagar salarios pendientes, vacaciones, cesantías, intereses, primas y demás prestaciones sociales que correspondan.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué pasa si una de las partes incumple el acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si el acuerdo fue formalizado mediante conciliación, el acta puede tener efectos jurídicos que permiten exigir judicialmente su cumplimiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede un trabajador negarse a firmar un mutuo acuerdo?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Nadie puede ser obligado a firmar una terminación por mutuo acuerdo. La decisión debe ser completamente voluntaria.",
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

      <TerminacionContratoMutuoAcuerdoContent />
    </>
  );
}
