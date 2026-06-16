import type { Metadata } from "next";
import DanosInmuebleContent from "./DanosInmuebleContent";

export const metadata: Metadata = {
  title:
    "Daños en inmueble arrendado en Colombia | Responsabilidades y conciliación",
  description:
    "Conoce quién responde por los daños en un inmueble arrendado en Colombia y cómo resolver conflictos mediante conciliación de forma legal.",
  keywords: [
    "daños inmueble arrendado Colombia",
    "responsabilidad arrendamiento Colombia",
    "conciliación daños inmueble",
    "arreglo daños arriendo",
    "incumplimiento contrato arrendamiento",
    "reparaciones inmueble arrendado",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",
  },
  openGraph: {
    title: "Daños en inmueble arrendado en Colombia",
    description:
      "Responsabilidades y solución de conflictos por daños en inmuebles arrendados mediante conciliación en Colombia.",
    url: "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Daños en inmueble arrendado en Colombia",
    description:
      "Guía sobre responsabilidades y solución de conflictos por daños en inmuebles arrendados en Colombia.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/danos-inmueble-arrendado",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Quién responde por los daños en un inmueble arrendado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente el arrendatario responde por daños causados por mal uso del inmueble.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si hay desacuerdo por los daños?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se puede acudir a conciliación para determinar responsabilidades y acuerdos de pago.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es válida legalmente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, el acta de conciliación tiene plena validez jurídica en Colombia.",
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

      <DanosInmuebleContent />
    </>
  );
}
