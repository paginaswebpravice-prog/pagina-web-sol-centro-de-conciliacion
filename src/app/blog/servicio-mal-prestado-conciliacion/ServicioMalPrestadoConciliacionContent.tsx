"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ServicioMalPrestadoConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conflictos por prestación de servicios
          </span>

          <h1 className={styles.title}>
            ¿Te prestaron un mal servicio? Así puedes reclamar y buscar una
            solución mediante conciliación
          </h1>

          <p className={styles.heroText}>
            Contratar un servicio y recibir un resultado diferente al esperado
            puede generar frustración, pérdidas económicas y, en algunos casos,
            conflictos difíciles de resolver. El problema puede aparecer cuando
            el trabajo queda incompleto, se realiza con una calidad inferior a
            la acordada, se incumplen los tiempos prometidos o simplemente el
            resultado no corresponde a lo que se había contratado.
          </p>

          <p className={styles.heroText}>
            Antes de pensar directamente en un proceso judicial, existen
            situaciones en las que las partes pueden intentar dialogar y buscar
            una solución mediante <strong>conciliación</strong>. Esta
            alternativa permite poner sobre la mesa lo ocurrido y explorar
            acuerdos relacionados con la corrección del servicio, la devolución
            de dinero, el cumplimiento de lo pactado o una compensación, según
            las circunstancias del caso.
          </p>
        </div>

        {/* QUÉ ES UN MAL SERVICIO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo se puede considerar que un servicio fue mal prestado?
          </h2>

          <p className={styles.paragraph}>
            No todos los desacuerdos con un proveedor significan automáticamente
            que exista un incumplimiento. Sin embargo, pueden surgir conflictos
            cuando existe una diferencia importante entre{" "}
            <strong>lo que se acordó</strong> y{" "}
            <strong>lo que finalmente fue entregado o ejecutado</strong>.
          </p>

          <p className={styles.paragraph}>
            El punto de partida suele ser revisar qué prometió la persona o
            empresa que prestaría el servicio. Esa información puede estar en un
            contrato, una cotización, una factura, una conversación de WhatsApp,
            un correo electrónico o cualquier otro medio que permita entender
            cuáles eran las condiciones inicialmente acordadas.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Un aspecto clave:</strong> para resolver un conflicto no
              basta con afirmar que el servicio fue “malo”. Es importante poder
              explicar qué se contrató, qué se esperaba recibir y qué ocurrió
              realmente.
            </p>
          </div>
        </div>

        {/* EJEMPLOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones frecuentes de servicios mal prestados
          </h2>

          <p className={styles.paragraph}>
            Los conflictos pueden presentarse en una gran variedad de
            actividades. Algunos casos frecuentes son:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Trabajos incompletos</h3>
              <p>
                Se recibe un pago total o parcial, pero el servicio contratado
                nunca se termina o quedan pendientes actividades importantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Resultado diferente a lo acordado</h3>
              <p>
                El proveedor realiza el trabajo, pero el resultado es diferente
                a las condiciones, características o alcance que habían sido
                discutidos inicialmente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Retrasos importantes</h3>
              <p>
                El servicio debía realizarse en un determinado plazo y el
                incumplimiento del tiempo acordado genera consecuencias para la
                persona que lo contrató.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Deficiencias en la ejecución</h3>
              <p>
                El trabajo presenta problemas que requieren correcciones,
                ajustes o una nueva intervención para alcanzar el resultado
                esperado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cobros discutidos</h3>
              <p>
                Se generan diferencias sobre el valor final del servicio, cobros
                adicionales o pagos por actividades que una de las partes
                considera no realizadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de compromisos</h3>
              <p>
                Una de las partes considera que la otra no cumplió con las
                obligaciones que habían sido acordadas al iniciar la relación.
              </p>
            </div>
          </div>
        </div>

        {/* QUÉ HACER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer cuando recibes un servicio mal prestado?
          </h2>

          <p className={styles.paragraph}>
            Cuando aparece un problema, actuar de inmediato y dejar todo en una
            discusión verbal puede dificultar una solución posterior. Lo más
            conveniente suele ser organizar la información y tener claridad
            sobre cuál es el problema que se quiere resolver.
          </p>

          <ul className={styles.list}>
            <li>
              Revisar qué fue exactamente lo acordado antes de contratar el
              servicio.
            </li>
            <li>
              Conservar contratos, cotizaciones, facturas y comprobantes de
              pago.
            </li>
            <li>
              Guardar conversaciones, correos y mensajes relacionados con el
              servicio.
            </li>
            <li>
              Reunir fotografías, videos u otros elementos que permitan mostrar
              el resultado recibido.
            </li>
            <li>
              Comunicar claramente a la otra parte cuál es el problema
              identificado.
            </li>
            <li>
              Intentar establecer qué solución sería razonable para ambas
              partes.
            </li>
          </ul>

          <p className={styles.paragraph}>
            En muchos conflictos, el desacuerdo se mantiene porque cada persona
            tiene una expectativa diferente sobre cómo debería solucionarse el
            problema. Una parte puede pedir que se termine el trabajo y la otra
            considerar que ya cumplió. Otra persona puede solicitar una
            devolución de dinero, mientras el prestador del servicio propone
            corregir las deficiencias.
          </p>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pruebas pueden ayudar en un conflicto por un mal servicio?
          </h2>

          <p className={styles.paragraph}>
            La documentación disponible puede ser importante para entender el
            origen del desacuerdo. No todos los servicios se contratan mediante
            un contrato formal, por lo que en la práctica también pueden existir
            otros elementos que ayuden a establecer qué fue pactado.
          </p>

          <ul className={styles.list}>
            <li>Contratos o documentos relacionados con el servicio.</li>
            <li>Cotizaciones o propuestas aceptadas.</li>
            <li>Facturas y comprobantes de pago.</li>
            <li>
              Conversaciones por WhatsApp, correo electrónico u otros medios.
            </li>
            <li>Fotografías o videos del resultado del servicio.</li>
            <li>Mensajes relacionados con fechas, valores y condiciones.</li>
            <li>
              Documentos que permitan demostrar daños o gastos adicionales.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Entre más claro sea el punto de partida, más fácil será explicar
              el conflicto y plantear una solución concreta. Por eso es útil
              organizar la información antes de iniciar una conversación o
              acudir a una instancia de conciliación.
            </p>
          </div>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede resolver un servicio mal prestado mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del conflicto y de que el asunto sea
            susceptible de conciliación, las partes pueden acudir a un centro de
            conciliación para intentar construir un acuerdo.
          </p>

          <p className={styles.paragraph}>
            La conciliación no consiste en determinar automáticamente quién
            tiene la razón. El objetivo es generar un espacio en el que las
            partes puedan exponer su posición, explicar qué ocurrió y buscar una
            alternativa que permita resolver el conflicto.
          </p>

          <p className={styles.paragraph}>
            Esto puede ser especialmente útil cuando todavía existe disposición
            para conversar, pero la negociación directa ya no está funcionando o
            las partes no logran ponerse de acuerdo sobre las condiciones de una
            posible solución.
          </p>
        </div>

        {/* POSIBLES ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos se pueden buscar en una conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cada conflicto es diferente. Por eso, la solución dependerá de lo
            ocurrido, de las pretensiones de las partes y de aquello que estén
            dispuestas a acordar.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Corrección del servicio</h3>
              <p>
                Una posibilidad puede ser acordar que el proveedor realice las
                correcciones necesarias dentro de un plazo determinado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del trabajo pendiente</h3>
              <p>
                Si el servicio quedó incompleto, las partes pueden discutir las
                condiciones y fechas para finalizar las actividades acordadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Devolución de dinero</h3>
              <p>
                Dependiendo del caso y de lo que acuerden las partes, puede
                contemplarse una devolución total o parcial de los valores
                pagados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo de pago</h3>
              <p>
                Cuando existe una obligación económica pendiente, las partes
                pueden establecer valores, fechas y condiciones para cumplirla.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compensación acordada</h3>
              <p>
                Las partes pueden explorar alternativas económicas relacionadas
                con los efectos que generó el conflicto, siempre que exista
                voluntad de llegar a un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación de la relación</h3>
              <p>
                En algunos casos, una solución puede consistir en definir las
                condiciones bajo las cuales las partes dan por terminada la
                relación existente.
              </p>
            </div>
          </div>
        </div>

        {/* PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo prepararte antes de intentar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Llegar con claridad sobre el problema puede hacer que la
            conversación sea mucho más productiva. Antes de iniciar el proceso,
            vale la pena organizar los hechos de forma sencilla.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Primero:</strong> identifica qué servicio contrataste y
              cuáles eran las condiciones acordadas.
            </li>
            <li>
              <strong>Segundo:</strong> explica concretamente qué parte del
              servicio consideras que no fue cumplida o fue realizada de manera
              deficiente.
            </li>
            <li>
              <strong>Tercero:</strong> reúne los documentos y evidencias que
              permitan explicar tu posición.
            </li>
            <li>
              <strong>Cuarto:</strong> define cuál sería una solución razonable
              desde tu punto de vista.
            </li>
            <li>
              <strong>Quinto:</strong> evalúa si existe disposición para buscar
              un acuerdo con la otra parte.
            </li>
          </ul>
        </div>

        {/* CUÁNDO CONVIENE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser conveniente intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa interesante cuando existe
            un conflicto concreto entre las partes y todavía es posible explorar
            una solución negociada.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, puede tener sentido cuando ambas partes reconocen que
            existió una relación o un acuerdo, pero tienen versiones diferentes
            sobre el cumplimiento. También cuando el problema puede solucionarse
            mediante un ajuste económico, la terminación de un trabajo pendiente
            o el establecimiento de nuevas condiciones.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no significa que una persona deba aceptar
              cualquier propuesta. El acuerdo se construye a partir de la
              voluntad de las partes y de la posibilidad de encontrar una
              solución que permita cerrar el conflicto.
            </p>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con una solución conciliada. Puede
            ocurrir que las partes mantengan posiciones diferentes o que no
            encuentren una fórmula que resulte aceptable para ambas.
          </p>

          <p className={styles.paragraph}>
            Si no se alcanza un acuerdo, las alternativas posteriores dependerán
            del tipo de relación, de las obligaciones discutidas y de las
            circunstancias particulares del caso. Por esta razón, es importante
            analizar cada situación de manera individual.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre servicios mal prestados y conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar si no firmé un contrato?</h3>
              <p>
                La ausencia de un contrato formal no significa necesariamente
                que no existan elementos para demostrar lo acordado. Mensajes,
                cotizaciones, pagos y otras comunicaciones pueden ayudar a
                explicar la relación entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo pedir que corrijan el trabajo?</h3>
              <p>
                La corrección del servicio puede ser una de las soluciones que
                se discutan entre las partes, dependiendo de las circunstancias
                del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo solicitar devolución de dinero?</h3>
              <p>
                Una devolución total o parcial puede ser objeto de discusión y
                acuerdo entre las partes, según las condiciones particulares del
                caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra persona no quiere hablar conmigo?</h3>
              <p>
                Cuando la negociación directa no funciona, puede evaluarse la
                posibilidad de acudir a los mecanismos disponibles para intentar
                resolver el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debo tener todas las pruebas antes de conciliar?</h3>
              <p>
                Es recomendable reunir y organizar la información disponible
                para poder explicar claramente qué se acordó y cuál es el
                problema que dio origen al conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si se llega a un acuerdo?</h3>
              <p>
                Cuando las partes alcanzan un acuerdo dentro de una
                conciliación, este se formaliza conforme al procedimiento
                aplicable y puede producir los efectos jurídicos previstos en la
                normativa correspondiente.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Un conflicto por un mal servicio no siempre tiene que terminar en
            una disputa prolongada
          </h2>

          <p className={styles.paragraph}>
            Cuando una persona paga por un servicio espera recibir aquello que
            fue acordado. Si esto no sucede, es normal que aparezcan diferencias
            sobre quién debe asumir la responsabilidad y cuál debería ser la
            solución.
          </p>

          <p className={styles.paragraph}>
            En determinados casos, la conciliación permite abrir un espacio para
            discutir el problema de forma organizada y buscar alternativas antes
            de escalar el conflicto. Lo importante es tener claridad sobre los
            hechos, conservar la información disponible y evaluar cuál puede ser
            el camino más adecuado según las particularidades de la situación.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por un servicio mal prestado?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles y evalúa si tu situación puede
            ser abordada mediante conciliación. En Sol Centro de Conciliación
            puedes recibir orientación sobre el proceso y los pasos para
            solicitar una audiencia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
