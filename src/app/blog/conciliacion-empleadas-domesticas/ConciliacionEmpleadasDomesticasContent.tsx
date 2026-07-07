"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionEmpleadasDomesticasContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO SECTION */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>Derecho laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación con empleadas domésticas en Colombia: salarios,
            liquidaciones, prestaciones y conflictos laborales
          </h1>

          <p className={styles.heroText}>
            Los conflictos laborales entre empleadores y empleadas domésticas
            son más comunes de lo que muchas personas imaginan. Diferencias
            sobre salarios, liquidaciones, prestaciones sociales, vacaciones o
            terminación del contrato pueden generar desacuerdos importantes.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral permite resolver estas controversias
            mediante el diálogo y la construcción de acuerdos con plena validez
            jurídica, evitando procesos judiciales más largos y costosos.
          </p>

          <p className={styles.heroText}>
            En muchas ocasiones los desacuerdos surgen porque alguna de las
            partes no tiene claridad sobre sus derechos y obligaciones.
            Situaciones relacionadas con pagos pendientes, cálculo de
            prestaciones sociales, liquidaciones laborales, vacaciones,
            indemnizaciones o terminación del contrato suelen generar tensiones
            que pueden resolverse mediante diálogo y acompañamiento
            especializado.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral permite que empleadores y trabajadoras
            domésticas encuentren soluciones prácticas y legalmente válidas sin
            necesidad de iniciar procesos judiciales largos. Además, ofrece un
            espacio neutral donde ambas partes pueden exponer su situación y
            construir acuerdos que reduzcan costos, tiempo y desgaste emocional.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION CON EMPLEADAS DOMESTICAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación con empleadas domésticas?
          </h2>

          <p className={styles.paragraph}>
            La conciliación con empleadas domésticas es un mecanismo de
            resolución de conflictos que permite a empleadores y trabajadoras
            buscar acuerdos voluntarios con la intervención de un conciliador
            imparcial. Su finalidad es solucionar desacuerdos relacionados con
            la relación laboral sin acudir directamente a una demanda ante la
            jurisdicción laboral.
          </p>

          <p className={styles.paragraph}>
            Durante la conciliación pueden analizarse documentos, contratos,
            comprobantes de pago y demás soportes relevantes para comprender el
            origen del conflicto y encontrar soluciones razonables para ambas
            partes.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento suele utilizarse cuando existen diferencias sobre
            salarios, prestaciones sociales, liquidaciones, vacaciones,
            indemnizaciones o cualquier otra obligación derivada del trabajo
            doméstico.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite encontrar soluciones rápidas, legales y
              menos traumáticas para ambas partes.
            </p>
          </div>
        </div>

        {/* CONFLICTOS MAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            {" "}
            Conflictos laborales más comunes entre empleadores y empleadas
            domésticas
          </h2>
          <p className={styles.paragraph}>
            Aunque cada caso tiene circunstancias particulares, existen ciertos
            conflictos que se presentan con frecuencia en las relaciones
            laborales del servicio doméstico. Muchos de ellos pueden resolverse
            mediante conciliación antes de convertirse en procesos judiciales.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>
              <p>
                Diferencias sobre cesantías, intereses, primas, vacaciones y
                otros conceptos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>
              <p>Reclamaciones por pagos atrasados o valores no cancelados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>
              <p>
                Acuerdos relacionados con renuncias, despidos o finalización de
                la relación laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Vacaciones pendientes</h3>

              <p>
                Diferencias sobre periodos de descanso no disfrutados o
                compensaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Reclamaciones relacionadas con cesantías, intereses, primas y
                otros derechos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                Controversias derivadas de despidos o terminaciones del contrato
                que generan reclamaciones económicas.
              </p>
            </div>
          </div>
        </div>

        {/* TEMAS QUE PUEDE CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Temas que pueden conciliarse</h2>

          <p className={styles.paragraph}>
            La conciliación laboral permite abordar una amplia variedad de
            asuntos relacionados con el trabajo doméstico. Dependiendo del caso
            concreto, las partes pueden construir acuerdos sobre los siguientes
            temas:
          </p>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Vacaciones no disfrutadas.</li>
            <li>Liquidaciones laborales.</li>
            <li>Indemnizaciones.</li>
            <li>Acuerdos de pago.</li>
            <li>Terminación de contratos.</li>
            <li>Reconocimiento de derechos laborales.</li>
          </ul>

          <p className={styles.paragraph}>
            El objetivo no es determinar quién tiene la razón, sino encontrar
            una solución viable que permita cerrar el conflicto y evitar futuras
            controversias laborales.
          </p>
        </div>

        {/* BENEFICIOS DE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Soluciones más rápidas</h3>

              <p>
                Permite resolver controversias en menos tiempo que un proceso
                judicial laboral tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Reduce gastos relacionados con demandas, honorarios y trámites
                judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>

              <p>
                Las partes pueden construir soluciones adaptadas a sus
                necesidades y posibilidades económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Los acuerdos formalizados mediante conciliación generan
                obligaciones con respaldo legal.
              </p>
            </div>
          </div>
        </div>

        {/* QUE OCURRE SI SE ALCANZA UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si se alcanza un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este se formaliza mediante un
            acta de conciliación con efectos legales.
          </p>

          <p className={styles.paragraph}>
            El documento establece las obligaciones asumidas por cada parte y
            puede exigirse judicialmente en caso de incumplimiento.
          </p>
        </div>

        {/* QUE DOCUMENTOS PUEDEN SER UTILES EN UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos pueden ser útiles en una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Contar con documentación organizada facilita el análisis del caso y
            ayuda a que las partes lleguen a acuerdos más claros y
            fundamentados.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo si existe.</li>
            <li>Comprobantes de pago.</li>
            <li>Liquidaciones realizadas.</li>
            <li>Constancias laborales.</li>
            <li>Registros de vacaciones.</li>
            <li>Soportes relacionados con prestaciones sociales.</li>
            <li>Comunicaciones entre las partes.</li>
          </ul>

          <p className={styles.paragraph}>
            Aunque no siempre es obligatorio aportar todos estos documentos,
            disponer de soportes claros suele facilitar la construcción de
            acuerdos satisfactorios.
          </p>
        </div>

        {/* QUE PUEDE PASAR SI NO SE LOGRA UN ACUERDO DURANTE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. Cuando las partes
            mantienen posiciones muy diferentes o no existe disposición para
            negociar, la conciliación puede finalizar sin una solución
            definitiva.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, la participación en la audiencia suele permitir aclarar
            puntos de discusión, conocer mejor las pretensiones de cada parte y
            facilitar futuras negociaciones. Además, dependiendo del caso, las
            partes conservan la posibilidad de acudir posteriormente a las vías
            judiciales correspondientes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación suele ser una de las formas más
              efectivas de resolver conflictos laborales antes de llegar a una
              demanda.
            </p>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda?</h3>

              <p>
                En muchos casos sí, siempre que se logre un acuerdo
                satisfactorio para ambas partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La empleada doméstica puede reclamar prestaciones?</h3>

              <p>
                Sí. Las prestaciones sociales forman parte de los derechos
                laborales reconocidos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y debe ser
                cumplida por las partes.
              </p>
            </div>
          </div>
        </div>

        {/* DERECHOS LABORALES DE LAS EMPLEADAS DOMÉSTICAS QUE SUELEN GENERAR CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Derechos laborales de las empleadas domésticas que suelen generar
            conflictos
          </h2>

          <p className={styles.paragraph}>
            Muchas conciliaciones laborales relacionadas con trabajo doméstico
            surgen por diferencias en la interpretación o reconocimiento de
            derechos laborales. Entre los temas que con mayor frecuencia generan
            reclamaciones se encuentran el pago de salarios, las prestaciones
            sociales, las vacaciones, los aportes a seguridad social y las
            liquidaciones al finalizar la relación laboral.
          </p>

          <p className={styles.paragraph}>
            Cuando existen dudas sobre estos derechos, la conciliación permite
            analizar la situación concreta y construir acuerdos que protejan los
            intereses de ambas partes dentro del marco legal colombiano.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, liquidaciones,
            prestaciones sociales y acuerdos entre empleadores y empleadas
            domésticas en Colombia.
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
