"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank",
  );
};

const lawyers = [
  {
    name: "Dr. Harrison Calderon",
    role: "Abogado",
    image: "/doc-harrison.jpg",
    description:
      "Abogado con experiencia en resolución de conflictos y acompañamiento jurídico estratégico, enfocado en brindar soluciones claras y eficientes.",
  },
  {
    name: "Dra. Leidy Tirado",
    role: "CCO & Abogada",
    image: "/doc-leidy.jpg",
    description:
      "Abogada y conciliadora en derecho, especializada en la gestión profesional de conflictos y construcción de acuerdos efectivos.",
  },
  {
    name: "Dra. Angie Rivera",
    role: "CCO & Abogada",
    image: "/doc-angie.jpg",
    description:
      "Abogada con experiencia en conciliación y resolución alternativa de conflictos, con enfoque ético y acompañamiento oportuno.",
  },
];

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuestro Equipo Jurídico</h2>

      <div className={styles.grid}>
        {lawyers.map((lawyer, index) => (
          <motion.article
            key={index}
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

              <button className={styles.button} onClick={handleClick}>
                Programar consulta
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
