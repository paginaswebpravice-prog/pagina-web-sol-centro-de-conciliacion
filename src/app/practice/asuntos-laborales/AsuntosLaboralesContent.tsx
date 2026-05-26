"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function AsuntosLaboralesContent() {
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
            CONCILIACIÓN LABORAL Y CONFLICTOS DE TRABAJO EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación laboral en Colombia: soluciones legales rápidas para
            trabajadores y empleadores
          </h1>

          <p className={styles.description}>
            La conciliación laboral en Colombia es un mecanismo legal que
            permite resolver conflictos entre trabajadores y empleadores de
            forma rápida, segura y efectiva, evitando procesos judiciales largos
            y costosos. En Bogotá y diferentes ciudades de Colombia, miles de
            conflictos laborales relacionados con despidos, liquidaciones,
            salarios, prestaciones sociales y terminación de contratos pueden
            solucionarse mediante acuerdos con plena validez jurídica.
          </p>

          <p className={styles.description}>
            A través de la conciliación laboral, las partes pueden negociar
            acuerdos de pago, reconocimiento de derechos laborales y soluciones
            prácticas que reduzcan el desgaste emocional, financiero y jurídico
            que normalmente implica un proceso ante un juez laboral.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación laboral y cómo funciona en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación laboral es un mecanismo alternativo de resolución
              de conflictos mediante el cual empleadores y trabajadores buscan
              llegar a un acuerdo con la ayuda de un conciliador autorizado, sin
              necesidad de acudir inmediatamente a una demanda judicial.
            </p>

            <p className={styles.text}>
              En Colombia, este procedimiento tiene plena validez legal y puede
              realizarse antes, durante o incluso después de ciertos procesos
              judiciales laborales. El objetivo principal es encontrar
              soluciones equilibradas que permitan resolver el conflicto de
              manera más ágil y menos confrontativa.
            </p>

            <p className={styles.text}>
              Durante la audiencia, las partes pueden presentar documentos,
              soportes laborales, liquidaciones, contratos, comprobantes de pago
              y propuestas de acuerdo para intentar construir una solución
              satisfactoria para ambas partes.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conflictos laborales que se pueden conciliar en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación laboral aplica a múltiples conflictos derivados de
              relaciones de trabajo, contratos laborales y obligaciones entre
              trabajadores y empleadores.
            </p>

            <ul className={styles.list}>
              <li>Despido sin justa causa.</li>
              <li>Liquidación de contratos laborales.</li>
              <li>Salarios pendientes de pago.</li>
              <li>Prestaciones sociales adeudadas.</li>
              <li>Horas extras y recargos nocturnos.</li>
              <li>Indemnizaciones laborales.</li>
              <li>Vacaciones no pagadas.</li>
              <li>Incumplimiento de contratos de trabajo.</li>
              <li>Acuerdos de retiro laboral.</li>
              <li>Conflictos por terminación laboral.</li>
              <li>Reconocimiento de derechos laborales.</li>
              <li>Acuerdos de pago entre trabajador y empresa.</li>
            </ul>

            <p className={styles.text}>
              Muchos de estos conflictos pueden resolverse en una sola audiencia
              cuando las partes asisten con disposición de negociar y con la
              documentación laboral organizada correctamente.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación laboral para trabajadores y empresas
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Evita demandas laborales prolongadas
                </h3>

                <p className={styles.cardText}>
                  Permite solucionar conflictos sin iniciar procesos judiciales
                  que pueden tardar meses o incluso años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos de pago rápidos</h3>

                <p className={styles.cardText}>
                  Facilita pagos, indemnizaciones y acuerdos económicos en menor
                  tiempo para el trabajador.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Reducción de costos legales
                </h3>

                <p className={styles.cardText}>
                  Disminuye gastos asociados a procesos judiciales, honorarios y
                  trámites prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos con validez jurídica
                </h3>

                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos legales y puede exigirse
                  judicialmente en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones más flexibles</h3>

                <p className={styles.cardText}>
                  Las partes pueden negociar plazos, cuotas, fechas y
                  condiciones adaptadas a sus necesidades.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Menor desgaste emocional</h3>

                <p className={styles.cardText}>
                  Reduce confrontaciones y permite cerrar conflictos laborales
                  de manera más tranquila y práctica.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos importantes para una conciliación laboral
            </h2>

            <p className={styles.text}>
              La preparación documental es clave dentro de cualquier
              conciliación laboral en Colombia. Tener soportes organizados ayuda
              a sustentar reclamaciones, verificar pagos y facilitar acuerdos
              claros durante la audiencia.
            </p>

            <ul className={styles.list}>
              <li>Contrato de trabajo.</li>
              <li>Desprendibles de nómina.</li>
              <li>Liquidaciones laborales.</li>
              <li>Certificaciones laborales.</li>
              <li>Correos electrónicos y chats.</li>
              <li>Comprobantes de pago.</li>
              <li>Cartas de despido o renuncia.</li>
              <li>Acuerdos previos entre las partes.</li>
              <li>Soportes de horas extras o recargos.</li>
            </ul>

            <p className={styles.text}>
              Llevar documentos claros y bien organizados permite que el
              conciliador comprenda mejor el conflicto y ayuda a construir
              acuerdos más precisos y seguros jurídicamente.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda laboral en Colombia?
            </h2>

            <p className={styles.text}>
              Los procesos laborales pueden extenderse durante largos periodos y
              generar incertidumbre económica tanto para trabajadores como para
              empresas. Además, las demandas suelen implicar costos legales,
              tiempos de espera y desgaste emocional para ambas partes.
            </p>

            <p className={styles.text}>
              La conciliación laboral permite enfocarse en soluciones rápidas y
              prácticas, priorizando acuerdos claros sobre pagos, obligaciones y
              compromisos sin necesidad de acudir inmediatamente a un litigio
              judicial.
            </p>

            <p className={styles.text}>
              En muchos casos, una conciliación bien manejada permite preservar
              relaciones laborales, proteger la reputación empresarial y evitar
              conflictos mayores en el futuro.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación laboral paso a paso?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la presentación de una solicitud ante un
              centro de conciliación autorizado en Colombia. Posteriormente, se
              cita a las partes a una audiencia donde podrán exponer el
              conflicto y buscar un acuerdo con la intervención de un
              conciliador.
            </p>

            <p className={styles.text}>
              Durante la audiencia se revisan documentos, reclamaciones,
              liquidaciones, pagos pendientes y posibles propuestas de solución.
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez jurídica.
            </p>

            <p className={styles.text}>
              En caso de no lograrse un acuerdo, las partes conservan la
              posibilidad de acudir a otras vías legales en Colombia.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Asesoría para conciliaciones laborales en Bogotá y Colombia
            </h2>

            <p className={styles.text}>
              Contar con orientación antes de una audiencia laboral puede marcar
              una gran diferencia durante la negociación. Una adecuada revisión
              de documentos, liquidaciones y propuestas ayuda a evitar errores y
              facilita acuerdos más claros y seguros.
            </p>

            <p className={styles.text}>
              La asesoría en conciliación laboral puede ayudarte a preparar tu
              caso, organizar evidencia, revisar acuerdos de pago y comprender
              los efectos legales del acta de conciliación en Colombia.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
