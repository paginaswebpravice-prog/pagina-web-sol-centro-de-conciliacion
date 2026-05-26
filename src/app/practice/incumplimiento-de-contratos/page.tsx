import { Metadata } from "next";
import IncumplimientoDeContratosContent from "./IncumplimientoDeContratosContent";

export const metadata: Metadata = {
  title:
    "Incumplimiento de contratos en Colombia | Conciliación sin demanda en Bogotá",

  description:
    "Resuelve incumplimientos de contratos en Colombia sin proceso judicial. Conciliación en Bogotá para acuerdos legales rápidos entre empresas y particulares.",

  keywords: [
    "incumplimiento de contrato Colombia",
    "conciliación contractual Bogotá",
    "resolver contratos incumplidos sin demanda",
    "conflictos contractuales Colombia",
    "centro de conciliación contratos Bogotá",
    "renegociación de contratos Colombia",
    "solución de conflictos contractuales",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",
  },

  openGraph: {
    title:
      "Incumplimiento de contratos en Colombia | Solución legal sin demanda",
    description:
      "Resuelve conflictos por incumplimiento de contratos en Bogotá y Colombia mediante conciliación. Evita procesos judiciales largos.",
    url: "https://solcentrodeconciliacion.com/practice/incumplimientos-de-contratos",
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
            name: "Conciliación en incumplimiento de contratos en Colombia",
            description:
              "Servicio de conciliación para resolver incumplimientos contractuales en Colombia entre empresas y particulares sin proceso judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en conflictos por incumplimiento de contratos",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <IncumplimientoDeContratosContent />
    </>
  );
}
