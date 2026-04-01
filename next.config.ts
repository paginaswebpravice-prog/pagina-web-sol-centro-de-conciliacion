import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /* =========================
         REDIRECCIONES WEB ANTIGUA
      ========================== */

      {
        source: "/contacto",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/nosotros/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/tarifas/",
        destination: "/practice",
        permanent: true,
      },
      {
        source: "/servicios/",
        destination: "/practice",
        permanent: true,
      },

      {
        source: "/pages/privacy.php",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/terms.php",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/blog/blog.php",
        destination: "/blog",
        permanent: true,
      },

      /* =========================
         LIMPIEZA GENERAL SEO
      ========================== */

      {
        source: "/index.php/:path*",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*.php",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/:path*/",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
