"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ArbitrajeVsConciliacionContent() {
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
          <span className={styles.badge}>MASC en Colombia</span>

          <h1 className={styles.title}>Arbitraje vs conciliación</h1>

          <p className={styles.heroText}>
            El arbitraje y la conciliación son dos mecanismos alternativos de
            solución de conflictos en Colombia, pero funcionan de manera muy
            diferente.
          </p>

          <p className={styles.heroText}>
            Ambos buscan evitar procesos judiciales, pero el resultado y la
            forma de decisión cambian significativamente.
          </p>
        </div>

        {/* DEFINICIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo en el que las partes intentan llegar a un acuerdo
            voluntario con la ayuda de un conciliador neutral.
          </p>

          <p className={styles.paragraph}>
            El conciliador no decide el conflicto, solo facilita el diálogo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es el arbitraje?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo en el que un tercero llamado árbitro toma una
            decisión obligatoria para las partes.
          </p>

          <p className={styles.paragraph}>
            Esa decisión tiene efectos similares a una sentencia judicial.
          </p>
        </div>

        {/* DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Diferencias principales</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Decisión</h3>
              <p>
                Conciliación: acuerdo voluntario. Arbitraje: decisión
                obligatoria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Tercero</h3>
              <p>Conciliador facilita. Árbitro decide.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Resultado</h3>
              <p>Conciliación: acta de acuerdo. Arbitraje: laudo arbitral.</p>
            </div>
          </div>
        </div>

        {/* SIMILITUDES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿En qué se parecen?</h2>

          <ul className={styles.list}>
            <li>Ambos evitan procesos judiciales largos.</li>
            <li>Son mecanismos alternativos de solución de conflictos.</li>
            <li>Son más rápidos que un juicio tradicional.</li>
            <li>Buscan eficiencia en la resolución de disputas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Tanto el arbitraje como la conciliación fortalecen el acceso a la
              justicia en Colombia.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuándo usar cada uno?</h2>

          <ul className={styles.list}>
            <li>
              Conciliación: cuando las partes quieren negociar un acuerdo.
            </li>
            <li>Arbitraje: cuando se requiere una decisión definitiva.</li>
          </ul>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Ventajas de cada mecanismo</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>
              <p>Flexible, voluntaria y rápida.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arbitraje</h3>
              <p>Decisión definitiva y con fuerza legal.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ambos</h3>
              <p>Evitan congestión judicial.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Colombia</h2>

          <p className={styles.paragraph}>
            Estos mecanismos permiten resolver conflictos de forma más eficiente
            y descongestionar el sistema judicial colombiano.
          </p>

          <p className={styles.paragraph}>
            Además, promueven la cultura del diálogo y la solución pacífica de
            conflictos.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El arbitraje reemplaza un juicio?</h3>
              <p>Sí, su decisión tiene efectos similares a una sentencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>No, depende de la voluntad de las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuál es más usado?</h3>
              <p>La conciliación es más común en conflictos cotidianos.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Necesitas resolver un conflicto?</h3>

          <p className={styles.ctaText}>
            Elige el mecanismo adecuado entre arbitraje y conciliación para
            resolver tu caso de forma eficiente en Colombia.
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
