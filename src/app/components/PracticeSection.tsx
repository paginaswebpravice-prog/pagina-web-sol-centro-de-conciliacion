"use client";

import styles from "../styles/PracticeSection.module.css";
import Link from "next/link";
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
import { motion } from "framer-motion";

const areas = [
  {
    title: "Conciliación en Asuntos Comerciales",
    desc: "Resuelva conflictos entre empresas, socios, contratos mercantiles, obligaciones económicas y controversias comerciales mediante conciliación extrajudicial.",
    icon: faMoneyBillWave,
    slug: "/practice/asuntos-comerciales",
  },
  {
    title: "Conciliación en Asuntos Civiles",
    desc: "Solucione conflictos relacionados con contratos, incumplimientos, daños, indemnizaciones, obligaciones civiles y otros asuntos patrimoniales.",
    icon: faScaleBalanced,
    slug: "/practice/asuntos-civiles",
  },
  {
    title: "Conciliación en Propiedad Horizontal",
    desc: "Resuelva conflictos entre copropietarios, administraciones, consejos de administración y uso de bienes comunes.",
    icon: faBuilding,
    slug: "/practice/asuntos-de-copropiedad",
  },
  {
    title: "Conciliación Laboral",
    desc: "Acuerdos entre empleadores y trabajadores sobre liquidaciones, salarios, prestaciones sociales, despidos y obligaciones laborales.",
    icon: faBriefcase,
    slug: "/practice/asuntos-laborales",
  },
  {
    title: "Conciliación de Cuota Alimentaria",
    desc: "Acuerdos sobre fijación, aumento, disminución o cumplimiento de la cuota alimentaria para niños, adolescentes y otros beneficiarios.",
    icon: faChild,
    slug: "/practice/alimentos-para-menores",
  },
  {
    title: "Custodia y Régimen de Visitas",
    desc: "Defina mediante conciliación la custodia, cuidado personal, visitas y demás acuerdos relacionados con los hijos menores.",
    icon: faClipboardList,
    slug: "/practice/custodia-y-regimen-de-visitas",
  },
  {
    title: "Conciliación en Conflictos de Convivencia",
    desc: "Soluciones para conflictos vecinales, uso de zonas comunes, ruidos, servidumbres y problemas de convivencia.",
    icon: faUsers,
    slug: "/practice/asuntos-vecinales",
  },
  {
    title: "Liquidación de Sociedad Conyugal",
    desc: "Distribuya bienes, activos y deudas mediante conciliación después de un divorcio o la terminación de una unión marital.",
    icon: faHouse,
    slug: "/practice/liquidacion-de-sociedad-conyugal",
  },
];

export default function PracticeSection() {
  return (
    <section className={styles.section} aria-labelledby="practice-title">
      {/* ================= HEADER ================= */}

      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className={styles.subtitle}>
          SERVICIOS DE CONCILIACIÓN EN COLOMBIA
        </span>

        <h2 id="practice-title" className={styles.title}>
          Conozca nuestras áreas de conciliación extrajudicial y resuelva su
          conflicto sin acudir a un proceso judicial
        </h2>

        <p className={styles.description}>
          En <strong>SOL Centro de Conciliación y Arbitraje</strong> prestamos
          servicios de conciliación en asuntos civiles, comerciales, familiares,
          laborales y de propiedad horizontal. Nuestro objetivo es ayudar a
          personas y empresas a alcanzar acuerdos rápidos, seguros y con plena
          validez jurídica, reduciendo tiempos, costos y el desgaste que implica
          un proceso ante los jueces.
        </p>
      </motion.div>

      {/* ================= GRID ================= */}

      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {areas.map((area, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href={area.slug}
              className={styles.card}
              aria-label={area.title}
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={area.icon} />
              </div>

              <h3 className={styles.cardTitle}>{area.title}</h3>

              <p className={styles.cardDesc}>{area.desc}</p>

              <span className={styles.readMore}>Más información →</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= TEXTO SEO ================= */}

      <motion.div
        className={styles.bottomContent}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.bottomTitle}>
          Un centro de conciliación para personas, empresas y entidades en toda
          Colombia
        </h2>

        <p>
          Cada conflicto requiere un tratamiento diferente. Por ello contamos
          con conciliadores especializados que acompañan procedimientos en
          derecho civil, comercial, laboral y familiar, así como asuntos
          relacionados con obligaciones económicas, propiedad horizontal,
          contratos, alimentos, custodia de menores y liquidación de sociedad
          conyugal.
        </p>

        <p>
          Nuestros servicios pueden desarrollarse de forma presencial en Bogotá
          o mediante audiencias virtuales para usuarios ubicados en cualquier
          ciudad de Colombia, ofreciendo la misma seguridad jurídica y la
          validez legal que exige la legislación colombiana.
        </p>
      </motion.div>
    </section>
  );
}
