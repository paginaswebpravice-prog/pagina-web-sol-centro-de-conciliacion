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
    title: "¿Qué es la conciliación y para qué sirve?",
    slug: "que-es-la-conciliacion",
  },
  { title: "Cuándo conviene conciliar", slug: "cuando-conviene-conciliar" },
  {
    title: "¿Qué asuntos se pueden conciliar?",
    slug: "que-asuntos-se-pueden-conciliar",
  },
  { title: "Paso a paso del trámite", slug: "paso-a-paso-del-tramite" },
  {
    title: "Documentos y evidencia útil",
    slug: "documentos-y-evidencia-util",
  },
  {
    title: "Cómo es la audiencia: presencial o virtual",
    slug: "como-es-la-audiencia",
  },
  {
    title: "Acta de conciliación: efectos y cumplimiento",
    slug: "acta-de-conciliacion-efectos-y-cumplimiento",
  },
  {
    title: "Errores comunes y cómo evitarlos",
    slug: "errores-comunes-y-como-evitarlos",
  },
  { title: "Preguntas frecuentes", slug: "preguntas-frecuentes" },
];

/* =========================
   SECCIÓN 2 – JURÍDICA
========================= */

const juridicoPosts: BlogPost[] = [
  {
    title: "Modelo de acta de conciliación (general)",
    slug: "modelo-acta-conciliacion",
  },
  {
    title: "Actas de conciliación: ejemplos y recomendaciones",
    slug: "actas-ejemplos",
  },
  {
    title: "Acta de conciliación de alimentos (con ejemplo) + Art. 411 C.C.",
    slug: "acta-alimentos",
  },
  {
    title: "Acta/constancia de no conciliación laboral (modelo)",
    slug: "acta-no-conciliacion-laboral",
  },
  {
    title: "Carta de conciliación (modelo)",
    slug: "carta-conciliacion",
  },
  {
    title: "Acta de conciliación civil (modelo)",
    slug: "acta-civil",
  },
  {
    title: "Documento/acta de conciliación familiar (modelo)",
    slug: "documento-familia",
  },
  {
    title:
      "Amigable composición en Colombia: qué es, características y amigable componedor",
    slug: "amigable-composicion",
  },
  {
    title: "Audiencia de conciliación: cómo funciona",
    slug: "audiencia",
  },
  {
    title: "Poder para asistir a audiencia de conciliación (modelo)",
    slug: "poder",
  },
  {
    title: "Citación a audiencia de conciliación (modelo)",
    slug: "citacion",
  },
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>
          Conciliación en Colombia: guía completa para llegar a un acuerdo con
          validez legal
        </h3>
        <h2 className={styles.heading}>Centro de Conciliación</h2>
      </div>

      {/* =========================
          SECCIÓN 1
      ========================= */}
      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={styles.badges}>
            <span>Guía básica</span>
            <span>Información general</span>
          </div>

          <h3>Aspectos generales sobre conciliación</h3>

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
                  <span className={styles.readMore}>Leer artículo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================
          SECCIÓN 2
      ========================= */}
      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={`${styles.badges} ${styles.juridicoBadges}`}>
            <span>Marco legal</span>
            <span>Aspectos jurídicos</span>
          </div>

          <h3>Fundamento jurídico y efectos legales</h3>

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
                  <span className={styles.readMore}>Leer artículo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
