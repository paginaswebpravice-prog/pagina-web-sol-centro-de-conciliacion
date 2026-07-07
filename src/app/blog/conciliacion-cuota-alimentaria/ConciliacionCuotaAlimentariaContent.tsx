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
          {/* HERO SECTION */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Conciliación familiar en Colombia
            </span>

            <h1 className={styles.title}>
              Conciliación de cuota alimentaria en Colombia: cómo fijarla,
              modificarla o llegar a un acuerdo sin acudir a un juez
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

            <p className={styles.heroText}>
              Muchas personas creen que la única forma de establecer una cuota
              alimentaria es presentar una demanda ante un juez. Sin embargo, en
              la mayoría de los casos la conciliación permite llegar a acuerdos
              claros sobre el valor de la cuota, la forma de pago, los gastos
              extraordinarios, el régimen de cumplimiento e incluso futuras
              modificaciones, todo dentro de un procedimiento mucho más ágil y
              menos desgastante para la familia.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás cómo funciona la conciliación de
              alimentos en Colombia, qué documentos suelen solicitarse, cómo se
              calcula la cuota alimentaria, qué ocurre cuando uno de los padres
              incumple y por qué este mecanismo es una de las alternativas más
              utilizadas para proteger los derechos de niños, niñas y
              adolescentes.
            </p>
          </div>

          {/* QUE ES UNA CONCILIACION DE CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es una conciliación de cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              La conciliación de cuota alimentaria es un mecanismo mediante el
              cual los padres o las personas responsables de suministrar
              alimentos buscan alcanzar un acuerdo voluntario con la
              intervención de un conciliador imparcial. El propósito principal
              es definir de manera clara las obligaciones económicas destinadas
              a garantizar el bienestar del menor.
            </p>

            <p className={styles.paragraph}>
              Durante la audiencia pueden establecerse aspectos como el valor de
              la cuota, la periodicidad de los pagos, la forma en que se
              asumirán los gastos extraordinarios, la participación en
              educación, salud, transporte, recreación y cualquier otro aspecto
              necesario para cubrir las necesidades del niño, niña o
              adolescente.
            </p>

            <p className={styles.paragraph}>
              La conciliación busca evitar conflictos futuros y ofrecer
              seguridad jurídica a ambas partes. Además de reducir tiempos y
              costos frente a un proceso judicial, promueve el diálogo y permite
              construir acuerdos adaptados a la realidad económica de cada
              familia.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Los acuerdos alcanzados mediante conciliación tienen efectos
                jurídicos y pueden ser exigidos legalmente en caso de
                incumplimiento.
              </p>
            </div>
          </div>

          {/* QUE ASPECTOS PUEDE INCLUIR LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué aspectos puede incluir la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Aunque muchas personas relacionan la cuota alimentaria únicamente
              con dinero para alimentación, en realidad la obligación puede
              abarcar diversos gastos necesarios para garantizar el desarrollo
              integral del menor. Dependiendo del caso concreto, las partes
              pueden acordar incluir diferentes conceptos dentro de la
              conciliación.
            </p>

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

            <p className={styles.paragraph}>
              También pueden pactarse reglas sobre la forma de asumir gastos
              imprevistos, incrementos futuros, fechas límite para realizar los
              pagos y mecanismos para evitar nuevos conflictos relacionados con
              el cumplimiento de la obligación alimentaria.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo se determina el valor de la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              En Colombia no existe una tabla única que determine cuánto debe
              pagarse por concepto de cuota alimentaria. Cada caso se analiza
              individualmente teniendo en cuenta las circunstancias particulares
              de la familia y siempre procurando proteger el interés superior
              del menor.
            </p>

            <p className={styles.paragraph}>
              Entre los factores que normalmente se consideran se encuentran los
              ingresos de cada padre, las necesidades reales del menor, los
              gastos permanentes, el nivel educativo, las condiciones de salud,
              la edad y cualquier otra circunstancia que pueda influir en la
              determinación de una cuota justa y equilibrada.
            </p>
          </div>

          {/* BENEFICIOS DE LA CONCILIACION DE CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación de alimentos
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Acuerdos más rápidos que un proceso judicial</h3>

                <p>
                  Permite alcanzar acuerdos en menos tiempo que un proceso
                  judicial tradicional.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Menor desgaste económico para la familia</h3>

                <p>Reduce gastos asociados a litigios prolongados.</p>
              </div>

              <div className={styles.infoCard}>
                <h3>El bienestar del menor como prioridad</h3>

                <p>
                  Facilita soluciones enfocadas en el bienestar del niño, niña o
                  adolescente.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Acuerdos con respaldo jurídico</h3>

                <p>
                  El acta de conciliación genera obligaciones legales y brinda
                  mayor seguridad frente al cumplimiento de lo acordado.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENTOS QUE SUELEN SOLICITARSE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Documentos que suelen solicitarse
            </h2>

            <p className={styles.paragraph}>
              Contar con la documentación adecuada facilita el desarrollo de la
              audiencia y permite que el conciliador conozca mejor la situación
              económica y familiar de las partes. Aunque los documentos pueden
              variar según cada caso, normalmente se recomienda llevar la
              siguiente información.
            </p>

            <ul className={styles.list}>
              <li>Documento de identidad.</li>
              <li>Registro civil del menor.</li>
              <li>Información sobre ingresos y gastos.</li>
              <li>Soportes de educación y salud.</li>
              <li>Documentos relacionados con la situación familiar.</li>
            </ul>

            <p className={styles.paragraph}>
              En algunos casos también pueden resultar útiles certificados
              laborales, desprendibles de nómina, comprobantes de gastos
              mensuales, recibos de matrícula, fórmulas médicas o cualquier otro
              soporte que permita acreditar las necesidades del menor o la
              capacidad económica de quien debe suministrar los alimentos.
            </p>
          </div>

          {/* QUE PASA SI NO SE CUMPLE LA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si no se cumple la cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Cuando el acuerdo queda consignado en un acta de conciliación,
              este documento produce efectos jurídicos. Si posteriormente una de
              las partes incumple lo pactado, el acta puede servir como
              fundamento para adelantar las actuaciones legales correspondientes
              encaminadas a exigir el cumplimiento de la obligación.
            </p>

            <p className={styles.paragraph}>
              Precisamente por esta razón es importante que durante la
              conciliación las partes pacten compromisos realistas, definan
              fechas concretas de pago y establezcan condiciones claras que
              reduzcan la posibilidad de futuros desacuerdos.
            </p>
          </div>

          {/* CUANDO PUEDE MODIFICARSE UNA CUOTA ALIMENTARIA ACORDADA MEDIANTE CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo puede modificarse una cuota alimentaria acordada mediante
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              La cuota alimentaria no necesariamente permanece igual durante
              toda la vida del menor. Cuando cambian de manera importante las
              circunstancias económicas de cualquiera de las partes o aumentan
              las necesidades del niño, puede ser necesario revisar el acuerdo
              inicialmente alcanzado.
            </p>

            <p className={styles.paragraph}>
              En estos casos es posible acudir nuevamente a una conciliación
              para intentar modificar el valor de la cuota, actualizar los
              gastos extraordinarios o ajustar la forma de cumplimiento,
              evitando así nuevos conflictos familiares y procesos judiciales.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Siempre es recomendable intentar llegar a un nuevo acuerdo
                mediante conciliación antes de acudir a otras vías legales, ya
                que esto suele permitir soluciones más rápidas y menos
                desgastantes para todas las personas involucradas.
              </p>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES SOBRE CUOTA ALIMENTARIA */}
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

          {/* POR QUE LA CONCILIACION SUELE SER LA MEJOR ALTERNATIVA PARA FIJAR UNA CUOTA ALIMENTARIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué la conciliación suele ser la mejor alternativa para fijar
              una cuota alimentaria?
            </h2>

            <p className={styles.paragraph}>
              Más allá de cumplir un requisito legal, la conciliación representa
              una oportunidad para que los padres construyan acuerdos pensando
              en las necesidades del menor y no únicamente en el conflicto
              existente entre ellos. Cuando existe disposición para dialogar, es
              posible establecer compromisos claros, evitar largos procesos
              judiciales y reducir el impacto emocional que este tipo de
              controversias suele generar en la familia.
            </p>

            <p className={styles.paragraph}>
              Además, el acompañamiento de un conciliador imparcial facilita la
              comunicación entre las partes y ayuda a estructurar acuerdos
              equilibrados que tengan mayores probabilidades de cumplirse en el
              tiempo.
            </p>
          </div>

          {/* CTA */}
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
