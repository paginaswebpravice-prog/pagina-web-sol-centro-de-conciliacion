"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function CustodiaPorConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la custodia de un menor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la responsabilidad relacionada con el cuidado diario, protección y acompañamiento del hijo menor de edad.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un proceso judicial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí, ya que permite que los padres lleguen a acuerdos voluntarios sin acudir inicialmente a un juez.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puede modificarse un acuerdo de custodia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Cuando cambian las circunstancias familiares puede realizarse una nueva conciliación para ajustar los acuerdos existentes.",
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
              Custodia y cuidado personal mediante conciliación en Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando los padres enfrentan diferencias relacionadas con la
              crianza de sus hijos, la conciliación familiar puede convertirse
              en una herramienta efectiva para alcanzar acuerdos sobre custodia,
              cuidado personal y régimen de visitas.
            </p>

            <p className={styles.heroText}>
              Este mecanismo permite que ambas partes participen activamente en
              la construcción de soluciones que prioricen el bienestar del menor
              sin necesidad de iniciar procesos judiciales largos y
              desgastantes.
            </p>

            <p className={styles.heroText}>
              En Bogotá y otras ciudades de Colombia, miles de familias utilizan
              la conciliación para regular aspectos relacionados con la custodia
              de hijos menores de edad de manera rápida y con plena validez
              jurídica.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la custodia y el cuidado personal?
            </h2>

            <p className={styles.paragraph}>
              La custodia y el cuidado personal hacen referencia a las
              responsabilidades relacionadas con la atención diaria del menor,
              incluyendo aspectos de protección, educación, salud y desarrollo
              integral.
            </p>

            <p className={styles.paragraph}>
              Cuando los padres no conviven juntos, es importante establecer de
              manera clara cómo se ejercerán estas responsabilidades para evitar
              futuros conflictos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                El principio fundamental en cualquier acuerdo de custodia es la
                protección del interés superior del menor y el respeto de sus
                derechos fundamentales.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué puede acordarse mediante conciliación?
            </h2>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal del menor.</li>
              <li>Régimen de visitas.</li>
              <li>Horarios de convivencia.</li>
              <li>Vacaciones y fechas especiales.</li>
              <li>Responsabilidades parentales.</li>
              <li>Comunicación entre padres e hijos.</li>
              <li>Aspectos relacionados con educación y salud.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación familiar
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>

                <p>Favorece el diálogo y la cooperación entre los padres.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor rapidez</h3>

                <p>
                  Permite alcanzar acuerdos en menos tiempo que un litigio
                  judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Protección del menor</h3>

                <p>
                  Mantiene el enfoque en el bienestar emocional y familiar del
                  hijo.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Régimen de visitas mediante conciliación
            </h2>

            <p className={styles.paragraph}>
              Uno de los temas más frecuentes en conciliación familiar es la
              definición del régimen de visitas. Las partes pueden establecer
              horarios, días específicos, periodos vacacionales y mecanismos de
              comunicación.
            </p>

            <p className={styles.paragraph}>
              La claridad en estos acuerdos ayuda a prevenir futuros conflictos
              y brinda estabilidad tanto a los padres como a los hijos.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que pueden ser útiles
            </h2>

            <ul className={styles.list}>
              <li>Registro civil del menor.</li>
              <li>Documentos de identidad de los padres.</li>
              <li>Acuerdos previos relacionados con el menor.</li>
              <li>Soportes sobre educación o salud cuando sean relevantes.</li>
              <li>Información relacionada con horarios y disponibilidad.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si no se alcanza un acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Si durante la audiencia no se logra una conciliación, las partes
              podrán evaluar otras alternativas legales para resolver la
              controversia.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, la conciliación sigue siendo una de las opciones más
              recomendadas para buscar soluciones colaborativas en asuntos de
              familia.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre custodia por conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Puede modificarse un acuerdo posterior?</h3>

                <p>
                  Sí. Los acuerdos pueden revisarse cuando cambian las
                  circunstancias familiares.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿La conciliación tiene validez legal?</h3>

                <p>
                  Sí. El acta de conciliación tiene efectos jurídicos en
                  Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede realizarse virtualmente?</h3>

                <p>
                  Muchos centros de conciliación ofrecen audiencias virtuales
                  para facilitar la participación de las partes.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas acordar la custodia o visitas de un menor?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, custodia, cuidado
              personal, régimen de visitas y acuerdos relacionados con hijos
              menores de edad en Bogotá y Colombia.
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
