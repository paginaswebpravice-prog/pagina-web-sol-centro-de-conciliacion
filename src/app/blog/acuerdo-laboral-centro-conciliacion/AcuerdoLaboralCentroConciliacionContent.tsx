"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdoLaboralCentroConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Acuerdo laboral ante centro de conciliación
          </h1>

          <p className={styles.heroText}>
            Los acuerdos laborales ante un centro de conciliación permiten que
            trabajadores y empleadores solucionen conflictos de manera rápida,
            voluntaria y con plena validez jurídica, evitando procesos
            judiciales prolongados.
          </p>

          <p className={styles.heroText}>
            Mediante este mecanismo es posible formalizar compromisos
            relacionados con salarios, liquidaciones, prestaciones sociales,
            indemnizaciones y otros derechos derivados de la relación laboral.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo laboral por conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es un acuerdo alcanzado entre trabajador y empleador con la
            intervención de un conciliador autorizado. El objetivo es resolver
            diferencias laborales sin necesidad de acudir a un juez laboral.
          </p>

          <p className={styles.paragraph}>
            Una vez alcanzado el acuerdo, este queda consignado en un acta de
            conciliación que tiene efectos jurídicos y puede exigirse en caso de
            incumplimiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral promueve soluciones consensuadas que
              benefician a ambas partes y reducen costos y tiempos de
              resolución.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Asuntos laborales que pueden conciliarse
          </h2>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Liquidaciones laborales.</li>
            <li>Vacaciones.</li>
            <li>Indemnizaciones.</li>
            <li>Bonificaciones.</li>
            <li>Terminación de contratos de trabajo.</li>
            <li>Reconocimiento de obligaciones laborales.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de formalizar un acuerdo laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Rapidez</h3>

              <p>
                Permite resolver conflictos laborales en menos tiempo que un
                proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor costo</h3>

              <p>
                Reduce gastos legales y evita largos litigios entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acuerdo queda respaldado por un acta con efectos legales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se realiza una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento inicia con la solicitud de conciliación ante un
            centro autorizado. Posteriormente se programa una audiencia en la
            que las partes exponen sus posiciones y buscan alcanzar un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si existe consenso, se firma un acta de conciliación laboral donde
            quedan establecidas las obligaciones y compromisos de cada parte.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez legal del acuerdo laboral</h2>

          <p className={styles.paragraph}>
            Los acuerdos celebrados ante centros de conciliación tienen plena
            validez jurídica en Colombia. El acta resultante presta mérito
            ejecutivo y puede hacerse cumplir judicialmente.
          </p>

          <p className={styles.paragraph}>
            Esto brinda confianza tanto al trabajador como al empleador,
            garantizando que los compromisos adquiridos tengan respaldo legal.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio llegar a un acuerdo?</h3>

              <p>
                No. La conciliación es voluntaria y depende de la voluntad de
                ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede hacerse virtualmente?</h3>

              <p>
                Sí. Muchos centros de conciliación ofrecen audiencias virtuales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si se incumple?</h3>

              <p>
                El acta puede ejecutarse judicialmente para exigir el
                cumplimiento de las obligaciones acordadas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas formalizar un acuerdo laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para resolver conflictos laborales mediante
            conciliación en Bogotá y cualquier lugar de Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
