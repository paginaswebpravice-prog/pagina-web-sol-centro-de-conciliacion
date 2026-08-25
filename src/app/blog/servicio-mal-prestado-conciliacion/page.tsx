import type { Metadata } from "next";
import ServicioMalPrestadoConciliacionContent from "./ServicioMalPrestadoConciliacionContent";

export const metadata: Metadata = {
  title:
    "¿Te prestaron un mal servicio? Así puedes reclamar y buscar una solución mediante conciliación",
  description:
    "¿Recibiste un servicio mal prestado, incompleto o diferente a lo acordado? Conoce cómo reclamar, qué puedes solicitar y cuándo la conciliación puede ayudarte a resolver el conflicto en Colombia.",
  keywords: [
    "servicio mal prestado conciliación",
    "conciliación por mal servicio",
    "reclamar servicio mal prestado",
    "incumplimiento en prestación de servicios",
    "servicio incompleto conciliación",
    "servicio diferente a lo acordado",
    "problemas con prestación de servicios",
    "conciliación entre particulares",
    "devolución de dinero por mal servicio",
    "reparación por servicio mal prestado",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/servicio-mal-prestado-conciliacion",
  },
  openGraph: {
    title:
      "¿Te prestaron un mal servicio? Así puedes reclamar y buscar una solución",
    description:
      "Conoce qué hacer cuando un servicio fue mal prestado, incompleto o incumple lo acordado y cómo la conciliación puede ayudarte a buscar un acuerdo.",
    url: "https://solcentrodeconciliacion.com/blog/servicio-mal-prestado-conciliacion",
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
      "¿Te prestaron un mal servicio? Así puedes reclamar y buscar una solución mediante conciliación",
    description:
      "Guía sobre qué hacer ante un servicio mal prestado, incompleto o diferente a lo acordado y cómo buscar una solución mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/servicio-mal-prestado-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué puedo hacer si me prestaron un mal servicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes intentar resolver directamente el problema con la persona o empresa responsable y, dependiendo de las circunstancias del caso, acudir a un mecanismo como la conciliación para buscar un acuerdo sobre la devolución de dinero, la corrección del servicio, una compensación u otra solución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede conciliar un conflicto por un servicio mal prestado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo de la naturaleza del conflicto y de que el asunto sea susceptible de conciliación, las partes pueden acudir a un centro de conciliación para intentar construir un acuerdo sin iniciar directamente un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo pedir la devolución del dinero por un servicio mal prestado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La devolución total o parcial del dinero puede ser uno de los puntos que las partes discutan y acuerden, según las condiciones del servicio, lo ocurrido y las circunstancias particulares del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pruebas sirven para demostrar que un servicio fue mal prestado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden ser útiles documentos, cotizaciones, contratos, comprobantes de pago, conversaciones, fotografías, videos y otros elementos que permitan demostrar qué se acordó y cuál fue el resultado del servicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo en la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible llegar a un acuerdo, dependiendo del tipo de conflicto y de las circunstancias del caso, las partes podrán evaluar las alternativas legales o judiciales que correspondan.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario tener un contrato escrito para intentar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre existe un contrato formal por escrito. Otros documentos, mensajes, cotizaciones, comprobantes y comunicaciones pueden ayudar a establecer qué servicio fue acordado y cuáles eran las obligaciones de cada parte.",
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

      <ServicioMalPrestadoConciliacionContent />
    </>
  );
}
