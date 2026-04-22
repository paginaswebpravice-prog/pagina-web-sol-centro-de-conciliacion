import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solcentrodeconciliacion.com";

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

  const blogPosts = [
    // GENERAL
    "que-es-la-conciliacion",
    "cuando-conviene-conciliar",
    "que-asuntos-se-pueden-conciliar",
    "paso-a-paso-del-tramite",
    "documentos-y-evidencia-util",
    "como-es-la-audiencia",
    "acta-de-conciliacion-efectos-y-cumplimiento",
    "errores-comunes-y-como-evitarlos",
    "preguntas-frecuentes",

    // JURÍDICO
    "modelo-acta-conciliacion",
    "actas-ejemplos",
    "acta-companeros-permanentes",
    "acta-alimentos",
    "acta-no-conciliacion-laboral",
    "carta-conciliacion",
    "acta-civil",
    "documento-familia",
    "amigable-composicion",
    "audiencia",
    "poder",
    "citacion",
  ];

  const blogUrls = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/practice`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...practiceUrls,
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
