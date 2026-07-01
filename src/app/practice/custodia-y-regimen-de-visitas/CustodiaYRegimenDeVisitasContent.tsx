"use client";

import styles from "../PracticeLandingPage.module.css";
import { motion } from "framer-motion";
import CTASection from "../../components/CTAsection";

export default function CustodiaYRegimenDeVisitasContent() {
  return (
    <>
      <section className={styles.section}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.subtitle}>
            CONCILIACIÓN DE CUSTODIA Y RÉGIMEN DE VISITAS EN COLOMBIA
          </span>

          <h1 className={styles.title}>
            Custodia y régimen de visitas en Colombia: conciliación para
            proteger los derechos de sus hijos sin acudir a juicio
          </h1>

          <p className={styles.description}>
            La conciliación en custodia y régimen de visitas permite que los
            padres lleguen a acuerdos legales sobre el cuidado, convivencia y
            bienestar de sus hijos en Bogotá y Colombia, evitando procesos
            judiciales largos y priorizando siempre el interés superior del
            menor. Este mecanismo facilita soluciones claras, organizadas y con
            plena validez jurídica para proteger la estabilidad emocional y
            familiar de los niños.
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className={styles.content}>
          {/* BLOQUE 1 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué es la custodia de un hijo y cómo funciona el régimen de
              visitas en Colombia?
            </h2>

            <p className={styles.text}>
              La custodia es el derecho y deber de cuidar, educar, acompañar y
              convivir con un hijo menor de edad. Incluye decisiones
              relacionadas con la formación, bienestar, salud, educación y
              desarrollo integral del menor.
            </p>

            <p className={styles.text}>
              Por otro lado, el régimen de visitas regula el tiempo, la forma y
              las condiciones en que el padre o madre que no tiene la custodia
              principal puede compartir con el menor, garantizando el vínculo
              familiar y emocional.
            </p>

            <p className={styles.text}>
              En Colombia, estos acuerdos pueden definirse mediante conciliación
              sin necesidad de acudir inmediatamente a un juez de familia. La
              conciliación permite construir acuerdos organizados y adaptados a
              las necesidades específicas de cada familia.
            </p>
          </div>

          {/* BLOQUE 2 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué acuerdos sobre custodia y régimen de visitas pueden lograrse
              mediante conciliación?
            </h2>

            <p className={styles.text}>
              La conciliación permite definir de forma clara múltiples aspectos
              relacionados con la crianza y convivencia de los hijos, evitando
              conflictos futuros y generando mayor estabilidad familiar.
            </p>

            <ul className={styles.list}>
              <li>Custodia compartida o custodia exclusiva.</li>
              <li>Régimen de visitas entre padres e hijos.</li>
              <li>Horarios y días de convivencia.</li>
              <li>Vacaciones, fechas especiales y celebraciones.</li>
              <li>Responsabilidades sobre educación y salud.</li>
              <li>Acuerdos sobre transporte y entrega del menor.</li>
              <li>Comunicación entre padres e hijos.</li>
              <li>Normas de convivencia y seguimiento.</li>
              <li>Distribución de gastos relacionados con el menor.</li>
              <li>Modificaciones futuras según necesidades familiares.</li>
            </ul>

            <p className={styles.text}>
              Un acuerdo claro y detallado ayuda a evitar discusiones
              posteriores y facilita el cumplimiento de las obligaciones de cada
              padre.
            </p>
          </div>

          {/* BLOQUE 3 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Beneficios de resolver la custodia y el régimen de visitas
              mediante conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Protege al menor</h3>
                <p className={styles.cardText}>
                  Prioriza la estabilidad emocional, familiar y el bienestar del
                  niño o adolescente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Evita procesos judiciales</h3>
                <p className={styles.cardText}>
                  Reduce conflictos legales largos, costosos y emocionalmente
                  desgastantes.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos más rápidos</h3>
                <p className={styles.cardText}>
                  Permite soluciones en menor tiempo frente a un proceso
                  judicial de familia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Validez legal</h3>
                <p className={styles.cardText}>
                  El acta de conciliación tiene efectos jurídicos y puede
                  exigirse legalmente.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Menor conflicto entre padres
                </h3>
                <p className={styles.cardText}>
                  Facilita el diálogo y disminuye tensiones familiares.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos personalizados</h3>
                <p className={styles.cardText}>
                  Permite construir soluciones adaptadas a las necesidades de
                  cada familia.
                </p>
              </div>
            </div>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cuándo es recomendable solicitar una conciliación de custodia y
              régimen de visitas en Colombia?
            </h2>

            <p className={styles.text}>
              La conciliación familiar resulta especialmente recomendable cuando
              los padres desean resolver sus diferencias mediante el diálogo y
              evitar un proceso judicial prolongado. Este mecanismo permite
              construir acuerdos pensando en el bienestar del menor, reduciendo
              el impacto emocional que suelen generar los conflictos familiares.
            </p>

            <p className={styles.text}>
              También es una excelente alternativa cuando existen desacuerdos
              sobre quién ejercerá la custodia, cómo se organizarán las visitas,
              quién asumirá determinadas responsabilidades o cómo se
              distribuirán los tiempos de convivencia durante vacaciones, fechas
              especiales y fines de semana.
            </p>

            <p className={styles.text}>
              Mientras más temprano se inicie el proceso de conciliación,
              mayores son las posibilidades de alcanzar acuerdos estables que
              permitan mantener una buena comunicación entre los padres y
              garantizar un entorno saludable para los hijos.
            </p>

            <ul className={styles.list}>
              <li>Cuando los padres están iniciando una separación.</li>
              <li>Cuando existen desacuerdos sobre la custodia.</li>
              <li>
                Cuando uno de los padres desea ampliar el régimen de visitas.
              </li>
              <li>Cuando es necesario modificar un acuerdo anterior.</li>
              <li>Cuando cambian las necesidades del menor.</li>
              <li>Cuando alguno de los padres cambia de ciudad.</li>
              <li>Cuando existen conflictos constantes sobre horarios.</li>
              <li>Cuando se busca evitar un proceso judicial de familia.</li>
            </ul>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Custodia compartida en Colombia: beneficios y aspectos que pueden
              acordarse mediante conciliación
            </h2>

            <p className={styles.text}>
              La custodia compartida permite que ambos padres participen
              activamente en la crianza, educación y desarrollo de sus hijos,
              siempre que las circunstancias familiares permitan mantener una
              comunicación adecuada y priorizar el interés superior del menor.
            </p>

            <p className={styles.text}>
              Durante la conciliación es posible establecer acuerdos detallados
              sobre los tiempos de convivencia, responsabilidades económicas,
              decisiones relacionadas con educación, salud, actividades
              extracurriculares y demás aspectos importantes para la vida
              cotidiana del niño o adolescente.
            </p>

            <p className={styles.text}>
              Un acuerdo claro disminuye futuros conflictos y brinda estabilidad
              tanto a los padres como a los hijos, evitando interpretaciones
              diferentes sobre las obligaciones de cada uno.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Mayor participación de ambos padres
                </h3>

                <p className={styles.cardText}>
                  Favorece la corresponsabilidad en la crianza y desarrollo del
                  menor.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Acuerdos personalizados</h3>

                <p className={styles.cardText}>
                  Los horarios pueden adaptarse a las necesidades de cada
                  familia.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Más estabilidad para el menor
                </h3>

                <p className={styles.cardText}>
                  Se reducen conflictos derivados de incumplimientos o falta de
                  claridad.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Mayor seguridad jurídica</h3>

                <p className={styles.cardText}>
                  El acuerdo queda consignado en un acta con plena validez
                  legal.
                </p>
              </div>
            </div>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué acuerdos pueden establecerse durante una conciliación de
              custodia y visitas?
            </h2>

            <p className={styles.text}>
              Cada familia tiene necesidades diferentes. Por ello, la
              conciliación permite construir acuerdos específicos que regulen la
              convivencia entre padres e hijos de forma organizada y pensando
              siempre en el bienestar del menor.
            </p>

            <ul className={styles.list}>
              <li>Custodia exclusiva.</li>
              <li>Custodia compartida.</li>
              <li>Régimen de visitas entre semana.</li>
              <li>Visitas los fines de semana.</li>
              <li>Vacaciones escolares.</li>
              <li>Navidad y fin de año.</li>
              <li>Cumpleaños del menor.</li>
              <li>Celebraciones familiares.</li>
              <li>Entrega y recogida del menor.</li>
              <li>Comunicación telefónica o virtual.</li>
              <li>Viajes nacionales.</li>
              <li>Viajes internacionales.</li>
              <li>Cambio de residencia.</li>
              <li>Actividades deportivas.</li>
              <li>Educación y salud.</li>
              <li>Responsabilidades económicas.</li>
            </ul>

            <p className={styles.text}>
              Entre más específico sea el acuerdo, menor será la posibilidad de
              que surjan nuevos conflictos entre los padres en el futuro.
            </p>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Qué sucede si uno de los padres incumple el régimen de visitas o
              el acuerdo de custodia?
            </h2>

            <p className={styles.text}>
              Cuando uno de los padres incumple el acuerdo alcanzado durante la
              conciliación, pueden generarse nuevos conflictos que afectan la
              estabilidad emocional del menor y dificultan la relación entre
              ambos padres. Por ello es importante que los compromisos
              adquiridos sean claros, realistas y puedan cumplirse de manera
              efectiva.
            </p>

            <p className={styles.text}>
              El acta de conciliación tiene efectos jurídicos y constituye un
              documento que puede utilizarse para exigir el cumplimiento de las
              obligaciones pactadas. Esto brinda mayor seguridad tanto para
              quien ejerce la custodia como para el padre o madre que tiene
              derecho al régimen de visitas.
            </p>

            <p className={styles.text}>
              En algunos casos el incumplimiento obedece a cambios laborales,
              mudanzas, dificultades económicas o nuevas circunstancias
              familiares. Cuando esto ocurre, suele ser recomendable acudir
              nuevamente a conciliación para modificar los acuerdos antes de que
              el conflicto aumente.
            </p>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Incumplimiento de horarios</h3>

                <p className={styles.cardText}>
                  Retrasos constantes o falta de entrega del menor.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>
                  Negativa a permitir visitas
                </h3>

                <p className={styles.cardText}>
                  Se afecta el vínculo entre padres e hijos.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Cambios de residencia</h3>

                <p className={styles.cardText}>
                  Deben analizarse para proteger el bienestar del menor.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Nueva conciliación</h3>

                <p className={styles.cardText}>
                  Permite actualizar los acuerdos cuando cambian las
                  circunstancias.
                </p>
              </div>
            </div>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Se pueden modificar los acuerdos de custodia y régimen de
              visitas?
            </h2>

            <p className={styles.text}>
              Sí. Los acuerdos de custodia y régimen de visitas pueden
              modificarse cuando las circunstancias familiares cambian y resulta
              necesario adaptar las condiciones inicialmente pactadas. El
              objetivo siempre será proteger el interés superior del menor y
              garantizar que las decisiones respondan a su bienestar.
            </p>

            <p className={styles.text}>
              Las modificaciones pueden obedecer a cambios laborales, traslados
              de ciudad, nuevas necesidades educativas, condiciones médicas,
              cambios en los horarios escolares o cualquier situación que afecte
              la dinámica familiar.
            </p>

            <p className={styles.text}>
              Antes de iniciar un proceso judicial, muchas familias optan por
              una nueva conciliación para actualizar los acuerdos de forma
              consensuada y con plena validez legal.
            </p>

            <ul className={styles.list}>
              <li>Cambio de ciudad.</li>
              <li>Cambio de colegio.</li>
              <li>Nuevos horarios laborales.</li>
              <li>Modificación de vacaciones.</li>
              <li>Necesidades médicas del menor.</li>
              <li>Cambios económicos importantes.</li>
              <li>Solicitud de custodia compartida.</li>
              <li>Ampliación del régimen de visitas.</li>
            </ul>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Documentos recomendados para una conciliación de custodia y
              régimen de visitas
            </h2>

            <p className={styles.text}>
              Llevar la documentación adecuada permite que la audiencia sea
              mucho más organizada y facilita la construcción de acuerdos claros
              entre los padres. Aunque cada caso puede requerir soportes
              diferentes, existen documentos que normalmente resultan útiles
              durante la conciliación.
            </p>

            <ul className={styles.list}>
              <li>Documento de identidad de los padres.</li>
              <li>Registro civil de nacimiento del menor.</li>
              <li>Acuerdos de conciliación anteriores.</li>
              <li>Sentencias judiciales, si existen.</li>
              <li>Calendario escolar.</li>
              <li>Horarios laborales.</li>
              <li>Información médica relevante.</li>
              <li>Propuesta de horarios de visitas.</li>
              <li>Información sobre vacaciones.</li>
              <li>Documentos relacionados con educación.</li>
            </ul>

            <p className={styles.text}>
              Contar con esta información permite que las decisiones se tomen
              con mayor claridad y reduce la posibilidad de que posteriormente
              existan dudas sobre los compromisos asumidos por cada padre.
            </p>
          </div>

          {/* NUEVO BLOQUE */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Errores que deben evitar los padres durante una conciliación de
              custodia y visitas
            </h2>

            <p className={styles.text}>
              La conciliación busca construir acuerdos pensando principalmente
              en el bienestar del menor. Por esta razón es importante que ambos
              padres acudan a la audiencia con disposición para dialogar y
              encontrar soluciones que beneficien a toda la familia.
            </p>

            <p className={styles.text}>
              En muchas ocasiones los desacuerdos no se producen por falta de
              voluntad, sino porque las partes llegan sin una propuesta clara o
              convierten la audiencia en un espacio para discutir problemas
              personales ajenos a la crianza de los hijos.
            </p>

            <ul className={styles.list}>
              <li>No utilizar a los hijos como mecanismo de presión.</li>
              <li>Evitar discusiones personales durante la audiencia.</li>
              <li>No proponer horarios imposibles de cumplir.</li>
              <li>Priorizar siempre el interés superior del menor.</li>
              <li>Escuchar las propuestas de la otra parte.</li>
              <li>Definir responsabilidades de forma clara.</li>
              <li>Evitar acuerdos ambiguos.</li>
              <li>Dejar por escrito todos los compromisos.</li>
              <li>Respetar los tiempos del menor.</li>
              <li>Mantener una comunicación respetuosa.</li>
            </ul>

            <p className={styles.text}>
              Un acuerdo bien elaborado disminuye significativamente la
              posibilidad de futuros conflictos y brinda mayor estabilidad
              emocional a los niños, niñas y adolescentes.
            </p>
          </div>

          {/* BLOQUE 4 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Por qué intentar una conciliación antes de iniciar un proceso de
              custodia ante un juez?
            </h2>

            <p className={styles.text}>
              Los procesos judiciales de familia pueden extenderse durante
              meses, generar confrontaciones constantes entre los padres y
              afectar emocionalmente a los hijos menores de edad.
            </p>

            <p className={styles.text}>
              Además del desgaste emocional, estos procesos suelen generar
              incertidumbre sobre horarios, convivencia, responsabilidades y
              decisiones relacionadas con el bienestar del menor.
            </p>

            <p className={styles.text}>
              La conciliación permite tomar decisiones de manera conjunta,
              organizada y menos conflictiva, priorizando siempre el interés del
              niño y promoviendo relaciones familiares más estables.
            </p>
          </div>

          {/* BLOQUE 5 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              ¿Cómo solicitar una conciliación de custodia y régimen de visitas
              en Colombia?
            </h2>

            <p className={styles.text}>
              El proceso inicia con la solicitud de conciliación ante un centro
              autorizado en Colombia. Posteriormente, se cita a ambos padres a
              una audiencia donde pueden dialogar y construir acuerdos con ayuda
              de un conciliador.
            </p>

            <p className={styles.text}>
              Durante la audiencia se pueden presentar propuestas relacionadas
              con custodia, visitas, horarios, vacaciones, educación,
              comunicación y demás aspectos relacionados con el menor.
            </p>

            <p className={styles.text}>
              Si las partes llegan a un acuerdo, este queda consignado en un
              acta de conciliación con plena validez legal y obligatorio
              cumplimiento en Colombia.
            </p>
          </div>

          {/* BLOQUE 6 */}
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>
              Recomendaciones antes de asistir a una conciliación de custodia
            </h2>

            <p className={styles.text}>
              Prepararse adecuadamente antes de la audiencia puede facilitar un
              mejor acuerdo y reducir futuros conflictos familiares.
            </p>

            <ul className={styles.list}>
              <li>Definir horarios realistas para visitas y convivencia.</li>
              <li>Priorizar siempre el bienestar emocional del menor.</li>
              <li>Evitar discusiones personales durante la audiencia.</li>
              <li>
                Llevar documentos relacionados con educación o salud si son
                necesarios.
              </li>
              <li>
                Tener claridad sobre responsabilidades económicas y familiares.
              </li>
              <li>
                Proponer acuerdos claros, organizados y fáciles de cumplir.
              </li>
            </ul>

            <p className={styles.text}>
              Una conciliación bien estructurada ayuda a generar estabilidad,
              claridad y mejores relaciones familiares a largo plazo.
            </p>
          </div>

          {/* FAQ NUEVO */}
          <div className={styles.faqSection}>
            <h2 className={styles.blockTitle}>
              Preguntas frecuentes sobre custodia y régimen de visitas
            </h2>

            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación de custodia tiene validez legal en Colombia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. El acta de conciliación tiene plena validez jurídica y
                  puede exigirse legalmente en caso de incumplimiento por alguna
                  de las partes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Se puede modificar un acuerdo de visitas o custodia?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Cuando cambian las necesidades del menor o las condiciones
                  familiares, los padres pueden realizar una nueva conciliación
                  para ajustar los acuerdos existentes.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Qué pasa si uno de los padres incumple el acuerdo?
                </h3>

                <p className={styles.faqAnswer}>
                  El acuerdo puede ser exigido judicialmente debido a que el
                  acta de conciliación tiene efectos legales obligatorios en
                  Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿Es posible acordar custodia compartida mediante conciliación?
                </h3>

                <p className={styles.faqAnswer}>
                  Sí. Los padres pueden establecer acuerdos de custodia
                  compartida, horarios y responsabilidades siempre que se
                  priorice el bienestar y estabilidad del menor.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>
                  ¿La conciliación evita acudir a un juez de familia?
                </h3>

                <p className={styles.faqAnswer}>
                  En muchos casos sí. Cuando ambas partes logran acuerdos claros
                  y voluntarios, la conciliación permite evitar procesos
                  judiciales largos y desgastantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
