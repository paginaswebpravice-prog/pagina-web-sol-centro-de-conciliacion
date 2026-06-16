"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function AcuerdosFamiliaresContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Los acuerdos familiares requieren abogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso puede ser recomendable recibir asesoría jurídica previa, aunque muchos asuntos pueden tramitarse mediante conciliación.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos permite resolver conflictos familiares sin necesidad de iniciar una demanda.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué sucede si alguien incumple el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El acuerdo conciliatorio puede hacerse exigible legalmente según las normas aplicables.",
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
              Acuerdos familiares extrajudiciales en Colombia
            </h1>

            <p className={styles.heroText}>
              Los acuerdos familiares extrajudiciales permiten que los miembros
              de una familia solucionen conflictos mediante el diálogo y la
              conciliación, evitando procesos judiciales largos y costosos.
            </p>

            <p className={styles.heroText}>
              Este mecanismo es ampliamente utilizado en Bogotá y Colombia para
              resolver asuntos relacionados con hijos menores, alimentos,
              custodia, régimen de visitas, bienes familiares y otras
              situaciones que afectan la convivencia.
            </p>

            <p className={styles.heroText}>
              La conciliación facilita la construcción de acuerdos voluntarios,
              equilibrados y jurídicamente válidos que benefician a todas las
              partes involucradas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué son los acuerdos familiares extrajudiciales?
            </h2>

            <p className={styles.paragraph}>
              Son acuerdos alcanzados por integrantes de una familia para
              solucionar diferencias sin necesidad de acudir inicialmente a un
              juez.
            </p>

            <p className={styles.paragraph}>
              Estos acuerdos pueden formalizarse mediante una audiencia de
              conciliación y quedar consignados en un acta con efectos legales.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación familiar promueve soluciones pacíficas, preserva
                las relaciones personales y reduce significativamente el
                desgaste emocional asociado a los conflictos familiares.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Asuntos que pueden resolverse mediante conciliación
            </h2>

            <ul className={styles.list}>
              <li>Cuotas alimentarias.</li>
              <li>Custodia y cuidado personal.</li>
              <li>Régimen de visitas.</li>
              <li>Gastos extraordinarios de hijos.</li>
              <li>Separación de bienes.</li>
              <li>Liquidación de sociedad patrimonial.</li>
              <li>Obligaciones económicas familiares.</li>
              <li>Otros asuntos conciliables permitidos por la ley.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de llegar a acuerdos familiares
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>

                <p>
                  Favorece el diálogo y reduce la confrontación entre las
                  partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Los acuerdos suelen alcanzarse en menos tiempo que un proceso
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>

                <p>
                  Los acuerdos conciliatorios tienen efectos legales y pueden
                  hacerse cumplir.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo funciona una conciliación familiar?
            </h2>

            <p className={styles.paragraph}>
              Las partes presentan el conflicto ante un centro de conciliación
              autorizado y participan en una audiencia dirigida por un
              conciliador.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita la comunicación, promueve soluciones y
              ayuda a construir acuerdos equilibrados para todos los
              involucrados.
            </p>

            <p className={styles.paragraph}>
              Si se alcanza un acuerdo, este queda consignado en un acta de
              conciliación con efectos jurídicos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas frente a una demanda judicial
            </h2>

            <ul className={styles.list}>
              <li>Menor costo económico.</li>
              <li>Resolución más rápida.</li>
              <li>Mayor participación de las partes.</li>
              <li>Menor desgaste emocional.</li>
              <li>Posibilidad de acuerdos personalizados.</li>
              <li>Conservación de relaciones familiares.</li>
              <li>Mayor flexibilidad para encontrar soluciones.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué sucede si no hay acuerdo?</h2>

            <p className={styles.paragraph}>
              Si no se alcanza un acuerdo durante la conciliación, las partes
              podrán acudir a los mecanismos judiciales correspondientes para
              que el conflicto sea resuelto por la autoridad competente.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, la conciliación suele representar una oportunidad
              efectiva para encontrar soluciones rápidas y satisfactorias antes
              de iniciar un litigio.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Los acuerdos tienen validez legal?</h3>

                <p>
                  Sí. Los acuerdos conciliatorios tienen efectos jurídicos en
                  Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es obligatorio asistir?</h3>

                <p>
                  Dependiendo del asunto, la conciliación puede ser requisito
                  previo para determinados procesos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Pueden modificarse los acuerdos?</h3>

                <p>
                  En algunos casos es posible realizar nuevas conciliaciones
                  para actualizar acuerdos familiares.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas ayuda para resolver un conflicto familiar?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, acuerdos
              extrajudiciales, alimentos, custodia, visitas y solución de
              conflictos familiares en Bogotá y Colombia.
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
