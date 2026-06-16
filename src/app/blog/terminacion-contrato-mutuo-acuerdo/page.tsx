import type { Metadata } from "next";
import TerminacionContratoMutuoAcuerdoContent from "./TerminacionContratoMutuoAcuerdoContent";

export const metadata: Metadata = {
  title:
    "Terminación de contrato por mutuo acuerdo en Colombia | Guía completa",
  description:
    "Conoce cómo funciona la terminación de contrato por mutuo acuerdo en Colombia, sus requisitos legales, ventajas y cómo formalizarla mediante conciliación.",
  keywords: [
    "terminación de contrato por mutuo acuerdo",
    "mutuo acuerdo laboral",
    "finalizar contrato laboral Colombia",
    "conciliación laboral Colombia",
    "acuerdo entre empleador y trabajador",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",
  },
  openGraph: {
    title: "Terminación de contrato por mutuo acuerdo en Colombia",
    description:
      "Aprende cómo finalizar una relación laboral de forma legal mediante acuerdo entre empleador y trabajador.",
    url: "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Terminación de contrato por mutuo acuerdo en Colombia",
    description:
      "Guía sobre la terminación de contrato laboral por mutuo acuerdo en Colombia y su formalización mediante conciliación.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/blog/terminacion-contrato-mutuo-acuerdo",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se puede terminar un contrato laboral por mutuo acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Empleador y trabajador pueden acordar voluntariamente la terminación del contrato laboral siempre que exista consentimiento libre y expreso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre es obligatorio, pero la conciliación brinda mayor seguridad jurídica para ambas partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se deben pagar las prestaciones sociales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La terminación por mutuo acuerdo no elimina la obligación de liquidar y pagar las prestaciones sociales correspondientes.",
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

      <TerminacionContratoMutuoAcuerdoContent />
    </>
  );
}
