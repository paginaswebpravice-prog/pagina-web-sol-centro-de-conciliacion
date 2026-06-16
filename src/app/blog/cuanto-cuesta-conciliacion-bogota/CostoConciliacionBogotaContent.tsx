"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CostoConciliacionBogotaContent() {
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
          <span className={styles.badge}>Costos en Colombia</span>

          <h1 className={styles.title}>
            ¿Cuánto cuesta una conciliación en Bogotá?
          </h1>

          <p className={styles.heroText}>
            El costo de una conciliación en Bogotá puede variar dependiendo del
            tipo de caso, la entidad donde se realice y la cuantía del
            conflicto.
          </p>

          <p className={styles.heroText}>
            En algunos casos incluso puede ser gratuita.
          </p>
        </div>

        {/* GENERAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿La conciliación tiene costo?</h2>

          <p className={styles.paragraph}>
            Sí, en muchos centros de conciliación puede existir un costo
            administrativo o de trámite.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, también existen entidades donde el servicio es gratuito
            o de bajo costo.
          </p>
        </div>

        {/* FACTORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Factores que influyen en el costo</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Tipo de conflicto</h3>
              <p>No es lo mismo un caso civil, laboral o de arrendamiento.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuantía del caso</h3>
              <p>
                El valor económico del conflicto puede influir en la tarifa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entidad conciliadora</h3>
              <p>
                Notarías, centros privados o públicos manejan tarifas distintas.
              </p>
            </div>
          </div>
        </div>

        {/* RANGOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Rangos generales de costos en Bogotá
          </h2>

          <ul className={styles.list}>
            <li>Centros privados: tarifas variables según el caso.</li>
            <li>Notarías: costos regulados por tabla de tarifas.</li>
            <li>Consultorios jurídicos: generalmente gratuitos.</li>
            <li>Entidades públicas: pueden ser gratuitas o de bajo costo.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El valor final depende de la complejidad del conflicto y de la
              entidad donde se realice la conciliación.
            </p>
          </div>
        </div>

        {/* QUIEN PAGA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quién paga la conciliación?</h2>

          <p className={styles.paragraph}>
            Generalmente, las partes pueden acordar cómo asumir el costo del
            proceso.
          </p>

          <p className={styles.paragraph}>
            En algunos casos cada parte paga la mitad, o una sola parte asume el
            total según lo acordado.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia del costo en la conciliación
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales beneficios de la conciliación es que sigue
            siendo mucho más económica que un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Además, permite resolver conflictos de forma rápida sin altos costos
            legales.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puede ser gratis la conciliación?</h3>
              <p>Sí, en consultorios jurídicos y entidades públicas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es más barato que un juicio?</h3>
              <p>
                Sí, la conciliación reduce significativamente los costos
                legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El costo es fijo?</h3>
              <p>No, depende del tipo de caso y la entidad.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres conocer el costo de tu caso?
          </h3>

          <p className={styles.ctaText}>
            Te orientamos sobre el valor aproximado de tu conciliación en Bogotá
            según tu tipo de conflicto.
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
