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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué obligaciones económicas pueden resolverse mediante
              conciliación?
            </h2>

            <p className={styles.text}>
              En Colombia, la conciliación es una alternativa eficaz para
              solucionar múltiples conflictos relacionados con obligaciones de
              carácter civil, comercial y patrimonial. Siempre que el asunto sea
              conciliable y exista disposición de las partes, es posible
              alcanzar acuerdos que eviten un proceso judicial.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Préstamos entre particulares
                </h3>
                <p className={styles.cardText}>
                  Dinero prestado entre familiares, amigos o conocidos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Facturas pendientes</h3>
                <p className={styles.cardText}>
                  Cobro de servicios prestados o mercancías entregadas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Pagarés</h3>
                <p className={styles.cardText}>
                  Obligaciones respaldadas mediante títulos valores.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos civiles</h3>
                <p className={styles.cardText}>
                  Incumplimientos derivados de contratos entre particulares.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos comerciales</h3>
                <p className={styles.cardText}>
                  Obligaciones entre empresas, comerciantes o proveedores.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Reconocimiento de deuda</h3>
                <p className={styles.cardText}>
                  Acuerdos para formalizar obligaciones económicas existentes.
                </p>
              </div>
            </div>
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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué acuerdos pueden lograrse durante la conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación permite construir soluciones adaptadas a la
              situación financiera de las partes, facilitando el cumplimiento de
              las obligaciones sin necesidad de acudir a procesos ejecutivos.
            </p>

            <ul className={styles.list}>
              <li>Acuerdos de pago por cuotas.</li>
              <li>Reducción o negociación de intereses.</li>
              <li>Nuevos plazos para cancelar la obligación.</li>
              <li>Condonación parcial de valores.</li>
              <li>Pago mediante entrega de bienes.</li>
              <li>Compensación entre obligaciones.</li>
              <li>Reestructuración de la deuda.</li>
              <li>Reconocimiento formal del compromiso económico.</li>
              <li>Garantías para asegurar el cumplimiento.</li>
              <li>Terminación definitiva del conflicto económico.</li>
            </ul>
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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos recomendados para una conciliación de obligaciones
              económicas
            </h2>

            <p className={styles.text}>
              Contar con la documentación adecuada facilita el análisis del caso
              y ayuda a construir acuerdos más claros, verificables y seguros
              para ambas partes.
            </p>

            <ul className={styles.list}>
              <li>Contratos civiles o comerciales.</li>
              <li>Pagarés.</li>
              <li>Facturas.</li>
              <li>Comprobantes de pago.</li>
              <li>Transferencias bancarias.</li>
              <li>Estados de cuenta.</li>
              <li>Correos electrónicos.</li>
              <li>Mensajes de WhatsApp.</li>
              <li>Cotizaciones.</li>
              <li>Cualquier documento que demuestre la obligación.</li>
            </ul>

            <p className={styles.text}>
              Mientras mayor sea el soporte documental, más sencillo será
              construir un acuerdo preciso y evitar futuras discusiones sobre el
              cumplimiento de las obligaciones pactadas.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué intentar una conciliación antes de iniciar un proceso
              ejecutivo?
            </h2>

            <p className={styles.text}>
              Muchas obligaciones económicas terminan en procesos ejecutivos que
              pueden implicar embargos, medidas cautelares, gastos judiciales y
              largos tiempos de espera. La conciliación ofrece la posibilidad de
              encontrar soluciones voluntarias antes de que el conflicto escale.
            </p>

            <p className={styles.text}>
              Además de reducir costos, permite conservar relaciones
              comerciales, recuperar recursos en menor tiempo y establecer
              compromisos que resulten viables para ambas partes.
            </p>

            <p className={styles.text}>
              Cuando el acuerdo queda consignado en un acta de conciliación,
              este produce efectos legales y brinda mayor seguridad jurídica
              frente al cumplimiento de las obligaciones pactadas.
            </p>
          </div>

          {/* FAQ */}
          <div className={`${styles.block} ${styles.faqSection}`}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre obligaciones económicas en Colombia
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene plena validez jurídica y
                  puede exigirse judicialmente en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se pueden conciliar deudas entre particulares?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La conciliación aplica para conflictos económicos entre
                  familiares, amigos, socios, comerciantes y empresas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué documentos sirven para demostrar una deuda?
                </h3>

                <p className={styles.faqAnswer}>
                  Contratos, pagarés, facturas, comprobantes de pago, mensajes,
                  correos electrónicos y otros soportes pueden ayudar a probar
                  la obligación económica.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes incumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  El acuerdo conciliado puede ejecutarse judicialmente debido a
                  la validez legal del acta de conciliación en Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita una demanda judicial?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. Cuando las partes logran acuerdos claros y
                  verificables, pueden evitar procesos judiciales largos y
                  costosos.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué elegir la conciliación para resolver obligaciones
              económicas?
            </h2>

            <p className={styles.text}>
              La conciliación es una alternativa ampliamente utilizada en
              Colombia para solucionar conflictos económicos entre personas,
              empresas y comerciantes. Permite negociar directamente, evitar
              largos litigios y obtener acuerdos con respaldo jurídico.
            </p>

            <p className={styles.text}>
              Gracias a este mecanismo es posible resolver conflictos
              relacionados con préstamos, deudas, facturas, incumplimientos
              contractuales, obligaciones comerciales y acuerdos de pago,
              promoviendo soluciones rápidas y beneficiosas para todas las
              partes involucradas.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
