import type { Metadata } from "next";
import ConciliacionEmpleadasDomesticasContent from "./ConciliacionEmpleadasDomesticasContent";

export const metadata: Metadata = {
  title:
    "Conciliación con Empleadas Domésticas en Colombia | Liquidación, Prestaciones y Conflictos Laborales",

  description:
    "Aprende cómo resolver conflictos con empleadas domésticas mediante conciliación en Colombia. Conoce cómo solucionar diferencias sobre salarios, liquidaciones, prestaciones sociales, vacaciones, indemnizaciones, terminación del contrato y otros asuntos laborales sin acudir inmediatamente a un proceso judicial.",

  keywords: [
    "conciliación empleadas domésticas",
    "conciliación laboral empleada doméstica",
    "empleada doméstica Colombia",
    "liquidación empleada doméstica",
    "prestaciones sociales empleada doméstica",
    "vacaciones empleada doméstica",
    "indemnización empleada doméstica",
    "salarios empleada doméstica",
    "trabajo doméstico Colombia",
    "conflictos laborales empleada doméstica",
    "derechos empleada doméstica",
    "conciliación laboral Colombia",
    "centro de conciliación Bogotá",
    "conciliación Bogotá",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-empleadas-domesticas",
  },

  openGraph: {
    title: "Conciliación con Empleadas Domésticas en Colombia | Guía Completa",

    description:
      "Descubre cómo resolver conflictos laborales relacionados con empleadas domésticas mediante conciliación. Información sobre liquidaciones, salarios, prestaciones sociales, vacaciones, indemnizaciones y acuerdos laborales con validez jurídica.",

    url: "https://solcentrodeconciliacion.com/blog/conciliacion-empleadas-domesticas",

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
      "Conciliación con Empleadas Domésticas en Colombia: Guía sobre Liquidaciones, Prestaciones Sociales y Conflictos Laborales",

    alternativeHeadline:
      "Cómo resolver conflictos laborales con empleadas domésticas mediante conciliación",

    description:
      "Guía completa sobre conciliación con empleadas domésticas en Colombia. Aprende cómo resolver conflictos relacionados con salarios, liquidaciones laborales, prestaciones sociales, vacaciones, indemnizaciones, terminación del contrato y demás derechos laborales mediante acuerdos con validez jurídica.",

    keywords: [
      "conciliación empleadas domésticas",
      "conciliación laboral",
      "liquidación empleada doméstica",
      "prestaciones sociales",
      "salarios",
      "vacaciones",
      "derechos laborales",
      "trabajo doméstico",
      "conflictos laborales",
    ],

    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },

    inLanguage: "es-CO",

    about: [
      {
        "@type": "Thing",
        name: "Conciliación laboral",
      },
      {
        "@type": "Thing",
        name: "Trabajo doméstico",
      },
      {
        "@type": "Thing",
        name: "Liquidación laboral",
      },
      {
        "@type": "Thing",
        name: "Prestaciones sociales",
      },
    ],

    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-empleadas-domesticas",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar con una empleada doméstica en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite resolver conflictos relacionados con salarios, liquidaciones, prestaciones sociales, vacaciones, indemnizaciones, terminación del contrato y demás obligaciones laborales mediante acuerdos con efectos jurídicos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos laborales pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden resolverse controversias relacionadas con salarios pendientes, prestaciones sociales, vacaciones, cesantías, intereses sobre cesantías, primas, liquidaciones laborales, indemnizaciones, terminación del contrato y acuerdos de pago.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo alcanzado durante la conciliación queda consignado en un acta con efectos jurídicos que puede exigirse legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para asistir a una conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del caso. Muchas conciliaciones pueden adelantarse sin abogado, aunque recibir orientación jurídica puede ayudar a comprender mejor los derechos y obligaciones de cada parte.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden conciliar las prestaciones sociales de una empleada doméstica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es posible llegar a acuerdos relacionados con cesantías, intereses sobre cesantías, primas de servicios, vacaciones y demás prestaciones sociales reconocidas por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si una de las partes incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando una de las partes incumple lo pactado en el acta de conciliación, el acuerdo puede hacerse valer mediante los mecanismos legales previstos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos pueden ser útiles durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso pueden presentarse contratos de trabajo, comprobantes de pago, liquidaciones, soportes de prestaciones sociales, registros de vacaciones, comunicaciones entre las partes y cualquier documento relacionado con la relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas ofrece la conciliación frente a una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele permitir soluciones más rápidas, menores costos, acuerdos personalizados y la posibilidad de evitar procesos judiciales largos cuando ambas partes logran un entendimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para acordar el pago de una liquidación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las partes pueden acordar el valor de la liquidación, la forma de pago, los plazos y otros compromisos relacionados con la terminación de la relación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si durante la conciliación no se logra un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar un acuerdo, las partes conservan la posibilidad de acudir posteriormente a las acciones judiciales correspondientes para resolver el conflicto.",
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

      <ConciliacionEmpleadasDomesticasContent />
    </>
  );
}
