import { Metadata } from "next";
import ActaDeConciliacionEfectosYCumplimientoContent from "./ActaDeConciliacionEfectosYCumplimientoContent";

export const metadata: Metadata = {
  title:
    "Acta de conciliación en Colombia: efectos legales, mérito ejecutivo, cosa juzgada e incumplimiento (Guía 2026)",

  description:
    "Aprenda qué es un acta de conciliación, cuáles son sus efectos legales, cuándo presta mérito ejecutivo, qué significa la cosa juzgada, qué hacer si no cumplen el acuerdo y cómo exigir judicialmente su cumplimiento en Colombia.",

  keywords:
    "acta de conciliación Colombia, efectos del acta de conciliación, efectos legales acta de conciliación, mérito ejecutivo acta de conciliación, cosa juzgada conciliación, incumplimiento acta de conciliación, proceso ejecutivo acta de conciliación, cómo hacer cumplir un acta de conciliación, demanda por incumplimiento de acta de conciliación, ejecución del acta de conciliación, validez del acta de conciliación, fuerza ejecutiva conciliación, acuerdo conciliatorio Colombia",

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
      headline:
        "Acta de conciliación en Colombia: efectos legales, mérito ejecutivo y qué hacer si no la cumplen",
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
