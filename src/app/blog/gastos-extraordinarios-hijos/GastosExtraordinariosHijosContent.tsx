"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function GastosExtraordinariosHijosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Los gastos extraordinarios hacen parte de la cuota alimentaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente no. Son gastos adicionales que surgen por necesidades específicas o imprevistas del menor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se pueden distribuir estos gastos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los padres pueden acordar porcentajes, montos o mecanismos específicos para asumirlos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es posible modificar el acuerdo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las circunstancias económicas o familiares puede realizarse una nueva conciliación.",
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
              Gastos extraordinarios de hijos: cómo conciliarlos adecuadamente
            </h1>

            <p className={styles.heroText}>
              Cuando los padres se encuentran separados, uno de los temas que
              más genera conflictos son los gastos extraordinarios relacionados
              con los hijos. Aunque existe una cuota alimentaria previamente
              acordada, pueden surgir necesidades adicionales que requieren una
              distribución clara de responsabilidades.
            </p>

            <p className={styles.heroText}>
              La conciliación familiar permite establecer acuerdos precisos
              sobre estos gastos, evitando discusiones futuras y garantizando
              que las necesidades de los menores sean cubiertas oportunamente.
            </p>

            <p className={styles.heroText}>
              En Bogotá y Colombia, este tipo de acuerdos son frecuentes en
              asuntos relacionados con educación, salud, actividades
              extracurriculares y situaciones imprevistas que afectan el
              bienestar de los hijos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué son los gastos extraordinarios?
            </h2>

            <p className={styles.paragraph}>
              Son aquellos gastos que normalmente no están incluidos dentro de
              la cuota alimentaria ordinaria y que surgen por circunstancias
              especiales o necesidades adicionales del menor.
            </p>

            <p className={styles.paragraph}>
              Debido a que pueden variar con el tiempo, es recomendable definir
              previamente cómo serán asumidos por ambos padres.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Establecer reglas claras sobre gastos extraordinarios ayuda a
                prevenir conflictos y garantiza una respuesta rápida ante las
                necesidades de los hijos.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ejemplos de gastos extraordinarios
            </h2>

            <ul className={styles.list}>
              <li>Tratamientos médicos no cubiertos.</li>
              <li>Medicamentos especiales.</li>
              <li>Procedimientos odontológicos.</li>
              <li>Clases extracurriculares.</li>
              <li>Viajes académicos.</li>
              <li>Uniformes especiales.</li>
              <li>Equipos tecnológicos para estudio.</li>
              <li>Emergencias relacionadas con salud.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Por qué conciliarlos?</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor claridad</h3>

                <p>
                  Permite establecer quién asume cada gasto y en qué proporción.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menos conflictos</h3>

                <p>
                  Reduce discusiones futuras entre los padres respecto a pagos
                  inesperados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Seguridad jurídica</h3>

                <p>
                  El acuerdo conciliatorio tiene respaldo legal y puede hacerse
                  cumplir.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Aspectos que pueden incluirse en el acuerdo
            </h2>

            <ul className={styles.list}>
              <li>Porcentaje que aporta cada padre.</li>
              <li>Límites económicos para ciertos gastos.</li>
              <li>Procedimiento para autorizar gastos.</li>
              <li>Formas de pago y reembolso.</li>
              <li>Plazos para reportar nuevos gastos.</li>
              <li>Mecanismos de comunicación entre los padres.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no existe acuerdo?
            </h2>

            <p className={styles.paragraph}>
              La ausencia de reglas claras puede generar conflictos frecuentes
              respecto a quién debe asumir determinados costos relacionados con
              los hijos.
            </p>

            <p className={styles.paragraph}>
              Por esta razón, la conciliación constituye una alternativa
              efectiva para definir responsabilidades y proteger los intereses
              de los menores.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Pueden modificarse los acuerdos?</h3>

                <p>
                  Sí. Los acuerdos pueden actualizarse cuando cambian las
                  necesidades de los hijos o la situación económica de los
                  padres.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Los gastos médicos son extraordinarios?</h3>

                <p>
                  Dependiendo del caso, algunos tratamientos especiales pueden
                  considerarse gastos extraordinarios.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La conciliación evita un proceso judicial?</h3>

                <p>
                  En muchos casos sí, ya que permite resolver diferencias de
                  manera voluntaria y rápida.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas acordar gastos extraordinarios de tus hijos?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, cuota alimentaria,
              custodia, visitas y acuerdos relacionados con hijos menores en
              Bogotá y Colombia.
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
