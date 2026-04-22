import { Metadata } from "next";
import LiquidacionDeSociedadConyugalContent from "./LiquidacionDeSociedadConyugalContent";

export const metadata: Metadata = {
  title:
    "Liquidación de sociedad conyugal en Colombia | Reparto de bienes sin demanda en Bogotá",

  description:
    "Realiza la liquidación de sociedad conyugal en Colombia sin juicio. Conciliación en Bogotá para reparto de bienes tras separación o divorcio de forma legal y rápida.",

  keywords: [
    "liquidación sociedad conyugal Colombia",
    "reparto de bienes divorcio Bogotá",
    "conciliación sociedad conyugal Colombia",
    "división de bienes sin demanda",
    "separación bienes matrimonio Colombia",
    "centro de conciliación familia Bogotá",
    "liquidación bienes pareja Colombia",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",
  },

  openGraph: {
    title:
      "Liquidación de sociedad conyugal en Colombia | Reparto de bienes sin juicio",
    description:
      "Divide bienes tras separación o divorcio en Colombia mediante conciliación. Evita procesos judiciales largos en Bogotá.",
    url: "https://solcentrodeconciliacion.com/practice/liquidacion-de-sociedad-conyugal",
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
            name: "Liquidación de sociedad conyugal en Colombia",
            description:
              "Servicio de conciliación para la liquidación de sociedad conyugal y reparto de bienes tras separación o divorcio en Colombia sin proceso judicial.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en liquidación de sociedad conyugal y bienes",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <LiquidacionDeSociedadConyugalContent />
    </>
  );
}
