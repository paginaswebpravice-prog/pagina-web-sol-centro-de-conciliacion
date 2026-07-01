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
            CONCILIACIÓN Y CONFLICTOS DE ARRENDAMIENTO EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación en conflictos de arrendamiento en Colombia: resuelva
            problemas entre arrendador y arrendatario sin acudir a un juez
          </h1>

          <p className={styles.description}>
            Si usted es arrendador o arrendatario y enfrenta problemas
            relacionados con el pago del canon de arrendamiento, la entrega del
            inmueble, incumplimientos del contrato, daños a la propiedad,
            servicios públicos o terminación del contrato, la conciliación puede
            ser la alternativa más rápida para resolver el conflicto sin iniciar
            un proceso judicial.
          </p>

          <p className={styles.description}>
            La conciliación en conflictos de arrendamiento en Colombia permite
            construir acuerdos con efectos legales entre las partes, reduciendo
            costos, tiempos y el desgaste que implica acudir ante un juez. En
            una audiencia es posible negociar pagos pendientes, cronogramas de
            entrega, restitución voluntaria del inmueble, reparación de daños y
            otras obligaciones derivadas del contrato.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo resolver un conflicto de arrendamiento en Colombia sin
              acudir a una demanda?
            </h2>

            <p className={styles.text}>
              Un conflicto de arrendamiento surge cuando existe un desacuerdo
              entre arrendador y arrendatario relacionado con el contrato de
              arrendamiento, el pago del canon, la entrega del inmueble, el uso
              adecuado de la propiedad o las obligaciones pactadas entre las
              partes.
            </p>

            <p className={styles.text}>
              En Colombia, muchos de estos conflictos pueden resolverse mediante
              conciliación antes de acudir a procesos judiciales. La
              conciliación permite que las partes negocien soluciones prácticas
              con ayuda de un conciliador autorizado, evitando desgaste
              económico, demoras judiciales y mayores tensiones legales.
            </p>

            <p className={styles.text}>
              Además de ser un mecanismo rápido, la conciliación ayuda a
              conservar relaciones contractuales y facilita acuerdos de pago,
              entrega voluntaria del inmueble o reestructuración de obligaciones
              pendientes.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué problemas entre arrendador y arrendatario pueden resolverse
              mediante conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación aplica para múltiples conflictos derivados de
              contratos de arrendamiento de vivienda, locales comerciales,
              oficinas, bodegas y otros inmuebles urbanos o comerciales.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento del pago del canon de arrendamiento.</li>
              <li>Deudas por servicios públicos o administración.</li>
              <li>Restitución o entrega del inmueble arrendado.</li>
              <li>Terminación anticipada del contrato.</li>
              <li>Daños al inmueble o incumplimiento de reparaciones.</li>
              <li>Conflictos por cláusulas del contrato.</li>
              <li>Incumplimiento de acuerdos de pago.</li>
              <li>Problemas relacionados con depósitos o garantías.</li>
              <li>Uso indebido del inmueble arrendado.</li>
              <li>Disputas por aumentos del canon de arrendamiento.</li>
            </ul>

            <p className={styles.text}>
              En muchos casos, una conciliación bien estructurada permite evitar
              procesos de restitución de inmueble y facilita acuerdos que
              benefician a ambas partes.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué contratos de arrendamiento pueden solucionarse mediante
              conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación no se limita únicamente a contratos de vivienda
              urbana. También puede utilizarse para resolver controversias
              derivadas de diferentes modalidades de arrendamiento siempre que
              el asunto sea conciliable conforme a la legislación colombiana.
            </p>

            <ul className={styles.list}>
              <li>Arrendamiento de vivienda urbana.</li>
              <li>Locales comerciales.</li>
              <li>Oficinas.</li>
              <li>Bodegas.</li>
              <li>Consultorios.</li>
              <li>Parqueaderos.</li>
              <li>Inmuebles destinados a actividades empresariales.</li>
              <li>Inmuebles destinados a uso mixto.</li>
            </ul>

            <p className={styles.text}>
              Cada contrato puede presentar conflictos distintos; sin embargo,
              la conciliación permite construir acuerdos ajustados a las
              necesidades específicas de las partes antes de acudir a un proceso
              judicial.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué elegir la conciliación antes de demandar por un contrato
              de arrendamiento?
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita procesos judiciales</h3>
                <p className={styles.cardText}>
                  Reduce la necesidad de acudir a demandas de restitución o
                  procesos civiles largos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Recuperación rápida de dinero
                </h3>
                <p className={styles.cardText}>
                  Facilita acuerdos de pago claros para recuperar cánones o
                  deudas pendientes.
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
                <h3 className={styles.cardTitle}>Menor costo legal</h3>
                <p className={styles.cardText}>
                  Disminuye gastos asociados a abogados y procesos judiciales
                  prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones más rápidas</h3>
                <p className={styles.cardText}>
                  Permite resolver conflictos en semanas en lugar de meses o
                  años.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Mayor claridad en obligaciones
                </h3>
                <p className={styles.cardText}>
                  Define fechas, pagos, entregas y compromisos de manera clara y
                  verificable.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo conviene conciliar un conflicto de arrendamiento antes de
              acudir a un juez?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales por arrendamiento pueden tardar largos
              periodos y generar altos costos económicos tanto para el
              arrendador como para el arrendatario. Además del tiempo, estos
              procesos suelen generar desgaste emocional, dificultades para
              recuperar el inmueble y complicaciones financieras.
            </p>

            <p className={styles.text}>
              En algunos casos, mientras avanza el proceso judicial, continúan
              acumulándose cánones, servicios públicos, cuotas de administración
              y otros gastos relacionados con el inmueble.
            </p>

            <p className={styles.text}>
              La conciliación permite construir soluciones prácticas y rápidas,
              enfocadas en acuerdos de pago, entrega voluntaria del inmueble,
              refinanciación de obligaciones o terminación organizada del
              contrato de arrendamiento.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos recomendados para una conciliación de arrendamiento
            </h2>

            <p className={styles.text}>
              Aunque cada caso es diferente, presentar la documentación
              relacionada con el contrato facilita la audiencia y permite
              analizar el conflicto con mayor claridad.
            </p>

            <ul className={styles.list}>
              <li>Contrato de arrendamiento.</li>
              <li>Otrosí o modificaciones.</li>
              <li>Comprobantes de pago.</li>
              <li>Estados de cuenta.</li>
              <li>Mensajes de WhatsApp.</li>
              <li>Correos electrónicos.</li>
              <li>Fotografías del inmueble.</li>
              <li>Inventario de entrega.</li>
              <li>Facturas por reparaciones.</li>
              <li>Recibos de servicios públicos.</li>
            </ul>

            <p className={styles.text}>
              Contar con estos soportes facilita que las partes negocien
              acuerdos claros sobre pagos, reparaciones, entrega del inmueble y
              demás obligaciones derivadas del contrato.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación por arrendamiento en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la presentación de una solicitud ante un
              centro de conciliación autorizado en Colombia. Allí se identifican
              las partes, el conflicto y las pretensiones relacionadas con el
              contrato de arrendamiento.
            </p>

            <p className={styles.text}>
              Posteriormente, se programa una audiencia de conciliación donde
              arrendador y arrendatario pueden presentar documentos,
              comprobantes de pago, contratos, mensajes, estados de cuenta y
              demás soportes relacionados con el conflicto.
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
              Recomendaciones antes de asistir a una conciliación de
              arrendamiento
            </h2>

            <p className={styles.text}>
              Prepararse correctamente antes de la audiencia puede facilitar un
              mejor acuerdo y evitar nuevos conflictos posteriores.
            </p>

            <ul className={styles.list}>
              <li>Llevar copia del contrato de arrendamiento.</li>
              <li>Organizar recibos, pagos y comprobantes pendientes.</li>
              <li>Definir claramente qué solución se busca.</li>
              <li>Revisar cláusulas importantes del contrato.</li>
              <li>Llevar soportes relacionados con daños o incumplimientos.</li>
              <li>Verificar fechas exactas de pagos, entrega o terminación.</li>
            </ul>

            <p className={styles.text}>
              Un acuerdo claro y bien redactado puede evitar futuros procesos
              judiciales y facilitar el cumplimiento de las obligaciones por
              ambas partes.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Problemas más frecuentes entre arrendadores y arrendatarios en
              Colombia
            </h2>

            <p className={styles.text}>
              Los conflictos derivados de contratos de arrendamiento pueden
              surgir en cualquier etapa de la relación contractual. En algunos
              casos el desacuerdo aparece por el incumplimiento en el pago del
              canon, mientras que en otros está relacionado con la entrega del
              inmueble, daños ocasionados durante la ocupación, reparaciones
              locativas o terminación anticipada del contrato.
            </p>

            <p className={styles.text}>
              También son frecuentes las controversias sobre el incremento del
              canon, devolución del depósito, pago de servicios públicos,
              administración, mejoras realizadas al inmueble y cumplimiento de
              las obligaciones pactadas entre las partes. La conciliación
              permite analizar cada situación de forma imparcial y construir
              acuerdos que reduzcan el riesgo de un proceso judicial.
            </p>

            <p className={styles.text}>
              Cuando existe disposición para negociar, muchas diferencias pueden
              solucionarse mediante acuerdos que beneficien tanto al propietario
              como al arrendatario, evitando mayores costos económicos y tiempos
              prolongados de litigio.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué acuerdos pueden lograrse durante una conciliación de
              arrendamiento?
            </h2>

            <p className={styles.text}>
              La conciliación ofrece flexibilidad para que las partes construyan
              acuerdos adaptados a sus necesidades. Dependiendo del conflicto,
              es posible pactar cronogramas de pago, fechas de entrega del
              inmueble, reducción de deudas, compensaciones económicas,
              reconocimiento de reparaciones, distribución de gastos pendientes
              o modificaciones al contrato.
            </p>

            <p className={styles.text}>
              Los acuerdos alcanzados quedan consignados en un acta de
              conciliación con efectos jurídicos, brindando seguridad tanto al
              arrendador como al arrendatario y disminuyendo la probabilidad de
              nuevos conflictos sobre el mismo contrato.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si no se llega a un acuerdo durante la conciliación?
            </h2>

            <p className={styles.text}>
              No todas las audiencias terminan con un acuerdo. Cuando las partes
              no logran resolver sus diferencias, la conciliación deja
              constancia del intento realizado y cada interesado conserva la
              posibilidad de acudir a las acciones judiciales que correspondan.
            </p>

            <p className={styles.text}>
              Sin embargo, incluso cuando no se alcanza un acuerdo definitivo,
              la audiencia suele permitir identificar puntos de consenso que
              facilitan una negociación posterior o reducen el alcance del
              conflicto.
            </p>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué cada vez más propietarios y arrendatarios prefieren la
              conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación permite encontrar soluciones en menos tiempo que
              un proceso judicial, disminuye el riesgo de nuevos conflictos y
              brinda a ambas partes la posibilidad de construir acuerdos
              flexibles que respondan a sus necesidades económicas y
              contractuales.
            </p>

            <p className={styles.text}>
              En lugar de esperar durante meses el resultado de una demanda,
              muchas personas optan por negociar pagos, entregas voluntarias del
              inmueble, cronogramas de cumplimiento o modificaciones al contrato
              mediante una audiencia de conciliación.
            </p>

            <p className={styles.text}>
              Esto favorece tanto al arrendador, que busca proteger su
              patrimonio, como al arrendatario, que puede regularizar su
              situación sin enfrentar inmediatamente un litigio.
            </p>
          </div>

          {/* FAQ */}
          <div className={`${styles.block} ${styles.faqSection}`}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación en arrendamientos
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación sirve para recuperar cánones atrasados?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. En Colombia es común utilizar conciliación para establecer
                  acuerdos de pago relacionados con cánones vencidos, servicios
                  públicos, administración y demás obligaciones pendientes del
                  contrato de arrendamiento.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita un proceso de restitución de inmueble?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. La conciliación puede facilitar acuerdos
                  sobre fechas de entrega voluntaria, pagos pendientes o
                  terminación del contrato sin necesidad de acudir a un juez.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿El acta de conciliación tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  exigirse judicialmente en caso de incumplimiento por alguna de
                  las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede hacer conciliación en contratos comerciales y de
                  vivienda?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La conciliación aplica tanto para arrendamientos de
                  vivienda como para locales comerciales, oficinas, bodegas y
                  otros inmuebles urbanos o comerciales.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una de las partes incumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  Si alguna de las partes incumple el acta de conciliación, la
                  otra puede acudir a mecanismos legales para exigir el
                  cumplimiento de las obligaciones pactadas en el acuerdo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
