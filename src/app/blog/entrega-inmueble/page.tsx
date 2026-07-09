import type { Metadata } from "next";
import EntregaInmuebleContent from "./EntregaInmuebleContent";

export const metadata: Metadata = {
  title:
    "Entrega de inmueble por conciliación en Colombia: Guía 2026 para arrendadores e inquilinos",

  description:
    "Aprende cómo realizar la entrega de un inmueble por conciliación en Colombia. Descubre cómo acordar la restitución voluntaria de una vivienda, apartamento, casa o local comercial, evitar procesos judiciales y lograr un acuerdo con plena validez legal.",

  keywords: [
    "entrega de inmueble por conciliación",
    "entrega de inmueble Colombia",
    "restitución voluntaria de inmueble",
    "restitución de inmueble por conciliación",
    "conciliación arrendamiento Colombia",
    "entrega de vivienda arrendada",
    "devolución de inmueble arrendado",
    "entrega de apartamento arrendado",
    "entrega de local comercial",
    "terminación contrato de arrendamiento",
    "arrendador e inquilino",
    "acta de conciliación arrendamiento",
    "acuerdo de restitución inmueble",
    "centro de conciliación Colombia",
    "conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/entrega-inmueble",
  },

  openGraph: {
    title:
      "Entrega de inmueble por conciliación en Colombia | Guía completa 2026",

    description:
      "Conoce cómo devolver un inmueble mediante conciliación, evitar conflictos entre arrendador e inquilino y lograr un acuerdo con efectos legales en Colombia.",

    url: "https://solcentrodeconciliacion.com/blog/entrega-inmueble",

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
      "Entrega de inmueble por conciliación en Colombia: cómo devolver una vivienda o local sin acudir a un proceso judicial",

    description:
      "Guía completa sobre la entrega de inmuebles mediante conciliación en Colombia. Conoce cómo funciona la restitución voluntaria, qué puede incluir el acuerdo, sus beneficios, requisitos y preguntas frecuentes.",

    keywords: [
      "entrega de inmueble",
      "restitución voluntaria",
      "conciliación de arrendamiento",
      "entrega de vivienda",
      "entrega de local comercial",
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
      "https://solcentrodeconciliacion.com/blog/entrega-inmueble",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la entrega de un inmueble por conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es un acuerdo voluntario entre arrendador e inquilino mediante el cual se establecen las condiciones para devolver un inmueble, fijando aspectos como la fecha de entrega, el estado del bien, los pagos pendientes y demás obligaciones derivadas del contrato de arrendamiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿La entrega del inmueble mediante conciliación tiene validez legal?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. El acta de conciliación tiene efectos jurídicos y constituye un documento que contiene los compromisos asumidos por las partes durante la audiencia.",
        },
      },

      {
        "@type": "Question",

        name: "¿Se pueden acordar pagos pendientes durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Durante la audiencia es posible negociar cánones de arrendamiento pendientes, servicios públicos, reparaciones, depósitos, indemnizaciones y otras obligaciones relacionadas con el contrato.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación evita un proceso judicial de restitución del inmueble?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Cuando ambas partes llegan a un acuerdo voluntario, la conciliación puede evitar un proceso judicial, permitiendo resolver el conflicto de manera más rápida y con menores costos.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación aplica para locales comerciales y oficinas?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. La conciliación puede utilizarse tanto para inmuebles destinados a vivienda como para locales comerciales, oficinas, consultorios, bodegas y otros bienes entregados en arrendamiento.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué documentos es recomendable llevar a la audiencia de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Generalmente es conveniente presentar el contrato de arrendamiento, documentos de identidad, comprobantes de pago, inventarios, fotografías del inmueble y cualquier documento relacionado con el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si una de las partes incumple el acuerdo de conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "El incumplimiento puede generar consecuencias jurídicas, ya que el acta de conciliación contiene obligaciones claras para las partes y sirve como respaldo del acuerdo alcanzado.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio contratar un abogado para una conciliación de entrega de inmueble?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "No siempre es obligatorio. Sin embargo, recibir orientación jurídica puede facilitar la elaboración de acuerdos claros y completos, reduciendo el riesgo de futuros conflictos.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación puede realizarse de manera virtual?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Dependiendo del centro de conciliación y del caso concreto, existen procedimientos que permiten realizar audiencias utilizando medios tecnológicos autorizados.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ventajas ofrece la conciliación frente a un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "La conciliación suele permitir soluciones más rápidas, menores costos, acuerdos personalizados, mayor flexibilidad y una mejor relación entre las partes, evitando en muchos casos un proceso judicial prolongado.",
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

      <EntregaInmuebleContent />
    </>
  );
}
