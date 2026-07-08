"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CustodiaPorConciliacionContent() {
  return (
    <>
      <div className={styles.articleWrapper}>
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
              Custodia y cuidado personal mediante conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando los padres enfrentan diferencias relacionadas con la
              crianza de sus hijos, la conciliación familiar puede convertirse
              en una herramienta efectiva para alcanzar acuerdos sobre custodia,
              cuidado personal y régimen de visitas.
            </p>

            <p className={styles.heroText}>
              Este mecanismo permite que ambas partes participen activamente en
              la construcción de soluciones que prioricen el bienestar del menor
              sin necesidad de iniciar procesos judiciales largos y
              desgastantes.
            </p>

            <p className={styles.heroText}>
              En Bogotá y otras ciudades de Colombia, miles de familias utilizan
              la conciliación para regular aspectos relacionados con la custodia
              de hijos menores de edad de manera rápida y con plena validez
              jurídica.
            </p>

            <p className={styles.heroText}>
              Alcanzar un acuerdo mediante conciliación no significa que alguno
              de los padres pierda sus derechos. Por el contrario, permite
              construir soluciones equilibradas que protejan el interés superior
              del menor y definan con claridad aspectos como la custodia, las
              visitas, los tiempos de convivencia y otras responsabilidades
              parentales.
            </p>
          </div>

          {/* QUE ES LA CUSTODIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la custodia y el cuidado personal?
            </h2>

            <p className={styles.paragraph}>
              La custodia y el cuidado personal hacen referencia a las
              responsabilidades relacionadas con la atención diaria del menor,
              incluyendo aspectos de protección, educación, salud y desarrollo
              integral.
            </p>

            <p className={styles.paragraph}>
              Cuando los padres no conviven juntos, es importante establecer de
              manera clara cómo se ejercerán estas responsabilidades para evitar
              futuros conflictos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El principio fundamental en cualquier acuerdo de custodia es la
                protección del interés superior del menor y el respeto de sus
                derechos fundamentales.
              </p>
            </div>
          </div>

          {/* CUANDO CONVIENE SOLICITAR UNA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo conviene solicitar una conciliación para definir la
              custodia de un menor?
            </h2>

            <p className={styles.paragraph}>
              La conciliación es una excelente alternativa cuando los padres
              desean establecer acuerdos claros sin iniciar inmediatamente un
              proceso judicial. Incluso cuando existen diferencias importantes,
              una audiencia de conciliación puede facilitar el diálogo y
              permitir soluciones que tengan como prioridad el bienestar del
              niño, niña o adolescente.
            </p>

            <p className={styles.paragraph}>
              También suele utilizarse cuando los padres desean modificar
              acuerdos anteriores, regular el cuidado personal, establecer un
              régimen de visitas o definir responsabilidades relacionadas con la
              educación, salud y gastos del menor.
            </p>
          </div>

          {/* QUE PUEDE ACORDARSE MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué puede acordarse mediante conciliación?
            </h2>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal del menor.</li>
              <li>Régimen de visitas.</li>
              <li>Horarios de convivencia.</li>
              <li>Vacaciones y fechas especiales.</li>
              <li>Responsabilidades parentales.</li>
              <li>Comunicación entre padres e hijos.</li>
              <li>Aspectos relacionados con educación y salud.</li>
            </ul>
          </div>

          {/* UN MISMO ACUERDO PUEDE REGULAR VARIOS ASPECTOS DE LA CRIANZA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Un mismo acuerdo puede regular varios aspectos de la crianza
            </h2>

            <p className={styles.paragraph}>
              Una de las ventajas de la conciliación familiar es que los padres
              no tienen que limitarse únicamente a decidir quién ejercerá el
              cuidado personal del menor. En la misma audiencia es posible dejar
              definidos diferentes temas para evitar futuros conflictos.
            </p>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal.</li>
              <li>Régimen de visitas.</li>
              <li>Entrega y recogida del menor.</li>
              <li>Vacaciones escolares.</li>
              <li>Navidad, Año Nuevo y fechas especiales.</li>
              <li>Cumpleaños.</li>
              <li>Comunicación telefónica o virtual.</li>
              <li>Actividades extracurriculares.</li>
              <li>Decisiones relacionadas con educación.</li>
              <li>Responsabilidades médicas.</li>
              <li>Cuotas de alimentación si corresponde.</li>
            </ul>
          </div>

          {/* BENEFICIOS DE LA CONCILIACION FAMILIAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación familiar
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>

                <p>Favorece el diálogo y la cooperación entre los padres.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Permite alcanzar acuerdos en menos tiempo que un litigio
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Protección del menor</h3>

                <p>
                  Mantiene el enfoque en el bienestar emocional y familiar del
                  hijo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor estabilidad para el menor</h3>

                <p>
                  Permite establecer reglas claras que brindan seguridad y
                  continuidad en la crianza.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Evita procesos largos</h3>

                <p>
                  Muchas familias logran acuerdos sin necesidad de acudir
                  inmediatamente ante un juez.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Flexibilidad</h3>

                <p>
                  Los padres pueden diseñar acuerdos adaptados a las necesidades
                  reales de su familia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor cumplimiento</h3>

                <p>
                  Los acuerdos construidos conjuntamente suelen cumplirse con
                  mayor frecuencia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  El acta de conciliación produce efectos legales y constituye
                  un respaldo importante para las partes.
                </p>
              </div>
            </div>
          </div>

          {/* REGIMEN DE VISITAS MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Régimen de visitas mediante conciliación
            </h2>

            <p className={styles.paragraph}>
              Uno de los temas más frecuentes en conciliación familiar es la
              definición del régimen de visitas. Las partes pueden establecer
              horarios, días específicos, periodos vacacionales y mecanismos de
              comunicación.
            </p>

            <p className={styles.paragraph}>
              La claridad en estos acuerdos ayuda a prevenir futuros conflictos
              y brinda estabilidad tanto a los padres como a los hijos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que pueden ser útiles
            </h2>

            <ul className={styles.list}>
              <li>Registro civil del menor.</li>
              <li>Documentos de identidad de los padres.</li>
              <li>Acuerdos previos relacionados con el menor.</li>
              <li>Soportes sobre educación o salud cuando sean relevantes.</li>
              <li>Información relacionada con horarios y disponibilidad.</li>
            </ul>
          </div>

          {/* QUE PASA SI NO SE ALCANZA UN ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si no se alcanza un acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Si durante la audiencia no se logra una conciliación, las partes
              podrán evaluar otras alternativas legales para resolver la
              controversia.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, la conciliación sigue siendo una de las opciones más
              recomendadas para buscar soluciones colaborativas en asuntos de
              familia.
            </p>
          </div>

          {/* ERRORES FRECUENTES AL INTENTAR ACORDAR LA CUSTODIA DE UN HIJO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores frecuentes al intentar acordar la custodia de un hijo
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Usar al menor como intermediario</h3>

                <p>
                  Los conflictos entre los padres nunca deberían trasladarse al
                  hijo ni utilizarlo para transmitir mensajes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No dejar todo por escrito</h3>

                <p>
                  Los acuerdos verbales suelen generar interpretaciones
                  distintas con el paso del tiempo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Pensar únicamente en el conflicto</h3>

                <p>
                  La conciliación busca construir acuerdos pensando
                  principalmente en el bienestar del menor.
                </p>
              </div>
            </div>
          </div>

          {/* PUEDE MODIFICARSE UN ACUERDO DE CUSTODIA FIRMADO EN CONCILIACION? */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Puede modificarse un acuerdo de custodia firmado en conciliación?
            </h2>

            <p className={styles.paragraph}>
              Sí. Las necesidades de los hijos cambian con el tiempo y también
              pueden cambiar las condiciones laborales, económicas o personales
              de los padres. Cuando esto ocurre, es posible realizar una nueva
              conciliación para ajustar el acuerdo existente.
            </p>

            <p className={styles.paragraph}>
              Siempre que ambas partes estén dispuestas a dialogar, la
              modificación puede realizarse de forma mucho más rápida que
              iniciar un proceso judicial desde cero.
            </p>
          </div>

          {/* QUE SUCEDEN SI UNO DE LOS PADRES INCUMPLE EL ACUERDO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si uno de los padres incumple el acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Cuando el acuerdo queda consignado en un acta de conciliación,
              ambas partes adquieren obligaciones jurídicas. Si alguno incumple
              los compromisos asumidos, pueden iniciarse las actuaciones legales
              correspondientes para exigir su cumplimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Por esta razón es importante que los acuerdos sean claros,
                específicos y realistas, evitando ambigüedades que puedan
                generar nuevos conflictos en el futuro.
              </p>
            </div>
          </div>

          {/* PORQUE MUCHAS FAMILIAS PREFEREN LA CONCILIACION ANTES QUE UN JUICIO */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué muchas familias prefieren la conciliación antes que un
              juicio?
            </h2>

            <p className={styles.paragraph}>
              Un proceso judicial relacionado con la custodia puede prolongarse
              durante un tiempo considerable y generar un importante desgaste
              emocional para toda la familia. La conciliación permite que los
              padres participen activamente en la construcción del acuerdo y
              encuentren soluciones adaptadas a su realidad.
            </p>

            <p className={styles.paragraph}>
              Además de reducir tiempos y costos, favorece la comunicación entre
              los padres y disminuye el impacto del conflicto sobre los hijos,
              quienes son los principales beneficiarios cuando existe
              cooperación entre ambos progenitores.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES SOBRE CUSTODIA POR CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre custodia por conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puede modificarse un acuerdo posterior?</h3>

                <p>
                  Sí. Los acuerdos pueden revisarse cuando cambian las
                  circunstancias familiares.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La conciliación tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos en
                  Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede realizarse virtualmente?</h3>

                <p>
                  Muchos centros de conciliación ofrecen audiencias virtuales
                  para facilitar la participación de las partes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas acordar la custodia o visitas de un menor?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, custodia, cuidado
              personal, régimen de visitas y acuerdos relacionados con hijos
              menores de edad en Bogotá y Colombia.
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
      </div>
    </>
  );
}
