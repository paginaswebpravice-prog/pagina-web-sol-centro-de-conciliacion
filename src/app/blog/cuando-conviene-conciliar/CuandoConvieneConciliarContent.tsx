"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CuandoConvieneConciliarContent() {
  return (
    <section id="cuando-conviene" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* ================= HERO ================= */}

        <div className={styles.hero}>
          <span className={styles.badge}>
            Conciliación Extrajudicial en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cuándo conviene conciliar en Colombia y Bogotá?
          </h1>

          <p className={styles.paragraph}>
            La <strong>conciliación en Colombia</strong> es uno de los
            mecanismos más eficientes para resolver conflictos sin acudir a un
            proceso judicial. En ciudades como <strong>Bogotá</strong>, donde
            los tiempos judiciales pueden ser largos, la conciliación se
            convierte en una herramienta estratégica para lograr acuerdos
            rápidos, seguros y legalmente válidos.
          </p>

          <p className={styles.paragraph}>
            Saber <strong>cuándo conviene conciliar</strong> puede marcar la
            diferencia entre un conflicto prolongado y una solución práctica,
            económica y efectiva para ambas partes.
          </p>
        </div>

        {/* ================= CASOS ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Casos en los que conviene conciliar en Colombia
          </h2>

          <p className={styles.paragraph}>
            Existen múltiples situaciones donde la conciliación extrajudicial
            puede ayudar a resolver conflictos de forma más rápida que un
            proceso judicial tradicional:
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Relación entre las partes:</strong> cuando existe vínculo
              familiar, comercial o contractual, como arrendamientos,
              proveedores, socios o conflictos familiares.
            </li>

            <li>
              <strong>Necesidad de una solución rápida:</strong> ideal para
              evitar procesos judiciales largos y costosos en Colombia.
            </li>

            <li>
              <strong>Acuerdos flexibles:</strong> permite negociar planes de
              pago, compromisos graduales o soluciones personalizadas.
            </li>

            <li>
              <strong>Evidencia suficiente:</strong> cuando existen pruebas,
              pero se busca evitar desgaste económico y emocional.
            </li>

            <li>
              <strong>Conflictos familiares:</strong> alimentos, visitas,
              custodia o separación de bienes son casos muy comunes en
              conciliación.
            </li>
          </ul>
        </div>

        {/* ================= CUANDO NO ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Cuándo NO conviene iniciar una conciliación?
          </h2>

          <ul className={styles.list}>
            <li>
              Cuando una de las partes no tiene intención real de negociar.
            </li>

            <li>
              Cuando se requiere una decisión judicial obligatoria conforme a la
              ley colombiana.
            </li>

            <li>
              Cuando existen derechos no conciliables o asuntos prohibidos por
              la ley.
            </li>
          </ul>

          <div className={styles.note}>
            En Bogotá y Colombia, la conciliación funciona mejor cuando ambas
            partes tienen disposición real de llegar a un acuerdo. Sin voluntad
            de negociación, el proceso pierde efectividad.
          </div>
        </div>

        {/* ================= VENTAJAS ================= */}

        <div className={styles.section}>
          <h2 className={styles.subtitle}>
            Ventajas de conciliar en Bogotá y Colombia
          </h2>

          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Mayor rapidez</h3>
              <p>
                Los acuerdos pueden lograrse en mucho menos tiempo que un juicio
                tradicional.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Menor costo</h3>
              <p>
                Reduce gastos jurídicos y evita procesos prolongados ante
                despachos judiciales.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Confidencialidad</h3>
              <p>
                El proceso protege la privacidad y la información de las partes.
              </p>
            </div>

            <div className={styles.benefitCard}>
              <h3>Validez legal</h3>
              <p>
                El acta de conciliación tiene efectos jurídicos y puede ser
                exigible legalmente.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <div className={styles.cta}>
          <strong className={styles.ctaTitle}>Recomendación estratégica</strong>

          <p className={styles.ctaText}>
            Si estás considerando iniciar un proceso de conciliación en Bogotá o
            cualquier ciudad de Colombia, lo más recomendable es contar con
            orientación jurídica para definir objetivos claros, evaluar opciones
            de negociación y construir una propuesta sólida.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría en conciliación
          </a>
        </div>
      </motion.div>
    </section>
  );
}
