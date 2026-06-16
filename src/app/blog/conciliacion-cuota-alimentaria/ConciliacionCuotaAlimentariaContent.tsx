"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ConciliacionCuotaAlimentariaContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo se fija una cuota alimentaria en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puede establecerse mediante conciliación teniendo en cuenta las necesidades del menor y la capacidad económica de los padres.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación de alimentos tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede hacerse cumplir en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Es obligatorio acudir a conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En muchos asuntos relacionados con alimentos la conciliación es una herramienta utilizada para intentar llegar a acuerdos antes de iniciar otras actuaciones.",
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
              Conciliación de cuota alimentaria en Colombia
            </h1>

            <p className={styles.heroText}>
              La cuota alimentaria es una obligación legal destinada a
              garantizar el bienestar y desarrollo de los hijos menores de edad
              y, en determinados casos, de otras personas con derecho a recibir
              alimentos.
            </p>

            <p className={styles.heroText}>
              En Colombia, una de las formas más utilizadas para fijar una cuota
              alimentaria es mediante conciliación, un mecanismo que permite a
              las partes llegar a acuerdos sin necesidad de iniciar procesos
              judiciales prolongados.
            </p>

            <p className={styles.heroText}>
              La conciliación familiar facilita acuerdos claros sobre valores,
              fechas de pago, gastos extraordinarios y demás aspectos
              relacionados con las obligaciones alimentarias.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es una conciliación de cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Es un procedimiento mediante el cual los padres o responsables
              buscan llegar a un acuerdo sobre la manutención económica de un
              menor con la intervención de un conciliador autorizado.
            </p>

            <p className={styles.paragraph}>
              El objetivo es establecer compromisos claros que garanticen la
              protección de los derechos del menor y eviten futuros conflictos.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Los acuerdos alcanzados mediante conciliación tienen efectos
                jurídicos y pueden ser exigidos legalmente en caso de
                incumplimiento.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué aspectos puede incluir la cuota alimentaria?
            </h2>

            <ul className={styles.list}>
              <li>Alimentación.</li>
              <li>Educación y útiles escolares.</li>
              <li>Salud y medicamentos.</li>
              <li>Vestuario.</li>
              <li>Vivienda.</li>
              <li>Recreación.</li>
              <li>Transporte.</li>
              <li>Gastos extraordinarios acordados por las partes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se determina el valor de la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              No existe una tarifa única aplicable a todos los casos. El valor
              se analiza teniendo en cuenta las necesidades del menor y la
              capacidad económica de quienes tienen la obligación de suministrar
              los alimentos.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia de conciliación las partes pueden presentar
              información relevante que permita construir un acuerdo razonable y
              equilibrado.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación de alimentos
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Rapidez</h3>

                <p>
                  Permite alcanzar acuerdos en menos tiempo que un proceso
                  judicial tradicional.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menores costos</h3>

                <p>Reduce gastos asociados a litigios prolongados.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>Protección del menor</h3>

                <p>
                  Facilita soluciones enfocadas en el bienestar del niño, niña o
                  adolescente.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <ul className={styles.list}>
              <li>Documento de identidad.</li>
              <li>Registro civil del menor.</li>
              <li>Información sobre ingresos y gastos.</li>
              <li>Soportes de educación y salud.</li>
              <li>Documentos relacionados con la situación familiar.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si no se cumple la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Cuando existe un acuerdo conciliatorio y una de las partes
              incumple sus obligaciones, el acta puede utilizarse para exigir el
              cumplimiento por las vías legales correspondientes.
            </p>

            <p className={styles.paragraph}>
              Por esta razón es fundamental que los acuerdos establecidos sean
              claros, precisos y realistas para ambas partes.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre cuota alimentaria
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La cuota puede modificarse?</h3>

                <p>
                  Sí. Cuando cambian las circunstancias económicas o familiares
                  es posible buscar nuevos acuerdos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Se puede conciliar virtualmente?</h3>

                <p>
                  En muchos casos los centros de conciliación ofrecen
                  alternativas virtuales para las audiencias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿El acuerdo es obligatorio?</h3>

                <p>
                  Sí. Una vez firmado, genera obligaciones jurídicas para las
                  partes involucradas.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas fijar una cuota alimentaria mediante conciliación?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación familiar, alimentos para
              menores, audiencias y acuerdos con validez legal en Bogotá y
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
