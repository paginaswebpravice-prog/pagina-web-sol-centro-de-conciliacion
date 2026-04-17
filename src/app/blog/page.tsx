import { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog de Conciliación en Colombia | Guía legal, actas y audiencias",
  description:
    "Blog jurídico sobre conciliación extrajudicial en Colombia. Aprende sobre actas de conciliación, audiencias, modelos legales y resolución de conflictos.",
  keywords: [
    "conciliación Colombia",
    "acta de conciliación",
    "audiencia de conciliación",
    "modelos de conciliación",
    "conciliación extrajudicial Colombia",
    "blog legal Colombia",
  ],
  openGraph: {
    title: "Blog de Conciliación en Colombia | Guía completa legal",
    description:
      "Artículos jurídicos sobre conciliación extrajudicial, modelos de actas, audiencias y resolución de conflictos en Colombia.",
    url: "https://www.solcentrodeconciliacion.com/blog",
    siteName: "Sol Centro de Conciliación",
    images: [
      {
        url: "https://www.solcentrodeconciliacion.com/logo.png",
        width: 800,
        height: 600,
        alt: "Blog conciliación Colombia",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <BlogContent />;
}
