"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/OurTeamSection.module.css";

const team = [
  {
    name: "Harrison Calderón",
    role: "Abogado conciliador",
    image: "/doc-harrison.jpg",
  },
  {
    name: "Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    image: "/doc-leidy.jpeg",
  },
  {
    name: "Angie Rivera",
    role: "Abogada conciliadora",
    image: "/doc-angie.jpg",
  },
];

export default function OurTeamSection() {
  return (
    <section className={styles.section} aria-labelledby="team-title">
      {/* Subtítulo */}
      <motion.span
        className={styles.smallTitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        NUESTRO EQUIPO JURÍDICO
      </motion.span>

      {/* Título SEO */}
      <motion.h2
        id="team-title"
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Equipo jurídico especializado en conciliación y resolución de conflictos
      </motion.h2>

      {/* Descripción optimizada */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestro equipo está conformado por abogados y profesionales del derecho
        con experiencia en conciliación extrajudicial y mecanismos alternativos
        de resolución de conflictos. Trabajamos con altos estándares de calidad,
        ética y profesionalismo para ofrecer soluciones jurídicas claras,
        eficientes y confiables.
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
              alt={`Abogado ${member.name} - Equipo jurídico de SOL Centro de Conciliación`}
              loading="lazy"
            />

            <div className={styles.cardText}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <Link href="/about">
        <motion.button
          className={styles.button}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          aria-label="Conocer más sobre el equipo jurídico de SOL"
        >
          CONOCE AL EQUIPO
        </motion.button>
      </Link>
    </section>
  );
}
