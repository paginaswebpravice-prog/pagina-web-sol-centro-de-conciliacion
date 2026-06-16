"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function QueEsLaConciliacionContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es la conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación en Colombia es un mecanismo alternativo de solución de conflictos mediante el cual dos o más personas buscan llegar a un acuerdo con la ayuda de un conciliador autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación tiene validez legal en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. El acta de conciliación tiene efectos jurídicos y puede ser exigida judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde se puede hacer una conciliación en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La conciliación puede realizarse en centros de conciliación autorizados, cámaras de comercio, consultorios jurídicos y entidades habilitadas en Bogotá y Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos pueden resolverse mediante conciliación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En Colombia pueden conciliarse conflictos civiles, familiares, comerciales, laborales, arrendamientos, deudas y otras controversias permitidas por la ley.",
        },
      },
      {
        "@type": "Question",
        name: "¿La conciliación evita un juicio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En muchos casos la conciliación permite resolver el conflicto sin necesidad de acudir a un proceso judicial.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Qué es la conciliación en Colombia y para qué sirve realmente?",
    description:
      "Conoce qué es la conciliación en Colombia, cómo funciona en Bogotá, cuáles son sus beneficios y qué tipos de conflictos pueden resolverse mediante conciliación extrajudicial.",
    author: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Sol Centro de Conciliación",
    },
    articleSection: "Conciliación Extrajudicial",
    keywords:
      "qué es la conciliación en Colombia, conciliación en Bogotá, conciliación extrajudicial Colombia, conciliación familiar Bogotá, conciliación civil Colombia",
    about: [
      "Conciliación en Colombia",
      "Conciliación extrajudicial",
      "Resolución de conflictos",
      "Derecho civil",
      "Derecho de familia",
    ],
  };

  return (
    <>
      <Head>
        <title>
          ¿Qué es la conciliación en Colombia? | Guía completa Bogotá 2026
        </title>

        <meta
          name="description"
          content="Descubre qué es la conciliación en Colombia y Bogotá, cómo funciona, para qué sirve y cuáles son sus beneficios legales. Guía completa de conciliación extrajudicial 2026."
        />

        <meta
          name="keywords"
          content="qué es la conciliación en Colombia, conciliación en Bogotá, conciliación extrajudicial Colombia, conciliación civil Bogotá, conciliación familiar Colombia"
        />

        <meta
          property="og:title"
          content="¿Qué es la conciliación en Colombia y para qué sirve?"
        />

        <meta
          property="og:description"
          content="Guía completa sobre conciliación en Colombia y Bogotá: beneficios, tipos de conciliación, validez legal y cómo solicitar una audiencia."
        />

        <meta property="og:type" content="article" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <section
        className={styles.articleWrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* HERO */}

          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Guía completa de conciliación en Colombia
            </span>

            <h1 className={styles.title} itemProp="headline">
              ¿Qué es la conciliación en Colombia y para qué sirve realmente?
            </h1>

            <p className={styles.heroText} itemProp="description">
              La conciliación en Colombia es un mecanismo alternativo de
              solución de conflictos mediante el cual dos o más personas buscan
              resolver una controversia con la ayuda de un conciliador
              autorizado, evitando acudir directamente a un proceso judicial.
            </p>

            <p className={styles.heroText}>
              Este procedimiento es ampliamente utilizado en Bogotá y otras
              ciudades de Colombia para resolver conflictos civiles,
              comerciales, familiares y laborales de manera más rápida,
              económica y eficiente.
            </p>

            <p className={styles.heroText}>
              Gracias a la conciliación extrajudicial en derecho, miles de
              personas y empresas en Colombia logran alcanzar acuerdos con plena
              validez jurídica sin necesidad de enfrentar procesos judiciales
              largos y costosos.
            </p>
          </div>

          {/* INTRO */}

          <div className={styles.contentSection}>
            <p className={styles.paragraph}>
              A diferencia de un juicio tradicional, la conciliación busca que
              las partes construyan conjuntamente una solución al conflicto. El
              conciliador no impone una decisión, sino que facilita el diálogo y
              ayuda a encontrar acuerdos equilibrados.
            </p>

            <p className={styles.paragraph}>
              Cuando se alcanza un acuerdo, este queda consignado en un{" "}
              <strong>acta de conciliación</strong>, documento que tiene efectos
              legales y presta mérito ejecutivo en Colombia.
            </p>

            <p className={styles.paragraph}>
              En Bogotá y otras ciudades del país, la conciliación se ha
              convertido en una de las herramientas más importantes para reducir
              la congestión judicial y promover soluciones más rápidas entre las
              partes.
            </p>
          </div>

          {/* PARA QUÉ SIRVE */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Para qué sirve la conciliación en Colombia?
            </h2>

            <p className={styles.paragraph}>
              La conciliación sirve para resolver conflictos legales sin acudir
              inicialmente a un juez. Este mecanismo permite alcanzar acuerdos
              voluntarios de manera más flexible y eficiente.
            </p>

            <p className={styles.paragraph}>
              En Colombia, la conciliación es utilizada frecuentemente para:
            </p>

            <ul className={styles.list}>
              <li>Conflictos familiares.</li>
              <li>Problemas de arrendamiento.</li>
              <li>Incumplimientos de contratos.</li>
              <li>Deudas y obligaciones económicas.</li>
              <li>Conflictos laborales.</li>
              <li>Responsabilidad civil.</li>
              <li>Conflictos comerciales y empresariales.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                En Bogotá, muchas empresas y personas utilizan la conciliación
                para resolver conflictos relacionados con deudas, contratos,
                arrendamientos, obligaciones civiles y asuntos familiares sin
                necesidad de iniciar procesos judiciales extensos.
              </p>
            </div>
          </div>

          {/* TIPOS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Tipos de conciliación en Bogotá y Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conciliación extrajudicial</h3>

                <p>
                  Se realiza antes de iniciar un proceso judicial y generalmente
                  se lleva a cabo en centros de conciliación autorizados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conciliación judicial</h3>

                <p>
                  Ocurre dentro de un proceso judicial ante un juez que intenta
                  promover un acuerdo entre las partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conciliación virtual</h3>

                <p>
                  En Colombia también es posible realizar conciliaciones
                  virtuales desde ciudades como Bogotá, Medellín o Cali.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFICIOS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación en Bogotá y Colombia
            </h2>

            <ul className={styles.list}>
              <li>Evita procesos judiciales prolongados.</li>
              <li>Reduce costos legales y procesales.</li>
              <li>Permite acuerdos rápidos y personalizados.</li>
              <li>Favorece el diálogo entre las partes.</li>
              <li>Brinda soluciones más flexibles.</li>
              <li>Protege relaciones familiares y comerciales.</li>
              <li>Puede desarrollarse presencial o virtualmente.</li>
              <li>El acta tiene plena validez jurídica.</li>
            </ul>
          </div>

          {/* VALIDEZ LEGAL */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿La conciliación tiene validez legal en Colombia?
            </h2>

            <p className={styles.paragraph}>
              Sí. El acta de conciliación tiene efectos jurídicos en Colombia y
              presta mérito ejecutivo, lo que significa que puede ser exigida
              judicialmente si alguna de las partes incumple el acuerdo.
            </p>

            <p className={styles.paragraph}>
              Esto convierte la conciliación en una alternativa jurídica segura,
              práctica y efectiva para resolver conflictos civiles, comerciales,
              familiares y laborales en Bogotá y todo el país.
            </p>
          </div>

          {/* CÓMO SOLICITAR */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo solicitar una conciliación en Bogotá?
            </h2>

            <p className={styles.paragraph}>
              Para solicitar una conciliación en Bogotá o cualquier ciudad de
              Colombia, normalmente se presenta una solicitud ante un centro de
              conciliación autorizado.
            </p>

            <p className={styles.paragraph}>
              Posteriormente se programa una audiencia en la que las partes
              intentan llegar a un acuerdo con la ayuda del conciliador.
            </p>

            <p className={styles.paragraph}>
              Si existe acuerdo, se firma un acta de conciliación con efectos
              jurídicos obligatorios.
            </p>
          </div>

          {/* FAQ */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre conciliación en Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación reemplaza un juicio?</h3>

                <p>
                  En muchos casos sí. La conciliación permite solucionar
                  conflictos sin acudir inicialmente a un juez.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Dónde hacer conciliación en Bogotá?</h3>

                <p>
                  Puede realizarse en centros de conciliación autorizados,
                  cámaras de comercio y entidades habilitadas en Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué pasa si una parte incumple?</h3>

                <p>
                  El acuerdo conciliatorio puede exigirse judicialmente mediante
                  procesos ejecutivos en Colombia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas iniciar una conciliación en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación extrajudicial, audiencias,
              acuerdos legales y solución de conflictos civiles, comerciales y
              familiares en Bogotá y a nivel nacional.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
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
