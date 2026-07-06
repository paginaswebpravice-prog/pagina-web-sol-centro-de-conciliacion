import type { Metadata } from "next";
import CentrosConciliacionContent from "./CentrosConciliacionContent";

export const metadata: Metadata = {
  title: "Centros de conciliación autorizados en Colombia: guía completa 2026",
  description:
    "Conoce qué son los centros de conciliación autorizados en Colombia, quién los regula, cómo verificar si un centro es legal, qué servicios ofrecen y cuándo acudir a uno para resolver un conflicto.",
  keywords: [
    "centros de conciliación Colombia",
    "centros de conciliación autorizados",
    "centro de conciliación Bogotá",
    "centros de conciliación Medellín",
    "Ministerio de Justicia conciliación",
    "conciliador autorizado",
    "cómo saber si un centro de conciliación es legal",
    "conciliación extrajudicial",
    "acta de conciliación",
    "centro de conciliación privado",
    "centro de conciliación público",
    "servicios de conciliación Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
  },
  openGraph: {
    title: "Centros de conciliación autorizados en Colombia",
    description:
      "Quiénes pueden prestar servicios de conciliación legalmente en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Centros de conciliación autorizados en Colombia",
    description:
      "Explicación de los centros autorizados para prestar servicios de conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/centros-conciliacion-autorizados",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un centro de conciliación autorizado en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una entidad pública o privada autorizada por el Ministerio de Justicia y del Derecho para prestar servicios de conciliación y otros mecanismos alternativos de solución de conflictos. Los acuerdos logrados en estos centros producen efectos jurídicos cuando cumplen los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién autoriza los centros de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La autorización corresponde al Ministerio de Justicia y del Derecho, entidad encargada de verificar el cumplimiento de los requisitos legales para que un centro pueda prestar servicios de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo saber si un centro de conciliación está autorizado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable verificar que el centro cuente con autorización vigente del Ministerio de Justicia y del Derecho y que sus conciliadores estén habilitados para ejercer sus funciones conforme a la normativa colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué servicios prestan los centros de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los centros de conciliación atienden conflictos civiles, comerciales, familiares, de arrendamiento, societarios y, en algunos casos, laborales, facilitando acuerdos entre las partes mediante audiencias de conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden resolverse conflictos relacionados con deudas, contratos, incumplimientos, arrendamientos, alimentos, responsabilidad civil, conflictos comerciales y otras materias conciliables previstas en la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos logrados en un centro de conciliación tienen validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación suscrita en un centro autorizado presta mérito ejecutivo y hace tránsito a cosa juzgada, siempre que cumpla con los requisitos establecidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los centros de conciliación pueden ser públicos o privados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia existen centros de conciliación públicos y privados, incluidos aquellos pertenecientes a cámaras de comercio, universidades, consultorios jurídicos y otras instituciones autorizadas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a un centro de conciliación antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de conflicto. En algunos asuntos la conciliación constituye un requisito de procedibilidad antes de presentar una demanda, mientras que en otros casos es voluntaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta un trámite en un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del centro de conciliación, la naturaleza del conflicto y las tarifas aplicables. Algunos consultorios jurídicos y entidades públicas ofrecen determinados servicios de conciliación de manera gratuita o con costos reducidos.",
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
        name: "¿Qué documentos debo llevar a un centro de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se recomienda presentar el documento de identidad y todos los soportes relacionados con el conflicto, como contratos, facturas, comprobantes de pago, correos electrónicos, chats, fotografías u otras pruebas relevantes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se llega a un acuerdo durante la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si no se alcanza un acuerdo, el conciliador podrá expedir la constancia correspondiente. Dependiendo del caso, este documento puede permitir continuar con las acciones judiciales previstas por la legislación colombiana.",
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

      <CentrosConciliacionContent />
    </>
  );
}
