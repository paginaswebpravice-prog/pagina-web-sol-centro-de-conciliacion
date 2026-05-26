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
            CONCILIACIÓN DE OBLIGACIONES ECONÓMICAS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Resuelva deudas y obligaciones económicas sin procesos judiciales en
            Colombia
          </h1>

          <p className={styles.description}>
            La conciliación en obligaciones económicas permite solucionar
            conflictos relacionados con deudas, préstamos, acuerdos de pago y
            compromisos financieros entre personas o empresas de manera rápida,
            legal y efectiva en Bogotá y Colombia. Este mecanismo evita procesos
            judiciales largos, reduce costos legales y facilita acuerdos con
            validez jurídica y obligatorio cumplimiento.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué son las obligaciones económicas y cómo pueden resolverse en
              Colombia?
            </h2>

            <p className={styles.text}>
              Las obligaciones económicas son compromisos financieros adquiridos
              entre personas naturales o jurídicas que implican pagos de dinero,
              entrega de bienes o cumplimiento de determinadas condiciones
              económicas.
            </p>

            <p className={styles.text}>
              Cuando una de las partes incumple lo pactado, pueden surgir
              conflictos relacionados con pagos pendientes, intereses, plazos,
              incumplimientos contractuales o cobro de deudas. En Colombia,
              muchas de estas situaciones pueden resolverse mediante
              conciliación antes de iniciar un proceso judicial.
            </p>

            <p className={styles.text}>
              La conciliación permite que acreedor y deudor negocien soluciones
              prácticas con la ayuda de un conciliador autorizado, facilitando
              acuerdos de pago claros, cronogramas de cumplimiento y mecanismos
              legales que beneficien a ambas partes.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Tipos de obligaciones económicas que pueden conciliarse en
              Colombia
            </h2>

            <p className={styles.text}>
              La conciliación aplica para múltiples conflictos económicos y
              financieros entre particulares, empresas, comerciantes y
              contratistas.
            </p>

            <ul className={styles.list}>
              <li>Deudas entre particulares.</li>
              <li>Préstamos personales o familiares.</li>
              <li>Obligaciones derivadas de contratos comerciales.</li>
              <li>Pagos pendientes por prestación de servicios.</li>
              <li>Incumplimiento de acuerdos económicos.</li>
              <li>Deudas empresariales o comerciales.</li>
              <li>Conflictos por pagos de mercancías o productos.</li>
              <li>Acuerdos de pago por mora o incumplimiento.</li>
              <li>Reconocimiento de deudas y obligaciones.</li>
              <li>
                Compromisos financieros entre socios o aliados comerciales.
              </li>
            </ul>

            <p className={styles.text}>
              Cada caso puede manejarse de manera diferente dependiendo del tipo
              de obligación, los soportes existentes y la voluntad de las partes
              para llegar a un acuerdo.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de conciliar deudas y obligaciones económicas
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita procesos judiciales</h3>
                <p className={styles.cardText}>
                  Permite solucionar conflictos económicos sin demandas largas y
                  costosas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos de pago flexibles</h3>
                <p className={styles.cardText}>
                  Facilita negociaciones adaptadas a la capacidad económica de
                  las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Recuperación más rápida de dinero
                </h3>
                <p className={styles.cardText}>
                  Agiliza el cobro de obligaciones sin esperar largos procesos
                  judiciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Reducción de costos legales
                </h3>
                <p className={styles.cardText}>
                  Disminuye gastos relacionados con abogados, demandas y
                  procesos ejecutivos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Conserva relaciones comerciales
                </h3>
                <p className={styles.cardText}>
                  Ayuda a mantener relaciones personales o comerciales sin mayor
                  confrontación.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué pasa si no se llega a un acuerdo sobre la deuda?
            </h2>

            <p className={styles.text}>
              Cuando las partes no logran conciliar, el conflicto puede avanzar
              hacia procesos judiciales de cobro, demandas ejecutivas, embargos
              de bienes, cuentas bancarias o salarios, dependiendo del tipo de
              obligación y de los documentos existentes.
            </p>

            <p className={styles.text}>
              Además del desgaste económico y legal, los procesos judiciales
              suelen implicar mayores tiempos de espera e incertidumbre para las
              partes involucradas.
            </p>

            <p className={styles.text}>
              Por esta razón, muchas personas y empresas prefieren intentar una
              conciliación antes de acudir a un juez, buscando soluciones
              rápidas y negociadas que permitan recuperar el dinero o
              reorganizar la obligación de manera viable.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación de obligaciones económicas en
              Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. Posteriormente, se cita a las partes a una
              audiencia donde se busca llegar a un acuerdo económico claro y
              verificable.
            </p>

            <p className={styles.text}>
              Durante la audiencia pueden definirse valores exactos, fechas de
              pago, cuotas, formas de cumplimiento, garantías y consecuencias en
              caso de incumplimiento.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez legal y obligatorio
              cumplimiento en Colombia.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Importancia de una conciliación bien estructurada
            </h2>

            <p className={styles.text}>
              Una conciliación económica bien redactada debe dejar claramente
              establecidas las obligaciones, montos, fechas y condiciones de
              pago. Esto evita futuras discusiones y facilita el cumplimiento de
              los acuerdos alcanzados.
            </p>

            <p className={styles.text}>
              También es importante contar con soportes como contratos,
              comprobantes de pago, facturas, pagarés, mensajes o cualquier
              documento que permita demostrar la existencia de la obligación
              económica.
            </p>

            <p className={styles.text}>
              Una adecuada orientación durante la conciliación puede ayudar a
              proteger los derechos de ambas partes y lograr acuerdos más
              seguros, claros y sostenibles en el tiempo.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
