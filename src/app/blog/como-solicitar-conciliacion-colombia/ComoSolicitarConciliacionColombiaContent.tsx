"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ComoSolicitarConciliacionColombiaContent() {
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
          <span className={styles.badge}>
            Trámite de conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            Cómo solicitar una conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            Solicitar una conciliación en Colombia es un proceso sencillo que
            permite resolver conflictos sin necesidad de acudir a un juez.
          </p>

          <p className={styles.heroText}>
            A través de este mecanismo, las partes pueden llegar a acuerdos
            voluntarios con plena validez jurídica.
          </p>
        </div>

        {/* DONDE SOLICITAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Dónde se solicita la conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas con función conciliatoria.</li>
          </ul>
        </div>

        {/* PASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pasos para solicitar una conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Radicar solicitud</h3>
              <p>
                Presentar la solicitud de conciliación ante una entidad
                autorizada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Adjuntar documentos</h3>
              <p>Incluir soportes del conflicto y datos de las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Citación</h3>
              <p>Se notifica a la otra parte para asistir a la audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Audiencia</h3>
              <p>Se desarrolla la conciliación con un conciliador neutral.</p>
            </div>
          </div>
        </div>

        {/* QUE SE NECESITA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Requisitos básicos</h2>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Datos de la otra parte.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Soportes o pruebas (si existen).</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En la mayoría de los casos no se requiere abogado para iniciar el
              trámite de conciliación.
            </p>
          </div>
        </div>

        {/* DURACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuánto tarda el proceso?</h2>

          <p className={styles.paragraph}>
            La conciliación en Colombia puede resolverse en pocos días o incluso
            en una sola audiencia si las partes llegan a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Depende del tipo de conflicto y la disponibilidad de las partes.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia de la conciliación</h2>

          <p className={styles.paragraph}>
            Este mecanismo permite resolver conflictos de forma rápida,
            económica y efectiva, evitando procesos judiciales largos.
          </p>

          <p className={styles.paragraph}>
            Además, promueve acuerdos voluntarios entre las partes.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo solicitarla virtualmente?</h3>
              <p>Sí, en muchos centros ya existe conciliación virtual.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio asistir?</h3>
              <p>
                Sí, si eres citado a audiencia debes asistir o justificar
                ausencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta tiene efectos legales en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas solicitar una conciliación?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a iniciar tu proceso de conciliación en Colombia de
            forma rápida y segura.
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
