"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DanosYPerjuiciosContent() {
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
            Conciliación Civil e Indemnizaciones
          </span>

          <h1 className={styles.title}>
            Conciliación por daños y perjuicios en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando una persona causa un perjuicio económico a otra, pueden
            surgir reclamaciones relacionadas con indemnizaciones,
            compensaciones o reparación de daños. Antes de acudir a un proceso
            judicial, la conciliación ofrece una alternativa eficaz para buscar
            soluciones rápidas y mutuamente beneficiosas.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que las partes dialoguen con la ayuda de un
            conciliador imparcial y lleguen a acuerdos sobre la reparación de
            los daños ocasionados, evitando litigios largos y costosos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué son los daños y perjuicios?</h2>

          <p className={styles.paragraph}>
            Los daños y perjuicios corresponden a las afectaciones económicas,
            patrimoniales o materiales que una persona sufre como consecuencia
            de la conducta de otra persona.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del caso, estos perjuicios pueden generar la obligación
            de indemnizar o compensar económicamente a quien resultó afectado.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimientos contractuales</h3>

              <p>
                Daños ocasionados por el incumplimiento de acuerdos o contratos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños materiales</h3>

              <p>
                Afectaciones a bienes muebles, inmuebles o patrimonio económico.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Perjuicios económicos</h3>

              <p>Pérdidas financieras ocasionadas por acciones de terceros.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Responsabilidad civil</h3>

              <p>
                Situaciones donde una persona debe responder por los daños
                ocasionados a otra.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de conciliar una reclamación
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Reduce gastos legales y procesales.</li>
            <li>Permite acuerdos personalizados.</li>
            <li>Facilita el pago de indemnizaciones.</li>
            <li>Promueve soluciones rápidas.</li>
            <li>Reduce el desgaste emocional de las partes.</li>
            <li>Brinda seguridad jurídica.</li>
            <li>Puede realizarse presencial o virtualmente.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite que las partes construyan soluciones
              ajustadas a sus necesidades sin esperar el resultado de un proceso
              judicial que puede tardar meses o incluso años.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden lograrse?</h2>

          <p className={styles.paragraph}>
            Las partes pueden acordar diferentes formas de compensación según
            las circunstancias específicas del conflicto.
          </p>

          <ul className={styles.list}>
            <li>Pago total de la indemnización.</li>
            <li>Pago en cuotas.</li>
            <li>Reparación o reposición de bienes.</li>
            <li>Compensaciones económicas parciales.</li>
            <li>Reconocimiento de responsabilidades.</li>
            <li>Compromisos de cumplimiento futuro.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Validez legal del acuerdo conciliatorio
          </h2>

          <p className={styles.paragraph}>
            Cuando se alcanza un acuerdo, este queda consignado en un acta de
            conciliación que posee efectos jurídicos y obliga a las partes a
            cumplir los compromisos adquiridos.
          </p>

          <p className={styles.paragraph}>
            Esto proporciona mayor seguridad y permite formalizar la solución
            del conflicto de manera legal y verificable.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar una indemnización mediante conciliación?</h3>

              <p>
                Sí. Muchos conflictos relacionados con daños económicos pueden
                resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>

              <p>
                Dependiendo del caso, las partes pueden participar directamente
                en la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si incumplen el acuerdo?</h3>

              <p>
                El acta conciliatoria puede utilizarse para exigir el
                cumplimiento de las obligaciones pactadas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto por daños y perjuicios?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, reclamaciones por
            perjuicios económicos, indemnizaciones y mecanismos de solución de
            conflictos en Colombia.
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
