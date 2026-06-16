"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroDineroConciliacionContent() {
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
            Conciliación Civil y Obligaciones Económicas
          </span>

          <h1 className={styles.title}>
            Cobro de dinero mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando una persona incumple una obligación económica, muchas veces
            la primera reacción es pensar en una demanda. Sin embargo, antes de
            iniciar un proceso judicial, existe la posibilidad de recuperar el
            dinero mediante un procedimiento más rápido, económico y flexible:
            la conciliación.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que acreedor y deudor se sienten a negociar
            con la intervención de un conciliador imparcial para encontrar una
            solución que beneficie a ambas partes y facilite el cumplimiento de
            la obligación.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es el cobro de dinero mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo mediante el cual una persona busca recuperar una
            suma de dinero adeudada a través de un acuerdo conciliatorio,
            evitando inicialmente acudir a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, las partes pueden negociar condiciones de
            pago, plazos, cuotas y otros compromisos que permitan solucionar el
            conflicto de forma voluntaria.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Casos en los que puede utilizarse</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos personales</h3>

              <p>
                Dinero prestado entre familiares, amigos o conocidos que no ha
                sido devuelto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ventas a crédito</h3>

              <p>Obligaciones derivadas de compraventas pendientes de pago.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios prestados</h3>

              <p>Honorarios o pagos pendientes por trabajos realizados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones civiles</h3>

              <p>
                Cualquier deuda entre particulares susceptible de conciliación.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de recuperar dinero mediante conciliación
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Reduce costos legales.</li>
            <li>Permite acuerdos personalizados.</li>
            <li>Facilita el cumplimiento voluntario.</li>
            <li>Permite establecer cuotas de pago.</li>
            <li>Genera seguridad jurídica.</li>
            <li>Protege relaciones personales y comerciales.</li>
            <li>Puede realizarse de forma presencial o virtual.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos casos, una conciliación exitosa permite recuperar el
              dinero en pocas semanas, evitando largos procesos judiciales y
              costos adicionales para ambas partes.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Posibles acuerdos de pago</h2>

          <p className={styles.paragraph}>
            Durante la audiencia pueden alcanzarse diferentes tipos de acuerdos
            según las necesidades de las partes.
          </p>

          <ul className={styles.list}>
            <li>Pago total inmediato.</li>
            <li>Pago por cuotas periódicas.</li>
            <li>Ampliación de plazos.</li>
            <li>Reducción o condonación de intereses.</li>
            <li>Reconocimiento formal de la deuda.</li>
            <li>Entrega de garantías de pago.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué validez tiene el acuerdo?</h2>

          <p className={styles.paragraph}>
            Si las partes llegan a un acuerdo, este queda consignado en un acta
            de conciliación que tiene efectos jurídicos y constituye una prueba
            formal de los compromisos adquiridos.
          </p>

          <p className={styles.paragraph}>
            Esto brinda mayor seguridad al acreedor y fomenta el cumplimiento
            voluntario de las obligaciones pactadas.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se cumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando una de las partes incumple lo pactado en la conciliación,
            pueden iniciarse las acciones legales correspondientes para exigir
            el cumplimiento de la obligación económica.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación representa una alternativa amistosa
            sin renunciar a la protección jurídica que ofrece la ley colombiana.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>

              <p>
                No necesariamente. Muchas conciliaciones pueden realizarse
                directamente por las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda antigua?</h3>

              <p>
                Sí, siempre que el asunto sea legalmente conciliable y exista
                voluntad de negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>

              <p>
                En algunos asuntos puede constituir un requisito previo antes de
                presentar una demanda judicial.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar un dinero adeudado?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos de pago,
            recuperación de obligaciones económicas y solución de conflictos
            entre particulares en Colombia.
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
