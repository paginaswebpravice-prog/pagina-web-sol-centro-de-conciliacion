"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionInmobiliariaContent() {
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
            Conciliación inmobiliaria en Colombia
          </h1>

          <p className={styles.heroText}>
            La conciliación inmobiliaria en Colombia es un mecanismo alternativo
            para resolver conflictos relacionados con bienes inmuebles sin
            necesidad de acudir a procesos judiciales largos y costosos.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite llegar a acuerdos legales entre las partes de
            forma rápida, eficiente y con plena validez jurídica.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación inmobiliaria?
          </h2>

          <p className={styles.paragraph}>
            Es un proceso en el que dos o más partes buscan resolver conflictos
            relacionados con bienes inmuebles con la ayuda de un conciliador
            autorizado en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es evitar procesos judiciales y promover acuerdos
            voluntarios entre las partes.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos inmobiliarios más comunes
          </h2>

          <ul className={styles.list}>
            <li>Problemas de arrendamiento de inmuebles.</li>
            <li>Conflictos en propiedad horizontal.</li>
            <li>Disputas por compraventa de bienes raíces.</li>
            <li>Incumplimiento de contratos inmobiliarios.</li>
            <li>Entrega o restitución de inmuebles.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite resolver estos conflictos sin
              necesidad de acudir a un proceso judicial.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación inmobiliaria
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>
              <p>Evita procesos judiciales que pueden tardar meses o años.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>
              <p>Reduce gastos legales y administrativos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>
              <p>Los acuerdos tienen validez legal en Colombia.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes acuden a un centro de conciliación en Colombia para
            exponer el conflicto y buscar un acuerdo voluntario.
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
            <li>Acuerdos de pago.</li>
            <li>Entrega de inmuebles.</li>
            <li>Terminación de contratos.</li>
            <li>Indemnizaciones acordadas.</li>
            <li>Reparaciones o compensaciones.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar cualquier conflicto inmobiliario?</h3>
              <p>
                La mayoría de conflictos civiles relacionados con inmuebles sí
                pueden conciliarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal en Colombia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>Se puede acudir a la vía judicial correspondiente.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto inmobiliario?
          </h3>

          <p className={styles.ctaText}>
            Resuelve tus conflictos inmobiliarios mediante conciliación en
            Colombia de forma rápida, legal y efectiva.
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
