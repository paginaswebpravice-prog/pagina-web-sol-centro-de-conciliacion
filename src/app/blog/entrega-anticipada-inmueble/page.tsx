import type { Metadata } from "next";
import EntregaAnticipadaContent from "./EntregaAnticipadaContent";

export const metadata: Metadata = {
  title:
    "Entrega anticipada de inmueble arrendado en Colombia: derechos, multas y conciliación (Guía 2026)",

  description:
    "¿Debes entregar un inmueble arrendado antes de terminar el contrato? Conoce cuándo hay multas, qué derechos tienen arrendador y arrendatario y cómo la conciliación puede evitar conflictos legales en Colombia.",

  keywords: [
    "entrega anticipada de inmueble arrendado",
    "terminación anticipada contrato de arrendamiento",
    "devolver inmueble antes de terminar contrato",
    "multa por terminar contrato de arrendamiento",
    "conciliación arrendamiento",
    "entrega inmueble arrendado Colombia",
    "terminar contrato de arriendo antes del vencimiento",
    "acuerdo entre arrendador y arrendatario",
    "conciliación contrato de arrendamiento",
    "devolución anticipada inmueble",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
  },
  openGraph: {
    title: "Entrega anticipada de inmueble arrendado en Colombia",
    description:
      "Aprende cómo manejar la entrega anticipada de un inmueble arrendado mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
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
      "Entrega anticipada de inmueble arrendado en Colombia: derechos, obligaciones y conciliación",

    description:
      "Guía completa sobre la entrega anticipada de un inmueble arrendado en Colombia, incluyendo cuándo puede hacerse, posibles penalidades, derechos de las partes y cómo resolver el conflicto mediante conciliación.",

    keywords: [
      "entrega anticipada inmueble",
      "terminación contrato arriendo",
      "conciliación arrendamiento",
      "multa contrato de arrendamiento",
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
      "https://solcentrodeconciliacion.com/blog/entrega-anticipada-inmueble",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede entregar un inmueble arrendado antes de terminar el contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia es posible entregar un inmueble antes del vencimiento del contrato, siempre que se cumplan las condiciones legales o contractuales aplicables, o exista un acuerdo entre arrendador y arrendatario. La conciliación puede servir para formalizar ese acuerdo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Siempre debo pagar una multa por terminar un contrato de arrendamiento antes de tiempo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No necesariamente. La existencia de una penalidad depende de las condiciones del contrato de arrendamiento, de la normativa aplicable y de los acuerdos que alcancen las partes durante la negociación o la conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si el arrendador acepta la entrega anticipada del inmueble?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando el arrendador acepta la terminación anticipada, ambas partes pueden acordar la fecha de entrega, el estado del inmueble, los pagos pendientes y cualquier otra condición necesaria para finalizar la relación contractual de forma clara y segura.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria para entregar un inmueble antes del vencimiento del contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Sin embargo, acudir a un centro de conciliación es una alternativa recomendable cuando existen desacuerdos, ya que permite alcanzar soluciones mediante acuerdos voluntarios con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene acudir a una conciliación en un conflicto de arrendamiento?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación ayuda a reducir costos, evitar procesos judiciales prolongados, facilitar la comunicación entre las partes y lograr acuerdos sobre la entrega del inmueble, pagos pendientes o posibles compensaciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos pueden ser útiles para una conciliación por entrega anticipada?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente son útiles el contrato de arrendamiento, comprobantes de pago, comunicaciones entre las partes, inventarios del inmueble y cualquier otro documento relacionado con la ejecución del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué temas pueden acordarse durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden acordar la fecha de entrega, el estado del inmueble, la devolución de llaves, los pagos pendientes, las obligaciones económicas, las reparaciones necesarias y cualquier otro aspecto relacionado con la terminación del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no existe acuerdo entre arrendador y arrendatario?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible llegar a un acuerdo mediante conciliación, las partes conservan la posibilidad de acudir a los mecanismos legales que correspondan para resolver el conflicto conforme a la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿La entrega anticipada aplica tanto para viviendas como para locales comerciales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La terminación anticipada puede presentarse en diferentes tipos de contratos de arrendamiento, incluyendo vivienda urbana, oficinas, consultorios, bodegas y locales comerciales, dependiendo de las condiciones pactadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el inmueble presenta daños al momento de la entrega?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden revisar conjuntamente el estado del inmueble y acordar la forma de atender los daños o reparaciones que correspondan, dejando constancia de lo pactado en un acta de conciliación si así lo consideran conveniente.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez jurídica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando la conciliación se realiza conforme a la normativa colombiana, el acta suscrita por las partes produce efectos jurídicos y constituye un respaldo del acuerdo alcanzado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo es recomendable buscar asesoría antes de entregar un inmueble arrendado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable buscar orientación cuando existen dudas sobre las obligaciones contractuales, posibles penalidades, desacuerdos con el arrendador o cualquier situación que pueda generar un conflicto al momento de terminar el contrato de arrendamiento.",
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

      <EntregaAnticipadaContent />
    </>
  );
}
