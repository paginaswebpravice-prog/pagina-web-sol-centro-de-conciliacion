import { Metadata } from "next";
import ActaDeConciliacionEfectosYCumplimientoContent from "./ActaDeConciliacionEfectosYCumplimientoContent";

export const metadata: Metadata = {
  title: "Acta de conciliación: efectos legales y cumplimiento en Colombia",
  description:
    "Efectos legales del acta de conciliación en Colombia, cumplimiento, qué pasa si no cumplen un acta de conciliación en Bogotá y Colombia.",
  keywords:
    "acta de conciliacion efectos legales Colombia, cumplimiento acta conciliacion Colombia, proceso ejecutivo conciliacion Bogota, que pasa si no cumplen acta conciliacion",
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/acta-de-conciliacion-efectos-y-cumplimiento",
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Acta de conciliación efectos y cumplimiento en Colombia",
      description:
        "Efectos legales del acta de conciliación en Colombia, cumplimiento, qué pasa si no cumplen un acta de conciliación en Bogotá y Colombia.",
      author: {
        "@type": "Organization",
        name: "Conciliación Colombia",
      },
      publisher: {
        "@type": "Organization",
        name: "Conciliación Colombia",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿El acta de conciliación presta mérito ejecutivo en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, el acta de conciliación presta mérito ejecutivo en Colombia, lo que significa que puede exigirse su cumplimiento ante un juez.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si no cumplen un acta de conciliación?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si una parte no cumple el acta de conciliación, la otra puede iniciar un proceso ejecutivo para exigir el cumplimiento.",
          },
        },
        {
          "@type": "Question",
          name: "¿El acta de conciliación tiene efectos legales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, el acta de conciliación tiene efectos de cosa juzgada y mérito ejecutivo en Colombia.",
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

      <ActaDeConciliacionEfectosYCumplimientoContent />
    </>
  );
}
