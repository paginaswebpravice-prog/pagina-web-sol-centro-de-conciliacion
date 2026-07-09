"use client";

import styles from "../Article.module.css";
import componentStyles from "./AcuerdoLaboralCentroConciliacionContent.module.css";
import { motion } from "framer-motion";

export default function AcuerdoLaboralCentroConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Acuerdo laboral ante centro de conciliación
          </h1>

          <p className={styles.heroText}>
            Los acuerdos laborales ante un centro de conciliación permiten que
            trabajadores y empleadores solucionen conflictos de manera rápida,
            voluntaria y con plena validez jurídica, evitando procesos
            judiciales prolongados.
          </p>

          <p className={styles.heroText}>
            Mediante este mecanismo es posible formalizar compromisos
            relacionados con salarios, liquidaciones, prestaciones sociales,
            indemnizaciones y otros derechos derivados de la relación laboral.
          </p>
        </div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo laboral ante un centro de conciliación y por qué
            cada vez más empresas y trabajadores lo utilizan?
          </h2>

          <p className={styles.paragraph}>
            Un <strong>acuerdo laboral ante un centro de conciliación</strong>{" "}
            es un mecanismo mediante el cual el trabajador y el empleador
            resuelven de forma voluntaria un conflicto relacionado con la
            relación laboral, dejando por escrito los compromisos adquiridos en
            un <strong>acta de conciliación laboral</strong>. Este procedimiento
            busca que ambas partes encuentren una solución negociada sin
            necesidad de iniciar un proceso judicial largo y costoso.
          </p>

          <p className={styles.paragraph}>
            En Colombia, la conciliación laboral se ha convertido en una de las
            alternativas más utilizadas para solucionar diferencias relacionadas
            con salarios pendientes, liquidaciones, prestaciones sociales,
            indemnizaciones, vacaciones, horas extras, bonificaciones y otras
            obligaciones derivadas del contrato de trabajo.
          </p>

          <p className={styles.paragraph}>
            A diferencia de una negociación informal, el acuerdo alcanzado
            dentro de un centro de conciliación queda documentado mediante un
            acta que ofrece mayor seguridad jurídica para ambas partes y permite
            establecer con claridad las obligaciones, los plazos y la forma en
            que deberán cumplirse.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Muchas personas buscan en Google términos como{" "}
              <strong>"acuerdo laboral entre trabajador y empleador"</strong>,{" "}
              <strong>"modelo de acuerdo laboral"</strong>,{" "}
              <strong>"conciliación laboral en Colombia"</strong> o
              <strong>"acta de conciliación laboral"</strong> porque desean
              resolver un conflicto de manera rápida, evitando un litigio cuando
              existe disposición para negociar.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene realizar un acuerdo laboral mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral resulta especialmente útil cuando el
            trabajador y el empleador desean solucionar un conflicto de forma
            rápida, voluntaria y con seguridad jurídica. En lugar de iniciar
            inmediatamente un proceso judicial, ambas partes tienen la
            oportunidad de dialogar con la intervención de un conciliador
            imparcial que facilita la construcción de un acuerdo equilibrado.
          </p>

          <p className={styles.paragraph}>
            En muchos casos, acudir a un centro de conciliación permite
            preservar la relación entre las partes, reducir costos, disminuir
            tiempos de espera y evitar la incertidumbre propia de un proceso
            judicial. Además, un acuerdo bien estructurado brinda claridad sobre
            las obligaciones asumidas y la forma en que deberán cumplirse.
          </p>

          <p className={styles.paragraph}>
            Aunque cada conflicto laboral tiene características particulares,
            existen situaciones en las que la conciliación suele convertirse en
            una alternativa altamente recomendable antes de acudir a otras vías
            de solución.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Pago de salarios pendientes</h3>

              <p>
                Cuando existen diferencias sobre salarios, comisiones, horas
                extras, recargos o cualquier otra remuneración derivada del
                contrato de trabajo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>

              <p>
                Si existen desacuerdos respecto al valor de la liquidación,
                vacaciones, cesantías, intereses, primas u otros conceptos
                económicos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>

              <p>
                Cuando trabajador y empleador desean finalizar la relación
                laboral de forma negociada y dejando claramente definidos los
                compromisos de cada parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                En conflictos relacionados con despidos, compensaciones
                económicas o reclamaciones derivadas de la terminación del
                vínculo laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Cuando existen diferencias sobre primas, cesantías, intereses,
                vacaciones, dotaciones u otras obligaciones laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reconocimiento de obligaciones</h3>

              <p>
                Cuando alguna de las partes reconoce la existencia de una
                obligación y desea establecer un plan de cumplimiento claro y
                verificable.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no busca determinar quién tiene la razón, sino
              facilitar que trabajador y empleador construyan un acuerdo
              mutuamente aceptable que permita poner fin al conflicto con mayor
              rapidez y seguridad jurídica.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué conflictos laborales pueden resolverse mediante un acuerdo ante
            un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales ventajas de la conciliación laboral es que
            permite solucionar una gran variedad de conflictos entre
            trabajadores y empleadores sin necesidad de acudir inmediatamente a
            un proceso judicial. Siempre que el asunto sea conciliable y exista
            disposición de las partes para negociar, es posible construir un
            acuerdo que satisfaga los intereses de ambos.
          </p>

          <p className={styles.paragraph}>
            En Colombia, miles de conflictos laborales se resuelven cada año
            mediante acuerdos conciliatorios relacionados con salarios,
            prestaciones sociales, liquidaciones, indemnizaciones y otras
            obligaciones derivadas del contrato de trabajo. Estos acuerdos
            permiten reducir tiempos, costos y el desgaste propio de un litigio.
          </p>

          <p className={styles.paragraph}>
            Aunque cada caso debe analizarse de forma individual, estos son
            algunos de los asuntos que con mayor frecuencia llegan a un centro
            de conciliación.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>

              <p>
                Cuando existen pagos atrasados, diferencias salariales,
                comisiones, bonificaciones, horas extras, recargos nocturnos,
                dominicales o festivos que aún no han sido reconocidos por el
                empleador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>

              <p>
                Es frecuente conciliar diferencias relacionadas con la
                liquidación final del contrato, incluyendo cesantías, intereses
                sobre cesantías, primas de servicios, vacaciones y demás
                conceptos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnización por terminación del contrato</h3>

              <p>
                Cuando existe controversia sobre el pago de una indemnización
                por despido, las partes pueden negociar una suma determinada y
                establecer las condiciones para su pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                También pueden resolverse diferencias relacionadas con primas,
                cesantías, vacaciones, auxilios y demás prestaciones reconocidas
                por la legislación laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación por mutuo acuerdo</h3>

              <p>
                Trabajador y empleador pueden acordar las condiciones para
                finalizar la relación laboral dejando por escrito todos los
                compromisos adquiridos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reconocimiento de obligaciones</h3>

              <p>
                Si el empleador reconoce una deuda laboral, la conciliación
                permite establecer fechas de pago, cuotas, garantías y demás
                condiciones para cumplir con la obligación.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            En muchos casos, la conciliación también sirve para aclarar
            diferencias sobre la interpretación del contrato de trabajo, el pago
            de beneficios extralegales, incentivos, bonificaciones o cualquier
            otra obligación cuya existencia o cuantía sea discutida por las
            partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Mientras más claro quede el acuerdo, menores serán las
              posibilidades de que surjan nuevos conflictos en el futuro. Por
              ello es recomendable que cada obligación incluya valores exactos,
              fechas de cumplimiento, mecanismos de pago y consecuencias en caso
              de incumplimiento.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Cómo redactar correctamente un acuerdo laboral ante un centro de
            conciliación? Guía paso a paso
          </h2>

          <p className={styles.paragraph}>
            Un acuerdo laboral bien redactado evita interpretaciones ambiguas y
            reduce significativamente el riesgo de nuevos conflictos entre
            trabajador y empleador. Por esta razón, durante una audiencia de
            conciliación no basta con expresar la voluntad de llegar a un
            acuerdo; también es indispensable que cada compromiso quede
            consignado de manera clara, precisa y fácilmente verificable.
          </p>

          <p className={styles.paragraph}>
            El conciliador orienta a las partes para que las obligaciones
            asumidas puedan cumplirse sin generar dudas posteriores. Mientras
            más detallado sea el acuerdo, mayor será la seguridad jurídica para
            ambas partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Identificación de las partes</h3>

              <p>
                Deben incluirse los nombres completos, documentos de identidad,
                dirección, teléfonos y demás datos necesarios para identificar
                tanto al trabajador como al empleador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Descripción del conflicto</h3>

              <p>
                Debe explicarse de forma breve cuál fue la diferencia laboral
                que dio origen a la conciliación y cuáles eran las pretensiones
                de cada parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Obligaciones claras</h3>

              <p>
                Cada obligación debe indicar exactamente qué debe hacerse, quién
                debe cumplirla y bajo qué condiciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Valores exactos</h3>

              <p>
                Si el acuerdo incluye pagos, deben establecerse las sumas
                exactas, número de cuotas, fechas de vencimiento y forma de
                pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Fechas de cumplimiento</h3>

              <p>
                Todas las obligaciones deben tener plazos determinados para
                evitar interpretaciones posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Forma de acreditar el cumplimiento</h3>

              <p>
                Es recomendable establecer cómo se demostrará el cumplimiento
                del acuerdo: comprobantes bancarios, actas de entrega, correos
                electrónicos, paz y salvo u otros documentos.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo laboral bien elaborado no solamente protege al
              trabajador. También brinda seguridad al empleador, ya que deja
              evidencia escrita de las obligaciones asumidas por ambas partes y
              de la forma en que deberán cumplirse.
            </p>
          </div>

          <h3 className={componentStyles.smallSubtitle}>
            Información que normalmente contiene un acuerdo laboral
          </h3>

          <ul className={styles.list}>
            <li>Nombre del centro de conciliación.</li>
            <li>Fecha y lugar de la audiencia.</li>
            <li>Nombre del conciliador.</li>
            <li>Datos completos del trabajador.</li>
            <li>Datos completos del empleador.</li>
            <li>Descripción del conflicto.</li>
            <li>Obligaciones de cada parte.</li>
            <li>Valor total del acuerdo.</li>
            <li>Forma y fechas de pago.</li>
            <li>Condiciones especiales.</li>
            <li>Forma de verificar el cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </ul>

          <p className={styles.paragraph}>
            Cuando el acuerdo involucra el pago de dinero, también es
            conveniente indicar la entidad financiera, el número de cuenta, los
            soportes que acreditarán cada pago y las consecuencias en caso de
            retraso o incumplimiento. Si el acuerdo consiste en la entrega de
            documentos, certificados, equipos o cualquier otro bien, debe
            especificarse el lugar, la fecha y la persona encargada de
            recibirlos.
          </p>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Modelo de acuerdo laboral ante un centro de conciliación (Ejemplo
            completo)
          </h2>

          <p className={styles.paragraph}>
            Uno de los temas más consultados por trabajadores, empleadores y
            empresas es cómo luce un{" "}
            <strong>
              acuerdo laboral realizado ante un centro de conciliación
            </strong>
            . Aunque cada caso debe redactarse de acuerdo con las circunstancias
            particulares del conflicto, el siguiente ejemplo permite comprender
            la estructura general que suele tener un acuerdo conciliatorio.
          </p>

          <p className={styles.paragraph}>
            El objetivo del modelo no es reemplazar la asesoría jurídica ni el
            trabajo del conciliador, sino mostrar la forma en que normalmente se
            organizan las obligaciones para brindar claridad, seguridad jurídica
            y facilitar el cumplimiento de lo pactado.
          </p>

          <motion.pre className={componentStyles.pre}>
            {`ACTA DE CONCILIACIÓN LABORAL

CENTRO DE CONCILIACIÓN: _______________________

Ciudad: _______________________

Fecha: _______________________

Conciliador: _______________________

TRABAJADOR

Nombre:
Documento:
Dirección:
Teléfono:
Correo electrónico:

EMPLEADOR

Empresa:
Representante legal:
NIT:
Dirección:
Teléfono:

OBJETO DE LA CONCILIACIÓN

Las partes manifiestan que existe una controversia
relacionada con obligaciones derivadas del contrato
de trabajo y expresan su voluntad de solucionarla
mediante conciliación.

ACUERDOS

PRIMERO.

El empleador reconoce adeudar al trabajador la suma
de $______________ por concepto de:

• Salarios
• Prestaciones sociales
• Vacaciones
• Liquidación
• Otros conceptos

SEGUNDO.

El valor será cancelado de la siguiente manera:

Cuota 1:
Valor:
Fecha:

Cuota 2:
Valor:
Fecha:

Cuota 3:
Valor:
Fecha:

TERCERO.

Los pagos se realizarán mediante transferencia
electrónica a la cuenta indicada por el trabajador.

CUARTO.

Cada pago será acreditado mediante comprobante
bancario enviado al correo electrónico del trabajador.

QUINTO.

Una vez cumplidas todas las obligaciones aquí
establecidas, las partes manifiestan que el conflicto
laboral quedará totalmente solucionado respecto de
los asuntos conciliados.

SEXTO.

Las partes declaran haber leído el presente acuerdo,
comprender su contenido y aceptarlo libremente.

FIRMAS

_____________________
Trabajador

_____________________
Empleador

_____________________
Conciliador`}
          </motion.pre>

          <div className={styles.highlightBox}>
            <p>
              Este es únicamente un ejemplo ilustrativo. Cada acuerdo laboral
              debe adaptarse a las circunstancias del caso concreto, las
              obligaciones que se desean conciliar y las condiciones aceptadas
              voluntariamente por las partes durante la audiencia.
            </p>
          </div>

          <p className={styles.paragraph}>
            En la práctica, muchos acuerdos también incluyen cláusulas
            relacionadas con paz y salvo, cronogramas de pago, entrega de
            certificados laborales, devolución de herramientas,
            confidencialidad, formas de verificar el cumplimiento y demás
            aspectos necesarios para evitar futuras interpretaciones o nuevos
            conflictos.
          </p>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué validez legal tiene un acuerdo laboral celebrado ante un centro
            de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales razones por las que trabajadores y
            empleadores deciden acudir a un centro de conciliación es la
            seguridad jurídica que ofrece este mecanismo. Cuando las partes
            alcanzan un acuerdo dentro de una audiencia de conciliación y este
            queda consignado en un acta de conciliación debidamente suscrita,
            dicho documento produce importantes efectos legales en Colombia.
          </p>

          <p className={styles.paragraph}>
            El acuerdo conciliatorio deja de ser una simple promesa verbal para
            convertirse en un documento formal donde quedan claramente
            establecidas las obligaciones de cada parte, los valores acordados,
            los plazos de cumplimiento y las condiciones aceptadas durante la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Esta seguridad jurídica beneficia tanto al trabajador como al
            empleador, pues ambos conocen exactamente cuáles son los compromisos
            asumidos y la forma en que deberán cumplirse. Además, disminuye el
            riesgo de nuevas controversias derivadas de interpretaciones
            diferentes sobre lo pactado.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Todas las obligaciones quedan documentadas de manera clara,
                evitando interpretaciones ambiguas o discusiones posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones verificables</h3>

              <p>
                El acuerdo establece fechas, valores, responsables y mecanismos
                para acreditar el cumplimiento de cada obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor confianza</h3>

              <p>
                Tanto trabajador como empleador cuentan con un documento que
                refleja exactamente lo acordado durante la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prevención de nuevos conflictos</h3>

              <p>
                Un acuerdo bien estructurado reduce considerablemente la
                posibilidad de que surjan nuevas diferencias entre las partes.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Mientras más específico sea el acuerdo, mayor será la facilidad
              para demostrar posteriormente qué obligaciones fueron asumidas,
              cuándo debían cumplirse y cuáles eran las condiciones aceptadas
              por trabajador y empleador.
            </p>
          </div>

          <h3 className={componentStyles.smallSubtitle}>
            ¿Qué aspectos suelen quedar definidos dentro del acuerdo?
          </h3>

          <ul className={styles.list}>
            <li>Valor total reconocido por las partes.</li>
            <li>Forma de pago.</li>
            <li>Número de cuotas.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Entrega de documentos laborales.</li>
            <li>Entrega de certificados o paz y salvo.</li>
            <li>Reconocimiento de prestaciones sociales.</li>
            <li>Compromisos asumidos por trabajador y empleador.</li>
            <li>Forma de acreditar el cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
          </ul>

          <p className={styles.paragraph}>
            Precisamente por los efectos jurídicos que puede producir un acta de
            conciliación, es recomendable que todas las obligaciones queden
            redactadas con precisión, evitando expresiones ambiguas o
            compromisos imposibles de verificar posteriormente. Esto brinda
            mayor tranquilidad a ambas partes y facilita la ejecución del
            acuerdo si llegara a ser necesario.
          </p>
        </motion.div>

        <motion.div
          className={styles.contentSection}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué pasa si una de las partes incumple un acuerdo laboral celebrado
            ante un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una de las preguntas más frecuentes después de una audiencia de
            conciliación es qué ocurre cuando el trabajador o el empleador no
            cumplen las obligaciones que aceptaron voluntariamente dentro del
            acuerdo. Aunque el propósito principal de la conciliación es lograr
            una solución definitiva del conflicto, el incumplimiento puede
            generar nuevas actuaciones para proteger los derechos de la parte
            afectada.
          </p>

          <p className={styles.paragraph}>
            Precisamente por ello es fundamental que el acuerdo quede redactado
            de manera clara, indicando las obligaciones asumidas, los valores
            pactados, las fechas de cumplimiento, la forma de pago y los
            mecanismos mediante los cuales podrá verificarse que cada compromiso
            fue efectivamente cumplido.
          </p>

          <p className={styles.paragraph}>
            Cuando todas estas condiciones aparecen descritas de forma precisa,
            resulta mucho más sencillo demostrar posteriormente qué obligación
            debía cumplirse, quién era el responsable y cuál era el plazo
            acordado por las partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento del empleador</h3>

              <p>
                Puede ocurrir cuando no realiza los pagos acordados, incumple el
                cronograma establecido, no entrega certificados laborales, no
                reconoce las prestaciones pactadas o deja de ejecutar cualquiera
                de los compromisos asumidos durante la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento del trabajador</h3>

              <p>
                También puede presentarse cuando el trabajador incumple las
                obligaciones que aceptó dentro del acuerdo, como entregar
                documentos, devolver herramientas, cumplir determinadas
                actuaciones o respetar los compromisos asumidos durante la
                audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Importancia de conservar el acta</h3>

              <p>
                Es recomendable conservar el acta original y todos los
                documentos que acrediten el cumplimiento o incumplimiento de las
                obligaciones, incluyendo comprobantes de pago, consignaciones,
                actas de entrega, correos electrónicos y demás soportes
                relacionados con el acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguimiento al acuerdo</h3>

              <p>
                Después de la audiencia es conveniente verificar que cada
                obligación se cumpla dentro de los plazos establecidos y
                conservar evidencia de cada actuación realizada por las partes.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              La mejor forma de evitar futuros inconvenientes consiste en
              redactar acuerdos claros, específicos y completamente
              verificables. Mientras más precisa sea la redacción del acta de
              conciliación, menor será el riesgo de interpretaciones diferentes
              y nuevos conflictos entre trabajador y empleador.
            </p>
          </div>

          <h3 className={componentStyles.smallSubtitle}>
            Recomendaciones para reducir el riesgo de incumplimiento
          </h3>

          <ul className={styles.list}>
            <li>Definir valores exactos y evitar cifras aproximadas.</li>
            <li>Establecer fechas concretas para cada obligación.</li>
            <li>Precisar el medio de pago o la forma de cumplimiento.</li>
            <li>Conservar todos los comprobantes y soportes.</li>
            <li>Guardar copia del acta de conciliación firmada.</li>
            <li>
              Registrar por escrito cualquier modificación acordada
              posteriormente.
            </li>
            <li>
              Solicitar asesoría cuando exista alguna duda sobre el alcance del
              acuerdo.
            </li>
            <li>
              Verificar periódicamente que cada compromiso haya sido cumplido.
            </li>
          </ul>

          <p className={styles.paragraph}>
            En la mayoría de los casos, una conciliación correctamente preparada
            y un acuerdo redactado con precisión permiten prevenir nuevos
            desacuerdos y brindan mayor tranquilidad tanto al trabajador como al
            empleador. Por esta razón, antes de firmar el acta es recomendable
            revisar cuidadosamente cada una de las cláusulas y asegurarse de que
            todas las obligaciones reflejen exactamente lo que ambas partes
            desean cumplir.
          </p>
        </motion.div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo laboral por conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es un acuerdo alcanzado entre trabajador y empleador con la
            intervención de un conciliador autorizado. El objetivo es resolver
            diferencias laborales sin necesidad de acudir a un juez laboral.
          </p>

          <p className={styles.paragraph}>
            Una vez alcanzado el acuerdo, este queda consignado en un acta de
            conciliación que tiene efectos jurídicos y puede exigirse en caso de
            incumplimiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral promueve soluciones consensuadas que
              benefician a ambas partes y reducen costos y tiempos de
              resolución.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Asuntos laborales que pueden conciliarse
          </h2>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Liquidaciones laborales.</li>
            <li>Vacaciones.</li>
            <li>Indemnizaciones.</li>
            <li>Bonificaciones.</li>
            <li>Terminación de contratos de trabajo.</li>
            <li>Reconocimiento de obligaciones laborales.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de formalizar un acuerdo laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Rapidez</h3>

              <p>
                Permite resolver conflictos laborales en menos tiempo que un
                proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor costo</h3>

              <p>
                Reduce gastos legales y evita largos litigios entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acuerdo queda respaldado por un acta con efectos legales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se realiza una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento inicia con la solicitud de conciliación ante un
            centro autorizado. Posteriormente se programa una audiencia en la
            que las partes exponen sus posiciones y buscan alcanzar un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si existe consenso, se firma un acta de conciliación laboral donde
            quedan establecidas las obligaciones y compromisos de cada parte.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez legal del acuerdo laboral</h2>

          <p className={styles.paragraph}>
            Los acuerdos celebrados ante centros de conciliación tienen plena
            validez jurídica en Colombia. El acta resultante presta mérito
            ejecutivo y puede hacerse cumplir judicialmente.
          </p>

          <p className={styles.paragraph}>
            Esto brinda confianza tanto al trabajador como al empleador,
            garantizando que los compromisos adquiridos tengan respaldo legal.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio llegar a un acuerdo?</h3>

              <p>
                No. La conciliación es voluntaria y depende de la voluntad de
                ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede hacerse virtualmente?</h3>

              <p>
                Sí. Muchos centros de conciliación ofrecen audiencias virtuales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si se incumple?</h3>

              <p>
                El acta puede ejecutarse judicialmente para exigir el
                cumplimiento de las obligaciones acordadas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas formalizar un acuerdo laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para resolver conflictos laborales mediante
            conciliación en Bogotá y cualquier lugar de Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
