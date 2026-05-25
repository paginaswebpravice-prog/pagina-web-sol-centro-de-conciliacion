"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentosYEvidenciaUtilContent() {
  return (
    <section id="documentos" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={styles.category}>Guía práctica de conciliación</span>

        <h1 className={styles.title}>
          Documentos y evidencia útil para una conciliación en Colombia
        </h1>

        <p className={styles.intro}>
          La preparación documental es uno de los factores que más influye en el
          éxito de una audiencia de conciliación. Aunque la conciliación en
          Colombia no funciona exactamente igual que un juicio, sí requiere
          soportes claros que permitan demostrar los hechos, las obligaciones y
          los posibles incumplimientos.
        </p>

        <div className={styles.highlightBox}>
          <strong>
            Una conciliación bien preparada suele resolverse más rápido.
          </strong>

          <p>
            Cuando las partes presentan documentos organizados y evidencia
            verificable, el conciliador puede entender el caso con mayor
            facilidad y orientar una negociación más efectiva.
          </p>
        </div>

        <p className={styles.paragraph}>
          En Bogotá y en diferentes ciudades de Colombia, muchos conflictos
          relacionados con deudas, contratos, arrendamientos, alimentos,
          incumplimientos comerciales o acuerdos de pago logran solucionarse en
          una sola audiencia gracias a que las partes llegan con información
          clara y bien estructurada.
        </p>

        <h2 className={styles.subtitle}>
          ¿Qué documentos sirven en una conciliación?
        </h2>

        <p className={styles.paragraph}>
          Los documentos más útiles dependerán del tipo de conflicto, pero en
          términos generales existen ciertos soportes que suelen ser relevantes
          en la mayoría de conciliaciones civiles, comerciales, laborales o de
          familia.
        </p>

        <div className={styles.cardGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Contratos y acuerdos</h3>

            <p>
              Contratos firmados, promesas, órdenes de servicio, cotizaciones o
              cualquier documento que evidencie obligaciones entre las partes.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Facturas y cuentas de cobro</h3>

            <p>
              Especialmente importantes en conflictos comerciales, prestación de
              servicios, pagos pendientes y recuperación de cartera.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Comprobantes de pago</h3>

            <p>
              Transferencias, consignaciones, extractos bancarios, recibos o
              soportes que permitan demostrar pagos realizados.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Chats y correos</h3>

            <p>
              Conversaciones de WhatsApp, emails o mensajes donde se evidencien
              acuerdos, compromisos, incumplimientos o negociaciones previas.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Pruebas del incumplimiento</h3>

            <p>
              Requerimientos enviados, fechas de vencimiento, actas,
              comunicaciones o cualquier soporte que demuestre el conflicto.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Soportes complementarios</h3>

            <p>
              Fotografías, reportes, entregas, archivos digitales o evidencia
              adicional que ayude a respaldar tu posición.
            </p>
          </motion.div>
        </div>

        <h2 className={styles.subtitle}>
          Cómo organizar la evidencia correctamente
        </h2>

        <p className={styles.paragraph}>
          No se trata de presentar cientos de archivos sin orden. En muchos
          casos, una carpeta organizada con documentos claros puede ser más útil
          que grandes cantidades de información desordenada.
        </p>

        <ul className={styles.list}>
          <li>Ordena los documentos cronológicamente.</li>
          <li>Identifica claramente las fechas importantes.</li>
          <li>Resalta valores, obligaciones o incumplimientos.</li>
          <li>Separa los documentos principales de los complementarios.</li>
          <li>Lleva copia digital y respaldo en PDF si es posible.</li>
        </ul>

        <div className={styles.note}>
          <strong>Consejo importante:</strong> la conciliación busca facilitar
          acuerdos, por lo que la claridad de la información ayuda a reducir
          discusiones innecesarias y acelera el proceso de negociación.
        </div>

        <div className={styles.cta}>
          <div>
            <strong className={styles.ctaTitle}>
              ¿Necesitas ayuda preparando tu audiencia?
            </strong>

            <p className={styles.ctaText}>
              Recibe orientación sobre qué documentos llevar, cómo organizar la
              evidencia y cómo presentar una propuesta sólida en tu conciliación
              en Bogotá o Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.div>
    </section>
  );
}
