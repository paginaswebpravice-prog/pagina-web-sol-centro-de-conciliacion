"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RequisitosConciliacionContent() {
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
            Requisitos legales para conciliar en Colombia
          </h1>

          <p className={styles.heroText}>
            Para iniciar un proceso de conciliación en Colombia es necesario
            cumplir ciertos requisitos legales que garantizan la validez del
            acuerdo y la correcta resolución del conflicto.
          </p>

          <p className={styles.heroText}>
            La conciliación es un mecanismo formal que permite resolver disputas
            sin necesidad de acudir a un proceso judicial.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es necesario para conciliar?</h2>

          <p className={styles.paragraph}>
            Para que un conflicto pueda ser sometido a conciliación en Colombia,
            debe cumplir condiciones básicas que permitan su resolución
            extrajudicial.
          </p>

          <p className={styles.paragraph}>
            No todos los conflictos pueden conciliarse, ya que deben ser
            susceptibles de acuerdo entre las partes.
          </p>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Requisitos legales principales</h2>

          <ul className={styles.list}>
            <li>Existencia de un conflicto entre dos o más partes.</li>
            <li>Derechos disponibles (que puedan negociarse).</li>
            <li>Voluntad de las partes para conciliar.</li>
            <li>Capacidad legal para actuar.</li>
            <li>Asunto susceptible de conciliación según la ley.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, solo se pueden conciliar conflictos que la ley
              permita resolver mediante acuerdo entre las partes.
            </p>
          </div>
        </div>

        {/* QUIENES PUEDEN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quiénes pueden conciliar?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Personas naturales</h3>
              <p>Cualquier ciudadano con capacidad legal.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Personas jurídicas</h3>
              <p>Empresas, copropiedades y organizaciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Representantes legales</h3>
              <p>Actúan en nombre de terceros con poder legal.</p>
            </div>
          </div>
        </div>

        {/* CASOS NO CONCILIABLES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Casos que no se pueden conciliar</h2>

          <ul className={styles.list}>
            <li>Asuntos penales graves.</li>
            <li>Derechos no disponibles.</li>
            <li>Temas de orden público.</li>
            <li>Casos prohibidos por la ley.</li>
          </ul>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo iniciar una conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes deben acudir a un centro de conciliación autorizado en
            Colombia y presentar la solicitud con los soportes del conflicto.
          </p>

          <p className={styles.paragraph}>
            Luego se programa una audiencia donde se busca un acuerdo
            voluntario.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de cumplir los requisitos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>Garantiza que el acuerdo tenga efectos jurídicos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso rápido</h3>
              <p>Permite resolver conflictos sin procesos judiciales largos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>
              <p>Protege los derechos de ambas partes.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Todos los conflictos se pueden conciliar?</h3>
              <p>No, solo aquellos permitidos por la ley colombiana.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio cumplir requisitos?</h3>
              <p>Sí, para que el proceso tenga validez legal.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se necesita abogado?</h3>
              <p>No siempre, depende del tipo de conflicto.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres iniciar una conciliación?
          </h3>

          <p className={styles.ctaText}>
            Cumple los requisitos legales y resuelve tu conflicto de forma
            rápida y efectiva en Colombia mediante conciliación.
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
