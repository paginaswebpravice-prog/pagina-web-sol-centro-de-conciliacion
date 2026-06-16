"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ZonasComunesContent() {
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
            Conciliación en propiedad horizontal
          </span>

          <h1 className={styles.title}>
            Uso de zonas comunes y conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            El uso de zonas comunes en conjuntos residenciales en Colombia es
            una de las principales fuentes de conflictos entre vecinos y
            administración. Estos espacios requieren normas claras de
            convivencia.
          </p>

          <p className={styles.heroText}>
            La conciliación permite resolver estos conflictos de forma rápida,
            legal y sin necesidad de procesos judiciales.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué son las zonas comunes?</h2>

          <p className={styles.paragraph}>
            Son aquellos espacios dentro de la propiedad horizontal que son de
            uso compartido por todos los copropietarios o residentes.
          </p>

          <p className={styles.paragraph}>
            En Colombia incluyen áreas como pasillos, ascensores, piscinas,
            parques, salones comunales y parqueaderos comunes.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos comunes en zonas compartidas
          </h2>

          <ul className={styles.list}>
            <li>Uso indebido de parqueaderos.</li>
            <li>Residentes que no respetan normas de convivencia.</li>
            <li>Reservas de zonas comunes sin autorización.</li>
            <li>Daños en áreas compartidas.</li>
            <li>Ruido o comportamientos inadecuados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, estos conflictos pueden resolverse mediante
              conciliación sin necesidad de acudir a instancias judiciales.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de la conciliación</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mejor convivencia</h3>
              <p>
                Permite mejorar las relaciones entre vecinos en el conjunto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>
              <p>Evita procesos judiciales largos y costosos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>El acta de conciliación tiene validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación para exponer el
            conflicto relacionado con el uso de zonas comunes.
          </p>

          <p className={styles.paragraph}>
            Allí se buscan acuerdos que regulen el uso adecuado de los espacios
            compartidos.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Reglas de uso de zonas comunes.</li>
            <li>Horarios de utilización de espacios.</li>
            <li>Compromisos de convivencia.</li>
            <li>Compensación por daños.</li>
            <li>Acuerdos entre vecinos y administración.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden regular las zonas comunes?</h3>
              <p>Sí, mediante reglamentos internos y conciliación.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién controla las zonas comunes?</h3>
              <p>La administración del conjunto residencial.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>
                No, pero es una alternativa efectiva antes de un proceso
                judicial.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Problemas con zonas comunes en tu conjunto?
          </h3>

          <p className={styles.ctaText}>
            Resuelve conflictos de convivencia en propiedad horizontal mediante
            conciliación en Colombia.
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
