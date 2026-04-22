"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosVecinalesContent() {
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
            CONFLICTOS VECINALES EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelve conflictos entre vecinos sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos vecinales permite resolver conflictos de
            convivencia entre vecinos de forma rápida, legal y efectiva en
            Bogotá y Colombia, evitando procesos judiciales largos y
            desgastantes.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son los conflictos vecinales?
            </h2>

            <p className={styles.text}>
              Son problemas que surgen entre vecinos por convivencia, uso de
              espacios comunes o comportamientos que afectan la tranquilidad en
              conjuntos residenciales o barrios.
            </p>

            <p className={styles.text}>
              En Colombia, estos conflictos pueden resolverse mediante
              conciliación antes de acudir a un proceso judicial.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos entre vecinos se pueden conciliar?
            </h2>

            <p className={styles.text}>
              Los conflictos vecinales más comunes pueden resolverse sin acudir
              a un juez mediante conciliación.
            </p>

            <ul className={styles.list}>
              <li>Ruido excesivo o fiestas frecuentes.</li>
              <li>Uso indebido de zonas comunes.</li>
              <li>Problemas de convivencia en conjuntos residenciales.</li>
              <li>Límites de propiedad o invasión de espacio.</li>
              <li>Mal comportamiento o conflictos personales.</li>
              <li>Disputas por parqueaderos o zonas compartidas.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación entre vecinos
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita peleas legales</h3>
                <p className={styles.cardText}>
                  Resuelve conflictos sin llegar a demandas judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mejora la convivencia</h3>
                <p className={styles.cardText}>
                  Ayuda a restablecer relaciones entre vecinos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones rápidas</h3>
                <p className={styles.cardText}>
                  Acuerdos en menor tiempo que un proceso judicial.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor costo</h3>
                <p className={styles.cardText}>
                  Evita gastos legales innecesarios.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez legal</h3>
                <p className={styles.cardText}>
                  Los acuerdos tienen fuerza jurídica en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ambiente más tranquilo</h3>
                <p className={styles.cardText}>
                  Mejora la calidad de vida en el conjunto o barrio.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda entre vecinos?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales entre vecinos suelen empeorar la
              convivencia, generar tensiones permanentes y afectar la
              tranquilidad del entorno.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver los problemas de forma rápida y
              sin romper la convivencia comunitaria.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación vecinal?
            </h2>

            <p className={styles.text}>
              Se solicita la conciliación ante un centro autorizado en Colombia.
              Luego se cita a las partes para una audiencia donde se busca un
              acuerdo con ayuda de un conciliador.
            </p>

            <p className={styles.text}>
              Si hay acuerdo, este queda en un acta con validez legal y
              obligatorio cumplimiento.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
