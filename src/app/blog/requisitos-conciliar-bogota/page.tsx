import type { Metadata } from "next";
import RequisitosConciliarBogotaContent from "./RequisitosConciliarBogotaContent";

export const metadata: Metadata = {
  title:
    "Requisitos para Conciliar en Bogotá (2026): Documentos, Pasos y Cómo Iniciar el Trámite",
  description:
    "Conoce los requisitos para conciliar en Bogotá y Colombia, qué documentos necesitas, quién puede solicitar una conciliación, cuánto tarda el proceso y cómo iniciar el trámite con validez legal.",
  keywords: [
    "requisitos para conciliar en Bogotá",
    "cómo iniciar una conciliación",
    "documentos para conciliación",
    "conciliación extrajudicial Colombia",
    "centro de conciliación Bogotá",
    "cómo solicitar una conciliación",
    "requisitos conciliación Colombia",
    "MASC Colombia",
    "proceso de conciliación",
    "audiencia de conciliación",
    "conciliación civil",
    "conciliación familiar",
    "conciliación comercial",
    "conciliación laboral",
    "qué se necesita para conciliar",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
  },
  openGraph: {
    title:
      "Requisitos para Conciliar en Bogotá: Documentos, Pasos y Guía Completa",
    description:
      "Descubre quién puede solicitar una conciliación, qué documentos debes presentar, cómo funciona el proceso y cuáles son los requisitos para conciliar en Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
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
      "Requisitos para Conciliar en Bogotá: Documentos, Pasos y Guía Completa",
    description:
      "Conoce cuáles son los requisitos para iniciar una conciliación en Bogotá, los documentos necesarios, quién puede solicitarla y cómo funciona el procedimiento en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/requisitos-conciliar-bogota",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué requisitos necesito para iniciar una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere el documento de identidad, información clara del conflicto, datos de la otra parte y los documentos que respalden los hechos expuestos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependerá del caso, pero pueden presentarse contratos, comprobantes de pago, correos electrónicos, mensajes, fotografías, facturas, certificaciones y cualquier otro documento relacionado con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio contratar un abogado para conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. En muchos casos las personas pueden asistir directamente. Sin embargo, cuando el asunto es complejo, la asesoría jurídica puede resultar conveniente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier persona natural o jurídica que tenga un conflicto susceptible de conciliación puede presentar una solicitud ante un centro de conciliación autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo depende de la complejidad del caso y de la disponibilidad de las partes. En muchos asuntos el conflicto puede resolverse en una sola audiencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo solicitar una conciliación de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación ofrecen audiencias virtuales, permitiendo la participación de personas que se encuentran en diferentes ciudades o incluso fuera del país.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si no se llega a un acuerdo durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no existe acuerdo, las partes conservan el derecho de acudir a los mecanismos legales correspondientes para resolver el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando las partes llegan a un acuerdo, este queda consignado en un acta de conciliación que produce efectos jurídicos y puede exigirse conforme a la legislación colombiana.",
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

      <RequisitosConciliarBogotaContent />
    </>
  );
}
