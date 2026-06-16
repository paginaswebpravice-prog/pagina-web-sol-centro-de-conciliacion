"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosEntreVecinosContent() {
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
          <span className={styles.badge}>
            Conciliación Vecinal y Convivencia
          </span>

          <h1 className={styles.title}>
            Conflictos entre vecinos: soluciones mediante conciliación
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre vecinos son una de las causas más frecuentes de
            disputas en conjuntos residenciales, edificios, barrios y
            propiedades horizontales en Colombia. Problemas relacionados con
            ruido, mascotas, parqueaderos, linderos o zonas comunes pueden
            afectar significativamente la convivencia.
          </p>

          <p className={styles.heroText}>
            Antes de acudir a procesos judiciales o administrativos, la
            conciliación ofrece una alternativa rápida, económica y efectiva
            para que las partes encuentren una solución de común acuerdo.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación entre vecinos?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo de solución de conflictos mediante el cual dos o más
            vecinos buscan resolver una controversia con la ayuda de un
            conciliador imparcial.
          </p>

          <p className={styles.paragraph}>
            El objetivo es alcanzar acuerdos voluntarios que permitan mejorar la
            convivencia y evitar que el conflicto continúe escalando.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas vecinales que pueden conciliarse
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ruidos molestos</h3>

              <p>
                Música, fiestas, obras o actividades que afecten la tranquilidad
                de los vecinos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mascotas</h3>

              <p>
                Situaciones relacionadas con comportamiento, ruido o manejo
                inadecuado de animales domésticos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Zonas comunes</h3>

              <p>Uso indebido de áreas compartidas en edificios o conjuntos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Linderos y cerramientos</h3>

              <p>
                Diferencias relacionadas con límites de propiedades y
                construcciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Filtraciones y daños</h3>

              <p>
                Perjuicios ocasionados a inmuebles vecinos por humedades o
                reparaciones deficientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Parqueaderos</h3>

              <p>
                Conflictos por ocupación de espacios o incumplimiento de normas
                internas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación vecinal
          </h2>

          <ul className={styles.list}>
            <li>Permite resolver conflictos rápidamente.</li>
            <li>Reduce gastos jurídicos.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Promueve el diálogo y la convivencia.</li>
            <li>Ayuda a preservar relaciones vecinales.</li>
            <li>Genera acuerdos claros y verificables.</li>
            <li>Puede realizarse presencial o virtualmente.</li>
            <li>Brinda seguridad jurídica a las partes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos casos, una conversación guiada por un conciliador
              permite solucionar años de conflictos vecinales sin necesidad de
              acudir a tribunales o autoridades administrativas.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden alcanzarse?</h2>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, los vecinos pueden establecer reglas y
            compromisos específicos para mejorar la convivencia.
          </p>

          <ul className={styles.list}>
            <li>Horarios para actividades que generen ruido.</li>
            <li>Compromisos sobre manejo de mascotas.</li>
            <li>Uso adecuado de zonas comunes.</li>
            <li>Reparación de daños ocasionados.</li>
            <li>Respeto de límites y cerramientos.</li>
            <li>Cumplimiento de reglamentos internos.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez legal del acuerdo</h2>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este queda consignado en un
            acta de conciliación con efectos jurídicos y obligaciones para
            quienes participaron en el proceso.
          </p>

          <p className={styles.paragraph}>
            Esto permite contar con un respaldo formal que facilita el
            cumplimiento de los compromisos adquiridos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar problemas por ruido?</h3>

              <p>
                Sí. Los conflictos relacionados con ruido son de los asuntos más
                frecuentes en conciliación vecinal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación sirve para conflictos de propiedad horizontal?
              </h3>

              <p>
                Sí. Muchos conflictos en conjuntos residenciales pueden
                resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si incumplen el acuerdo?</h3>

              <p>
                El acta conciliatoria puede utilizarse para exigir el
                cumplimiento de los compromisos adquiridos.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto con un vecino?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación vecinal, propiedad horizontal,
            convivencia ciudadana y mecanismos de solución de conflictos en
            Colombia.
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
