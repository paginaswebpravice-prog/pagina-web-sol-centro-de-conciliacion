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
          <div className={styles.heroContent}>
            <span className={styles.badge}>Guía jurídica en Colombia</span>

            <h1 className={styles.title}>
              Diferencia entre conciliación y demanda judicial en Colombia:
              ¿cuál conviene según tu caso?
            </h1>

            <p className={styles.heroText}>
              Cuando surge un conflicto legal, muchas personas no saben si deben
              acudir a una conciliación o iniciar una demanda judicial. Aunque
              ambos mecanismos buscan resolver controversias, funcionan de forma
              diferente y tienen ventajas específicas según cada situación.
            </p>

            <p className={styles.heroText}>
              En Bogotá y Colombia, la conciliación extrajudicial se ha
              convertido en una de las alternativas más utilizadas para evitar
              procesos largos y costosos ante los jueces.
            </p>

            <p className={styles.heroText}>
              Comprender las diferencias entre conciliación y demanda judicial
              puede ayudarte a tomar mejores decisiones y resolver conflictos de
              manera más eficiente.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué diferencia existe entre conciliación y demanda judicial?
            </h2>

            <p className={styles.paragraph}>
              La principal diferencia radica en la forma en que se resuelve el
              conflicto. En la conciliación, las partes intentan alcanzar un
              acuerdo voluntario con la ayuda de un conciliador imparcial.
            </p>

            <p className={styles.paragraph}>
              En una demanda judicial, por el contrario, el conflicto es llevado
              ante un juez, quien estudia el caso y finalmente emite una
              decisión obligatoria para las partes.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación promueve acuerdos construidos por las partes. La
                demanda judicial delega la decisión final a una autoridad
                judicial.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es una conciliación extrajudicial en Colombia?
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
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué es una demanda judicial?</h2>

            <p className={styles.paragraph}>
              Una demanda judicial es el procedimiento mediante el cual una
              persona solicita la intervención de un juez para resolver una
              controversia.
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
            </div>
          </div>

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
          </div>

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
              Cuando existe voluntad de diálogo, la conciliación suele ser la
              mejor alternativa para resolver el conflicto.
            </p>
          </div>

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
              También existen asuntos que por disposición legal deben ser
              resueltos por jueces competentes.
            </p>
          </div>

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

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de la conciliación frente a una demanda
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
          </div>

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
