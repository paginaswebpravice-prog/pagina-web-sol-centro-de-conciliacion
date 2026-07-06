import type { Metadata } from "next";
import CentrosConciliacionColombiaContent from "./CentrosConciliacionColombiaContent";

export const metadata: Metadata = {
  title:
    "Centros de conciliación autorizados en Colombia: guía completa para personas y empresas",
  description:
    "Descubre qué son los centros de conciliación autorizados en Colombia, quién los autoriza, cómo funcionan, qué conflictos pueden resolver, cuánto cuesta una conciliación, cómo elegir un centro autorizado y qué validez tienen las actas de conciliación.",
  keywords: [
    "centros de conciliación Colombia",
    "centros de conciliación autorizados",
    "centro de conciliación",
    "centro de conciliación autorizado",
    "conciliación extrajudicial Colombia",
    "cómo funciona un centro de conciliación",
    "Ministerio de Justicia conciliación",
    "conciliadores autorizados",
    "conciliación Bogotá",
    "centros de conciliación Bogotá",
    "consultorios jurídicos conciliación",
    "notarías conciliación",
    "cámaras de comercio conciliación",
    "conciliación civil",
    "conciliación familiar",
    "conciliación comercial",
    "MASC Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",
  },
  openGraph: {
    title:
      "Centros de conciliación autorizados en Colombia: guía completa 2026",
    description:
      "Conoce cómo funcionan los centros de conciliación autorizados en Colombia, quiénes pueden prestar este servicio, qué asuntos pueden conciliar y cómo iniciar el trámite.",
    url: "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",
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
      "Centros de conciliación autorizados en Colombia: qué son, cómo funcionan y cómo elegir uno",
    description:
      "Guía completa sobre los centros de conciliación autorizados en Colombia. Aprende quién los autoriza, qué servicios ofrecen, qué conflictos pueden resolver, cómo solicitar una conciliación y qué efectos legales tiene un acta de conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-colombia",

    articleSection: "Conciliación en Colombia",

    inLanguage: "es-CO",

    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },

    about: [
      "Centros de conciliación",
      "Conciliación extrajudicial",
      "Mecanismos alternativos de solución de conflictos",
      "Ministerio de Justicia",
      "Acta de conciliación",
    ],

    mentions: [
      "Bogotá",
      "Cámaras de Comercio",
      "Consultorios Jurídicos",
      "Notarías",
      "Conciliadores",
      "Ley 2220 de 2022",
      "Ley 640 de 2001",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un centro de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una entidad pública o privada autorizada para administrar procesos de conciliación extrajudicial y facilitar la solución de conflictos entre las partes sin necesidad de acudir inmediatamente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién autoriza los centros de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los centros de conciliación son autorizados por el Ministerio de Justicia y del Derecho, entidad encargada de verificar el cumplimiento de los requisitos establecidos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo saber si un centro de conciliación está autorizado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable verificar que el centro cuente con autorización vigente del Ministerio de Justicia y del Derecho y que los conciliadores estén habilitados para ejercer sus funciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse en un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso, pueden resolverse conflictos civiles, comerciales, familiares, de arrendamiento, societarios y otros asuntos conciliables permitidos por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quiénes pueden acudir a un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden acudir personas naturales, empresas, comerciantes, propietarios, arrendatarios, socios y cualquier persona que desee resolver un conflicto mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos logrados en un centro de conciliación tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación suscrita en un centro autorizado tiene efectos jurídicos, presta mérito ejecutivo y hace tránsito a cosa juzgada cuando cumple los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se recomienda presentar el documento de identidad y todos los soportes relacionados con el conflicto, como contratos, facturas, comprobantes de pago, chats, correos electrónicos, fotografías o cualquier otra prueba pertinente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta acudir a un centro de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del centro de conciliación, del tipo de conflicto y de las tarifas aplicables. Algunos consultorios jurídicos y entidades públicas ofrecen determinados servicios de conciliación de forma gratuita o con tarifas reducidas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existen centros de conciliación gratuitos en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Algunos consultorios jurídicos universitarios y entidades públicas ofrecen servicios de conciliación gratuitos o con costos reducidos, dependiendo del caso y de los requisitos establecidos por cada institución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a un centro de conciliación antes de presentar una demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del asunto. En algunos conflictos la conciliación constituye un requisito de procedibilidad antes de acudir a la jurisdicción competente, mientras que en otros casos es voluntaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede realizar una conciliación virtual en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales mediante plataformas tecnológicas, siempre que se garantice la identificación de las partes y el cumplimiento de los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no es posible alcanzar un acuerdo, el conciliador podrá expedir la constancia correspondiente. Dependiendo del caso, este documento puede permitir continuar con las acciones judiciales previstas por la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tarda un trámite de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según la complejidad del conflicto, la disponibilidad de las partes y la programación del centro de conciliación, aunque generalmente es mucho más rápido que un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué acudir a un centro de conciliación autorizado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Acudir a un centro de conciliación autorizado brinda seguridad jurídica, garantiza que el procedimiento se realice conforme a la ley colombiana y permite que los acuerdos alcanzados produzcan los efectos legales correspondientes.",
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

      <CentrosConciliacionColombiaContent />
    </>
  );
}
