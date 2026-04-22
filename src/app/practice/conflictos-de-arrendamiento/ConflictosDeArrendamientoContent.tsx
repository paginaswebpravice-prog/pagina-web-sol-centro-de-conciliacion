"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function ConflictosDeArrendamientoContent() {
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
            CONFLICTOS DE ARRENDAMIENTO EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelve conflictos de arrendamiento sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en conflictos de arrendamiento permite resolver
            problemas entre arrendadores y arrendatarios de forma rápida, legal
            y efectiva en Bogotá y Colombia, evitando procesos judiciales largos
            como restitución de inmueble o demandas por incumplimiento.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es un conflicto de arrendamiento?
            </h2>

            <p className={styles.text}>
              Es cualquier desacuerdo entre arrendador y arrendatario
              relacionado con el contrato de arrendamiento, el pago del canon,
              el uso del inmueble o la entrega del bien arrendado.
            </p>

            <p className={styles.text}>
              En Colombia, estos conflictos pueden resolverse mediante
              conciliación antes de acudir a un proceso judicial de restitución
              o demanda civil.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos de arrendamiento se pueden conciliar?
            </h2>

            <p className={styles.text}>
              La conciliación aplica para múltiples problemas entre arrendador y
              arrendatario.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento del pago del canon de arrendamiento.</li>
              <li>Deudas por servicios públicos o administración.</li>
              <li>Restitución del inmueble arrendado.</li>
              <li>Terminación anticipada del contrato.</li>
              <li>Daños al inmueble o mal uso del bien.</li>
              <li>Conflictos por cláusulas del contrato.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en arrendamientos
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita desalojos largos</h3>
                <p className={styles.cardText}>
                  Reduce procesos de restitución de inmueble.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Recupera dinero más rápido</h3>
                <p className={styles.cardText}>
                  Permite acuerdos de pago inmediatos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución legal</h3>
                <p className={styles.cardText}>
                  El acuerdo tiene validez jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo</h3>
                <p className={styles.cardText}>
                  Evita procesos judiciales costosos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>
                <p className={styles.cardText}>
                  Acuerdos en días, no meses o años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita conflictos mayores</h3>
                <p className={styles.cardText}>
                  Reduce tensiones legales entre las partes.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda por arrendamiento?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales por arrendamiento suelen ser largos,
              costosos y generan pérdida de tiempo tanto para arrendadores como
              arrendatarios.
            </p>

            <p className={styles.text}>
              Además, pueden afectar la recuperación del inmueble o del dinero
              adeudado.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación por arrendamiento?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. Luego se cita a las partes a una audiencia
              para intentar llegar a un acuerdo.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, este queda consignado en un acta con validez legal
              y obligatorio cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
