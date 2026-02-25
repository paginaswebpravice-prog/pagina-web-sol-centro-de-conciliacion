"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PasoAPasoDelTramite() {
  return (
    <>
      <section id="paso-a-paso" className={styles.articleWrapper}>
        <motion.div
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            4) Paso a paso del trámite de conciliación
          </motion.h2>

          <ol className={styles.orderedList}>
            {[
              <>
                <strong>Solicitud</strong>: presentas tu caso con una narrativa
                breve y clara (qué pasó, qué pides y por qué).
              </>,
              <>
                <strong>Revisión y admisión</strong>: el centro verifica datos
                básicos, competencia y requisitos mínimos.
              </>,
              <>
                <strong>Citación</strong>: se convoca a la otra parte indicando
                fecha, modalidad (presencial/virtual) y documentos.
              </>,
              <>
                <strong>Audiencia</strong>: se escuchan posiciones, se exploran
                alternativas y se redacta el acuerdo si hay voluntad.
              </>,
              <>
                <strong>Cierre</strong>: se expide <em>acta de conciliación</em>{" "}
                si hay acuerdo, o constancia según corresponda.
              </>,
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                {item}
              </motion.li>
            ))}
          </ol>

          <motion.div
            className={styles.cta}
            role="note"
            aria-label="Llamado a la acción"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.strong
              className={styles.ctaTitle}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Checklist rápido para llegar preparado(a)
            </motion.strong>

            <ul className={styles.ctaList}>
              {[
                "Define tu objetivo: ¿qué necesitas para cerrar el conflicto?",
                "Prepara una propuesta con números y fechas.",
                "Organiza soportes (contrato, chats, facturas, consignaciones, etc.).",
                "Piensa en 2 alternativas por si tu propuesta inicial no prospera.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 6 }}
                >
                  {text}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href="https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0"
              rel="noopener"
              target="_blank"
              className={styles.ctaButton}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Agendar por WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
