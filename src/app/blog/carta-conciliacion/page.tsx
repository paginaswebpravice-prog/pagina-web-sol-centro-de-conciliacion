import { Metadata } from "next";
import CartaConciliacionContent from "./CartaConciliacionContent";

export default function CartaConciliacionPage() {
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
              headline: "Carta de conciliación en Colombia (Modelo)",
              description:
                "Modelo de carta de conciliación en Colombia y Bogotá. Formato de invitación a conciliación extrajudicial.",
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
                  "https://solcentrodeconciliacion.com/blog/carta-conciliacion",
              },
              articleSection: "Conciliación en Colombia",
              inLanguage: "es-CO",
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Para qué sirve una carta de conciliación en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sirve para invitar formalmente a una persona a resolver un conflicto antes de iniciar un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La carta de conciliación es obligatoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No siempre es obligatoria, pero es una buena práctica antes de iniciar una conciliación formal o un proceso judicial.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <CartaConciliacionContent />
    </>
  );
}
