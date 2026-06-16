"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MarcoLegalConciliacionContent() {
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

          <h1 className={styles.title}>
            Marco legal de la conciliación extrajudicial
          </h1>

          <p className={styles.heroText}>
            La conciliación extrajudicial en Colombia está respaldada por un
            conjunto de normas constitucionales y legales que le otorgan plena
            validez dentro del sistema jurídico.
          </p>

          <p className={styles.heroText}>
            Este mecanismo hace parte de los MASC (Mecanismos Alternativos de
            Solución de Conflictos).
          </p>
        </div>

        {/* CONSTITUCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Base constitucional</h2>

          <p className={styles.paragraph}>
            La Constitución Política de Colombia promueve el acceso a la
            justicia y permite la utilización de mecanismos alternativos para
            resolver conflictos.
          </p>

          <p className={styles.paragraph}>
            Esto fundamenta la existencia de la conciliación como herramienta
            válida y reconocida.
          </p>
        </div>

        {/* LEYES PRINCIPALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Normas principales</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ley 2220 de 2022</h3>
              <p>
                Regula el sistema de conciliación en Colombia y fortalece los
                MASC.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Decreto 1829 de 2013</h3>
              <p>
                Reglamenta aspectos operativos de los centros de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Constitución Política</h3>
              <p>
                Base del derecho de acceso a la justicia y resolución
                alternativa.
              </p>
            </div>
          </div>
        </div>

        {/* CARACTERISTICAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Características legales</h2>

          <ul className={styles.list}>
            <li>Es un mecanismo voluntario en la mayoría de casos.</li>
            <li>Puede ser requisito previo en algunos procesos.</li>
            <li>El acta de conciliación tiene fuerza legal.</li>
            <li>Permite evitar procesos judiciales.</li>
            <li>Es administrada por centros autorizados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación tiene efectos jurídicos importantes cuando cumple
              con los requisitos establecidos en la ley.
            </p>
          </div>
        </div>

        {/* EFECTOS JURIDICOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Efectos jurídicos del acta de conciliación
          </h2>

          <p className={styles.paragraph}>
            El acta de conciliación tiene efectos de cosa juzgada y presta
            mérito ejecutivo, lo que significa que puede hacerse cumplir
            legalmente.
          </p>

          <p className={styles.paragraph}>
            Esto le da una fuerza similar a una decisión judicial.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Colombia</h2>

          <p className={styles.paragraph}>
            El marco legal de la conciliación permite descongestionar los
            juzgados y fomentar la solución pacífica de conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, fortalece el acceso a la justicia de forma eficiente.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué ley regula la conciliación?</h3>
              <p>Principalmente la Ley 2220 de 2022.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatoria la conciliación?</h3>
              <p>
                No siempre, pero puede ser requisito previo en algunos casos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta es exigible?</h3>
              <p>
                Sí, tiene fuerza ejecutiva cuando cumple requisitos legales.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a aplicar correctamente el marco legal de la
            conciliación en Colombia para resolver tu conflicto.
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
