"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionArrendamientoContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>Conciliación de Arrendamiento</span>

          <h1 className={styles.title}>
            Conciliación por arrendamiento en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos derivados de contratos de arrendamiento son una de
            las causas más frecuentes de controversias entre propietarios e
            inquilinos en Colombia. La conciliación permite encontrar soluciones
            rápidas y legales sin acudir inmediatamente a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Tanto arrendadores como arrendatarios pueden utilizar este mecanismo
            para resolver diferencias relacionadas con pagos, restitución del
            inmueble, daños, servicios públicos y demás obligaciones
            contractuales.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación por arrendamiento?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo mediante el cual las partes involucradas en un
            contrato de arrendamiento buscan resolver un conflicto con la ayuda
            de un conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            El objetivo es alcanzar acuerdos que beneficien a ambas partes y
            eviten procesos judiciales largos y costosos.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá y otras ciudades de Colombia, la conciliación es una de
              las herramientas más utilizadas para solucionar conflictos entre
              propietarios e inquilinos de forma rápida y efectiva.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cánones vencidos</h3>
              <p>Acuerdos de pago para arrendamientos pendientes o en mora.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega del inmueble</h3>
              <p>
                Acuerdos sobre fechas y condiciones para la restitución del
                bien.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños al inmueble</h3>
              <p>Compensaciones por deterioros o reparaciones necesarias.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios públicos</h3>
              <p>
                Definición de pagos pendientes o responsabilidades acumuladas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos contractuales</h3>
              <p>
                Solución de obligaciones incumplidas por cualquiera de las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Depósitos y garantías</h3>
              <p>
                Acuerdos sobre devolución o aplicación de valores entregados.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación en conflictos de arrendamiento
          </h2>

          <ul className={styles.list}>
            <li>Reduce costos legales.</li>
            <li>Evita procesos judiciales extensos.</li>
            <li>Facilita acuerdos personalizados.</li>
            <li>Permite soluciones rápidas.</li>
            <li>Mejora la comunicación entre las partes.</li>
            <li>Genera seguridad jurídica.</li>
            <li>Puede realizarse de manera virtual o presencial.</li>
            <li>Ayuda a preservar relaciones comerciales.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden lograrse?</h2>

          <p className={styles.paragraph}>
            Durante la audiencia las partes pueden establecer compromisos claros
            sobre las obligaciones pendientes derivadas del contrato de
            arrendamiento.
          </p>

          <ul className={styles.list}>
            <li>Planes de pago para cánones atrasados.</li>
            <li>Entrega programada del inmueble.</li>
            <li>Reconocimiento de daños y reparaciones.</li>
            <li>Pago de servicios públicos pendientes.</li>
            <li>Terminación anticipada del contrato.</li>
            <li>Acuerdos sobre garantías y depósitos.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes no llegan a una solución durante la conciliación,
            podrán acudir a las acciones judiciales que correspondan según el
            conflicto y las normas aplicables.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, intentar la conciliación previamente suele facilitar
            futuras negociaciones y demostrar voluntad de solución.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden conciliar cánones de arrendamiento vencidos?</h3>

              <p>
                Sí. Es uno de los asuntos más comunes dentro de las audiencias
                de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede conciliarse la entrega del inmueble?</h3>

              <p>
                Sí. Las partes pueden acordar fechas, condiciones y compromisos
                para la restitución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y obliga a
                las partes a cumplir lo acordado.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto de arrendamiento?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación de contratos de arrendamiento,
            recuperación de cánones, entrega de inmuebles y solución de
            conflictos entre arrendadores e inquilinos.
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
