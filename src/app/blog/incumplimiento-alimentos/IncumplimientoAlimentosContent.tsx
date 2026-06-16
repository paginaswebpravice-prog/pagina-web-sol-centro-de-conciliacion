"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function IncumplimientoAlimentosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo exigir judicialmente una conciliación de alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación puede utilizarse para exigir judicialmente el cumplimiento de la obligación alimentaria.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos necesito?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere el acta de conciliación y las pruebas del incumplimiento de los pagos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo solicitar una nueva conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Dependiendo de las circunstancias, las partes pueden intentar una nueva conciliación para resolver la situación.",
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
              Cuota alimentaria y conciliación familiar
            </span>

            <h1 className={styles.title}>
              Incumplimiento de conciliación de alimentos en Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando una persona incumple un acuerdo de cuota alimentaria
              firmado mediante conciliación, existen mecanismos legales para
              exigir su cumplimiento y proteger los derechos de los menores o
              beneficiarios de la obligación.
            </p>

            <p className={styles.heroText}>
              En Colombia, las conciliaciones sobre alimentos tienen efectos
              jurídicos y constituyen una herramienta fundamental para
              garantizar el bienestar económico de los hijos y demás personas
              con derecho a recibir alimentos.
            </p>

            <p className={styles.heroText}>
              Conocer las alternativas disponibles frente al incumplimiento
              permite actuar de forma oportuna y evitar que la situación afecte
              la estabilidad familiar.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre cuando se incumple una conciliación de alimentos?
            </h2>

            <p className={styles.paragraph}>
              El incumplimiento se presenta cuando la persona obligada deja de
              realizar los pagos acordados, realiza pagos incompletos o no
              cumple otras obligaciones establecidas en el acta de conciliación.
            </p>

            <p className={styles.paragraph}>
              Debido a que el acuerdo tiene validez jurídica, el beneficiario
              puede acudir a diferentes mecanismos para exigir su cumplimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El acta de conciliación sobre alimentos presta mérito ejecutivo,
                lo que significa que puede servir como base para iniciar
                acciones legales orientadas a obtener el pago de las sumas
                adeudadas.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Señales de incumplimiento frecuentes
            </h2>

            <ul className={styles.list}>
              <li>Retrasos constantes en los pagos.</li>
              <li>Suspensión total de la cuota alimentaria.</li>
              <li>Pagos inferiores a los acordados.</li>
              <li>Incumplimiento de gastos educativos.</li>
              <li>Incumplimiento de gastos médicos.</li>
              <li>Falta de pago de gastos extraordinarios pactados.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Opciones para exigir el cumplimiento
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Requerimiento directo</h3>

                <p>
                  En algunos casos es posible intentar una solución amistosa
                  antes de acudir a otras instancias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Nueva conciliación</h3>

                <p>
                  Las partes pueden intentar renegociar condiciones cuando han
                  cambiado las circunstancias económicas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acciones judiciales</h3>

                <p>
                  El beneficiario puede acudir a los mecanismos legales para
                  exigir el cumplimiento del acuerdo.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos importantes para reclamar
            </h2>

            <ul className={styles.list}>
              <li>Acta de conciliación de alimentos.</li>
              <li>Comprobantes de pagos realizados.</li>
              <li>Pruebas de los pagos incumplidos.</li>
              <li>Documentos de identificación.</li>
              <li>Soportes de gastos del menor o beneficiario.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Puede modificarse la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Sí. Cuando existen cambios importantes en la situación económica
              de alguna de las partes, puede solicitarse una nueva conciliación
              para revisar el valor de la cuota alimentaria.
            </p>

            <p className={styles.paragraph}>
              Lo recomendable es formalizar cualquier modificación mediante los
              mecanismos legales correspondientes para evitar futuros
              conflictos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Consecuencias del incumplimiento
            </h2>

            <ul className={styles.list}>
              <li>Acumulación de obligaciones pendientes.</li>
              <li>Procesos para exigir el pago de las cuotas adeudadas.</li>
              <li>Posibles medidas judiciales de cumplimiento.</li>
              <li>Afectación de los derechos del menor beneficiario.</li>
              <li>Incremento de conflictos familiares.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos en
                  Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puedo exigir los pagos atrasados?</h3>

                <p>
                  Existen mecanismos legales para reclamar el cumplimiento de
                  las obligaciones alimentarias incumplidas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Debo hacer otra conciliación?</h3>

                <p>
                  Dependiendo del caso, una nueva conciliación puede ayudar a
                  encontrar soluciones antes de acudir a otras instancias.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Tienes problemas por incumplimiento de alimentos?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, cuotas
              alimentarias, cumplimiento de acuerdos y mecanismos legales
              disponibles en Bogotá y Colombia.
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
