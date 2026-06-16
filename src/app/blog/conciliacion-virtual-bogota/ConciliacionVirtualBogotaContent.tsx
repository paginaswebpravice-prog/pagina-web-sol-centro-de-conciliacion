"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionVirtualBogotaContent() {
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
          <span className={styles.badge}>Conciliación digital en Colombia</span>

          <h1 className={styles.title}>Conciliación virtual en Bogotá</h1>

          <p className={styles.heroText}>
            La conciliación virtual en Bogotá es una modalidad moderna que
            permite resolver conflictos sin necesidad de asistir físicamente a
            un centro de conciliación.
          </p>

          <p className={styles.heroText}>
            Todo el proceso se realiza a través de medios digitales con plena
            validez jurídica en Colombia.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la conciliación virtual?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo de solución de conflictos que se realiza mediante
            plataformas digitales autorizadas, donde las partes participan en
            una audiencia remota.
          </p>

          <p className={styles.paragraph}>
            Tiene la misma validez legal que la conciliación presencial.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona?</h2>

          <ul className={styles.list}>
            <li>Solicitud de conciliación ante un centro autorizado.</li>
            <li>Programación de audiencia virtual.</li>
            <li>Enlace de conexión para las partes.</li>
            <li>Desarrollo de la audiencia por videollamada.</li>
            <li>Firma digital del acta de conciliación.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El acta final tiene plena validez jurídica en Colombia, igual que
              en una audiencia presencial.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación virtual
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Sin desplazamientos</h3>
              <p>Puedes participar desde cualquier lugar.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>
              <p>Reduce tiempos de traslado y programación.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>Tiene los mismos efectos que una conciliación presencial.</p>
            </div>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Requisitos para conciliar virtualmente
          </h2>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Acceso a internet estable.</li>
            <li>Correo electrónico activo.</li>
            <li>Dispositivo con cámara y micrófono.</li>
            <li>Información del conflicto a tratar.</li>
          </ul>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Casos comunes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>
              <p>Conflictos entre arrendador e inquilino.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Laborales</h3>
              <p>Liquidaciones, salarios y prestaciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Civiles</h3>
              <p>Deudas y conflictos contractuales.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Bogotá</h2>

          <p className={styles.paragraph}>
            La conciliación virtual ha facilitado el acceso a la justicia en una
            ciudad como Bogotá, donde el tiempo y la movilidad pueden ser un
            obstáculo.
          </p>

          <p className={styles.paragraph}>
            Además, fortalece la eficiencia del sistema de MASC en Colombia.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito estar en Bogotá?</h3>
              <p>No, puedes conectarte desde cualquier lugar.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es seguro el proceso?</h3>
              <p>Sí, se realiza en plataformas autorizadas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta es válida?</h3>
              <p>Sí, tiene la misma validez que una conciliación presencial.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres conciliar virtualmente en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Realiza tu conciliación sin desplazarte y con total validez legal en
            Colombia.
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
