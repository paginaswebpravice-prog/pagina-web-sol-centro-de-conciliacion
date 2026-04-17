import { Metadata } from "next";
import ActaCompanerosPermanentesContent from "./ActaCompanerosPermanentesContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación compañeros permanentes en Colombia | Modelo y guía legal",
  description:
    "Acta de conciliación suscrita por los compañeros permanentes en Colombia. Modelo, requisitos, efectos legales y guía jurídica en Bogotá y Colombia.",
  keywords: [
    "acta de conciliacion compañeros permanentes Colombia",
    "union marital de hecho Colombia",
    "conciliacion familiar Bogota",
    "modelo acta conciliacion Colombia",
    "acuerdos compañeros permanentes",
  ],
  openGraph: {
    title:
      "Acta de conciliación compañeros permanentes en Colombia | Guía completa",
    description:
      "Modelo y guía legal del acta de conciliación entre compañeros permanentes en Colombia. Requisitos, efectos legales y cómo hacerla en Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/acta-companeros-permanentes",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acta de conciliación compañeros permanentes en Colombia (modelo)",
    description:
      "Guía práctica + modelo de acta de conciliación entre compañeros permanentes en Colombia.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acta-companeros-permanentes",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Acta de conciliación suscrita por los compañeros permanentes en Colombia",
      description:
        "Guía legal sobre el acta de conciliación entre compañeros permanentes en Colombia, modelo, requisitos y efectos legales.",
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
          "https://solcentrodeconciliacion.com/blog/acta-companeros-permanentes",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es el acta de conciliación entre compañeros permanentes en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es un acuerdo legal realizado ante un centro de conciliación en Colombia donde los compañeros permanentes establecen obligaciones económicas, acuerdos sobre hijos, convivencia o reparto de gastos.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene validez legal en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, el acta de conciliación en Colombia tiene efectos legales y presta mérito ejecutivo, lo que significa que puede exigirse su cumplimiento ante un juez.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ActaCompanerosPermanentesContent />
    </>
  );
}
