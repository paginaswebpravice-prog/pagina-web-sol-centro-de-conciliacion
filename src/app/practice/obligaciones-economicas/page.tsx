import { Metadata } from "next";
import ObligacionesEconomicasContent from "./ObligacionesEconomicasContent";

export const metadata: Metadata = {
  title:
    "Obligaciones económicas en Colombia | Conciliación de deudas sin demanda en Bogotá",

  description:
    "Resuelve obligaciones económicas y deudas en Colombia sin procesos judiciales. Conciliación en Bogotá para acuerdos de pago legales, rápidos y seguros.",

  keywords: [
    "obligaciones económicas Colombia",
    "conciliación de deudas Bogotá",
    "acuerdos de pago Colombia",
    "resolver deudas sin demanda",
    "centro de conciliación económica Bogotá",
    "cobro de obligaciones Colombia",
    "negociación de deudas legales",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",
  },

  openGraph: {
    title: "Obligaciones económicas en Colombia | Acuerdos de pago sin demanda",
    description:
      "Resuelve deudas y obligaciones económicas en Bogotá mediante conciliación. Evita procesos judiciales y embargos.",
    url: "https://solcentrodeconciliacion.com/practice/obligaciones-economicas",
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
            name: "Conciliación en obligaciones económicas en Colombia",
            description:
              "Servicio de conciliación para resolver obligaciones económicas, deudas y acuerdos de pago en Colombia sin proceso judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en obligaciones económicas y acuerdos de pago",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <ObligacionesEconomicasContent />
    </>
  );
}
