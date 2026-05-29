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
          text: "Es un mecanismo de resolución de conflictos donde las partes intentan llegar a un acuerdo con ayuda de un conciliador autorizado, evitando un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La audiencia de conciliación en Bogotá tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo contenido en el acta de conciliación presta mérito ejecutivo y hace tránsito a cosa juzgada en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué pasa si una persona no asiste a la audiencia de conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador puede emitir una constancia de inasistencia o de no conciliación, documento que puede ser utilizado posteriormente dentro de un proceso judicial en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos debo llevar a una audiencia de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es recomendable llevar cédula, contratos, facturas, chats, consignaciones, correos electrónicos, liquidaciones y cualquier soporte relacionado con el conflicto.",
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
            Audiencia de conciliación en Colombia: cómo funciona, qué pasa y
            cómo prepararte en Bogotá
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
            ¿Qué es exactamente una audiencia de conciliación en Colombia?
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
            Etapas de una audiencia de conciliación en Bogotá y Colombia
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
            Qué llevar a una audiencia de conciliación en Colombia
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
            Qué efectos legales tiene el acta de conciliación en Colombia
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
            ¿Qué pasa si no hay acuerdo en la audiencia de conciliación?
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
