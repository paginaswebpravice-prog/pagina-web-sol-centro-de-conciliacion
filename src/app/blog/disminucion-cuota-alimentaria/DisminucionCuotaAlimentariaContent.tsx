"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function DisminucionCuotaAlimentariaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo disminuir una cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La disminución puede solicitarse mediante conciliación cuando existan cambios que afecten la capacidad económica del obligado o las circunstancias del acuerdo inicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué documentos pueden ser necesarios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden requerirse soportes financieros, documentos laborales, pruebas de ingresos y el acuerdo de alimentos previamente suscrito.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es necesario llegar a un nuevo acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La modificación debe quedar formalizada en una nueva acta de conciliación para producir efectos legales.",
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
              Conciliación familiar en Colombia
            </span>

            <h1 className={styles.title}>
              Disminución de cuota alimentaria en Colombia: requisitos y proceso
            </h1>

            <p className={styles.heroText}>
              La cuota alimentaria puede ser modificada cuando cambian las
              circunstancias económicas o personales de quienes participan en el
              acuerdo. En algunos casos, la situación financiera del obligado
              puede verse afectada de manera significativa, haciendo necesario
              revisar el valor inicialmente pactado.
            </p>

            <p className={styles.heroText}>
              La conciliación familiar permite que las partes analicen la nueva
              situación y busquen una solución equilibrada sin necesidad de
              acudir directamente a un proceso judicial.
            </p>

            <p className={styles.heroText}>
              Este mecanismo es ampliamente utilizado en Bogotá y Colombia para
              modificar acuerdos relacionados con alimentos de manera más rápida
              y flexible.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo puede solicitarse una disminución de cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              La reducción de una cuota alimentaria generalmente se solicita
              cuando existen cambios relevantes que afectan la capacidad de pago
              de quien debe cumplir con la obligación.
            </p>

            <p className={styles.paragraph}>
              Cada caso debe analizarse individualmente, teniendo en cuenta las
              necesidades del beneficiario y las condiciones económicas actuales
              de las partes involucradas.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La disminución de la cuota alimentaria no ocurre de forma
                automática. Debe existir una justificación razonable y, en lo
                posible, formalizarse mediante conciliación o el mecanismo legal
                correspondiente.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Situaciones que pueden justificar una reducción
            </h2>

            <ul className={styles.list}>
              <li>Pérdida del empleo.</li>
              <li>Reducción significativa de ingresos.</li>
              <li>Incapacidad laboral temporal o permanente.</li>
              <li>Problemas de salud que generan gastos elevados.</li>
              <li>Cambios familiares relevantes.</li>
              <li>Disminución comprobada de capacidad económica.</li>
              <li>Variaciones importantes en las circunstancias iniciales.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo funciona la conciliación para reducir la cuota?
            </h2>

            <p className={styles.paragraph}>
              Las partes son convocadas a una audiencia donde pueden exponer sus
              argumentos y presentar la documentación que respalde la solicitud
              de modificación.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita el diálogo y ayuda a construir un acuerdo
              que tenga en cuenta tanto las necesidades del beneficiario como la
              realidad económica actual del obligado.
            </p>

            <p className={styles.paragraph}>
              Si existe consenso, se firma una nueva acta de conciliación que
              modifica formalmente el acuerdo anterior.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de acudir a conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Rapidez</h3>

                <p>
                  Permite revisar la cuota alimentaria en menos tiempo que un
                  proceso judicial tradicional.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>
                  Reduce gastos asociados a litigios prolongados y trámites
                  complejos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  Los acuerdos conciliatorios tienen validez legal y pueden ser
                  exigidos en caso de incumplimiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que pueden ayudar en la solicitud
            </h2>

            <ul className={styles.list}>
              <li>Acta de conciliación anterior.</li>
              <li>Certificados laborales.</li>
              <li>Soportes de ingresos actuales.</li>
              <li>Documentos médicos relevantes.</li>
              <li>Pruebas de gastos extraordinarios.</li>
              <li>Información financiera actualizada.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué ocurre si no hay acuerdo?</h2>

            <p className={styles.paragraph}>
              Cuando las partes no logran llegar a un acuerdo durante la
              conciliación, pueden existir otros mecanismos legales para
              solicitar la revisión de la obligación alimentaria.
            </p>

            <p className={styles.paragraph}>
              La viabilidad de cada alternativa dependerá de las circunstancias
              particulares del caso y de las pruebas disponibles.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre disminución de cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La cuota puede disminuirse varias veces?</h3>

                <p>
                  Sí, siempre que existan cambios justificables que soporten una
                  nueva revisión.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es obligatorio un nuevo acuerdo?</h3>

                <p>
                  Sí. La modificación debe formalizarse para que tenga efectos
                  legales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>

                <p>
                  Muchos centros de conciliación permiten realizar audiencias de
                  forma virtual.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas modificar una cuota alimentaria?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, acuerdos de
              alimentos, disminución de cuota alimentaria y mecanismos legales
              para actualizar obligaciones familiares en Bogotá y Colombia.
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
