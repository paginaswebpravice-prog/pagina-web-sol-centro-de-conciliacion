"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RequisitosConciliarBogotaContent() {
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

          <h1 className={styles.title}>Requisitos para conciliar en Bogotá</h1>

          <p className={styles.heroText}>
            Para iniciar un proceso de conciliación en Bogotá es importante
            cumplir con ciertos requisitos básicos que permiten dar inicio al
            trámite de forma correcta.
          </p>

          <p className={styles.heroText}>
            Estos requisitos pueden variar según el tipo de conflicto, pero
            existen elementos generales aplicables en Colombia.
          </p>
        </div>

        {/* QUE ES NECESARIO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Requisitos generales para conciliar
          </h2>

          <ul className={styles.list}>
            <li>Documento de identidad del solicitante.</li>
            <li>Información clara del conflicto.</li>
            <li>Datos de la otra parte involucrada.</li>
            <li>Soportes o pruebas del caso (si existen).</li>
            <li>Solicitud de conciliación formal.</li>
          </ul>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos más comunes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Contratos</h3>
              <p>En casos civiles, laborales o de arrendamiento.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soportes de pago</h3>
              <p>Recibos, transferencias o comprobantes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Comunicaciones</h3>
              <p>Correos, mensajes o notificaciones relacionadas.</p>
            </div>
          </div>
        </div>

        {/* PASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pasos para iniciar una conciliación
          </h2>

          <ul className={styles.list}>
            <li>Radicar la solicitud en un centro autorizado.</li>
            <li>Adjuntar los documentos del caso.</li>
            <li>Notificación a la otra parte.</li>
            <li>Programación de audiencia.</li>
            <li>Realización de la conciliación.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El proceso puede ser rápido y en muchos casos se resuelve en una
              sola audiencia.
            </p>
          </div>
        </div>

        {/* QUIEN PUEDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quién puede conciliar?</h2>

          <p className={styles.paragraph}>
            Cualquier persona natural o jurídica en Bogotá que tenga un
            conflicto susceptible de conciliación puede iniciar el proceso.
          </p>

          <p className={styles.paragraph}>
            También puede hacerse a través de apoderado en algunos casos.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia de cumplir los requisitos
          </h2>

          <p className={styles.paragraph}>
            Cumplir con los requisitos permite que el proceso de conciliación
            sea más rápido, ordenado y efectivo.
          </p>

          <p className={styles.paragraph}>
            Además, evita retrasos en la programación de la audiencia.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar sin documentos?</h3>
              <p>Sí, pero es recomendable tener soportes del conflicto.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio ir personalmente?</h3>
              <p>Generalmente sí, aunque puede haber representación legal.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tarda el proceso?</h3>
              <p>Depende del caso, pero puede resolverse en pocos días.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te orientamos en el proceso y los requisitos para que puedas
            conciliar de forma rápida y efectiva.
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
