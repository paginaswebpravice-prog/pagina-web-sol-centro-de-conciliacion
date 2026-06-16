"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CasosConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Casos prácticos de conciliación laboral
          </span>

          <h1 className={styles.title}>
            Casos donde la conciliación laboral sí funciona en Colombia
          </h1>

          <p className={styles.heroText}>
            La conciliación laboral es una de las herramientas más efectivas
            para resolver conflictos entre trabajadores y empleadores sin
            necesidad de acudir a largos procesos judiciales. Aunque no todos
            los casos terminan con un acuerdo, existen numerosos escenarios en
            los que la conciliación permite alcanzar soluciones rápidas y
            satisfactorias para ambas partes.
          </p>

          <p className={styles.heroText}>
            En Colombia, miles de controversias laborales relacionadas con
            salarios, liquidaciones, prestaciones sociales, indemnizaciones y
            terminación de contratos se solucionan cada año mediante acuerdos
            conciliatorios.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué funciona la conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            La conciliación funciona porque permite que las partes dialoguen con
            la orientación de un conciliador imparcial. En lugar de esperar una
            decisión judicial, trabajador y empleador pueden construir
            conjuntamente una solución.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo reduce tiempos, costos y desgaste emocional,
            permitiendo resolver controversias de forma más eficiente.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando existe voluntad de negociación, la conciliación laboral
              suele ser la alternativa más rápida para resolver conflictos
              relacionados con derechos laborales.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 1: Pago de salarios pendientes
          </h2>

          <p className={styles.paragraph}>
            Uno de los casos más frecuentes ocurre cuando un trabajador reclama
            salarios que no han sido pagados oportunamente.
          </p>

          <p className={styles.paragraph}>
            Mediante conciliación, las partes pueden acordar pagos inmediatos,
            cronogramas de cumplimiento o mecanismos para saldar la obligación
            sin necesidad de una demanda laboral.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 2: Diferencias sobre liquidaciones laborales
          </h2>

          <p className={styles.paragraph}>
            Es común que existan desacuerdos sobre el cálculo de cesantías,
            primas, vacaciones o indemnizaciones.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite revisar las cifras y alcanzar acuerdos
            respecto a los valores reconocidos y las formas de pago.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Caso 3: Terminación del contrato de trabajo
          </h2>

          <p className={styles.paragraph}>
            Cuando existe controversia por la finalización de una relación
            laboral, la conciliación puede facilitar acuerdos relacionados con
            indemnizaciones, pagos pendientes o condiciones de cierre de la
            relación contractual.
          </p>

          <p className={styles.paragraph}>
            Esto permite evitar litigios prolongados y preservar una salida
            negociada para ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Otros conflictos laborales que suelen resolverse mediante
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Reclamos relacionados con cesantías, intereses, vacaciones y
                primas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                Acuerdos sobre compensaciones derivadas de conflictos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos de pago</h3>

              <p>
                Soluciones para obligaciones laborales que no pueden ser
                canceladas inmediatamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Empleadas domésticas</h3>

              <p>
                Controversias relacionadas con liquidaciones y derechos
                laborales del trabajo doméstico.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de resolver conflictos mediante conciliación
          </h2>

          <ul className={styles.list}>
            <li>Menor duración frente a una demanda laboral.</li>
            <li>Reducción de costos legales.</li>
            <li>Acuerdos personalizados.</li>
            <li>Mayor rapidez en los pagos.</li>
            <li>Menor desgaste emocional.</li>
            <li>Seguridad jurídica para ambas partes.</li>
            <li>Posibilidad de soluciones flexibles.</li>
            <li>Evita procesos judiciales extensos.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo podría no ser suficiente la conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación es muy efectiva, existen casos en los que no
            es posible alcanzar un acuerdo debido a posiciones completamente
            opuestas o a la negativa de alguna de las partes para negociar.
          </p>

          <p className={styles.paragraph}>
            En estas situaciones, la vía judicial continúa siendo una
            alternativa para la protección de los derechos laborales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación laboral es obligatoria?</h3>

              <p>
                Dependiendo del caso, puede ser una etapa recomendable antes de
                acudir a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los acuerdos tienen validez legal?</h3>

              <p>
                Sí. Los acuerdos conciliatorios producen efectos jurídicos y son
                obligatorios para las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si una parte incumple?</h3>

              <p>
                El acuerdo puede hacerse valer mediante los mecanismos legales
                correspondientes.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Tienes un conflicto laboral?</h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            trabajador y empleador, liquidaciones, salarios, prestaciones
            sociales e indemnizaciones en Colombia.
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
