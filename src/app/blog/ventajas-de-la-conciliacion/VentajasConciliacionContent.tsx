"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function VentajasConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuáles son las ventajas de la conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación permite ahorrar tiempo, dinero y desgaste emocional, además de ofrecer soluciones flexibles con validez legal.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un juicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos casos sí. Si las partes llegan a un acuerdo, no es necesario acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿Los acuerdos conciliatorios son obligatorios?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede exigirse judicialmente en caso de incumplimiento.",
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
            <span className={styles.badge}>Conciliación en Colombia</span>

            <h1 className={styles.title}>
              Ventajas de la conciliación frente a un proceso judicial en
              Colombia
            </h1>

            <p className={styles.heroText}>
              Cuando surge un conflicto legal, muchas personas asumen que la
              única solución es acudir a un juez. Sin embargo, la conciliación
              se ha convertido en una alternativa altamente efectiva para
              resolver controversias de manera rápida, económica y con plenos
              efectos jurídicos.
            </p>

            <p className={styles.heroText}>
              En Bogotá y en toda Colombia, miles de personas utilizan la
              conciliación para solucionar conflictos familiares, civiles,
              comerciales, de arrendamiento y obligaciones económicas sin
              necesidad de enfrentar largos procesos judiciales.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué elegir la conciliación?
            </h2>

            <p className={styles.paragraph}>
              La conciliación busca que las partes construyan conjuntamente una
              solución al conflicto con la ayuda de un conciliador imparcial.
            </p>

            <p className={styles.paragraph}>
              A diferencia de una demanda judicial, donde un juez toma la
              decisión final, en la conciliación son las propias partes quienes
              diseñan el acuerdo que mejor se adapta a sus necesidades.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación combina rapidez, flexibilidad y seguridad
                jurídica, convirtiéndose en una de las herramientas más
                utilizadas para resolver conflictos en Colombia.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              1. Ahorro significativo de tiempo
            </h2>

            <p className={styles.paragraph}>
              Uno de los mayores beneficios de la conciliación es la rapidez con
              la que puede resolverse un conflicto.
            </p>

            <p className={styles.paragraph}>
              Mientras que un proceso judicial puede durar meses o incluso años,
              una conciliación suele resolverse en un periodo mucho más corto.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>2. Reducción de costos legales</h2>

            <p className={styles.paragraph}>
              Los procesos judiciales suelen implicar múltiples actuaciones,
              recursos, notificaciones y gastos asociados.
            </p>

            <p className={styles.paragraph}>
              La conciliación permite reducir significativamente estos costos,
              convirtiéndose en una alternativa más accesible para muchas
              personas y empresas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>3. Menor desgaste emocional</h2>

            <p className={styles.paragraph}>
              Los litigios prolongados generan estrés, incertidumbre y desgaste
              emocional para todas las partes involucradas.
            </p>

            <p className={styles.paragraph}>
              La conciliación promueve el diálogo y la cooperación, facilitando
              soluciones menos confrontativas.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              4. Mayor control sobre la solución
            </h2>

            <p className={styles.paragraph}>
              En un juicio, el resultado depende de la decisión del juez.
            </p>

            <p className={styles.paragraph}>
              En la conciliación, las partes participan activamente en la
              construcción del acuerdo y tienen mayor control sobre el resultado
              final.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              5. Conservación de relaciones personales y comerciales
            </h2>

            <p className={styles.paragraph}>
              La conciliación favorece el diálogo y reduce la confrontación,
              permitiendo preservar relaciones familiares, laborales y
              comerciales.
            </p>

            <p className={styles.paragraph}>
              Esto resulta especialmente importante cuando las partes deben
              continuar interactuando después del conflicto.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>6. Acuerdos con validez legal</h2>

            <p className={styles.paragraph}>
              Muchas personas creen erróneamente que la conciliación carece de
              fuerza jurídica.
            </p>

            <p className={styles.paragraph}>
              En realidad, el acta de conciliación tiene plenos efectos legales
              y puede exigirse judicialmente en caso de incumplimiento.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Comparación rápida: conciliación vs proceso judicial
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Tiempo</h3>
                <p>La conciliación suele ser considerablemente más rápida.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Costos</h3>
                <p>Generalmente requiere menos recursos económicos.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Relaciones</h3>
                <p>Favorece acuerdos y reduce el nivel de confrontación.</p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos donde la conciliación suele ser muy efectiva
            </h2>

            <ul className={styles.list}>
              <li>Conflictos familiares.</li>
              <li>Arrendamientos.</li>
              <li>Cobro de obligaciones económicas.</li>
              <li>Incumplimientos contractuales.</li>
              <li>Conflictos comerciales.</li>
              <li>Asuntos vecinales.</li>
              <li>Responsabilidad civil.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Es obligatoria la conciliación?</h3>
                <p>
                  En varios asuntos sí constituye un requisito previo para
                  demandar.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Tiene validez legal?</h3>
                <p>
                  Sí. El acta conciliatoria tiene efectos jurídicos reconocidos
                  por la ley colombiana.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué pasa si no hay acuerdo?</h3>
                <p>
                  Las partes conservan la posibilidad de acudir posteriormente a
                  la vía judicial.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Deseas resolver un conflicto sin acudir a un juicio?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación extrajudicial en Bogotá y
              Colombia para encontrar una solución rápida, económica y con plena
              validez legal.
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
