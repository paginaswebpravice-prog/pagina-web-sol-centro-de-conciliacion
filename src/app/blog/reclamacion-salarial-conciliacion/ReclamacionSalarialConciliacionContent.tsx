"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ReclamacionSalarialConciliacionContent() {
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
            Reclamación salarial mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            La reclamación salarial mediante conciliación es una alternativa
            eficaz para recuperar salarios pendientes, pagos atrasados y otras
            obligaciones laborales sin necesidad de iniciar una demanda ante los
            jueces laborales.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite que trabajador y empleador dialoguen con la
            ayuda de un conciliador imparcial para buscar una solución rápida,
            económica y jurídicamente válida.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es una reclamación salarial?</h2>

          <p className={styles.paragraph}>
            Se presenta cuando un trabajador considera que existen salarios,
            horas extras, recargos, comisiones u otros pagos laborales que no
            han sido cancelados correctamente por el empleador.
          </p>

          <p className={styles.paragraph}>
            Antes de iniciar un proceso judicial, las partes pueden acudir a la
            conciliación para intentar resolver el conflicto de manera
            voluntaria.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral puede evitar largos procesos judiciales y
              facilitar acuerdos que beneficien tanto al trabajador como al
              empleador.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos frecuentes de reclamación salarial
          </h2>

          <ul className={styles.list}>
            <li>Salarios atrasados o pendientes de pago.</li>
            <li>Horas extras no reconocidas.</li>
            <li>Recargos nocturnos o dominicales.</li>
            <li>Comisiones pendientes.</li>
            <li>Bonificaciones pactadas y no pagadas.</li>
            <li>Diferencias en la liquidación de salarios.</li>
            <li>Pagos parciales o incompletos.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar una reclamación salarial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Rapidez</h3>

              <p>
                Permite resolver el conflicto en menos tiempo que un proceso
                judicial laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ahorro económico</h3>

              <p>
                Reduce costos asociados a litigios y representación judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Validez jurídica</h3>

              <p>
                El acuerdo alcanzado queda consignado en un acta con efectos
                legales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación salarial?
          </h2>

          <p className={styles.paragraph}>
            El trabajador presenta una solicitud de conciliación explicando los
            pagos reclamados. Posteriormente se cita al empleador para una
            audiencia donde ambas partes exponen su posición.
          </p>

          <p className={styles.paragraph}>
            El conciliador facilita el diálogo y ayuda a encontrar soluciones
            como pagos totales, pagos parciales o acuerdos de pago por cuotas.
          </p>

          <p className={styles.paragraph}>
            Si existe acuerdo, este queda formalizado mediante un acta de
            conciliación que obliga a las partes a cumplir lo pactado.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Desprendibles de nómina.</li>
            <li>Extractos de pago.</li>
            <li>Comunicaciones con el empleador.</li>
            <li>Liquidaciones laborales.</li>
            <li>Soportes de horas extras o comisiones.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar varios meses de salario?</h3>

              <p>
                Sí. Es posible incluir todos los salarios pendientes dentro de
                la solicitud de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El empleador está obligado a asistir?</h3>

              <p>
                Será citado formalmente para participar en la audiencia de
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si se incumple el acuerdo?</h3>

              <p>
                El acta de conciliación puede utilizarse para exigir el
                cumplimiento de las obligaciones pactadas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes salarios pendientes por recibir?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, reclamaciones
            salariales, pagos pendientes y acuerdos entre trabajadores y
            empleadores en Colombia.
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
