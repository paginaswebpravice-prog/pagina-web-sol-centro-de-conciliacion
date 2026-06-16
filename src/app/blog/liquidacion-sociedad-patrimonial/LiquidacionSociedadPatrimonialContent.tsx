"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function LiquidacionSociedadPatrimonialContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué bienes pueden incluirse en la liquidación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pueden incluirse bienes adquiridos durante la unión patrimonial, dependiendo de cada caso particular.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos permite alcanzar acuerdos sin necesidad de acudir a un proceso judicial largo y costoso.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir con abogado?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dependiendo del caso y del centro de conciliación, puede ser recomendable recibir asesoría jurídica previa.",
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
              Conciliación familiar y patrimonial
            </span>

            <h1 className={styles.title}>
              Liquidación de sociedad patrimonial por conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando una unión marital de hecho llega a su fin, uno de los temas
              más importantes es la distribución de los bienes adquiridos
              durante la convivencia. La conciliación permite que los compañeros
              permanentes alcancen acuerdos de manera voluntaria y con respaldo
              legal.
            </p>

            <p className={styles.heroText}>
              La liquidación de sociedad patrimonial mediante conciliación es
              una alternativa eficiente para evitar procesos judiciales
              prolongados, reduciendo costos y facilitando acuerdos equilibrados
              entre las partes.
            </p>

            <p className={styles.heroText}>
              En Bogotá y Colombia, este mecanismo es ampliamente utilizado para
              resolver controversias relacionadas con inmuebles, vehículos,
              cuentas bancarias, negocios y otros bienes adquiridos durante la
              convivencia.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es una sociedad patrimonial?
            </h2>

            <p className={styles.paragraph}>
              La sociedad patrimonial entre compañeros permanentes es una figura
              jurídica que reconoce los bienes y derechos adquiridos durante la
              convivencia cuando se cumplen los requisitos establecidos por la
              legislación colombiana.
            </p>

            <p className={styles.paragraph}>
              Cuando la relación termina, resulta necesario definir cómo se
              distribuirán dichos bienes, obligaciones y activos patrimoniales.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación permite construir acuerdos voluntarios sobre la
                distribución del patrimonio sin necesidad de acudir inicialmente
                a un juez.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué puede incluirse en la liquidación?
            </h2>

            <ul className={styles.list}>
              <li>Bienes inmuebles.</li>
              <li>Vehículos.</li>
              <li>Cuentas bancarias.</li>
              <li>Inversiones financieras.</li>
              <li>Negocios o establecimientos comerciales.</li>
              <li>Deudas adquiridas durante la convivencia.</li>
              <li>Muebles y enseres.</li>
              <li>Otros activos patrimoniales.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de la conciliación patrimonial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor costo</h3>

                <p>
                  Evita los gastos asociados a procesos judiciales extensos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>Permite alcanzar acuerdos en menos tiempo que un litigio.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos personalizados</h3>

                <p>
                  Las partes pueden diseñar soluciones adaptadas a su situación
                  patrimonial.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se desarrolla la conciliación?
            </h2>

            <p className={styles.paragraph}>
              Los compañeros permanentes presentan la información relacionada
              con los bienes y obligaciones que desean incluir dentro de la
              liquidación patrimonial.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia, el conciliador facilita el diálogo y ayuda a
              construir acuerdos sobre la distribución de activos y pasivos.
            </p>

            <p className={styles.paragraph}>
              Una vez alcanzado el acuerdo, este queda consignado en un acta de
              conciliación con efectos jurídicos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <ul className={styles.list}>
              <li>Documentos de identidad.</li>
              <li>Pruebas de la unión marital de hecho.</li>
              <li>Certificados de tradición de inmuebles.</li>
              <li>Tarjetas de propiedad de vehículos.</li>
              <li>Extractos bancarios o soportes financieros.</li>
              <li>Información relacionada con deudas vigentes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no existe acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Si las partes no logran conciliar, podrán acudir a los mecanismos
              judiciales correspondientes para que la situación patrimonial sea
              resuelta por un juez competente.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, la conciliación suele representar una oportunidad
              efectiva para encontrar soluciones rápidas y satisfactorias para
              ambas partes.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación tiene validez legal?</h3>

                <p>
                  Sí. Los acuerdos conciliatorios tienen efectos jurídicos y
                  pueden formalizar compromisos patrimoniales.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Se pueden repartir inmuebles?</h3>

                <p>
                  Dependiendo del caso, la conciliación puede incluir acuerdos
                  relacionados con bienes inmuebles y otros activos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede modificarse un acuerdo posterior?</h3>

                <p>
                  En determinadas circunstancias las partes pueden celebrar
                  nuevos acuerdos para actualizar situaciones patrimoniales.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas liquidar una sociedad patrimonial?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, unión marital de
              hecho, distribución de bienes y acuerdos patrimoniales en Bogotá y
              Colombia.
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
