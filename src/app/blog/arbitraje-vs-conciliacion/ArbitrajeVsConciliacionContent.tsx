"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ArbitrajeVsConciliacionContent() {
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
          <span className={styles.badge}>MASC en Colombia</span>

          <h1 className={styles.title}>
            Arbitraje vs Conciliación en Colombia: diferencias, ventajas y cuál
            mecanismo elegir
          </h1>

          <p className={styles.heroText}>
            El arbitraje y la conciliación son dos mecanismos alternativos de
            solución de conflictos en Colombia, pero funcionan de manera muy
            diferente.
          </p>

          <p className={styles.heroText}>
            Ambos buscan evitar procesos judiciales, pero el resultado y la
            forma de decisión cambian significativamente.
          </p>
        </div>

        {/* DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué diferencia existe entre arbitraje y conciliación en Colombia?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Decisión</h3>
              <p>
                Conciliación: acuerdo voluntario. Arbitraje: decisión
                obligatoria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Tercero</h3>
              <p>Conciliador facilita. Árbitro decide.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Resultado</h3>
              <p>Conciliación: acta de acuerdo. Arbitraje: laudo arbitral.</p>
            </div>
          </div>
        </div>

        {/* DEFINICIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación y cómo funciona?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo en el que las partes intentan llegar a un acuerdo
            voluntario con la ayuda de un conciliador neutral.
          </p>

          <p className={styles.paragraph}>
            El conciliador no decide el conflicto, solo facilita el diálogo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es el arbitraje?</h2>

          <p className={styles.paragraph}>
            Es un mecanismo en el que un tercero llamado árbitro toma una
            decisión obligatoria para las partes.
          </p>

          <p className={styles.paragraph}>
            Esa decisión tiene efectos similares a una sentencia judicial.
          </p>
        </div>

        {/* COMPARACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Comparación completa entre arbitraje y conciliación
          </h2>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Conciliación</th>
                  <th>Arbitraje</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Quién toma la decisión</td>
                  <td>Las partes</td>
                  <td>El árbitro</td>
                </tr>

                <tr>
                  <td>Resultado</td>
                  <td>Acta de conciliación</td>
                  <td>Laudo arbitral</td>
                </tr>

                <tr>
                  <td>Obligatoriedad</td>
                  <td>Solo si existe acuerdo</td>
                  <td>Sí</td>
                </tr>

                <tr>
                  <td>Tiempo promedio</td>
                  <td>Generalmente menor</td>
                  <td>Variable según el proceso</td>
                </tr>

                <tr>
                  <td>Costo</td>
                  <td>Normalmente más bajo</td>
                  <td>Puede ser superior</td>
                </tr>

                <tr>
                  <td>Participación de las partes</td>
                  <td>Muy alta</td>
                  <td>Limitada durante la decisión</td>
                </tr>

                <tr>
                  <td>Flexibilidad</td>
                  <td>Alta</td>
                  <td>Media</td>
                </tr>

                <tr>
                  <td>Confidencialidad</td>
                  <td>Sí</td>
                  <td>Sí</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SIMILITUDES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿En qué se parecen?</h2>

          <ul className={styles.list}>
            <li>Ambos evitan procesos judiciales largos.</li>
            <li>Son mecanismos alternativos de solución de conflictos.</li>
            <li>Son más rápidos que un juicio tradicional.</li>
            <li>Buscan eficiencia en la resolución de disputas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Tanto el arbitraje como la conciliación fortalecen el acceso a la
              justicia en Colombia.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir primero a una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación suele ser la mejor alternativa cuando existe
            disposición de diálogo entre las partes y es posible construir una
            solución conjunta. Es especialmente útil en conflictos civiles,
            familiares, comerciales, laborales y de arrendamiento donde ambas
            partes buscan preservar la relación y reducir tiempos y costos.
          </p>

          <ul className={styles.list}>
            <li>Conflictos entre particulares.</li>
            <li>Cobro de deudas.</li>
            <li>Conflictos de arrendamiento.</li>
            <li>Acuerdos familiares.</li>
            <li>Controversias comerciales.</li>
            <li>Liquidaciones laborales.</li>
            <li>Incumplimientos contractuales.</li>
          </ul>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos es mejor acudir al arbitraje?
          </h2>

          <p className={styles.paragraph}>
            El arbitraje resulta recomendable cuando las partes necesitan una
            decisión definitiva emitida por un tercero imparcial, especialmente
            en conflictos contractuales complejos o de alto valor económico.
          </p>

          <ul className={styles.list}>
            <li>Contratos empresariales.</li>

            <li>Contratos de construcción.</li>

            <li>Conflictos entre socios.</li>

            <li>Contratos internacionales.</li>

            <li>Grandes controversias comerciales.</li>

            <li>Procesos donde exista cláusula compromisoria.</li>
          </ul>
        </div>

        {/* COSTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué mecanismo suele ser más económico?
          </h2>

          <p className={styles.paragraph}>
            En términos generales, la conciliación suele representar menores
            costos debido a la simplicidad del procedimiento y al menor tiempo
            requerido para alcanzar una solución.
          </p>

          <p className={styles.paragraph}>
            El arbitraje puede implicar mayores costos, ya que intervienen
            árbitros, gastos administrativos y un procedimiento más
            estructurado. No obstante, en controversias complejas puede resultar
            más eficiente que acudir a un proceso judicial ordinario.
          </p>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas y desventajas del arbitraje y la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>
              <p>Flexible, voluntaria y rápida.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arbitraje</h3>
              <p>Decisión definitiva y con fuerza legal.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ambos</h3>
              <p>Evitan congestión judicial.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué estos mecanismos son cada vez más utilizados en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Estos mecanismos permiten resolver conflictos de forma más eficiente
            y descongestionar el sistema judicial colombiano.
          </p>

          <p className={styles.paragraph}>
            Además, promueven la cultura del diálogo y la solución pacífica de
            conflictos.
          </p>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al elegir entre arbitraje y conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Elegir el mecanismo sin analizar el conflicto</h3>

              <p>
                Cada controversia tiene características diferentes y requiere
                una evaluación previa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Creer que ambos funcionan igual</h3>

              <p>
                Aunque ambos pertenecen a los mecanismos alternativos de
                solución de conflictos, su procedimiento y resultado son
                diferentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No revisar las cláusulas del contrato</h3>

              <p>
                Muchos contratos establecen previamente si las controversias
                deberán resolverse mediante arbitraje o mediante otro mecanismo.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El arbitraje reemplaza un juicio?</h3>
              <p>Sí, su decisión tiene efectos similares a una sentencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>
              <p>No, depende de la voluntad de las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuál es más usado?</h3>
              <p>La conciliación es más común en conflictos cotidianos.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Necesitas resolver un conflicto?</h3>

          <p className={styles.ctaText}>
            Elige el mecanismo adecuado entre arbitraje y conciliación para
            resolver tu caso de forma eficiente en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
