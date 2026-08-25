import type { Metadata } from "next";
import IncumplimientoAcuerdoEntreParticularesContent from "./IncumplimientoAcuerdoEntreParticularesContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de acuerdos entre particulares en Colombia: qué hacer y cómo conciliar",
  description:
    "¿Una persona incumplió un acuerdo contigo? Conoce qué opciones existen en Colombia, cuándo puedes acudir a conciliación y cómo buscar una solución antes de iniciar un proceso judicial.",
  keywords: [
    "incumplimiento de acuerdo entre particulares",
    "incumplimiento de acuerdos Colombia",
    "qué hacer si no cumplen un acuerdo",
    "acuerdo entre particulares Colombia",
    "incumplimiento de compromiso de pago",
    "conciliación por incumplimiento de acuerdo",
    "incumplimiento de obligación entre particulares",
    "acuerdo verbal entre particulares",
    "cómo exigir cumplimiento de un acuerdo",
    "conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-entre-particulares",
  },
  openGraph: {
    title:
      "¿Incumplieron un acuerdo contigo? Qué hacer entre particulares en Colombia",
    description:
      "Conoce qué puedes hacer cuando una persona incumple un acuerdo y cómo la conciliación puede ayudar a buscar una solución antes de acudir a un proceso judicial.",
    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-entre-particulares",
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
      "Incumplimiento de acuerdos entre particulares en Colombia: qué hacer y cómo conciliar",
    description:
      "Guía para entender qué opciones existen cuando una persona incumple un acuerdo entre particulares en Colombia y cómo la conciliación puede ayudar a resolver el conflicto.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-acuerdo-entre-particulares",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si una persona incumple un acuerdo conmigo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo primero es revisar las condiciones del acuerdo y conservar los documentos, mensajes, comprobantes u otros elementos que permitan demostrar lo pactado. Dependiendo del caso, las partes pueden intentar una negociación directa o acudir a un mecanismo como la conciliación para buscar una solución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un incumplimiento entre particulares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En los asuntos que sean legalmente conciliables, las partes pueden acudir a un centro de conciliación para intentar construir un acuerdo sobre el cumplimiento de obligaciones, pagos pendientes, entrega de bienes u otras diferencias derivadas del conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Un acuerdo verbal entre particulares tiene validez?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La validez y la forma de demostrar un acuerdo verbal dependen de las circunstancias y de la naturaleza de la obligación. Por eso es importante conservar mensajes, conversaciones, comprobantes y demás elementos relacionados con lo que las partes acordaron.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una de las partes no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ausencia de una de las partes puede impedir que se alcance un acuerdo en esa audiencia. Las consecuencias y las alternativas posteriores dependerán de la naturaleza del asunto y de las reglas aplicables al caso concreto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si las partes llegan a un acuerdo en conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando las partes alcanzan un acuerdo dentro de una conciliación, este queda consignado en el acta correspondiente y produce los efectos jurídicos previstos por la legislación colombiana, siempre de acuerdo con la naturaleza del asunto conciliado.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación reemplaza siempre un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La conciliación busca que las partes encuentren una solución por acuerdo. Si no es posible conciliar o el asunto requiere otra vía, pueden existir alternativas judiciales o administrativas según las particularidades del conflicto.",
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

      <IncumplimientoAcuerdoEntreParticularesContent />
    </>
  );
}
