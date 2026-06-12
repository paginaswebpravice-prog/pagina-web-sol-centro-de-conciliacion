"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blog.module.css";

import { categories } from "./article";

export default function BlogContent() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h3 className={styles.subtitle}>
          Conciliación en Colombia: guías legales, modelos y resolución de
          conflictos
        </h3>

        <h1 className={styles.heading}>
          Aprende conciliación paso a paso y evita procesos judiciales
        </h1>

        <p className={styles.intro}>
          Explora artículos jurídicos, modelos de actas, audiencias y guías
          prácticas sobre conciliación extrajudicial en Colombia.
        </p>
      </div>

      <div className={styles.categoryNav}>
        {categories.map((category) => (
          <a key={category.id} href={`#${category.id}`}>
            {category.title}
          </a>
        ))}
      </div>

      {categories.map((category) => (
        <div key={category.id} id={category.id} className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <div className={styles.badges}>
              {category.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <h2>{category.title}</h2>

            <p>{category.description}</p>
          </div>

          <div className={styles.grid}>
            {category.posts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`} className={styles.card}>
                  <div className={styles.cardContent}>
                    <h3>{post.title}</h3>

                    <p>{post.excerpt}</p>

                    <span className={styles.readMore}>
                      {category.buttonText}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
