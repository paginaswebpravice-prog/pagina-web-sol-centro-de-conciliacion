"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoArriendoContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/** HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación en conflictos de arrendamiento • Colombia
          </span>

          <h1 className={styles.title}>
            ¿Qué hacer si hay un incumplimiento del contrato de arriendo en
            Colombia?
          </h1>

          <p className={styles.heroText}>
            Cuando un <strong>arrendador</strong> o un{" "}
            <strong>arrendatario</strong>
            incumplen las obligaciones pactadas en un contrato de arriendo,
            pueden surgir conflictos relacionados con el pago del canon, la
            entrega del inmueble, el cobro de servicios públicos, los daños
            ocasionados a la propiedad o incluso la terminación anticipada del
            contrato.
          </p>

          <p className={styles.heroText}>
            Aunque muchas personas creen que la única alternativa es presentar
            una demanda, en numerosos casos la <strong>conciliación</strong>{" "}
            permite encontrar soluciones más rápidas, económicas y
            satisfactorias para ambas partes. Mediante este mecanismo es posible
            negociar acuerdos sobre pagos, fechas de entrega del inmueble,
            reparaciones, indemnizaciones y demás obligaciones derivadas del
            contrato de arrendamiento.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué se considera un incumplimiento del
            contrato de arriendo, cuándo es recomendable acudir a un centro de
            conciliación, qué documentos conviene presentar y qué opciones
            existen si finalmente no se logra un acuerdo entre las partes.
          </p>
        </div>

        {/** QUE SE CONSIDERA INCUMPLIMIENTO DE CONTRATO DE ARRIENDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se considera un incumplimiento del contrato de arriendo?
          </h2>

          <p className={styles.paragraph}>
            Existe un incumplimiento cuando alguna de las partes deja de cumplir
            una o varias obligaciones establecidas en el contrato de
            arrendamiento. Esto puede ocurrir tanto por parte del propietario
            como del arrendatario y generar perjuicios económicos o dificultades
            para continuar con la relación contractual.
          </p>

          <p className={styles.paragraph}>
            No todos los conflictos tienen la misma gravedad. En algunos casos
            el incumplimiento puede solucionarse mediante un acuerdo entre las
            partes, mientras que en otros será necesario acudir a una audiencia
            de conciliación para intentar resolver las diferencias antes de
            iniciar un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando ambas partes
            desean evitar litigios prolongados y están dispuestas a negociar
            soluciones que les permitan proteger sus derechos sin incrementar
            los costos del conflicto.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite analizar el contrato, revisar las
              obligaciones incumplidas y construir acuerdos sobre pagos, entrega
              del inmueble, reparación de daños, devolución de depósitos o
              terminación del contrato, entre otros aspectos.
            </p>
          </div>
        </div>

        {/** CASOS COMUNES DE CONFLICTO EN ARRENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones más frecuentes de incumplimiento en contratos de
            arrendamiento
          </h2>

          <p className={styles.paragraph}>
            Los conflictos de arrendamiento pueden presentarse por diferentes
            motivos. Entre los casos que con mayor frecuencia llegan a
            conciliación se encuentran:
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento en el pago del canon de arrendamiento.</li>

            <li>Retrasos reiterados en los pagos mensuales.</li>

            <li>Negativa a entregar el inmueble al finalizar el contrato.</li>

            <li>Daños ocasionados al inmueble durante la ocupación.</li>

            <li>Incumplimiento de obligaciones sobre mantenimiento.</li>

            <li>Conflictos relacionados con depósitos o garantías.</li>

            <li>Discusiones sobre el pago de servicios públicos.</li>

            <li>Terminación anticipada del contrato sin acuerdo.</li>

            <li>Incumplimiento de cláusulas especiales pactadas.</li>

            <li>Diferencias respecto al inventario del inmueble.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Identificar con claridad cuál fue la obligación incumplida
              facilita la conciliación y permite construir acuerdos mucho más
              efectivos para ambas partes.
            </p>
          </div>
        </div>

        {/** CUANDO ES RECOMENDABLE ACUDIR A UNA CONCILIACION POR UN CONTRATO DE ARRIENDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir a una conciliación por un contrato de
            arriendo?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas esperan hasta que el conflicto se vuelve
            insostenible para buscar ayuda. Sin embargo, acudir a conciliación
            desde las primeras diferencias puede evitar que el problema escale y
            genere mayores costos para cualquiera de las partes.
          </p>

          <p className={styles.paragraph}>
            Una audiencia de conciliación permite que arrendador y arrendatario
            expliquen su posición, revisen el contenido del contrato y exploren
            alternativas que beneficien a ambos sin necesidad de un proceso
            judicial prolongado.
          </p>

          <p className={styles.paragraph}>
            Incluso cuando el desacuerdo parece difícil de resolver, la
            intervención de un conciliador facilita la comunicación y ayuda a
            identificar soluciones que muchas veces las partes no habían
            considerado.
          </p>
        </div>

        {/** BENEFICIOS DE LA CONCILIACION EN CONTRATOS DE ARRIENDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de iniciar un proceso
            judicial?
          </h2>

          <p className={styles.paragraph}>
            Cuando surge un conflicto por el incumplimiento de un contrato de
            arrendamiento, muchas personas piensan inmediatamente en presentar
            una demanda. Sin embargo, en numerosos casos la conciliación permite
            alcanzar acuerdos en menos tiempo y con menores costos, evitando que
            el conflicto se prolongue durante meses o incluso años.
          </p>

          <p className={styles.paragraph}>
            La conciliación ofrece un espacio neutral donde las partes pueden
            exponer sus argumentos, revisar las obligaciones del contrato y
            buscar soluciones que respondan a las necesidades de ambas, siempre
            dentro del marco legal.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Reduce tiempos</h3>

              <p>
                Resolver el conflicto mediante un acuerdo suele ser mucho más
                rápido que acudir directamente a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Disminuye costos</h3>

              <p>
                Evita muchos de los gastos asociados a litigios prolongados y
                facilita soluciones económicamente viables para ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Favorece acuerdos reales</h3>

              <p>
                Las partes pueden negociar plazos, pagos, entrega del inmueble,
                reparaciones o cualquier otra obligación relacionada con el
                contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Protege la relación entre las partes</h3>

              <p>
                En muchos casos es posible solucionar el conflicto sin
                deteriorar completamente la relación entre propietario e
                inquilino.
              </p>
            </div>
          </div>
        </div>

        {/** ACUERDOS QUE PUEDEN LOGRARSE DURANTE UNA CONCILIACION DE ARRIENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse durante una conciliación de
            arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            Cada conflicto es diferente, por lo que las soluciones también
            pueden variar. El objetivo de la conciliación no consiste únicamente
            en resolver el problema actual, sino en construir un acuerdo que
            permita evitar nuevos conflictos entre las partes.
          </p>

          <ul className={styles.list}>
            <li>Pago de cánones de arrendamiento pendientes.</li>

            <li>Acuerdos de pago por cuotas.</li>

            <li>Entrega voluntaria del inmueble.</li>

            <li>Definición de una nueva fecha de desocupación.</li>

            <li>Reconocimiento de mejoras realizadas al inmueble.</li>

            <li>Pago de daños ocasionados a la propiedad.</li>

            <li>Distribución de servicios públicos pendientes.</li>

            <li>Terminación anticipada del contrato por mutuo acuerdo.</li>

            <li>Devolución de depósitos o garantías.</li>

            <li>Modificación de algunas condiciones contractuales.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Mientras el acuerdo sea legal y ambas partes lo acepten de manera
              voluntaria, la conciliación ofrece un amplio margen para construir
              soluciones adaptadas a cada caso.
            </p>
          </div>
        </div>

        {/** DOCUMENTOS QUE CONVIENE LLEVAR A UNA AUDIENCIA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos conviene llevar a una audiencia de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Contar con documentos claros facilita el desarrollo de la audiencia
            y permite identificar con precisión cuáles fueron las obligaciones
            pactadas y cuáles son los aspectos objeto del conflicto.
          </p>

          <p className={styles.paragraph}>
            Entre mayor sea el soporte documental presentado por las partes, más
            fácil será construir acuerdos sustentados en los hechos y evitar
            discusiones innecesarias.
          </p>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento firmado.</li>

            <li>Otrosíes o modificaciones al contrato.</li>

            <li>Comprobantes de consignaciones.</li>

            <li>Recibos de pago.</li>

            <li>Mensajes de WhatsApp.</li>

            <li>Correos electrónicos.</li>

            <li>Inventario inicial del inmueble.</li>

            <li>Fotografías o videos.</li>

            <li>Facturas de reparaciones.</li>

            <li>Recibos de servicios públicos.</li>

            <li>Cualquier otra prueba relacionada con el incumplimiento.</li>
          </ul>
        </div>

        {/** QUE OCURRE SI NO SE LOGRA UN ACUERDO EN LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo en la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias de conciliación terminan con un acuerdo. En
            algunos casos las partes mantienen posiciones completamente
            diferentes respecto al cumplimiento del contrato, el pago de las
            obligaciones o la entrega del inmueble.
          </p>

          <p className={styles.paragraph}>
            Cuando esto ocurre, la conciliación sigue siendo útil porque permite
            identificar claramente los puntos de desacuerdo y deja constancia
            del intento de resolver el conflicto de manera voluntaria.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del caso, las partes podrán acudir a
            los mecanismos judiciales previstos por la legislación colombiana
            para que un juez conozca la controversia y adopte la decisión
            correspondiente.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no significa renunciar a otros
              mecanismos legales. Si no existe acuerdo, cada parte conserva los
              derechos y acciones que la ley le reconoce para proteger sus
              intereses.
            </p>
          </div>
        </div>

        {/** DIFERENCIAS ENTRE LA CONCILIACION Y UN PROCESO JUDICIAL DE RESTITUCION DE INMUEBLE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencias entre la conciliación y un proceso judicial de
            restitución de inmueble
          </h2>

          <p className={styles.paragraph}>
            Aunque ambos mecanismos buscan solucionar conflictos relacionados
            con el contrato de arrendamiento, su funcionamiento es completamente
            diferente.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Busca que las partes construyan un acuerdo voluntario sobre
                pagos, entrega del inmueble, daños o cualquier otra obligación
                derivada del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso judicial</h3>

              <p>
                Un juez estudia las pruebas presentadas por las partes y adopta
                una decisión conforme a la legislación vigente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Tiempo</h3>

              <p>
                En muchos casos una conciliación puede desarrollarse en un
                tiempo considerablemente menor que un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Participación de las partes</h3>

              <p>
                Durante la conciliación las soluciones son construidas por los
                propios involucrados, mientras que en un proceso judicial la
                decisión es tomada por la autoridad competente.
              </p>
            </div>
          </div>
        </div>

        {/** COMO FUNCIONA LA CONCILIACION EN ARRIENDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona la conciliación en arriendos?
          </h2>

          <p className={styles.paragraph}>
            Una de las partes solicita una audiencia de conciliación ante un
            centro autorizado en Colombia. Durante la audiencia se revisan las
            obligaciones del contrato y se buscan acuerdos entre arrendador y
            arrendatario.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, se firma un acta de conciliación con efectos legales
            obligatorios para ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Comprobantes de pago del canon.</li>
            <li>Inventario del inmueble.</li>
            <li>Comunicaciones entre las partes.</li>
            <li>Soportes de daños o reparaciones.</li>
          </ul>
        </div>

        {/** CUANDO ES RECOMENDABLE ACUDIR A UN CENTRO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir a un Centro de Conciliación?
          </h2>

          <p className={styles.paragraph}>
            No es necesario esperar a que el conflicto llegue a un punto
            crítico. En muchas ocasiones acudir oportunamente a un centro de
            conciliación permite encontrar soluciones antes de que aumenten las
            deudas, los daños al inmueble o los desacuerdos entre las partes.
          </p>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa cuando existen diferencias
            sobre el pago del canon de arrendamiento, el incumplimiento de
            obligaciones contractuales, la terminación del contrato, la entrega
            del inmueble o la distribución de otros gastos relacionados con el
            arrendamiento.
          </p>

          <p className={styles.paragraph}>
            Además de facilitar el diálogo, una audiencia permite que las partes
            analicen diferentes alternativas para resolver el conflicto de
            manera organizada y con respaldo jurídico.
          </p>
        </div>

        {/** ERRORES QUE SUELEN EMPEORAR UN CONFLICTO DE ARRIENDAMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que suelen empeorar un conflicto de arrendamiento
          </h2>

          <p className={styles.paragraph}>
            Tanto propietarios como arrendatarios pueden tomar decisiones
            impulsivas que terminan complicando aún más la situación. Antes de
            actuar es recomendable conocer las alternativas legales disponibles
            y buscar una solución que reduzca los riesgos para ambas partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ignorar las comunicaciones</h3>

              <p>
                No responder los requerimientos suele aumentar el conflicto y
                dificulta cualquier negociación posterior.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No conservar pruebas</h3>

              <p>
                Los contratos, recibos, fotografías y conversaciones pueden
                resultar fundamentales para demostrar lo ocurrido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Buscar una solución desde las primeras diferencias facilita
                alcanzar acuerdos y evita que el conflicto continúe creciendo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No acudir a conciliación</h3>

              <p>
                Muchas controversias podrían resolverse mediante acuerdos sin
                necesidad de iniciar procesos judiciales largos y costosos.
              </p>
            </div>
          </div>
        </div>

        {/** PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre incumplimiento del contrato de arriendo
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Puedo solicitar una conciliación si el inquilino dejó de pagar?
              </h3>

              <p>
                Sí. La conciliación permite dialogar sobre las obligaciones
                pendientes y buscar acuerdos relacionados con el pago de los
                cánones o la entrega del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿También puede solicitarla el arrendatario?</h3>

              <p>
                Sí. Tanto propietarios como arrendatarios pueden acudir a
                conciliación cuando exista un conflicto derivado del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La audiencia obliga a llegar a un acuerdo?</h3>

              <p>
                No. La conciliación es voluntaria y solamente se suscribe un
                acuerdo si ambas partes están conformes con la solución
                propuesta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué sucede si una de las partes no asiste?</h3>

              <p>
                Dependiendo de cada situación, la audiencia podrá desarrollarse
                conforme a las reglas aplicables y la inasistencia puede generar
                consecuencias jurídicas en determinados casos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio llevar abogado?</h3>

              <p>
                La necesidad de contar con representación dependerá de las
                características del caso y del mecanismo utilizado para resolver
                el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo alcanzado tiene validez legal?</h3>

              <p>
                Sí. Cuando las partes llegan a un acuerdo mediante conciliación,
                este produce efectos jurídicos conforme a la legislación
                colombiana.
              </p>
            </div>
          </div>
        </div>

        {/** CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto por incumplimiento de un contrato
            de arriendo?
          </h3>

          <p className={styles.ctaText}>
            Si eres arrendador o arrendatario y buscas una alternativa para
            resolver un conflicto relacionado con el pago del canon, la entrega
            del inmueble, daños, terminación del contrato u otras obligaciones,
            nuestro Centro de Conciliación puede orientarte sobre el
            procedimiento aplicable y las alternativas legales disponibles para
            tu caso.
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
