"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function IncumplimientoDeContratosContent() {
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
            CONCILIACIÓN POR INCUMPLIMIENTO DE CONTRATOS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Incumplimiento de contratos en Colombia: resuelva conflictos sin
            demanda judicial
          </h1>

          <p className={styles.description}>
            La conciliación por incumplimiento de contratos permite resolver
            conflictos entre empresas, comerciantes y particulares de forma
            rápida, legal y efectiva en Bogotá y Colombia, evitando procesos
            judiciales largos y costosos. Este mecanismo facilita acuerdos sobre
            pagos, entregas, compensaciones, terminación contractual y
            cumplimiento de obligaciones con plena validez jurídica.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es el incumplimiento de contrato y cómo resolverlo en
              Colombia?
            </h2>

            <p className={styles.text}>
              El incumplimiento contractual ocurre cuando una de las partes no
              cumple total o parcialmente las obligaciones pactadas en un
              contrato. Esto puede incluir falta de pago, retrasos, entrega
              incompleta de productos o servicios, incumplimiento de plazos,
              terminación injustificada del contrato o incumplimiento de
              condiciones específicas acordadas previamente.
            </p>

            <p className={styles.text}>
              En Colombia, muchos conflictos contractuales pueden resolverse
              mediante conciliación sin necesidad de acudir inmediatamente a un
              juez. La conciliación permite que las partes negocien soluciones
              prácticas y lleguen a acuerdos claros con ayuda de un conciliador
              autorizado.
            </p>

            <p className={styles.text}>
              Este mecanismo es ampliamente utilizado en contratos civiles,
              comerciales, de prestación de servicios, arrendamientos, acuerdos
              empresariales y diferentes relaciones contractuales entre personas
              o compañías.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Tipos de incumplimiento contractual más comunes en Colombia
            </h2>

            <p className={styles.text}>
              Los incumplimientos pueden presentarse de diferentes maneras según
              las obligaciones pactadas en el contrato y el tipo de relación
              entre las partes.
            </p>

            <ul className={styles.list}>
              <li>Incumplimiento total del contrato.</li>
              <li>Incumplimiento parcial de obligaciones.</li>
              <li>Retrasos en pagos o entregas.</li>
              <li>Incumplimiento en calidad del producto o servicio.</li>
              <li>Terminación unilateral injustificada.</li>
              <li>Falta de entrega de bienes pactados.</li>
              <li>Incumplimiento de cláusulas económicas.</li>
              <li>Incumplimiento de tiempos o cronogramas.</li>
              <li>Incumplimiento de acuerdos comerciales.</li>
              <li>Conflictos derivados de contratos verbales o informales.</li>
            </ul>

            <p className={styles.text}>
              Identificar correctamente el tipo de incumplimiento es importante
              para definir la mejor estrategia de negociación y conciliación.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de resolver conflictos contractuales mediante
              conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Solución rápida y efectiva</h3>
                <p className={styles.cardText}>
                  Permite resolver conflictos en menor tiempo frente a una
                  demanda judicial.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Ahorro de costos legales</h3>
                <p className={styles.cardText}>
                  Reduce gastos relacionados con abogados y procesos judiciales
                  prolongados.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita demandas judiciales</h3>
                <p className={styles.cardText}>
                  Facilita acuerdos sin necesidad de acudir inmediatamente a un
                  juez.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos con validez legal</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos en Colombia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Protege relaciones comerciales
                </h3>
                <p className={styles.cardText}>
                  Ayuda a conservar relaciones entre clientes, proveedores o
                  empresas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Soluciones flexibles</h3>
                <p className={styles.cardText}>
                  Permite renegociar plazos, pagos y condiciones contractuales.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué evitar una demanda por incumplimiento de contrato?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales por incumplimiento contractual en Colombia
              pueden tardar largos periodos y generar costos importantes para
              ambas partes. Además del tiempo y dinero invertidos, los litigios
              suelen deteriorar relaciones comerciales y generar desgaste
              administrativo.
            </p>

            <p className={styles.text}>
              En muchos casos, mientras avanza el proceso judicial, las partes
              continúan acumulando pérdidas económicas, incumplimientos o daños
              relacionados con el contrato.
            </p>

            <p className={styles.text}>
              La conciliación permite enfocarse en soluciones prácticas como
              acuerdos de pago, cumplimiento parcial, renegociación de
              condiciones, compensaciones económicas o terminación organizada
              del contrato.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo iniciar una conciliación por incumplimiento de contrato?
            </h2>

            <p className={styles.text}>
              El proceso inicia con una solicitud ante un centro de conciliación
              autorizado en Colombia. En la solicitud se identifican las partes,
              el contrato involucrado y el tipo de incumplimiento presentado.
            </p>

            <p className={styles.text}>
              Posteriormente, se programa una audiencia donde las partes pueden
              presentar contratos, facturas, comprobantes de pago, correos,
              conversaciones, cotizaciones y demás documentos relacionados con
              el conflicto contractual.
            </p>

            <p className={styles.text}>
              Si se logra un acuerdo, este queda consignado en un acta de
              conciliación con plena validez legal y obligatorio cumplimiento en
              Colombia.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Recomendaciones antes de asistir a una conciliación contractual
            </h2>

            <p className={styles.text}>
              Una buena preparación puede facilitar mejores acuerdos y evitar
              nuevos conflictos posteriores.
            </p>

            <ul className={styles.list}>
              <li>Llevar copia completa del contrato.</li>
              <li>Organizar soportes, pagos y comunicaciones.</li>
              <li>Definir claramente qué solución se busca.</li>
              <li>Identificar cláusulas incumplidas.</li>
              <li>
                Tener claridad sobre valores, plazos y obligaciones pendientes.
              </li>
              <li>
                Proponer alternativas de solución realistas y verificables.
              </li>
            </ul>

            <p className={styles.text}>
              Los acuerdos claros, específicos y bien redactados facilitan el
              cumplimiento y reducen futuros problemas legales.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre incumplimiento de contratos
            </h2>

            <p className={styles.text}>
              <strong>¿La conciliación tiene validez legal en Colombia?</strong>
              <br />
              Sí. El acta de conciliación tiene efectos jurídicos y puede
              exigirse judicialmente en caso de incumplimiento.
            </p>

            <p className={styles.text}>
              <strong>
                ¿Se puede conciliar un contrato comercial o civil?
              </strong>
              <br />
              Sí. La conciliación aplica para múltiples tipos de contratos entre
              particulares y empresas.
            </p>

            <p className={styles.text}>
              <strong>
                ¿Qué pasa si una parte incumple el acuerdo conciliado?
              </strong>
              <br />
              El acuerdo puede ejecutarse judicialmente debido a su validez
              legal en Colombia.
            </p>

            <p className={styles.text}>
              <strong>
                ¿La conciliación evita acudir a una demanda judicial?
              </strong>
              <br />
              En muchos casos sí, especialmente cuando las partes logran un
              acuerdo claro y voluntario sobre el conflicto contractual.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
