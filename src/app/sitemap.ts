import { MetadataRoute } from "next";
import { categories } from "./blog/article";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solcentrodeconciliacion.com";

  /* ===============================
     LANDINGS DE PRÁCTICA
  =============================== */

  const practiceLandingUrls = [
    "asuntos-comerciales",
    "asuntos-civiles",
    "asuntos-de-copropiedad",
    "asuntos-laborales",
    "alimentos-para-menores",
    "custodia-y-regimen-de-visitas",
    "asuntos-vecinales",
    "liquidacion-de-sociedad-conyugal",
    "conflictos-familiares",
    "obligaciones-economicas",
    "incumplimiento-de-contratos",
    "conflictos-de-arrendamiento",
  ];

  const practiceUrls = practiceLandingUrls.map((slug) => ({
    url: `${baseUrl}/practice/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  /* ===============================
     BLOG DINÁMICO DESDE articles.ts
  =============================== */

  const blogUrls = categories.flatMap((category) =>
    category.posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  );

  /* ===============================
     SITEMAP
  =============================== */

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    ...practiceUrls,

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    ...blogUrls,

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
