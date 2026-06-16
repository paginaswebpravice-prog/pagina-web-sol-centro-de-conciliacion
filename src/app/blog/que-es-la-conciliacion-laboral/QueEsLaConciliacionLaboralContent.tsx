"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            ¿Qué es la conciliación laboral en Colombia?
          </h1>

          <p className={styles.heroText}>
            La conciliación laboral en Colombia es un mecanismo de solución de
            conflictos mediante el cual trabajadores y empleadores pueden llegar
            a acuerdos voluntarios sin necesidad de acudir inmediatamente a un
            proceso judicial laboral.
          </p>

          <p className={styles.heroText}>
            Este procedimiento permite resolver controversias relacionadas con
            salarios, prestaciones sociales, liquidaciones, indemnizaciones,
            vacaciones y otras obligaciones derivadas de la relación laboral.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral se desarrolla mediante una audiencia en la
            que participan el trabajador, el empleador y un conciliador
            autorizado.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, las partes exponen sus posiciones y buscan una
            solución mutuamente beneficiosa que permita poner fin al conflicto.
          </p>

          <div className={styles.highlightBox}>
            <p>
              El conciliador no impone una decisión. Su función consiste en
              facilitar el diálogo y promover acuerdos ajustados a la ley.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos laborales que pueden conciliarse
          </h2>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Vacaciones.</li>
            <li>Liquidaciones laborales.</li>
            <li>Indemnizaciones.</li>
            <li>Bonificaciones.</li>
            <li>Auxilios y beneficios laborales.</li>
            <li>Acuerdos de terminación de contrato.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>
              <p>
                Permite solucionar conflictos en menos tiempo que un proceso
                judicial laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>
              <p>
                Reduce gastos asociados a litigios y representación judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>
              <p>
                Las partes pueden construir soluciones adaptadas a sus
                necesidades.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿La conciliación laboral tiene validez legal?
          </h2>

          <p className={styles.paragraph}>
            Sí. Cuando se alcanza un acuerdo, este se incorpora en un acta de
            conciliación que tiene efectos jurídicos y puede hacerse cumplir
            legalmente en caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación laboral es una herramienta segura y
            ampliamente utilizada en Colombia para resolver conflictos entre
            trabajadores y empleadores.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar?</h3>
              <p>
                Depende del caso, pero suele ser una alternativa recomendada
                antes de acudir a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede hacerse virtualmente?</h3>
              <p>
                Sí. Muchos centros de conciliación ofrecen audiencias virtuales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Las partes conservan la posibilidad de acudir ante la
                jurisdicción laboral.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto laboral?
          </h3>

          <p className={styles.ctaText}>
            Te orientamos en procesos de conciliación laboral para trabajadores
            y empleadores en Bogotá y toda Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
