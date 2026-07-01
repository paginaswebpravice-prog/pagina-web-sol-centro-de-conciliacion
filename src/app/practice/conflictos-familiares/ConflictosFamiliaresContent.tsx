"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function ConflictosFamiliaresContent() {
  return (
    <>
      <section className={styles.section}>
        {/* ================= HERO ================= */}

        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>
            CONCILIACIÓN FAMILIAR EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación familiar en Colombia: custodia de hijos, cuota
            alimentaria, régimen de visitas y separación sin demanda judicial
          </h1>

          <p className={styles.description}>
            La conciliación familiar es uno de los mecanismos más efectivos para
            resolver conflictos entre padres, hijos, exparejas, cónyuges y demás
            integrantes de la familia sin acudir inmediatamente a un proceso
            judicial. Mediante este procedimiento es posible alcanzar acuerdos
            legales sobre custodia de hijos, cuota alimentaria, régimen de
            visitas, separación, liquidación de sociedad conyugal, sociedad
            patrimonial y otras obligaciones familiares.
          </p>

          <p className={styles.description}>
            En Colombia, la conciliación permite construir soluciones mediante
            el diálogo con el acompañamiento de un conciliador autorizado. Los
            acuerdos alcanzados quedan consignados en un acta con plena validez
            jurídica, brindando seguridad para todas las partes y reduciendo el
            tiempo, los costos y el desgaste emocional que suele implicar un
            proceso judicial.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* ================= BLOQUE 1 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la conciliación familiar y cuándo puede utilizarse en
              Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación familiar es un mecanismo de resolución de
              conflictos mediante el cual dos o más integrantes de una familia
              buscan llegar a un acuerdo voluntario con la ayuda de un
              conciliador imparcial. Su finalidad es solucionar diferencias de
              manera rápida, respetando los derechos de cada persona y evitando,
              cuando sea posible, procesos judiciales prolongados.
            </p>

            <p className={styles.text}>
              Este procedimiento resulta especialmente útil cuando existen
              desacuerdos relacionados con hijos menores de edad, obligaciones
              alimentarias, régimen de visitas, separación de parejas,
              distribución de bienes, responsabilidades económicas o cualquier
              otra situación familiar susceptible de conciliación conforme a la
              legislación colombiana.
            </p>

            <p className={styles.text}>
              Además de ofrecer una solución legal, la conciliación promueve el
              diálogo y la construcción de acuerdos estables que permitan
              preservar las relaciones familiares, reducir conflictos futuros y
              proteger el bienestar de los menores cuando estos se encuentran
              involucrados.
            </p>
          </div>

          {/* ================= BLOQUE 2 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué conflictos familiares pueden resolverse mediante
              conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación familiar puede utilizarse para resolver una amplia
              variedad de conflictos derivados de las relaciones familiares.
              Dependiendo del caso concreto, las partes pueden construir
              soluciones adaptadas a sus necesidades, evitando largos procesos
              judiciales y alcanzando acuerdos con plena validez legal.
            </p>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal de los hijos.</li>
              <li>Custodia compartida.</li>
              <li>Fijación de cuota alimentaria.</li>
              <li>Incremento o disminución de cuota alimentaria.</li>
              <li>Régimen de visitas.</li>
              <li>Vacaciones y fechas especiales con los hijos.</li>
              <li>Permisos para viajes nacionales e internacionales.</li>
              <li>Separación de mutuo acuerdo.</li>
              <li>Liquidación de sociedad conyugal.</li>
              <li>Liquidación de sociedad patrimonial.</li>
              <li>Distribución de bienes.</li>
              <li>Acuerdos económicos entre exparejas.</li>
              <li>Cumplimiento de obligaciones familiares.</li>
              <li>Modificación de acuerdos previamente celebrados.</li>
            </ul>

            <p className={styles.text}>
              Cada caso presenta características particulares. Por ello, la
              conciliación permite que las soluciones sean construidas por las
              propias partes, favoreciendo acuerdos flexibles, equilibrados y
              ajustados a la realidad familiar.
            </p>
          </div>

          {/* ================= BLOQUE 3 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Casos más frecuentes de conciliación familiar en Colombia
            </h2>

            <p className={styles.text}>
              En la práctica, la mayoría de las solicitudes de conciliación
              familiar están relacionadas con situaciones que afectan la
              convivencia, la estabilidad económica de los hijos o el ejercicio
              de las responsabilidades parentales.
            </p>

            <p className={styles.text}>
              Uno de los asuntos más comunes corresponde a la definición de la
              cuota alimentaria, especialmente cuando uno de los padres
              considera que el monto debe modificarse debido a cambios en los
              ingresos, nuevas necesidades del menor o variaciones en las
              condiciones económicas de cualquiera de las partes.
            </p>

            <p className={styles.text}>
              También son frecuentes los conflictos relacionados con el régimen
              de visitas, el tiempo de convivencia con los hijos, la custodia,
              la autorización para viajes, la educación, la atención médica, la
              distribución de gastos extraordinarios y el cumplimiento de
              acuerdos previamente celebrados.
            </p>

            <p className={styles.text}>
              En parejas que deciden finalizar su relación, la conciliación
              también facilita acuerdos relacionados con la separación de mutuo
              acuerdo, la liquidación de bienes, la sociedad conyugal o la
              sociedad patrimonial, permitiendo que ambas partes construyan una
              solución jurídica sin necesidad de acudir inmediatamente a un
              juez.
            </p>
          </div>

          {/* ================= TIPOS DE CONFLICTOS FAMILIARES ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Tipos de conflictos familiares que pueden resolverse mediante
              conciliación en Colombia
            </h2>

            <p className={styles.text}>
              La conciliación familiar permite resolver una amplia variedad de
              conflictos surgidos entre padres, madres, cónyuges, ex parejas,
              compañeros permanentes y demás integrantes del núcleo familiar.
              Este mecanismo busca que las partes construyan acuerdos
              voluntarios, evitando procesos judiciales largos y promoviendo
              soluciones que beneficien especialmente a los niños, niñas y
              adolescentes cuando existen menores de edad involucrados.
            </p>

            <p className={styles.text}>
              Dependiendo del caso, durante la audiencia de conciliación es
              posible negociar aspectos económicos, personales y patrimoniales,
              siempre que la ley permita su conciliación.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Custodia y cuidado personal
                </h3>

                <p className={styles.cardText}>
                  Los padres pueden acordar quién ejercerá el cuidado personal
                  del menor, la forma en que compartirán responsabilidades y las
                  condiciones para garantizar su bienestar integral.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Cuota alimentaria</h3>

                <p className={styles.cardText}>
                  Es posible fijar, aumentar, disminuir o modificar la cuota
                  alimentaria teniendo en cuenta las necesidades del
                  beneficiario y la capacidad económica de quien debe asumirla.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Régimen de visitas</h3>

                <p className={styles.cardText}>
                  Las partes pueden establecer horarios, fechas especiales,
                  vacaciones, comunicación virtual y demás aspectos relacionados
                  con el derecho de visitas.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Separación de pareja</h3>

                <p className={styles.cardText}>
                  La conciliación facilita acuerdos relacionados con la
                  separación de hecho, responsabilidades económicas y
                  organización familiar después de finalizar la convivencia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Liquidación de bienes</h3>

                <p className={styles.cardText}>
                  En determinados casos las partes pueden llegar a acuerdos
                  sobre la distribución de bienes, obligaciones económicas y
                  patrimonio común, evitando conflictos posteriores.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos entre padres</h3>

                <p className={styles.cardText}>
                  También pueden establecer compromisos relacionados con
                  educación, salud, recreación, transporte, gastos
                  extraordinarios y demás responsabilidades frente a los hijos.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CUÁNDO ES RECOMENDABLE LA CONCILIACIÓN ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo es recomendable acudir a una conciliación familiar en
              Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación familiar es una excelente alternativa cuando las
              partes desean resolver sus diferencias de manera pacífica, rápida
              y con respaldo jurídico, evitando que el conflicto continúe
              escalando hasta convertirse en un proceso judicial largo y
              costoso. Este mecanismo permite que los propios involucrados
              construyan soluciones adaptadas a las necesidades de su grupo
              familiar, con la orientación de un conciliador imparcial.
            </p>

            <p className={styles.text}>
              En muchos casos, acudir oportunamente a una audiencia de
              conciliación evita el deterioro de las relaciones familiares y
              facilita acuerdos que protegen el bienestar de los hijos, la
              estabilidad económica y el cumplimiento de las obligaciones
              adquiridas por cada una de las partes.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Cuando existen desacuerdos sobre los hijos
                </h3>

                <p className={styles.cardText}>
                  Si los padres no logran ponerse de acuerdo sobre custodia,
                  cuidado personal, régimen de visitas o decisiones importantes
                  relacionadas con los menores, la conciliación puede ayudar a
                  construir soluciones que beneficien principalmente a los niños
                  y adolescentes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Cuando hay conflictos por la cuota alimentaria
                </h3>

                <p className={styles.cardText}>
                  La conciliación permite establecer, aumentar, disminuir o
                  modificar la cuota alimentaria cuando cambian las condiciones
                  económicas o las necesidades del beneficiario.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Antes de iniciar una demanda judicial
                </h3>

                <p className={styles.cardText}>
                  En numerosos asuntos de familia, intentar una conciliación
                  puede ser un requisito previo antes de acudir ante un juez,
                  además de representar una oportunidad para resolver el
                  conflicto de forma más rápida.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Cuando las partes desean mantener una buena relación
                </h3>

                <p className={styles.cardText}>
                  La conciliación favorece el diálogo entre padres, madres,
                  exparejas y demás familiares, permitiendo conservar una
                  relación respetuosa que facilite futuros acuerdos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Cuando han cambiado las circunstancias familiares
                </h3>

                <p className={styles.cardText}>
                  Cambios en los ingresos, lugar de residencia, necesidades de
                  los hijos o condiciones laborales pueden hacer necesario
                  actualizar acuerdos previamente establecidos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Cuando se busca una solución más rápida
                </h3>

                <p className={styles.cardText}>
                  En comparación con un proceso judicial, la conciliación suele
                  permitir alcanzar acuerdos en mucho menos tiempo, reduciendo
                  costos económicos y desgaste emocional para toda la familia.
                </p>
              </div>
            </div>
          </div>

          {/* ================= BENEFICIOS ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de la conciliación familiar antes de iniciar una
              demanda
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Protege el bienestar de los hijos
                </h3>

                <p className={styles.cardText}>
                  Favorece acuerdos construidos pensando en el interés superior
                  de los menores y en la estabilidad familiar.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Evita procesos judiciales largos
                </h3>

                <p className={styles.cardText}>
                  Permite resolver muchos conflictos sin acudir inmediatamente a
                  un proceso ante un juez de familia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Acuerdos con plena validez legal
                </h3>

                <p className={styles.cardText}>
                  El acta de conciliación constituye un documento con efectos
                  jurídicos y obligatorio cumplimiento para las partes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Reduce costos y tiempo</h3>

                <p className={styles.cardText}>
                  La conciliación suele representar una alternativa más rápida y
                  económica que un litigio judicial prolongado.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Favorece el diálogo</h3>

                <p className={styles.cardText}>
                  Promueve la comunicación entre las partes y disminuye el nivel
                  de conflicto, especialmente cuando existen hijos menores de
                  edad.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Soluciones adaptadas a cada familia
                </h3>

                <p className={styles.cardText}>
                  Las partes pueden construir acuerdos ajustados a su realidad
                  económica, familiar y personal, siempre dentro del marco
                  legal.
                </p>
              </div>
            </div>
          </div>

          {/* ================= DOCUMENTOS ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos necesarios para una conciliación familiar en Colombia
            </h2>

            <p className={styles.text}>
              Contar con la documentación adecuada facilita el desarrollo de la
              audiencia de conciliación y permite que las partes sustenten de
              mejor manera sus pretensiones. Aunque los documentos pueden variar
              según el tipo de conflicto, es recomendable asistir con toda la
              información disponible para que el conciliador conozca el contexto
              del caso.
            </p>

            <p className={styles.text}>
              Entre más completa sea la documentación presentada, mayores serán
              las posibilidades de construir acuerdos claros, precisos y
              ajustados a la realidad familiar.
            </p>

            <ul className={styles.list}>
              <li>Cédula de ciudadanía de las partes.</li>
              <li>Registro civil de nacimiento de los hijos.</li>
              <li>Registro civil de matrimonio cuando corresponda.</li>
              <li>
                Documentos que acrediten la unión marital de hecho si existen.
              </li>
              <li>
                Soportes de ingresos, desprendibles de nómina o certificados
                laborales.
              </li>
              <li>Recibos y soportes de gastos relacionados con los hijos.</li>
              <li>Acuerdos anteriores o actas de conciliación previas.</li>
              <li>Sentencias judiciales, si existen.</li>
              <li>Pruebas relacionadas con el conflicto familiar.</li>
              <li>
                Cualquier otro documento que facilite la construcción del
                acuerdo.
              </li>
            </ul>

            <p className={styles.text}>
              Presentar esta información durante la audiencia permite analizar
              la situación de manera objetiva y facilita que las partes lleguen
              a acuerdos equilibrados, sostenibles y con plena validez jurídica.
            </p>
          </div>

          {/* ================= BLOQUE 5 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Custodia de hijos mediante conciliación familiar
            </h2>

            <p className={styles.text}>
              La custodia o cuidado personal de los hijos es uno de los asuntos
              familiares que con mayor frecuencia se resuelve mediante
              conciliación. Cuando los padres deciden vivir separados, resulta
              necesario establecer quién ejercerá el cuidado cotidiano del menor
              y cómo participará cada uno en las decisiones relacionadas con su
              desarrollo, educación, salud y bienestar.
            </p>

            <p className={styles.text}>
              Durante la audiencia de conciliación es posible acordar la
              custodia exclusiva o establecer mecanismos de custodia compartida,
              siempre que las condiciones familiares lo permitan y que el
              acuerdo proteja el interés superior del niño, niña o adolescente.
            </p>

            <p className={styles.text}>
              También pueden definirse responsabilidades relacionadas con la
              educación, atención médica, actividades extracurriculares,
              comunicación permanente y cualquier otro aspecto que contribuya a
              brindar estabilidad al menor.
            </p>
          </div>

          {/* ================= BLOQUE 6 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Conciliación para fijar, modificar o revisar la cuota alimentaria
            </h2>

            <p className={styles.text}>
              La cuota alimentaria comprende mucho más que el suministro de
              alimentos. Incluye los recursos necesarios para garantizar el
              adecuado desarrollo del menor, como educación, salud, vivienda,
              vestuario, transporte, recreación y demás gastos indispensables
              según las circunstancias particulares de cada familia.
            </p>

            <p className={styles.text}>
              Mediante conciliación es posible establecer una cuota alimentaria
              por primera vez, modificar el valor previamente acordado cuando
              cambian las condiciones económicas de alguno de los padres o
              revisar la forma en que serán asumidos los gastos extraordinarios.
            </p>

            <p className={styles.text}>
              Este mecanismo también permite construir acuerdos respecto a las
              fechas de pago, consignaciones, actualización del valor de la
              cuota, distribución de gastos médicos o educativos y cualquier
              otra obligación económica relacionada con los hijos.
            </p>
          </div>

          {/* ================= BLOQUE 7 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Régimen de visitas y comunicación con los hijos
            </h2>

            <p className={styles.text}>
              Cuando los padres no conviven, resulta fundamental definir un
              régimen de visitas claro que permita mantener el vínculo afectivo
              entre los hijos y ambos padres. La conciliación facilita la
              construcción de acuerdos flexibles que se adapten a las
              necesidades familiares y reduzcan futuros conflictos.
            </p>

            <p className={styles.text}>
              Durante la audiencia pueden establecerse horarios de visitas,
              fines de semana compartidos, vacaciones escolares, celebraciones
              especiales, comunicación telefónica o virtual, transporte del
              menor y demás aspectos necesarios para garantizar una relación
              estable entre padres e hijos.
            </p>

            <p className={styles.text}>
              Un acuerdo claro disminuye los incumplimientos y brinda mayor
              seguridad jurídica para ambas partes.
            </p>
          </div>

          {/* ================= BLOQUE 8 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Separación, liquidación de bienes y acuerdos patrimoniales
            </h2>

            <p className={styles.text}>
              La conciliación también constituye una alternativa para las
              parejas que desean finalizar su relación de manera organizada,
              procurando alcanzar acuerdos sobre la distribución de bienes,
              obligaciones económicas y demás aspectos patrimoniales derivados
              de la convivencia.
            </p>

            <p className={styles.text}>
              Dependiendo de cada caso, las partes pueden negociar la
              liquidación de la sociedad conyugal o de la sociedad patrimonial,
              la asignación de determinados bienes, la distribución de deudas y
              otros compromisos económicos, evitando conflictos posteriores y
              reduciendo el riesgo de un proceso judicial prolongado.
            </p>
          </div>

          {/* ================= BLOQUE 9 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo funciona una audiencia de conciliación familiar?
            </h2>

            <p className={styles.text}>
              El procedimiento inicia con la presentación de una solicitud ante
              un Centro de Conciliación autorizado. Posteriormente se cita a las
              partes para participar en una audiencia dirigida por un
              conciliador imparcial.
            </p>

            <p className={styles.text}>
              Durante la audiencia cada persona expone su posición, presenta los
              documentos que considere necesarios y participa en la búsqueda de
              soluciones que beneficien a todos los involucrados.
            </p>

            <p className={styles.text}>
              El conciliador facilita el diálogo, identifica los puntos de
              acuerdo y orienta a las partes para construir soluciones que
              respeten la legislación colombiana y garanticen la protección de
              los derechos de los menores cuando estos hacen parte del
              conflicto.
            </p>

            <p className={styles.text}>
              Si las partes alcanzan un acuerdo, este queda consignado en un
              acta de conciliación con plena validez jurídica.
            </p>
          </div>

          {/* ================= BLOQUE 10 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos recomendados para una conciliación familiar
            </h2>

            <p className={styles.text}>
              Preparar adecuadamente la documentación facilita el desarrollo de
              la audiencia y permite que las partes cuenten con la información
              necesaria para construir acuerdos claros y completos.
            </p>

            <ul className={styles.list}>
              <li>Documento de identidad.</li>
              <li>Registro civil de nacimiento de los hijos.</li>
              <li>Registro civil de matrimonio cuando exista.</li>
              <li>Documentos relacionados con unión marital de hecho.</li>
              <li>Soportes de ingresos.</li>
              <li>Comprobantes de gastos del menor.</li>
              <li>Certificados laborales.</li>
              <li>Estados de cuenta cuando sean relevantes.</li>
              <li>Escrituras o documentos relacionados con bienes.</li>
              <li>Acuerdos familiares previamente celebrados.</li>
            </ul>

            <p className={styles.text}>
              Dependiendo del asunto objeto de conciliación, pueden requerirse
              otros documentos adicionales que permitan analizar la situación de
              manera integral.
            </p>
          </div>

          {/* ================= BLOQUE 11 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué ocurre si una de las partes incumple el acuerdo?
            </h2>

            <p className={styles.text}>
              Los acuerdos logrados mediante conciliación producen efectos
              jurídicos y son de obligatorio cumplimiento para quienes los
              suscriben. Si alguna de las partes incumple las obligaciones
              pactadas, la otra podrá utilizar el acta de conciliación para
              ejercer las acciones legales correspondientes.
            </p>

            <p className={styles.text}>
              Por esta razón resulta fundamental que los compromisos adquiridos
              sean claros, precisos y realistas, de manera que puedan cumplirse
              sin generar nuevos conflictos familiares.
            </p>
          </div>

          {/* ================= BLOQUE 12 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si no se logra un acuerdo durante la conciliación?
            </h2>

            <p className={styles.text}>
              No todas las audiencias concluyen con un acuerdo. Cuando las
              partes mantienen diferencias que no pueden resolverse mediante el
              diálogo, el procedimiento finaliza dejando constancia del intento
              de conciliación realizado.
            </p>

            <p className={styles.text}>
              En estos casos, cada interesado conserva la posibilidad de acudir
              a las autoridades judiciales competentes para que el conflicto sea
              resuelto mediante el proceso previsto por la ley.
            </p>

            <p className={styles.text}>
              Sin embargo, incluso cuando no se alcanza un acuerdo definitivo,
              la conciliación suele permitir identificar puntos de consenso que
              facilitan futuras negociaciones y reducen la intensidad del
              conflicto.
            </p>
          </div>
          {/* ================= BLOQUE 13 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué acudir a un Centro de Conciliación Familiar?
            </h2>

            <p className={styles.text}>
              Acudir a un Centro de Conciliación autorizado permite que los
              conflictos familiares sean tratados con imparcialidad, respeto y
              dentro del marco legal colombiano. El objetivo principal es
              facilitar el diálogo entre las partes para construir soluciones
              voluntarias que beneficien a todos los integrantes de la familia,
              especialmente cuando existen hijos menores de edad.
            </p>

            <p className={styles.text}>
              A diferencia de un proceso judicial, donde la decisión es tomada
              por un juez, la conciliación permite que sean las propias partes
              quienes construyan los acuerdos con el acompañamiento de un
              conciliador. Esto favorece un mayor compromiso con el
              cumplimiento, reduce el nivel de confrontación y facilita la
              conservación de relaciones familiares cuando ello resulta posible.
            </p>

            <p className={styles.text}>
              Además, los acuerdos alcanzados pueden adaptarse a la realidad
              económica y familiar de cada caso, brindando soluciones prácticas
              que muchas veces no podrían obtenerse mediante una decisión
              judicial estandarizada.
            </p>
          </div>

          {/* ================= BLOQUE 14 ================= */}

          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo es recomendable solicitar una conciliación familiar?
            </h2>

            <p className={styles.text}>
              La conciliación resulta recomendable desde el momento en que surge
              un desacuerdo que pueda afectar la estabilidad familiar o el
              bienestar de los hijos. No es necesario esperar a que el conflicto
              aumente o que la relación entre las partes se deteriore por
              completo.
            </p>

            <ul className={styles.list}>
              <li>Cuando existen desacuerdos sobre la custodia.</li>
              <li>Si alguno de los padres incumple la cuota alimentaria.</li>
              <li>Cuando es necesario modificar el régimen de visitas.</li>
              <li>Antes de iniciar un proceso judicial de familia.</li>
              <li>Cuando se desea realizar una separación de mutuo acuerdo.</li>
              <li>Si existen diferencias sobre bienes comunes.</li>
              <li>
                Cuando cambian las condiciones económicas de alguna de las
                partes.
              </li>
              <li>Si se requiere actualizar acuerdos familiares anteriores.</li>
            </ul>

            <p className={styles.text}>
              Buscar una solución temprana suele facilitar acuerdos más
              estables, disminuir el desgaste emocional y evitar que el
              conflicto continúe escalando.
            </p>
          </div>

          {/* ================= FAQ ================= */}

          <div className={`${styles.block} ${styles.faqSection}`}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre conciliación familiar en Colombia
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación familiar tiene validez legal?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acuerdo alcanzado queda consignado en un acta de
                  conciliación que produce efectos jurídicos y es obligatoria
                  para las partes que la suscriben.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede conciliar la custodia de los hijos?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Dependiendo de las circunstancias familiares, los padres
                  pueden construir acuerdos relacionados con el cuidado personal
                  de los hijos, siempre respetando el interés superior del
                  menor.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La cuota alimentaria puede modificarse mediante conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando cambian las condiciones económicas o las
                  necesidades del menor, las partes pueden solicitar una nueva
                  conciliación para revisar el valor de la cuota.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es posible modificar el régimen de visitas?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Siempre que existan razones justificadas y ambas partes
                  participen en la conciliación, es posible acordar nuevos
                  horarios, vacaciones, celebraciones especiales y demás
                  aspectos relacionados con las visitas.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué sucede si la otra parte no asiste a la audiencia?
                </h3>

                <p className={styles.faqAnswer}>
                  La inasistencia produce los efectos previstos por la ley y
                  podrá tener consecuencias dependiendo del asunto objeto de la
                  conciliación.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué documentos debo presentar?
                </h3>

                <p className={styles.faqAnswer}>
                  Dependerá del conflicto, aunque normalmente se presentan
                  documentos de identidad, registros civiles, soportes de
                  ingresos, gastos, acuerdos anteriores y demás pruebas
                  relacionadas con el caso.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita una demanda judicial?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. Cuando las partes alcanzan un acuerdo ya
                  no resulta necesario acudir a un proceso judicial respecto del
                  asunto conciliado.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Puede modificarse un acuerdo firmado anteriormente?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Si cambian las circunstancias familiares o económicas, las
                  partes pueden acudir nuevamente a conciliación para revisar el
                  contenido del acuerdo.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede conciliar si nunca existió matrimonio?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. La conciliación también puede utilizarse por padres que
                  nunca contrajeron matrimonio o por personas que convivieron en
                  unión marital de hecho.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si incumplen el acta de conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  El acta puede hacerse valer mediante los mecanismos legales
                  previstos por la legislación colombiana para exigir el
                  cumplimiento de las obligaciones pactadas.
                </p>
              </div>
            </div>
          </div>
          <CTASection />
        </div>
      </section>
    </>
  );
}
