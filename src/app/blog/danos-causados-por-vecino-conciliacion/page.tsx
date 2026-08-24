import type { Metadata } from "next";
import DanosCausadosPorVecinoContent from "./DanosCausadosPorVecinoContent";

export const metadata: Metadata = {
  title:
    "¿Un vecino causó daños a tu propiedad? Cómo reclamar y conciliar en Colombia",
  description:
    "¿Un vecino causó daños a tu casa, apartamento o bienes? Conoce qué puedes hacer, cómo reclamar los perjuicios y cuándo acudir a conciliación en Colombia.",
  keywords: [
    "daños causados por vecino",
    "vecino causó daños a mi propiedad",
    "cómo reclamar daños a un vecino",
    "daños entre vecinos Colombia",
    "conciliación daños entre vecinos",
    "vecino dañó mi apartamento",
    "reclamar perjuicios a un vecino",
    "problemas entre vecinos Colombia",
    "daños propiedad horizontal conciliación",
    "conciliación por daños y perjuicios",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/danos-causados-por-vecino-conciliacion",
  },
  openGraph: {
    title:
      "¿Un vecino causó daños a tu propiedad? Cómo reclamar y conciliar en Colombia",
    description:
      "Conoce qué hacer si un vecino ocasionó daños a tu vivienda, apartamento o bienes y cómo buscar una solución mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/danos-causados-por-vecino-conciliacion",
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
      "¿Un vecino causó daños a tu propiedad? Cómo reclamar y conciliar en Colombia",
    description:
      "Guía para conocer qué hacer cuando un vecino causa daños a una vivienda, apartamento o bienes, cómo reclamar los perjuicios y cuándo acudir a conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/danos-causados-por-vecino-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si un vecino causa daños a mi propiedad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo recomendable es documentar los daños, identificar cómo ocurrieron, reunir las pruebas disponibles e intentar inicialmente una solución directa. Si no es posible llegar a un acuerdo, dependiendo de las circunstancias del caso puede evaluarse la conciliación como una alternativa para buscar una solución sobre la reparación o compensación de los perjuicios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un conflicto por daños causados por un vecino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de la naturaleza del conflicto y de los derechos involucrados, las partes pueden acudir a conciliación para intentar llegar a acuerdos sobre la reparación de daños, el pago de perjuicios u otras obligaciones relacionadas con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pruebas sirven para reclamar daños causados por un vecino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden ser útiles fotografías, videos, comunicaciones, testimonios, facturas, cotizaciones, informes técnicos, documentos relacionados con reparaciones y otros elementos que permitan demostrar la existencia del daño y las circunstancias en las que ocurrió.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el vecino no quiere pagar los daños?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar una solución directa, puede evaluarse la conciliación u otras vías legales según las circunstancias concretas del caso, el tipo de daño y las pruebas disponibles.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se puede acordar en una conciliación por daños entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las partes pueden buscar acuerdos relacionados con la reparación del daño, el pago de una suma de dinero, la forma y los plazos de cumplimiento, la realización de obras necesarias u otros compromisos que permitan resolver el conflicto, siempre que el asunto sea susceptible de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los daños por filtraciones también pueden generar un conflicto entre vecinos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las filtraciones, humedades, daños por tuberías, afectaciones provenientes de otro inmueble y situaciones similares pueden generar conflictos entre propietarios o residentes. Es importante determinar el origen del problema y las responsabilidades que correspondan en cada caso.",
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

      <DanosCausadosPorVecinoContent />
    </>
  );
}
