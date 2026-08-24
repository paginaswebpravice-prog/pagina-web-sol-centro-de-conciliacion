import type { Metadata } from "next";
import DisputasEconomicasEntreParticularesContent from "./DisputasEconomicasEntreParticularesContent";

export const metadata: Metadata = {
  title:
    "Disputas económicas entre particulares en Colombia: cómo resolver deudas y conflictos por dinero",
  description:
    "¿Tienes un conflicto económico con otra persona? Conoce cómo resolver deudas, pagos pendientes y disputas por dinero entre particulares mediante conciliación en Colombia.",
  keywords: [
    "disputas económicas entre particulares",
    "conflictos económicos entre personas",
    "deudas entre particulares Colombia",
    "problemas por dinero entre particulares",
    "conciliación por deudas",
    "me deben dinero y no pagan",
    "acuerdo de pago entre particulares",
    "conciliación obligación económica",
    "reclamar dinero a una persona",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/disputas-economicas-entre-particulares",
  },
  openGraph: {
    title:
      "Disputas económicas entre particulares en Colombia: cómo resolver conflictos por dinero",
    description:
      "Conoce alternativas para resolver deudas, pagos pendientes y conflictos económicos entre particulares mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/disputas-economicas-entre-particulares",
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
      "Disputas económicas entre particulares en Colombia: cómo resolver deudas y conflictos por dinero",
    description:
      "Guía sobre conflictos económicos entre particulares, deudas, pagos pendientes y las alternativas de conciliación para intentar resolver estas controversias en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/disputas-economicas-entre-particulares",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar una deuda entre particulares en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de las características del caso y de que se trate de derechos disponibles, las partes pueden acudir a un centro de conciliación para intentar llegar a un acuerdo sobre el pago de una obligación económica.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si una persona me debe dinero y no paga?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable revisar los documentos y pruebas relacionados con la obligación e intentar establecer una solución. Dependiendo del caso, puede ser posible acudir a conciliación para buscar un acuerdo de pago u otra alternativa.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar una deuda si no existe un contrato escrito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La ausencia de un contrato escrito no significa automáticamente que no exista una obligación. Las circunstancias y los documentos disponibles deben analizarse según cada caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se puede acordar en una conciliación por una deuda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden explorar acuerdos relacionados con el valor de la obligación, plazos, cuotas, fechas de pago u otras condiciones que permitan resolver la controversia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no se alcanza un acuerdo, las partes pueden evaluar las alternativas legales disponibles según las características particulares de la obligación y del conflicto.",
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

      <DisputasEconomicasEntreParticularesContent />
    </>
  );
}
