import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title:
    "Consulta con abogados en Bogotá | Agenda asesoría legal y conciliación en Colombia",
  description:
    "Agenda tu consulta con abogados en Bogotá expertos en conciliación y resolución de conflictos en Colombia. Atención presencial y virtual con asesoría legal inmediata.",
  keywords: [
    "abogados en Bogotá",
    "consulta legal Colombia",
    "conciliación en Bogotá",
    "abogados conciliadores Colombia",
    "asesoría legal Bogotá",
    "resolución de conflictos Colombia",
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
