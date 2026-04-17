"use client";

import styles from "./practice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBriefcase,
  faBuilding,
  faUsers,
  faChild,
  faClipboardList,
  faHouse,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import { motion, Variants } from "framer-motion";
import CTASection from "../components/CTAsection";

const areas = [
  {
    title: "Asuntos Comerciales",
    desc: "Conciliación en conflictos empresariales relacionados con contratos mercantiles, incumplimientos, sociedades y relaciones comerciales. Facilitamos acuerdos que permiten proteger los intereses económicos y mantener relaciones comerciales estables.",
    icon: faMoneyBillWave,
  },
  {
    title: "Asuntos Civiles",
    desc: "Resolución extrajudicial de conflictos civiles vinculados a contratos, obligaciones, daños y perjuicios, y derechos patrimoniales, mediante acuerdos claros, equilibrados y jurídicamente válidos.",
    icon: faScaleBalanced,
  },
  {
    title: "Asuntos de Copropiedad",
    desc: "Mediación y conciliación en conflictos de propiedad horizontal, cuotas de administración, uso de zonas comunes y convivencia entre copropietarios, promoviendo soluciones prácticas y duraderas.",
    icon: faBuilding,
  },
  {
    title: "Asuntos Laborales",
    desc: "Conciliación laboral entre empleadores y trabajadores en temas como despidos, liquidaciones, contratos y reclamaciones laborales, priorizando acuerdos justos y el cumplimiento normativo.",
    icon: faBriefcase,
  },
  {
    title: "Alimentos para Menores",
    desc: "Acompañamiento jurídico en la fijación, modificación y cumplimiento de cuotas alimentarias, garantizando la protección de los derechos de niños, niñas y adolescentes.",
    icon: faChild,
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Orientación legal para definir acuerdos de custodia, cuidado personal y régimen de visitas, siempre priorizando el interés superior del menor y el bienestar familiar",
    icon: faClipboardList,
  },
  {
    title: "Asuntos Vecinales",
    desc: "Mediación en conflictos de convivencia relacionados con ruidos, uso de espacios comunes, límites de propiedad y normas comunitarias, fomentando el diálogo y la armonía vecinal.",
    icon: faUsers,
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Conciliación para la distribución justa y ordenada de los bienes adquiridos durante el matrimonio o la unión marital, evitando procesos judiciales prolongados.",
    icon: faHouse,
  },
  {
    title: "Conflictos Familiares",
    desc: "Conciliación en conflictos familiares relacionados con separación, acuerdos parentales y responsabilidades familiares, buscando soluciones respetuosas y sostenibles.",
    icon: faUsers,
  },
  {
    title: "Obligaciones Económicas",
    desc: "Gestión conciliada de obligaciones económicas, deudas y acuerdos de pago entre particulares o empresas, con enfoque en soluciones viables y seguras.",
    icon: faMoneyBillWave,
  },
  {
    title: "Incumplimiento de Contratos",
    desc: "Conciliación frente a incumplimientos contractuales, permitiendo renegociar condiciones, evitar litigios y lograr acuerdos efectivos entre las partes.",
    icon: faScaleBalanced,
  },
  {
    title: "Conflictos de Arrendamiento",
    desc: "Mediación y conciliación en conflictos entre arrendadores y arrendatarios relacionados con cánones, restitución de inmuebles y obligaciones contractuales.",
    icon: faBuilding,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Practice() {
  return (
    <>
      <section className={styles.section}>
        {/* SCHEMA SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Sol Centro de Conciliación",
              areaServed: "Colombia",
              serviceType: "Conciliación extrajudicial en derecho",
              description:
                "Centro de conciliación en Bogotá especializado en resolución de conflictos civiles, comerciales, laborales y familiares.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Áreas de conciliación",
                itemListElement: areas.map((a) => ({
                  "@type": "Service",
                  name: a.title,
                  description: a.desc,
                })),
              },
            }),
          }}
        />

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.subtitle}>
            CONCILIACIÓN EN BOGOTÁ Y COLOMBIA
          </span>

          <h1 className={styles.title}>
            Conciliación Extrajudicial en Derecho en Colombia
          </h1>

          <p className={styles.description}>
            Resuelve conflictos de forma rápida, económica y legal mediante
            conciliación extrajudicial en Colombia. Evita procesos judiciales
            largos y protege tus intereses con soluciones efectivas en Bogotá y
            a nivel nacional.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={area.icon} />
              </div>

              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDesc}>{area.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <CTASection />
    </>
  );
}
