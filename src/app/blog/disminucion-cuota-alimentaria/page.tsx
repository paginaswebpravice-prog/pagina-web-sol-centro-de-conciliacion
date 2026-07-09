import type { Metadata } from "next";
import DisminucionCuotaAlimentariaContent from "./DisminucionCuotaAlimentariaContent";

export const metadata: Metadata = {
  title:
    "¿Cómo disminuir la cuota alimentaria en Colombia? Requisitos, conciliación y proceso 2026",

  description:
    "Conoce cuándo puede solicitarse la disminución de la cuota alimentaria en Colombia, cuáles son los requisitos, cómo funciona la conciliación familiar y qué ocurre si no existe acuerdo.",

  keywords: [
    "disminución cuota alimentaria",
    "cómo disminuir cuota alimentaria",
    "reducir cuota alimentaria",
    "modificación cuota alimentaria",
    "conciliación alimentos Colombia",
    "conciliación familiar",
    "requisitos disminuir cuota alimentaria",
    "bajar cuota alimentaria",
    "modificar cuota alimentaria",
    "acuerdo alimentos",
    "cuota alimentaria Bogotá",
    "cuota alimentaria Colombia",
    "reducción cuota alimentaria",
    "conciliación familiar Bogotá",
    "proceso disminución cuota alimentaria",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",
  },

  openGraph: {
    title: "¿Cómo disminuir la cuota alimentaria en Colombia? Guía completa",

    description:
      "Descubre cuándo procede la reducción de una cuota alimentaria, cómo solicitarla mediante conciliación y cuáles son los requisitos en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",

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
      "¿Cómo disminuir la cuota alimentaria en Colombia? Requisitos y conciliación",

    description:
      "Guía completa sobre la disminución de la cuota alimentaria en Colombia, requisitos, conciliación familiar, documentos necesarios y efectos legales del acuerdo.",

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    articleSection: [
      "Conciliación Familiar",
      "Cuota Alimentaria",
      "Derecho de Familia",
    ],

    keywords: [
      "disminución cuota alimentaria",
      "cómo disminuir cuota alimentaria",
      "conciliación alimentos",
      "modificación cuota alimentaria",
      "reducir cuota alimentaria",
      "conciliación familiar Colombia",
      "cuota alimentaria",
    ],

    about: [
      {
        "@type": "Thing",
        name: "Cuota Alimentaria",
      },
      {
        "@type": "Thing",
        name: "Conciliación Familiar",
      },
      {
        "@type": "Thing",
        name: "Derecho de Familia",
      },
      {
        "@type": "Thing",
        name: "Obligaciones Alimentarias",
      },
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/disminucion-cuota-alimentaria",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuándo puede solicitarse la disminución de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando existen cambios importantes en la capacidad económica del obligado o en las circunstancias que dieron origen al acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede hacerse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las partes pueden modificar acuerdos de alimentos mediante una audiencia de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La reducción tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo alcanzado en conciliación tiene efectos jurídicos y puede exigirse legalmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pruebas se necesitan para solicitar la disminución de una cuota alimentaria?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente es importante aportar documentos que demuestren el cambio de circunstancias, como certificados laborales, desprendibles de nómina, soportes de ingresos, incapacidades, gastos extraordinarios u otras pruebas que acrediten la disminución de la capacidad económica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra persona no acepta disminuir la cuota alimentaria?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si no se logra un acuerdo durante la conciliación, el interesado puede acudir a la autoridad competente para solicitar la revisión de la cuota alimentaria conforme a la ley y a las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede modificar una cuota alimentaria fijada mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando cambian las condiciones económicas o personales que dieron origen al acuerdo, las partes pueden solicitar una nueva conciliación para revisar y modificar la cuota alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿La disminución de la cuota alimentaria es automática si disminuyen los ingresos?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No. La reducción de la cuota alimentaria debe ser acordada mediante conciliación o determinada por la autoridad competente; el simple cambio de ingresos no modifica automáticamente la obligación existente.",
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

      <DisminucionCuotaAlimentariaContent />
    </>
  );
}
