"use client";

import Link from "next/link";
import styles from "./blog.module.css";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  slug: string;
};

const blogData: BlogPost[] = [
  {
    title: "Despido sin justa causa: ¿Qué hacer?",
    slug: "despido-injustificado",
  },
  { title: "Indemnización laboral en Colombia", slug: "indemnizacion-laboral" },
  { title: "Acoso laboral: cómo denunciarlo", slug: "acoso-laboral" },
  { title: "Liquidación laboral paso a paso", slug: "liquidacion-laboral" },
  { title: "Contrato a término fijo vs indefinido", slug: "tipos-contrato" },
  { title: "Horas extra y recargos nocturnos", slug: "horas-extra" },
];

export default function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Actualidad Jurídica</h3>
        <h2 className={styles.heading}>Blog sobre Derecho Laboral</h2>
      </div>

      <div className={styles.grid}>
        {blogData.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${post.slug}`} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <span className={styles.readMore}>Leer artículo →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
