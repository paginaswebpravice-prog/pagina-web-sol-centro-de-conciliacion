import { Metadata } from "next";
import CartaConciliacionContent from "./CartaConciliacionContent";

export const metadata: Metadata = {
  title:
    "Carta de conciliación en Colombia (Modelo) | Centro de Conciliación Bogotá",
  description:
    "Modelo de carta de conciliación en Colombia. Aprende cómo hacer una invitación a conciliación extrajudicial en Bogotá y Colombia con formato listo para usar.",
  keywords: [
    "carta de conciliacion Colombia",
    "modelo carta conciliacion Bogotá",
    "conciliacion extrajudicial Colombia",
    "centro de conciliacion Bogotá",
    "invitacion conciliacion formato",
  ],
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/carta-conciliacion",
  },
  openGraph: {
    title: "Carta de conciliación en Colombia (Modelo) | Guía completa",
    description:
      "Formato de carta de conciliación en Colombia con ejemplo listo para usar en Bogotá y a nivel nacional.",
    url: "https://solcentrodeconciliacion.com/blog/carta-conciliacion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

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
