"use client";

import Link from "next/link";
import styles from "./blog.module.css";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  slug: string;
};

/* =========================
   SECCIÓN 1 – GENERAL
========================= */

const generalPosts: BlogPost[] = [
  {
    title: "¿Qué es la conciliación en Colombia y para qué sirve realmente?",
    slug: "que-es-la-conciliacion",
  },
  {
    title: "¿Cuándo conviene conciliar? Casos donde sí funciona",
    slug: "cuando-conviene-conciliar",
  },
  {
    title: "¿Qué asuntos se pueden conciliar en Colombia? (Lista completa)",
    slug: "que-asuntos-se-pueden-conciliar",
  },
  {
    title: "Conciliación paso a paso en Colombia: guía completa",
    slug: "paso-a-paso-del-tramite",
  },
  {
    title: "Documentos clave para una conciliación exitosa",
    slug: "documentos-y-evidencia-util",
  },
  {
    title: "¿Cómo es una audiencia de conciliación? Presencial vs virtual",
    slug: "como-es-la-audiencia",
  },
  {
    title: "Acta de conciliación: efectos legales y cómo hacerla cumplir",
    slug: "acta-de-conciliacion-efectos-y-cumplimiento",
  },
  {
    title: "Errores comunes en conciliación (y cómo evitarlos)",
    slug: "errores-comunes-y-como-evitarlos",
  },
  {
    title: "Preguntas frecuentes sobre conciliación en Colombia",
    slug: "preguntas-frecuentes",
  },
];

/* =========================
   SECCIÓN 2 – JURÍDICA
========================= */

const juridicoPosts: BlogPost[] = [
  {
    title: "Modelo de acta de conciliación en Colombia (ejemplo listo)",
    slug: "modelo-acta-conciliacion",
  },
  {
    title: "Actas de conciliación: ejemplos reales y recomendaciones",
    slug: "actas-ejemplos",
  },
  {
    title: "Acta de conciliación entre compañeros permanentes (modelo y guía)",
    slug: "acta-companeros-permanentes",
  },
  {
    title: "Acta de conciliación de alimentos (ejemplo + Artículo 411 C.C.)",
    slug: "acta-alimentos",
  },
  {
    title: "Acta de no conciliación laboral: modelo y cuándo usarla",
    slug: "acta-no-conciliacion-laboral",
  },
  {
    title: "Carta de conciliación en Colombia: modelo y cómo redactarla",
    slug: "carta-conciliacion",
  },
  {
    title: "Acta de conciliación civil: ejemplo práctico",
    slug: "acta-civil",
  },
  {
    title: "Acta de conciliación familiar: modelo y recomendaciones legales",
    slug: "documento-familia",
  },
  {
    title: "Amigable composición en Colombia: qué es y cómo funciona",
    slug: "amigable-composicion",
  },
  {
    title: "Audiencia de conciliación en Colombia: cómo funciona paso a paso",
    slug: "audiencia",
  },
  {
    title: "Poder para audiencia de conciliación: modelo listo para usar",
    slug: "poder",
  },
  {
    title: "Citación a audiencia de conciliación: modelo y ejemplo",
    slug: "citacion",
  },
];

export default function BlogContent() {
  const allPosts = [...generalPosts, ...juridicoPosts];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Conciliación en Colombia",
    description:
      "Artículos jurídicos sobre conciliación extrajudicial en Colombia, modelos de actas, audiencias de conciliación y fundamentos legales.",
    url: "https://solcentrodeconciliacion.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
      logo: {
        "@type": "ImageObject",
        url: "https://solcentrodeconciliacion.com/logo.png",
      },
    },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://solcentrodeconciliacion.com/blog/${post.slug}`,
    })),
  };

  return (
    <section className={styles.blogSection}>
      {/* ================= SEO SCHEMA DINÁMICO ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.header}>
        <h3 className={styles.subtitle}>
          Conciliación en Colombia: guía práctica para resolver conflictos sin
          demanda
        </h3>
        <h2 className={styles.heading}>
          Aprende conciliación paso a paso y evita procesos judiciales
        </h2>
      </div>

      {/* ================= SECCIÓN 1 ================= */}
      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={styles.badges}>
            <span>Guía práctica</span>
            <span>Inicio rápido</span>
          </div>

          <h3>Guía completa de conciliación en Colombia</h3>

          <p>
            Conoce los fundamentos del proceso de conciliación, cuándo conviene
            acudir y cómo funciona el trámite de manera práctica.
          </p>
        </div>

        <div className={styles.grid}>
          {generalPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <h4>{post.title}</h4>
                  <span className={styles.readMore}>Leer guía →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= SECCIÓN 2 ================= */}
      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={`${styles.badges} ${styles.juridicoBadges}`}>
            <span>Modelos legales</span>
            <span>Ejemplos reales</span>
          </div>

          <h3>Modelos, actas y fundamentos legales de conciliación</h3>

          <p>
            Profundiza en los efectos legales de la conciliación, el valor del
            acta, el cumplimiento y los aspectos probatorios relevantes.
          </p>
        </div>

        <div className={styles.grid}>
          {juridicoPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <h4>{post.title}</h4>
                  <span className={styles.readMore}>Ver modelo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
