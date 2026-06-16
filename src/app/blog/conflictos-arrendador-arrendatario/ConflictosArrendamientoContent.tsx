"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosArrendamientoContent() {
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
            Conciliación en arrendamientos en Colombia
          </span>

          <h1 className={styles.title}>
            Conflictos entre arrendador y arrendatario en Colombia
          </h1>

          <p className={styles.heroText}>
            Los contratos de arrendamiento pueden generar conflictos entre
            arrendadores y arrendatarios cuando alguna de las partes incumple
            sus obligaciones. En Colombia, estos problemas son muy comunes y
            pueden resolverse mediante conciliación.
          </p>

          <p className={styles.heroText}>
            La conciliación permite llegar a acuerdos rápidos, legales y
            efectivos sin necesidad de acudir a procesos judiciales largos o
            costosos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los conflictos de arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            Son desacuerdos que surgen entre arrendador y arrendatario
            relacionados con el cumplimiento del contrato de arrendamiento,
            especialmente en temas de pago, uso del inmueble o entrega del bien.
          </p>

          <p className={styles.paragraph}>
            Estos conflictos pueden resolverse de forma extrajudicial mediante
            mecanismos como la conciliación en Colombia.
          </p>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos más frecuentes en arrendamiento
          </h2>

          <ul className={styles.list}>
            <li>Falta de pago del canon de arrendamiento.</li>
            <li>Negativa a entregar el inmueble.</li>
            <li>Daños o deterioro del inmueble.</li>
            <li>Incumplimiento del contrato de arrendamiento.</li>
            <li>Problemas con servicios públicos.</li>
            <li>Terminación anticipada del contrato.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la mayoría de estos conflictos pueden solucionarse
              mediante conciliación antes de iniciar un proceso judicial.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué usar conciliación en estos conflictos?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Evita procesos judiciales</h3>
              <p>
                Reduce la necesidad de demandas de arrendamiento o restitución
                de inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>
              <p>
                Permite resolver conflictos en menor tiempo que un proceso
                judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo legal</h3>
              <p>
                El acta de conciliación tiene plena validez jurídica en
                Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se resuelven estos conflictos?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación autorizado en
            Colombia para exponer sus diferencias y buscar una solución
            amigable.
          </p>

          <p className={styles.paragraph}>
            Si se logra un acuerdo, este queda registrado en un acta con efectos
            legales obligatorios.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de pago de deudas de arriendo.</li>
            <li>Entrega voluntaria del inmueble.</li>
            <li>Reducción o ajuste del canon.</li>
            <li>Compensación por daños.</li>
            <li>Terminación anticipada del contrato.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Siempre se necesita un juicio?</h3>
              <p>
                No, muchos conflictos pueden resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>
                No, pero es una alternativa recomendada por ser más rápida y
                económica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Se puede acudir a un proceso judicial de arrendamiento o
                restitución de inmueble.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto de arrendamiento?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos entre arrendador y arrendatario
            mediante conciliación legal en Colombia.
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
