"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/OurTeamSection.module.css";

const team = [
  { name: "Harrison Calderon", role: "Abogado", image: "/doc-harrison.jpg" },
  { name: "Leidy Tirado", role: "CCO & Abogada", image: "/doc-leidy.jpeg" },
  { name: "Angie Rivera", role: "CCO & Abogada", image: "/doc-angie.jpg" },
];

export default function OurTeamSection() {
  return (
    <section className={styles.section}>
      {/* Títulos con Motion */}
      <motion.span
        className={styles.smallTitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        NUESTROS EXPERTOS
      </motion.span>

      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Conoce nuestro equipo
      </motion.h2>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Comprometidos a ayudar a las personas a recibir servicios especializados
        en resolución alternativa de conflictos con altos estándares de calidad,
        ética y profesionalismo.
      </motion.p>

      {/* GRID */}
      <div className={styles.grid}>
        {team.map((member, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={member.image}
              className={styles.image}
              alt={member.name}
            />

            <div className={styles.cardText}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón con Motion */}
      <Link href="/about">
        <motion.button
          className={styles.button}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          CONOCE AL EQUIPO
        </motion.button>
      </Link>
    </section>
  );
}
