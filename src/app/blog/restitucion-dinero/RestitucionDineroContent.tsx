"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RestitucionDineroContent() {
  return (
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
            Conciliación civil y obligaciones económicas
          </span>

          <h1 className={styles.title}>
            Restitución de dinero por incumplimiento en Colombia
          </h1>

          <p className={styles.heroText}>
            La restitución de dinero por incumplimiento es uno de los asuntos
            más frecuentes que pueden resolverse mediante conciliación en
            Colombia. Cuando una persona o empresa incumple una obligación
            económica, es posible buscar una solución rápida mediante acuerdos
            conciliatorios antes de iniciar una demanda.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite recuperar recursos económicos derivados de
            préstamos, contratos, ventas, servicios, arrendamientos y otros
            compromisos financieros.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo procede la restitución de dinero?
          </h2>

          <p className={styles.paragraph}>
            La restitución económica puede solicitarse cuando una persona
            recibió dinero y no cumplió con la obligación acordada o cuando se
            produjo un incumplimiento contractual que generó pérdidas
            económicas.
          </p>

          <ul className={styles.list}>
            <li>Préstamos entre particulares.</li>
            <li>Incumplimiento de contratos.</li>
            <li>Ventas no entregadas.</li>
            <li>Servicios no ejecutados.</li>
            <li>Pagos realizados indebidamente.</li>
            <li>Deudas pendientes de cancelación.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar antes de demandar
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Los acuerdos conciliatorios suelen obtenerse en menos tiempo que
                un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Se reducen gastos asociados a litigios prolongados y procesos
                judiciales complejos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden acordar plazos, cuotas o condiciones de pago
                adaptadas a sus necesidades.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que ayudan a demostrar la obligación
          </h2>

          <p className={styles.paragraph}>
            Para fortalecer la solicitud de conciliación es recomendable contar
            con documentos que acrediten la existencia de la obligación
            económica.
          </p>

          <ul className={styles.list}>
            <li>Contratos firmados.</li>
            <li>Facturas.</li>
            <li>Comprobantes de transferencia.</li>
            <li>Recibos de pago.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes donde se reconozca la deuda.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Mientras más pruebas existan sobre la obligación económica, más
              sencillo será alcanzar un acuerdo o demostrar posteriormente el
              incumplimiento.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se cumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes firman un acta de conciliación, el acuerdo
            adquiere efectos jurídicos obligatorios. Si posteriormente existe
            incumplimiento, el documento puede utilizarse para iniciar acciones
            ejecutivas ante la justicia.
          </p>

          <p className={styles.paragraph}>
            Esto brinda seguridad jurídica y convierte la conciliación en una
            alternativa efectiva para recuperar recursos económicos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>

              <p>
                Dependiendo del caso, la conciliación puede adelantarse sin
                necesidad de un proceso judicial previo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo recuperar préstamos personales?</h3>

              <p>
                Sí. Los préstamos entre particulares son asuntos que suelen
                resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene fuerza jurídica y puede
                exigirse judicialmente.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar dinero por incumplimiento?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, recuperación de dinero,
            acuerdos de pago y resolución de conflictos económicos en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
