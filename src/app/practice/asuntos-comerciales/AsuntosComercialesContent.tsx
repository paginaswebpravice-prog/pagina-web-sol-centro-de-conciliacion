"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosComercialesContent() {
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
            CONCILIACIÓN COMERCIAL Y EMPRESARIAL EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación comercial en Colombia: resuelva conflictos
            empresariales sin demanda
          </h1>

          <p className={styles.description}>
            La conciliación en asuntos comerciales permite resolver conflictos
            empresariales de forma rápida, legal y efectiva, evitando procesos
            judiciales largos y costosos en Bogotá y Colombia. Este mecanismo
            facilita acuerdos entre las partes con plena validez jurídica,
            protegiendo los intereses económicos y la continuidad de las
            relaciones comerciales.
          </p>
        </motion.div>

        {/* BLOQUE 1 */}
        <div className={styles.content}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación comercial y cómo funciona en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación comercial es un mecanismo alternativo de
              resolución de conflictos mediante el cual dos o más partes buscan
              llegar a un acuerdo con la ayuda de un conciliador autorizado. En
              Colombia, este proceso tiene efectos legales y puede evitar la
              necesidad de acudir a procesos judiciales.
            </p>

            <p className={styles.text}>
              Es ampliamente utilizado por empresas, comerciantes y
              emprendedores para resolver disputas relacionadas con contratos,
              pagos, incumplimientos y relaciones comerciales, permitiendo una
              solución más ágil y eficiente.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos comerciales que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación aplica a una amplia variedad de conflictos
              empresariales, especialmente aquellos donde existe la posibilidad
              de llegar a un acuerdo entre las partes.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento de contratos comerciales.</li>
              <li>Conflictos entre socios o accionistas.</li>
              <li>Deudas y obligaciones económicas.</li>
              <li>Disputas por prestación de servicios.</li>
              <li>Conflictos en relaciones comerciales continuas.</li>
              <li>Reclamaciones por daños o perjuicios.</li>
            </ul>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación comercial para empresas y negocios
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro de tiempo</h3>
                <p className={styles.cardText}>
                  Evita procesos judiciales que pueden tardar meses o incluso
                  años en resolverse.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Reducción de costos legales
                </h3>
                <p className={styles.cardText}>
                  Disminuye gastos legales asociados a demandas y procesos
                  judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  Los acuerdos tienen efectos jurídicos y pueden ser exigibles
                  legalmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Conservación de relaciones comerciales
                </h3>
                <p className={styles.cardText}>
                  Permite mantener relaciones entre empresas y clientes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Proceso confidencial</h3>
                <p className={styles.cardText}>
                  Evita la exposición pública de conflictos empresariales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones personalizadas</h3>
                <p className={styles.cardText}>
                  Las partes pueden acordar condiciones adaptadas a sus
                  necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda comercial en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales en Colombia pueden implicar altos costos,
              largos tiempos de espera y desgaste administrativo. Además, pueden
              afectar la reputación de la empresa y deteriorar relaciones
              comerciales.
            </p>

            <p className={styles.text}>
              La conciliación permite resolver el conflicto de manera rápida y
              estratégica, enfocándose en soluciones prácticas en lugar de
              disputas prolongadas.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación comercial paso a paso?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud de conciliación ante un centro
              autorizado. Posteriormente, se cita a las partes a una audiencia
              en la cual se busca llegar a un acuerdo con la intervención de un
              conciliador.
            </p>

            <p className={styles.text}>
              En caso de lograrse un acuerdo, este queda consignado en un acta
              con efectos legales. Si no hay acuerdo, las partes pueden acudir a
              otras vías legales.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
