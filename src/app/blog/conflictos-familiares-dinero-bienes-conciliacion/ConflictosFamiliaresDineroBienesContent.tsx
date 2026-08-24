"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosFamiliaresDineroBienesContent() {
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
            Conciliación y conflictos familiares
          </span>

          <h1 className={styles.title}>
            Conflictos familiares por dinero o bienes: cómo buscar una solución
            mediante conciliación
          </h1>

          <p className={styles.heroText}>
            Los conflictos familiares relacionados con dinero, préstamos, deudas
            o bienes pueden convertirse rápidamente en problemas mucho más
            complejos. Lo que inicialmente parecía un simple acuerdo entre
            familiares puede terminar afectando la confianza, la convivencia y
            la relación entre las personas involucradas.
          </p>

          <p className={styles.heroText}>
            En muchos casos, antes de permitir que el conflicto escale o se
            convierta en un proceso judicial, la <strong>conciliación</strong>{" "}
            puede ser una alternativa para sentarse a dialogar, aclarar las
            diferencias y explorar posibles acuerdos dentro de los asuntos que
            legalmente pueden ser objeto de conciliación.
          </p>
        </div>

        {/* INTRODUCCIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué el dinero y los bienes generan tantos conflictos entre
            familiares?
          </h2>

          <p className={styles.paragraph}>
            Dentro de una familia es común que los acuerdos se hagan de manera
            informal. Un hermano presta dinero a otro, unos padres ayudan
            económicamente a un hijo o varios familiares deciden comprar,
            administrar o utilizar un bien sin dejar completamente claras las
            condiciones.
          </p>

          <p className={styles.paragraph}>
            El problema suele aparecer cuando las expectativas de cada persona
            son diferentes. Quien entregó el dinero puede considerar que se
            trataba de un préstamo, mientras que quien lo recibió puede pensar
            que fue una ayuda. Algo similar puede ocurrir con bienes, pagos,
            inversiones, gastos compartidos o compromisos que nunca quedaron
            formalizados por escrito.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>
                Un conflicto familiar no siempre surge porque alguien actuó de
                mala fe.
              </strong>{" "}
              En ocasiones nace de acuerdos poco claros, conversaciones
              informales o expectativas diferentes sobre el dinero, una deuda o
              el uso de un bien.
            </p>
          </div>
        </div>

        {/* CONFLICTOS MÁS COMUNES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones familiares que pueden generar conflictos económicos
          </h2>

          <p className={styles.paragraph}>
            Cada familia tiene circunstancias diferentes, pero algunos de los
            conflictos que suelen presentarse están relacionados con:
          </p>

          <ul className={styles.list}>
            <li>
              Préstamos de dinero entre familiares que no fueron pagados en la
              fecha esperada.
            </li>
            <li>
              Deudas originadas por ayudas económicas o compromisos personales.
            </li>
            <li>Discusiones sobre quién debe asumir determinados gastos.</li>
            <li>Conflictos por la administración o utilización de un bien.</li>
            <li>
              Desacuerdos sobre pagos realizados por uno o varios familiares.
            </li>
            <li>
              Diferencias relacionadas con inversiones o negocios familiares.
            </li>
            <li>Reclamaciones económicas derivadas de acuerdos verbales.</li>
            <li>
              Conflictos por la distribución de responsabilidades económicas
              entre familiares.
            </li>
          </ul>

          <p className={styles.paragraph}>
            No todas estas situaciones tienen exactamente el mismo tratamiento
            jurídico. Por eso es importante analizar qué ocurrió, cuáles fueron
            los acuerdos entre las partes y si el asunto concreto puede ser
            llevado a un proceso de conciliación.
          </p>
        </div>

        {/* PRÉSTAMOS FAMILIARES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Préstamos entre familiares: cuando la confianza no fue suficiente
          </h2>

          <p className={styles.paragraph}>
            Prestar dinero a un familiar suele ser una decisión basada en la
            confianza. Precisamente por esa razón, muchas veces no se firma un
            contrato ni se establece claramente una fecha de pago.
          </p>

          <p className={styles.paragraph}>
            Con el paso del tiempo pueden aparecer preguntas como:{" "}
            <strong>
              ¿cuánto dinero se entregó?, ¿era un préstamo o una ayuda?, ¿cuándo
              debía devolverse?, ¿se acordaron pagos parciales?
            </strong>
          </p>

          <p className={styles.paragraph}>
            Cuando existen diferentes versiones sobre lo ocurrido, el conflicto
            puede afectar seriamente la relación familiar. Una conciliación
            puede crear un espacio para que las personas expongan su posición y
            evalúen la posibilidad de construir un acuerdo sobre la obligación
            discutida.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamo sin contrato escrito</h3>
              <p>
                La falta de un documento puede generar dificultades probatorias,
                pero no significa automáticamente que las partes no puedan
                intentar dialogar y buscar una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pagos pendientes</h3>
              <p>
                Las partes pueden conversar sobre alternativas como pagos
                parciales, fechas de cumplimiento u otras fórmulas de acuerdo,
                según las circunstancias del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relación familiar deteriorada</h3>
              <p>
                La conciliación busca facilitar una conversación estructurada,
                evitando que el conflicto continúe creciendo innecesariamente.
              </p>
            </div>
          </div>
        </div>

        {/* BIENES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos familiares relacionados con bienes
          </h2>

          <p className={styles.paragraph}>
            Los bienes también pueden convertirse en una fuente importante de
            conflictos. Esto puede ocurrir cuando varias personas tienen
            intereses sobre un mismo bien, cuando existen desacuerdos sobre su
            uso o administración o cuando uno de los familiares considera haber
            asumido una carga económica mayor que los demás.
          </p>

          <p className={styles.paragraph}>
            En este tipo de situaciones es fundamental distinguir entre una
            simple diferencia familiar y un conflicto que requiere un análisis
            jurídico más detallado. Dependiendo del asunto y de los derechos
            involucrados, la conciliación puede servir para explorar acuerdos
            sobre aspectos que sean legalmente conciliables.
          </p>

          <ul className={styles.list}>
            <li>Uso de bienes compartidos.</li>
            <li>Administración de determinados bienes familiares.</li>
            <li>Distribución de gastos relacionados con un bien.</li>
            <li>Reconocimiento de pagos o aportes económicos realizados.</li>
            <li>Compensaciones económicas entre las personas involucradas.</li>
            <li>Acuerdos sobre responsabilidades futuras.</li>
          </ul>
        </div>

        {/* ¿SE PUEDE CONCILIAR? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Todos los conflictos familiares por dinero o bienes se pueden
            conciliar?
          </h2>

          <p className={styles.paragraph}>
            No necesariamente. La posibilidad de conciliar depende de la
            naturaleza concreta del conflicto y de los derechos involucrados.
            Existen asuntos que pueden ser objeto de acuerdo entre las partes y
            otros que tienen limitaciones legales o requieren procedimientos
            específicos.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, antes de iniciar una conciliación resulta útil
            identificar con claridad cuál es el problema. No es lo mismo
            reclamar el pago de un dinero prestado que resolver una controversia
            relacionada con derechos sucesorales, propiedad de un inmueble u
            otros asuntos con reglas particulares.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>
                La conciliación no consiste simplemente en reunir a dos personas
                para que “hagan las paces”.
              </strong>{" "}
              Es un mecanismo formal de resolución de conflictos que busca
              facilitar acuerdos dentro del marco jurídico aplicable a cada
              caso.
            </p>
          </div>
        </div>

        {/* CÓMO PREPARARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo prepararse para una conciliación por un conflicto familiar?
          </h2>

          <p className={styles.paragraph}>
            Llegar a una audiencia con una idea clara del problema puede ayudar
            a que la conversación sea más ordenada y productiva. Antes de
            acudir, puede ser conveniente organizar la información relacionada
            con el conflicto.
          </p>

          <ul className={styles.list}>
            <li>Identificar qué ocurrió y cuál es el origen del desacuerdo.</li>
            <li>Definir qué se está solicitando a la otra persona.</li>
            <li>
              Reunir documentos, comprobantes o conversaciones que puedan ser
              relevantes.
            </li>
            <li>
              Establecer con claridad qué aspectos se estarían dispuesto a
              negociar.
            </li>
            <li>
              Pensar en alternativas realistas que puedan permitir una solución.
            </li>
          </ul>

          <p className={styles.paragraph}>
            La idea no es llegar únicamente a repetir el problema, sino intentar
            identificar una salida concreta. En ocasiones, un acuerdo de pago,
            un compromiso sobre gastos futuros o una fórmula de compensación
            puede ayudar a cerrar una discusión que llevaba meses o incluso años
            afectando a la familia.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué considerar la conciliación antes de llevar el conflicto a
            otra instancia?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Espacio para dialogar</h3>
              <p>
                Permite que las personas involucradas expongan su posición y
                escuchen directamente la versión de la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor participación en la solución</h3>
              <p>
                Las partes pueden participar activamente en la construcción de
                alternativas para resolver el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Posibilidad de preservar la relación</h3>
              <p>
                En conflictos familiares, encontrar un acuerdo puede evitar que
                una diferencia económica termine rompiendo definitivamente los
                vínculos personales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Claridad sobre los compromisos</h3>
              <p>
                Cuando se alcanza un acuerdo válido, es posible dejar definidos
                los compromisos asumidos por cada una de las partes.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO EL CONFLICTO ESCALA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre cuando el conflicto familiar ya se ha vuelto muy
            complejo?
          </h2>

          <p className={styles.paragraph}>
            A veces el problema económico termina mezclándose con discusiones
            antiguas, problemas de convivencia o diferencias familiares que no
            tienen relación directa con el dinero o los bienes.
          </p>

          <p className={styles.paragraph}>
            En esos casos, es importante intentar separar el conflicto emocional
            del asunto concreto que se busca resolver. Por ejemplo, una persona
            puede estar molesta por una discusión ocurrida hace años, pero el
            objeto de la conciliación puede centrarse específicamente en una
            obligación económica, un pago pendiente o un acuerdo determinado.
          </p>

          <p className={styles.paragraph}>
            Tener claro qué se quiere resolver ayuda a evitar que la
            conversación se convierta nuevamente en una discusión sin una salida
            concreta.
          </p>
        </div>

        {/* ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            La importancia de dejar claros los acuerdos familiares
          </h2>

          <p className={styles.paragraph}>
            Muchas disputas familiares podrían evitarse si los compromisos se
            hablaran con claridad desde el principio. Cuando hay dinero,
            préstamos, bienes o responsabilidades económicas involucradas, dar
            por sentado que todos entienden el acuerdo de la misma manera puede
            generar problemas posteriormente.
          </p>

          <p className={styles.paragraph}>
            Un acuerdo claro permite establecer qué debe hacer cada persona,
            cuáles son los compromisos asumidos y, cuando corresponda, cómo y
            cuándo deberán cumplirse.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Resolver un conflicto económico dentro de una familia no siempre
              significa que una persona “gane” y la otra “pierda”. En muchos
              casos, una solución razonable consiste en encontrar un acuerdo
              claro que permita cerrar la discusión y evitar que el problema
              continúe afectando la relación.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conflictos familiares por dinero y bienes
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar una deuda entre familiares?</h3>
              <p>
                Dependiendo de las características del caso, las partes pueden
                acudir a conciliación para intentar llegar a un acuerdo sobre
                obligaciones económicas que sean legalmente conciliables.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito un contrato para reclamar un préstamo familiar?</h3>
              <p>
                No siempre existe un contrato escrito entre familiares. La
                situación concreta, los acuerdos realizados y los elementos
                disponibles deberán analizarse según cada caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación puede ayudar a evitar una demanda?</h3>
              <p>
                Si las partes logran un acuerdo sobre un asunto susceptible de
                conciliación, pueden resolver el conflicto sin continuar la
                controversia por otras vías.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué pasa si uno de los familiares no quiere llegar a un
                acuerdo?
              </h3>
              <p>
                La conciliación busca facilitar el diálogo, pero el acuerdo
                depende de la voluntad de las partes. Si no se alcanza una
                solución, podrán evaluarse las alternativas disponibles según el
                caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Un acuerdo de conciliación tiene efectos legales?</h3>
              <p>
                Cuando se celebra y formaliza válidamente, el acta de
                conciliación puede producir los efectos jurídicos establecidos
                por la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Puedo conciliar un problema relacionado con un bien familiar?
              </h3>
              <p>
                Dependerá del tipo de bien, del conflicto y de los derechos
                involucrados. Es importante revisar si el asunto específico es
                susceptible de conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto familiar relacionado con dinero, una deuda o un
            bien?
          </h3>

          <p className={styles.ctaText}>
            Explora la posibilidad de resolver la diferencia mediante
            conciliación. Un espacio de diálogo puede ayudarte a buscar un
            acuerdo claro y evitar que un conflicto económico continúe afectando
            la relación familiar.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar información
          </a>
        </div>
      </motion.article>
    </section>
  );
}
