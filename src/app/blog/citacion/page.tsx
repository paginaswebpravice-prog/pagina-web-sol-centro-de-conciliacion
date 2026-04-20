import { Metadata } from "next";
import CitacionContent from "./CitacionContent";

export const metadata: Metadata = {
  title: "Citación a audiencia de conciliación laboral en Colombia | Modelo",
  description:
    "Aprenda cómo hacer una citación a audiencia de conciliación laboral en Colombia. Modelo, requisitos legales y procedimiento en Bogotá y Colombia.",
  keywords: [
    "citación audiencia conciliación laboral Colombia",
    "conciliación laboral Bogotá",
    "derecho laboral Colombia",
    "modelo citación conciliación",
    "audiencia conciliación trabajo",
  ],
  openGraph: {
    title: "Citación a audiencia de conciliación laboral en Colombia (Modelo)",
    description:
      "Modelo de citación a audiencia de conciliación laboral en Colombia con requisitos y formato listo para usar.",
    url: "https://solcentrodeconciliacion.com/blog/citacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citación a audiencia de conciliación laboral en Colombia",
    description:
      "Formato y guía práctica para hacer una citación a conciliación laboral en Colombia.",
  },
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/citacion",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Citación a audiencia de conciliación laboral en Colombia (Modelo)",
      description:
        "Modelo de citación a audiencia de conciliación laboral en Colombia, requisitos legales y procedimiento.",
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
        "@id": "https://solcentrodeconciliacion.com/blog/citacion",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Conciliación laboral en Colombia",
      provider: {
        "@type": "Organization",
        name: "Sol Centro de Conciliación",
      },
      areaServed: {
        "@type": "City",
        name: "Bogotá",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <CitacionContent />
    </>
  );
}
