import { Metadata } from "next";
import AsuntosLaboralesContent from "./AsuntosLaboralesContent";

export const metadata: Metadata = {
  title:
    "Conciliación laboral en Colombia | Resuelve conflictos laborales sin demanda en Bogotá",

  description:
    "Resuelve conflictos laborales en Colombia sin demanda. Conciliación en Bogotá para despidos, liquidaciones, salarios y contratos laborales de forma legal y rápida.",

  keywords: [
    "conciliación laboral Colombia",
    "conflictos laborales Bogotá",
    "liquidación laboral Colombia",
    "despido injustificado conciliación",
    "salarios adeudados Colombia",
    "derecho laboral conciliación",
    "centro de conciliación laboral Bogotá",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",
  },

  openGraph: {
    title:
      "Conciliación laboral en Colombia | Soluciona conflictos sin demanda",
    description:
      "Evita procesos judiciales laborales. Resuelve despidos, salarios y liquidaciones en Bogotá y Colombia con conciliación legal.",
    url: "https://solcentrodeconciliacion.com/practice/asuntos-laborales",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      {/* ================= SCHEMA SEO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Conciliación laboral en Colombia",
            description:
              "Servicio de conciliación laboral en Bogotá y Colombia para resolver conflictos entre empleadores y trabajadores sin necesidad de demanda judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en conflictos laborales, despidos y liquidaciones",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <AsuntosLaboralesContent />
    </>
  );
}
