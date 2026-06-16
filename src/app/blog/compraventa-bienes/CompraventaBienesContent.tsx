"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CompraventaBienesContent() {
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
          <span className={styles.badge}>Conciliación civil y contractual</span>

          <h1 className={styles.title}>
            Conciliación en compraventa de bienes en Colombia
          </h1>

          <p className={styles.heroText}>
            Los conflictos derivados de contratos de compraventa de bienes son
            frecuentes en Colombia. Problemas relacionados con entregas,
            incumplimientos, pagos, garantías o diferencias sobre las
            condiciones pactadas pueden generar controversias entre compradores
            y vendedores.
          </p>

          <p className={styles.heroText}>
            La conciliación permite encontrar soluciones rápidas y efectivas,
            evitando procesos judiciales prolongados y favoreciendo acuerdos que
            beneficien a ambas partes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es la compraventa de bienes?</h2>

          <p className={styles.paragraph}>
            La compraventa es un contrato mediante el cual una persona se obliga
            a transferir la propiedad de un bien y otra a pagar un precio por
            dicho bien.
          </p>

          <p className={styles.paragraph}>
            Este tipo de contratos pueden involucrar vehículos, maquinaria,
            equipos, mercancías, inmuebles u otros bienes muebles e inmuebles.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando surgen desacuerdos sobre la ejecución del contrato, la
              conciliación puede ser una herramienta eficaz para resolver el
              conflicto sin acudir inmediatamente a los tribunales.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas frecuentes en la compraventa de bienes
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento en la entrega del bien.</li>
            <li>Retrasos en los pagos acordados.</li>
            <li>Entrega de bienes defectuosos.</li>
            <li>Incumplimiento de garantías.</li>
            <li>Diferencias sobre el estado del bien.</li>
            <li>Incumplimiento de condiciones contractuales.</li>
            <li>Devolución del dinero entregado.</li>
            <li>Disputas por calidad o cantidad del producto.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de resolver el conflicto mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Soluciones rápidas</h3>

              <p>
                Los acuerdos pueden lograrse en menor tiempo que un proceso
                judicial tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor costo</h3>

              <p>
                Se reducen gastos asociados a litigios y procedimientos
                judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden construir acuerdos adaptados a sus necesidades
                comerciales y económicas.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Posibles acuerdos en una conciliación
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del caso, las partes pueden acordar la entrega del bien,
            la devolución del dinero, descuentos, reparaciones, sustitución del
            producto o nuevos plazos para el cumplimiento de las obligaciones.
          </p>

          <p className={styles.paragraph}>
            La finalidad es encontrar una solución práctica que permita superar
            el conflicto y evitar mayores perjuicios económicos.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Validez jurídica de los acuerdos</h2>

          <p className={styles.paragraph}>
            Cuando el acuerdo se formaliza mediante conciliación, queda
            consignado en un acta con efectos jurídicos que puede ser exigida en
            caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            Esto brinda seguridad tanto al comprador como al vendedor y permite
            que las obligaciones pactadas tengan respaldo legal.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo recuperar mi dinero?</h3>

              <p>
                Sí. Dependiendo del caso, puede acordarse la devolución total o
                parcial de los valores pagados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede exigir la entrega del bien?</h3>

              <p>
                Sí. La conciliación permite acordar plazos y condiciones para la
                entrega del bien comprometido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no hay acuerdo?</h3>

              <p>
                Las partes conservan la posibilidad de acudir posteriormente a
                la vía judicial para resolver el conflicto.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto relacionado con una compraventa?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, incumplimientos
            contractuales, devolución de dinero, entrega de bienes y resolución
            de conflictos en Colombia.
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
