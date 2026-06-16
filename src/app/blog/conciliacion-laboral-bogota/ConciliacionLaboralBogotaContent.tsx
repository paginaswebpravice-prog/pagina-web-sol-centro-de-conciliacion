"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionLaboralBogotaContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>Conciliación laboral en Bogotá</h1>

          <p className={styles.heroText}>
            La conciliación laboral en Bogotá es un mecanismo que permite
            resolver conflictos entre empleadores y trabajadores sin necesidad
            de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Es una alternativa rápida, económica y con plena validez jurídica en
            Colombia.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación laboral?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo de solución de conflictos donde las partes laborales
            buscan llegar a un acuerdo voluntario con la ayuda de un conciliador
            autorizado.
          </p>

          <p className={styles.paragraph}>
            Se utiliza para evitar procesos largos ante la jurisdicción laboral.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Casos más comunes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>
              <p>Pagos no realizados o diferencias en nómina.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidaciones laborales</h3>
              <p>Desacuerdos al finalizar el contrato de trabajo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>
              <p>Cesantías, primas y demás beneficios laborales.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Permite acuerdos rápidos.</li>
            <li>Tiene validez jurídica en Colombia.</li>
            <li>Facilita soluciones amistosas.</li>
          </ul>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde se realiza en Bogotá?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples entidades donde se pueden resolver
              conflictos laborales de forma legal y segura.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            La conciliación laboral ayuda a descongestionar los juzgados
            laborales en Bogotá y permite soluciones más rápidas para
            trabajadores y empleadores.
          </p>

          <p className={styles.paragraph}>
            Además, fomenta acuerdos justos y evita procesos judiciales
            extensos.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar un despido?</h3>
              <p>Sí, especialmente temas económicos asociados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar?</h3>
              <p>En muchos casos sí es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es válido?</h3>
              <p>Sí, tiene plena validez jurídica.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolverlo mediante conciliación de forma rápida y
            legal en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
