import { Metadata } from "next";
import ConflictosDeArrendamientoContent from "./ConflictosDeArrendamientoContent";

export const metadata: Metadata = {
  title:
    "Conflictos de arrendamiento en Colombia | Soluciona problemas entre arrendador y arrendatario en Bogotá",

  description:
    "Resuelve conflictos de arrendamiento en Colombia sin demanda. Conciliación en Bogotá para incumplimientos, canon de arriendo, restitución de inmueble y obligaciones contractuales.",

  keywords: [
    "conflictos de arrendamiento Colombia",
    "problemas arrendador arrendatario Bogotá",
    "incumplimiento contrato arrendamiento",
    "restitución de inmueble Colombia conciliación",
    "deuda arriendo Colombia",
    "conciliación arrendamientos Bogotá",
    "centro de conciliación arrendamiento Colombia",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",
  },

  openGraph: {
    title:
      "Conflictos de arrendamiento en Colombia | Solución legal sin demanda",
    description:
      "Evita procesos judiciales por arriendos. Resuelve conflictos entre arrendador y arrendatario en Bogotá y Colombia con conciliación legal.",
    url: "https://solcentrodeconciliacion.com/practice/conflictos-de-arrendamiento",
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
            name: "Conciliación en conflictos de arrendamiento en Colombia",
            description:
              "Servicio de conciliación para resolver conflictos de arrendamiento entre arrendadores y arrendatarios en Colombia sin necesidad de proceso judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en conflictos de arrendamiento y restitución de inmueble",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <ConflictosDeArrendamientoContent />
    </>
  );
}
