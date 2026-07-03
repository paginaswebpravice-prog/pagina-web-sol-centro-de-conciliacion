"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaDeConciliacionEfectosYCumplimientoContent() {
  return (
    <section id="acta" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Guía jurídica actualizada sobre conciliación en Colombia • 2026
          </span>

          <h1 className={styles.title}>
            Acta de conciliación en Colombia: efectos legales, mérito ejecutivo,
            cosa juzgada y qué hacer si una de las partes incumple el acuerdo
          </h1>

          <p className={styles.paragraph}>
            El <strong>acta de conciliación en Colombia</strong> es uno de los
            documentos con mayor fuerza jurídica dentro de un proceso
            conciliatorio. Allí quedan consignados todos los acuerdos alcanzados
            entre las partes, las obligaciones que cada una debe cumplir, los
            plazos establecidos y las condiciones pactadas para resolver el
            conflicto sin acudir a un proceso judicial largo y costoso.
          </p>

          <p className={styles.paragraph}>
            Muchas personas creen que una conciliación únicamente representa un
            acuerdo voluntario o una conversación entre las partes. Sin embargo,
            una vez el acuerdo queda consignado en un acta elaborada por un
            conciliador autorizado, dicho documento adquiere importantes efectos
            jurídicos reconocidos por la legislación colombiana, entre ellos el{" "}
            <strong>mérito ejecutivo</strong> y los efectos de{" "}
            <strong>cosa juzgada</strong>, lo que significa que puede hacerse
            cumplir judicialmente cuando una de las partes incumple lo pactado.
          </p>

          <p className={styles.paragraph}>
            Gracias a estas características, el acta de conciliación se ha
            convertido en una de las herramientas más utilizadas para solucionar
            conflictos relacionados con <strong>deudas</strong>,{" "}
            <strong>contratos civiles y comerciales</strong>,{" "}
            <strong>arrendamientos</strong>,{" "}
            <strong>cuotas alimentarias</strong>,{" "}
            <strong>indemnizaciones</strong>,{" "}
            <strong>responsabilidad civil</strong>, conflictos familiares,
            obligaciones entre particulares y múltiples controversias que pueden
            resolverse sin necesidad de iniciar un proceso judicial desde el
            principio.
          </p>

          <p className={styles.paragraph}>
            En esta guía encontrará información completa sobre{" "}
            <strong>qué es un acta de conciliación</strong>, cuáles son sus{" "}
            <strong>efectos legales</strong>, cuándo{" "}
            <strong>presta mérito ejecutivo</strong>, qué significa que produzca{" "}
            <strong>efectos de cosa juzgada</strong>, cómo exigir su
            cumplimiento, qué sucede cuando una persona incumple el acuerdo y
            cuáles son las recomendaciones más importantes antes de firmar
            cualquier acta de conciliación en Colombia.
          </p>

          <div className={styles.highlightBox}>
            <strong>Aspectos más importantes que debe conocer</strong>

            <p>
              Un acta de conciliación correctamente elaborada no solo pone fin
              al conflicto entre las partes, sino que también constituye un
              documento con plena validez jurídica que puede utilizarse como
              fundamento para exigir judicialmente el cumplimiento de las
              obligaciones allí pactadas. Entre más claras, específicas y
              detalladas sean sus cláusulas, mayor será la seguridad jurídica
              para todas las personas involucradas y más sencillo resultará
              hacer efectivo el acuerdo en caso de incumplimiento.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es un acta de conciliación y qué debe contener para tener plena
            validez jurídica en Colombia?
          </h2>

          <p className={styles.paragraph}>
            El <strong>acta de conciliación</strong> es el documento oficial que
            deja constancia de los acuerdos alcanzados durante una audiencia de
            conciliación. En ella se consignan de manera clara las obligaciones
            asumidas por cada una de las partes, los plazos para cumplirlas, la
            forma en que deberán ejecutarse y cualquier condición adicional
            acordada para solucionar el conflicto de forma pacífica.
          </p>

          <p className={styles.paragraph}>
            Este documento no constituye una simple evidencia de que existió una
            reunión entre las partes. Por el contrario, representa el resultado
            formal del procedimiento conciliatorio y tiene importantes
            consecuencias jurídicas, razón por la cual su redacción debe ser
            precisa, completa y libre de ambigüedades.
          </p>

          <p className={styles.paragraph}>
            Cuando el acta es elaborada por un conciliador autorizado y cumple
            los requisitos establecidos por la legislación colombiana, adquiere
            plena validez jurídica y puede convertirse en el principal respaldo
            para exigir posteriormente el cumplimiento de los compromisos
            asumidos por cualquiera de las partes.
          </p>

          <p className={styles.paragraph}>
            En conflictos relacionados con obligaciones económicas, contratos,
            arrendamientos, responsabilidad civil, alimentos, conflictos
            comerciales, indemnizaciones, propiedad horizontal, convivencia o
            acuerdos entre particulares, una adecuada redacción del acta reduce
            significativamente la posibilidad de que surjan nuevos desacuerdos o
            interpretaciones diferentes sobre lo que realmente fue pactado.
          </p>

          <div className={styles.highlightBox}>
            <strong>¿Por qué es tan importante una buena redacción?</strong>

            <p>
              Si las obligaciones quedan descritas de forma imprecisa o
              incompleta, posteriormente pueden surgir dificultades para exigir
              judicialmente el cumplimiento del acuerdo. Entre más específico
              sea el contenido del acta, mayor seguridad jurídica tendrán ambas
              partes.
            </p>
          </div>

          <h3 className={styles.subtitle}>
            Información que normalmente debe incluir un acta de conciliación
          </h3>

          <p className={styles.paragraph}>
            Aunque el contenido puede variar dependiendo del conflicto que se
            esté resolviendo, una adecuada acta de conciliación normalmente
            incorpora todos los elementos necesarios para identificar claramente
            quién debe cumplir, qué debe cumplir, cuándo debe hacerlo y bajo qué
            condiciones deberá ejecutar cada obligación.
          </p>

          <ul className={styles.list}>
            <li>
              Identificación completa de todas las personas que participan en la
              conciliación.
            </li>

            <li>
              Datos del conciliador o del centro de conciliación que dirige el
              procedimiento.
            </li>

            <li>
              Descripción clara del conflicto que dio origen a la audiencia de
              conciliación.
            </li>

            <li>
              Obligaciones específicas asumidas por cada una de las partes.
            </li>

            <li>
              Valores exactos cuando existan pagos, indemnizaciones o acuerdos
              económicos.
            </li>

            <li>Fechas concretas para el cumplimiento de cada obligación.</li>

            <li>
              Cronogramas de pago cuando las obligaciones se cumplan mediante
              cuotas.
            </li>

            <li>
              Forma de pago, cuentas bancarias, medios electrónicos o lugares de
              entrega cuando corresponda.
            </li>

            <li>
              Condiciones especiales, intereses, descuentos o beneficios
              acordados entre las partes.
            </li>

            <li>
              Consecuencias previstas en caso de incumplimiento del acuerdo.
            </li>

            <li>
              Relación de documentos anexos o soportes que hagan parte integral
              del acta.
            </li>

            <li>Firma de las partes y del conciliador competente.</li>
          </ul>

          <h3 className={styles.subtitle}>
            ¿Qué ocurre cuando el acta está mal redactada?
          </h3>

          <p className={styles.paragraph}>
            Uno de los errores más frecuentes consiste en utilizar expresiones
            generales como <strong>"pagará después"</strong>,{" "}
            <strong>"cumplirá cuando pueda"</strong> o{" "}
            <strong>"entregará los documentos oportunamente"</strong>. Este tipo
            de cláusulas generan incertidumbre porque no permiten establecer con
            precisión cuándo nace la obligación ni cuál es exactamente la
            conducta que debe cumplir cada persona.
          </p>

          <p className={styles.paragraph}>
            También es común encontrar actas que omiten valores, fechas, formas
            de pago o mecanismos de entrega, situación que posteriormente
            dificulta iniciar un proceso ejecutivo cuando alguna de las partes
            incumple el acuerdo.
          </p>

          <div className={styles.note}>
            Una buena acta de conciliación no deja espacio para
            interpretaciones. Cada obligación debe quedar perfectamente definida
            para brindar seguridad jurídica, evitar nuevos conflictos y
            facilitar su eventual ejecución ante las autoridades judiciales si
            alguna de las partes no cumple lo pactado.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Efectos legales del acta de conciliación en Colombia: ¿por qué tiene
            tanta fuerza jurídica?
          </h2>

          <p className={styles.paragraph}>
            Uno de los aspectos que más dudas genera entre quienes participan en
            una audiencia de conciliación es conocer cuáles son los{" "}
            <strong>efectos legales del acta de conciliación</strong>. Muchas
            personas creen que el documento únicamente representa un acuerdo de
            buena voluntad entre las partes; sin embargo, en Colombia produce
            importantes consecuencias jurídicas que le permiten convertirse en
            un mecanismo eficaz para solucionar conflictos sin necesidad de
            acudir inicialmente a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Una vez el acuerdo queda formalizado mediante un acta elaborada
            conforme a la normativa aplicable, las obligaciones allí contenidas
            dejan de ser simples promesas y adquieren carácter obligatorio. Esto
            brinda mayor seguridad jurídica, protege los intereses de las partes
            y facilita exigir posteriormente el cumplimiento cuando alguna de
            ellas incumple lo pactado.
          </p>

          <p className={styles.paragraph}>
            Precisamente por estos efectos, la conciliación es ampliamente
            utilizada para resolver conflictos relacionados con obligaciones
            económicas, arrendamientos, contratos civiles y comerciales,
            responsabilidad civil, conflictos familiares, cuotas alimentarias,
            propiedad horizontal, indemnizaciones y muchas otras controversias
            susceptibles de conciliación.
          </p>

          <div className={styles.effectsGrid}>
            <div className={styles.effectCard}>
              <h4>Produce efectos de cosa juzgada</h4>

              <p>
                El conflicto conciliado queda definitivamente resuelto entre las
                mismas partes respecto de los mismos hechos, evitando que la
                controversia sea discutida nuevamente mediante otro proceso
                sobre el mismo asunto.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Presta mérito ejecutivo</h4>

              <p>
                Si una de las partes incumple el acuerdo, el acta puede servir
                como fundamento para iniciar un proceso ejecutivo con el fin de
                obtener el cumplimiento forzado de las obligaciones pactadas.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Genera obligaciones exigibles</h4>

              <p>
                Todos los compromisos asumidos dejan de ser simples acuerdos
                verbales y pasan a convertirse en obligaciones con efectos
                jurídicos que deben ser respetadas por quienes las suscribieron.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Aporta seguridad jurídica</h4>

              <p>
                Al establecer claramente derechos, deberes, valores, fechas y
                formas de cumplimiento, disminuye considerablemente el riesgo de
                nuevos conflictos o interpretaciones diferentes del acuerdo
                alcanzado.
              </p>
            </div>
          </div>

          <h3 className={styles.subtitle}>
            ¿Qué significa que el acta de conciliación presta mérito ejecutivo?
          </h3>

          <p className={styles.paragraph}>
            Cuando se afirma que un{" "}
            <strong>acta de conciliación presta mérito ejecutivo</strong>,
            significa que el documento puede utilizarse como base para solicitar
            ante un juez el cumplimiento de las obligaciones allí pactadas
            cuando alguna de las partes incumple el acuerdo.
          </p>

          <p className={styles.paragraph}>
            En otras palabras, no es necesario comenzar nuevamente toda la
            discusión sobre quién tenía la razón en el conflicto. Si el acuerdo
            fue claro y la obligación es actualmente exigible, la parte afectada
            podrá acudir a los mecanismos judiciales correspondientes para
            obtener el cumplimiento de lo pactado.
          </p>

          <p className={styles.paragraph}>
            Esta característica convierte a la conciliación en una alternativa
            mucho más eficiente que dejar únicamente acuerdos verbales o
            documentos privados que, en muchos casos, requieren procesos
            adicionales para demostrar la existencia de la obligación.
          </p>

          <div className={styles.highlightBox}>
            <strong>Ejemplo práctico</strong>

            <p>
              Si durante una conciliación una persona acepta pagar una deuda en
              seis cuotas mensuales y posteriormente deja de realizar los pagos
              acordados, el acreedor podrá utilizar el acta como fundamento para
              solicitar judicialmente el cumplimiento de las obligaciones
              pendientes, siempre que se cumplan los requisitos legales
              aplicables.
            </p>
          </div>

          <h3 className={styles.subtitle}>
            ¿Qué significa que el acta hace tránsito a cosa juzgada?
          </h3>

          <p className={styles.paragraph}>
            Otro de los principales efectos del acta consiste en que produce{" "}
            <strong>cosa juzgada</strong>. Esto significa que el conflicto
            resuelto mediante conciliación no puede volver a discutirse entre
            las mismas partes respecto de los mismos hechos y las mismas
            pretensiones, salvo las excepciones previstas por la ley.
          </p>

          <p className={styles.paragraph}>
            Este efecto brinda estabilidad a los acuerdos alcanzados y evita que
            una persona intente reabrir permanentemente controversias que ya
            fueron solucionadas mediante un mecanismo reconocido por el
            ordenamiento jurídico.
          </p>

          <p className={styles.paragraph}>
            Gracias a ello, ambas partes obtienen mayor certeza sobre sus
            derechos y obligaciones, reduciendo significativamente la
            posibilidad de nuevos litigios derivados del mismo conflicto.
          </p>

          <h3 className={styles.subtitle}>
            ¿Por qué el acta de conciliación ofrece tanta seguridad jurídica?
          </h3>

          <p className={styles.paragraph}>
            La combinación entre los efectos de cosa juzgada, el mérito
            ejecutivo y la obligatoriedad de las obligaciones pactadas convierte
            al acta de conciliación en uno de los instrumentos jurídicos más
            importantes para la solución alternativa de conflictos en Colombia.
          </p>

          <p className={styles.paragraph}>
            Además de contribuir a descongestionar los despachos judiciales,
            permite a las partes alcanzar soluciones más rápidas, flexibles y
            ajustadas a sus necesidades particulares, evitando en muchos casos
            los costos, tiempos e incertidumbres propios de un proceso judicial
            tradicional.
          </p>

          <div className={styles.note}>
            En la práctica, una conciliación correctamente elaborada no solo
            pone fin al conflicto actual, sino que también brinda herramientas
            jurídicas para garantizar que el acuerdo realmente se cumpla si
            alguna de las partes incumple las obligaciones asumidas.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué pasa si una persona incumple un acta de conciliación en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Una de las preguntas más frecuentes después de finalizar una
            audiencia de conciliación es qué ocurre cuando una de las partes no
            cumple los acuerdos consignados en el acta. Aunque la conciliación
            busca que el conflicto se resuelva de manera voluntaria y de buena
            fe, el ordenamiento jurídico colombiano también contempla mecanismos
            para proteger a la parte afectada cuando el acuerdo es incumplido.
          </p>

          <p className={styles.paragraph}>
            Precisamente por ello, el acta de conciliación no constituye
            únicamente una constancia de lo acordado. Al tener importantes
            efectos jurídicos, puede servir como fundamento para exigir el
            cumplimiento de las obligaciones allí establecidas cuando una de las
            partes decide no respetar los compromisos que asumió durante la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza de las obligaciones pactadas, el
            incumplimiento puede dar lugar a un{" "}
            <strong>proceso ejecutivo</strong>, mediante el cual un juez podrá
            adoptar las medidas previstas por la ley para procurar que el
            acuerdo sea cumplido.
          </p>

          <div className={styles.highlightBox}>
            <strong>Lo más importante</strong>

            <p>
              El hecho de que una persona incumpla el acta no significa que el
              acuerdo pierda validez. Por el contrario, precisamente porque el
              documento tiene fuerza jurídica, la parte cumplida puede acudir
              ante las autoridades para exigir que se respeten las obligaciones
              pactadas.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.subtitle}>
              ¿Se puede modificar, corregir o anular un acta de conciliación en
              Colombia?
            </h2>

            <p className={styles.paragraph}>
              Después de firmar un acuerdo conciliatorio es común que las partes
              se pregunten si el contenido del acta puede modificarse,
              corregirse o incluso dejarse sin efectos. La respuesta dependerá
              de las circunstancias particulares de cada caso y de la naturaleza
              del cambio que se pretende realizar.
            </p>

            <p className={styles.paragraph}>
              En términos generales, el acta de conciliación busca brindar
              estabilidad a los acuerdos alcanzados entre las partes.
              Precisamente por ello, una vez queda debidamente suscrita y
              produce efectos jurídicos, no puede ser modificada de manera
              unilateral por ninguna de las personas que participaron en la
              audiencia.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, existen situaciones en las que las partes, de común
              acuerdo, consideran necesario realizar ajustes, aclaraciones o
              incluso celebrar una nueva conciliación para modificar
              determinadas obligaciones cuando ello sea legalmente procedente.
            </p>

            <div className={styles.highlightBox}>
              <strong>Importante</strong>

              <p>
                Ninguna persona puede cambiar por sí sola las obligaciones
                contenidas en un acta de conciliación. Cualquier modificación
                debe realizarse por los mecanismos legalmente previstos y
                respetando los derechos de todas las partes involucradas.
              </p>
            </div>

            <h3 className={styles.subtitle}>
              ¿Cuándo puede ser necesario modificar un acta de conciliación?
            </h3>

            <p className={styles.paragraph}>
              Existen diferentes circunstancias en las que las partes pueden
              considerar conveniente celebrar un nuevo acuerdo o realizar las
              actuaciones correspondientes para ajustar lo previamente pactado.
            </p>

            <ul className={styles.list}>
              <li>Las partes desean ampliar los plazos de cumplimiento.</li>

              <li>Se acuerdan nuevas formas de pago.</li>

              <li>Se modifican los valores inicialmente pactados.</li>

              <li>
                Surgen circunstancias imprevistas que afectan el cumplimiento.
              </li>

              <li>
                Es necesario aclarar cláusulas que generen diferentes
                interpretaciones.
              </li>

              <li>Se identifican errores materiales o de digitación.</li>

              <li>Las partes desean incorporar nuevas obligaciones.</li>

              <li>
                Se pretende eliminar obligaciones que ya fueron cumplidas.
              </li>
            </ul>

            <h3 className={styles.subtitle}>
              ¿Qué ocurre si una de las partes ya no está de acuerdo con lo
              firmado?
            </h3>

            <p className={styles.paragraph}>
              El simple arrepentimiento no elimina los efectos jurídicos del
              acta de conciliación. Una vez el acuerdo ha sido válidamente
              celebrado, las partes quedan obligadas a cumplir las obligaciones
              asumidas, salvo que exista una situación que permita acudir a los
              mecanismos previstos por el ordenamiento jurídico.
            </p>

            <p className={styles.paragraph}>
              Por esta razón resulta fundamental leer cuidadosamente cada
              cláusula antes de firmar el documento, resolver cualquier duda
              durante la audiencia y asegurarse de que todas las obligaciones
              realmente puedan cumplirse dentro de los plazos acordados.
            </p>

            <h3 className={styles.subtitle}>
              ¿Es posible corregir errores en un acta de conciliación?
            </h3>

            <p className={styles.paragraph}>
              En ocasiones pueden presentarse errores relacionados con nombres,
              números de identificación, direcciones, fechas o datos similares.
              Cuando esto ocurre, resulta recomendable acudir oportunamente al
              centro de conciliación o al conciliador que intervino en el
              procedimiento para conocer cuáles son las actuaciones que podrían
              resultar procedentes según las características del caso.
            </p>

            <p className={styles.paragraph}>
              Actuar de manera temprana ayuda a evitar inconvenientes
              posteriores, especialmente cuando el documento será utilizado para
              acreditar el acuerdo alcanzado o para exigir el cumplimiento de
              las obligaciones pactadas.
            </p>

            <h3 className={styles.subtitle}>
              ¿Se puede solicitar la nulidad o dejar sin efectos un acta de
              conciliación?
            </h3>

            <p className={styles.paragraph}>
              Algunas personas utilizan expresiones como "anular", "invalidar" o
              "cancelar" un acta de conciliación. No obstante, la posibilidad de
              dejar sin efectos un acuerdo dependerá de las circunstancias
              específicas del caso y de las normas aplicables, por lo que cada
              situación requiere un análisis jurídico individual.
            </p>

            <p className={styles.paragraph}>
              Cuando existen dudas sobre la validez del procedimiento, la
              capacidad de las partes, el contenido del acuerdo o cualquier otra
              circunstancia relevante, resulta aconsejable obtener orientación
              jurídica antes de tomar cualquier decisión.
            </p>

            <div className={styles.note}>
              Una conciliación bien preparada desde el inicio disminuye
              considerablemente la necesidad de realizar modificaciones
              posteriores. Revisar cada cláusula, verificar los valores,
              confirmar las fechas y asegurarse de comprender el alcance de
              todas las obligaciones son medidas que brindan mayor seguridad
              jurídica para las partes.
            </div>
          </motion.div>

          <h3 className={styles.subtitle}>
            ¿Cómo hacer cumplir un acta de conciliación?
          </h3>

          <p className={styles.paragraph}>
            Cuando una de las partes incumple total o parcialmente el acuerdo,
            la otra podrá acudir a los mecanismos judiciales correspondientes
            para solicitar el cumplimiento de las obligaciones contenidas en el
            acta. La posibilidad de hacerlo dependerá de las características
            específicas del caso, del tipo de obligación incumplida y del
            contenido mismo del acuerdo conciliatorio.
          </p>

          <p className={styles.paragraph}>
            En la práctica, entre más clara sea la redacción del acta, más
            sencillo suele resultar demostrar el incumplimiento. Por ello es
            recomendable que todas las obligaciones indiquen de manera expresa
            valores, fechas, responsables, forma de pago, condiciones de
            cumplimiento y cualquier otro aspecto necesario para evitar
            interpretaciones ambiguas.
          </p>

          <h3 className={styles.subtitle}>
            ¿Cómo suele desarrollarse un proceso por incumplimiento del acta?
          </h3>

          <p className={styles.paragraph}>
            Aunque cada situación puede presentar particularidades, normalmente
            el procedimiento comprende varias etapas orientadas a obtener el
            cumplimiento efectivo del acuerdo conciliatorio.
          </p>

          <ul className={styles.list}>
            <li>
              Se verifica el contenido del acta y las obligaciones asumidas por
              cada una de las partes.
            </li>

            <li>
              Se determina si efectivamente existe un incumplimiento total o
              parcial de lo pactado.
            </li>

            <li>
              Se recopilan los documentos y soportes que acrediten el
              incumplimiento.
            </li>

            <li>
              Se presenta la actuación correspondiente ante la autoridad
              competente, cuando legalmente sea procedente.
            </li>

            <li>
              El juez estudia la solicitud y adopta las decisiones que
              correspondan conforme a la ley.
            </li>
          </ul>

          <h3 className={styles.subtitle}>
            ¿Qué medidas puede adoptar un juez cuando existe incumplimiento?
          </h3>

          <p className={styles.paragraph}>
            Las medidas dependerán del tipo de obligación contenida en el acta y
            de las circunstancias particulares de cada caso. Si se cumplen los
            requisitos legales, dentro del proceso correspondiente podrán
            adoptarse diferentes actuaciones encaminadas a lograr el
            cumplimiento efectivo del acuerdo.
          </p>

          <div className={styles.effectsGrid}>
            <div className={styles.effectCard}>
              <h4>Pago de obligaciones pendientes</h4>

              <p>
                Cuando el acuerdo contempla el pago de sumas de dinero, podrá
                buscarse el cumplimiento de las obligaciones económicas conforme
                a la ley.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Medidas sobre bienes</h4>

              <p>
                Dependiendo del caso concreto y de la decisión judicial, pueden
                llegar a decretarse medidas sobre determinados bienes para
                garantizar el cumplimiento de la obligación.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Cumplimiento de obligaciones</h4>

              <p>
                No todas las conciliaciones se refieren al pago de dinero.
                También pueden involucrar entrega de documentos, bienes,
                cumplimiento de contratos u otras obligaciones.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Protección de los derechos pactados</h4>

              <p>
                El proceso busca que las obligaciones acordadas durante la
                conciliación produzcan los efectos jurídicos previstos y no
                queden únicamente como compromisos sin cumplimiento.
              </p>
            </div>
          </div>

          <h3 className={styles.subtitle}>
            Errores que dificultan exigir judicialmente el cumplimiento del acta
          </h3>

          <p className={styles.paragraph}>
            En muchas ocasiones el principal problema no consiste en el
            incumplimiento, sino en que el acuerdo fue redactado de manera
            imprecisa. Una redacción deficiente puede generar discusiones sobre
            el verdadero alcance de las obligaciones asumidas.
          </p>

          <ul className={styles.list}>
            <li>No establecer fechas exactas para cumplir las obligaciones.</li>

            <li>No indicar valores concretos cuando existen pagos.</li>

            <li>
              Utilizar expresiones ambiguas como "más adelante" o "cuando
              pueda".
            </li>

            <li>
              No identificar claramente quién debe cumplir cada obligación.
            </li>

            <li>No definir la forma de pago o entrega de los bienes.</li>

            <li>No anexar documentos que hacen parte del acuerdo.</li>

            <li>No revisar cuidadosamente el contenido antes de firmar.</li>
          </ul>

          <div className={styles.warningBox}>
            <strong>Recomendación importante</strong>

            <p>
              Antes de firmar un acta de conciliación, verifique que
              absolutamente todas las obligaciones sean claras, específicas y
              verificables. Una buena redacción disminuye considerablemente los
              conflictos futuros y facilita la eventual exigencia judicial del
              acuerdo en caso de incumplimiento.
            </p>
          </div>

          <p className={styles.paragraph}>
            En conclusión, el incumplimiento de un acta de conciliación no deja
            desprotegida a la parte que sí cumplió con sus obligaciones. Gracias
            a los efectos jurídicos que produce este documento, el ordenamiento
            colombiano contempla mecanismos para procurar que los acuerdos
            conciliatorios sean respetados y ejecutados cuando ello resulte
            procedente conforme a la ley.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Recomendaciones antes de firmar un acta de conciliación
          </h3>

          <p className={styles.paragraph}>
            Antes de firmar cualquier acuerdo en una audiencia de conciliación,
            es importante revisar cuidadosamente cada cláusula y asegurarse de
            entender completamente las obligaciones asumidas.
          </p>

          <ul className={styles.list}>
            <li>Verifica que los valores estén correctos.</li>

            <li>Revisa que las fechas de pago o cumplimiento sean claras.</li>

            <li>
              Confirma que las cuotas, intereses o condiciones especiales estén
              correctamente escritas.
            </li>

            <li>Asegúrate de que los acuerdos sean posibles de cumplir.</li>

            <li>Conserva copia física y digital del acta firmada.</li>

            <li>
              Solicita aclaraciones antes de firmar cualquier punto confuso.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.faqSection}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Preguntas frecuentes sobre el acta de conciliación en Colombia
          </h3>

          <div className={styles.faqItem}>
            <h4>¿El acta de conciliación presta mérito ejecutivo?</h4>

            <p>
              Sí. En Colombia, el acta de conciliación puede utilizarse para
              iniciar un proceso ejecutivo si existe incumplimiento.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿El acta tiene la misma validez que una sentencia?</h4>

            <p>
              Tiene importantes efectos jurídicos, incluyendo cosa juzgada y
              obligatoriedad para las partes.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿Se puede exigir judicialmente el cumplimiento?</h4>

            <p>
              Sí. Si una parte incumple, el acuerdo puede ejecutarse ante un
              juez en Colombia.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿La conciliación virtual también genera un acta válida?</h4>

            <p>
              Sí. Las actas de conciliación virtual tienen la misma validez
              legal que las realizadas presencialmente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <strong className={styles.ctaTitle}>
              ¿Necesitas revisar o redactar un acta de conciliación?
            </strong>

            <p className={styles.ctaText}>
              Recibe orientación sobre acuerdos de pago, redacción de cláusulas,
              cumplimiento de obligaciones y ejecución de actas de conciliación
              en Bogotá y Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
