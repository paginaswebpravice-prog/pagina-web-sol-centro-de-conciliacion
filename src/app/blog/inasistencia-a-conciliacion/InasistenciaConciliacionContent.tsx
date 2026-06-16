"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function InasistenciaConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué sucede si una persona no asiste a la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El conciliador puede dejar constancia de la inasistencia y finalizar la diligencia según las circunstancias del caso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo demandar después de una inasistencia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos asuntos la constancia de inasistencia permite acreditar el intento de conciliación previo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Existen consecuencias por no asistir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La inasistencia puede afectar la posibilidad de alcanzar acuerdos tempranos y generar implicaciones procesales dependiendo del caso.",
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
            <span className={styles.badge}>
              Audiencias de conciliación en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Qué pasa si una persona no asiste a la conciliación en Colombia?
            </h1>

            <p className={styles.heroText}>
              Una de las preguntas más frecuentes en los procesos de
              conciliación es qué sucede cuando una de las partes citadas no
              comparece a la audiencia programada.
            </p>

            <p className={styles.heroText}>
              La inasistencia puede tener consecuencias importantes dependiendo
              del tipo de conflicto, del trámite realizado y de los requisitos
              legales aplicables al caso.
            </p>

            <p className={styles.heroText}>
              En Bogotá y en toda Colombia, los centros de conciliación
              registran diariamente situaciones donde una de las partes no
              asiste, por lo que es importante conocer cuáles son los efectos de
              esta situación.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre cuando una persona no comparece?
            </h2>

            <p className={styles.paragraph}>
              Cuando una de las partes no asiste a la audiencia de conciliación,
              el conciliador deja constancia de lo sucedido y verifica que la
              citación haya sido realizada correctamente.
            </p>

            <p className={styles.paragraph}>
              Dependiendo de las circunstancias, el trámite puede finalizar o
              continuar conforme a las reglas aplicables al procedimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La ausencia de una de las partes impide que se lleve a cabo la
                negociación y dificulta la posibilidad de alcanzar acuerdos
                voluntarios.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la constancia de inasistencia?
            </h2>

            <p className={styles.paragraph}>
              Cuando una persona no comparece a la audiencia, el centro de
              conciliación puede expedir una constancia donde se registra la
              ausencia de la parte citada.
            </p>

            <p className={styles.paragraph}>
              Este documento suele ser importante porque acredita que existió un
              intento formal de conciliación entre las partes.
            </p>

            <p className={styles.paragraph}>
              En muchos asuntos civiles, comerciales y familiares, esta
              constancia puede ser utilizada posteriormente dentro de otros
              procedimientos legales.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Se puede demandar si la otra parte no asiste?
            </h2>

            <p className={styles.paragraph}>
              En numerosos casos sí. Cuando la conciliación constituye un
              requisito previo, la constancia expedida por el centro puede
              acreditar que se intentó resolver el conflicto de manera amistosa.
            </p>

            <p className={styles.paragraph}>
              Esto permite que la persona interesada continúe con las acciones
              legales correspondientes según la naturaleza del conflicto.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Razones frecuentes de inasistencia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Desconocimiento</h3>

                <p>
                  Algunas personas no reciben oportunamente la citación o no
                  conocen la importancia de la audiencia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Falta de interés</h3>

                <p>
                  Una de las partes puede no tener intención de negociar o
                  alcanzar acuerdos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Imposibilidad de asistir</h3>

                <p>
                  Situaciones personales, laborales o de salud pueden impedir la
                  comparecencia.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Consecuencias de no asistir a la conciliación
            </h2>

            <ul className={styles.list}>
              <li>Se pierde la oportunidad de negociar directamente.</li>
              <li>Puede generarse una constancia de inasistencia.</li>
              <li>El conflicto continúa sin solución inmediata.</li>
              <li>
                La otra parte puede continuar con las acciones legales
                correspondientes.
              </li>
              <li>
                Se incrementan las posibilidades de llegar a un proceso
                judicial.
              </li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Puede reprogramarse la audiencia?
            </h2>

            <p className={styles.paragraph}>
              Dependiendo de la situación específica, la audiencia podría ser
              reprogramada cuando exista una justificación válida y se cumplan
              las condiciones establecidas para ello.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, esto no ocurre automáticamente en todos los casos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Importancia de asistir a la audiencia
            </h2>

            <p className={styles.paragraph}>
              La conciliación representa una oportunidad para resolver el
              conflicto de manera rápida, económica y con efectos jurídicos.
            </p>

            <p className={styles.paragraph}>
              Asistir permite exponer argumentos, escuchar propuestas y explorar
              alternativas de solución que podrían evitar procesos judiciales
              más largos y costosos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre la inasistencia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puedo demandar después?</h3>

                <p>
                  En muchos casos sí, especialmente cuando existe constancia del
                  intento conciliatorio.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Pierdo automáticamente el caso?</h3>

                <p>
                  No. La inasistencia no implica automáticamente perder derechos
                  dentro del conflicto.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puedo justificar mi ausencia?</h3>

                <p>
                  Dependiendo de las circunstancias, es posible informar las
                  razones de la inasistencia ante el centro de conciliación.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Tienes dudas sobre una audiencia de conciliación?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre audiencias, citaciones, inasistencias y
              procedimientos de conciliación en Bogotá y Colombia.
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
