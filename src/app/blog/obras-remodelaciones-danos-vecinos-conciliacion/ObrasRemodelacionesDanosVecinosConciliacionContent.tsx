"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ObrasRemodelacionesDanosVecinosConciliacionContent() {
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
            Conflictos entre vecinos y propiedad horizontal
          </span>

          <h1 className={styles.title}>
            ¿Una obra o remodelación dañó tu vivienda? Cómo resolver conflictos
            entre vecinos mediante conciliación
          </h1>

          <p className={styles.heroText}>
            Una remodelación puede mejorar una vivienda, pero también puede
            convertirse en el origen de un conflicto cuando durante la obra
            aparecen grietas, filtraciones, daños en paredes, techos, pisos,
            tuberías u otras afectaciones en una propiedad vecina.
          </p>

          <p className={styles.heroText}>
            En estos casos, el problema no siempre termina cuando finaliza la
            obra. Con frecuencia comienza una discusión sobre quién debe asumir
            los daños, cuánto cuesta repararlos y cuál fue realmente la causa de
            la afectación. Cuando las conversaciones directas no permiten
            encontrar una solución, la <strong>conciliación</strong> puede ser
            una alternativa para intentar construir un acuerdo, dependiendo de
            las circunstancias particulares del conflicto.
          </p>
        </div>

        {/* PROBLEMAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué daños puede causar una obra o remodelación a una vivienda
            vecina?
          </h2>

          <p className={styles.paragraph}>
            Las afectaciones pueden ser muy diferentes según el tipo de obra, la
            antigüedad de las construcciones, los trabajos realizados y las
            condiciones específicas del inmueble.
          </p>

          <p className={styles.paragraph}>
            Algunas situaciones aparecen durante la ejecución de la obra,
            mientras que otras se descubren días o incluso semanas después.
            Precisamente por eso, documentar lo ocurrido desde el momento en que
            se identifica el problema puede ser importante para entender el
            origen del conflicto.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Grietas y fisuras</h3>
              <p>
                Pueden aparecer en paredes, techos u otros elementos de la
                vivienda después de movimientos, demoliciones o trabajos
                realizados en una propiedad cercana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Filtraciones y humedades</h3>
              <p>
                Los trabajos relacionados con baños, cocinas, tuberías o
                instalaciones hidráulicas pueden generar afectaciones en otros
                apartamentos o viviendas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños en acabados</h3>
              <p>
                Pisos, paredes, techos, enchapes, puertas u otros elementos
                pueden resultar afectados durante la ejecución de una obra.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Problemas en tuberías o instalaciones</h3>
              <p>
                Una intervención puede generar inconvenientes relacionados con
                redes hidráulicas, sanitarias, eléctricas u otras instalaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños por escombros o materiales</h3>
              <p>
                El traslado, almacenamiento o manejo de materiales también puede
                ocasionar daños en espacios privados o comunes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Afectaciones a zonas comunes</h3>
              <p>
                En edificios y conjuntos, una obra también puede generar daños
                en pasillos, ascensores, fachadas u otros espacios compartidos.
              </p>
            </div>
          </div>
        </div>

        {/* PRIMEROS PASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si una obra de un vecino causa daños en tu vivienda?
          </h2>

          <p className={styles.paragraph}>
            Cuando aparece una afectación, es común que la primera reacción sea
            exigir una reparación inmediata. Sin embargo, antes de que el
            conflicto escale, puede ser útil organizar la información y dejar
            claridad sobre lo ocurrido.
          </p>

          <ul className={styles.list}>
            <li>Documentar los daños mediante fotografías y videos.</li>
            <li>
              Registrar cuándo aparecieron las afectaciones y qué trabajos se
              estaban realizando en ese momento.
            </li>
            <li>
              Conservar conversaciones y comunicaciones relacionadas con el
              problema.
            </li>
            <li>
              Informar oportunamente a la persona responsable de la obra o al
              propietario de la vivienda.
            </li>
            <li>
              Solicitar presupuestos o conceptos que permitan conocer el alcance
              de la reparación.
            </li>
            <li>
              Revisar si existen normas internas o procedimientos aplicables
              dentro del edificio o conjunto residencial.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              <strong>Un punto importante:</strong> cuando existe discusión
              sobre el origen de los daños, puede ser necesario contar con
              información técnica que ayude a establecer qué ocurrió. No siempre
              es suficiente con que un daño aparezca mientras se realiza una
              obra para determinar automáticamente su causa.
            </p>
          </div>
        </div>

        {/* QUIÉN RESPONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién debe responder por los daños causados durante una
            remodelación?
          </h2>

          <p className={styles.paragraph}>
            Esta es una de las principales discusiones en este tipo de
            conflictos. Dependiendo de las circunstancias, pueden intervenir
            diferentes personas: el propietario del inmueble donde se realiza la
            obra, quien contrató los trabajos, el profesional o contratista
            encargado de ejecutarlos u otros involucrados.
          </p>

          <p className={styles.paragraph}>
            La respuesta no siempre es automática. Es necesario analizar cómo
            ocurrió el daño, quién tenía intervención en la obra, cuáles eran
            las obligaciones de las partes y qué elementos permiten establecer
            una relación entre los trabajos realizados y la afectación
            identificada.
          </p>

          <p className={styles.paragraph}>
            Por eso, antes de asumir una posición definitiva, puede ser útil
            organizar la información disponible y buscar una conversación que
            permita entender las versiones de todos los involucrados.
          </p>
        </div>

        {/* ADMINISTRACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué papel puede tener la administración del edificio o conjunto?
          </h2>

          <p className={styles.paragraph}>
            Cuando la obra se realiza dentro de una propiedad horizontal, la
            administración puede tener un papel relacionado con el cumplimiento
            de las normas internas, los horarios de trabajo, el uso de zonas
            comunes y otros aspectos establecidos en el reglamento de propiedad
            horizontal.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, la participación de la administración y el alcance de
            sus funciones dependerán de la situación concreta. Un conflicto
            relacionado con daños entre dos propietarios no necesariamente se
            resuelve únicamente mediante una decisión administrativa interna.
          </p>

          <p className={styles.paragraph}>
            Si además existen daños en zonas comunes, incumplimiento de
            protocolos de obra o afectaciones a otros residentes, pueden surgir
            elementos adicionales que deben ser analizados según las normas y
            procedimientos aplicables.
          </p>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pruebas que pueden ayudar a demostrar los daños causados por una
            obra
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales problemas en estos conflictos es demostrar no
            solo que existe un daño, sino también explicar cómo se produjo. Por
            esa razón, conservar información desde el inicio puede ser
            especialmente útil.
          </p>

          <ul className={styles.list}>
            <li>
              Fotografías y videos tomados antes, durante y después de la obra.
            </li>
            <li>
              Conversaciones con el vecino, propietario o responsable de los
              trabajos.
            </li>
            <li>Comunicaciones enviadas a la administración.</li>
            <li>Presupuestos relacionados con la reparación.</li>
            <li>Facturas y comprobantes de gastos realizados.</li>
            <li>Informes, conceptos o valoraciones técnicas cuando existan.</li>
            <li>
              Documentos relacionados con la autorización o ejecución de la
              obra.
            </li>
          </ul>

          <p className={styles.paragraph}>
            La utilidad de cada elemento dependerá del caso. Una fotografía
            puede demostrar la existencia visible de una grieta o una humedad,
            pero no necesariamente permite determinar por sí sola cuál fue su
            causa. Por eso, en situaciones complejas pueden ser necesarios
            elementos adicionales.
          </p>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se pueden resolver estos conflictos mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del conflicto y de que el asunto sea
            susceptible de conciliación, las personas involucradas pueden acudir
            a un centro de conciliación para intentar encontrar una solución
            acordada.
          </p>

          <p className={styles.paragraph}>
            Esto puede ser especialmente útil cuando existe disposición para
            resolver el problema, pero las partes no logran ponerse de acuerdo
            sobre quién debe realizar la reparación, cuánto cuesta el daño o
            cuáles son las condiciones para dar por terminado el conflicto.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite que cada parte exponga su posición y pueda
            plantear alternativas. El objetivo no es simplemente decidir quién
            tiene razón, sino explorar si existe una solución que las partes
            estén dispuestas a aceptar.
          </p>
        </div>

        {/* ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Posibles acuerdos en un conflicto por daños causados durante una
            obra
          </h2>

          <p className={styles.paragraph}>
            La solución dependerá de los hechos y de la disposición de las
            partes para llegar a un acuerdo. Algunas alternativas que pueden
            discutirse son:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Reparación directa</h3>
              <p>
                Una de las partes puede comprometerse a realizar o asumir las
                reparaciones necesarias para solucionar la afectación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pago de una suma acordada</h3>
              <p>
                Las partes pueden establecer un valor económico relacionado con
                la reparación o con la solución del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contratación de un tercero</h3>
              <p>
                Puede acordarse que una persona o empresa especializada realice
                determinados trabajos de reparación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Plazos para reparar</h3>
              <p>
                El acuerdo puede incluir fechas específicas para iniciar y
                terminar los trabajos necesarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Forma de pago</h3>
              <p>
                Si existe una obligación económica acordada, las partes pueden
                definir valores, cuotas y fechas para su cumplimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compromisos para evitar nuevos daños</h3>
              <p>
                También pueden establecerse condiciones relacionadas con la
                continuación de la obra y las medidas que se adoptarán para
                evitar nuevas afectaciones.
              </p>
            </div>
          </div>
        </div>

        {/* PREPARARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo prepararte antes de intentar resolver el conflicto
          </h2>

          <p className={styles.paragraph}>
            Una discusión sobre daños puede prolongarse cuando las partes llegan
            con versiones generales y sin claridad sobre lo que esperan. Antes
            de intentar una negociación o acudir a conciliación, es conveniente
            ordenar los hechos.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Identifica el daño:</strong> explica exactamente qué parte
              de la vivienda o inmueble resultó afectada.
            </li>
            <li>
              <strong>Organiza la cronología:</strong> establece cuándo comenzó
              la obra y cuándo aparecieron los daños.
            </li>
            <li>
              <strong>Reúne la documentación:</strong> conserva fotografías,
              mensajes, presupuestos y demás información disponible.
            </li>
            <li>
              <strong>Define lo que buscas:</strong> determina si consideras
              adecuada una reparación, un pago u otra alternativa.
            </li>
            <li>
              <strong>Evalúa las propuestas:</strong> considera qué condiciones
              podrían permitir una solución razonable para ambas partes.
            </li>
          </ul>
        </div>

        {/* CUÁNDO CONVIENE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser conveniente intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa cuando existe un conflicto
            concreto entre vecinos o propietarios y todavía hay disposición para
            explorar una solución negociada.
          </p>

          <p className={styles.paragraph}>
            Puede ser útil, por ejemplo, cuando ambas partes reconocen que
            existe una afectación, pero no están de acuerdo sobre el valor de la
            reparación. También cuando existe discusión sobre quién debe asumir
            determinados costos o sobre la forma en que se realizará la
            reparación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo puede permitir que las partes definan de manera clara
              qué se hará, quién asumirá determinadas obligaciones y dentro de
              qué plazo deberá cumplirse lo acordado.
            </p>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se logra llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con una solución negociada. Puede
            ocurrir que las partes tengan versiones completamente diferentes
            sobre la causa de los daños o que no exista acuerdo sobre la forma
            de repararlos.
          </p>

          <p className={styles.paragraph}>
            Si no es posible llegar a una solución, las alternativas posteriores
            dependerán del tipo de conflicto, de las personas involucradas y de
            las circunstancias específicas del caso. Por eso, puede ser
            necesario evaluar de manera individual cuál es el camino que
            corresponde.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre obras, remodelaciones y daños entre
            vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Qué hago si aparecen grietas después de la remodelación de mi
                vecino?
              </h3>

              <p>
                Es recomendable documentar las grietas, registrar cuándo
                aparecieron y comunicar la situación. Si existe discusión sobre
                su origen, puede ser útil contar con información adicional que
                permita analizar la causa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo exigir que reparen los daños?</h3>

              <p>
                La reparación puede ser una de las soluciones que se discutan
                entre las partes, dependiendo de los hechos y de las
                circunstancias particulares del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué hago si el vecino niega que su obra causó el daño?</h3>

              <p>
                En estos casos puede ser especialmente importante reunir
                información que permita explicar la cronología de los hechos y
                analizar el posible origen de la afectación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La administración puede solucionar el conflicto?</h3>

              <p>
                Su participación dependerá de las circunstancias, del reglamento
                de propiedad horizontal y de la relación del conflicto con las
                normas internas o las zonas comunes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede pedir una compensación económica?</h3>

              <p>
                Dependiendo del caso y de lo que las partes estén dispuestas a
                acordar, una solución económica puede ser uno de los puntos
                discutidos durante una negociación o conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si se llega a un acuerdo?</h3>

              <p>
                Cuando las partes alcanzan un acuerdo dentro de una
                conciliación, este se formaliza conforme al procedimiento
                aplicable y puede producir los efectos jurídicos previstos por
                la normativa correspondiente.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Resolver un daño entre vecinos antes de que el conflicto escale
          </h2>

          <p className={styles.paragraph}>
            Una grieta, una filtración o cualquier otra afectación puede
            convertirse rápidamente en un problema mayor cuando las partes dejan
            de comunicarse y comienzan a discutir sobre responsabilidades.
          </p>

          <p className={styles.paragraph}>
            Documentar lo ocurrido, identificar claramente el daño y mantener
            una conversación orientada a encontrar soluciones puede ayudar a
            evitar que el conflicto se prolongue innecesariamente. Cuando el
            diálogo directo ya no funciona, la conciliación puede ser una
            alternativa para explorar un acuerdo, siempre que las circunstancias
            del caso permitan acudir a este mecanismo.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto con un vecino por daños causados durante una
            obra o remodelación?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles y evalúa si tu situación puede
            abordarse mediante conciliación. En Sol Centro de Conciliación
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
