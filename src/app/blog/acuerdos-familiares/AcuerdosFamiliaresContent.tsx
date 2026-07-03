"use client";

import styles from "../Article.module.css";
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
              Acuerdos familiares por conciliación en Colombia: alimentos,
              custodia, visitas y más
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

            <p className={styles.heroText}>
              Muchas familias buscan alternativas que permitan resolver
              diferencias sin llegar a largos procesos judiciales. La
              conciliación familiar ofrece un espacio neutral en el que las
              partes pueden dialogar, negociar y construir acuerdos que protejan
              tanto los intereses de los adultos como el bienestar de los hijos,
              reduciendo costos, tiempos y el desgaste emocional.
            </p>

            <p className={styles.heroText}>
              En Colombia, los acuerdos familiares alcanzados ante un centro de
              conciliación pueden tener importantes efectos jurídicos cuando
              cumplen los requisitos establecidos por la ley. Por esta razón,
              cada vez más personas utilizan este mecanismo para resolver
              conflictos relacionados con alimentos, custodia, régimen de
              visitas, separación de bienes, obligaciones económicas y otros
              asuntos de familia.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué son los acuerdos familiares por conciliación y cuándo pueden
              realizarse?
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
              ¿Qué conflictos familiares pueden resolverse mediante conciliación
              en Colombia?
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
              Beneficios de realizar acuerdos familiares antes de iniciar una
              demanda
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
              ¿Cómo es el proceso para realizar una conciliación familiar paso a
              paso?
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
              Beneficios de realizar acuerdos familiares antes de iniciar una
              demanda
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
            <h2 className={styles.subtitle}>
              ¿Qué debe incluir un acuerdo familiar para que sea claro y fácil
              de cumplir?
            </h2>

            <p className={styles.paragraph}>
              Un acuerdo familiar no solo debe reflejar la voluntad de las
              partes, sino que también debe establecer obligaciones concretas
              que puedan cumplirse y verificarse fácilmente. Cuanto más claro
              sea el contenido del acuerdo, menor será el riesgo de nuevos
              conflictos en el futuro.
            </p>

            <ul className={styles.list}>
              <li>Identificación completa de las partes.</li>
              <li>Descripción del conflicto.</li>
              <li>Compromisos específicos.</li>
              <li>Fechas de cumplimiento.</li>
              <li>Valores y forma de pago.</li>
              <li>Responsables de cada obligación.</li>
              <li>Condiciones para modificar el acuerdo.</li>
              <li>Firmas de todos los participantes.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ejemplos de acuerdos familiares que pueden lograrse mediante
              conciliación
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Acuerdo de cuota alimentaria</h3>

                <p>
                  Los padres establecen el monto mensual, la fecha de pago y la
                  distribución de los gastos extraordinarios del menor.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdo sobre custodia</h3>

                <p>
                  Se define quién ejercerá el cuidado personal del menor y cómo
                  se tomarán las decisiones relacionadas con su educación, salud
                  y bienestar.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdo de régimen de visitas</h3>

                <p>
                  Las partes fijan días, horarios, vacaciones y fechas
                  especiales para mantener la relación entre el menor y ambos
                  padres.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo es recomendable acudir a un centro de conciliación
              familiar?
            </h2>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente útil cuando las partes
              desean conservar una relación respetuosa y resolver el conflicto
              mediante el diálogo. También es una alternativa adecuada cuando
              existe disposición para negociar antes de acudir a un proceso
              judicial que puede extenderse durante meses o incluso años.
            </p>

            <p className={styles.paragraph}>
              En asuntos relacionados con alimentos, custodia, visitas y
              obligaciones económicas familiares, una solución temprana permite
              brindar mayor estabilidad a los hijos y evitar el deterioro de las
              relaciones familiares.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores que pueden generar nuevos conflictos familiares
            </h2>

            <ul className={styles.list}>
              <li>No establecer fechas.</li>

              <li>No definir montos.</li>

              <li>No repartir responsabilidades.</li>

              <li>No dejar todo por escrito.</li>

              <li>Usar términos ambiguos.</li>

              <li>No actualizar acuerdos cuando cambian las circunstancias.</li>

              <li>
                No acudir a conciliación cuando existe disposición para
                dialogar.
              </li>
            </ul>
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
              ¿Necesitas realizar un acuerdo familiar con plena validez legal?
            </h3>

            <p className={styles.ctaText}>
              Te orientamos para realizar conciliaciones familiares relacionadas
              con cuota alimentaria, custodia, régimen de visitas, obligaciones
              económicas, separación de bienes y otros conflictos familiares en
              Bogotá y toda Colombia.
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
