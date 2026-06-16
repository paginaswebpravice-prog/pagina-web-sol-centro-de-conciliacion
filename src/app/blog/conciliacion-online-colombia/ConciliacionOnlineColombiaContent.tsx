"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionOnlineColombiaContent() {
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
          <span className={styles.badge}>Conciliación virtual en Colombia</span>

          <h1 className={styles.title}>Conciliación online en Colombia</h1>

          <p className={styles.heroText}>
            La conciliación online en Colombia permite resolver conflictos de
            forma virtual sin necesidad de acudir físicamente a un centro de
            conciliación.
          </p>

          <p className={styles.heroText}>
            Es una modalidad moderna, rápida y con la misma validez jurídica que
            la conciliación presencial.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación online?
          </h2>

          <p className={styles.paragraph}>
            El proceso se realiza a través de plataformas virtuales autorizadas
            donde las partes participan en una audiencia guiada por un
            conciliador.
          </p>

          <p className={styles.paragraph}>
            Todo el procedimiento se desarrolla en tiempo real mediante
            videollamada.
          </p>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación online
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Rapidez</h3>
              <p>Permite resolver conflictos sin desplazamientos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Accesibilidad</h3>
              <p>Se puede realizar desde cualquier lugar de Colombia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>Tiene los mismos efectos jurídicos que la presencial.</p>
            </div>
          </div>
        </div>

        {/* REQUISITOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Requisitos para conciliación online
          </h2>

          <ul className={styles.list}>
            <li>Conexión a internet estable.</li>
            <li>Dispositivo con cámara y micrófono.</li>
            <li>Documento de identidad.</li>
            <li>Soportes del conflicto.</li>
            <li>Correo electrónico activo.</li>
          </ul>
        </div>

        {/* DONDE SE USA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿En qué casos se utiliza?</h2>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Problemas laborales.</li>
            <li>Asuntos de familia.</li>
            <li>Arrendamientos.</li>
            <li>Deudas y obligaciones económicas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación online es ideal cuando las partes están en
              diferentes ciudades o no pueden asistir presencialmente.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Colombia</h2>

          <p className={styles.paragraph}>
            La conciliación virtual ha permitido ampliar el acceso a la justicia
            alternativa en todo el país.
          </p>

          <p className={styles.paragraph}>
            Además, reduce tiempos y costos en la solución de conflictos.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito instalar software?</h3>
              <p>
                Depende del centro, pero generalmente solo se requiere
                navegador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es segura la audiencia virtual?</h3>
              <p>Sí, se realizan en plataformas seguras autorizadas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar desde el exterior?</h3>
              <p>
                Sí, siempre que el centro lo permita y haya conexión estable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres realizar una conciliación online?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a iniciar tu proceso de conciliación virtual en Colombia
            de forma rápida, segura y legal.
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
