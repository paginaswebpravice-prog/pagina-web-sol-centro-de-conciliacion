import type { Metadata } from "next";
import CasosConciliacionLaboralContent from "./CasosConciliacionLaboralContent";

export const metadata: Metadata = {
  title:
    "Casos de conciliación laboral en Colombia | Salarios, liquidaciones y despidos",
  description:
    "Conoce los principales casos de conciliación laboral en Colombia. Descubre ejemplos reales sobre salarios pendientes, liquidaciones, despidos, prestaciones sociales, indemnizaciones y cuándo este mecanismo sí permite resolver un conflicto laboral.",
  keywords: [
    "casos conciliación laboral",
    "conciliación laboral Colombia",
    "ejemplos conciliación laboral",
    "casos laborales conciliables",
    "conflictos laborales Colombia",
    "acuerdo trabajador empleador",
    "salarios pendientes conciliación",
    "liquidación laboral conciliación",
    "prestaciones sociales conciliación",
    "despido conciliación laboral",
    "indemnización laboral conciliación",
    "centro de conciliación laboral",
    "cómo resolver un conflicto laboral",
    "conciliación entre trabajador y empleador",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
  },
  openGraph: {
    title:
      "Casos de conciliación laboral en Colombia: ejemplos reales y soluciones",
    description:
      "Descubre qué conflictos laborales pueden resolverse mediante conciliación en Colombia. Conoce ejemplos reales sobre despidos, salarios, liquidaciones, prestaciones sociales e indemnizaciones.",
    url: "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
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
      "Casos de conciliación laboral en Colombia: ejemplos reales y cuándo funciona",
    description:
      "Guía completa con ejemplos reales de conciliación laboral en Colombia. Conoce qué conflictos entre trabajadores y empleadores pueden resolverse mediante conciliación, cuándo procede este mecanismo y cuáles son sus ventajas.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/casos-conciliacion-laboral",
    datePublished: "2026-07-06",
    dateModified: "2026-07-06",

    keywords: [
      "conciliación laboral",
      "casos conciliación laboral",
      "salarios pendientes",
      "liquidación laboral",
      "prestaciones sociales",
      "despido",
      "indemnización",
    ],

    about: [
      "Conciliación laboral",
      "Conflictos laborales",
      "Derecho laboral colombiano",
      "Trabajadores",
      "Empleadores",
      "Salarios",
      "Liquidaciones",
      "Prestaciones sociales",
    ],

    mentions: [
      "Trabajador",
      "Empleador",
      "Conciliador",
      "Centro de conciliación",
      "Ministerio del Trabajo",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué casos pueden resolverse mediante conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación laboral puede utilizarse para resolver conflictos relacionados con salarios pendientes, liquidaciones, prestaciones sociales, indemnizaciones, vacaciones, horas extras, terminación del contrato, acuerdos de pago y otras controversias entre trabajadores y empleadores, siempre que la ley permita la conciliación sobre esos asuntos.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral sirve para reclamar salarios pendientes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Uno de los casos más frecuentes de conciliación laboral es el relacionado con salarios pendientes de pago. Las partes pueden llegar a un acuerdo sobre el valor adeudado, la forma de pago y los plazos de cumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar diferencias sobre una liquidación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando existen diferencias sobre la liquidación laboral, las partes pueden acudir a una audiencia de conciliación para revisar los valores correspondientes a cesantías, intereses, primas, vacaciones, indemnizaciones u otros conceptos laborales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es posible conciliar un despido o la terminación de un contrato de trabajo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos es posible llegar a acuerdos relacionados con la terminación del contrato de trabajo, incluyendo indemnizaciones, pagos pendientes y otras obligaciones derivadas de la relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué beneficios tiene la conciliación laboral frente a una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación laboral suele ser más rápida, económica y flexible que un proceso judicial. Además, permite que trabajador y empleador construyan soluciones de mutuo acuerdo con la orientación de un conciliador imparcial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo en la conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no llegan a un acuerdo, el conflicto podrá resolverse mediante las acciones judiciales correspondientes, de acuerdo con la legislación laboral colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acuerdo logrado en una conciliación laboral tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando el acuerdo se celebra ante una autoridad o un centro de conciliación autorizado, produce efectos jurídicos y obliga a las partes a cumplir las obligaciones pactadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación laboral puede ser solicitada tanto por trabajadores como por empleadores cuando deseen resolver de manera amistosa un conflicto derivado de una relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo puede durar una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del caso y de la disposición de las partes para negociar. En muchos casos, el conflicto puede resolverse en una sola audiencia de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos se recomienda llevar a una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar contratos de trabajo, desprendibles de nómina, comprobantes de pago, liquidaciones, certificados laborales, comunicaciones entre las partes y cualquier documento que respalde las pretensiones de quien solicita la conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral es obligatoria antes de presentar una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La necesidad de agotar una conciliación antes de acudir a la jurisdicción laboral depende del tipo de conflicto y de lo establecido en la legislación colombiana para cada caso concreto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es recomendable acudir a un centro de conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable acudir a un centro de conciliación cuando exista disposición para negociar y se busque una solución rápida, económica y con efectos jurídicos frente a conflictos entre trabajadores y empleadores.",
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

      <CasosConciliacionLaboralContent />
    </>
  );
}
