"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RegimenVisitasConciliacionContent() {
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
              Conciliación familiar en Colombia
            </span>

            <h1 className={styles.title}>
              Régimen de visitas en Colombia: cómo acordarlo mediante
              conciliación sin acudir a un juez
            </h1>

            <p className={styles.heroText}>
              El <strong>régimen de visitas</strong> permite establecer de
              manera clara cómo será la relación entre los hijos y el padre o la
              madre con quien no conviven de forma permanente. A través de la
              <strong> conciliación familiar</strong>, los padres pueden
              construir un acuerdo equilibrado que proteja el bienestar de los
              menores y reduzca los conflictos futuros.
            </p>

            <p className={styles.heroText}>
              En Colombia, la conciliación constituye uno de los mecanismos más
              utilizados para definir aspectos como los días de visita, fines de
              semana, vacaciones escolares, fechas especiales, comunicación
              virtual, lugares de entrega y cualquier otra situación relacionada
              con la convivencia familiar, evitando en muchos casos procesos
              judiciales largos y desgastantes.
            </p>

            <p className={styles.heroText}>
              Cuando ambas partes alcanzan un acuerdo, este queda consignado en
              un
              <strong> acta de conciliación con efectos jurídicos</strong>, lo
              que brinda seguridad tanto a los padres como a los hijos. Además
              de ahorrar tiempo y dinero, este mecanismo fomenta el diálogo y la
              corresponsabilidad parental, siempre teniendo como prioridad el
              interés superior del menor.
            </p>
          </div>

          {/* QUE ES UN REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es el régimen de visitas y por qué es importante para los
              hijos?
            </h2>

            <p className={styles.paragraph}>
              El régimen de visitas es el conjunto de reglas que determinan la
              forma en que un padre o una madre comparte tiempo con sus hijos
              cuando estos no viven de manera permanente con él o ella. Su
              finalidad no consiste únicamente en establecer horarios, sino en
              garantizar que los menores mantengan vínculos afectivos estables
              con ambos padres después de una separación.
            </p>

            <p className={styles.paragraph}>
              En la mayoría de los casos, los desacuerdos no surgen por la
              intención de compartir tiempo con los hijos, sino por la ausencia
              de reglas claras. Precisamente por ello, la conciliación familiar
              permite que ambas partes dialoguen con la ayuda de un conciliador
              imparcial para construir acuerdos realistas y adaptados a las
              necesidades de cada familia.
            </p>

            <p className={styles.paragraph}>
              Un régimen de visitas puede incluir aspectos como horarios
              semanales, fines de semana, vacaciones escolares, días festivos,
              cumpleaños, celebraciones familiares, comunicación telefónica o
              virtual, transporte del menor y otros compromisos necesarios para
              garantizar una relación sana y continua entre padres e hijos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Más que repartir días de convivencia, un buen régimen de visitas
                busca brindar estabilidad emocional al menor, reducir los
                conflictos entre los padres y facilitar el cumplimiento de los
                compromisos adquiridos por ambas partes.
              </p>
            </div>
          </div>

          {/* QUE ASPECTOS PUEDE ACORDARSE DURANTE UNA CONCILIACION SOBRE EL REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué aspectos pueden acordarse durante una conciliación sobre el
              régimen de visitas?
            </h2>

            <p className={styles.paragraph}>
              Uno de los mayores beneficios de la conciliación familiar es que
              permite adaptar el régimen de visitas a la realidad de cada
              familia. No existen acuerdos únicos o modelos obligatorios; las
              partes pueden construir un esquema de convivencia que responda a
              las necesidades del menor y a las posibilidades de ambos padres.
            </p>

            <p className={styles.paragraph}>
              Mientras más claro sea el acuerdo, menores serán las posibilidades
              de conflictos futuros. Por ello, es recomendable definir cada
              situación que pueda generar diferencias con el paso del tiempo.
            </p>

            <ul className={styles.list}>
              <li>Días y horarios exactos de las visitas.</li>

              <li>Fines de semana alternados o compartidos.</li>

              <li>Vacaciones escolares de mitad y fin de año.</li>

              <li>Semana Santa, Navidad y Año Nuevo.</li>

              <li>Cumpleaños del menor y de los padres.</li>

              <li>Celebraciones familiares importantes.</li>

              <li>
                Lugar donde se realizará la entrega y recepción del menor.
              </li>

              <li>Responsabilidad del transporte.</li>

              <li>Llamadas telefónicas y videollamadas.</li>

              <li>
                Comunicación cuando uno de los padres reside en otra ciudad.
              </li>

              <li>Permisos para viajes nacionales o internacionales.</li>

              <li>
                Procedimiento para modificar horarios cuando exista alguna
                emergencia.
              </li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                Un acuerdo detallado reduce malentendidos, facilita el
                cumplimiento por ambas partes y brinda mayor estabilidad
                emocional a los hijos.
              </p>
            </div>
          </div>

          {/* BENEFICIOS DE ACORDAR VISITAS MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de establecer un régimen de visitas mediante
              conciliación
            </h2>

            <p className={styles.paragraph}>
              Resolver este tipo de conflictos mediante conciliación ofrece
              ventajas tanto para los padres como para los hijos. Además de
              disminuir el desgaste emocional, permite construir soluciones
              consensuadas que suelen cumplirse con mayor facilidad que aquellas
              impuestas dentro de un proceso judicial.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Protege el bienestar del menor</h3>

                <p>
                  El acuerdo gira alrededor del interés superior del niño,
                  favoreciendo su estabilidad emocional y el mantenimiento de
                  vínculos familiares sanos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Reduce conflictos familiares</h3>

                <p>
                  La comunicación entre los padres mejora al existir reglas
                  claras sobre visitas, horarios y responsabilidades
                  compartidas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  En muchos casos es posible alcanzar un acuerdo en menos tiempo
                  que un proceso judicial relacionado con custodia y visitas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>
                  La conciliación evita buena parte de los gastos económicos
                  derivados de un litigio prolongado entre los padres.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos personalizados</h3>

                <p>
                  Cada familia puede construir un régimen de visitas ajustado a
                  sus horarios, actividades laborales y necesidades
                  particulares.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>

                <p>
                  Los acuerdos quedan consignados en un acta de conciliación que
                  produce efectos legales y puede exigirse conforme a la
                  legislación colombiana.
                </p>
              </div>
            </div>
          </div>

          {/* CUANDO CONVIENE ACUDIR A UNA CONCILIACION PARA DEFINIR EL REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo conviene acudir a una conciliación para definir el régimen
              de visitas?
            </h2>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente útil cuando los padres
              desean evitar un proceso judicial o cuando, pese a existir
              diferencias, mantienen la disposición para dialogar y construir
              acuerdos en beneficio de sus hijos.
            </p>

            <p className={styles.paragraph}>
              También es recomendable cuando cambian las condiciones familiares,
              por ejemplo debido a un cambio de ciudad, nuevos horarios
              laborales, ingreso de los menores al colegio, variaciones en las
              vacaciones o cualquier otra circunstancia que haga necesario
              ajustar el régimen inicialmente acordado.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación no busca determinar quién tiene la razón, sino
                encontrar soluciones que permitan a los hijos mantener una
                relación estable con ambos padres dentro de un ambiente de
                respeto y cooperación.
              </p>
            </div>
          </div>

          {/* COMO SE DESARROLLA LA AUDIENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo es una audiencia de conciliación para establecer un régimen
              de visitas?
            </h2>

            <p className={styles.paragraph}>
              La audiencia de conciliación es un espacio de diálogo dirigido por
              un conciliador autorizado, quien actúa como tercero imparcial para
              facilitar la comunicación entre los padres y ayudarlos a construir
              acuerdos que beneficien principalmente a sus hijos.
            </p>

            <p className={styles.paragraph}>
              Durante la reunión cada parte puede expresar sus necesidades,
              explicar las dificultades que enfrenta y presentar propuestas
              relacionadas con los días de visita, vacaciones, fechas
              especiales, transporte del menor y demás aspectos de la
              convivencia familiar.
            </p>

            <p className={styles.paragraph}>
              El conciliador no impone decisiones ni reemplaza la voluntad de
              las partes. Su función consiste en orientar el diálogo, verificar
              que los acuerdos sean legales y procurar que las decisiones
              respeten el interés superior del menor.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Cuando los padres llegan a un acuerdo, este queda consignado en
                un acta de conciliación con efectos jurídicos, brindando mayor
                seguridad para ambas partes y estabilidad para los hijos.
              </p>
            </div>
          </div>

          {/* DOCUMENTOS QUE PUEDEN SER UTILES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos recomendados para una conciliación sobre régimen de
              visitas
            </h2>

            <p className={styles.paragraph}>
              Aunque cada caso puede requerir documentación diferente, contar
              con la información adecuada facilita el desarrollo de la audiencia
              y permite construir acuerdos más completos.
            </p>

            <ul className={styles.list}>
              <li>Registro civil de nacimiento del menor.</li>

              <li>Documento de identidad de ambos padres.</li>

              <li>Acuerdos previos sobre custodia, alimentos o visitas.</li>

              <li>Sentencias judiciales, si existen.</li>

              <li>Información sobre horarios escolares del menor.</li>

              <li>Horarios laborales de los padres.</li>

              <li>Soportes relacionados con cambios de residencia.</li>

              <li>
                Información sobre actividades extracurriculares del menor.
              </li>

              <li>
                Cualquier documento que facilite la construcción del acuerdo.
              </li>
            </ul>
          </div>

          {/* QUE OCURRE SI LOS PADRES NO LLEGAN A UN ACUERDO DURANTE LA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre si los padres no llegan a un acuerdo durante la
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              No siempre es posible alcanzar un consenso durante la audiencia.
              Cuando las diferencias persisten, la conciliación finaliza sin
              acuerdo y las partes conservan la posibilidad de acudir ante las
              autoridades competentes para que el conflicto sea resuelto
              conforme a la legislación colombiana.
            </p>

            <p className={styles.paragraph}>
              Aunque no exista conciliación, la audiencia suele permitir que los
              padres identifiquen los puntos de desacuerdo y comprendan cuáles
              aspectos requieren mayor diálogo o definición jurídica.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación busca privilegiar el acuerdo voluntario. Sin
                embargo, cuando este no es posible, las partes mantienen
                intactos los mecanismos legales previstos por la ley.
              </p>
            </div>
          </div>

          {/* CUANDO PUEDE MODIFICARSE UN REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo puede modificarse un régimen de visitas?
            </h2>

            <p className={styles.paragraph}>
              Las necesidades de una familia cambian con el tiempo. Por esta
              razón, un régimen de visitas puede requerir ajustes cuando varían
              las circunstancias del menor o de cualquiera de los padres.
            </p>

            <p className={styles.paragraph}>
              Es frecuente realizar nuevas conciliaciones cuando existen cambios
              de ciudad, modificaciones en la jornada laboral, nuevos
              calendarios escolares, problemas de salud, cambios en las
              actividades del menor o cualquier otra situación que haga
              necesario actualizar los acuerdos previamente establecidos.
            </p>

            <p className={styles.paragraph}>
              Siempre que exista voluntad de diálogo, una nueva audiencia de
              conciliación permite adaptar el régimen de visitas sin necesidad
              de iniciar un proceso judicial, manteniendo como prioridad el
              bienestar del niño, niña o adolescente.
            </p>
          </div>

          {/* OCURRE SI UNA PARTE INCUMPLE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si uno de los padres incumple el régimen de visitas?
            </h2>

            <p className={styles.paragraph}>
              Cuando el régimen de visitas ha quedado establecido mediante un
              acta de conciliación, ambas partes adquieren el compromiso de
              respetar las condiciones acordadas. El cumplimiento beneficia
              principalmente al menor, quien tiene derecho a mantener una
              relación cercana y permanente con ambos padres.
            </p>

            <p className={styles.paragraph}>
              Si alguno de los padres incumple de forma reiterada los horarios,
              impide las visitas o desconoce lo pactado, el otro podrá acudir a
              los mecanismos legales previstos para buscar el cumplimiento del
              acuerdo o solicitar las medidas que resulten procedentes según las
              circunstancias del caso.
            </p>

            <p className={styles.paragraph}>
              Antes de iniciar actuaciones judiciales, en muchas ocasiones
              resulta útil intentar una nueva conciliación para revisar las
              causas del incumplimiento y buscar soluciones que permitan
              restablecer la comunicación y proteger el bienestar del menor.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El objetivo principal no es sancionar a alguno de los padres,
                sino garantizar que los hijos puedan mantener una relación
                estable y saludable con ambos, siempre que ello favorezca su
                interés superior.
              </p>
            </div>
          </div>

          {/* ERRORES MAS FRECUENTES AL ACORDAR UN REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores más frecuentes al acordar un régimen de visitas
            </h2>

            <p className={styles.paragraph}>
              Muchos conflictos familiares aparecen porque los acuerdos fueron
              redactados de manera muy general o porque no contemplaron
              situaciones que suelen presentarse con el paso del tiempo. Una
              conciliación bien estructurada disminuye considerablemente estos
              inconvenientes.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Horarios poco claros</h3>

                <p>
                  No definir horas exactas para la entrega y recepción del menor
                  suele generar discusiones posteriores.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No regular las vacaciones</h3>

                <p>
                  Es recomendable dejar establecido cómo se distribuirán las
                  vacaciones, puentes festivos y fechas especiales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Ignorar cambios futuros</h3>

                <p>
                  Mudanzas, nuevos empleos o cambios escolares pueden requerir
                  ajustes en el acuerdo inicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Falta de comunicación</h3>

                <p>
                  Mantener canales de comunicación respetuosos facilita el
                  cumplimiento del régimen de visitas y reduce nuevos
                  conflictos.
                </p>
              </div>
            </div>
          </div>

          {/* RECOMENDACIONES PARA CONSTRUIR UN BUEN ACUERDO DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Recomendaciones para construir un buen acuerdo de visitas
            </h2>

            <p className={styles.paragraph}>
              No existe un régimen de visitas ideal para todas las familias.
              Cada acuerdo debe responder a las necesidades particulares del
              menor, la disponibilidad de los padres y las condiciones propias
              de cada hogar.
            </p>

            <ul className={styles.list}>
              <li>Priorizar siempre el bienestar del menor.</li>

              <li>Establecer horarios específicos.</li>

              <li>Regular vacaciones y fechas especiales.</li>

              <li>Definir quién asume el transporte del menor.</li>

              <li>Establecer mecanismos de comunicación entre visitas.</li>

              <li>Prever qué hacer ante cambios laborales o escolares.</li>

              <li>Redactar acuerdos claros para evitar interpretaciones.</li>

              <li>Mantener una actitud de cooperación entre ambos padres.</li>
            </ul>

            <p className={styles.paragraph}>
              Mientras más detallado sea el acuerdo alcanzado durante la
              conciliación, menores serán las posibilidades de conflictos
              futuros y mayor estabilidad tendrán los hijos.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES SOBRE REGIMEN DE VISITAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre el régimen de visitas
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puede modificarse el régimen de visitas?</h3>

                <p>
                  Sí. Cuando cambian las circunstancias familiares, los padres
                  pueden acudir nuevamente a conciliación para actualizar los
                  acuerdos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es obligatorio acudir ante un juez?</h3>

                <p>
                  No necesariamente. En muchos casos la conciliación permite
                  resolver el conflicto mediante acuerdos voluntarios con
                  efectos jurídicos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>

                <p>
                  Sí. Dependiendo del centro de conciliación y de las
                  circunstancias del caso, es posible realizar audiencias
                  virtuales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿El acuerdo tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación produce efectos jurídicos y puede
                  servir como soporte para exigir el cumplimiento de lo
                  acordado.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué pasa si no existe acuerdo?</h3>

                <p>
                  Las partes conservan la posibilidad de acudir a las
                  autoridades competentes para resolver el conflicto conforme a
                  la ley.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es posible incluir vacaciones y festivos?</h3>

                <p>
                  Sí. Es recomendable regular expresamente vacaciones escolares,
                  puentes, Navidad, Año Nuevo y demás fechas importantes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas acordar o modificar un régimen de visitas?
            </h3>

            <p className={styles.ctaText}>
              En Sol Centro de Conciliación te acompañamos para construir
              acuerdos relacionados con régimen de visitas, custodia, cuidado
              personal, comunicación entre padres e hijos y demás asuntos de
              derecho de familia, buscando soluciones que protejan el bienestar
              de los menores y eviten procesos judiciales innecesarios.
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
