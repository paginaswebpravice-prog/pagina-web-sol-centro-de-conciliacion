"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./blog.module.css";

import { categories } from "./article";

export default function BlogContent() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <span className={styles.badge}>
          BLOG JURÍDICO • CONCILIACIÓN EXTRAJUDICIAL EN COLOMBIA
        </span>

        <h1 className={styles.heading}>
          Guías completas sobre conciliación extrajudicial en Colombia, modelos
          de actas y resolución de conflictos
        </h1>

        <p className={styles.intro}>
          Encuentra artículos escritos por abogados conciliadores sobre
          conciliación civil, comercial, laboral y familiar. Aprende cuándo la
          conciliación es obligatoria, cómo funciona una audiencia, qué
          documentos necesitas, cuáles son los efectos legales de un acta de
          conciliación y cómo resolver conflictos sin acudir a un proceso
          judicial prolongado.
        </p>

        <p className={styles.introSecondary}>
          Nuestro objetivo es ofrecer información jurídica clara, actualizada y
          fácil de entender para personas, empresas y profesionales que desean
          conocer sus derechos y utilizar la conciliación como un mecanismo
          efectivo para alcanzar acuerdos con plena validez legal en Colombia.
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

      <section className={styles.learnSection}>
        <h2>¿Qué encontrarás en nuestras guías de conciliación?</h2>

        <div className={styles.learnGrid}>
          <div>
            <h3>Guías paso a paso</h3>

            <p>
              Explicaciones completas sobre cómo iniciar un proceso de
              conciliación, solicitar una audiencia y formalizar acuerdos
              legalmente válidos.
            </p>
          </div>

          <div>
            <h3>Modelos y ejemplos</h3>

            <p>
              Ejemplos de solicitudes, actas de conciliación y documentos
              utilizados con frecuencia en diferentes tipos de conflictos.
            </p>
          </div>

          <div>
            <h3>Derecho de familia</h3>

            <p>
              Artículos sobre alimentos, custodia, régimen de visitas,
              separación y demás conflictos familiares susceptibles de
              conciliación.
            </p>
          </div>

          <div>
            <h3>Derecho comercial y civil</h3>

            <p>
              Conflictos contractuales, obligaciones económicas,
              incumplimientos, arrendamientos y relaciones comerciales.
            </p>
          </div>

          <div>
            <h3>Derecho laboral</h3>

            <p>
              Liquidaciones, despidos, acreencias laborales y conciliación entre
              empleadores y trabajadores.
            </p>
          </div>

          <div>
            <h3>Actualización jurídica</h3>

            <p>
              Información actualizada sobre conciliación extrajudicial conforme
              a la legislación colombiana.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2>Preguntas frecuentes sobre conciliación en Colombia</h2>

        <div className={styles.faqItem}>
          <h3>¿Qué es la conciliación extrajudicial?</h3>

          <p>
            Es un mecanismo alternativo de solución de conflictos mediante el
            cual las partes buscan llegar a un acuerdo con la intervención de un
            conciliador.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿La conciliación tiene efectos legales?</h3>

          <p>
            Sí. El acta de conciliación presta mérito ejecutivo y hace tránsito
            a cosa juzgada en los términos establecidos por la legislación
            colombiana.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Qué conflictos pueden conciliarse?</h3>

          <p>
            Dependiendo del caso, pueden conciliarse asuntos civiles,
            comerciales, familiares, laborales, arrendamientos, obligaciones
            económicas y otros conflictos permitidos por la ley.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3>¿Es obligatorio conciliar antes de demandar?</h3>

          <p>
            En determinados asuntos sí constituye un requisito de procedibilidad
            antes de iniciar un proceso judicial.
          </p>
        </div>
      </section>
    </section>
  );
}
