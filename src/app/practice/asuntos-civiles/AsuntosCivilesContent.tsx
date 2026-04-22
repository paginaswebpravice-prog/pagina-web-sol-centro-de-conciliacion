"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosCivilesContent() {
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
            CONCILIACIÓN CIVIL EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelve conflictos civiles sin demanda en Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos civiles permite solucionar conflictos
            relacionados con obligaciones, contratos y derechos patrimoniales de
            forma rápida, legal y efectiva en Bogotá y Colombia, evitando
            procesos judiciales largos y costosos.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación en asuntos civiles?
            </h2>

            <p className={styles.text}>
              La conciliación civil es un mecanismo alternativo de resolución de
              conflictos que permite a las personas llegar a acuerdos sin acudir
              a un juez. En Colombia, este proceso tiene plena validez jurídica
              y es utilizado para resolver disputas relacionadas con
              obligaciones, contratos y responsabilidades civiles.
            </p>

            <p className={styles.text}>
              A través de un conciliador autorizado, las partes pueden negociar
              soluciones equilibradas que protejan sus derechos y eviten
              litigios prolongados.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos civiles se pueden conciliar?
            </h2>

            <p className={styles.text}>
              La conciliación civil aplica a múltiples situaciones donde existe
              un conflicto entre particulares o empresas con contenido económico
              o patrimonial.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos civiles.</li>
              <li>Deudas entre particulares.</li>
              <li>Responsabilidad civil y daños y perjuicios.</li>
              <li>Conflictos por arrendamientos.</li>
              <li>Obligaciones económicas no cumplidas.</li>
              <li>Disputas por servicios o acuerdos informales.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación civil en Colombia
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso rápido</h3>
                <p className={styles.cardText}>
                  Resuelve conflictos en menor tiempo frente a procesos
                  judiciales tradicionales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro económico</h3>
                <p className={styles.cardText}>
                  Reduce costos legales asociados a demandas y abogados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos con respaldo legal
                </h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede ser
                  exigible.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>
                <p className={styles.cardText}>
                  Permite acuerdos adaptados a las necesidades de las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste</h3>
                <p className={styles.cardText}>
                  Evita conflictos prolongados y desgaste emocional o
                  financiero.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Confidencialidad</h3>
                <p className={styles.cardText}>
                  Protege la información y evita exposición pública del
                  conflicto.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar un proceso judicial civil?
            </h2>

            <p className={styles.text}>
              Los procesos civiles pueden tardar largos periodos, generar costos
              elevados y afectar la estabilidad económica de las partes
              involucradas. Además, los resultados pueden ser inciertos y poco
              flexibles.
            </p>

            <p className={styles.text}>
              La conciliación permite encontrar soluciones rápidas y efectivas,
              enfocadas en acuerdos que beneficien a ambas partes sin necesidad
              de un litigio prolongado.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación civil en Colombia?
            </h2>

            <p className={styles.text}>
              Para iniciar un proceso de conciliación civil, se debe presentar
              una solicitud ante un centro de conciliación autorizado. Luego, se
              programa una audiencia en la que las partes intentan llegar a un
              acuerdo con la intervención de un conciliador.
            </p>

            <p className={styles.text}>
              Si se logra un acuerdo, este queda consignado en un acta con
              validez legal. En caso contrario, las partes pueden acudir a otras
              vías legales.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
