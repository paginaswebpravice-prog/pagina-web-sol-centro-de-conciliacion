"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ValorJuridicoActaConciliacionContent() {
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
            ¿Qué valor jurídico tiene un acta de conciliación?
          </h1>

          <p className={styles.heroText}>
            El acta de conciliación en Colombia es un documento con plena
            validez jurídica que formaliza los acuerdos alcanzados entre las
            partes dentro de un proceso de conciliación.
          </p>

          <p className={styles.heroText}>
            Este documento tiene efectos legales importantes y puede ser exigido
            judicialmente en caso de incumplimiento.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es un acta de conciliación?</h2>

          <p className={styles.paragraph}>
            Es el documento oficial que deja constancia del acuerdo al que
            llegan las partes dentro de una audiencia de conciliación.
          </p>

          <p className={styles.paragraph}>
            Este documento es firmado por las partes y el conciliador
            autorizado.
          </p>
        </div>

        {/* VALOR JURIDICO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Valor jurídico del acta de conciliación
          </h2>

          <ul className={styles.list}>
            <li>Tiene fuerza de cosa juzgada.</li>
            <li>Es de obligatorio cumplimiento para las partes.</li>
            <li>Puede ser ejecutada judicialmente.</li>
            <li>Evita que el conflicto sea llevado nuevamente a juicio.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, el acta de conciliación tiene el mismo efecto que una
              sentencia judicial cuando existe acuerdo entre las partes.
            </p>
          </div>
        </div>

        {/* EFECTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Efectos legales del acta de conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cosa juzgada</h3>
              <p>Lo conciliado no puede volver a discutirse judicialmente.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fuerza ejecutiva</h3>
              <p>Puede exigirse su cumplimiento ante un juez.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligatoriedad</h3>
              <p>Las partes deben cumplir lo acordado.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Por qué es tan importante?</h2>

          <p className={styles.paragraph}>
            El acta de conciliación garantiza seguridad jurídica y permite
            resolver conflictos sin necesidad de procesos judiciales largos y
            costosos.
          </p>

          <p className={styles.paragraph}>
            Además, protege los derechos de ambas partes al formalizar el
            acuerdo.
          </p>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se cumple el acta?
          </h2>

          <ul className={styles.list}>
            <li>Se puede iniciar un proceso ejecutivo.</li>
            <li>El juez puede ordenar su cumplimiento forzado.</li>
            <li>Se generan consecuencias legales para el incumplido.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El acta de conciliación es obligatoria?</h3>
              <p>Sí, una vez firmada tiene carácter obligatorio.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede anular un acta de conciliación?</h3>
              <p>Solo en casos excepcionales como vicios del consentimiento.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Tiene el mismo valor que una sentencia?</h3>
              <p>Sí, produce efectos de cosa juzgada.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas hacer valer un acta de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Recibe asesoría para hacer cumplir acuerdos de conciliación y
            proteger tus derechos en Colombia.
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
