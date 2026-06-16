import type { Metadata } from "next";
import RestitucionDineroContent from "./RestitucionDineroContent";

export const metadata: Metadata = {
  title: "Restitución de dinero por incumplimiento en Colombia | Conciliación",
  description:
    "Conoce cómo recuperar dinero mediante conciliación cuando existe incumplimiento de contratos, acuerdos o pagos en Colombia.",
  keywords: [
    "restitución de dinero",
    "incumplimiento de contrato",
    "conciliación Colombia",
    "recuperar dinero sin demanda",
    "cobro de dinero conciliación",
    "restitución económica",
    "conciliación Bogotá",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/restitucion-dinero",
  },
  openGraph: {
    title: "Restitución de dinero por incumplimiento en Colombia",
    description:
      "Aprende cómo recuperar dinero mediante conciliación y evitar procesos judiciales largos y costosos.",
    url: "https://solcentrodeconciliacion.com/blog/restitucion-dinero",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Restitución de dinero por incumplimiento en Colombia",
    description:
      "Guía completa para recuperar dinero mediante conciliación por incumplimiento de obligaciones económicas.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/restitucion-dinero",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo recuperar dinero mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite llegar a acuerdos de pago y restitución económica sin necesidad de acudir inmediatamente a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si la otra persona incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acta de conciliación presta mérito ejecutivo y puede exigirse judicialmente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos necesito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contratos, comprobantes de pago, facturas, transferencias y cualquier prueba que demuestre la obligación económica.",
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

      <RestitucionDineroContent />
    </>
  );
}
