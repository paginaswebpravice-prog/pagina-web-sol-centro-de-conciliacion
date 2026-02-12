"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import Link from "next/link";

const lawyers = [
  {
    name: "Dr. Harrison Perez",
    role: "Abogado conciliador",
    slug: "/about/Doc_Harrison",
    image: "/doc-harrison.jpg",
    description:
      "Abogado conciliador con amplia experiencia en resolución alternativa de conflictos y conciliación extrajudicial en Colombia...",
  },
  {
    name: "Dra. Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    slug: "/about/Doc_Leidy",
    image: "/doc-leidy.jpg",
    description:
      "Abogada y conciliadora en derecho, especializada en la gestión profesional de conflictos...",
  },
  {
    name: "Dra. Angie Rivera",
    role: "Abogada conciliadora",
    slug: "/about/Doc_Angie",
    image: "/doc-angie.jpg",
    description:
      "Abogada con experiencia en conciliación extrajudicial y mecanismos alternativos...",
  },
];

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestro Equipo Jurídico</h2>

      <div className={styles.grid}>
        {lawyers.map((lawyer, index) => (
          <motion.article
            key={lawyer.slug}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageBox}>
              <img src={lawyer.image} alt={lawyer.name} />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.name}>{lawyer.name}</h3>
              <span className={styles.role}>{lawyer.role}</span>

              <p className={styles.description}>{lawyer.description}</p>

              <div className={styles.buttonGroup}>
                <Link href={`${lawyer.slug}`} className={styles.primaryButton}>
                  Ver perfil
                </Link>

                <a
                  href="https://api.whatsapp.com/send/?phone=573232904786"
                  target="_blank"
                  className={styles.secondaryButton}
                >
                  Consulta
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
