"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ActaNoConciliacionLaboralContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Guía completa sobre conciliación laboral en Colombia • Actualizada
            2026
          </span>

          <h1 className={styles.title}>
            Acta de no conciliación laboral en Colombia: qué es, cuándo se
            expide, efectos legales y qué hacer después de una audiencia sin
            acuerdo
          </h1>

          <p className={styles.heroText}>
            El <strong>acta de no conciliación laboral en Colombia</strong> es
            un documento mediante el cual el conciliador deja constancia de que
            una audiencia de conciliación terminó sin que trabajador y empleador
            lograran alcanzar un acuerdo sobre el conflicto planteado. Aunque
            muchas personas consideran que una conciliación únicamente es útil
            cuando finaliza con un acuerdo, la realidad es que una audiencia sin
            conciliación también produce un documento de gran importancia dentro
            del procedimiento.
          </p>

          <p className={styles.heroText}>
            Este documento permite demostrar que las partes participaron en un
            intento formal de solucionar la controversia mediante el diálogo,
            registrando el resultado de la audiencia y dejando evidencia sobre
            el desarrollo del procedimiento. Dependiendo del caso concreto y de
            la normativa aplicable, esta constancia puede ser relevante dentro
            de actuaciones posteriores relacionadas con el conflicto laboral.
          </p>

          <p className={styles.heroText}>
            Las situaciones que con mayor frecuencia terminan en una no
            conciliación laboral están relacionadas con reclamaciones por
            salarios pendientes, prestaciones sociales, liquidaciones, despidos,
            indemnizaciones, horas extras, recargos, estabilidad laboral,
            terminación del contrato y otros desacuerdos surgidos entre
            trabajador y empleador.
          </p>

          <p className={styles.heroText}>
            Muchas personas llegan a esta guía después de buscar en Google
            términos como <strong>"acta de no conciliación laboral"</strong>,{" "}
            <strong>
              "qué pasa si no hay acuerdo en una conciliación laboral"
            </strong>
            , <strong>"constancia de no conciliación"</strong>,{" "}
            <strong>"empleador no asistió a la conciliación"</strong>,{" "}
            <strong>"qué hacer después de una conciliación sin acuerdo"</strong>{" "}
            o <strong>"para qué sirve un acta de no conciliación"</strong>. En
            esta guía encontrará respuestas claras a todas estas preguntas.
          </p>

          <p className={styles.heroText}>
            Además de explicar qué es este documento, conocerá cuándo se expide,
            cuáles son sus efectos jurídicos, qué información contiene, qué
            sucede cuando una de las partes no asiste a la audiencia, qué
            alternativas pueden existir después de una conciliación fallida y
            cuáles son las recomendaciones más importantes para trabajadores y
            empleadores antes, durante y después del procedimiento
            conciliatorio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Información importante:</strong> El hecho de que una
              audiencia termine sin acuerdo no significa que el trabajador haya
              perdido sus derechos ni que el empleador tenga automáticamente la
              razón. El acta de no conciliación simplemente deja constancia de
              que el conflicto no pudo resolverse mediante un acuerdo voluntario
              durante esa diligencia.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acta de no conciliación laboral y cuándo se expide en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            El <strong>acta de no conciliación laboral</strong> es un documento
            oficial elaborado por el conciliador cuando una audiencia de
            conciliación finaliza sin que trabajador y empleador logren llegar a
            un acuerdo sobre las diferencias que originaron el conflicto
            laboral. Su principal finalidad es dejar constancia escrita del
            resultado de la diligencia, identificando a las partes que
            participaron, el conflicto tratado y la imposibilidad de alcanzar
            una solución mediante el mecanismo de conciliación.
          </p>

          <p className={styles.paragraph}>
            En Colombia, la conciliación laboral constituye uno de los
            principales mecanismos alternativos para resolver controversias
            relacionadas con la relación de trabajo sin necesidad de acudir
            inmediatamente a un proceso judicial. Sin embargo, no todas las
            audiencias terminan con un acuerdo. Cuando las posiciones de
            trabajador y empleador son incompatibles o ninguna de las partes
            acepta las propuestas formuladas durante la audiencia, el
            conciliador expide la correspondiente constancia de no conciliación.
          </p>

          <p className={styles.paragraph}>
            Este documento no determina cuál de las partes tiene la razón ni
            resuelve definitivamente el conflicto. Su función consiste en dejar
            evidencia de que el procedimiento conciliatorio se llevó a cabo y de
            que, pese al intento de diálogo, no fue posible construir un acuerdo
            voluntario que pusiera fin a la controversia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Importante:</strong> Una audiencia sin acuerdo no
              significa que el trabajador pierda automáticamente sus derechos ni
              que el empleador quede exonerado de sus obligaciones. El acta
              únicamente refleja el resultado de la audiencia de conciliación.
            </p>
          </div>

          <h2 className={styles.subtitle}>
            ¿En qué situaciones se expide un acta de no conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas personas creen que este documento únicamente se expide
            cuando las partes discuten durante la audiencia, en realidad existen
            diferentes situaciones que pueden conducir a una no conciliación. Lo
            importante es que, al finalizar la diligencia, no exista un acuerdo
            conciliatorio que permita solucionar el conflicto planteado.
          </p>

          <ul className={styles.list}>
            <li>
              El trabajador y el empleador mantienen posiciones completamente
              opuestas.
            </li>

            <li>No existe voluntad de negociación entre las partes.</li>

            <li>Las propuestas económicas son rechazadas.</li>

            <li>
              Existe desacuerdo respecto a salarios o prestaciones sociales.
            </li>

            <li>No se logra un acuerdo sobre la liquidación laboral.</li>

            <li>Hay diferencias frente a una indemnización.</li>

            <li>
              Las partes consideran insuficientes las fórmulas de arreglo
              propuestas durante la audiencia.
            </li>

            <li>
              La diligencia concluye sin alcanzar un acuerdo conciliatorio.
            </li>
          </ul>

          <h2 className={styles.subtitle}>
            Conflictos laborales que con mayor frecuencia terminan en una no
            conciliación
          </h2>

          <p className={styles.paragraph}>
            La experiencia demuestra que existen determinadas controversias
            laborales donde resulta más difícil alcanzar un acuerdo voluntario
            debido a las diferencias económicas o jurídicas existentes entre
            trabajador y empleador.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Despido sin justa causa</h3>

              <p>
                Las partes suelen discrepar sobre la existencia del despido y el
                valor de la indemnización correspondiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>

              <p>
                Frecuentemente existen diferencias respecto a salarios,
                vacaciones, cesantías, intereses y primas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Horas extras</h3>

              <p>
                Es común que trabajador y empleador discrepen sobre la cantidad
                de horas laboradas y el valor de los recargos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Las reclamaciones relacionadas con prestaciones sociales
                constituyen una de las causas más frecuentes de conciliaciones
                sin acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                El desacuerdo sobre la procedencia o cuantía de una
                indemnización suele impedir la celebración de un acuerdo
                conciliatorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>

              <p>
                Las diferencias sobre las causas y consecuencias de la
                terminación del vínculo laboral también generan numerosas
                audiencias sin conciliación.
              </p>
            </div>
          </div>

          <h2 className={styles.subtitle}>
            ¿Quién elabora y firma el acta de no conciliación?
          </h2>

          <p className={styles.paragraph}>
            El documento es elaborado por el conciliador encargado de dirigir la
            audiencia. En él se deja constancia del desarrollo de la diligencia,
            la identificación de las partes, el conflicto tratado y el resultado
            obtenido. Cuando corresponde, el acta también incorpora las firmas
            de quienes participaron en la audiencia.
          </p>

          <p className={styles.paragraph}>
            Es recomendable revisar cuidadosamente la información consignada
            antes de retirarse del centro de conciliación para verificar que los
            nombres, documentos de identidad, fechas y demás datos sean
            correctos.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una copia del acta puede resultar importante para acreditar el
              resultado de la audiencia y conservar un registro organizado del
              procedimiento conciliatorio, especialmente cuando posteriormente
              sea necesario adelantar otras actuaciones relacionadas con el
              conflicto laboral.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencias entre un acta de conciliación laboral y un acta de no
            conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Una de las preguntas más frecuentes entre trabajadores y empleadores
            es si un <strong>acta de conciliación laboral</strong> y un{" "}
            <strong>acta de no conciliación laboral</strong> son el mismo
            documento. La respuesta es no. Aunque ambos se expiden dentro de un
            procedimiento de conciliación, tienen finalidades completamente
            diferentes y reflejan resultados distintos de la audiencia.
          </p>

          <p className={styles.paragraph}>
            Mientras el acta de conciliación demuestra que las partes lograron
            resolver voluntariamente el conflicto mediante un acuerdo, el acta
            de no conciliación deja constancia de que ese acuerdo no fue posible
            pese al intento realizado durante la audiencia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Ambos documentos hacen parte del procedimiento conciliatorio, pero
              sus efectos prácticos son diferentes porque reflejan resultados
              distintos de la audiencia.
            </p>
          </div>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Acta de conciliación laboral</h3>

              <p>
                Se expide cuando trabajador y empleador alcanzan un acuerdo
                total o parcial para solucionar el conflicto planteado durante
                la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acta de no conciliación laboral</h3>

              <p>
                Se expide cuando, finalizada la audiencia, las partes no
                consiguen llegar a un acuerdo sobre las reclamaciones
                discutidas.
              </p>
            </div>
          </div>

          <h2 className={styles.subtitle}>
            Principales diferencias entre ambos documentos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Resultado de la audiencia</h3>

              <p>
                El acta de conciliación refleja un acuerdo entre las partes,
                mientras que la no conciliación evidencia que dicho acuerdo no
                pudo alcanzarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contenido</h3>

              <p>
                El acta de conciliación incorpora los compromisos asumidos por
                las partes; la de no conciliación registra el intento fallido de
                solucionar el conflicto mediante el diálogo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Finalidad</h3>

              <p>
                Ambos documentos brindan seguridad jurídica sobre el desarrollo
                de la audiencia, aunque cada uno refleja un resultado diferente
                del proceso de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo alcanzado</h3>

              <p>
                En uno existe una solución aceptada por las partes; en el otro,
                las diferencias continúan sin resolverse durante la audiencia.
              </p>
            </div>
          </div>

          <h2 className={styles.subtitle}>
            ¿Cuál documento recibe el trabajador al finalizar la audiencia?
          </h2>

          <p className={styles.paragraph}>
            El documento que se entrega dependerá exclusivamente del resultado
            obtenido durante la diligencia. Si trabajador y empleador llegan a
            un acuerdo, el conciliador elaborará el acta correspondiente con los
            compromisos asumidos. En cambio, cuando las negociaciones fracasan,
            se expedirá el acta de no conciliación o la constancia que
            corresponda según lo ocurrido durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            En cualquiera de los casos es recomendable conservar una copia del
            documento, revisar que la información consignada sea correcta y
            mantenerlo junto con el resto de soportes relacionados con la
            relación laboral.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Conocer la diferencia entre ambos documentos ayuda a comprender el
              resultado real de la audiencia y evita confusiones sobre el
              alcance de la conciliación laboral en Colombia.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué información debe contener un acta de no conciliación laboral en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Aunque el contenido del documento puede variar dependiendo del
            centro de conciliación que adelante la audiencia, un{" "}
            <strong>acta de no conciliación laboral</strong> normalmente
            incorpora la información necesaria para dejar constancia del
            desarrollo del procedimiento, identificar a las partes y registrar
            el resultado de la diligencia.
          </p>

          <p className={styles.paragraph}>
            Su finalidad no consiste únicamente en indicar que no hubo acuerdo.
            También busca ofrecer claridad sobre quiénes participaron en la
            audiencia, cuál era el conflicto objeto de discusión y qué ocurrió
            durante el intento de conciliación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Importante:</strong> Cada centro de conciliación puede
              utilizar formatos diferentes, pero todos deben reflejar de manera
              clara el resultado de la audiencia y la información básica del
              procedimiento.
            </p>
          </div>

          <h2 className={styles.subtitle}>
            Datos que normalmente contiene un acta de no conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Centro de conciliación</h3>

              <p>
                Identificación de la entidad donde se desarrolló la audiencia y
                lugar donde se adelantó el procedimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fecha y hora</h3>

              <p>
                Registro del día, hora de inicio y finalización de la audiencia
                de conciliación laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliador</h3>

              <p>
                Nombre e identificación del conciliador encargado de dirigir la
                audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información de las partes</h3>

              <p>
                Datos del trabajador, del empleador y de los representantes que
                hayan intervenido durante la diligencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Descripción del conflicto</h3>

              <p>
                Breve resumen de las reclamaciones laborales que dieron origen
                al procedimiento conciliatorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Resultado de la audiencia</h3>

              <p>
                Constancia de que no fue posible alcanzar un acuerdo entre las
                partes al finalizar la conciliación.
              </p>
            </div>
          </div>

          <h2 className={styles.subtitle}>
            Modelo orientativo de un acta de no conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            A continuación se presenta un ejemplo con fines exclusivamente
            pedagógicos. No corresponde a un formato oficial y puede variar
            dependiendo de la entidad que adelante la conciliación.
          </p>

          <pre className={styles.pre}>
            {`ACTA DE NO CONCILIACIÓN LABORAL

ACTA No. ____________

CENTRO DE CONCILIACIÓN

Ciudad: ______________________

Fecha: _______________________

Hora de inicio: _______________

Hora de finalización: _________

CONCILIADOR

Nombre:

_____________________________________

PARTES

TRABAJADOR

Nombre:

Documento:

Dirección:

Correo electrónico:

EMPLEADOR

Empresa:

Representante:

NIT:

OBJETO DE LA AUDIENCIA

Las partes comparecen para intentar resolver un conflicto
relacionado con la relación laboral.

DESARROLLO

El conciliador escuchó a las partes, promovió el diálogo y
propuso alternativas para facilitar un acuerdo.

RESULTADO

Finalizada la audiencia, no fue posible alcanzar un acuerdo
conciliatorio.

En consecuencia se deja constancia de NO CONCILIACIÓN.

OBSERVACIONES

_____________________________________

_____________________________________

FIRMAS

Conciliador

_____________________

Trabajador

_____________________

Empleador

_____________________`}
          </pre>

          <h2 className={styles.subtitle}>
            ¿Es válido utilizar cualquier modelo encontrado en internet?
          </h2>

          <p className={styles.paragraph}>
            No. Los formatos publicados en internet tienen únicamente un
            propósito informativo. Cada centro de conciliación puede emplear sus
            propios modelos, respetando los requisitos legales aplicables y las
            características del caso concreto.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, si necesita una constancia oficial, esta debe ser
            expedida por el conciliador o por el centro de conciliación donde se
            realizó la audiencia. Un formato descargado de internet no reemplaza
            el documento emitido dentro del procedimiento conciliatorio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Lo más importante no es que el formato tenga un diseño específico,
              sino que permita identificar claramente a las partes, el conflicto
              discutido, el desarrollo de la audiencia y el resultado final de
              la conciliación.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer después de un acta de no conciliación laboral en
            Colombia? Guía paso a paso
          </h2>

          <p className={styles.paragraph}>
            Una de las preguntas más frecuentes entre trabajadores y empleadores
            es qué ocurre cuando la audiencia de conciliación termina sin
            acuerdo. Aunque la audiencia haya finalizado sin una solución
            consensuada, el conflicto laboral no desaparece automáticamente. Por
            el contrario, las partes deberán evaluar cuáles son las alternativas
            disponibles de acuerdo con las circunstancias particulares del caso
            y la legislación colombiana.
          </p>

          <p className={styles.paragraph}>
            El acta de no conciliación deja constancia de que el mecanismo
            conciliatorio fue utilizado sin que fuera posible alcanzar un
            acuerdo voluntario. A partir de ese momento, resulta recomendable
            conservar toda la documentación relacionada con la audiencia,
            organizar las pruebas disponibles y analizar cuidadosamente los
            siguientes pasos antes de adoptar cualquier decisión.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Importante:</strong> Una audiencia sin acuerdo no
              significa que el conflicto haya terminado. Dependiendo del caso
              concreto, las partes podrán acudir a otros mecanismos previstos
              por la ley para buscar una solución.
            </p>
          </div>

          <h2 className={styles.subtitle}>
            Paso 1. Verificar la información contenida en el acta
          </h2>

          <p className={styles.paragraph}>
            Antes de retirarse del centro de conciliación es aconsejable revisar
            que el documento contenga correctamente los nombres de las partes,
            la fecha de la audiencia, la identificación del conciliador y el
            resultado registrado. Detectar oportunamente cualquier
            inconsistencia facilita solicitar las aclaraciones que correspondan.
          </p>

          <h2 className={styles.subtitle}>
            Paso 2. Conservar todos los documentos relacionados con el conflicto
            laboral
          </h2>

          <p className={styles.paragraph}>
            Además del acta de no conciliación, conviene organizar en un mismo
            archivo todos los documentos relacionados con la relación laboral.
            Una adecuada conservación de la información facilita reconstruir los
            hechos y consultar posteriormente los antecedentes del caso.
          </p>

          <ul className={styles.list}>
            <li>Acta o constancia de no conciliación.</li>

            <li>Citaciones a la audiencia.</li>

            <li>Contrato de trabajo.</li>

            <li>Otrosíes o modificaciones contractuales.</li>

            <li>Desprendibles de nómina.</li>

            <li>Liquidaciones.</li>

            <li>Comprobantes de pago.</li>

            <li>Correos electrónicos.</li>

            <li>Mensajes relacionados con el conflicto.</li>

            <li>Certificaciones laborales.</li>

            <li>Comunicaciones del empleador.</li>

            <li>Cualquier otro soporte presentado durante la audiencia.</li>
          </ul>

          <h2 className={styles.subtitle}>
            Paso 3. Analizar las alternativas disponibles
          </h2>

          <p className={styles.paragraph}>
            El hecho de que una audiencia termine sin acuerdo no impide que las
            partes continúen dialogando posteriormente. En algunos casos,
            trabajador y empleador deciden retomar las negociaciones días o
            semanas después, una vez analizan con mayor detenimiento sus
            posiciones o reciben orientación jurídica.
          </p>

          <p className={styles.paragraph}>
            Cuando no sea posible llegar a un entendimiento, cada parte podrá
            evaluar las actuaciones que considere procedentes para la defensa de
            sus derechos e intereses, siempre conforme a la normativa aplicable.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué ocurre si el empleador no asistió a la audiencia?
          </h2>

          <p className={styles.paragraph}>
            Cuando el empleador no comparece a la audiencia de conciliación, el
            conciliador deja constancia de esta circunstancia en el documento
            correspondiente. La inasistencia queda registrada oficialmente y
            forma parte del expediente del procedimiento conciliatorio.
          </p>

          <p className={styles.paragraph}>
            Esta constancia permite acreditar el desarrollo de la audiencia y
            registrar quién compareció y quién no asistió, sin que ello
            implique, por sí solo, la resolución del conflicto laboral.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué ocurre si quien no asistió fue el trabajador?
          </h2>

          <p className={styles.paragraph}>
            Si es el trabajador quien no comparece a la audiencia programada, el
            conciliador también dejará constancia de esta situación. Dependiendo
            de las circunstancias particulares del caso, podrá ser necesario
            evaluar las alternativas disponibles y determinar si procede
            realizar nuevas actuaciones conforme a la legislación vigente.
          </p>

          <h2 className={styles.subtitle}>
            ¿Es posible intentar una nueva conciliación?
          </h2>

          <p className={styles.paragraph}>
            En determinadas situaciones, las partes pueden manifestar nuevamente
            su voluntad de negociar para intentar solucionar el conflicto. El
            hecho de que una audiencia haya finalizado sin acuerdo no impide,
            por sí mismo, que en el futuro trabajador y empleador decidan volver
            a dialogar y explorar nuevas fórmulas de arreglo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conserve el acta</h3>

              <p>
                Mantenga el documento original en buen estado y procure contar
                con una copia digital para futuras consultas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Organice las pruebas</h3>

              <p>
                Reúna contratos, comprobantes de pago, comunicaciones y demás
                soportes relacionados con la relación laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Revise la información</h3>

              <p>
                Verifique que los datos consignados en el acta correspondan
                correctamente a la audiencia realizada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Busque orientación</h3>

              <p>
                Antes de adoptar decisiones importantes resulta recomendable
                recibir asesoría jurídica de acuerdo con las particularidades
                del caso.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              En conclusión, el acta de no conciliación constituye un documento
              que deja constancia del resultado de la audiencia y marca el
              cierre de la etapa conciliatoria. A partir de ese momento, las
              partes podrán evaluar las diferentes alternativas disponibles para
              continuar con la gestión del conflicto laboral conforme a la
              legislación colombiana.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué efectos legales tiene un acta de no conciliación laboral en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            El <strong>acta de no conciliación laboral</strong> tiene como
            finalidad dejar constancia oficial de que la audiencia de
            conciliación se llevó a cabo y que las partes no lograron alcanzar
            un acuerdo voluntario para solucionar el conflicto. Aunque este
            documento no resuelve la controversia ni define cuál de las partes
            tiene la razón, sí cumple una importante función dentro del
            procedimiento conciliatorio al registrar de manera formal el
            resultado de la diligencia.
          </p>

          <p className={styles.paragraph}>
            En la práctica, tanto trabajadores como empleadores utilizan esta
            constancia para acreditar que existió un intento previo de diálogo y
            que, pese a las negociaciones realizadas durante la audiencia, no
            fue posible construir una solución aceptada por ambas partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Importante:</strong> El acta de no conciliación no declara
              vencedor a ninguna de las partes. Su función consiste en
              documentar el resultado de la audiencia y dejar evidencia del
              procedimiento conciliatorio desarrollado.
            </p>
          </div>

          <h2 className={styles.subtitle}>
            Principales efectos que produce este documento
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto laboral tiene características particulares, la
            constancia de no conciliación suele producir diferentes efectos
            prácticos relacionados con la organización del expediente y el
            desarrollo posterior del caso.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Registra el resultado de la audiencia</h3>

              <p>
                Permite demostrar oficialmente que la conciliación fue realizada
                y que las partes no lograron construir un acuerdo voluntario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Da trazabilidad al conflicto</h3>

              <p>
                Facilita reconstruir cronológicamente las actuaciones
                adelantadas antes de acudir a otros mecanismos para resolver la
                controversia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Documenta la participación</h3>

              <p>
                Registra quiénes asistieron a la audiencia, quién dirigió la
                diligencia y cuál fue el resultado obtenido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conserva evidencia documental</h3>

              <p>
                Hace parte del conjunto de documentos relacionados con el
                conflicto laboral y permite mantener organizado el historial del
                procedimiento.
              </p>
            </div>
          </div>

          <h2 className={styles.subtitle}>
            ¿El acta de no conciliación significa que el trabajador perdió el
            caso?
          </h2>

          <p className={styles.paragraph}>
            No. Una de las creencias más comunes consiste en pensar que una
            audiencia sin acuerdo implica automáticamente que alguna de las
            partes perdió el conflicto. Sin embargo, la función del conciliador
            no es decidir quién tiene la razón, sino facilitar el diálogo para
            intentar alcanzar una solución voluntaria.
          </p>

          <p className={styles.paragraph}>
            Cuando ese acuerdo no se consigue, simplemente se deja constancia
            del resultado obtenido. La controversia continúa existiendo y podrá
            seguir el curso que corresponda conforme a las normas aplicables y a
            las decisiones que adopten las partes.
          </p>

          <h2 className={styles.subtitle}>
            ¿Qué valor tiene el acta dentro del conflicto laboral?
          </h2>

          <p className={styles.paragraph}>
            El principal valor del documento consiste en acreditar que la
            audiencia se realizó y que el procedimiento conciliatorio concluyó
            sin acuerdo. Además, permite identificar aspectos relevantes como la
            fecha de la diligencia, el conciliador que intervino, las partes
            asistentes y el conflicto discutido.
          </p>

          <p className={styles.paragraph}>
            Por este motivo resulta aconsejable conservar el documento junto con
            el contrato de trabajo, desprendibles de nómina, liquidaciones,
            correos electrónicos, comunicaciones y cualquier otro soporte
            relacionado con la controversia laboral.
          </p>

          <h2 className={styles.subtitle}>
            Recomendaciones para conservar correctamente el acta
          </h2>

          <ul className={styles.list}>
            <li>Guardar siempre el documento original.</li>
            <li>Escanear una copia en formato PDF.</li>
            <li>Conservar una copia digital en la nube.</li>
            <li>
              Archivar el acta junto con el resto de documentos laborales.
            </li>
            <li>Revisar que toda la información consignada sea correcta.</li>
            <li>No realizar modificaciones sobre el documento original.</li>
            <li>Solicitar una copia adicional cuando sea necesario.</li>
            <li>Mantener organizado el expediente del conflicto laboral.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En términos generales, el acta de no conciliación constituye una
              prueba documental del desarrollo de la audiencia y del resultado
              obtenido durante el procedimiento conciliatorio. Su adecuada
              conservación facilita la organización del caso y permite acreditar
              posteriormente cómo concluyó la diligencia.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de intentar la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Favorece acuerdos rápidos.</li>
            <li>Reduce costos asociados al conflicto.</li>
            <li>Promueve el diálogo entre las partes.</li>
            <li>Permite soluciones flexibles.</li>
            <li>Evita procesos prolongados cuando existe acuerdo.</li>
            <li>Genera evidencia documental del intento conciliatorio.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La no conciliación significa perder el caso?</h3>
              <p>
                No. Simplemente indica que no fue posible alcanzar un acuerdo
                durante la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El documento tiene validez legal?</h3>
              <p>Sí. Es una constancia formal emitida por el conciliador.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede intentarse una nueva conciliación?</h3>
              <p>
                Dependiendo del caso y de la voluntad de las partes, podría
                evaluarse una nueva negociación.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral pendiente?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos sobre audiencias
            laborales, acuerdos entre empleadores y trabajadores y mecanismos
            alternativos para resolver conflictos en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
