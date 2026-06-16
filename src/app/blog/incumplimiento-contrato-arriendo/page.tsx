import type { Metadata } from "next";
import IncumplimientoArriendoContent from "./IncumplimientoArriendoContent";

export const metadata: Metadata = {
  title:
    "Conciliación por incumplimiento de contrato de arriendo en Colombia | Guía completa",
  description:
    "Aprende cómo resolver conflictos por incumplimiento de contrato de arriendo en Colombia mediante conciliación, sin necesidad de un proceso judicial.",
  keywords: [
    "incumplimiento contrato de arriendo Colombia",
    "conciliación arriendo Bogotá",
    "problemas arrendamiento Colombia",
    "desalojo conciliación Colombia",
    "conflictos arrendamiento",
    "terminación contrato de arriendo",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",
  },
  openGraph: {
    title:
      "Conciliación por incumplimiento de contrato de arriendo en Colombia",
    description:
      "Soluciona conflictos de arrendamiento mediante conciliación en Colombia de forma rápida y legal.",
    url: "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",
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
      "Conciliación por incumplimiento de contrato de arriendo en Colombia",
    description:
      "Guía sobre cómo resolver conflictos de arrendamiento mediante conciliación en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/incumplimiento-contrato-arriendo",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede conciliar un problema de arriendo en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, los conflictos entre arrendador y arrendatario pueden resolverse mediante conciliación antes de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el arrendatario incumple el contrato?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede solicitar conciliación para llegar a acuerdos sobre pago de cánones, entrega del inmueble o terminación del contrato.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un desalojo judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, si las partes llegan a un acuerdo voluntario sobre la entrega del inmueble.",
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

      <IncumplimientoArriendoContent />
    </>
  );
}
