"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionColombiaContent() {
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
            Centros de conciliación autorizados en Colombia
          </h1>

          <p className={styles.heroText}>
            Los centros de conciliación autorizados en Colombia son entidades
            habilitadas por la ley para facilitar la solución de conflictos de
            forma pacífica y sin necesidad de un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Estos centros garantizan que el proceso tenga validez jurídica y sea
            realizado por conciliadores capacitados.
          </p>
        </div>

        {/* QUE SON */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es una entidad pública o privada autorizada para administrar
            procesos de conciliación extrajudicial en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su función principal es facilitar acuerdos entre las partes en
            conflicto.
          </p>
        </div>

        {/* QUIENES PUEDEN OPERAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede operar un centro de conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cámaras de comercio</h3>
              <p>
                Son uno de los principales operadores de conciliación en
                Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Notarías</h3>
              <p>
                Algunas notarías están autorizadas para prestar este servicio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Universidades</h3>
              <p>A través de consultorios jurídicos habilitados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entidades públicas</h3>
              <p>Organismos autorizados por el Ministerio de Justicia.</p>
            </div>
          </div>
        </div>

        {/* FUNCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Función de los centros de conciliación
          </h2>

          <ul className={styles.list}>
            <li>Recibir solicitudes de conciliación.</li>
            <li>Designar conciliadores.</li>
            <li>Programar audiencias.</li>
            <li>Facilitar acuerdos entre las partes.</li>
            <li>Emitir actas con validez jurídica.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Colombia</h2>

          <p className={styles.paragraph}>
            Estos centros permiten descongestionar el sistema judicial y
            promover soluciones rápidas a los conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, fortalecen la cultura del diálogo y la resolución pacífica.
          </p>
        </div>

        {/* ACCESO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo acceder a un centro de conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Identificar un centro autorizado.</li>
            <li>Presentar solicitud formal.</li>
            <li>Adjuntar documentos del caso.</li>
            <li>Esperar citación a audiencia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Todos los centros autorizados deben estar avalados por el
              Ministerio de Justicia de Colombia.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Todos los centros son oficiales?</h3>
              <p>No, solo los autorizados por el Ministerio de Justicia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son gratuitos?</h3>
              <p>
                Algunos servicios pueden tener costos dependiendo del tipo de
                entidad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar en cualquier centro?</h3>
              <p>Sí, siempre que esté autorizado para el tipo de conflicto.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas acudir a un centro de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Te orientamos para identificar el centro adecuado y gestionar tu
            proceso de conciliación en Colombia.
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
