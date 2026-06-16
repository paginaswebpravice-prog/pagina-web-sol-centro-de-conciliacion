"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function RegimenVisitasConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un régimen de visitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es el conjunto de acuerdos que regulan el tiempo de convivencia entre un menor y el padre o madre que no tiene el cuidado personal permanente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación es una de las alternativas más utilizadas para alcanzar acuerdos sin necesidad de procesos judiciales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede hacerse de manera virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación en Colombia ofrecen audiencias virtuales.",
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
              Régimen de visitas por conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando los padres viven separados, resulta fundamental establecer
              reglas claras sobre el tiempo que los hijos compartirán con cada
              uno de ellos. La conciliación familiar permite construir acuerdos
              equilibrados que garanticen el bienestar de los menores y reduzcan
              futuros conflictos.
            </p>

            <p className={styles.heroText}>
              A través de la conciliación es posible definir horarios,
              frecuencia de visitas, vacaciones, fechas especiales y mecanismos
              de comunicación entre padres e hijos, todo dentro de un acuerdo
              con validez jurídica.
            </p>

            <p className={styles.heroText}>
              Este mecanismo es ampliamente utilizado en Bogotá y Colombia para
              resolver diferencias relacionadas con custodia, cuidado personal y
              régimen de visitas sin necesidad de acudir inmediatamente a un
              juez.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>¿Qué es un régimen de visitas?</h2>

            <p className={styles.paragraph}>
              El régimen de visitas es el conjunto de acuerdos que regulan la
              convivencia entre el menor y el padre o madre que no tiene el
              cuidado personal permanente.
            </p>

            <p className={styles.paragraph}>
              Su objetivo principal es garantizar que los hijos mantengan una
              relación cercana y constante con ambos padres, siempre respetando
              el interés superior del menor.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Un régimen de visitas bien definido ayuda a evitar conflictos,
                brinda estabilidad a los menores y facilita el cumplimiento de
                las responsabilidades parentales.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Aspectos que pueden acordarse en conciliación
            </h2>

            <ul className={styles.list}>
              <li>Días y horarios de visita.</li>
              <li>Fines de semana compartidos.</li>
              <li>Vacaciones escolares.</li>
              <li>Celebración de cumpleaños.</li>
              <li>Navidad y fin de año.</li>
              <li>Transporte y entrega del menor.</li>
              <li>Comunicación telefónica o virtual.</li>
              <li>Actividades especiales familiares.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de acordar visitas mediante conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Mayor cooperación</h3>

                <p>
                  Favorece acuerdos construidos conjuntamente por ambos padres.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menor desgaste emocional</h3>

                <p>
                  Reduce tensiones familiares y evita conflictos prolongados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>

                <p>
                  El acuerdo conciliatorio tiene efectos legales y puede
                  exigirse en caso de incumplimiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se desarrolla la audiencia?
            </h2>

            <p className={styles.paragraph}>
              Durante la audiencia, las partes exponen sus propuestas respecto a
              la convivencia con el menor. El conciliador facilita el diálogo y
              ayuda a construir acuerdos equilibrados.
            </p>

            <p className={styles.paragraph}>
              Si se alcanza un consenso, este queda consignado en un acta de
              conciliación con efectos jurídicos obligatorios para ambas partes.
            </p>

            <p className={styles.paragraph}>
              El objetivo siempre será proteger los derechos del menor y
              garantizar relaciones familiares saludables.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que pueden ser útiles
            </h2>

            <ul className={styles.list}>
              <li>Registro civil del menor.</li>
              <li>Documentos de identidad de los padres.</li>
              <li>Acuerdos previos sobre custodia o alimentos.</li>
              <li>Información escolar cuando sea relevante.</li>
              <li>Soportes relacionados con horarios y disponibilidad.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre si una parte incumple?
            </h2>

            <p className={styles.paragraph}>
              El acta de conciliación tiene fuerza jurídica. Si alguna de las
              partes incumple lo acordado, pueden existir mecanismos legales
              para exigir el cumplimiento de las obligaciones establecidas.
            </p>

            <p className={styles.paragraph}>
              Por esta razón es importante que los acuerdos sean claros,
              realistas y adaptados a las necesidades de la familia.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre régimen de visitas
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puede modificarse el acuerdo?</h3>

                <p>
                  Sí. Cuando cambian las circunstancias familiares es posible
                  realizar una nueva conciliación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La conciliación evita un juicio?</h3>

                <p>
                  En muchos casos sí, permitiendo resolver diferencias mediante
                  acuerdos voluntarios.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>

                <p>
                  Sí. Numerosos centros de conciliación ofrecen audiencias
                  virtuales en Colombia.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas establecer un régimen de visitas?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, custodia, cuidado
              personal, visitas de menores y acuerdos parentales en Bogotá y
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
