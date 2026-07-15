"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ValorJuridicoActaConciliacionContent() {
  return (
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
            Valor jurídico del acta de conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cuál es el valor jurídico del acta de conciliación en Colombia?
            Fuerza legal, efectos y cuándo puede exigirse
          </h1>

          <p className={styles.heroText}>
            El <strong>acta de conciliación</strong> no es simplemente un
            documento que resume una reunión entre las partes. En Colombia
            constituye un instrumento con importantes efectos jurídicos, ya que
            el acuerdo alcanzado dentro de un proceso de conciliación puede
            producir <strong>cosa juzgada</strong> y prestar{" "}
            <strong>mérito ejecutivo</strong>, siempre que cumpla los requisitos
            establecidos por la ley.
          </p>

          <p className={styles.heroText}>
            Esto significa que los compromisos adquiridos dejan de ser simples
            promesas y se convierten en obligaciones exigibles. Si una de las
            partes incumple, la otra podrá acudir ante un juez para solicitar su
            cumplimiento sin tener que iniciar nuevamente la discusión sobre el
            conflicto.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué valor jurídico tiene un acta de
            conciliación, cuáles son sus efectos legales, cuándo puede
            ejecutarse judicialmente y por qué es uno de los mecanismos más
            seguros para solucionar conflictos en Colombia.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acta de conciliación y por qué tiene tanta importancia
            jurídica?
          </h2>

          <p className={styles.paragraph}>
            El acta de conciliación es el documento oficial que deja constancia
            de los acuerdos alcanzados durante una audiencia de conciliación.
            Allí quedan consignadas las obligaciones aceptadas por las partes,
            los plazos para su cumplimiento y las condiciones bajo las cuales se
            solucionó el conflicto.
          </p>

          <p className={styles.paragraph}>
            Una vez es firmada por las partes y el conciliador autorizado, el
            acta deja de ser un simple acuerdo privado para convertirse en un
            documento con importantes consecuencias jurídicas, reconocido por el
            ordenamiento colombiano.
          </p>

          <p className={styles.paragraph}>
            Precisamente por esa razón, muchas personas prefieren acudir a un
            centro de conciliación antes que iniciar un proceso judicial largo,
            ya que el acuerdo obtenido ofrece seguridad jurídica y permite
            proteger los derechos de ambas partes.
          </p>
        </div>

        {/* VALOR JURIDICO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuál es el verdadero valor jurídico del acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            El principal valor jurídico del acta consiste en que el Estado
            reconoce el acuerdo alcanzado como una solución definitiva del
            conflicto. Esto genera efectos legales que obligan a las partes a
            cumplir lo pactado.
          </p>

          <ul className={styles.list}>
            <li>Produce efectos de cosa juzgada.</li>
            <li>
              Presta mérito ejecutivo cuando existen obligaciones exigibles.
            </li>
            <li>Obliga jurídicamente a las partes.</li>
            <li>Evita nuevos procesos sobre el mismo conflicto.</li>
            <li>Reduce la incertidumbre jurídica.</li>
            <li>Facilita el cumplimiento voluntario de los acuerdos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El valor jurídico del acta de conciliación no depende únicamente
              de la firma de las partes. También exige que el acuerdo haya sido
              celebrado dentro de un procedimiento válido y que las obligaciones
              sean claras, expresas y exigibles.
            </p>
          </div>
        </div>

        {/* FUERZA LEGAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué el acta de conciliación tiene fuerza legal?
          </h2>

          <p className={styles.paragraph}>
            La legislación colombiana reconoce la conciliación como uno de los
            principales mecanismos alternativos de solución de conflictos.
            Cuando las partes llegan a un acuerdo dentro de un procedimiento
            válido, dicho acuerdo adquiere efectos jurídicos similares a los que
            produciría una decisión judicial respecto del conflicto conciliado.
          </p>

          <p className={styles.paragraph}>
            Esta protección busca incentivar que las personas solucionen sus
            diferencias mediante el diálogo, evitando procesos judiciales
            extensos y permitiendo que los acuerdos tengan plena eficacia
            jurídica.
          </p>
        </div>

        {/* EFECTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Efectos legales del acta de conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cosa juzgada</h3>
              <p>Lo conciliado no puede volver a discutirse judicialmente.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fuerza ejecutiva</h3>
              <p>Puede exigirse su cumplimiento ante un juez.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligatoriedad</h3>
              <p>Las partes deben cumplir lo acordado.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Por qué es tan importante?</h2>

          <p className={styles.paragraph}>
            El acta de conciliación garantiza seguridad jurídica y permite
            resolver conflictos sin necesidad de procesos judiciales largos y
            costosos.
          </p>

          <p className={styles.paragraph}>
            Además, protege los derechos de ambas partes al formalizar el
            acuerdo.
          </p>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se cumple el acta?
          </h2>

          <ul className={styles.list}>
            <li>Se puede iniciar un proceso ejecutivo.</li>
            <li>El juez puede ordenar su cumplimiento forzado.</li>
            <li>Se generan consecuencias legales para el incumplido.</li>
          </ul>
        </div>

        {/* CUMPLIMIENTO JUDICIAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que el acta de conciliación puede hacerse cumplir
            judicialmente
          </h2>

          <p className={styles.paragraph}>
            Si una de las partes incumple el acuerdo alcanzado, la otra podrá
            acudir ante la jurisdicción competente para solicitar su ejecución.
            Esto ocurre con frecuencia en conflictos relacionados con:
          </p>

          <ul className={styles.list}>
            <li>Pago de obligaciones económicas.</li>
            <li>Incumplimiento de acuerdos comerciales.</li>
            <li>Conflictos civiles.</li>
            <li>Acuerdos de familia.</li>
            <li>Cuotas alimentarias.</li>
            <li>Restitución de bienes.</li>
            <li>Cumplimiento de obligaciones contractuales.</li>
          </ul>

          <p className={styles.paragraph}>
            La posibilidad de ejecutar judicialmente el acuerdo es una de las
            razones por las cuales la conciliación ofrece un alto nivel de
            seguridad jurídica.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el valor jurídico del acta de
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿El acta de conciliación tiene la misma validez que una
                sentencia?
              </h3>

              <p>
                Produce importantes efectos jurídicos, como la cosa juzgada y,
                cuando corresponde, presta mérito ejecutivo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Siempre puede ejecutarse judicialmente?</h3>

              <p>
                Sí, siempre que contenga obligaciones claras, expresas y
                actualmente exigibles.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede anularse un acta de conciliación?</h3>

              <p>
                Solo en situaciones excepcionales previstas por la ley, como la
                existencia de vicios que afecten la validez del consentimiento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conocer el valor jurídico de un acta de conciliación o
            hacerla cumplir?
          </h3>

          <p className={styles.ctaText}>
            Nuestro equipo puede orientarte sobre los efectos legales del acta
            de conciliación, su fuerza ejecutiva, los mecanismos para exigir su
            cumplimiento y las alternativas disponibles para proteger tus
            derechos de acuerdo con la legislación colombiana.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un asesor
          </a>
        </div>
      </motion.article>
    </section>
  );
}
