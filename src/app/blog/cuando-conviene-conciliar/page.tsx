import { Metadata } from "next";
import CuandoConvieneConciliarContent from "./CuandoConvieneConciliarContent";

export const metadata: Metadata = {
  title: "Cuándo conviene conciliar en Colombia: guía práctica en Bogotá",
  description:
    "Descubre cuándo es recomendable acudir a conciliación en Colombia y Bogotá. Casos, ventajas y recomendaciones prácticas.",
  keywords: [
    "cuando conviene conciliar Colombia",
    "conciliacion Bogota cuando usar",
    "ventajas conciliacion Colombia",
    "conciliacion extrajudicial Bogota",
    "cuando ir a conciliacion Colombia",
  ],
  openGraph: {
    title: "Cuándo conviene conciliar en Colombia",
    description:
      "Guía práctica para saber cuándo conviene acudir a conciliación en Colombia y Bogotá.",
    url: "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuándo conviene conciliar en Colombia",
    description:
      "Casos, ventajas y recomendaciones para usar la conciliación en Colombia.",
  },
  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Cuándo conviene conciliar en Colombia: guía práctica en Bogotá",
      description:
        "Descubre cuándo es recomendable acudir a conciliación en Colombia y Bogotá. Casos, ventajas y recomendaciones prácticas.",
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
          "https://solcentrodeconciliacion.com/blog/cuando-conviene-conciliar",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuándo es recomendable conciliar en Colombia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es recomendable cuando existe voluntad de acuerdo, se busca rapidez y se desea evitar un proceso judicial largo.",
          },
        },
        {
          "@type": "Question",
          name: "¿La conciliación es obligatoria en Bogotá?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "En muchos casos sí, especialmente como requisito previo antes de acudir a un proceso judicial.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CuandoConvieneConciliarContent />
    </>
  );
}
