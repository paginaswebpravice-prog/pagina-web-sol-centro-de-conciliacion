"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function TituloEjecutivoConciliacionContent() {
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

          <h1 className={styles.title}>Título ejecutivo y conciliación</h1>

          <p className={styles.heroText}>
            El acta de conciliación en Colombia puede constituir un título
            ejecutivo, lo que significa que permite exigir judicialmente el
            cumplimiento de lo acordado cuando una de las partes incumple.
          </p>

          <p className={styles.heroText}>
            Esto convierte la conciliación en un mecanismo con alta seguridad
            jurídica y fuerza legal directa.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es un título ejecutivo?</h2>

          <p className={styles.paragraph}>
            Es un documento que contiene una obligación clara, expresa y
            exigible que permite acudir directamente a un juez para su
            cumplimiento.
          </p>

          <p className={styles.paragraph}>
            En Colombia, el acta de conciliación es uno de los principales
            documentos que presta mérito ejecutivo.
          </p>
        </div>

        {/* ACTA COMO TITULO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Acta de conciliación como título ejecutivo
          </h2>

          <ul className={styles.list}>
            <li>Contiene obligaciones claras entre las partes.</li>
            <li>Es firmada por el conciliador y las partes.</li>
            <li>Tiene fuerza legal inmediata.</li>
            <li>Permite ejecución judicial en caso de incumplimiento.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El acta de conciliación en Colombia tiene mérito ejecutivo siempre
              que contenga obligaciones claras, expresas y exigibles.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia del título ejecutivo</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ejecutabilidad</h3>
              <p>Permite exigir el cumplimiento ante un juez.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>
              <p>Garantiza el cumplimiento de lo acordado.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Rapidez</h3>
              <p>Evita procesos declarativos largos.</p>
            </div>
          </div>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se cumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Si una de las partes incumple lo pactado en la conciliación, la otra
            puede iniciar un proceso ejecutivo ante un juez.
          </p>

          <ul className={styles.list}>
            <li>Se presenta el acta como título ejecutivo.</li>
            <li>El juez ordena el cumplimiento forzado.</li>
            <li>Pueden aplicarse medidas de embargo o ejecución.</li>
          </ul>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Diferencia con otros documentos</h2>

          <ul className={styles.list}>
            <li>Contrato: requiere pruebas adicionales en algunos casos.</li>
            <li>Sentencia: proviene de un juez.</li>
            <li>
              Acta de conciliación: nace del acuerdo entre partes pero es
              ejecutiva.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El acta siempre es título ejecutivo?</h3>
              <p>Sí, si contiene obligaciones claras, expresas y exigibles.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se necesita abogado para ejecutarla?</h3>
              <p>No es obligatorio, pero es recomendable.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede demandar si hay incumplimiento?</h3>
              <p>Sí, mediante proceso ejecutivo.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas hacer cumplir un acta de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Recibe asesoría para iniciar procesos ejecutivos y hacer valer tus
            acuerdos de conciliación en Colombia.
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
