"use client";

import ActasEjemplosContent from "./ActasEjemplosContent";

export default function ActasEjemplosSeo() {
  return (
    <>
      {/* ================= SEO STRUCTURED DATA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Actas de conciliación en Colombia: ejemplos y recomendaciones",
              description:
                "Ejemplos de actas de conciliación en Colombia, acuerdos de pago y formatos legales en Bogotá y Colombia.",
              author: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              publisher: {
                "@type": "Organization",
                name: "Cobrando Online",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id":
                  "https://solcentrodeconciliacion.com/blog/actas-ejemplos",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué debe contener un acta de conciliación?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Debe incluir partes, obligaciones claras, fechas y forma de cumplimiento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El acta de conciliación tiene validez legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, presta mérito ejecutivo en Colombia.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <ActasEjemplosContent />
    </>
  );
}
