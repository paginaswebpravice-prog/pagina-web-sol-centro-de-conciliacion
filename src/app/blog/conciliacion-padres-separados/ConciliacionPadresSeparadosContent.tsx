"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ConciliacionPadresSeparadosContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación es útil para padres separados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Permite alcanzar acuerdos sobre hijos menores sin necesidad de iniciar procesos judiciales prolongados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se pueden acordar visitas y alimentos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La conciliación familiar permite definir cuotas alimentarias, custodia y régimen de visitas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos son obligatorios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse legalmente.",
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
              Conciliación entre padres separados en Colombia
            </h1>

            <p className={styles.heroText}>
              La separación de una pareja no pone fin a las responsabilidades
              que ambos padres tienen frente a sus hijos. Por ello, la
              conciliación familiar se ha convertido en una herramienta
              fundamental para resolver conflictos relacionados con la crianza,
              manutención y bienestar de los menores.
            </p>

            <p className={styles.heroText}>
              A través de la conciliación, los padres separados pueden alcanzar
              acuerdos sobre custodia, cuidado personal, régimen de visitas,
              cuota alimentaria y otros aspectos importantes sin necesidad de
              acudir inmediatamente a procesos judiciales.
            </p>

            <p className={styles.heroText}>
              Este mecanismo permite encontrar soluciones equilibradas,
              protegiendo siempre el interés superior de los hijos y fomentando
              una relación más colaborativa entre los padres.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la conciliación entre padres separados?
            </h2>

            <p className={styles.paragraph}>
              Es un procedimiento mediante el cual los padres buscan llegar a
              acuerdos voluntarios sobre asuntos relacionados con sus hijos,
              contando con la intervención imparcial de un conciliador.
            </p>

            <p className={styles.paragraph}>
              El objetivo es prevenir conflictos futuros y establecer reglas
              claras que permitan una adecuada convivencia familiar después de
              la separación.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación familiar busca reducir el conflicto entre los
                padres y garantizar estabilidad emocional y jurídica para los
                hijos menores.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Temas que pueden acordarse en conciliación
            </h2>

            <ul className={styles.list}>
              <li>Custodia y cuidado personal.</li>
              <li>Régimen de visitas.</li>
              <li>Cuota alimentaria.</li>
              <li>Gastos extraordinarios de los hijos.</li>
              <li>Educación y actividades extracurriculares.</li>
              <li>Vacaciones y fechas especiales.</li>
              <li>Comunicación con los menores.</li>
              <li>Responsabilidades compartidas de crianza.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación familiar
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Menor conflicto</h3>

                <p>
                  Favorece el diálogo y disminuye enfrentamientos entre los
                  padres.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Protección de los hijos</h3>

                <p>Las decisiones se enfocan en el bienestar de los menores.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>

                <p>
                  Los acuerdos quedan formalizados mediante un acta de
                  conciliación.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se desarrolla la audiencia?
            </h2>

            <p className={styles.paragraph}>
              Durante la audiencia, cada padre expone sus necesidades,
              expectativas y propuestas respecto a la crianza y cuidado de los
              hijos.
            </p>

            <p className={styles.paragraph}>
              El conciliador facilita la comunicación y ayuda a identificar
              puntos de acuerdo que permitan construir soluciones equilibradas.
            </p>

            <p className={styles.paragraph}>
              Si se logra un consenso, el acuerdo queda consignado en un acta
              con efectos jurídicos obligatorios.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <ul className={styles.list}>
              <li>Registro civil de nacimiento de los hijos.</li>
              <li>Documentos de identidad de los padres.</li>
              <li>Soportes de ingresos económicos.</li>
              <li>Acuerdos previos relacionados con los menores.</li>
              <li>Documentos escolares cuando sean relevantes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué sucede si no se alcanza un acuerdo?
            </h2>

            <p className={styles.paragraph}>
              Cuando no es posible conciliar, las partes pueden acudir a las
              autoridades competentes para que el conflicto sea resuelto por la
              vía judicial.
            </p>

            <p className={styles.paragraph}>
              Sin embargo, en muchos casos la conciliación permite encontrar
              soluciones satisfactorias evitando procesos más largos y
              desgastantes.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Es obligatoria la conciliación?</h3>

                <p>
                  Dependiendo del caso, puede constituir un requisito previo
                  antes de acudir a la vía judicial.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Se pueden modificar los acuerdos?</h3>

                <p>
                  Sí. Es posible realizar nuevas conciliaciones cuando cambian
                  las circunstancias familiares.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puede hacerse virtualmente?</h3>

                <p>
                  Sí. Muchos centros de conciliación ofrecen audiencias
                  virtuales en Colombia.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas resolver un conflicto entre padres separados?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, custodia, visitas,
              alimentos y acuerdos relacionados con hijos menores en Bogotá y
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
