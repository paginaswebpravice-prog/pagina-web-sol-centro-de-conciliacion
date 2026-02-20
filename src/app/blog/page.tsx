"use client";

import { useState } from "react";
import styles from "./blog.module.css";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const togglePost = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>Actualidad Jurídica</h3>
        <h2 className={styles.heading}>Blog sobre Derecho Laboral</h2>
      </div>

      <div className={styles.grid}>
        {blogData.map((post, index) => (
          <motion.div
            key={post.slug}
            className={`${styles.card} ${
              activeIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div
              className={styles.cardHeader}
              onClick={() => togglePost(index)}
            >
              <h3>{post.title}</h3>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className={styles.cardContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.35 },
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: "hidden" }}
                >
                  <div className={styles.contentInner}>
                    {/* 🔥 Aquí irá el contenido real la próxima semana */}
                    <p>
                      Aquí se mostrará el contenido completo del artículo. Este
                      espacio está preparado para incluir texto, imágenes,
                      enlaces o incluso componentes personalizados.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
