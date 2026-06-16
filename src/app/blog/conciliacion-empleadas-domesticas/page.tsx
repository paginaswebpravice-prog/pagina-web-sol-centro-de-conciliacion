import type { Metadata } from "next";
import ConciliacionEmpleadasDomesticasContent from "./ConciliacionEmpleadasDomesticasContent";

export const metadata: Metadata = {
  title:
    "Conciliación con empleadas domésticas en Colombia | Solución de conflictos laborales",
  description:
    "Conoce cómo funciona la conciliación con empleadas domésticas en Colombia. Resuelve conflictos sobre salarios, liquidaciones, prestaciones sociales y terminación de contratos laborales.",
  keywords: [
    "conciliación empleadas domésticas",
    "empleada doméstica Colombia",
    "conflictos laborales empleada doméstica",
    "liquidación empleada doméstica",
    "conciliación laboral Colombia",
    "prestaciones sociales empleada doméstica",
    "trabajo doméstico Colombia",
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
    title: "Conciliación con empleadas domésticas en Colombia",
    description:
      "Aprende cómo resolver conflictos laborales con empleadas domésticas mediante conciliación en Colombia.",
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
    headline: "Conciliación con empleadas domésticas en Colombia",
    description:
      "Guía sobre conciliación laboral para resolver conflictos entre empleadores y empleadas domésticas en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/conciliacion-empleadas-domesticas",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar con una empleada doméstica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Es posible llegar a acuerdos relacionados con salarios, liquidaciones, prestaciones sociales, indemnizaciones y otros derechos laborales mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos alcanzados en conciliación tienen efectos jurídicos y son obligatorios para las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden resolverse controversias sobre salarios, prestaciones sociales, liquidaciones, vacaciones, terminación del contrato e indemnizaciones.",
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
