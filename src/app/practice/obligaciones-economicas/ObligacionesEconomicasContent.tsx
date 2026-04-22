"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function ObligacionesEconomicasContent() {
  return (
    <>
      <section className={styles.section}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>
            OBLIGACIONES ECONÓMICAS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelve deudas y obligaciones sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en obligaciones económicas permite resolver deudas,
            acuerdos de pago y compromisos financieros entre personas o empresas
            de forma rápida, legal y sin procesos judiciales en Bogotá y
            Colombia.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son las obligaciones económicas?
            </h2>

            <p className={styles.text}>
              Son compromisos financieros adquiridos entre personas naturales o
              jurídicas que implican el pago de dinero, bienes o servicios.
            </p>

            <p className={styles.text}>
              Cuando no se cumplen, pueden generarse conflictos que pueden
              resolverse mediante conciliación en Colombia.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Tipos de obligaciones económicas
            </h2>

            <p className={styles.text}>
              Las obligaciones económicas pueden presentarse en diferentes
              contextos.
            </p>

            <ul className={styles.list}>
              <li>Deudas entre particulares.</li>
              <li>Obligaciones comerciales entre empresas.</li>
              <li>Préstamos personales.</li>
              <li>Pagos por servicios no cumplidos.</li>
              <li>Contratos financieros o comerciales.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de conciliar obligaciones económicas
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas</h3>
                <p className={styles.cardText}>
                  Soluciona conflictos sin procesos judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos de pago</h3>
                <p className={styles.cardText}>
                  Facilita planes de pago flexibles.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Recuperación rápida</h3>
                <p className={styles.cardText}>
                  Agiliza el cobro de obligaciones.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez legal</h3>
                <p className={styles.cardText}>
                  Los acuerdos tienen fuerza jurídica.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menos costos</h3>
                <p className={styles.cardText}>
                  Reduce gastos legales y judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Relaciones protegidas</h3>
                <p className={styles.cardText}>
                  Evita conflictos entre las partes.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué pasa si no se concilian las deudas?
            </h2>

            <p className={styles.text}>
              Si no se llega a un acuerdo, el conflicto puede escalar a un
              proceso judicial con posibles embargos o medidas legales.
            </p>

            <p className={styles.text}>
              La conciliación permite evitar estos escenarios de forma
              anticipada.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación de obligaciones económicas?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud en un centro de conciliación
              en Colombia donde se citan las partes involucradas.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, se firma un acta con validez legal y cumplimiento
              obligatorio.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
