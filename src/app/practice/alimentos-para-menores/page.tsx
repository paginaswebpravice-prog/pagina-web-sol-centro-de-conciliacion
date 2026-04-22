import { Metadata } from "next";
import AlimentosParaMenoresContent from "./AlimentosParaMenoresContent";

export const metadata: Metadata = {
  title:
    "Alimentos para menores en Colombia | Conciliación de cuota alimentaria en Bogotá",

  description:
    "Conciliación de alimentos para menores en Colombia. Acuerdos legales sobre cuota alimentaria, custodia y obligaciones de padres en Bogotá sin proceso judicial.",

  keywords: [
    "alimentos para menores Colombia",
    "cuota alimentaria Bogotá",
    "conciliación alimentos niños Colombia",
    "pensión alimentaria Colombia",
    "acuerdo de alimentos hijos",
    "custodia y alimentos Colombia",
    "conciliación familiar Bogotá",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/alimentos-para-menores",
  },

  openGraph: {
    title: "Alimentos para menores en Colombia | Cuota alimentaria sin demanda",
    description:
      "Regula la cuota alimentaria y acuerdos sobre hijos mediante conciliación en Colombia. Soluciones legales rápidas en Bogotá.",
    url: "https://solcentrodeconciliacion.com/practice/alimentos-para-menores",
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
            name: "Conciliación en alimentos para menores en Colombia",
            description:
              "Servicio de conciliación para fijación, modificación y cumplimiento de cuota alimentaria en Colombia.",
            areaServed: "Colombia",
            serviceType:
              "Conciliación en alimentos para menores, custodia y familia",
            provider: {
              "@type": "Organization",
              name: "Sol Centro de Conciliación",
              url: "https://solcentrodeconciliacion.com",
            },
          }),
        }}
      />

      <AlimentosParaMenoresContent />
    </>
  );
}
