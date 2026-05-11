"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosCopropiedadContent() {
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
            CONCILIACIÓN EN PROPIEDAD HORIZONTAL Y COPROPIEDAD EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación en copropiedad en Colombia: resuelva conflictos
            vecinales sin demanda
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos de copropiedad permite resolver
            conflictos entre vecinos, administradores y copropietarios en
            conjuntos residenciales de forma rápida, legal y efectiva en Bogotá
            y Colombia, evitando procesos judiciales largos, costosos y
            desgastantes.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación en propiedad horizontal y cómo funciona?
            </h2>

            <p className={styles.text}>
              La conciliación en propiedad horizontal es un mecanismo legal que
              permite resolver conflictos dentro de conjuntos residenciales,
              edificios y condominios sin acudir a un proceso judicial.
            </p>

            <p className={styles.text}>
              En Colombia, este mecanismo tiene plena validez jurídica y es
              utilizado para solucionar conflictos entre vecinos, administración
              y copropietarios con la ayuda de un conciliador autorizado.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos de copropiedad que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              Los conflictos en propiedad horizontal son frecuentes y pueden
              resolverse sin necesidad de acudir a un juez.
            </p>

            <ul className={styles.list}>
              <li>Cuotas de administración en mora.</li>
              <li>Uso indebido de zonas comunes.</li>
              <li>Conflictos entre vecinos.</li>
              <li>Problemas con la administración del conjunto.</li>
              <li>Incumplimiento del reglamento de propiedad horizontal.</li>
              <li>Decisiones de asamblea de copropietarios.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación en propiedad horizontal
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas judiciales</h3>
                <p className={styles.cardText}>
                  Soluciona conflictos sin procesos judiciales largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mejora la convivencia</h3>
                <p className={styles.cardText}>
                  Reduce tensiones entre vecinos y administración.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>
                <p className={styles.cardText}>
                  Acuerdos en menor tiempo frente a un proceso judicial.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  Los acuerdos tienen efectos jurídicos en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo legal</h3>
                <p className={styles.cardText}>
                  Evita gastos legales y administrativos elevados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso confidencial</h3>
                <p className={styles.cardText}>
                  Evita exposición pública del conflicto entre vecinos.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda en propiedad horizontal?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales en copropiedad pueden generar conflictos
              prolongados entre vecinos, afectar la convivencia y aumentar los
              costos legales de todas las partes involucradas.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver los conflictos de forma rápida,
              práctica y con acuerdos que benefician a toda la comunidad.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación en copropiedad en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud ante un centro de conciliación
              autorizado en Colombia. Luego se cita a las partes a una audiencia
              donde se busca un acuerdo con ayuda de un conciliador.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, este queda en un acta con validez legal y es de
              obligatorio cumplimiento para las partes.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
