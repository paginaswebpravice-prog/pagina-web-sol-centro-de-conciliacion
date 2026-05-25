"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function DocHarriContent() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.badge}
            >
              ABOGADO CONCILIADOR EN COLOMBIA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.name}
            >
              Dr. Harrison Perez
            </motion.h1>

            <h2 className={styles.role}>
              Especialista en conciliación extrajudicial, derecho de familia,
              derecho laboral y resolución estratégica de conflictos en Colombia
            </h2>

            <p className={styles.summary}>
              El Dr. Harrison Perez brinda acompañamiento jurídico en procesos
              de conciliación extrajudicial en Colombia, facilitando acuerdos
              legales en conflictos familiares, laborales, civiles y
              patrimoniales. Su enfoque combina estrategia jurídica, negociación
              estructurada y soluciones eficientes para evitar procesos
              judiciales extensos y proteger los intereses de las partes.
            </p>

            <p className={styles.summarySecondary}>
              Ha participado en procesos relacionados con cuota alimentaria,
              custodia de menores, liquidaciones laborales, conflictos
              contractuales, acuerdos de pago y obligaciones económicas,
              promoviendo acuerdos claros, válidos y jurídicamente exigibles
              conforme a la legislación colombiana.
            </p>

            <div className={styles.buttons}>
              <Link href="/contacto" className={styles.primaryBtn}>
                Agendar Consulta
              </Link>

              <Link
                href="https://api.whatsapp.com/send/?phone=573232904786"
                target="_blank"
                className={styles.secondaryBtn}
              >
                WhatsApp
              </Link>
            </div>

            <div className={styles.metrics}>
              <div>
                <strong>+5</strong>
                <span>Años de experiencia</span>
              </div>

              <div>
                <strong>+100</strong>
                <span>Casos gestionados</span>
              </div>

              <div>
                <strong>Nacional</strong>
                <span>Cobertura en Colombia</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img
              src="/doc-harrison.jpg"
              alt="Dr. Harrison Perez abogado conciliador en Colombia especialista en derecho de familia laboral y tributario"
            />
          </div>
        </div>
      </section>

      {/* ================= PERFIL + AREAS ================= */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.profileBlock}>
            <h3>Perfil Profesional</h3>

            <p>
              El Dr. Harrison Perez es abogado conciliador acreditado en
              Colombia, con experiencia en conciliación extrajudicial en derecho
              y resolución alternativa de conflictos en asuntos de familia,
              laborales y civiles.
            </p>

            <p>
              Su práctica jurídica se enfoca en la búsqueda de soluciones
              efectivas mediante mecanismos alternativos de solución de
              conflictos (MASC), facilitando acuerdos legales con plena validez
              jurídica y evitando procesos judiciales prolongados.
            </p>

            <p>
              Ha intervenido en controversias relacionadas con alimentos,
              custodia, separación de bienes, liquidaciones laborales, despidos,
              acuerdos contractuales y obligaciones económicas, brindando
              acompañamiento jurídico estratégico y orientación clara durante
              cada etapa del proceso conciliatorio.
            </p>

            <p>
              Su metodología combina análisis jurídico técnico, negociación
              estructurada y formalización legal de acuerdos exigibles,
              garantizando seguridad jurídica, transparencia y cumplimiento
              efectivo conforme a la legislación colombiana.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>Servicios de Conciliación y Resolución de Conflictos</h3>

            <ul>
              <li>
                Conciliación en derecho de familia (alimentos, custodia,
                separación de bienes)
              </li>

              <li>
                Conciliación laboral (liquidaciones, despidos y acuerdos
                laborales)
              </li>

              <li>
                Acuerdos de pago y conciliación de obligaciones económicas
              </li>

              <li>Conciliación en conflictos contractuales y civiles</li>

              <li>
                Recuperación de cartera mediante conciliación extrajudicial
              </li>

              <li>
                Prevención estratégica de litigios y formalización de acuerdos
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo en Procesos de Conciliación</h3>

        <p className={styles.methodIntro}>
          Cada proceso conciliatorio requiere estructura jurídica, claridad y
          acompañamiento estratégico. La metodología aplicada permite construir
          acuerdos sólidos, equilibrados y legalmente válidos conforme a la
          legislación colombiana.
        </p>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico integral del caso</p>
          </div>

          <div>
            <span>2</span>
            <p>Diseño de estrategia conciliatoria personalizada</p>
          </div>

          <div>
            <span>3</span>
            <p>Negociación estructurada entre las partes</p>
          </div>

          <div>
            <span>4</span>
            <p>Formalización legal y validación del acuerdo</p>
          </div>
        </div>
      </section>

      {/* ================= SEO OCULTO ================= */}
      <p className={styles.seoText}>
        Abogado conciliador en Colombia especializado en conciliación
        extrajudicial en derecho de familia, derecho laboral y resolución de
        conflictos. Servicios de conciliación en alimentos, custodia,
        liquidaciones laborales, acuerdos de pago, conflictos civiles y
        obligaciones económicas con cobertura nacional y acuerdos legalmente
        válidos conforme a la legislación colombiana.
      </p>
    </main>
  );
}
