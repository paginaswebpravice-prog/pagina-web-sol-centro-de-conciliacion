"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function GastosExtraordinariosHijosContent() {
  return (
    <>
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
              Conciliación familiar y cuota alimentaria en Colombia
            </span>

            <h1 className={styles.title}>
              Gastos extraordinarios de los hijos en Colombia: cuáles son, quién
              debe pagarlos y cómo conciliarlos
            </h1>

            <p className={styles.heroText}>
              Cuando los padres están separados o atraviesan un proceso de
              divorcio, uno de los conflictos más frecuentes consiste en
              determinar quién debe asumir los gastos extraordinarios de los
              hijos. Aunque exista una cuota alimentaria fijada por acuerdo o
              decisión judicial, es común que aparezcan gastos inesperados
              relacionados con salud, educación, actividades extracurriculares,
              tecnología o situaciones imprevistas que generan dudas entre los
              padres.
            </p>

            <p className={styles.heroText}>
              En Colombia estos gastos pueden ser conciliados para evitar
              discusiones, procesos judiciales y retrasos que terminen afectando
              el bienestar del menor. Mediante una audiencia de conciliación es
              posible acordar qué gastos serán considerados extraordinarios,
              cómo se repartirán, qué porcentaje asumirá cada padre y cuál será
              el procedimiento para autorizarlos y pagarlos.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás qué son los gastos extraordinarios,
              ejemplos, diferencias con la cuota alimentaria, cómo pueden
              distribuirse y qué ocurre cuando uno de los padres incumple con
              las obligaciones acordadas.
            </p>
          </div>

          {/* CUAL ES LA DIFERENCIA ENTRE LA CUOTA ALIMENTARIA Y LOS GASTOS EXTRAORDINARIOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuál es la diferencia entre la cuota alimentaria y los gastos
              extraordinarios?
            </h2>

            <p className={styles.paragraph}>
              Una de las dudas más comunes entre los padres consiste en saber si
              todos los gastos de un hijo ya están cubiertos por la cuota
              alimentaria. La respuesta depende del tipo de gasto y de los
              acuerdos existentes entre las partes.
            </p>

            <p className={styles.paragraph}>
              La cuota alimentaria normalmente cubre las necesidades permanentes
              del menor, como alimentación, vivienda, transporte, educación
              básica, vestido y otros gastos ordinarios que hacen parte de la
              vida cotidiana.
            </p>

            <p className={styles.paragraph}>
              En cambio, los gastos extraordinarios corresponden a necesidades
              que no se presentan regularmente o cuyo valor resulta
              considerablemente superior al previsto dentro de la cuota
              alimentaria. Precisamente por esa razón es recomendable establecer
              previamente la forma en que serán asumidos por ambos padres.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Definir desde el inicio cuáles gastos hacen parte de la cuota
                alimentaria y cuáles serán considerados extraordinarios evita
                malentendidos y reduce significativamente los conflictos
                familiares.
              </p>
            </div>
          </div>

          {/* QUE SON LOS GASTOS EXTRAORDINARIOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué son los gastos extraordinarios?
            </h2>

            <p className={styles.paragraph}>
              Son aquellos gastos que normalmente no están incluidos dentro de
              la cuota alimentaria ordinaria y que surgen por circunstancias
              especiales o necesidades adicionales del menor.
            </p>

            <p className={styles.paragraph}>
              Debido a que pueden variar con el tiempo, es recomendable definir
              previamente cómo serán asumidos por ambos padres.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Establecer reglas claras sobre gastos extraordinarios ayuda a
                prevenir conflictos y garantiza una respuesta rápida ante las
                necesidades de los hijos.
              </p>
            </div>
          </div>

          {/* EJEMPLOS DE GASTOS EXTRAORDINARIOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ejemplos de gastos extraordinarios
            </h2>

            <ul className={styles.list}>
              <li>Tratamientos médicos no cubiertos.</li>
              <li>Medicamentos especiales.</li>
              <li>Procedimientos odontológicos.</li>
              <li>Clases extracurriculares.</li>
              <li>Viajes académicos.</li>
              <li>Uniformes especiales.</li>
              <li>Equipos tecnológicos para estudio.</li>
              <li>Emergencias relacionadas con salud.</li>
            </ul>
          </div>

          {/* QUIEN DEBE PAGAR LOS GASTOS EXTRAORDINARIOS DE LOS HIJOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Quién debe pagar los gastos extraordinarios de los hijos?
            </h2>

            <p className={styles.paragraph}>
              La legislación colombiana no establece un porcentaje fijo para
              distribuir los gastos extraordinarios. En cada caso debe
              analizarse la capacidad económica de los padres, las necesidades
              del menor y los acuerdos existentes.
            </p>

            <p className={styles.paragraph}>
              En muchas conciliaciones familiares las partes acuerdan asumir
              estos gastos en partes iguales. Sin embargo, también es posible
              establecer porcentajes diferentes cuando uno de los padres tiene
              mayores ingresos o cuando las circunstancias familiares así lo
              justifican.
            </p>

            <p className={styles.paragraph}>
              Lo más importante es que el acuerdo sea claro y establezca cómo se
              autorizarán los gastos, qué documentos deberán presentarse y
              cuáles serán los plazos para realizar los respectivos pagos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué es recomendable acudir a una conciliación familiar?
            </h2>

            <p className={styles.paragraph}>
              La conciliación permite que los padres construyan acuerdos
              adaptados a las necesidades reales de sus hijos, evitando largos
              procesos judiciales y reduciendo el desgaste emocional propio de
              los conflictos familiares.
            </p>

            <p className={styles.paragraph}>
              Además de brindar seguridad jurídica, el acta de conciliación
              establece reglas claras para afrontar futuros gastos
              extraordinarios, disminuyendo las posibilidades de nuevos
              desacuerdos y garantizando una mejor protección del interés
              superior del menor.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Un acuerdo claro beneficia a ambas partes, pero especialmente a
                los hijos, quienes podrán recibir atención médica, educación y
                demás necesidades extraordinarias sin retrasos derivados de
                conflictos entre sus padres.
              </p>
            </div>
          </div>

          {/* COMO SE DEMUESTRA UN GASTO EXTRAORDINARIO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se demuestra un gasto extraordinario?
            </h2>

            <p className={styles.paragraph}>
              Siempre es recomendable conservar los documentos que permitan
              demostrar la existencia del gasto. Facturas, órdenes médicas,
              fórmulas, recibos, comprobantes bancarios, matrículas,
              cotizaciones o certificados pueden ser importantes si
              posteriormente surge una discusión sobre el pago.
            </p>

            <p className={styles.paragraph}>
              En muchos acuerdos conciliatorios también se establece el plazo
              dentro del cual uno de los padres debe informar el gasto al otro y
              el tiempo máximo para efectuar el correspondiente reembolso.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Mientras más claro sea el soporte documental del gasto, más
                sencillo será cumplir el acuerdo y evitar nuevos conflictos
                familiares.
              </p>
            </div>
          </div>

          {/* GASTOS QUE GENERAN MÁS CONFLICTOS ENTRE LOS PADRES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Gastos que normalmente generan más conflictos entre los padres
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Tratamientos médicos especializados</h3>

                <p>
                  Cirugías, terapias, ortodoncia, medicamentos de alto costo o
                  tratamientos no cubiertos por el sistema de salud suelen
                  generar desacuerdos sobre la distribución de los pagos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Educación</h3>

                <p>
                  Matrículas, intercambios académicos, cursos complementarios,
                  computadores y otros elementos tecnológicos suelen requerir
                  acuerdos adicionales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Actividades deportivas y culturales</h3>

                <p>
                  Escuelas deportivas, clases de música, idiomas, danza o
                  competencias nacionales pueden implicar costos importantes que
                  conviene definir con anticipación.
                </p>
              </div>
            </div>
          </div>

          {/* PORQUÉ CONCILIARLOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Por qué conciliarlos?</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor claridad</h3>

                <p>
                  Permite establecer quién asume cada gasto y en qué proporción.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menos conflictos</h3>

                <p>
                  Reduce discusiones futuras entre los padres respecto a pagos
                  inesperados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  El acuerdo conciliatorio tiene respaldo legal y puede hacerse
                  cumplir.
                </p>
              </div>
            </div>
          </div>

          {/* ASPECTOS QUE PUEDE INCLUIRSE EN EL ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Aspectos que pueden incluirse en el acuerdo
            </h2>

            <ul className={styles.list}>
              <li>Porcentaje que aporta cada padre.</li>
              <li>Límites económicos para ciertos gastos.</li>
              <li>Procedimiento para autorizar gastos.</li>
              <li>Formas de pago y reembolso.</li>
              <li>Plazos para reportar nuevos gastos.</li>
              <li>Mecanismos de comunicación entre los padres.</li>
            </ul>
          </div>

          {/* ERRORES MÁS COMUNES AL ACORDAR GASTOS EXTRAORDINARIOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores más comunes al acordar gastos extraordinarios
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>No definir qué gastos están incluidos</h3>

                <p>
                  Muchas conciliaciones fracasan porque únicamente mencionan
                  "gastos extraordinarios" sin especificar cuáles corresponden a
                  esa categoría.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No establecer porcentajes</h3>

                <p>
                  Cuando no se indica cuánto debe pagar cada padre,
                  posteriormente pueden aparecer discusiones sobre la
                  distribución de los costos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No fijar plazos</h3>

                <p>
                  Es recomendable indicar cuánto tiempo existe para informar un
                  gasto, presentar soportes y realizar el pago correspondiente.
                </p>
              </div>
            </div>
          </div>

          {/* ¿QUE SUCEDE SI UNO DE LOS PADRES NO PAGA LOS GASTOS EXTRAORDINARIOS? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si uno de los padres no paga los gastos
              extraordinarios?
            </h2>

            <p className={styles.paragraph}>
              Cuando existe un acta de conciliación válida y una de las partes
              incumple las obligaciones asumidas, el otro padre puede iniciar
              las actuaciones legales correspondientes para exigir el
              cumplimiento del acuerdo.
            </p>

            <p className={styles.paragraph}>
              Por esta razón es tan importante que la conciliación describa
              claramente cuáles gastos serán compartidos, cómo deberán
              demostrarse y cuáles serán los plazos para efectuar los pagos.
            </p>

            <p className={styles.paragraph}>
              Un acuerdo bien redactado brinda mayor seguridad jurídica y reduce
              el riesgo de interpretaciones diferentes sobre las obligaciones
              asumidas.
            </p>
          </div>

          {/* PASO A PASO PARA CONCILIAR GASTOS EXTRAORDINARIOS DE LOS HIJOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Paso a paso para conciliar gastos extraordinarios de los hijos
            </h2>

            <ul className={styles.list}>
              <li>Solicitar la audiencia de conciliación.</li>

              <li>Identificar los gastos que generan el conflicto.</li>

              <li>Reunir documentos que respalden cada gasto.</li>

              <li>Analizar la capacidad económica de ambos padres.</li>

              <li>Negociar porcentajes de participación.</li>

              <li>Definir la forma de pago.</li>

              <li>Establecer plazos para informar nuevos gastos.</li>

              <li>Firmar el acta de conciliación.</li>

              <li>Conservar copia del acuerdo para futuras consultas.</li>
            </ul>
          </div>

          {/* ¿QUE SUCEDE SI NO EXISTE ACUERDO? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no existe acuerdo?
            </h2>

            <p className={styles.paragraph}>
              La ausencia de reglas claras puede generar conflictos frecuentes
              respecto a quién debe asumir determinados costos relacionados con
              los hijos.
            </p>

            <p className={styles.paragraph}>
              Por esta razón, la conciliación constituye una alternativa
              efectiva para definir responsabilidades y proteger los intereses
              de los menores.
            </p>
          </div>

          {/* ¿QUE PUEDE ESTABLECER UN ACTA DE CONCILIACIÓN SOBRE GASTOS EXTRAORDINARIOS? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué puede establecer un acta de conciliación sobre gastos
              extraordinarios?
            </h2>

            <p className={styles.paragraph}>
              Una conciliación familiar correctamente elaborada no solo
              establece quién paga los gastos extraordinarios, sino también el
              procedimiento para autorizarlos y verificar su pago.
            </p>

            <ul className={styles.list}>
              <li>Porcentaje que corresponde a cada padre.</li>

              <li>Tipos de gastos considerados extraordinarios.</li>

              <li>Plazos para informar nuevos gastos.</li>

              <li>Documentos necesarios para solicitar reembolsos.</li>

              <li>Forma de pago.</li>

              <li>Cuenta bancaria para consignaciones.</li>

              <li>Procedimiento para aprobar gastos urgentes.</li>

              <li>Consecuencias frente al incumplimiento del acuerdo.</li>
            </ul>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Pueden modificarse los acuerdos?</h3>

                <p>
                  Sí. Los acuerdos pueden actualizarse cuando cambian las
                  necesidades de los hijos o la situación económica de los
                  padres.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Los gastos médicos son extraordinarios?</h3>

                <p>
                  Dependiendo del caso, algunos tratamientos especiales pueden
                  considerarse gastos extraordinarios.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La conciliación evita un proceso judicial?</h3>

                <p>
                  En muchos casos sí, ya que permite resolver diferencias de
                  manera voluntaria y rápida.
                </p>
              </div>
            </div>
          </div>

          {/* PORQUE ES RECOMENDABLE ACUDIR A UNA CONCILIACIÓN FAMILIAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué es recomendable acudir a una conciliación familiar?
            </h2>

            <p className={styles.paragraph}>
              La conciliación permite que los padres construyan acuerdos
              adaptados a las necesidades reales de sus hijos, evitando largos
              procesos judiciales y reduciendo el desgaste emocional propio de
              los conflictos familiares.
            </p>

            <p className={styles.paragraph}>
              Además de brindar seguridad jurídica, el acta de conciliación
              establece reglas claras para afrontar futuros gastos
              extraordinarios, disminuyendo las posibilidades de nuevos
              desacuerdos y garantizando una mejor protección del interés
              superior del menor.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Un acuerdo claro beneficia a ambas partes, pero especialmente a
                los hijos, quienes podrán recibir atención médica, educación y
                demás necesidades extraordinarias sin retrasos derivados de
                conflictos entre sus padres.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas acordar gastos extraordinarios de tus hijos?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, cuota alimentaria,
              custodia, visitas y acuerdos relacionados con hijos menores en
              Bogotá y Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
