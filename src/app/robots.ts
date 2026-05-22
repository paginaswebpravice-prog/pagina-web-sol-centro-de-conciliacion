import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: "/",

        disallow: ["/_next/", "/api/", "/admin/", "/dashboard/"],
      },
    ],

    sitemap: "https://solcentrodeconciliacion.com/sitemap.xml",

    host: "https://solcentrodeconciliacion.com",
  };
}
