import { Metadata } from "next";
import AmigableComposicionContent from "./AmigableComposicionContent";

export const metadata: Metadata = {
  title:
    "Amigable composición en Colombia: qué es, amigable componedor y cómo funciona",
  description:
    "Aprende qué es la amigable composición en Colombia, cómo funciona el amigable componedor, diferencias con conciliación y cuándo usarla en Bogotá y Colombia.",
  keywords: [
    "amigable composición Colombia",
    "amigable componedor Colombia",
    "amigable composición Bogotá",
    "diferencia conciliación y amigable composición",
    "mecanismos alternativos solución conflictos Colombia",
  ],
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/blog/amigable-composicion",
  },
  openGraph: {
    title: "Amigable composición en Colombia: qué es y cómo funciona",
    description:
      "Guía completa sobre la amigable composición en Colombia, diferencias con conciliación y cuándo utilizarla.",
    url: "https://solcentrodeconciliacion.com/blog/amigable-composicion",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
  },
};

export default function AmigableComposicionPage() {
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
                "Amigable composición en Colombia: qué es, amigable componedor y cómo funciona",
              description:
                "Guía completa sobre la amigable composición en Colombia, características, amigable componedor y diferencias con conciliación.",
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
                  "https://solcentrodeconciliacion.com/blog/amigable-composicion",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              about: [
                "Amigable composición Colombia",
                "Amigable componedor Bogotá",
                "Mecanismos alternativos de solución de conflictos",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es la amigable composición en Colombia?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Es un mecanismo mediante el cual las partes delegan en un tercero la solución de un conflicto.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es la diferencia entre conciliación y amigable composición?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En la conciliación las partes construyen el acuerdo; en la amigable composición el tercero toma la decisión.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AmigableComposicionContent />
    </>
  );
}
