import { Metadata } from "next";
import AsuntosVecinalesContent from "./AsuntosVecinalesContent";

export const metadata: Metadata = {
  title:
    "Conciliación en conflictos vecinales en Colombia | Problemas entre vecinos en Bogotá",

  description:
    "Resuelve conflictos vecinales en Colombia sin demanda. Conciliación en Bogotá para problemas entre vecinos, ruido, convivencia y uso de espacios comunes.",

  keywords: [
    "conflictos vecinales Colombia",
    "problemas entre vecinos Bogotá",
    "ruido vecinos conciliación",
    "convivencia conjuntos residenciales Colombia",
    "disputas vecinales propiedad horizontal",
    "conciliación conflictos vecinales",
    "centro de conciliación Bogotá vecinos",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",
  },

  openGraph: {
    title:
      "Conciliación en conflictos vecinales en Colombia | Solución sin demanda",
    description:
      "Evita demandas entre vecinos. Resuelve conflictos de convivencia en Bogotá y Colombia con conciliación legal, rápida y efectiva.",
    url: "https://solcentrodeconciliacion.com/practice/asuntos-vecinales",
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
            name: "Conciliación en conflictos vecinales en Colombia",
            description:
              "Servicio de conciliación para resolver conflictos entre vecinos en Colombia relacionados con convivencia, ruido, uso de zonas comunes y propiedad horizontal.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en conflictos de convivencia y asuntos vecinales",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <AsuntosVecinalesContent />
    </>
  );
}
