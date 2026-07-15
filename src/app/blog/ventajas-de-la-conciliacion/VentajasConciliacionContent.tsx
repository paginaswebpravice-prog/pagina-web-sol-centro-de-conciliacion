"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function VentajasConciliacionContent() {
  return (
    <>
      <section className={styles.articleWrapper}>
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
              Métodos Alternativos de Solución de Conflictos
            </span>

            <h1 className={styles.title}>
              12 ventajas de la conciliación frente a un proceso judicial en
              Colombia (Guía 2026)
            </h1>

            <p className={styles.heroText}>
              Cuando surge un conflicto legal, muchas personas creen que la
              única solución es presentar una demanda. Sin embargo, en numerosos
              casos la conciliación permite obtener el mismo resultado jurídico
              en mucho menos tiempo, con menos costos y evitando años de
              litigio.
            </p>

            <p className={styles.heroText}>
              En esta guía conocerás cuáles son las principales ventajas de la
              conciliación frente a un proceso judicial, cuándo conviene acudir
              a un centro de conciliación y en qué situaciones este mecanismo
              puede ayudarte a proteger tus derechos sin iniciar un juicio.
            </p>
          </div>

          {/* POR QUE MUCHAS PERSONAS PREFEREN LA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué muchas personas prefieren la conciliación antes que
              demandar?
            </h2>

            <p className={styles.paragraph}>
              En Colombia, la conciliación se ha convertido en uno de los
              mecanismos más utilizados para resolver conflictos civiles,
              comerciales, familiares y de convivencia. Su principal ventaja es
              que permite que las propias partes construyan una solución con la
              ayuda de un conciliador imparcial, evitando procesos judiciales
              largos y desgastantes.
            </p>

            <p className={styles.paragraph}>
              A diferencia de un juicio, donde un juez toma la decisión final,
              en la conciliación las personas conservan el control sobre el
              acuerdo que desean alcanzar, lo que suele generar un mayor nivel
              de cumplimiento y satisfacción para ambas partes.
            </p>
          </div>

          {/* VENTAJAS DE LA CONCILIACION */}
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

          {/* CONCILIACION VS PROCESO JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Conciliación vs proceso judicial: principales diferencias
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Tiempo</h3>

                <p>
                  Una conciliación normalmente puede desarrollarse en días o
                  semanas, mientras que un proceso judicial puede extenderse
                  durante meses o incluso varios años.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Costos</h3>

                <p>
                  La conciliación suele representar menores gastos en
                  honorarios, desplazamientos, actuaciones judiciales y otros
                  costos asociados a un litigio prolongado.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Relación entre las partes</h3>

                <p>
                  Al promover el diálogo y el consenso, la conciliación ayuda a
                  preservar relaciones personales, familiares, comerciales o
                  vecinales que podrían deteriorarse con una demanda.
                </p>
              </div>
            </div>
          </div>

          {/* COMPARACIÓN RÁPIDA */}
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

          {/* CASOS DONDE LA CONCILIACION SUELE SER MUY EFECTIVA */}
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

          {/* EN QUE CONFLICTOS RESULTA ESPECIALMENTE RECOMENDABLE LA CONCILIACION */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿En qué conflictos resulta especialmente recomendable la
              conciliación?
            </h2>

            <p className={styles.paragraph}>
              Aunque no todos los asuntos pueden resolverse mediante
              conciliación, este mecanismo suele ser especialmente útil cuando
              las partes desean evitar un proceso judicial y existe disposición
              para dialogar.
            </p>

            <ul className={styles.list}>
              <li>Incumplimientos de contratos.</li>
              <li>Cobro de deudas.</li>
              <li>Conflictos entre socios.</li>
              <li>Problemas de convivencia.</li>
              <li>Conflictos entre vecinos.</li>
              <li>Propiedad horizontal.</li>
              <li>Controversias familiares.</li>
              <li>Conflictos comerciales.</li>
              <li>Acuerdos de pago.</li>
              <li>Responsabilidad civil.</li>
            </ul>
          </div>

          {/* CUANDO PUEDE SER MEJOR UN PROCESO JUDICIAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo puede ser mejor un proceso judicial?
            </h2>

            <p className={styles.paragraph}>
              La conciliación ofrece múltiples beneficios, pero no siempre es la
              solución adecuada. Si una de las partes no tiene intención de
              negociar, incumple de manera reiterada sus obligaciones o el
              conflicto requiere una decisión judicial específica, puede ser
              necesario acudir ante los jueces.
            </p>

            <p className={styles.paragraph}>
              Por ello, antes de iniciar cualquier actuación es recomendable
              analizar el caso concreto con profesionales que puedan orientar
              cuál es el mecanismo más conveniente según las circunstancias.
            </p>
          </div>

          {/* PREGUNTAS FRECUENTES */}
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

          {/* CTA BOX */}
          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿No sabes si te conviene conciliar o iniciar una demanda?
            </h3>

            <p className={styles.ctaText}>
              Analizamos tu caso y te orientamos sobre la alternativa más
              conveniente para proteger tus derechos. Si la conciliación es
              viable, te acompañamos durante todo el proceso para buscar un
              acuerdo seguro y con plena validez jurídica.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Recibir orientación jurídica
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
