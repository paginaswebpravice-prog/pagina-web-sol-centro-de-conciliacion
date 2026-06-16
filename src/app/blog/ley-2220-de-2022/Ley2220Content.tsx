"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function Ley2220Content() {
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
          <span className={styles.badge}>Normativa en Colombia</span>

          <h1 className={styles.title}>Ley 2220 de 2022 explicada</h1>

          <p className={styles.heroText}>
            La Ley 2220 de 2022 en Colombia establece el marco normativo del
            Sistema Nacional de Conciliación y los Mecanismos Alternativos de
            Solución de Conflictos (MASC), modernizando la forma en que se
            resuelven disputas sin acudir a juicio.
          </p>

          <p className={styles.heroText}>
            Esta ley busca fortalecer la conciliación como herramienta principal
            para el acceso a la justicia en Colombia.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la Ley 2220 de 2022?</h2>

          <p className={styles.paragraph}>
            Es la norma que regula el sistema de conciliación en Colombia y
            actualiza las reglas para los mecanismos alternativos de solución de
            conflictos.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es hacer más eficiente, accesible y moderno el acceso a
            la justicia.
          </p>
        </div>

        {/* CAMBIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Principales cambios de la ley</h2>

          <ul className={styles.list}>
            <li>Modernización del sistema de conciliación.</li>
            <li>Fortalecimiento de los centros de conciliación.</li>
            <li>Mayor uso de medios digitales.</li>
            <li>Ampliación de mecanismos alternativos (MASC).</li>
            <li>Mejora en el acceso a justicia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La Ley 2220 de 2022 consolida la conciliación como una herramienta
              clave dentro del sistema de justicia en Colombia.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de la Ley 2220 de 2022</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Acceso a justicia</h3>
              <p>
                Facilita la resolución de conflictos sin procesos judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor eficiencia</h3>
              <p>Reduce tiempos y costos en la resolución de conflictos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Digitalización</h3>
              <p>
                Permite el uso de herramientas tecnológicas en conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona en la práctica?</h2>

          <p className={styles.paragraph}>
            Las personas pueden acudir a centros de conciliación autorizados o
            mecanismos digitales para resolver sus conflictos.
          </p>

          <p className={styles.paragraph}>
            Si se logra un acuerdo, este queda consignado en un acta con efectos
            legales obligatorios.
          </p>
        </div>

        {/* APLICACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde aplica esta ley?</h2>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Arrendamientos.</li>
            <li>Propiedad horizontal.</li>
            <li>Conflictos inmobiliarios.</li>
            <li>Obligaciones económicas.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La Ley 2220 reemplaza la Ley 640?</h3>
              <p>
                No la reemplaza totalmente, pero la complementa y moderniza el
                sistema.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatoria la conciliación?</h3>
              <p>Depende del tipo de conflicto y lo establecido por la ley.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar online?</h3>
              <p>Sí, la ley permite el uso de medios digitales.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conciliar un conflicto?
          </h3>

          <p className={styles.ctaText}>
            La Ley 2220 de 2022 facilita la resolución de conflictos en Colombia
            mediante conciliación moderna y efectiva.
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
