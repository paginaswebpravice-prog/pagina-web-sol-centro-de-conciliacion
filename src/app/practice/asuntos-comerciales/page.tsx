import { Metadata } from "next";
import AsuntosComercialesContent from "./AsuntosComercialesContent";

export const metadata: Metadata = {
  title:
    "Conciliación en asuntos comerciales en Colombia | Evita demandas y recupera acuerdos rápido",
  description:
    "Resuelve conflictos comerciales sin ir a juicio. Conciliación en contratos, incumplimientos y sociedades en Bogotá y Colombia. Soluciones legales rápidas y efectivas.",

  keywords: [
    "conciliación comercial Colombia",
    "conflictos empresariales Bogotá",
    "incumplimiento de contratos conciliación",
    "resolver conflictos comerciales sin demanda",
    "conciliación sociedades Colombia",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/asuntos-comerciales",
  },

  openGraph: {
    title:
      "Conciliación comercial en Colombia | Evita demandas y protege tu empresa",
    description:
      "Soluciona conflictos comerciales sin procesos judiciales. Conciliación en contratos, sociedades y obligaciones en Colombia.",
    url: "https://solcentrodeconciliacion.com/practice/asuntos-comerciales",
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
            name: "Conciliación en asuntos comerciales",
            areaServed: "Colombia",
            description:
              "Servicio de conciliación en conflictos comerciales en Bogotá y Colombia, enfocado en contratos, sociedades e incumplimientos.",
          }),
        }}
      />

      <AsuntosComercialesContent />
    </>
  );
}
