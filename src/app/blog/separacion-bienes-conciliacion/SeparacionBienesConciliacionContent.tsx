"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function SeparacionBienesConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la separación de bienes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el acuerdo mediante el cual las partes definen cómo distribuir bienes y obligaciones patrimoniales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede hacerse sin demanda?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación permite llegar a acuerdos sin necesidad de iniciar un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué bienes pueden incluirse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden incluirse inmuebles, vehículos, cuentas bancarias, inversiones y otros activos patrimoniales.",
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
              Conciliación patrimonial en Colombia
            </span>

            <h1 className={styles.title}>
              Separación de bienes mediante conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              La separación de bienes mediante conciliación es una alternativa
              rápida, legal y eficiente para que las partes definan la
              distribución de su patrimonio sin necesidad de acudir
              inmediatamente a un proceso judicial.
            </p>

            <p className={styles.heroText}>
              Este mecanismo es utilizado frecuentemente por cónyuges, ex
              cónyuges y compañeros permanentes que desean resolver asuntos
              patrimoniales de forma consensuada y con respaldo jurídico.
            </p>

            <p className={styles.heroText}>
              En Bogotá y otras ciudades de Colombia, la conciliación se ha
              convertido en una herramienta eficaz para evitar conflictos
              prolongados relacionados con bienes y obligaciones económicas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la separación de bienes?
            </h2>

            <p className={styles.paragraph}>
              La separación de bienes consiste en definir qué activos,
              propiedades, inversiones y obligaciones corresponden a cada una de
              las partes una vez finaliza una relación o se decide reorganizar
              el patrimonio común.
            </p>

            <p className={styles.paragraph}>
              Cuando existe voluntad de diálogo, la conciliación permite llegar
              a acuerdos equilibrados y formalizarlos mediante un acta con
              efectos jurídicos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación ayuda a reducir costos, tiempos y desgaste
                emocional frente a los procesos judiciales relacionados con la
                distribución de bienes.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Bienes que pueden incluirse en la conciliación
            </h2>

            <ul className={styles.list}>
              <li>Casas y apartamentos.</li>
              <li>Lotes y bienes rurales.</li>
              <li>Vehículos.</li>
              <li>Cuentas bancarias.</li>
              <li>Inversiones.</li>
              <li>Negocios y establecimientos comerciales.</li>
              <li>Deudas compartidas.</li>
              <li>Muebles y enseres.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de la conciliación para separar bienes
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Los acuerdos pueden alcanzarse en mucho menos tiempo que un
                  litigio judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>
                  Reduce gastos asociados a procesos judiciales prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos voluntarios</h3>

                <p>
                  Las partes participan activamente en la construcción de las
                  soluciones.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Cómo funciona el proceso?</h2>

            <p className={styles.paragraph}>
              Las partes presentan la información relacionada con los bienes y
              obligaciones que desean distribuir.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia, el conciliador facilita la comunicación y
              promueve acuerdos que resulten beneficiosos para ambas partes.
            </p>

            <p className={styles.paragraph}>
              Si se alcanza un acuerdo, este queda consignado en un acta de
              conciliación con validez legal.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Documentos recomendados</h2>

            <ul className={styles.list}>
              <li>Documentos de identidad.</li>
              <li>Escrituras o certificados de tradición.</li>
              <li>Tarjetas de propiedad de vehículos.</li>
              <li>Extractos financieros.</li>
              <li>Soportes de inversiones.</li>
              <li>Información sobre obligaciones y deudas.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué pasa si no hay acuerdo?</h2>

            <p className={styles.paragraph}>
              Cuando no se logra una conciliación, las partes conservan el
              derecho de acudir ante las autoridades judiciales para resolver la
              controversia patrimonial.
            </p>

            <p className={styles.paragraph}>
              No obstante, la conciliación suele representar una oportunidad
              importante para alcanzar soluciones rápidas y satisfactorias.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación es obligatoria?</h3>

                <p>
                  Depende del caso específico, aunque suele ser una alternativa
                  altamente recomendable.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Se pueden repartir inmuebles?</h3>

                <p>
                  Sí. Los acuerdos pueden incluir bienes inmuebles y otros
                  activos patrimoniales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Tiene validez jurídica?</h3>

                <p>
                  Sí. El acta de conciliación produce efectos legales y puede
                  hacerse exigible.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas asesoría para una separación de bienes?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación patrimonial, acuerdos de
              distribución de bienes y soluciones legales para conflictos
              económicos en Bogotá y Colombia.
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
