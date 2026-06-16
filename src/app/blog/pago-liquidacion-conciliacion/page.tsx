import type { Metadata } from "next";
import PagoLiquidacionConciliacionContent from "./PagoLiquidacionConciliacionContent";

export const metadata: Metadata = {
  title:
    "Pago de liquidación mediante conciliación en Colombia | Guía completa",
  description:
    "Conoce cómo resolver diferencias relacionadas con la liquidación laboral mediante conciliación en Colombia y evitar procesos judiciales.",
  keywords: [
    "pago de liquidación laboral",
    "conciliación laboral Colombia",
    "liquidación laboral conciliación",
    "acuerdo de liquidación laboral",
    "reclamación de liquidación",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",
  },
  openGraph: {
    title: "Pago de liquidación mediante conciliación en Colombia",
    description:
      "Aprende cómo solucionar diferencias sobre liquidaciones laborales mediante conciliación.",
    url: "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Pago de liquidación mediante conciliación en Colombia",
    description:
      "Guía sobre conciliación laboral para resolver controversias relacionadas con liquidaciones laborales.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/pago-liquidacion-conciliacion",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar una liquidación laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Las diferencias relacionadas con salarios, prestaciones sociales y liquidaciones pueden resolverse mediante conciliación laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita una demanda laboral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite alcanzar acuerdos voluntarios antes de acudir a la jurisdicción laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos se necesitan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se recomienda presentar contrato laboral, desprendibles de pago, liquidación calculada y demás soportes relacionados.",
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

      <PagoLiquidacionConciliacionContent />
    </>
  );
}
