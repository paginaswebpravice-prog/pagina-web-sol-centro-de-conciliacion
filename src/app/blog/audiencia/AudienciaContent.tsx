"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function AudienciaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una audiencia de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una reunión dirigida por un conciliador autorizado en la que las partes buscan resolver un conflicto mediante el diálogo antes de acudir a un proceso judicial. Si llegan a un acuerdo, este queda consignado en un acta con efectos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La audiencia inicia con la identificación de las partes, continúa con la exposición del conflicto, la presentación de propuestas de solución y la negociación. Si existe acuerdo, se firma un acta de conciliación; si no, se expide una constancia de no conciliación o de inasistencia según corresponda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable presentar el documento de identidad, contratos, pagarés, facturas, comprobantes de pago, conversaciones, correos electrónicos, fotografías, liquidaciones y cualquier otro documento que sirva para demostrar los hechos relacionados con el conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una persona no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando una de las partes no comparece sin justificación, el conciliador puede dejar constancia de inasistencia. Dependiendo del caso, este documento puede utilizarse posteriormente para iniciar un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ocurre si no se logra un acuerdo durante la audiencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si las partes no alcanzan un acuerdo, el conciliador expide una constancia de no conciliación. En muchos asuntos esta constancia permite continuar con la presentación de una demanda ante el juez competente.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos, presta mérito ejecutivo y hace tránsito a cosa juzgada, por lo que el acuerdo puede exigirse legalmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto dura una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La duración depende de la complejidad del conflicto y de la disposición de las partes para negociar. Muchas audiencias pueden desarrollarse entre una y tres horas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio asistir a una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del tipo de conflicto. En algunos procesos la conciliación constituye un requisito de procedibilidad antes de presentar una demanda, mientras que en otros asuntos es completamente voluntaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué tipos de conflictos pueden resolverse en una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entre otros, pueden conciliarse conflictos relacionados con deudas, contratos, arrendamientos, responsabilidad civil, asuntos familiares, obligaciones económicas, incumplimientos contractuales y controversias comerciales, siempre que la ley permita su conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario contratar un abogado para asistir a una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No siempre es obligatorio. Sin embargo, dependiendo de la complejidad del caso, puede ser recomendable contar con asesoría jurídica para comprender el alcance del acuerdo y proteger adecuadamente los derechos de las partes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué ventajas tiene la conciliación frente a un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele ser más rápida, económica y flexible que un proceso judicial. Además, permite que las propias partes construyan soluciones adaptadas a sus necesidades y favorece la conservación de las relaciones personales o comerciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una de las partes incumple el acta de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si el acuerdo contenido en el acta no se cumple, la parte afectada puede iniciar las acciones legales correspondientes para exigir su cumplimiento, ya que el acta presta mérito ejecutivo conforme a la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede realizar una audiencia de conciliación de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo del centro de conciliación y del tipo de conflicto, es posible que la audiencia se realice mediante plataformas virtuales, siempre que se garantice la identificación de las partes y el cumplimiento de los requisitos legales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se puede solicitar una audiencia de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La solicitud puede presentarse ante centros de conciliación autorizados, cámaras de comercio, consultorios jurídicos, notarías habilitadas y otras entidades facultadas para prestar este servicio según la legislación colombiana.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo prepararse para una audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lo recomendable es organizar todos los documentos relacionados con el conflicto, calcular correctamente las obligaciones económicas, definir alternativas de negociación y asistir con disposición para dialogar y buscar una solución que beneficie a ambas partes.",
        },
      },
    ],
  };

  return (
    <div
      className={styles.wrapper}
      itemScope
      itemType="https://schema.org/Article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className={styles.container}>
        <motion.article
          id="audiencia-conciliacion-colombia"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Audiencia de conciliación en Colombia: cómo funciona, qué llevar,
            qué pasa si no hay acuerdo y cómo prepararte
          </motion.h1>

          <motion.p className={styles.text} itemProp="description">
            La <strong>audiencia de conciliación en Colombia</strong> es uno de
            los mecanismos más utilizados para resolver conflictos sin necesidad
            de acudir inmediatamente a un juez. En ciudades como{" "}
            <strong>Bogotá</strong>, Medellín, Cali y Barranquilla, miles de
            personas utilizan la conciliación para solucionar conflictos
            relacionados con deudas, arrendamientos, contratos, incumplimientos,
            conflictos familiares y controversias comerciales.
          </motion.p>

          <motion.p className={styles.text}>
            Muchas búsquedas en Google como{" "}
            <strong>“cómo es una audiencia de conciliación en Bogotá”</strong>,{" "}
            <strong>
              “qué pasa en una audiencia de conciliación en Colombia”
            </strong>{" "}
            o{" "}
            <strong>“qué debo llevar a una conciliación extrajudicial”</strong>{" "}
            tienen el mismo objetivo: entender cómo funciona el procedimiento,
            qué efectos legales tiene y cómo prepararse correctamente.
          </motion.p>

          <motion.p className={styles.text}>
            En Colombia, la conciliación es considerada un mecanismo alternativo
            de solución de conflictos reconocido legalmente. Cuando las partes
            llegan a un acuerdo, el acta de conciliación tiene efectos jurídicos
            importantes, ya que presta mérito ejecutivo y hace tránsito a cosa
            juzgada.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            ¿Qué es una audiencia de conciliación y para qué sirve en Colombia?
          </motion.h2>

          <motion.p className={styles.text}>
            La audiencia de conciliación es una reunión formal dirigida por un{" "}
            <strong>conciliador autorizado en Colombia</strong>, cuyo objetivo
            es ayudar a las partes a construir un acuerdo que resuelva el
            conflicto de manera pacífica y legal.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá y en toda Colombia, estas audiencias pueden realizarse en:
          </motion.p>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Consultorios jurídicos universitarios.</li>
            <li>Cámaras de comercio.</li>
            <li>Notarías autorizadas.</li>
            <li>Entidades públicas con facultades de conciliación.</li>
          </ul>

          <motion.p className={styles.text}>
            Dependiendo del tipo de conflicto, la audiencia puede tratar temas
            civiles, comerciales, familiares, laborales o de arrendamiento.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            ¿Cómo es una audiencia de conciliación paso a paso?
          </motion.h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.step}>1</span>

              <div>
                <h3>Presentación e identificación</h3>

                <p>
                  El conciliador verifica la identidad de las partes y explica
                  las reglas básicas del procedimiento de conciliación en
                  Colombia.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>2</span>

              <div>
                <h3>Exposición del conflicto</h3>

                <p>
                  Cada parte explica los hechos, el origen del problema y sus
                  pretensiones. Aquí es importante ser claro y llevar soportes.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>3</span>

              <div>
                <h3>Negociación</h3>

                <p>
                  El conciliador facilita el diálogo para buscar fórmulas de
                  arreglo razonables y legalmente viables.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.step}>4</span>

              <div>
                <h3>Acuerdo o no conciliación</h3>

                <p>
                  Si existe acuerdo, se firma un acta de conciliación. Si no hay
                  acuerdo, se emite una constancia de no conciliación.
                </p>
              </div>
            </div>
          </div>

          <motion.h2 className={styles.subtitle}>
            ¿Qué documentos debo llevar a una audiencia de conciliación?
          </motion.h2>

          <motion.p className={styles.text}>
            En Bogotá y en cualquier ciudad de Colombia, prepararse bien aumenta
            considerablemente las probabilidades de llegar a un acuerdo.
          </motion.p>

          <div className={styles.grid}>
            <section className={styles.innerCard}>
              <h3>Documentos recomendados</h3>

              <ul>
                <li>Cédula de ciudadanía o documento de identidad.</li>

                <li>Contratos, pagarés, facturas o documentos relacionados.</li>

                <li>Chats, correos electrónicos y conversaciones.</li>

                <li>Comprobantes de consignación o transferencias.</li>

                <li>Liquidación de valores o propuesta económica.</li>

                <li>Pruebas de incumplimiento.</li>

                <li>Dos posibles alternativas de negociación.</li>
              </ul>
            </section>

            <section className={styles.innerCard}>
              <h3>Errores frecuentes</h3>

              <ul>
                <li>Asistir sin pruebas.</li>

                <li>No calcular correctamente la deuda.</li>

                <li>Firmar acuerdos ambiguos.</li>

                <li>No leer completamente el acta.</li>

                <li>No definir fechas exactas.</li>

                <li>No establecer consecuencias por incumplimiento.</li>

                <li>Negarse completamente a negociar.</li>
              </ul>
            </section>
          </div>

          <motion.h2 className={styles.subtitle}>
            ¿Qué validez legal tiene el acta de conciliación?
          </motion.h2>

          <motion.p className={styles.text}>
            Cuando las partes llegan a un acuerdo durante la audiencia de
            conciliación en Bogotá o Colombia, el acta firmada tiene efectos
            jurídicos importantes:
          </motion.p>

          <ul className={styles.list}>
            <li>Hace tránsito a cosa juzgada.</li>

            <li>Presta mérito ejecutivo.</li>

            <li>Puede cobrarse judicialmente.</li>

            <li>Obliga legalmente a las partes.</li>

            <li>Sirve como prueba dentro de procesos judiciales.</li>
          </ul>

          <div className={styles.note}>
            En Colombia, un acta de conciliación bien redactada puede evitar
            años de litigio judicial. Por eso es importante que el acuerdo tenga
            fechas, montos, obligaciones y formas de cumplimiento claras.
          </div>

          <motion.h2 className={styles.subtitle}>
            ¿Qué pasa si no se llega a un acuerdo durante la audiencia?
          </motion.h2>

          <motion.p className={styles.text}>
            Si las partes no logran llegar a un acuerdo, el conciliador emitirá
            una <strong>constancia de no conciliación en Colombia</strong>. Este
            documento demuestra que se intentó resolver el conflicto antes de
            acudir a la vía judicial.
          </motion.p>

          <motion.p className={styles.text}>
            En muchos procesos en Bogotá y Colombia, esta constancia puede ser
            necesaria para presentar posteriormente una demanda judicial.
          </motion.p>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Quiénes participan en una audiencia de conciliación?
            </h2>

            <p className={styles.text}>
              En una audiencia de conciliación intervienen el conciliador y las
              partes involucradas en el conflicto. Dependiendo del asunto,
              también pueden participar apoderados, representantes legales o
              personas autorizadas para tomar decisiones.
            </p>

            <div className={styles.grid}>
              <div className={styles.innerCard}>
                <h3>Conciliador</h3>

                <p>
                  Dirige la audiencia, facilita el diálogo y verifica que
                  cualquier acuerdo cumpla los requisitos legales.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Solicitante</h3>

                <p>
                  Es quien presenta la solicitud de conciliación buscando
                  resolver el conflicto.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Citado</h3>

                <p>
                  Persona invitada a participar para intentar construir un
                  acuerdo.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuánto dura una audiencia de conciliación en Colombia?
            </h2>

            <p className={styles.text}>
              La duración depende de la complejidad del conflicto, la
              disposición de las partes para negociar y la cantidad de pruebas
              que deban analizarse. Muchas audiencias pueden resolverse entre
              una y tres horas, mientras que otras requieren sesiones
              adicionales cuando las partes necesitan revisar propuestas o
              documentación complementaria.
            </p>

            <p className={styles.text}>
              Aunque no existe una duración única para todos los casos, la
              conciliación suele ser significativamente más rápida que un
              proceso judicial.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué preguntas suelen hacerse durante una audiencia de
              conciliación?
            </h2>

            <p className={styles.text}>
              Durante la audiencia el conciliador formula preguntas que permitan
              comprender el origen del conflicto y facilitar la construcción de
              un acuerdo.
            </p>

            <ul className={styles.list}>
              <li>¿Qué ocurrió?</li>
              <li>¿Cuál es su pretensión?</li>
              <li>¿Qué pruebas posee?</li>
              <li>¿Qué solución propone?</li>
              <li>¿Está dispuesto a negociar?</li>
              <li>¿Cuál sería un acuerdo aceptable?</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Consejos para prepararte antes de una audiencia de conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.innerCard}>
                <h3>Organiza tus documentos</h3>

                <p>
                  Lleva todos los soportes relacionados con el conflicto
                  ordenados cronológicamente.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Calcula exactamente tu reclamación</h3>

                <p>
                  Presenta cifras claras evitando aproximaciones o valores sin
                  soporte.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Define un margen de negociación</h3>

                <p>
                  Antes de asistir establece cuáles son las condiciones mínimas
                  que aceptarías.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Mantén una actitud de diálogo</h3>

                <p>
                  Escuchar a la otra parte suele aumentar considerablemente las
                  probabilidades de alcanzar un acuerdo.
                </p>
              </div>
            </div>
          </div>

          <motion.h2 className={styles.subtitle}>
            Modelo básico de desarrollo de audiencia de conciliación
          </motion.h2>

          <pre className={styles.pre}>
            {`AUDIENCIA DE CONCILIACIÓN

Ciudad: Bogotá, Colombia
Fecha: [●]

PARTES:
Solicitante: [●]
Citado: [●]

OBJETO:
Resolver conflicto relacionado con [deuda / contrato / arrendamiento / familia].

DESARROLLO:

1. El conciliador instala la audiencia.
2. Las partes exponen los hechos.
3. Se presentan propuestas de arreglo.
4. Las partes negocian condiciones.
5. Resultado:

[ ] Se logra acuerdo.
[ ] No se logra acuerdo.
[ ] Inasistencia de una de las partes.

OBSERVACIONES:
[●]

FIRMAS:
____________________
____________________`}
          </pre>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores que debes evitar durante una audiencia de conciliación
            </h2>

            <ul className={styles.list}>
              <li>Interrumpir constantemente a la otra parte.</li>
              <li>No llevar pruebas.</li>
              <li>Firmar sin leer el acta.</li>
              <li>No revisar fechas de pago.</li>
              <li>No establecer consecuencias por incumplimiento.</li>
              <li>Negarse completamente al diálogo.</li>
              <li>No solicitar copia del acta.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuáles conflictos pueden resolverse mediante una audiencia de
              conciliación?
            </h2>

            <p className={styles.text}>
              Las audiencias de conciliación pueden utilizarse para resolver
              numerosos conflictos susceptibles de acuerdo entre las partes.
            </p>

            <ul className={styles.list}>
              <li>Cobro de deudas.</li>
              <li>Arrendamientos.</li>
              <li>Conflictos civiles.</li>
              <li>Obligaciones contractuales.</li>
              <li>Conflictos familiares.</li>
              <li>Liquidaciones laborales.</li>
              <li>Incumplimientos comerciales.</li>
              <li>Responsabilidad civil.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de resolver el conflicto mediante conciliación
            </h2>

            <div className={styles.grid}>
              <div className={styles.innerCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Permite resolver muchos conflictos en semanas y no en años.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Menores costos</h3>

                <p>
                  Reduce gastos derivados de procesos judiciales prolongados.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  Los acuerdos quedan respaldados mediante un acta de
                  conciliación.
                </p>
              </div>

              <div className={styles.innerCard}>
                <h3>Mayor control</h3>

                <p>
                  Las partes construyen conjuntamente la solución del conflicto.
                </p>
              </div>
            </div>
          </div>

          <motion.h2 className={styles.subtitle}>
            Preguntas frecuentes sobre audiencia de conciliación en Colombia
          </motion.h2>

          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <h3>
                ¿Es obligatorio asistir a una audiencia de conciliación en
                Bogotá?
              </h3>

              <p>
                Dependiendo del caso, la conciliación puede ser un requisito de
                procedibilidad antes de demandar. Por eso es importante revisar
                cada situación específica.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Qué pasa si la otra persona no asiste?</h3>

              <p>
                El conciliador dejará constancia de inasistencia, documento que
                puede utilizarse posteriormente en un proceso judicial en
                Colombia.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>
                ¿Se puede cobrar judicialmente un acuerdo de conciliación?
              </h3>

              <p>
                Sí. En Colombia, el acta de conciliación presta mérito ejecutivo
                y puede hacerse cumplir judicialmente en caso de incumplimiento.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Cuánto dura una audiencia de conciliación en Colombia?</h3>

              <p>
                Depende del caso y de la complejidad del conflicto, aunque
                muchas audiencias duran entre una y tres horas.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
