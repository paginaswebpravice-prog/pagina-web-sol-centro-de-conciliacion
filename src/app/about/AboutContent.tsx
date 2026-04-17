"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";
import Link from "next/link";
import CTASection from "../components/CTAsection";

const lawyers = [
  {
    name: "Dr. Harrison Perez",
    role: "Abogado conciliador",
    slug: "/about/Doc_Harrison",
    image: "/doc-harrison.jpg",
    description:
      "Abogado conciliador con amplia experiencia en resolución alternativa de conflictos y conciliación extrajudicial en Colombia.",
  },
  {
    name: "Dra. Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    slug: "/about/Doc_Leidy",
    image: "/doc-leidy.jpg",
    description:
      "Abogada y conciliadora en derecho, especializada en la gestión profesional de conflictos en Colombia.",
  },
  {
    name: "Dra. Angie Rivera",
    role: "Abogada conciliadora",
    slug: "/about/Doc_Angie",
    image: "/doc-angie.jpg",
    description:
      "Abogada con experiencia en conciliación extrajudicial y mecanismos alternativos de solución de conflictos.",
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Sol Centro de Conciliación",
    areaServed: "Colombia",
    description:
      "Equipo de abogados en Bogotá especializados en conciliación extrajudicial y resolución de conflictos en Colombia.",
    employee: lawyers.map((lawyer) => ({
      "@type": "Person",
      name: lawyer.name,
      jobTitle: lawyer.role,
      url: `https://solcentrodeconciliacion.com${lawyer.slug}`,
      image: `https://      solcentrodeconciliacion.com${lawyer.image}`,
    })),
  };

  return (
    <>
      <section
        className={styles.section}
        itemScope
        itemType="https://schema.org/LegalService"
      >
        {/* ================= SCHEMA ================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* ================= TITULO ================= */}
        <h1 className={styles.title} itemProp="name">
          Nuestro equipo de abogados en Bogotá
        </h1>

        {/* ================= GRID ================= */}
        <div className={styles.grid}>
          {lawyers.map((lawyer, index) => (
            <motion.article
              key={lawyer.slug}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/Person"
            >
              {/* IMAGEN */}
              <div className={styles.imageBox}>
                <img
                  src={lawyer.image}
                  alt={`${lawyer.name} abogado en Bogotá`}
                  itemProp="image"
                />
              </div>

              {/* CONTENIDO */}
              <div className={styles.cardContent}>
                <h2 className={styles.name} itemProp="name">
                  {lawyer.name}
                </h2>

                <span className={styles.role} itemProp="jobTitle">
                  {lawyer.role}
                </span>

                <p className={styles.description} itemProp="description">
                  {lawyer.description}
                </p>

                {/* BOTONES */}
                <div className={styles.buttonGroup}>
                  <Link href={lawyer.slug} className={styles.secondaryButton}>
                    Ver perfil
                  </Link>

                  <a
                    href="https://api.whatsapp.com/send/?phone=573232904786"
                    target="_blank"
                    className={styles.primaryButton}
                  >
                    Consulta
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
