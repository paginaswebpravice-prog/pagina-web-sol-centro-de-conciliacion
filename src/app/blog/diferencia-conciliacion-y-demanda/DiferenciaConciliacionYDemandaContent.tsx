"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function DiferenciaConciliacionYDemandaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es más rápido, una conciliación o una demanda judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación suele ser más rápida porque busca acuerdos voluntarios entre las partes sin necesidad de un proceso judicial completo.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene plenos efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo demandar después de intentar conciliar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Si no se logra un acuerdo conciliatorio, las partes pueden acudir posteriormente a la vía judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación es obligatoria antes de demandar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En diversos asuntos civiles, comerciales y familiares la conciliación extrajudicial constituye un requisito previo antes de presentar una demanda.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

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
            <span className={styles.badge}>Guía jurídica en Colombia</span>

            <h1 className={styles.title}>
              Diferencia entre conciliación y demanda judicial en Colombia:
              ¿cuál es la mejor opción para resolver un conflicto?
            </h1>

            <p className={styles.heroText}>
              Cuando surge un conflicto relacionado con un contrato, una deuda,
              un arrendamiento, un problema familiar o un desacuerdo entre
              particulares, muchas personas se preguntan si deben acudir primero
              a una conciliación o presentar directamente una demanda judicial.
              Elegir el mecanismo adecuado puede marcar una gran diferencia en
              el tiempo, el costo y las posibilidades de resolver el conflicto.
            </p>

            <p className={styles.heroText}>
              En Colombia, la conciliación extrajudicial se ha consolidado como
              uno de los mecanismos más eficaces para solucionar controversias
              de manera rápida, voluntaria y con plena validez jurídica. En
              numerosos asuntos incluso es un requisito previo antes de
              presentar una demanda ante un juez.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás las principales diferencias entre
              conciliación y demanda judicial, sus ventajas, desventajas,
              tiempos aproximados, costos y los casos en los que conviene acudir
              a cada alternativa para tomar una decisión informada.
            </p>
          </div>

          {/* QUE DIFERENCIA EXISTE ENTRE CONCILIACION Y DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Diferencia entre conciliación y demanda judicial: comparación
              completa
            </h2>

            <p className={styles.paragraph}>
              Aunque ambos mecanismos buscan resolver conflictos jurídicos, la
              forma en que lo hacen es completamente diferente. En la
              conciliación son las propias partes quienes construyen un acuerdo
              con el acompañamiento de un conciliador imparcial, mientras que en
              la demanda judicial la decisión final queda en manos de un juez.
            </p>

            <p className={styles.paragraph}>
              Esto significa que la conciliación promueve el diálogo, la
              negociación y soluciones flexibles, mientras que el proceso
              judicial sigue un trámite formal que culmina con una sentencia
              obligatoria.
            </p>

            <div className={styles.highlightBox}>
              <p>
                En pocas palabras, en la conciliación las partes conservan el
                control del resultado; en una demanda judicial la decisión
                corresponde al juez.
              </p>
            </div>
          </div>

          {/* QUE ES UNA CONCILIACION EN COLOMBIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la conciliación extrajudicial y cómo funciona?
            </h2>

            <p className={styles.paragraph}>
              La conciliación es un mecanismo alternativo de solución de
              conflictos reconocido por la ley colombiana. Su finalidad es
              permitir que las partes encuentren soluciones sin necesidad de un
              proceso judicial.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia, un conciliador facilita el diálogo y ayuda a
              construir acuerdos que satisfagan los intereses de ambas partes.
            </p>

            <p className={styles.paragraph}>
              Cuando se logra un acuerdo, este queda plasmado en un acta de
              conciliación que posee plenos efectos jurídicos.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia cada parte expone su posición, presenta los
              documentos que considere necesarios y propone alternativas de
              solución. Si existe voluntad de negociar, el conciliador facilita
              la comunicación para alcanzar un acuerdo beneficioso para todos.
            </p>
          </div>

          {/* QUE ES UNA DEMANDA JUDICIAL EN COLOMBIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué implica iniciar una demanda judicial en Colombia?
            </h2>

            <p className={styles.paragraph}>
              Una demanda judicial es el procedimiento mediante el cual una
              persona solicita la intervención de un juez para resolver una
              controversia.
            </p>

            <p className={styles.paragraph}>
              Dependiendo del tipo de proceso, pueden intervenir abogados,
              jueces, notificaciones, audiencias, práctica de pruebas, recursos
              y diversas etapas procesales que hacen que la solución del
              conflicto tome más tiempo frente a una conciliación.
            </p>

            <p className={styles.paragraph}>
              En este escenario las partes presentan pruebas, argumentos y
              solicitudes que serán evaluadas por la autoridad judicial.
            </p>

            <p className={styles.paragraph}>
              Finalmente el juez emite una sentencia que debe ser cumplida por
              las partes involucradas.
            </p>
          </div>

          {/* COMPARACION ENTRE CONCILIACION Y DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Comparación entre conciliación y demanda judicial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Tiempo</h3>

                <p>
                  La conciliación suele resolverse en semanas. Una demanda puede
                  tardar meses o incluso años.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Costos</h3>

                <p>
                  Generalmente la conciliación resulta menos costosa que un
                  proceso judicial completo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Resultado</h3>

                <p>
                  La conciliación genera acuerdos. La demanda produce una
                  sentencia judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Control de la decisión</h3>

                <p>
                  En la conciliación las partes deciden el contenido del
                  acuerdo; en la demanda la decisión final corresponde al juez.
                </p>
              </div>
            </div>
          </div>

          {/* TIEMPO Y COSTOS DE UNA CONCILIACION FRENTE A UNA DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Tiempo promedio de una conciliación frente a una demanda
            </h2>

            <p className={styles.paragraph}>
              Uno de los aspectos más relevantes es el tiempo. Las audiencias de
              conciliación suelen programarse rápidamente y permiten resolver el
              conflicto en un periodo relativamente corto.
            </p>

            <p className={styles.paragraph}>
              Las demandas judiciales pueden extenderse durante largos periodos
              debido a notificaciones, pruebas, audiencias y recursos legales.
            </p>

            <p className={styles.paragraph}>
              Aunque la duración depende de cada caso, una conciliación
              normalmente puede concluir en pocas semanas cuando ambas partes
              participan activamente. Un proceso judicial, por el contrario,
              puede prolongarse durante meses o incluso varios años según la
              complejidad del asunto y la carga de los despachos judiciales.
            </p>
          </div>

          {/* COSTOS DE UNA CONCILIACION FRENTE A UNA DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Costos de una conciliación frente a una demanda
            </h2>

            <p className={styles.paragraph}>
              Los procesos judiciales suelen implicar mayores costos debido a la
              duración del trámite y la necesidad de actuaciones adicionales.
            </p>

            <p className={styles.paragraph}>
              La conciliación permite reducir significativamente los gastos y
              alcanzar soluciones más rápidas.
            </p>
          </div>

          {/* CUANDO CONVIENE ACUDIR A UNA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo conviene acudir a una conciliación?
            </h2>

            <ul className={styles.list}>
              <li>Conflictos familiares.</li>
              <li>Arrendamientos.</li>
              <li>Cobro de deudas.</li>
              <li>Incumplimiento de contratos.</li>
              <li>Conflictos vecinales.</li>
              <li>Asuntos comerciales.</li>
              <li>Obligaciones económicas.</li>
            </ul>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente conveniente cuando ambas
              partes desean evitar un litigio, conservar una relación personal o
              comercial y encontrar soluciones rápidas mediante el diálogo.
            </p>
          </div>

          {/* CUANDO ES NECESARIO PRESENTAR UNA DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo es necesario presentar una demanda judicial?
            </h2>

            <p className={styles.paragraph}>
              Una demanda suele ser necesaria cuando una de las partes se niega
              a negociar, incumple obligaciones o el conflicto requiere una
              decisión judicial definitiva.
            </p>

            <p className={styles.paragraph}>
              También puede ser necesaria cuando una de las partes incumple un
              acuerdo conciliatorio, desconoce completamente la obligación o el
              conflicto involucra materias que únicamente pueden ser resueltas
              por un juez.
            </p>
          </div>

          {/* LA CONCILIACION ES OBLIGATORIA ANTES DE DEMANDAR */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿La conciliación es obligatoria antes de demandar?
            </h2>

            <p className={styles.paragraph}>
              En numerosos asuntos civiles, comerciales y familiares, la ley
              colombiana exige intentar previamente una conciliación antes de
              presentar una demanda.
            </p>

            <p className={styles.paragraph}>
              Este requisito busca fomentar soluciones consensuadas y disminuir
              la congestión de los despachos judiciales.
            </p>
          </div>

          {/* VENTAJAS DE LA CONCILIACION FRENTE A UNA DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué muchas personas prefieren la conciliación antes que una
              demanda?
            </h2>

            <ul className={styles.list}>
              <li>Menores costos.</li>
              <li>Mayor rapidez.</li>
              <li>Mayor flexibilidad.</li>
              <li>Menor desgaste emocional.</li>
              <li>Conservación de relaciones personales y comerciales.</li>
              <li>Validez jurídica de los acuerdos.</li>
              <li>Posibilidad de realizar audiencias virtuales.</li>
            </ul>

            <p className={styles.paragraph}>
              La conciliación no pretende reemplazar la justicia, sino ofrecer
              una alternativa eficiente para resolver conflictos cuando existe
              disposición para dialogar. Esto explica por qué cada vez más
              personas y empresas la utilizan antes de iniciar un proceso
              judicial.
            </p>
          </div>

          {/* QUE CONFLICTOS SUELEN RESOLVERSE MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué conflictos suelen resolverse mediante conciliación?
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conflictos civiles</h3>

                <p>
                  Cobro de deudas, incumplimientos contractuales, daños y
                  perjuicios y obligaciones económicas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Arrendamientos</h3>

                <p>
                  Entrega de inmuebles, cánones pendientes, terminación de
                  contratos y acuerdos entre arrendador y arrendatario.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Asuntos familiares</h3>

                <p>
                  Cuotas alimentarias, custodia, visitas, separación de bienes y
                  otros conflictos conciliables.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conflictos comerciales</h3>

                <p>
                  Incumplimientos entre empresas, proveedores, clientes y
                  obligaciones derivadas de contratos comerciales.
                </p>
              </div>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES SOBRE CONCILIACION Y DEMANDA JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre conciliación y demanda judicial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Qué es más rápido?</h3>

                <p>
                  La conciliación normalmente permite obtener resultados en un
                  menor tiempo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué tiene más validez legal?</h3>

                <p>
                  Tanto el acta de conciliación como una sentencia judicial
                  tienen efectos jurídicos reconocidos por la ley.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué pasa si no hay acuerdo?</h3>

                <p>
                  Las partes pueden acudir posteriormente a la vía judicial.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas orientación para resolver un conflicto?
            </h3>

            <p className={styles.ctaText}>
              Recibe asesoría sobre conciliación extrajudicial en Bogotá y
              Colombia para determinar cuál es la mejor alternativa según tu
              situación particular.
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
