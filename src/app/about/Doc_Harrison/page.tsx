"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function HarrisonPerez() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLeft}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.name}
            >
              Dr. Harrison Perez
            </motion.h1>

            <h2 className={styles.role}>
              Abogado Conciliador en Colombia · Especialista en Derecho de
              Familia, Derecho Laboral y Derecho Tributario
            </h2>

            <p className={styles.summary}>
              Abogado conciliador con experiencia en conciliación extrajudicial
              en derecho en Colombia, especializado en resolución de conflictos
              en derecho de familia, derecho laboral y derecho tributario.
              Brinda acompañamiento jurídico estratégico para alcanzar acuerdos
              con plena validez legal, evitando procesos judiciales prolongados
              y reduciendo costos para las partes.
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

            {/* Datos clave */}
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
              Colombia, con formación y experiencia en derecho de familia,
              derecho laboral y derecho tributario. Se desempeña en procesos de
              conciliación extrajudicial en derecho, facilitando acuerdos
              legales en conflictos familiares, laborales y obligaciones
              fiscales.
            </p>

            <p>
              Ha intervenido en controversias relacionadas con alimentos,
              custodia, separación de bienes, liquidaciones laborales, despidos,
              acuerdos de pago, conflictos contractuales y obligaciones
              tributarias, promoviendo soluciones jurídicas eficientes bajo los
              mecanismos alternativos de solución de conflictos (MASC).
            </p>

            <p>
              Su enfoque combina análisis jurídico técnico, negociación
              estructurada y formalización legal de acuerdos con efectos
              jurídicos exigibles, garantizando seguridad jurídica y
              cumplimiento efectivo conforme a la legislación colombiana.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>
              Servicios de Conciliación en Derecho de Familia, Laboral y
              Tributario
            </h3>

            <ul>
              <li>
                Conciliación en derecho de familia (alimentos, custodia,
                separación de bienes)
              </li>
              <li>
                Conciliación laboral (liquidaciones, despidos, acuerdos
                laborales)
              </li>
              <li>
                Conciliación en conflictos tributarios y acuerdos de pago
                fiscales
              </li>
              <li>Conflictos contractuales y acuerdos civiles</li>
              <li>Recuperación de cartera mediante conciliación</li>
              <li>Prevención estratégica de litigios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo en Procesos de Conciliación</h3>

        <p className={styles.methodIntro}>
          La conciliación extrajudicial en derecho es un mecanismo alternativo
          de solución de conflictos que permite resolver controversias de manera
          ágil y eficiente sin acudir a un proceso judicial. La metodología
          aplicada garantiza estructura jurídica, claridad en las obligaciones y
          formalización válida conforme a la legislación colombiana.
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
        extrajudicial en derecho de familia, derecho laboral y derecho
        tributario. Servicios de conciliación en procesos de alimentos,
        custodia, liquidaciones laborales, despidos, acuerdos laborales,
        conflictos fiscales y acuerdos de pago tributarios. Centro de
        conciliación con cobertura nacional, audiencias válidas jurídicamente y
        formalización de acuerdos con efectos ejecutivos conforme a la
        legislación colombiana.
      </p>
    </main>
  );
}
