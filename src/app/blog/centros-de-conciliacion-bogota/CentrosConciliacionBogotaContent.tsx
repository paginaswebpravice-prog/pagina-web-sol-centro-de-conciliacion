"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionBogotaContent() {
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
          <span className={styles.badge}>Conciliación en Bogotá</span>

          <h1 className={styles.title}>Centros de conciliación en Bogotá</h1>

          <p className={styles.heroText}>
            Los centros de conciliación en Bogotá son entidades autorizadas por
            el Estado para facilitar la resolución de conflictos sin necesidad
            de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Allí se pueden resolver conflictos civiles, laborales, familiares y
            comerciales mediante acuerdos legales.
          </p>
        </div>

        {/* QUE SON */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los centros de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Son entidades autorizadas por el Ministerio de Justicia donde un
            conciliador ayuda a las partes a llegar a un acuerdo voluntario y
            legalmente válido.
          </p>

          <p className={styles.paragraph}>
            En Bogotá, estos centros hacen parte del sistema de MASC (Mecanismos
            Alternativos de Solución de Conflictos).
          </p>
        </div>

        {/* DONDE ACUDIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde acudir en Bogotá?</h2>

          <ul className={styles.list}>
            <li>
              Centros de conciliación autorizados por el Ministerio de Justicia.
            </li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas para conciliación.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples opciones legales para iniciar un
              proceso de conciliación sin necesidad de acudir a un juez.
            </p>
          </div>
        </div>

        {/* TIPOS DE CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos que se pueden conciliar en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>
              <p>Deudas, contratos y obligaciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos laborales</h3>
              <p>Salarios, liquidaciones y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos de arrendamiento</h3>
              <p>Problemas entre arrendador e inquilino.</p>
            </div>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de acudir a un centro de conciliación
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales largos.</li>
            <li>Reduce costos legales.</li>
            <li>Permite soluciones rápidas.</li>
            <li>Los acuerdos tienen validez jurídica.</li>
            <li>Promueve el diálogo entre las partes.</li>
          </ul>
        </div>

        {/* IMPORTANCIA BOGOTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            Bogotá es una de las ciudades con mayor demanda de servicios
            legales, por lo que los centros de conciliación ayudan a
            descongestionar la justicia ordinaria.
          </p>

          <p className={styles.paragraph}>
            Además, facilitan el acceso a soluciones rápidas y efectivas para
            los ciudadanos.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado para conciliar?</h3>
              <p>
                No es obligatorio, aunque puede ser recomendable en casos
                complejos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto dura el proceso?</h3>
              <p>Generalmente se resuelve en una sola audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas un centro de conciliación en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a iniciar tu proceso de conciliación de forma rápida,
            legal y segura en Bogotá.
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
