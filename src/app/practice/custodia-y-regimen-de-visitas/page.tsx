import { Metadata } from "next";
import CustodiaYRegimenDeVisitasContent from "./CustodiaYRegimenDeVisitasContent";

export const metadata: Metadata = {
  title:
    "Custodia y régimen de visitas en Colombia | Acuerdos legales sin demanda en Bogotá",

  description:
    "Resuelve conflictos de custodia y régimen de visitas en Colombia sin juicio. Conciliación en Bogotá para acuerdos legales sobre hijos, visitas y cuidado personal.",

  keywords: [
    "custodia de hijos Colombia",
    "régimen de visitas Bogotá",
    "conciliación custodia hijos Colombia",
    "acuerdos de custodia legal",
    "visitas hijos separación Colombia",
    "centro de conciliación familia Bogotá",
    "custodia compartida Colombia conciliación",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",
  },

  openGraph: {
    title:
      "Custodia y régimen de visitas en Colombia | Solución legal sin demanda",
    description:
      "Acuerdos legales sobre custodia y visitas de hijos en Bogotá y Colombia mediante conciliación. Evita procesos judiciales largos.",
    url: "https://solcentrodeconciliacion.com/practice/custodia-y-regimen-de-visitas",
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
            name: "Conciliación en custodia y régimen de visitas en Colombia",
            description:
              "Servicio de conciliación para resolver conflictos de custodia, cuidado personal y régimen de visitas de hijos en Colombia sin proceso judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en custodia de hijos y régimen de visitas",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <CustodiaYRegimenDeVisitasContent />
    </>
  );
}
