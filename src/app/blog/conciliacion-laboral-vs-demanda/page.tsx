import type { Metadata } from "next";
import ConciliacionLaboralVsDemandaContent from "./ConciliacionLaboralVsDemandaContent";

export const metadata: Metadata = {
  title:
    "Conciliación laboral vs demanda laboral en Colombia | Diferencias y ventajas",
  description:
    "Conoce las diferencias entre la conciliación laboral y la demanda laboral en Colombia. Descubre cuál alternativa puede ayudarte a resolver conflictos laborales de manera más rápida y eficiente.",
  keywords: [
    "conciliación laboral vs demanda laboral",
    "conciliación laboral Colombia",
    "demanda laboral Colombia",
    "acuerdo laboral",
    "conflictos laborales",
    "centro de conciliación laboral",
    "conciliación extrajudicial laboral",
    "derecho laboral Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",
  },
  openGraph: {
    title: "Conciliación laboral vs demanda laboral en Colombia",
    description:
      "Aprende cuándo conviene acudir a una conciliación laboral y cuándo es necesario iniciar una demanda laboral en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Conciliación laboral vs demanda laboral en Colombia",
    description:
      "Diferencias entre la conciliación laboral y la demanda laboral, ventajas, tiempos, costos y situaciones en las que cada alternativa puede ser más adecuada.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-laboral-vs-demanda",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es más rápido, una conciliación laboral o una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación laboral suele resolverse en semanas, mientras que una demanda laboral puede tardar varios meses o incluso años.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación laboral tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos alcanzados en conciliación tienen efectos legales y son obligatorios para las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuándo debo presentar una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando no sea posible llegar a un acuerdo mediante conciliación o cuando exista incumplimiento de los derechos reclamados.",
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

      <ConciliacionLaboralVsDemandaContent />
    </>
  );
}
