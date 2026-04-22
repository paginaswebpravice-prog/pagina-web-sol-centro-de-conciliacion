import { Metadata } from "next";
import ConflictosFamiliaresContent from "./ConflictosFamiliaresContent";

export const metadata: Metadata = {
  title:
    "Conflictos familiares en Colombia | Conciliación en Bogotá sin demanda",

  description:
    "Resuelve conflictos familiares en Colombia sin proceso judicial. Conciliación en Bogotá para separación, acuerdos familiares, custodia y obligaciones familiares.",

  keywords: [
    "conflictos familiares Colombia",
    "conciliación familiar Bogotá",
    "separación acuerdos familiares Colombia",
    "custodia hijos conciliación",
    "problemas familiares sin demanda",
    "centro de conciliación familia Colombia",
    "acuerdos familiares legales Bogotá",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/conflictos-familiares",
  },

  openGraph: {
    title:
      "Conflictos familiares en Colombia | Solución legal sin demanda en Bogotá",
    description:
      "Resuelve conflictos familiares de forma rápida y legal en Colombia. Conciliación en Bogotá para separación, acuerdos y custodia.",
    url: "https://solcentrodeconciliacion.com/practice/conflictos-familiares",
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
            name: "Conciliación en conflictos familiares en Colombia",
            description:
              "Servicio de conciliación para resolver conflictos familiares en Colombia relacionados con separación, acuerdos familiares, custodia y obligaciones familiares.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en conflictos familiares y relaciones de familia",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <ConflictosFamiliaresContent />
    </>
  );
}
