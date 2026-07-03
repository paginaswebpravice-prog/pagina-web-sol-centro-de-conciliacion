"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboral() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de no conciliación laboral en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento que deja constancia de que una audiencia de conciliación laboral terminó sin acuerdo o que una de las partes no asistió.",
        },
      },
      {
        "@type": "Question",
        name: "¿La constancia de no conciliación sirve para demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos en Colombia, la constancia de no conciliación laboral sirve como requisito previo para iniciar un proceso judicial laboral.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si el empleador no asiste a la audiencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador deja constancia de inasistencia y el trabajador puede continuar con el proceso judicial correspondiente.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de no conciliación laboral en Colombia: modelo, formato y guía legal",
    description:
      "Guía completa sobre el acta de no conciliación laboral en Colombia y Bogotá. Incluye ejemplos, formato, requisitos, constancia de inasistencia y efectos legales.",
    author: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    mainEntityOfPage:
      "https://solcentrodeconciliacion.com/acta-no-conciliacion-laboral",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <motion.article
            id="acta-no-conciliacion-laboral"
            className={styles.card}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className={styles.badge}>
              Guía jurídica actualizada sobre conciliación laboral en Colombia •
              2026
            </span>

            <motion.h1 className={styles.title}>
              Acta de no conciliación laboral en Colombia: qué es, modelo,
              efectos legales, inasistencia y qué hacer si no hubo acuerdo
            </motion.h1>

            <p className={styles.text}>
              El <strong>acta de no conciliación laboral en Colombia</strong> es
              el documento mediante el cual un conciliador deja constancia de
              que una audiencia de conciliación terminó sin que trabajador y
              empleador lograran un acuerdo, o de que alguna de las partes no
              asistió a la diligencia convocada. Aunque muchas personas
              consideran que la conciliación únicamente busca llegar a un
              acuerdo amistoso, la realidad es que cuando este no se alcanza
              también se genera un documento con importantes efectos dentro del
              procedimiento laboral.
            </p>

            <p className={styles.text}>
              La <strong>constancia de no conciliación laboral</strong> permite
              acreditar que el intento de solucionar el conflicto mediante
              diálogo fue realizado y, dependiendo del caso concreto y de la
              normativa aplicable, puede convertirse en un documento relevante
              para continuar con las actuaciones judiciales correspondientes.
              Por esta razón, conocer cuándo se expide, qué información contiene
              y cuáles son sus efectos resulta fundamental tanto para
              trabajadores como para empleadores.
            </p>

            <p className={styles.text}>
              Este documento es frecuente en controversias relacionadas con{" "}
              <strong>despidos</strong>,{" "}
              <strong>liquidaciones laborales</strong>,{" "}
              <strong>prestaciones sociales</strong>,{" "}
              <strong>salarios pendientes</strong>,{" "}
              <strong>horas extras</strong>, <strong>indemnizaciones</strong>,{" "}
              <strong>terminación del contrato de trabajo</strong>, conflictos
              por seguridad social y otras reclamaciones derivadas de la
              relación laboral.
            </p>

            <p className={styles.text}>
              Muchas personas llegan a esta guía después de buscar en Google
              expresiones como{" "}
              <strong>"modelo de acta de no conciliación laboral"</strong>,{" "}
              <strong>
                "qué pasa si no hay acuerdo en una conciliación laboral"
              </strong>
              , <strong>"el empleador no asistió a la conciliación"</strong>,{" "}
              <strong>"constancia de no conciliación"</strong> o{" "}
              <strong>
                "cómo demandar después de una conciliación laboral"
              </strong>
              . Aquí encontrará una explicación clara sobre cada uno de estos
              temas y conocerá cómo funciona este procedimiento en Colombia.
            </p>

            <p className={styles.text}>
              Además de explicar el contenido del acta, en esta guía también
              encontrará información sobre los requisitos que normalmente debe
              contener, la diferencia entre una audiencia sin acuerdo y una
              inasistencia, los efectos jurídicos de la constancia, un modelo
              orientativo, recomendaciones antes de asistir a la audiencia y las
              preguntas más frecuentes relacionadas con la conciliación laboral
              en Colombia.
            </p>

            <div className={styles.note}>
              <strong>Información importante:</strong> Que una conciliación
              laboral termine sin acuerdo no significa que el trabajador pierda
              automáticamente sus derechos ni que el empleador tenga la razón.
              Simplemente deja constancia de que el conflicto no pudo
              solucionarse mediante este mecanismo y que las partes podrán
              acudir a las actuaciones legales que resulten procedentes según
              las circunstancias del caso.
            </div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.subTitle}>
                ¿Qué es un acta de no conciliación laboral y cuándo se expide en
                Colombia?
              </h2>

              <p className={styles.text}>
                El <strong>acta de no conciliación laboral</strong> es el
                documento oficial mediante el cual el conciliador deja
                constancia de que una audiencia de conciliación terminó sin que
                fuera posible alcanzar un acuerdo entre el trabajador y el
                empleador. Su principal finalidad consiste en dejar un registro
                formal del resultado de la diligencia, indicando que el
                conflicto no logró solucionarse mediante este mecanismo
                alternativo.
              </p>

              <p className={styles.text}>
                En Colombia, la conciliación laboral constituye una herramienta
                que busca facilitar soluciones rápidas, voluntarias y
                concertadas antes de acudir a un proceso judicial. Sin embargo,
                no todas las audiencias terminan con un acuerdo. En muchos casos
                existen diferencias sobre el pago de salarios, prestaciones
                sociales, indemnizaciones, liquidaciones, horas extras,
                estabilidad laboral, terminación del contrato o cualquier otra
                reclamación derivada de la relación de trabajo.
              </p>

              <p className={styles.text}>
                Cuando las partes mantienen posiciones incompatibles y no es
                posible llegar a un acuerdo, el conciliador expide la
                correspondiente constancia, documento que acredita el resultado
                de la audiencia y que podrá tener importancia dentro de las
                actuaciones posteriores, dependiendo de las circunstancias del
                caso.
              </p>

              <div className={styles.note}>
                <strong>Importante:</strong> Una no conciliación no significa
                que el trabajador haya perdido sus derechos ni que el empleador
                tenga razón. Simplemente demuestra que durante la audiencia no
                fue posible alcanzar un acuerdo voluntario.
              </div>

              <h2 className={styles.subTitle}>
                ¿Cuándo se expide un acta de no conciliación laboral?
              </h2>

              <p className={styles.text}>
                La constancia puede expedirse en diferentes situaciones, siendo
                la más frecuente aquella en la que trabajador y empleador
                asisten a la audiencia, exponen sus posiciones, pero finalmente
                no logran llegar a un acuerdo que permita solucionar el
                conflicto.
              </p>

              <p className={styles.text}>
                También pueden existir otros escenarios en los cuales el
                conciliador deja constancia del resultado de la diligencia,
                especialmente cuando alguna de las partes no comparece a la
                audiencia o cuando, pese a la realización de la reunión, no
                existe disposición suficiente para negociar las pretensiones
                planteadas.
              </p>

              <ul className={styles.list}>
                <li>Las partes mantienen posiciones completamente opuestas.</li>

                <li>No existe voluntad para realizar concesiones.</li>

                <li>El empleador niega las obligaciones reclamadas.</li>

                <li>El trabajador no acepta la propuesta presentada.</li>

                <li>La audiencia finaliza sin alcanzar un acuerdo.</li>

                <li>
                  Alguna de las partes no comparece a la diligencia convocada.
                </li>
              </ul>

              <h2 className={styles.subTitle}>
                Diferencia entre una no conciliación y la inasistencia a la
                audiencia
              </h2>

              <p className={styles.text}>
                Uno de los errores más frecuentes consiste en pensar que una
                audiencia sin acuerdo y una audiencia donde una persona no
                asistió significan exactamente lo mismo. Aunque ambas
                situaciones pueden dar lugar a la expedición de una constancia
                por parte del conciliador, jurídicamente corresponden a
                escenarios diferentes.
              </p>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  Cuando existe una verdadera no conciliación
                </h3>

                <ul className={styles.highlightList}>
                  <li>Trabajador y empleador sí asistieron.</li>

                  <li>La audiencia se desarrolló normalmente.</li>

                  <li>Se discutieron las reclamaciones laborales.</li>

                  <li>No fue posible alcanzar un acuerdo.</li>

                  <li>El conciliador deja constancia del resultado.</li>
                </ul>
              </div>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  Cuando existe inasistencia a la conciliación
                </h3>

                <ul className={styles.highlightList}>
                  <li>Una de las partes no comparece.</li>

                  <li>La audiencia no puede desarrollarse normalmente.</li>

                  <li>El conciliador deja constancia de la inasistencia.</li>

                  <li>Se registra quién asistió y quién no compareció.</li>

                  <li>
                    La actuación continúa conforme a la normativa aplicable.
                  </li>
                </ul>
              </div>

              <h2 className={styles.subTitle}>
                ¿Por qué es importante esta constancia?
              </h2>

              <p className={styles.text}>
                Aunque muchas personas únicamente buscan un modelo del
                documento, en la práctica la verdadera importancia del acta
                radica en los efectos que puede generar dentro del conflicto
                laboral. Dependiendo del asunto discutido, puede constituir un
                soporte relevante para demostrar que las partes intentaron
                resolver la controversia antes de acudir a otras actuaciones
                legales.
              </p>

              <p className={styles.text}>
                Además, el documento permite dejar evidencia objetiva sobre la
                fecha de la audiencia, las personas que comparecieron, el
                resultado obtenido y las circunstancias que impidieron alcanzar
                un acuerdo, aspectos que pueden ser útiles durante las etapas
                posteriores del conflicto.
              </p>

              <div className={styles.note}>
                Una conciliación que termina sin acuerdo no representa un
                fracaso del procedimiento. En muchos casos permite aclarar las
                posiciones de las partes, delimitar el conflicto y dejar
                constancia formal de que el mecanismo conciliatorio fue
                intentado antes de acudir a otras alternativas previstas por la
                legislación laboral colombiana.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.subTitle}>
                ¿Qué debe contener un acta de no conciliación laboral en
                Colombia?
              </h2>

              <p className={styles.text}>
                Una de las dudas más frecuentes entre trabajadores y empleadores
                consiste en conocer qué información debe aparecer dentro del{" "}
                <strong>acta de no conciliación laboral</strong>. Aunque el
                contenido puede variar dependiendo del caso concreto y del
                centro de conciliación que adelante el procedimiento, el
                documento debe permitir identificar claramente cómo se
                desarrolló la audiencia y cuál fue su resultado.
              </p>

              <p className={styles.text}>
                Un acta correctamente elaborada ofrece seguridad jurídica,
                facilita la comprensión del conflicto y constituye un soporte
                importante para las actuaciones posteriores que puedan
                adelantarse. Por ello, es recomendable revisar cuidadosamente su
                contenido antes de retirarse de la audiencia y solicitar la
                aclaración de cualquier dato que resulte incorrecto o
                incompleto.
              </p>

              <div className={styles.note}>
                <strong>Recomendación:</strong> Antes de firmar o recibir la
                constancia, verifique que los nombres, números de
                identificación, fechas, empresas, pretensiones y demás datos
                consignados correspondan realmente a la audiencia realizada.
              </div>

              <h3 className={styles.highlightTitle}>
                Información que normalmente contiene un acta de no conciliación
                laboral
              </h3>

              <p className={styles.text}>
                Aunque cada procedimiento presenta particularidades,
                generalmente el acta incorpora información suficiente para
                identificar plenamente la audiencia, las personas que
                participaron y el resultado obtenido.
              </p>

              <ul className={styles.list}>
                <li>Nombre del centro de conciliación.</li>

                <li>Número o consecutivo del acta.</li>

                <li>Ciudad donde se realizó la audiencia.</li>

                <li>Fecha y hora de inicio y finalización.</li>

                <li>Nombre completo del conciliador.</li>

                <li>Datos de identificación del trabajador.</li>

                <li>Datos del empleador, empresa o representante.</li>

                <li>Descripción general del conflicto laboral.</li>

                <li>Pretensiones expuestas durante la audiencia.</li>

                <li>Manifestaciones relevantes de las partes.</li>

                <li>Constancia de que no fue posible alcanzar un acuerdo.</li>

                <li>Constancia de inasistencia cuando corresponda.</li>

                <li>Observaciones del conciliador, si son procedentes.</li>

                <li>Firmas de quienes participaron en la diligencia.</li>
              </ul>

              <h2 className={styles.subTitle}>
                ¿Quién firma el acta de no conciliación?
              </h2>

              <p className={styles.text}>
                El documento normalmente es suscrito por el conciliador que
                dirigió la audiencia y, cuando corresponde, por las personas que
                asistieron a la diligencia. La finalidad de estas firmas es
                dejar constancia de la realización de la audiencia y del
                resultado obtenido durante el intento de conciliación.
              </p>

              <p className={styles.text}>
                Cuando alguna de las partes no comparece a la audiencia, dicha
                circunstancia también queda registrada en el documento para
                efectos de acreditar el desarrollo del procedimiento.
              </p>

              <h2 className={styles.subTitle}>
                ¿Quién conserva el acta original?
              </h2>

              <p className={styles.text}>
                Una vez finalizada la audiencia, el centro de conciliación
                conserva el expediente correspondiente conforme a las reglas
                aplicables, mientras que las partes pueden solicitar las copias
                o constancias que resulten procedentes para acreditar el
                resultado de la conciliación cuando sea necesario.
              </p>

              <p className={styles.text}>
                Conservar una copia del documento resulta especialmente
                importante cuando posteriormente sea necesario demostrar que la
                audiencia efectivamente se realizó o acreditar cuál fue el
                resultado del procedimiento conciliatorio.
              </p>

              <h2 className={styles.subTitle}>
                Errores frecuentes al revisar un acta de no conciliación laboral
              </h2>

              <p className={styles.text}>
                Antes de abandonar la audiencia conviene revisar cuidadosamente
                el contenido del documento. Detectar cualquier inconsistencia en
                ese momento puede evitar dificultades posteriores cuando el acta
                deba utilizarse como soporte dentro de otras actuaciones.
              </p>

              <ul className={styles.list}>
                <li>Nombres incompletos o con errores de digitación.</li>

                <li>Números de identificación incorrectos.</li>

                <li>Fecha equivocada de la audiencia.</li>

                <li>Nombre incorrecto de la empresa.</li>

                <li>Pretensiones laborales descritas de manera imprecisa.</li>

                <li>Omisión de que una de las partes no asistió.</li>

                <li>Errores en las firmas o identificación del conciliador.</li>

                <li>
                  Observaciones que no corresponden a lo ocurrido durante la
                  audiencia.
                </li>
              </ul>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  Recomendaciones antes de retirarse de la audiencia
                </h3>

                <ul className={styles.highlightList}>
                  <li>Leer completamente el acta antes de recibir la copia.</li>

                  <li>
                    Confirmar que todos los datos personales sean correctos.
                  </li>

                  <li>
                    Verificar que el conflicto esté correctamente descrito.
                  </li>

                  <li>
                    Comprobar que el resultado de la audiencia corresponda a lo
                    ocurrido.
                  </li>

                  <li>
                    Solicitar aclaraciones inmediatas si existe algún error.
                  </li>

                  <li>
                    Guardar una copia física y otra digital del documento.
                  </li>

                  <li>
                    Conservar junto con el acta las citaciones, contratos y
                    demás soportes relacionados con el conflicto laboral.
                  </li>
                </ul>
              </div>

              <p className={styles.text}>
                Un acta correctamente elaborada no solo facilita la comprensión
                del procedimiento conciliatorio, sino que también brinda mayor
                seguridad para trabajadores y empleadores al dejar un registro
                claro, completo y verificable del desarrollo de la audiencia y
                de las razones por las cuales no fue posible alcanzar un
                acuerdo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.subTitle}>
                Modelo de acta de no conciliación laboral en Colombia (Ejemplo
                orientativo)
              </h2>

              <p className={styles.text}>
                Muchas personas buscan un{" "}
                <strong>modelo de acta de no conciliación laboral</strong> para
                conocer cómo suele estructurarse este documento. Es importante
                tener presente que el formato puede variar dependiendo del
                centro de conciliación que adelante la audiencia, pero
                generalmente conserva una estructura muy similar.
              </p>

              <p className={styles.text}>
                El siguiente ejemplo tiene únicamente fines ilustrativos y
                permite entender qué información suele incluir una constancia de
                no conciliación laboral en Colombia.
              </p>

              <pre className={styles.pre}>
                {`ACTA DE NO CONCILIACIÓN LABORAL

ACTA No. _______

CENTRO DE CONCILIACIÓN

Nombre del Centro: ____________________________

Ciudad: ________________________

Fecha: _________________________

Hora de inicio: ________________

Hora de finalización: ___________


CONCILIADOR

Nombre completo:

_____________________________________________


PARTES

TRABAJADOR

Nombre:

Documento de identidad:

Dirección:

Correo electrónico:

Teléfono:


EMPLEADOR

Empresa:

Representante legal:

NIT:

Dirección:

Correo electrónico:


OBJETO DE LA AUDIENCIA

Se deja constancia de que las partes fueron convocadas para intentar
resolver el conflicto laboral relacionado con:

• Salarios.
• Prestaciones sociales.
• Liquidación.
• Horas extras.
• Indemnizaciones.
• Terminación del contrato.
• Otras reclamaciones laborales.


DESARROLLO DE LA AUDIENCIA

Durante la diligencia ambas partes expusieron sus posiciones respecto
de las reclamaciones formuladas.

El conciliador promovió diferentes alternativas de solución con el
propósito de facilitar un acuerdo voluntario entre trabajador y
empleador.


RESULTADO

Finalizada la audiencia, no fue posible alcanzar un acuerdo
conciliatorio respecto de las pretensiones discutidas.

En consecuencia, se deja constancia de NO CONCILIACIÓN.


OBSERVACIONES

________________________________________________

________________________________________________

________________________________________________


FIRMAS

Conciliador

_________________________

Trabajador

_________________________

Empleador

_________________________`}
              </pre>

              <h2 className={styles.subTitle}>
                Modelo de constancia por inasistencia del empleador o del
                trabajador
              </h2>

              <p className={styles.text}>
                Cuando una de las partes no comparece a la audiencia programada,
                el conciliador también puede expedir una constancia en la que
                deja registrado quién asistió y quién no compareció a la
                diligencia.
              </p>

              <pre className={styles.pre}>
                {`CONSTANCIA DE INASISTENCIA

CENTRO DE CONCILIACIÓN

En la ciudad de ____________________, siendo las ______ del día
__________________, se deja constancia de que la audiencia de
conciliación laboral fue convocada oportunamente.

Una de las partes compareció a la diligencia.

La otra parte no asistió a la audiencia programada.

En consecuencia, el conciliador deja constancia de la inasistencia
para los efectos legales que correspondan.

FIRMA DEL CONCILIADOR

______________________________`}
              </pre>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  ¿Este modelo puede utilizarse directamente?
                </h3>

                <p className={styles.text}>
                  No. Cada centro de conciliación utiliza formatos propios y
                  adapta el contenido según las características del conflicto
                  laboral. Este ejemplo tiene únicamente una finalidad
                  pedagógica para mostrar la estructura que normalmente contiene
                  una constancia de no conciliación laboral en Colombia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.subTitle}>
                ¿Qué pasa después de una no conciliación laboral en Colombia?
              </h2>

              <p className={styles.text}>
                Una de las dudas más frecuentes entre trabajadores y empleadores
                es qué sucede cuando una audiencia de conciliación termina sin
                acuerdo. Muchas personas creen que el procedimiento termina
                definitivamente o que ya no existen alternativas para defender
                sus derechos. Sin embargo, la realidad es diferente.
              </p>

              <p className={styles.text}>
                La conciliación constituye un mecanismo para intentar solucionar
                el conflicto de manera voluntaria antes de acudir a otras
                instancias. Cuando las partes no logran un acuerdo, el conflicto
                no desaparece; simplemente continúa por los canales jurídicos
                que resulten procedentes según la naturaleza de la reclamación
                laboral.
              </p>

              <div className={styles.note}>
                <strong>Importante:</strong> Una audiencia sin acuerdo no
                significa que el trabajador pierda automáticamente sus derechos
                ni que el empleador tenga la razón. La constancia únicamente
                acredita el resultado de la audiencia de conciliación.
              </div>

              <h2 className={styles.subTitle}>
                ¿Se puede presentar una demanda después de una no conciliación
                laboral?
              </h2>

              <p className={styles.text}>
                Dependiendo del tipo de conflicto y de los requisitos previstos
                por la ley, una vez finalizada la audiencia sin acuerdo las
                partes podrán continuar con las actuaciones judiciales que
                resulten procedentes. Precisamente por ello resulta tan
                importante conservar la documentación entregada durante la
                conciliación, incluyendo las citaciones, soportes y la
                constancia expedida por el conciliador.
              </p>

              <p className={styles.text}>
                Antes de iniciar cualquier actuación judicial es recomendable
                revisar el contenido del acta, verificar que toda la información
                sea correcta y reunir la documentación relacionada con la
                relación laboral, ya que estos elementos podrán resultar
                relevantes durante las etapas posteriores del conflicto.
              </p>

              <h2 className={styles.subTitle}>
                Documentos que conviene conservar después de la audiencia
              </h2>

              <p className={styles.text}>
                Independientemente de que exista o no una demanda posterior,
                conservar la documentación relacionada con la conciliación
                facilita demostrar lo ocurrido durante el procedimiento y
                permite organizar adecuadamente la información del caso.
              </p>

              <ul className={styles.list}>
                <li>Constancia o acta de no conciliación laboral.</li>

                <li>Citación a la audiencia.</li>

                <li>Contrato de trabajo.</li>

                <li>Otrosíes o modificaciones contractuales.</li>

                <li>Desprendibles de nómina.</li>

                <li>Liquidación final.</li>

                <li>Comprobantes de pago.</li>

                <li>Correos electrónicos relacionados con el conflicto.</li>

                <li>Comunicaciones entre trabajador y empleador.</li>

                <li>Certificaciones laborales.</li>

                <li>Reglamentos internos cuando sean relevantes.</li>

                <li>Cualquier documento presentado durante la conciliación.</li>
              </ul>

              <h2 className={styles.subTitle}>
                ¿Qué ocurre si el empleador no asistió a la conciliación?
              </h2>

              <p className={styles.text}>
                Cuando el empleador no comparece a la audiencia, el conciliador
                deja la correspondiente constancia de inasistencia. Este
                documento acredita que la diligencia fue programada y registra
                quién compareció y quién no asistió, información que puede
                resultar relevante para las actuaciones posteriores que
                correspondan conforme a la legislación aplicable.
              </p>

              <p className={styles.text}>
                La inasistencia no implica por sí sola que el conflicto quede
                resuelto. En cambio, permite dejar evidencia del desarrollo del
                procedimiento conciliatorio y de la ausencia de una de las
                partes.
              </p>

              <h2 className={styles.subTitle}>
                ¿Qué ocurre si quien no asistió fue el trabajador?
              </h2>

              <p className={styles.text}>
                Cuando el trabajador es quien no comparece a la audiencia
                programada, el conciliador también dejará constancia de esta
                circunstancia. Dependiendo del caso concreto, podrán existir
                consecuencias relacionadas con el desarrollo del procedimiento o
                con la necesidad de adelantar nuevas actuaciones, por lo que
                resulta recomendable recibir orientación antes de adoptar
                cualquier decisión.
              </p>

              <h2 className={styles.subTitle}>
                ¿Las partes pueden llegar a un acuerdo después de la audiencia?
              </h2>

              <p className={styles.text}>
                Sí. El hecho de que una audiencia termine sin acuerdo no impide
                que, posteriormente, trabajador y empleador decidan negociar
                nuevamente para intentar solucionar el conflicto. En muchas
                ocasiones las partes alcanzan acuerdos días o semanas después,
                una vez analizan con mayor detenimiento las consecuencias del
                conflicto o reciben asesoría jurídica.
              </p>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  Recomendaciones después de una no conciliación laboral
                </h3>

                <ul className={styles.highlightList}>
                  <li>
                    Conservar el acta original o una copia de la constancia.
                  </li>

                  <li>
                    Revisar que toda la información consignada sea correcta.
                  </li>

                  <li>
                    Guardar los documentos relacionados con la relación laboral.
                  </li>

                  <li>No alterar ni modificar el contenido del acta.</li>

                  <li>
                    Organizar cronológicamente todas las pruebas disponibles.
                  </li>

                  <li>
                    Solicitar orientación jurídica antes de iniciar actuaciones
                    posteriores.
                  </li>

                  <li>
                    Conservar correos, mensajes y demás soportes relacionados
                    con el conflicto.
                  </li>

                  <li>
                    Revisar cuidadosamente los términos y actuaciones que puedan
                    resultar aplicables en el caso concreto.
                  </li>
                </ul>
              </div>

              <p className={styles.text}>
                En conclusión, una no conciliación laboral no representa el
                final del conflicto. Por el contrario, constituye una etapa
                dentro del procedimiento que deja constancia del intento de
                solución mediante diálogo y permite a las partes continuar con
                las actuaciones que resulten procedentes conforme a la
                legislación colombiana.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.subTitle}>
                ¿Para qué sirve el acta de no conciliación laboral en Colombia?
              </h2>

              <p className={styles.text}>
                El <strong>acta de no conciliación laboral</strong> cumple una
                función mucho más importante que simplemente dejar constancia de
                que una audiencia terminó sin acuerdo. Este documento acredita
                que las partes acudieron a un mecanismo de solución de
                conflictos con el propósito de resolver sus diferencias mediante
                el diálogo y que, pese a ello, no fue posible alcanzar un
                acuerdo conciliatorio.
              </p>

              <p className={styles.text}>
                Tanto trabajadores como empleadores suelen preguntarse cuál es
                la utilidad práctica de esta constancia y qué efectos puede
                generar posteriormente. Aunque sus consecuencias dependerán de
                las circunstancias particulares de cada caso, el documento
                constituye un registro formal del resultado de la audiencia y
                puede adquirir relevancia dentro de actuaciones posteriores.
              </p>

              <div className={styles.note}>
                <strong>Dato importante:</strong> La finalidad del acta no
                consiste en dar la razón a una de las partes. Su propósito es
                dejar constancia objetiva de que la audiencia se realizó y del
                resultado obtenido durante el intento de conciliación.
              </div>

              <h2 className={styles.subTitle}>
                Principales funciones del acta de no conciliación laboral
              </h2>

              <p className={styles.text}>
                Dependiendo de la naturaleza del conflicto, este documento puede
                cumplir diferentes finalidades dentro del procedimiento laboral
                y servir como soporte para demostrar el desarrollo de la
                audiencia conciliatoria.
              </p>

              <ul className={styles.list}>
                <li>Dejar constancia del resultado de la audiencia.</li>

                <li>Acreditar que el intento conciliatorio se llevó a cabo.</li>

                <li>Registrar que no fue posible alcanzar un acuerdo.</li>

                <li>
                  Documentar la comparecencia o inasistencia de las partes.
                </li>

                <li>
                  Identificar el conflicto discutido durante la audiencia.
                </li>

                <li>
                  Servir como soporte documental dentro de actuaciones
                  posteriores cuando corresponda.
                </li>

                <li>
                  Facilitar la organización del expediente del conflicto
                  laboral.
                </li>

                <li>
                  Brindar seguridad jurídica respecto al resultado de la
                  diligencia.
                </li>
              </ul>

              <h2 className={styles.subTitle}>
                ¿El acta de no conciliación laboral tiene validez jurídica?
              </h2>

              <p className={styles.text}>
                Sí. La constancia expedida por el conciliador constituye un
                documento formal que acredita el desarrollo y el resultado de la
                audiencia de conciliación. Precisamente por ello es importante
                conservar el original o una copia expedida por el centro de
                conciliación, ya que puede ser necesaria para acreditar cómo
                finalizó el procedimiento conciliatorio.
              </p>

              <p className={styles.text}>
                Su contenido no determina quién tiene la razón dentro del
                conflicto laboral, pero sí permite demostrar que la audiencia
                fue realizada y cuál fue el resultado obtenido, información que
                puede resultar relevante en etapas posteriores del caso.
              </p>

              <h2 className={styles.subTitle}>
                ¿Sirve para presentar una demanda laboral?
              </h2>

              <p className={styles.text}>
                Una de las consultas más frecuentes en internet es si la
                constancia de no conciliación permite presentar una demanda
                laboral. La respuesta dependerá del tipo de conflicto y de los
                requisitos previstos por la legislación aplicable. En muchos
                asuntos este documento constituye un soporte importante para
                demostrar que previamente se intentó resolver la controversia
                mediante conciliación.
              </p>

              <p className={styles.text}>
                Por esta razón es recomendable conservar no solo el acta, sino
                también las citaciones, contratos, liquidaciones, comprobantes
                de pago, correos electrónicos y demás documentos relacionados
                con la relación laboral.
              </p>

              <h2 className={styles.subTitle}>
                ¿Qué valor probatorio puede tener el acta?
              </h2>

              <p className={styles.text}>
                La principal utilidad probatoria del documento consiste en
                demostrar que la audiencia efectivamente se realizó y cuál fue
                el resultado del intento de conciliación. Además, permite
                identificar la fecha de la diligencia, las personas que
                comparecieron, las reclamaciones discutidas y si existió o no un
                acuerdo entre las partes.
              </p>

              <p className={styles.text}>
                No obstante, el acta no reemplaza otras pruebas relacionadas con
                la relación laboral. Contratos, desprendibles de nómina,
                certificaciones, comunicaciones, incapacidades, comprobantes de
                pago y demás documentos continúan siendo relevantes para
                acreditar los hechos discutidos en cada caso.
              </p>

              <h2 className={styles.subTitle}>
                ¿Qué hacer si se pierde el acta de no conciliación?
              </h2>

              <p className={styles.text}>
                Si la constancia se extravía, resulta recomendable comunicarse
                con el centro de conciliación donde se adelantó la audiencia
                para conocer los procedimientos disponibles para solicitar una
                copia o certificación, siempre que ello sea procedente conforme
                a las normas aplicables.
              </p>

              <p className={styles.text}>
                Conservar versiones físicas y digitales del documento ayuda a
                evitar inconvenientes futuros, especialmente cuando
                posteriormente sea necesario acreditar el resultado de la
                audiencia.
              </p>

              <h2 className={styles.subTitle}>
                ¿Por qué es importante conservar este documento?
              </h2>

              <p className={styles.text}>
                Muchas personas únicamente prestan atención al resultado
                inmediato de la audiencia y dejan de lado la importancia de
                conservar la documentación relacionada con el procedimiento. Sin
                embargo, el acta puede convertirse en un soporte relevante para
                reconstruir cronológicamente el conflicto y demostrar que la
                conciliación efectivamente fue realizada.
              </p>

              <div className={styles.highlight}>
                <h3 className={styles.highlightTitle}>
                  Recomendaciones para conservar correctamente el acta
                </h3>

                <ul className={styles.highlightList}>
                  <li>Guardar el documento original en un lugar seguro.</li>

                  <li>Escanear el acta en formato PDF.</li>

                  <li>Conservar una copia digital en la nube.</li>

                  <li>
                    Archivar junto con contratos, desprendibles y liquidaciones.
                  </li>

                  <li>No realizar anotaciones sobre el documento original.</li>

                  <li>Solicitar una copia adicional cuando sea necesario.</li>

                  <li>
                    Mantener organizados todos los documentos relacionados con
                    el conflicto laboral.
                  </li>
                </ul>
              </div>

              <p className={styles.text}>
                En conclusión, el acta de no conciliación laboral constituye
                mucho más que un simple documento administrativo. Su principal
                utilidad radica en dejar constancia del desarrollo de la
                audiencia, brindar seguridad jurídica sobre el resultado del
                procedimiento y servir como soporte documental para las
                actuaciones que posteriormente puedan adelantarse conforme a la
                legislación colombiana.
              </p>
            </motion.div>

            <h2 className={styles.subTitle}>
              ¿Qué pasa después de una no conciliación laboral?
            </h2>

            <p className={styles.text}>
              Cuando no existe acuerdo, cualquiera de las partes puede acudir a
              la jurisdicción laboral colombiana para que un juez resuelva el
              conflicto.
            </p>

            <p className={styles.text}>
              Por esta razón, es importante conservar el acta original o la
              constancia expedida por el centro de conciliación, especialmente
              en procesos laborales en Bogotá y Colombia donde se requiera
              demostrar el agotamiento del intento conciliatorio.
            </p>

            <div className={styles.note}>
              Consejo práctico: conservar correos, comprobantes de citación,
              liquidaciones, contratos y soportes laborales puede fortalecer el
              proceso judicial posterior.
            </div>

            <h2 className={styles.subTitle}>
              Preguntas frecuentes sobre no conciliación laboral en Colombia
            </h2>

            <div className={styles.faq}>
              <div className={styles.faqItem}>
                <h4>¿La no conciliación laboral sirve para demandar?</h4>

                <p>
                  Sí. En muchos casos en Colombia, la constancia sirve como
                  soporte previo para iniciar una demanda laboral.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Qué pasa si el empleador no asiste?</h4>

                <p>
                  El conciliador deja constancia de inasistencia y el trabajador
                  puede continuar con las acciones judiciales correspondientes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿El acta tiene efectos legales?</h4>

                <p>
                  Sí. La constancia emitida por el centro de conciliación tiene
                  validez jurídica dentro del proceso laboral colombiano.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿La conciliación laboral es obligatoria en Colombia?</h4>

                <p>
                  Depende del caso concreto. En algunos conflictos puede ser un
                  requisito previo antes de acudir a un juez laboral.
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <h3 className={styles.ctaTitle}>
                ¿Necesitas orientación sobre conciliación laboral en Colombia?
              </h3>

              <p className={styles.ctaText}>
                Recibe acompañamiento sobre conciliaciones laborales,
                reclamaciones, liquidaciones y conflictos entre trabajador y
                empleador en Bogotá y toda Colombia.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=573232904786"
                target="_blank"
                className={styles.ctaButton}
              >
                Solicitar asesoría por WhatsApp
              </a>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  );
}
