import type { Metadata } from "next";
import ConflictosComercialesContent from "./ConflictosComercialesContent";

export const metadata: Metadata = {
  title:
    "Conflictos comerciales en Colombia: cómo resolverlos con conciliación | Guía 2026",

  description:
    "Descubre cómo resolver conflictos comerciales entre empresas, socios, proveedores y clientes mediante conciliación en Colombia. Conoce sus ventajas, requisitos, procedimiento y validez jurídica antes de acudir a un proceso judicial.",

  keywords: [
    "conflictos comerciales Colombia",
    "conciliación comercial",
    "conciliación empresarial",
    "conflictos entre empresas",
    "conflictos entre socios",
    "incumplimiento de contratos comerciales",
    "incumplimiento comercial",
    "disputas comerciales",
    "conciliación para empresas",
    "conciliación con proveedores",
    "conflictos con clientes",
    "conciliación extrajudicial comercial",
    "centro de conciliación comercial",
    "conciliación Bogotá",
    "MASC comerciales Colombia",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",
  },

  openGraph: {
    title: "Conflictos comerciales en Colombia: solución mediante conciliación",

    description:
      "Aprende cómo resolver conflictos comerciales entre empresas, clientes, proveedores y socios mediante conciliación con plena validez jurídica.",

    url: "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",

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
      "Conflictos comerciales en Colombia: cómo resolverlos mediante conciliación",

    alternativeHeadline:
      "Guía para solucionar conflictos comerciales entre empresas, socios, proveedores y clientes",

    description:
      "Guía completa sobre la conciliación comercial en Colombia, incluyendo los conflictos empresariales más frecuentes, ventajas, procedimiento, requisitos, validez jurídica y tipos de acuerdos que pueden lograrse.",

    keywords: [
      "conflictos comerciales",
      "conciliación comercial",
      "conciliación empresarial",
      "empresas",
      "contratos comerciales",
      "socios",
      "proveedores",
      "clientes",
      "Colombia",
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
      "https://solcentrodeconciliacion.com/blog/conflictos-comerciales",
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",

        name: "¿Qué es un conflicto comercial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es una controversia que surge entre empresas, comerciantes, clientes, proveedores o socios debido al incumplimiento de contratos, obligaciones económicas, pagos, prestación de servicios u otras relaciones comerciales.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué conflictos comerciales pueden resolverse mediante conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Es posible conciliar controversias relacionadas con incumplimientos contractuales, cobro de facturas, conflictos entre socios, reclamaciones por prestación de servicios, entrega de productos, obligaciones económicas y otros asuntos comerciales susceptibles de acuerdo.",
        },
      },

      {
        "@type": "Question",

        name: "¿La conciliación comercial tiene validez legal en Colombia?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Cuando las partes alcanzan un acuerdo, este queda consignado en un acta de conciliación que produce efectos jurídicos conforme a la legislación colombiana.",
        },
      },

      {
        "@type": "Question",

        name: "¿Es obligatorio intentar una conciliación antes de demandar?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Depende del tipo de conflicto y de las normas aplicables al caso. En algunos asuntos la conciliación constituye un requisito previo para acudir a la vía judicial.",
        },
      },

      {
        "@type": "Question",

        name: "¿Quiénes pueden participar en una conciliación comercial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Pueden participar empresas, comerciantes, representantes legales, socios, clientes, proveedores o cualquier persona natural o jurídica involucrada en el conflicto.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ventajas ofrece la conciliación frente a un proceso judicial?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Permite resolver controversias con mayor rapidez, menores costos, mayor flexibilidad, confidencialidad y la posibilidad de preservar las relaciones comerciales.",
        },
      },

      {
        "@type": "Question",

        name: "¿Qué ocurre si no se alcanza un acuerdo durante la conciliación?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Si las partes no logran un acuerdo, conservan la posibilidad de acudir posteriormente a los mecanismos judiciales previstos por la ley.",
        },
      },

      {
        "@type": "Question",

        name: "¿Puede conciliarse una deuda comercial o una factura pendiente?",

        acceptedAnswer: {
          "@type": "Answer",

          text: "Sí. Es frecuente utilizar la conciliación para negociar el pago de facturas, establecer acuerdos de pago, reconocer obligaciones o resolver controversias derivadas de relaciones comerciales.",
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

      <ConflictosComercialesContent />
    </>
  );
}
