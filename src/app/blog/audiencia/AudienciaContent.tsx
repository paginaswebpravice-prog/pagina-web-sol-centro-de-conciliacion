"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function AudienciaContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="audiencia"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Audiencia de conciliación en Colombia: cómo es y cómo prepararte
          </motion.h1>

          <motion.p>
            La <strong>audiencia de conciliación en Colombia</strong> es un
            mecanismo legal utilizado para resolver conflictos sin necesidad de
            llegar a un proceso judicial. En ciudades como{" "}
            <strong>Bogotá</strong>, este procedimiento es muy común en
            conflictos civiles, comerciales, de arrendamiento, deudas y
            responsabilidad contractual.
          </motion.p>

          <motion.p>
            Muchas personas buscan información sobre la audiencia de
            conciliación porque han recibido una citación y no saben qué
            ocurrirá ese día. La audiencia normalmente tiene cinco momentos:
            identificación de las partes, exposición de los hechos, precisión de
            las pretensiones, negociación y cierre mediante acta de acuerdo o
            constancia de no conciliación.
          </motion.p>

          <motion.h2>
            Cómo funciona la audiencia de conciliación en Colombia
          </motion.h2>

          <motion.p>
            En la audiencia, un conciliador imparcial escucha a las partes e
            intenta que lleguen a un acuerdo. Si se logra un acuerdo, este tiene
            efectos legales y presta mérito ejecutivo.
          </motion.p>

          <div className={styles.grid}>
            <section className={styles.innerCard}>
              <h3>Qué llevar a la audiencia</h3>
              <ul>
                <li>Documento de identidad.</li>
                <li>Soportes: contratos, facturas, chats, consignaciones.</li>
                <li>Propuesta escrita con monto y plazos.</li>
                <li>Dos alternativas de negociación.</li>
                <li>Liquidación de la deuda o pretensión.</li>
              </ul>
            </section>

            <section className={styles.innerCard}>
              <h3>Qué NO hacer en la audiencia</h3>
              <ul>
                <li>Ir sin cifras o sin fechas.</li>
                <li>No llevar pruebas.</li>
                <li>Firmar acuerdos ambiguos.</li>
                <li>No leer el acta.</li>
                <li>No negociar.</li>
              </ul>
            </section>
          </div>

          <motion.h2>Qué pasa si no se llega a un acuerdo</motion.h2>

          <motion.p>
            Si no hay acuerdo, el conciliador emitirá una constancia de no
            conciliación que permite iniciar un proceso judicial en Colombia.
          </motion.p>

          <motion.p>
            En Bogotá y en toda Colombia, muchas disputas se resuelven en esta
            etapa sin necesidad de juicio.
          </motion.p>
        </motion.article>
      </div>
    </div>
  );
}
