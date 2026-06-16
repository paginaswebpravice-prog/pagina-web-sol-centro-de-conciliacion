"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliadoresDerechoEquidadContent() {
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
            Conciliadores en derecho y en equidad
          </h1>

          <p className={styles.heroText}>
            En Colombia existen dos tipos principales de conciliadores: los
            conciliadores en derecho y los conciliadores en equidad. Ambos
            cumplen funciones similares, pero con enfoques diferentes.
          </p>

          <p className={styles.heroText}>
            La principal diferencia está en la forma en que abordan la solución
            del conflicto.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un conciliador en derecho?
          </h2>

          <p className={styles.paragraph}>
            Es un profesional del derecho que aplica normas jurídicas y
            principios legales para orientar el acuerdo entre las partes.
          </p>

          <p className={styles.paragraph}>
            Generalmente es un abogado capacitado y acreditado.
          </p>
        </div>

        {/* CONCILIADOR EN EQUIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un conciliador en equidad?
          </h2>

          <p className={styles.paragraph}>
            Es una persona de la comunidad que ayuda a resolver conflictos
            basándose en la justicia, la equidad y el sentido común.
          </p>

          <p className={styles.paragraph}>
            No necesariamente es abogado, pero está capacitado para facilitar
            acuerdos.
          </p>
        </div>

        {/* DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Diferencias principales</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Enfoque</h3>
              <p>
                Derecho: normas jurídicas. Equidad: justicia y sentido común.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Formación</h3>
              <p>Derecho: abogado. Equidad: líder comunitario capacitado.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Formalidad</h3>
              <p>Derecho: más formal. Equidad: más flexible.</p>
            </div>
          </div>
        </div>

        {/* SIMILITUDES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué tienen en común?</h2>

          <ul className={styles.list}>
            <li>Buscan resolver conflictos de manera voluntaria.</li>
            <li>Facilitan acuerdos entre las partes.</li>
            <li>Pueden generar actas con valor legal.</li>
            <li>Evitan procesos judiciales largos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Ambos tipos de conciliadores buscan promover el diálogo y la
              solución pacífica de conflictos en Colombia.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuándo se usa cada uno?</h2>

          <ul className={styles.list}>
            <li>Derecho: conflictos jurídicos o contractuales complejos.</li>
            <li>Equidad: conflictos comunitarios o de convivencia.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia de ambos roles</h2>

          <p className={styles.paragraph}>
            Ambos tipos de conciliadores fortalecen el acceso a la justicia en
            Colombia y reducen la congestión judicial.
          </p>

          <p className={styles.paragraph}>
            Permiten resolver conflictos de manera más rápida y eficiente.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Cuál es más usado?</h3>
              <p>
                El conciliador en derecho es el más común en procesos formales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El conciliador en equidad es legal?</h3>
              <p>
                Sí, está reconocido dentro del sistema de justicia en Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuál es mejor?</h3>
              <p>Depende del tipo de conflicto y del contexto.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Necesitas resolver un conflicto?</h3>

          <p className={styles.ctaText}>
            Un conciliador en derecho o en equidad puede ayudarte a resolver tu
            caso sin necesidad de juicio.
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
