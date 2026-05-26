"use client";

import styles from "../styles/CTAconciliacion.module.css";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* DECORACIÓN */}
          <div className={styles.glow}></div>

          <span className={styles.badge}>
            Conciliación extrajudicial en derecho en Colombia
          </span>

          <h2>
            Resuelva conflictos legales sin procesos judiciales largos ni
            desgastantes
          </h2>

          <p>
            En <strong>SOL Centro de Conciliación</strong> le ayudamos a
            encontrar soluciones legales rápidas, seguras y efectivas mediante
            conciliación extrajudicial en derecho. Atendemos conflictos civiles,
            comerciales, familiares, laborales, vecinales y obligaciones
            económicas con acompañamiento profesional y respaldo jurídico.
          </p>

          {/* BENEFICIOS */}
          <div className={styles.features}>
            <div className={styles.feature}>
              <span>✓</span>
              <p>Acuerdos con validez legal</p>
            </div>

            <div className={styles.feature}>
              <span>✓</span>
              <p>Menor costo frente a una demanda</p>
            </div>

            <div className={styles.feature}>
              <span>✓</span>
              <p>Atención rápida y personalizada</p>
            </div>

            <div className={styles.feature}>
              <span>✓</span>
              <p>Evite largos procesos judiciales</p>
            </div>
          </div>

          {/* BOTONES */}
          <div className={styles.buttons}>
            <a href="/contacto" className={styles.primaryBtn}>
              Solicitar conciliación
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786&text=Hola,%20quiero%20información%20sobre%20un%20proceso%20de%20conciliación.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className={styles.bottomText}>
            Atención en Bogotá y diferentes ciudades de Colombia.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
