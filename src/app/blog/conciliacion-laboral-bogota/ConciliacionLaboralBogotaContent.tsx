"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionLaboralBogotaContent() {
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
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Conciliación Laboral en Bogotá: Cómo Resolver Conflictos entre
            Trabajadores y Empleadores
          </h1>

          <p className={styles.heroText}>
            Los conflictos laborales pueden surgir en cualquier momento de la
            relación entre trabajadores y empleadores. Diferencias por salarios
            pendientes, liquidaciones, prestaciones sociales, despidos o
            indemnizaciones suelen generar incertidumbre y, en muchos casos,
            terminan convirtiéndose en largos procesos judiciales.
          </p>

          <p className={styles.heroText}>
            La conciliación laboral en Bogotá ofrece una alternativa para que
            ambas partes dialoguen, negocien y encuentren soluciones con el
            acompañamiento de un conciliador imparcial, evitando en muchos casos
            acudir ante un juez laboral.
          </p>

          <p className={styles.heroText}>
            Cuando existe disposición para llegar a un acuerdo, este mecanismo
            permite ahorrar tiempo, reducir costos y obtener un acta con efectos
            jurídicos que brinda seguridad tanto al trabajador como al
            empleador.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación laboral y cuándo puede utilizarse en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral es un mecanismo alternativo de solución de
            conflictos mediante el cual trabajadores y empleadores buscan
            resolver sus diferencias con la ayuda de un conciliador imparcial,
            evitando en muchos casos un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo puede utilizarse para solucionar controversias
            relacionadas con salarios, prestaciones sociales, liquidaciones,
            vacaciones, indemnizaciones, terminación del contrato y otros
            asuntos laborales que la ley permite conciliar.
          </p>

          <p className={styles.paragraph}>
            Además de ofrecer una solución más rápida, la conciliación promueve
            acuerdos construidos por las propias partes, permitiendo preservar
            relaciones laborales y reducir el desgaste económico y emocional que
            implica un litigio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando se alcanza un acuerdo, este queda consignado en un acta de
              conciliación que produce efectos jurídicos y obliga a las partes a
              cumplir los compromisos adquiridos.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos laborales que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Salarios pendientes</h3>

              <p>
                Reclamaciones relacionadas con pagos atrasados, diferencias
                salariales y horas extras no canceladas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>

              <p>
                Diferencias sobre la liquidación al finalizar el contrato de
                trabajo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestaciones sociales</h3>

              <p>
                Conflictos relacionados con cesantías, intereses, primas,
                vacaciones y demás prestaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Despidos</h3>

              <p>
                Acuerdos económicos derivados de la terminación de la relación
                laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Indemnizaciones</h3>

              <p>
                Negociación de compensaciones económicas derivadas de conflictos
                laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento del contrato</h3>

              <p>
                Solución de diferencias relacionadas con obligaciones
                incumplidas por cualquiera de las partes.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación laboral antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            Antes de iniciar un proceso judicial, muchas controversias laborales
            pueden solucionarse mediante el diálogo y la negociación. La
            conciliación ofrece un espacio para construir acuerdos que
            beneficien tanto al trabajador como al empleador.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Permite resolver conflictos en mucho menos tiempo que un proceso
                judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>Reduce gastos asociados a litigios prolongados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>

              <p>
                Las partes construyen soluciones adaptadas a sus necesidades.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acuerdo tiene respaldo legal y genera obligaciones para ambas
                partes.
              </p>
            </div>
          </div>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Dónde se realiza en Bogotá?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías con funciones conciliatorias.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas habilitadas.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples entidades donde se pueden resolver
              conflictos laborales de forma legal y segura.
            </p>
          </div>
        </div>

        {/* PROCESO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de una conciliación laboral paso a paso?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>
              <p>
                Se presenta la solicitud de conciliación indicando el conflicto
                laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>
              <p>
                El centro de conciliación cita al trabajador y al empleador para
                la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>
              <p>
                El conciliador escucha a las partes y facilita el diálogo para
                buscar una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acuerdo</h3>
              <p>
                Si existe consenso, se firma un acta con efectos jurídicos para
                ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos pueden ser útiles durante una conciliación laboral?
          </h2>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Desprendibles de nómina.</li>
            <li>Liquidación laboral.</li>
            <li>Comprobantes de pago.</li>
            <li>Certificaciones laborales.</li>
            <li>Correos o comunicaciones entre las partes.</li>
            <li>Pruebas relacionadas con el conflicto.</li>
          </ul>
        </div>

        {/* ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden alcanzarse en una conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Cada conflicto laboral es diferente; por ello, los acuerdos pueden
            adaptarse a las necesidades de las partes siempre que respeten la
            legislación colombiana.
          </p>

          <ul className={styles.list}>
            <li>Pago de salarios pendientes.</li>
            <li>Reconocimiento de prestaciones sociales.</li>
            <li>Pago de indemnizaciones.</li>
            <li>Acuerdos sobre liquidaciones laborales.</li>
            <li>Planes de pago.</li>
            <li>Cumplimiento de obligaciones laborales.</li>
            <li>
              Terminación de conflictos derivados del contrato de trabajo.
            </li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la conciliación laboral es una excelente alternativa para
            resolver conflictos?
          </h2>

          <p className={styles.paragraph}>
            La conciliación permite que trabajadores y empleadores participen
            activamente en la construcción de soluciones, evitando que un
            tercero imponga una decisión después de un proceso judicial que
            puede prolongarse durante meses o años.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, este mecanismo fortalece el
            diálogo, disminuye el desgaste emocional y facilita el cumplimiento
            voluntario de los acuerdos alcanzados.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación laboral en Bogotá
          </h2>

          <p className={styles.paragraph}>
            Estas son algunas de las dudas más comunes de trabajadores y
            empleadores antes de iniciar una audiencia de conciliación laboral.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar si ya terminó mi contrato laboral?</h3>

              <p>
                Sí. Es posible conciliar diferencias relacionadas con
                liquidaciones, prestaciones sociales, salarios pendientes,
                indemnizaciones y otras obligaciones derivadas de la relación
                laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si la otra parte no acepta conciliar?</h3>

              <p>
                Cuando no es posible llegar a un acuerdo o alguna de las partes
                no comparece, el conflicto podrá continuar por la vía judicial,
                según lo establecido por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta de conciliación tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y, en muchos
                casos, presta mérito ejecutivo, por lo que puede exigirse su
                cumplimiento si alguna de las partes incumple lo acordado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tiempo puede durar una conciliación laboral?</h3>

              <p>
                Depende de la complejidad del caso y de la disposición de las
                partes. Sin embargo, normalmente el procedimiento resulta mucho
                más rápido que un proceso judicial laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué documentos debo llevar a la audiencia?</h3>

              <p>
                Es recomendable presentar el contrato de trabajo, desprendibles
                de nómina, liquidaciones, comunicaciones con el empleador y
                cualquier otro documento que permita demostrar los hechos objeto
                del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio contar con abogado?</h3>

              <p>
                En muchos casos no es obligatorio; sin embargo, recibir asesoría
                jurídica puede ayudar a proteger mejor los derechos de las
                partes y a construir acuerdos más sólidos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto laboral en Bogotá?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolverlo mediante conciliación de forma rápida y
            legal en Colombia.
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
