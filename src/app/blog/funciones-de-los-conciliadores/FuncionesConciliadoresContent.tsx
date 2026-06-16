"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function FuncionesConciliadoresContent() {
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

          <h1 className={styles.title}>Funciones de los conciliadores</h1>

          <p className={styles.heroText}>
            Los conciliadores en Colombia cumplen un rol fundamental dentro del
            proceso de conciliación, ya que facilitan el diálogo entre las
            partes para resolver conflictos de manera voluntaria y legal.
          </p>

          <p className={styles.heroText}>
            Su función principal no es decidir, sino guiar a las partes hacia un
            acuerdo justo.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué hace un conciliador?</h2>

          <p className={styles.paragraph}>
            El conciliador es un tercero neutral e imparcial que interviene en
            un conflicto para ayudar a las partes a llegar a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Su papel es clave dentro de los mecanismos alternativos de solución
            de conflictos en Colombia.
          </p>
        </div>

        {/* FUNCIONES PRINCIPALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Funciones principales del conciliador
          </h2>

          <ul className={styles.list}>
            <li>Facilitar la comunicación entre las partes.</li>
            <li>Promover acuerdos voluntarios.</li>
            <li>Garantizar un ambiente neutral.</li>
            <li>Explicar el proceso de conciliación.</li>
            <li>Redactar el acta de conciliación.</li>
            <li>Verificar la legalidad del acuerdo.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El conciliador no impone decisiones, su función es facilitar el
              acuerdo entre las partes.
            </p>
          </div>
        </div>

        {/* LIMITACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Lo que NO puede hacer un conciliador
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No decide el conflicto</h3>
              <p>No actúa como juez ni impone soluciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>No favorece a ninguna parte</h3>
              <p>Debe ser completamente imparcial.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>No obliga a conciliar</h3>
              <p>El acuerdo siempre es voluntario.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia del conciliador</h2>

          <p className={styles.paragraph}>
            El conciliador permite que las partes encuentren soluciones sin
            necesidad de acudir a un juez, reduciendo tiempos y costos.
          </p>

          <p className={styles.paragraph}>
            Además, garantiza que el proceso sea justo, equilibrado y legal.
          </p>
        </div>

        {/* CARACTERISTICAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Características del conciliador</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Imparcialidad</h3>
              <p>No toma partido en el conflicto.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Neutralidad</h3>
              <p>No influye en beneficio de ninguna parte.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Capacitación</h3>
              <p>Debe estar formado y acreditado legalmente.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El conciliador decide el caso?</h3>
              <p>No, solo facilita el acuerdo entre las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debe ser abogado?</h3>
              <p>En la mayoría de casos sí, o estar debidamente acreditado.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio aceptar lo que diga?</h3>
              <p>No, todo depende del acuerdo voluntario.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas un proceso de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Un conciliador puede ayudarte a resolver tu conflicto de forma
            rápida, legal y sin procesos judiciales largos.
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
