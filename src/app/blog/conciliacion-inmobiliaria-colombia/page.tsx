import type { Metadata } from "next";
import ConciliacionInmobiliariaContent from "./ConciliacionInmobiliariaContent";

export const metadata: Metadata = {
  title:
    "Conciliación Inmobiliaria en Colombia: Resuelve Conflictos de Arrendamiento, Compraventa y Propiedad Horizontal",
  description:
    "Aprende cómo funciona la conciliación inmobiliaria en Colombia. Descubre cómo resolver conflictos de arrendamiento, compraventa de inmuebles, propiedad horizontal, incumplimiento de contratos y otros problemas sin acudir a un proceso judicial.",
  keywords: [
    "conciliación inmobiliaria",
    "conciliación inmobiliaria Colombia",
    "conciliación arrendamiento",
    "conciliación contrato de arrendamiento",
    "conciliación propiedad horizontal",
    "conciliación compraventa inmueble",
    "conflictos inmobiliarios",
    "problemas de arrendamiento",
    "problemas con inquilinos",
    "problemas con arrendadores",
    "entrega de inmueble",
    "restitución de inmueble",
    "incumplimiento contrato inmobiliario",
    "centro de conciliación inmobiliaria",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
  },
  openGraph: {
    title:
      "Conciliación Inmobiliaria en Colombia: Guía para Resolver Conflictos sin Demandar",

    description:
      "Conoce cómo solucionar conflictos relacionados con arrendamientos, compraventas, propiedad horizontal e incumplimientos contractuales mediante conciliación inmobiliaria en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
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
      "Conciliación Inmobiliaria en Colombia: Cómo Resolver Conflictos de Arrendamiento y Bienes Inmuebles",
    description:
      "Guía completa sobre conciliación inmobiliaria en Colombia. Aprende cómo solucionar conflictos entre propietarios, arrendadores, arrendatarios, compradores y vendedores de inmuebles mediante acuerdos con validez legal.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-inmobiliaria-colombia",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación inmobiliaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo para resolver conflictos relacionados con bienes inmuebles sin acudir a juicio.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos inmobiliarios se pueden conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Arrendamientos, propiedad horizontal, compraventas y disputas sobre inmuebles.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación inmobiliaria es obligatoria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No es obligatoria, pero es una alternativa legal muy efectiva en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué es la conciliación inmobiliaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un mecanismo de solución de conflictos que permite resolver controversias relacionadas con inmuebles mediante acuerdos entre las partes, evitando en muchos casos un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos inmobiliarios pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden conciliarse conflictos relacionados con contratos de arrendamiento, compraventa de inmuebles, propiedad horizontal, incumplimiento de obligaciones, entrega de bienes, restitución de inmuebles y acuerdos de pago, entre otros casos permitidos por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación sirve para resolver problemas entre arrendador e inquilino?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es frecuente utilizar la conciliación para solucionar desacuerdos relacionados con cánones de arrendamiento, entrega del inmueble, reparaciones, incumplimientos contractuales y otros conflictos derivados del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación inmobiliaria tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y obliga a las partes a cumplir los acuerdos alcanzados conforme a la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si no se logra un acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no llegan a un acuerdo durante la conciliación, podrán acudir a las acciones judiciales que correspondan según el caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda una conciliación inmobiliaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo puede variar según la complejidad del conflicto y la disposición de las partes, aunque muchos asuntos pueden resolverse en una sola audiencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a conciliación antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de conflicto. En algunos casos la conciliación constituye un requisito de procedibilidad antes de iniciar un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Quién puede solicitar una conciliación inmobiliaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Propietarios, arrendadores, arrendatarios, compradores, vendedores, administradores de propiedad horizontal y cualquier persona involucrada en un conflicto conciliable relacionado con un inmueble.",
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

      <ConciliacionInmobiliariaContent />
    </>
  );
}
