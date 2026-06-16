"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MecanismosAlternativosConflictosContent() {
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
          <span className={styles.badge}>Conciliación y MASC en Colombia</span>

          <h1 className={styles.title}>
            Mecanismos alternativos de solución de conflictos
          </h1>

          <p className={styles.heroText}>
            Los Mecanismos Alternativos de Solución de Conflictos (MASC) en
            Colombia son herramientas legales que permiten resolver disputas sin
            necesidad de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Son una forma rápida, económica y efectiva de acceder a la justicia.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué son los MASC?</h2>

          <p className={styles.paragraph}>
            Son mecanismos jurídicos que permiten a las personas resolver sus
            conflictos mediante el diálogo, la negociación o la intervención de
            un tercero neutral.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es evitar procesos judiciales largos y costosos.
          </p>
        </div>

        {/* PRINCIPALES MASC */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales mecanismos en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>
              <p>Un tercero facilita el acuerdo entre las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mediación</h3>
              <p>Intervención de un mediador que ayuda a dialogar.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arbitraje</h3>
              <p>Un árbitro toma una decisión obligatoria para las partes.</p>
            </div>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Ventajas de los MASC</h2>

          <ul className={styles.list}>
            <li>Reducen costos frente a un proceso judicial.</li>
            <li>Son más rápidos que un juicio.</li>
            <li>Promueven el diálogo entre las partes.</li>
            <li>Descongestionan el sistema judicial.</li>
            <li>Pueden tener efectos legales vinculantes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Los MASC fortalecen el acceso a la justicia en Colombia sin
              necesidad de procesos judiciales tradicionales.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuándo se usan los MASC?</h2>

          <p className={styles.paragraph}>
            Se utilizan cuando las partes desean resolver un conflicto de forma
            voluntaria sin acudir a un juez.
          </p>

          <ul className={styles.list}>
            <li>Conflictos laborales.</li>
            <li>Problemas de arrendamiento.</li>
            <li>Conflictos civiles y comerciales.</li>
            <li>Disputas familiares o comunitarias.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia de los MASC</h2>

          <p className={styles.paragraph}>
            Los MASC son fundamentales para la justicia moderna porque permiten
            resolver conflictos de manera eficiente y pacífica.
          </p>

          <p className={styles.paragraph}>
            Además, fomentan la cultura del diálogo en la sociedad.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Los MASC reemplazan a los jueces?</h3>
              <p>No, son una alternativa al proceso judicial.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son obligatorios?</h3>
              <p>No, son voluntarios en la mayoría de casos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Tienen validez legal?</h3>
              <p>Sí, especialmente la conciliación y el arbitraje.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres resolver tu conflicto sin juicio?
          </h3>

          <p className={styles.ctaText}>
            Los MASC pueden ayudarte a resolver tu problema de forma rápida,
            legal y eficiente en Colombia.
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
