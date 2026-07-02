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
      "Abogado conciliador con experiencia en conciliación extrajudicial en asuntos civiles, familiares, comerciales y patrimoniales. Acompaña a personas y empresas en la resolución de conflictos mediante acuerdos legales, seguros y con plena validez jurídica, buscando soluciones ágiles que eviten procesos judiciales innecesarios.",
  },
  {
    name: "Dra. Leidy Tirado",
    role: "CCO & Abogada conciliadora",
    slug: "/about/Doc_Leidy",
    image: "/doc-leidy.jpg",
    description:
      "CCO y abogada conciliadora especializada en mecanismos alternativos de solución de conflictos, conciliación familiar, civil y comercial. Brinda acompañamiento jurídico estratégico durante todas las etapas del procedimiento conciliatorio.",
  },
  {
    name: "Dra. Angie Rivera",
    role: "Abogada conciliadora",
    slug: "/about/Doc_Angie",
    image: "/doc-angie.jpg",
    description:
      "Abogada conciliadora enfocada en la resolución alternativa de conflictos mediante procesos de conciliación extrajudicial. Su experiencia permite orientar a las partes hacia acuerdos claros, equilibrados y jurídicamente sólidos.",
  },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Sol Centro de Conciliación",
    areaServed: "Colombia",
    description:
      "Equipo de abogados conciliadores en Bogotá especializados en conciliación extrajudicial y resolución alternativa de conflictos en Colombia.",
    employee: lawyers.map((lawyer) => ({
      "@type": "Person",
      name: lawyer.name,
      jobTitle: lawyer.role,
      url: `https://solcentrodeconciliacion.com${lawyer.slug}`,
      image: `https://solcentrodeconciliacion.com${lawyer.image}`,
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
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.subtitle}>
            ABOGADOS CONCILIADORES EN BOGOTÁ Y COLOMBIA
          </span>

          <h1 className={styles.title} itemProp="name">
            Conozca a nuestro equipo de abogados conciliadores especializados en
            resolución de conflictos y conciliación extrajudicial
          </h1>

          <p className={styles.intro}>
            En <strong>SOL Centro de Conciliación y Arbitraje</strong> contamos
            con un equipo de abogados conciliadores con experiencia en
            mecanismos alternativos de solución de conflictos. Brindamos
            acompañamiento jurídico a personas, familias, empresas y
            organizaciones que buscan resolver controversias mediante
            conciliación extrajudicial, evitando procesos judiciales largos y
            costosos.
          </p>

          <p className={styles.intro}>
            Nuestro equipo interviene en asuntos civiles, comerciales,
            familiares, laborales, patrimoniales y obligaciones económicas,
            orientando cada procedimiento para lograr acuerdos claros,
            equilibrados y con plena validez jurídica conforme a la legislación
            colombiana.
          </p>
        </motion.div>

        <section className={styles.infoSection}>
          <h2>
            ¿Por qué elegir un abogado conciliador para resolver un conflicto?
          </h2>

          <p>
            Aunque muchas personas asocian los conflictos legales con demandas y
            largos procesos judiciales, en numerosos casos la legislación
            colombiana permite acudir primero a la conciliación extrajudicial
            como un mecanismo rápido, económico y jurídicamente seguro para
            alcanzar acuerdos entre las partes.
          </p>

          <p>
            Contar con un abogado conciliador facilita la preparación de la
            audiencia, la identificación de alternativas de solución y la
            construcción de acuerdos claros que protejan los derechos de todos
            los involucrados.
          </p>

          <p>
            En SOL Centro de Conciliación acompañamos procedimientos
            relacionados con asuntos civiles, familiares, comerciales, laborales
            y patrimoniales, siempre buscando soluciones equilibradas que
            permitan evitar litigios innecesarios.
          </p>
        </section>

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
                  alt={`${lawyer.name} abogado conciliador en Bogotá`}
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
                    Ver perfil profesional
                  </Link>

                  <a
                    href="https://api.whatsapp.com/send/?phone=573232904786"
                    target="_blank"
                    className={styles.primaryButton}
                  >
                    Solicitar orientación
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <section className={styles.infoSection}>
          <h2>
            Nuestro equipo interviene en diferentes áreas de la conciliación
            extrajudicial
          </h2>

          <p>
            Cada abogado conciliador del equipo participa en procesos de
            conciliación relacionados con conflictos familiares, obligaciones
            económicas, contratos, arrendamientos, propiedad horizontal, asuntos
            comerciales, responsabilidad civil, alimentos, custodia, régimen de
            visitas, liquidación de sociedad conyugal y otros conflictos
            conciliables conforme a la legislación colombiana.
          </p>

          <p>
            Nuestro objetivo no consiste únicamente en celebrar audiencias de
            conciliación. También brindamos orientación jurídica para que las
            partes comprendan sus derechos, conozcan las diferentes alternativas
            disponibles y puedan adoptar decisiones informadas durante todo el
            procedimiento.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>
            Experiencia jurídica orientada a soluciones rápidas y acuerdos
            duraderos
          </h2>

          <p>
            La conciliación extrajudicial requiere conocimiento jurídico,
            habilidades de negociación y experiencia en resolución alternativa
            de conflictos. Por ello nuestro equipo trabaja para facilitar
            acuerdos sostenibles que reduzcan tiempos, costos y el desgaste
            emocional que normalmente implica un proceso judicial.
          </p>

          <p>
            Cada caso es estudiado de manera individual con el propósito de
            identificar la mejor estrategia jurídica y promover soluciones que
            beneficien a todas las partes involucradas dentro del marco legal
            colombiano.
          </p>
        </section>
      </section>

      <CTASection />
    </>
  );
}
