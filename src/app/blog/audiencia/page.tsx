import { Metadata } from "next";
import AudienciaContent from "./AudienciaContent";

export const metadata: Metadata = {
  title:
    "Audiencia de conciliación en Colombia: cómo funciona, qué documentos llevar y qué pasa si no hay acuerdo",
  description:
    "Descubre cómo funciona una audiencia de conciliación en Colombia, qué documentos llevar, cuánto dura, qué sucede si una parte no asiste, cómo prepararte y qué efectos legales tiene el acta de conciliación.",
  keywords: [
    "audiencia de conciliación Colombia",
    "audiencia de conciliación Bogotá",
    "conciliación extrajudicial Colombia",
    "proceso de conciliación Colombia",
    "abogado conciliación Bogotá",
  ],
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/audiencia",
  },
  openGraph: {
    title:
      "Audiencia de conciliación en Colombia: cómo funciona, qué documentos llevar y qué pasa si no hay acuerdo",
    description:
      "Descubre cómo funciona una audiencia de conciliación en Colombia, qué documentos llevar, cuánto dura, qué sucede si una parte no asiste, cómo prepararte y qué efectos legales tiene el acta de conciliación.",

    url: "https://solcentrodeconciliacion.com/blog/audiencia",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function AudienciaPage() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Audiencia de conciliación en Colombia: cómo prepararse",
              description:
                "Guía completa sobre la audiencia de conciliación en Colombia, qué llevar, cómo funciona y qué pasa si no hay acuerdo.",
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
                "@id": "https://solcentrodeconciliacion.com/blog/audiencia",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              about: [
                "audiencia de conciliación Colombia",
                "conciliación extrajudicial Bogotá",
                "proceso de conciliación Colombia",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es una audiencia de conciliación en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un espacio donde las partes intentan resolver un conflicto con ayuda de un conciliador antes de acudir a un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si no hay acuerdo en la audiencia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se expide una constancia de no conciliación que permite iniciar un proceso judicial.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AudienciaContent />
    </>
  );
}
