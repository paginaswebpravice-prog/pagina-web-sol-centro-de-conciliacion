import { Metadata } from "next";
import AmigableComposicionContent from "./AmigableComposicionContent";

export const metadata: Metadata = {
  title:
    "¿Qué es la amigable composición en Colombia? Guía completa, ejemplos y diferencias",
  description:
    "Descubre qué es la amigable composición en Colombia, cómo funciona el amigable componedor, cuándo utilizar este mecanismo, sus ventajas, diferencias con la conciliación y ejemplos prácticos.",
  keywords: [
    "amigable composición",
    "amigable composición Colombia",
    "amigable componedor",
    "amigable componedor Colombia",
    "qué es la amigable composición",
    "diferencia conciliación y amigable composición",
    "diferencia arbitraje y amigable composición",
    "cláusula amigable composición",
    "ejemplo amigable composición",
    "mecanismos alternativos solución conflictos",
    "MASC Colombia",
    "solución conflictos contratos",
    "resolución conflictos empresariales",
    "amigable composición contratos",
    "amigable composición Bogotá",
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
