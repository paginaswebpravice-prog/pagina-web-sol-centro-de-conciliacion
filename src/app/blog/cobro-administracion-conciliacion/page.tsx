import type { Metadata } from "next";
import CobroAdministracionContent from "./CobroAdministracionContent";

export const metadata: Metadata = {
  title:
    "Cobro de administración mediante conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo recuperar cuotas de administración en propiedad horizontal en Colombia mediante conciliación de forma rápida, legal y efectiva.",
  keywords: [
    "cobro administración Colombia",
    "cuotas administración conjunto residencial",
    "conciliación propiedad horizontal",
    "deudas administración Colombia",
    "recuperación cartera conjuntos residenciales",
    "expensas comunes Colombia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",
  },
  openGraph: {
    title: "Cobro de administración mediante conciliación en Colombia",
    description:
      "Recupera cuotas de administración en conjuntos residenciales mediante conciliación en Colombia de forma legal y rápida.",
    url: "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Cobro de administración mediante conciliación en Colombia",
    description:
      "Guía sobre el cobro de cuotas de administración en propiedad horizontal mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/cobro-administracion-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué pasa si no pago la administración?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede generarse una deuda que puede ser cobrada por vía jurídica o conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede cobrar administración por conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, es una forma efectiva de recuperar cuotas pendientes en propiedad horizontal.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación obliga al pago?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene fuerza legal en Colombia.",
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

      <CobroAdministracionContent />
    </>
  );
}
