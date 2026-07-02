import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title:
    "Consulta con abogados en Bogotá | Asesoría jurídica y conciliación extrajudicial",
  description:
    "Agenda una consulta con abogados conciliadores en Bogotá especializados en derecho civil, comercial, familiar y laboral. Atención presencial y virtual en toda Colombia con soluciones legales rápidas y seguras.",
  keywords: [
    "abogados Bogotá",
    "consulta jurídica Bogotá",
    "consulta abogado",
    "asesoría jurídica",
    "asesoría legal Colombia",
    "abogado conciliador",
    "centro de conciliación Bogotá",
    "conciliación extrajudicial",
    "abogados derecho civil",
    "abogados comerciales",
    "abogados familiares",
    "abogados laborales",
    "consulta legal virtual",
    "abogados Colombia",
    "resolver conflictos legales",
    "agenda consulta abogado",
    "asesoría legal empresarial",
    "conciliación en derecho",
  ],
  alternates: {
    canonical: "https://solcentrodeconciliacion.com/contact",
  },
  openGraph: {
    title:
      "Agenda consulta con abogados en Bogotá | Conciliación rápida y asesoría legal",
    description:
      "Agenda tu consulta legal en Bogotá con abogados expertos en conciliación y resolución de conflictos en Colombia.",
    url: "https://solcentrodeconciliacion.com/contact",
    siteName: "Sol Centro de Conciliación",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <ContactContent />;
}
