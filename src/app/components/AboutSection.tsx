"use client";

import styles from "../styles/AboutSection.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =======================
            COLUMNA DE TEXTO
        ======================== */}
        <motion.div
          className={styles.textColumn}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Comprometidos con soluciones efectivas y profesionales
          </motion.h2>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            En Sol Centro de Conciliación brindamos mecanismos alternativos de
            resolución de conflictos con enfoque en la eficiencia, la
            transparencia y el acompañamiento personalizado. Nuestro compromiso
            es ofrecer procesos claros, ágiles y fundamentados en la normativa
            vigente.
          </motion.p>

          {/* LISTA CON STAGGER */}
          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              "Tiempos de resolución significativamente menores que los procesos judiciales.",
              "Estrategias jurídicas definidas desde la primera sesión.",
              "Comunicación directa, clara y profesional.",
              "Acompañamiento integral en cada etapa del proceso.",
              "Resultados verificables en acuerdos y recuperaciones efectivas.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span>{String(i + 1).padStart(2, "0")}.</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* =======================
            COLUMNA DE IMAGEN
        ======================== */}
        <motion.div
          className={styles.imageColumn}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Image
            src="/Equipo_Sol_4_3.webp"
            alt="Equipo SOL"
            width={500}
            height={650}
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
