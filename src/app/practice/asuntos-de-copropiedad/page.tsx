import { Metadata } from "next";
import AsuntosDeCopropiedadContent from "./AsuntosDeCopropiedadContent";

export const metadata: Metadata = {
  title:
    "Conciliación en copropiedad en Colombia | Conflictos de propiedad horizontal en Bogotá",

  description:
    "Resuelve conflictos de copropiedad en Colombia sin demanda. Conciliación en Bogotá para administración, cuotas, convivencia y propiedad horizontal de forma legal y rápida.",

  keywords: [
    "conciliación copropiedad Colombia",
    "propiedad horizontal Bogotá",
    "conflictos conjuntos residenciales Colombia",
    "cuotas administración edificios Bogotá",
    "problemas vecinos copropiedad",
    "conciliación propiedad horizontal",
    "centro de conciliación Bogotá copropiedad",
  ],

  alternates: {
    canonical:
      "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",
  },

  openGraph: {
    title:
      "Conciliación en copropiedad en Colombia | Solución a conflictos en conjuntos",
    description:
      "Evita demandas en propiedad horizontal. Resuelve conflictos de copropiedad en Bogotá y Colombia con conciliación legal y efectiva.",
    url: "https://solcentrodeconciliacion.com/practice/asuntos-de-copropiedad",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "article",
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
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Conciliación en copropiedad en Colombia",
              description:
                "Servicio de conciliación en propiedad horizontal en Bogotá y Colombia para resolver conflictos entre copropietarios, administración y convivencia sin procesos judiciales.",
              provider: {
                "@type": "Organization",
                name: "Sol Centro de Conciliación",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué conflictos se presentan en copropiedad?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los conflictos más comunes son cuotas de administración, uso de zonas comunes, convivencia entre vecinos y decisiones de la asamblea.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Se puede conciliar problemas de propiedad horizontal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, los conflictos de propiedad horizontal pueden resolverse mediante conciliación antes de acudir a un proceso judicial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La conciliación en copropiedad es obligatoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No siempre es obligatoria, pero es altamente recomendada para evitar demandas y conflictos prolongados.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AsuntosDeCopropiedadContent />
    </>
  );
}
