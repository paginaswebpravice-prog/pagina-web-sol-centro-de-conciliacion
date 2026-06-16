"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AumentoCuotaAlimentariaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo solicitar un aumento de cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede solicitarse mediante conciliación cuando existan cambios que justifiquen la modificación del valor acordado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué factores se analizan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se consideran las necesidades del menor y la capacidad económica de quien debe realizar los aportes.",
        },
      },
      {
        "@type": "Question",
        name: "¿La modificación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acuerdo conciliatorio genera efectos jurídicos una vez queda consignado en el acta correspondiente.",
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
              Aumento de cuota alimentaria por conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              Las necesidades de los hijos cambian con el paso del tiempo.
              Gastos de educación, salud, transporte, vivienda y recreación
              pueden aumentar significativamente, haciendo necesario revisar la
              cuota alimentaria previamente acordada.
            </p>

            <p className={styles.heroText}>
              En Colombia, una de las alternativas más rápidas y efectivas para
              actualizar una cuota alimentaria es acudir a un proceso de
              conciliación familiar.
            </p>

            <p className={styles.heroText}>
              La conciliación permite que las partes revisen el acuerdo
              existente y establezcan nuevas condiciones de forma voluntaria,
              evitando procesos judiciales más extensos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo puede solicitarse un aumento de cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              El aumento puede solicitarse cuando existen cambios importantes
              respecto a las condiciones que dieron origen al acuerdo inicial.
            </p>

            <p className={styles.paragraph}>
              Lo más importante es demostrar que las necesidades del
              beneficiario han aumentado o que existen nuevas circunstancias que
              justifican revisar el valor establecido anteriormente.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El crecimiento del menor, nuevos gastos educativos, tratamientos
                médicos o cambios económicos pueden motivar una solicitud de
                aumento de cuota alimentaria.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Situaciones frecuentes que justifican el aumento
            </h2>

            <ul className={styles.list}>
              <li>Incremento de gastos escolares.</li>
              <li>Ingreso a educación superior.</li>
              <li>Nuevos gastos médicos o terapias.</li>
              <li>Aumento del costo de vida.</li>
              <li>Incremento en gastos de transporte.</li>
              <li>Cambios en las condiciones económicas familiares.</li>
              <li>Necesidades especiales del menor.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo funciona la conciliación para aumentar la cuota?
            </h2>

            <p className={styles.paragraph}>
              Las partes son citadas a una audiencia donde pueden exponer las
              razones que justifican la modificación del acuerdo anterior.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita el diálogo y ayuda a construir un acuerdo
              equilibrado que tenga en cuenta tanto las necesidades del menor
              como la capacidad económica de quien realiza los aportes.
            </p>

            <p className={styles.paragraph}>
              Si existe acuerdo, se firma una nueva acta que reemplaza o
              modifica las condiciones previamente pactadas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de realizar el aumento mediante conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Rapidez</h3>
                <p>
                  Permite actualizar la cuota en menos tiempo que un proceso
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>
                <p>
                  Favorece acuerdos construidos mediante diálogo y cooperación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>
                <p>
                  El nuevo acuerdo tiene efectos legales y puede exigirse en
                  caso de incumplimiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que pueden ser útiles
            </h2>

            <ul className={styles.list}>
              <li>Acta de conciliación anterior.</li>
              <li>Registro civil del menor.</li>
              <li>Soportes de gastos escolares.</li>
              <li>Facturas médicas o tratamientos.</li>
              <li>Documentación relacionada con ingresos y egresos.</li>
              <li>Pruebas de nuevas necesidades económicas.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué pasa si no hay acuerdo?</h2>

            <p className={styles.paragraph}>
              Cuando las partes no logran llegar a un consenso durante la
              conciliación, pueden existir otras alternativas legales para
              solicitar la revisión de la cuota alimentaria.
            </p>

            <p className={styles.paragraph}>
              Cada situación debe analizarse individualmente teniendo en cuenta
              las circunstancias particulares del caso.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre aumento de cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La cuota puede aumentar varias veces?</h3>
                <p>
                  Sí. Siempre que existan razones justificadas puede revisarse
                  nuevamente.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es necesario un nuevo acuerdo?</h3>
                <p>
                  Sí. La modificación debe quedar formalmente registrada para
                  generar efectos jurídicos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>
                <p>
                  Muchos centros de conciliación ofrecen audiencias virtuales
                  para facilitar el trámite.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas modificar una cuota alimentaria?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, aumento de cuota
              alimentaria, acuerdos para menores de edad y procesos de
              conciliación en Bogotá y Colombia.
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
