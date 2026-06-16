"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DeudasEntreParticularesContent() {
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
          <span className={styles.badge}>Conciliación Civil en Colombia</span>

          <h1 className={styles.title}>
            Conciliación por deudas entre particulares en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando una persona presta dinero, vende un bien, realiza un servicio
            o adquiere una obligación económica con otra persona, pueden surgir
            conflictos relacionados con el incumplimiento del pago. En estos
            casos, la conciliación se convierte en una alternativa rápida y
            efectiva para buscar una solución sin acudir directamente a un
            proceso judicial.
          </p>

          <p className={styles.heroText}>
            A través de la conciliación por deudas entre particulares es posible
            negociar plazos, cuotas, descuentos, formas de pago y compromisos
            que beneficien a ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación por deudas?
          </h2>

          <p className={styles.paragraph}>
            Es un procedimiento mediante el cual acreedor y deudor se reúnen
            ante un conciliador para intentar llegar a un acuerdo voluntario
            sobre una obligación económica pendiente.
          </p>

          <p className={styles.paragraph}>
            El objetivo principal es evitar un proceso judicial y facilitar que
            la deuda sea pagada de forma ordenada y realista.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos personales</h3>
              <p>Dinero prestado entre familiares, amigos o conocidos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Venta de bienes</h3>
              <p>Obligaciones derivadas de compraventas no pagadas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestación de servicios</h3>
              <p>Facturas o servicios pendientes de pago.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos comerciales</h3>
              <p>Incumplimientos económicos entre particulares.</p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de conciliar una deuda</h2>

          <ul className={styles.list}>
            <li>Evita demandas judiciales largas.</li>
            <li>Reduce gastos legales.</li>
            <li>Permite acuerdos flexibles.</li>
            <li>Facilita el pago en cuotas.</li>
            <li>Ayuda a conservar relaciones personales.</li>
            <li>Genera seguridad jurídica para ambas partes.</li>
            <li>Permite obtener un acuerdo formal y exigible.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Muchas deudas pueden solucionarse mediante conciliación en
              cuestión de semanas, mientras que un proceso judicial puede tardar
              meses o incluso años.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden alcanzarse?</h2>

          <p className={styles.paragraph}>
            Durante la audiencia las partes pueden establecer diferentes
            mecanismos para cumplir la obligación económica.
          </p>

          <ul className={styles.list}>
            <li>Pago total inmediato.</li>
            <li>Pago por cuotas.</li>
            <li>Ampliación de plazos.</li>
            <li>Condonación parcial de intereses.</li>
            <li>Entrega de garantías.</li>
            <li>Reconocimiento formal de la deuda.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si el deudor incumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            El acuerdo alcanzado queda consignado en un acta de conciliación.
            Este documento tiene efectos jurídicos y puede servir como base para
            exigir el cumplimiento mediante las vías legales correspondientes.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación brinda una solución amistosa sin
            sacrificar la seguridad jurídica del acreedor.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>
              <p>
                No siempre. Muchas conciliaciones pueden adelantarse
                directamente por las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda antigua?</h3>
              <p>
                Sí, siempre que el asunto sea conciliable y las partes estén
                dispuestas a negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>
                Sí. Una vez firmado, las partes adquieren compromisos que deben
                cumplir.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar una deuda sin demandar?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos de pago,
            recuperación de cartera y solución de conflictos económicos entre
            particulares en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar información
          </a>
        </div>
      </motion.article>
    </section>
  );
}
