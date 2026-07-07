"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionArrendamientoContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO SECTION */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación de Arrendamiento</span>

          <h1 className={styles.title}>
            Conciliación por arrendamiento en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos derivados de un contrato de arrendamiento son una de
            las causas más frecuentes de consultas jurídicas en Colombia. El
            incumplimiento en el pago del canon, los desacuerdos sobre la
            entrega del inmueble, los daños ocasionados durante la ocupación o
            el incumplimiento de las obligaciones pactadas pueden afectar tanto
            al arrendador como al arrendatario.
          </p>

          <p className={styles.heroText}>
            Antes de iniciar un proceso judicial, la conciliación representa una
            alternativa práctica para que ambas partes dialoguen con la
            intervención de un conciliador imparcial y encuentren una solución
            ajustada a sus necesidades. En muchos casos, este mecanismo permite
            resolver el conflicto en menos tiempo, con menores costos y evitando
            un litigio prolongado.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cómo funciona la conciliación por
            arrendamiento en Colombia, qué conflictos pueden resolverse, cuáles
            son los acuerdos más frecuentes y qué ocurre si una de las partes
            incumple lo pactado.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION POR ARRENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación por arrendamiento y cuándo conviene
            utilizarla?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo mediante el cual las partes involucradas en un
            contrato de arrendamiento buscan resolver un conflicto con la ayuda
            de un conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            El objetivo es alcanzar acuerdos que beneficien a ambas partes y
            eviten procesos judiciales largos y costosos.
          </p>

          <p className={styles.paragraph}>
            La conciliación busca que arrendador y arrendatario expongan su
            versión del conflicto, analicen la documentación disponible y
            negocien alternativas que permitan poner fin a la controversia sin
            necesidad de acudir inmediatamente ante un juez.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo resulta especialmente útil cuando ambas partes desean
            conservar una buena relación, evitar mayores gastos o encontrar una
            solución rápida frente a obligaciones pendientes derivadas del
            contrato de arrendamiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá y otras ciudades de Colombia, la conciliación es una de
              las herramientas más utilizadas para solucionar conflictos entre
              propietarios e inquilinos de forma rápida y efectiva.
            </p>
          </div>
        </div>

        {/* CUANDO CONVIENE SOLICITAR UNA CONCILIACION POR ARRENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene solicitar una conciliación por un conflicto de
            arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            No es necesario esperar a que el conflicto se agrave para acudir a
            una conciliación. En muchos casos, iniciar este procedimiento desde
            las primeras diferencias permite encontrar soluciones más rápidas y
            evitar que el problema termine en un proceso judicial mucho más
            largo y costoso.
          </p>

          <p className={styles.paragraph}>
            Tanto el arrendador como el arrendatario pueden solicitar una
            audiencia de conciliación cuando consideran que la otra parte ha
            incumplido alguna de las obligaciones previstas en el contrato de
            arrendamiento o cuando existen diferencias que pueden solucionarse
            mediante un acuerdo.
          </p>

          <ul className={styles.list}>
            <li>Cuando existen cánones de arrendamiento pendientes de pago.</li>
            <li>Si hay desacuerdos sobre la fecha de entrega del inmueble.</li>
            <li>
              Cuando se presentan daños que generan discusión entre las partes.
            </li>
            <li>
              Si existen diferencias sobre servicios públicos o administración.
            </li>
            <li>
              Cuando alguna de las partes incumple obligaciones del contrato.
            </li>
            <li>
              Antes de iniciar una demanda judicial relacionada con el arriendo.
            </li>
            <li>
              Cuando ambas partes desean conservar una relación cordial y
              resolver el problema mediante el diálogo.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Mientras más pronto se intente una conciliación, mayores suelen
              ser las posibilidades de llegar a un acuerdo satisfactorio para
              ambas partes, evitando que el conflicto siga creciendo con el paso
              del tiempo.
            </p>
          </div>
        </div>

        {/* QUE CONFLICTOS DE ARRENDAMIENTO PUEDEN RESOLVERSE MEDIANTE CONCILIACION EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos de arrendamiento pueden resolverse mediante
            conciliación en Colombia?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cánones vencidos</h3>
              <p>Acuerdos de pago para arrendamientos pendientes o en mora.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega del inmueble</h3>
              <p>
                Acuerdos sobre fechas y condiciones para la restitución del
                bien.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños al inmueble</h3>
              <p>Compensaciones por deterioros o reparaciones necesarias.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios públicos</h3>
              <p>
                Definición de pagos pendientes o responsabilidades acumuladas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos contractuales</h3>
              <p>
                Solución de obligaciones incumplidas por cualquiera de las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Depósitos y garantías</h3>
              <p>
                Acuerdos sobre devolución o aplicación de valores entregados.
              </p>
            </div>
          </div>
        </div>

        {/* POR QUE RESOLVER UN CONFLICTO DE ARRENDAMIENTO MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué resolver un conflicto de arrendamiento mediante
            conciliación en lugar de demandar?
          </h2>

          <ul className={styles.list}>
            <li>Reduce costos legales.</li>
            <li>Evita procesos judiciales extensos.</li>
            <li>Facilita acuerdos personalizados.</li>
            <li>Permite soluciones rápidas.</li>
            <li>Mejora la comunicación entre las partes.</li>
            <li>Genera seguridad jurídica.</li>
            <li>Puede realizarse de manera virtual o presencial.</li>
            <li>Ayuda a preservar relaciones comerciales.</li>
          </ul>

          <p className={styles.paragraph}>
            Además del ahorro en tiempo y costos, la conciliación ofrece un
            espacio neutral para que las partes expresen sus preocupaciones y
            construyan acuerdos realistas. Esto suele generar mayores niveles de
            cumplimiento voluntario en comparación con soluciones impuestas
            dentro de un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo queda consignado en un acta de conciliación, ambas
            partes cuentan con un documento que brinda seguridad jurídica y
            claridad sobre las obligaciones asumidas, las fechas de cumplimiento
            y las consecuencias en caso de incumplimiento.
          </p>
        </div>

        {/* QUE ACUERDOS PUEDE LOGRARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden lograrse?</h2>

          <p className={styles.paragraph}>
            Durante la audiencia las partes pueden establecer compromisos claros
            sobre las obligaciones pendientes derivadas del contrato de
            arrendamiento.
          </p>

          <ul className={styles.list}>
            <li>Planes de pago para cánones atrasados.</li>
            <li>Entrega programada del inmueble.</li>
            <li>Reconocimiento de daños y reparaciones.</li>
            <li>Pago de servicios públicos pendientes.</li>
            <li>Terminación anticipada del contrato.</li>
            <li>Acuerdos sobre garantías y depósitos.</li>
          </ul>

          <p className={styles.paragraph}>
            Cada audiencia de conciliación es diferente, por lo que el contenido
            del acuerdo dependerá de las necesidades de las partes y de la
            naturaleza del conflicto. El conciliador no impone decisiones, sino
            que facilita el diálogo para construir soluciones equilibradas.
          </p>

          <p className={styles.paragraph}>
            Cuando existe voluntad de negociación, es posible establecer
            compromisos claros sobre pagos, fechas, reparaciones, entrega del
            inmueble, terminación del contrato u otras obligaciones relacionadas
            con el arrendamiento.
          </p>
        </div>

        {/* QUE DOCUMENTOS ES RECOMENDABLE LLEVAR A UNA CONCILIACION DE ARRENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos es recomendable llevar a una conciliación de
            arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso puede requerir documentos diferentes, asistir a la
            audiencia con la información organizada facilita el desarrollo de la
            conciliación y permite que las partes expliquen con mayor claridad
            el origen del conflicto.
          </p>

          <p className={styles.paragraph}>
            Contar con soportes suficientes también ayuda a construir acuerdos
            más precisos sobre pagos, obligaciones pendientes, fechas de entrega
            o cualquier otro aspecto relacionado con el contrato de
            arrendamiento.
          </p>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Documento de identidad.</li>
            <li>Recibos o comprobantes de pago.</li>
            <li>Consignaciones realizadas.</li>
            <li>Conversaciones por WhatsApp o correo electrónico.</li>
            <li>Inventario del inmueble.</li>
            <li>
              Fotografías o videos relacionados con el estado del inmueble.
            </li>
            <li>Facturas de reparaciones o mantenimientos.</li>
            <li>Recibos de servicios públicos.</li>
            <li>Cualquier otro documento que permita demostrar los hechos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              No todos los documentos serán necesarios en cada conciliación. Sin
              embargo, llevar la mayor cantidad posible de soportes permite que
              la negociación se base en hechos verificables y facilita la
              construcción de acuerdos claros.
            </p>
          </div>
        </div>

        {/* QUE SUCEDE SI NO SE LOGRA UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes no llegan a una solución durante la conciliación,
            podrán acudir a las acciones judiciales que correspondan según el
            conflicto y las normas aplicables.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, intentar la conciliación previamente suele facilitar
            futuras negociaciones y demostrar voluntad de solución.
          </p>

          <p className={styles.paragraph}>
            Aunque no siempre es posible alcanzar un acuerdo, asistir a la
            audiencia permite que las partes conozcan la posición de la otra,
            aclaren los hechos y exploren alternativas que incluso pueden
            facilitar una negociación posterior.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del tipo de conflicto, la constancia expedida por el
            centro de conciliación puede ser un requisito importante para acudir
            posteriormente a la vía judicial cuando la ley así lo establece.
          </p>
        </div>

        {/* PORQUE INTENTAR UNA CONCILIACION ANTES DE INICIAR UNA DEMANDA POR ARRENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de iniciar una demanda por
            arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            Aunque la vía judicial continúa siendo una alternativa cuando no es
            posible resolver el conflicto de forma amistosa, la conciliación
            suele representar un primer paso recomendable porque brinda a las
            partes la oportunidad de negociar directamente con el acompañamiento
            de un conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            En muchas ocasiones, un acuerdo logrado durante la conciliación
            permite resolver el conflicto en menos tiempo, reducir costos y
            evitar el desgaste que implica un proceso judicial. Incluso cuando
            no se alcanza un acuerdo total, la audiencia puede servir para
            aclarar posiciones y facilitar futuras negociaciones.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo</h3>

              <p>
                Muchas controversias pueden solucionarse en una o pocas
                audiencias de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Generalmente implica menos gastos que un proceso judicial
                prolongado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor flexibilidad</h3>

              <p>
                Las partes pueden construir soluciones ajustadas a sus
                necesidades y no depender exclusivamente de una decisión
                judicial.
              </p>
            </div>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación en contratos de
            arrendamiento
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Qué conflictos de arrendamiento pueden resolverse mediante
                conciliación?
              </h3>

              <p>
                Es posible conciliar conflictos relacionados con el pago de
                cánones, entrega o restitución del inmueble, daños, servicios
                públicos, depósitos, incumplimientos del contrato y otras
                obligaciones entre arrendador e inquilino.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación evita una demanda por arrendamiento?</h3>

              <p>
                En muchos casos sí. Si las partes llegan a un acuerdo durante la
                audiencia, pueden solucionar el conflicto sin necesidad de
                iniciar un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos en Colombia
                y puede utilizarse para exigir el cumplimiento de las
                obligaciones pactadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se pueden conciliar cánones de arrendamiento vencidos?</h3>

              <p>
                Sí. Es uno de los asuntos más frecuentes en conciliación y
                permite negociar acuerdos de pago, nuevos plazos o el
                reconocimiento de la deuda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si el arrendatario no asiste a la audiencia?</h3>

              <p>
                Si la persona citada no comparece sin una justificación válida,
                el centro de conciliación podrá expedir una constancia de
                inasistencia que, dependiendo del caso, permitirá continuar con
                otras acciones legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación puede realizarse de forma virtual?</h3>

              <p>
                Sí. Muchos centros de conciliación autorizados ofrecen
                audiencias virtuales que tienen la misma validez jurídica que
                una audiencia presencial cuando se cumplen los requisitos
                legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito un abogado para solicitar la conciliación?</h3>

              <p>
                Generalmente no es obligatorio. Sin embargo, recibir orientación
                jurídica puede facilitar la preparación del caso y ayudar a
                negociar un mejor acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué documentos debo llevar a la audiencia?</h3>

              <p>
                Lo recomendable es presentar el contrato de arrendamiento,
                documento de identidad, comprobantes de pago, conversaciones,
                fotografías, inventarios y cualquier otro soporte relacionado
                con el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto puede tardar una conciliación por arrendamiento?</h3>

              <p>
                El tiempo depende de la complejidad del caso y de la disposición
                de las partes para negociar. En muchas ocasiones el conflicto
                puede resolverse en una sola audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si una de las partes incumple el acuerdo?</h3>

              <p>
                Si alguna de las partes incumple lo pactado en el acta de
                conciliación, la otra podrá acudir a los mecanismos legales
                correspondientes para exigir el cumplimiento de las obligaciones
                acordadas.
              </p>
            </div>
          </div>
        </div>

        {/* QUIENES PUEDE SOLICITAR UNA CONCILIACION POR ARRENDAMIENTO EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quiénes pueden solicitar una conciliación por arrendamiento en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser solicitada por cualquier persona que haga
            parte de un contrato de arrendamiento y considere que existe un
            conflicto susceptible de resolverse mediante este mecanismo. No
            importa si quien inicia el trámite es el arrendador o el
            arrendatario; ambos tienen la posibilidad de acudir a un centro de
            conciliación autorizado para buscar una solución dialogada.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento resulta especialmente útil cuando las partes
            desean evitar un proceso judicial, recuperar cánones pendientes,
            acordar la entrega del inmueble, definir responsabilidades por
            daños, solucionar diferencias relacionadas con servicios públicos o
            establecer nuevas condiciones para el cumplimiento del contrato.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Arrendadores</h3>

              <p>
                Pueden solicitar conciliación para recuperar cánones pendientes,
                gestionar la restitución del inmueble o resolver incumplimientos
                del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendatarios</h3>

              <p>
                También pueden acudir a la conciliación cuando existan
                desacuerdos sobre depósitos, reparaciones, servicios públicos,
                garantías o cualquier otra obligación derivada del contrato de
                arrendamiento.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto de arrendamiento sin iniciar una
            demanda?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para iniciar un proceso de conciliación
            relacionado con contratos de arrendamiento en Colombia. Te ayudamos
            a gestionar conflictos por cánones vencidos, entrega o restitución
            del inmueble, incumplimientos contractuales, daños, servicios
            públicos, depósitos y otros desacuerdos entre arrendadores e
            inquilinos.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
