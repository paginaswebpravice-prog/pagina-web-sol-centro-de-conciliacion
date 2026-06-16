"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PropiedadHorizontalContent() {
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
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>
            Conciliación en propiedad horizontal en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos en propiedad horizontal son muy comunes en conjuntos
            residenciales y edificios en Colombia. Estos problemas pueden surgir
            entre vecinos, administración y copropietarios.
          </p>

          <p className={styles.heroText}>
            La conciliación es una herramienta efectiva para resolver estos
            conflictos de manera rápida, legal y sin necesidad de procesos
            judiciales largos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la propiedad horizontal?</h2>

          <p className={styles.paragraph}>
            La propiedad horizontal es el régimen jurídico que regula edificios
            y conjuntos residenciales donde existen áreas privadas y áreas
            comunes compartidas entre copropietarios.
          </p>

          <p className={styles.paragraph}>
            En Colombia, este régimen establece normas de convivencia,
            administración y uso de las zonas comunes.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos más comunes en propiedad horizontal
          </h2>

          <ul className={styles.list}>
            <li>Problemas entre vecinos por ruido o convivencia.</li>
            <li>Deudas de administración o expensas comunes.</li>
            <li>Uso indebido de zonas comunes.</li>
            <li>Conflictos con la administración del conjunto.</li>
            <li>Sanciones internas o reglamentos de convivencia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, muchos de estos conflictos pueden resolverse mediante
              conciliación sin acudir a procesos judiciales.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de la conciliación</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mejora la convivencia</h3>
              <p>
                Permite resolver conflictos entre vecinos de forma pacífica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita procesos legales</h3>
              <p>Reduce la necesidad de demandas en juzgados civiles.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>El acta de conciliación tiene validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes involucradas pueden acudir a un centro de conciliación en
            Colombia para exponer el conflicto y buscar una solución amigable.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este queda consignado en un acta con efectos legales
            obligatorios.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de convivencia entre vecinos.</li>
            <li>Pagos de administración pendientes.</li>
            <li>Compensaciones por daños.</li>
            <li>Regulación del uso de zonas comunes.</li>
            <li>Resolución de sanciones internas.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden resolver conflictos entre vecinos?</h3>
              <p>
                Sí, mediante conciliación se pueden resolver conflictos de
                convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La administración puede conciliar?</h3>
              <p>
                Sí, la administración puede participar en procesos de
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio ir a juicio?</h3>
              <p>
                No, la conciliación es una alternativa previa al proceso
                judicial.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes conflictos en tu conjunto residencial?
          </h3>

          <p className={styles.ctaText}>
            Resuelve problemas de propiedad horizontal mediante conciliación
            rápida, legal y efectiva en Colombia.
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
