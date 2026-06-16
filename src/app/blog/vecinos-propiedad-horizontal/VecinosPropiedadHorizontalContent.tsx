"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function VecinosPropiedadHorizontalContent() {
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
          <span className={styles.badge}>
            Conciliación en propiedad horizontal
          </span>

          <h1 className={styles.title}>
            Conflictos entre vecinos en propiedad horizontal en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre vecinos en conjuntos residenciales son uno de
            los problemas más frecuentes en la propiedad horizontal en Colombia.
            Estas situaciones afectan la convivencia y la calidad de vida.
          </p>

          <p className={styles.heroText}>
            La conciliación es una herramienta efectiva para resolver estos
            conflictos de forma pacífica, rápida y con validez legal.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los conflictos entre vecinos?
          </h2>

          <p className={styles.paragraph}>
            Son desacuerdos que surgen entre personas que viven en un mismo
            edificio o conjunto residencial debido a la convivencia diaria y el
            uso de espacios compartidos.
          </p>

          <p className={styles.paragraph}>
            En Colombia, estos conflictos pueden resolverse mediante mecanismos
            como la conciliación antes de escalar a procesos legales.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos más comunes entre vecinos
          </h2>

          <ul className={styles.list}>
            <li>Ruidos excesivos o molestias constantes.</li>
            <li>Problemas con mascotas.</li>
            <li>Uso indebido de zonas comunes.</li>
            <li>Disputas por parqueaderos.</li>
            <li>Basuras o higiene en áreas compartidas.</li>
            <li>Actitudes de convivencia conflictiva.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, muchos de estos problemas pueden resolverse sin
              necesidad de llegar a instancias judiciales mediante conciliación.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación entre vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mejora la convivencia</h3>
              <p>
                Ayuda a restablecer relaciones entre vecinos de forma pacífica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita conflictos legales</h3>
              <p>Reduce la necesidad de demandas o procesos judiciales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>Los acuerdos tienen validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para exponer el conflicto y buscar una solución amigable.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este queda registrado en un acta con efectos legales
            obligatorios.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de convivencia.</li>
            <li>Compromisos de respeto de horarios.</li>
            <li>Regulación del uso de zonas comunes.</li>
            <li>Compensaciones por daños o molestias.</li>
            <li>Acuerdos entre vecinos para resolver conflictos.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden resolver problemas de ruido?</h3>
              <p>
                Sí, mediante conciliación se pueden establecer acuerdos de
                convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar?</h3>
              <p>
                No, pero es una alternativa recomendada antes de procesos
                legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>Se puede acudir a instancias judiciales o administrativas.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes problemas con tus vecinos?
          </h3>

          <p className={styles.ctaText}>
            Resuelve conflictos de convivencia mediante conciliación en
            propiedad horizontal en Colombia.
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
