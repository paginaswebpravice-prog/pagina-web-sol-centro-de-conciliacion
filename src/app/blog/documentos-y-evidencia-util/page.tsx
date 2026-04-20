import { Metadata } from "next";
import DocumentoYEvidenciaUtilContent from "./DocumentoYEvidenciaUtilContent";

export const metadata: Metadata = {
  title:
    "Documentos y evidencia para conciliación en Colombia: qué llevar a una audiencia en Bogotá",
  description:
    "Guía completa sobre documentos y pruebas para conciliación en Colombia. Aprende qué evidencia llevar a una audiencia en Bogotá para lograr acuerdos efectivos.",
  keywords: [
    "documentos conciliacion Colombia",
    "evidencia conciliacion Bogotá",
    "que llevar audiencia conciliacion",
    "pruebas conciliacion Colombia",
    "audiencia conciliacion Bogotá documentos",
  ],
  openGraph: {
    title:
      "Documentos y evidencia para conciliación en Colombia (guía completa)",
    description:
      "Descubre qué documentos llevar a una audiencia de conciliación en Colombia y cómo preparar evidencia efectiva.",
    url: "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentos y evidencia para conciliación en Colombia",
    description:
      "Checklist + guía práctica para audiencias de conciliación en Bogotá.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Documentos y evidencia para conciliación en Colombia: qué llevar a una audiencia",
      description:
        "Guía completa sobre documentos y pruebas necesarias para conciliación en Colombia y Bogotá.",
      author: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      publisher: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://solcentrodeconciliacion.com/blog/documentos-y-evidencia-util",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <DocumentoYEvidenciaUtilContent />
    </>
  );
}
