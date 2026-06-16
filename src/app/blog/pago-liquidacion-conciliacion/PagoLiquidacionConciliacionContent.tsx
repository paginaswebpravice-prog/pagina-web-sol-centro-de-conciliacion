"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PagoLiquidacionConciliacionContent() {
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
          <span className={styles.badge}>Conciliación laboral en Colombia</span>

          <h1 className={styles.title}>
            Pago de liquidación mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            Las diferencias relacionadas con el pago de liquidaciones laborales
            son una de las causas más frecuentes de conflicto entre empleadores
            y trabajadores. La conciliación laboral permite resolver estas
            controversias de forma rápida, económica y con plena validez
            jurídica.
          </p>

          <p className={styles.heroText}>
            A través de una audiencia de conciliación, las partes pueden revisar
            valores pendientes, prestaciones sociales, indemnizaciones y demás
            conceptos laborales para alcanzar un acuerdo sin necesidad de
            iniciar un proceso judicial.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué es una liquidación laboral?</h2>

          <p className={styles.paragraph}>
            La liquidación laboral corresponde al conjunto de pagos que debe
            recibir un trabajador al finalizar su vínculo laboral. Incluye
            conceptos como cesantías, intereses a las cesantías, vacaciones,
            primas de servicios, salarios pendientes y demás prestaciones
            sociales.
          </p>

          <p className={styles.paragraph}>
            Cuando existen desacuerdos sobre los valores liquidados, la
            conciliación puede ser una herramienta efectiva para solucionar el
            conflicto.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones que pueden conciliarse
          </h2>

          <ul className={styles.list}>
            <li>Diferencias en el cálculo de prestaciones sociales.</li>
            <li>Salarios pendientes de pago.</li>
            <li>Vacaciones no compensadas.</li>
            <li>Pago de primas de servicios.</li>
            <li>Indemnizaciones laborales.</li>
            <li>Acuerdos de pago por cuotas.</li>
            <li>Reconocimiento de valores adeudados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite que empleador y trabajador lleguen a una
              solución negociada sin los costos y tiempos asociados a una
              demanda laboral.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de conciliar una liquidación laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solución rápida</h3>

              <p>
                Evita procesos judiciales que pueden extenderse durante meses o
                incluso años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                Reduce gastos asociados a litigios, abogados y trámites
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Los acuerdos alcanzados quedan consignados en un acta con
                efectos legales.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            El trabajador o el empleador pueden solicitar una audiencia de
            conciliación ante un centro autorizado. Durante la audiencia se
            revisan las diferencias existentes y se promueve el diálogo entre
            las partes.
          </p>

          <p className={styles.paragraph}>
            Si se alcanza un acuerdo, este queda registrado en un acta de
            conciliación que establece las obligaciones de cada parte y los
            plazos para su cumplimiento.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Documentos recomendados</h2>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Desprendibles de nómina.</li>
            <li>Carta de terminación laboral.</li>
            <li>Liquidación presentada por la empresa.</li>
            <li>Comprobantes de pago.</li>
            <li>Soportes de prestaciones sociales.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda?</h3>

              <p>
                En muchos casos sí, siempre que las partes alcancen un acuerdo
                satisfactorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar prestaciones pendientes?</h3>

              <p>
                Sí. La conciliación permite discutir y acordar el pago de
                prestaciones y demás conceptos laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>

              <p>
                Sí. Una vez firmado el acta de conciliación, las obligaciones
                acordadas deben cumplirse.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes diferencias sobre una liquidación laboral?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación para resolver conflictos relacionados con pagos,
            prestaciones sociales, liquidaciones laborales y acuerdos entre
            trabajadores y empleadores mediante conciliación.
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
