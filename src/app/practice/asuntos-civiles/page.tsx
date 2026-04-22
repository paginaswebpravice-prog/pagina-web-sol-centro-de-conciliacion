import { Metadata } from "next";
import AsuntosCivilesContent from "./AsuntosCivilesContent";

export const metadata: Metadata = {
  title:
    "Conciliación civil en Colombia | Resuelve deudas y conflictos sin demanda en Bogotá",

  description:
    "Resuelve conflictos civiles en Colombia sin demanda. Conciliación en Bogotá para deudas, contratos, arrendamientos y obligaciones. Proceso rápido, legal y efectivo.",

  keywords: [
    "conciliación civil Colombia",
    "conciliación en Bogotá",
    "resolver deudas sin demanda",
    "conflictos civiles Colombia",
    "incumplimiento de contratos Colombia",
    "conciliación arrendamientos Bogotá",
    "deudas entre particulares Colombia",
    "centro de conciliación civil",
  ],

  alternates: {
    canonical: "https://solcentrodeconciliacion.com/practice/asuntos-civiles",
  },

  openGraph: {
    title:
      "Conciliación civil en Colombia | Soluciona deudas y conflictos sin demanda",
    description:
      "Evita procesos judiciales. Resuelve conflictos civiles en Bogotá y Colombia con conciliación rápida, legal y efectiva.",
    url: "https://solcentrodeconciliacion.com/practice/asuntos-civiles",
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
              name: "Conciliación civil en Colombia",
              description:
                "Servicio de conciliación civil en Bogotá y Colombia para resolver conflictos relacionados con deudas, contratos, arrendamientos y obligaciones sin necesidad de demanda.",
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
                  name: "¿Qué conflictos civiles se pueden conciliar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se pueden conciliar conflictos como deudas entre particulares, incumplimiento de contratos, arrendamientos, obligaciones económicas y responsabilidad civil.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿La conciliación civil tiene validez legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, el acuerdo logrado en una conciliación tiene efectos legales y puede ser exigible ante la ley en Colombia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Es obligatorio conciliar antes de demandar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "En muchos casos en Colombia, la conciliación es un requisito previo antes de iniciar un proceso judicial civil.",
                  },
                },
              ],
            },
          ]),
        }}
      />

      <AsuntosCivilesContent />
    </>
  );
}
