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
              ¿Cuáles son los tipos de incumplimiento de contrato más comunes en
              Colombia?
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

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Casos más frecuentes de incumplimiento de contratos en Colombia
            </h2>

            <p className={styles.text}>
              El incumplimiento contractual puede presentarse en diferentes
              sectores de la economía. Tanto personas naturales como empresas
              suelen acudir a la conciliación para resolver conflictos derivados
              del incumplimiento de obligaciones sin necesidad de iniciar un
              proceso judicial.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Contratos de prestación de servicios
                </h3>

                <p className={styles.cardText}>
                  Retrasos en la ejecución, incumplimiento de actividades, falta
                  de pago o terminación anticipada del contrato.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos de compraventa</h3>

                <p className={styles.cardText}>
                  Incumplimiento en la entrega de bienes, pagos pendientes o
                  productos que no cumplen lo pactado.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos de obra</h3>

                <p className={styles.cardText}>
                  Incumplimiento de cronogramas, sobrecostos, abandono de obra o
                  entrega incompleta.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos comerciales</h3>

                <p className={styles.cardText}>
                  Incumplimientos entre proveedores, distribuidores, clientes o
                  aliados comerciales.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Contratos de arrendamiento</h3>

                <p className={styles.cardText}>
                  Falta de pago, incumplimiento de obligaciones o terminación
                  del contrato.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos empresariales</h3>

                <p className={styles.cardText}>
                  Incumplimiento de obligaciones económicas, comerciales o
                  societarias.
                </p>
              </div>
            </div>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué contratos pueden resolverse mediante conciliación por
              incumplimiento en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación es un mecanismo aplicable a una gran variedad de
              contratos civiles y comerciales cuando una de las partes incumple
              las obligaciones pactadas. Antes de iniciar un proceso judicial,
              las partes pueden reunirse con un conciliador para negociar
              soluciones que les permitan cumplir, renegociar o finalizar el
              contrato de manera organizada y con plena validez jurídica.
            </p>

            <p className={styles.text}>
              Este mecanismo resulta especialmente útil cuando ambas partes
              desean evitar largos procesos judiciales, proteger la relación
              comercial o recuperar el valor económico del negocio mediante
              acuerdos rápidos y efectivos.
            </p>

            <ul className={styles.list}>
              <li>Contratos de prestación de servicios.</li>
              <li>Contratos de compraventa.</li>
              <li>Contratos de suministro.</li>
              <li>Contratos de obra o construcción.</li>
              <li>Contratos de arrendamiento.</li>
              <li>Contratos de transporte.</li>
              <li>Contratos de distribución.</li>
              <li>Contratos de franquicia.</li>
              <li>Contratos de colaboración empresarial.</li>
              <li>Contratos celebrados entre personas naturales.</li>
              <li>Contratos entre empresas o sociedades comerciales.</li>
              <li>Acuerdos comerciales con obligaciones de pago.</li>
            </ul>

            <p className={styles.text}>
              Independientemente del tipo de contrato, la conciliación permite
              analizar cada caso de manera individual para construir acuerdos
              relacionados con el cumplimiento de obligaciones, pagos
              pendientes, indemnizaciones, reprogramación de entregas,
              modificaciones contractuales o terminación del contrato por mutuo
              acuerdo.
            </p>
          </div>

          {/* BLOQUE NUEVO */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Principales causas de incumplimiento de contratos en Colombia
            </h2>

            <p className={styles.text}>
              El incumplimiento contractual puede originarse por múltiples
              circunstancias. Algunas obedecen a problemas económicos, mientras
              que otras están relacionadas con errores administrativos, falta de
              planeación o diferencias en la interpretación del contrato.
              Identificar la causa del conflicto es fundamental para encontrar
              una solución adecuada durante la conciliación.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Incumplimiento en los pagos
                </h3>

                <p className={styles.cardText}>
                  Retrasos o falta de pago de las obligaciones económicas
                  pactadas en el contrato.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Incumplimiento de plazos</h3>

                <p className={styles.cardText}>
                  Entrega tardía de bienes, ejecución de obras o prestación de
                  servicios fuera del tiempo acordado.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Productos o servicios deficientes
                </h3>

                <p className={styles.cardText}>
                  Cuando lo entregado no cumple las condiciones de calidad
                  establecidas en el contrato.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Incumplimiento parcial</h3>

                <p className={styles.cardText}>
                  Se ejecuta solo una parte de las obligaciones asumidas por
                  alguna de las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Terminación unilateral</h3>

                <p className={styles.cardText}>
                  Una de las partes decide finalizar el contrato sin cumplir las
                  condiciones previamente acordadas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Falta de comunicación</h3>

                <p className={styles.cardText}>
                  La ausencia de diálogo oportuno suele agravar pequeños
                  inconvenientes y terminar en conflictos contractuales más
                  complejos.
                </p>
              </div>
            </div>

            <p className={styles.text}>
              Independientemente de cuál haya sido el origen del incumplimiento,
              la conciliación brinda un espacio neutral para que las partes
              expliquen su posición, analicen las consecuencias del conflicto y
              negocien alternativas que permitan proteger sus intereses sin
              acudir inmediatamente a un proceso judicial.
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

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Soluciones que pueden lograrse mediante conciliación contractual
            </h2>

            <p className={styles.text}>
              Cada conflicto contractual tiene características diferentes. Por
              esta razón, durante la audiencia de conciliación las partes pueden
              construir soluciones adaptadas a sus necesidades y al contenido
              del contrato.
            </p>

            <ul className={styles.list}>
              <li>Acuerdos de pago.</li>
              <li>Cumplimiento de obligaciones pendientes.</li>
              <li>Entrega de bienes o productos.</li>
              <li>Prórroga de plazos.</li>
              <li>Modificación de cláusulas.</li>
              <li>Terminación anticipada del contrato.</li>
              <li>Compensaciones económicas.</li>
              <li>Condonación parcial de obligaciones.</li>
              <li>Renegociación de condiciones.</li>
              <li>Cronogramas para cumplir el contrato.</li>
            </ul>

            <p className={styles.text}>
              Estos acuerdos quedan consignados en un acta de conciliación con
              efectos legales, ofreciendo mayor seguridad para ambas partes.
            </p>
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

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos recomendados para una conciliación por incumplimiento
              de contrato
            </h2>

            <p className={styles.text}>
              Presentar la documentación adecuada facilita el análisis del
              conflicto y aumenta las posibilidades de alcanzar un acuerdo claro
              y verificable.
            </p>

            <ul className={styles.list}>
              <li>Contrato firmado.</li>
              <li>Otrosí o modificaciones contractuales.</li>
              <li>Facturas.</li>
              <li>Recibos de pago.</li>
              <li>Transferencias bancarias.</li>
              <li>Cotizaciones.</li>
              <li>Órdenes de compra.</li>
              <li>Correos electrónicos.</li>
              <li>Mensajes de WhatsApp relacionados con el contrato.</li>
              <li>Evidencias del incumplimiento.</li>
            </ul>

            <p className={styles.text}>
              Entre mayor sea el soporte documental presentado, más sencillo
              será construir un acuerdo que refleje la realidad del conflicto
              contractual.
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

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si las partes no llegan a un acuerdo durante la
              conciliación?
            </h2>

            <p className={styles.text}>
              Aunque la conciliación busca resolver el conflicto mediante el
              diálogo, no siempre es posible alcanzar un acuerdo. Cuando esto
              ocurre, las partes conservan la posibilidad de acudir a las
              acciones judiciales previstas por la legislación colombiana.
            </p>

            <p className={styles.text}>
              Sin embargo, haber intentado la conciliación permite demostrar la
              voluntad de solucionar el conflicto de manera pacífica y, en
              algunos asuntos, constituye un requisito previo para iniciar
              determinadas acciones judiciales.
            </p>

            <p className={styles.text}>
              Incluso cuando no se logra un acuerdo total, es posible resolver
              algunos puntos del conflicto y reducir el alcance de un eventual
              proceso judicial.
            </p>
          </div>

          {/* BLOQUE 7 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre incumplimiento de contratos
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación tiene validez legal en Colombia?
                </h3>
                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene efectos jurídicos y puede
                  exigirse judicialmente en caso de incumplimiento.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede conciliar un contrato comercial o civil?
                </h3>
                <p className={styles.faqAnswer}>
                  Sí. La conciliación aplica para múltiples tipos de contratos
                  entre particulares y empresas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si una parte incumple el acuerdo conciliado?
                </h3>
                <p className={styles.faqAnswer}>
                  El acuerdo puede ejecutarse judicialmente debido a su validez
                  legal en Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita acudir a una demanda judicial?
                </h3>
                <p className={styles.faqAnswer}>
                  En muchos casos sí, especialmente cuando las partes logran un
                  acuerdo claro y voluntario sobre el conflicto contractual.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué documentos debo llevar a la conciliación?
                </h3>
                <p className={styles.faqAnswer}>
                  Es recomendable llevar el contrato, comprobantes de pago,
                  correos, mensajes, facturas y cualquier documento relacionado
                  con el incumplimiento contractual.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación sirve para renegociar condiciones del
                  contrato?
                </h3>
                <p className={styles.faqAnswer}>
                  Sí. Las partes pueden acordar nuevos plazos, formas de pago,
                  compensaciones o ajustes contractuales según el caso.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Cuánto tiempo puede tardar una conciliación contractual?
                </h3>
                <p className={styles.faqAnswer}>
                  El tiempo puede variar según la complejidad del caso y la
                  disposición de las partes, pero normalmente es mucho más
                  rápido que un proceso judicial.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede conciliar un contrato verbal en Colombia?
                </h3>
                <p className={styles.faqAnswer}>
                  Sí. Aunque los contratos escritos facilitan la prueba, los
                  contratos verbales también pueden ser objeto de conciliación
                  cuando existen soportes o evidencias de la relación
                  contractual.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación aplica para conflictos entre empresas?
                </h3>
                <p className={styles.faqAnswer}>
                  Sí. Empresas, comerciantes y particulares pueden utilizar la
                  conciliación para resolver disputas derivadas de relaciones
                  comerciales o contractuales.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué intentar una conciliación antes de presentar una demanda
              por incumplimiento de contrato?
            </h2>

            <p className={styles.text}>
              La conciliación permite que las partes mantengan el control sobre
              la solución del conflicto, evitando que sea un juez quien decida
              completamente el resultado del caso. Además, reduce tiempos,
              costos y riesgos asociados a un proceso judicial.
            </p>

            <p className={styles.text}>
              En muchos conflictos comerciales y civiles, alcanzar un acuerdo
              oportuno permite conservar relaciones comerciales, recuperar
              recursos económicos con mayor rapidez y minimizar el impacto
              financiero derivado del incumplimiento contractual.
            </p>

            <p className={styles.text}>
              Si ambas partes están dispuestas a dialogar, la conciliación suele
              ser una de las alternativas más eficientes para resolver el
              conflicto de manera legal y definitiva.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
