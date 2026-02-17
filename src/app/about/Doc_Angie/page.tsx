"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function AngieRivera() {
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
              Dra. Angie Rivera
            </motion.h1>

            <h2 className={styles.role}>
              Abogada Conciliadora en Colombia · Especialista en Gestión de
              Cartera y Derecho Comercial
            </h2>

            <p className={styles.summary}>
              Abogada experta en gestión de cartera, conciliaciones y acuerdos
              de pago. Especialista en derecho comercial y procesos ejecutivos,
              con destacada trayectoria en recuperación de activos y resolución
              de conflictos financieros empresariales mediante conciliación
              extrajudicial en derecho.
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
                <strong>Empresarial</strong>
                <span>Enfoque corporativo</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img
              src="/doc-angie.jpg"
              alt="Dra. Angie Rivera abogada conciliadora especialista en gestión de cartera y derecho comercial en Colombia"
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
              La Dra. Angie Rivera es abogada conciliadora con amplia
              experiencia en gestión estratégica de cartera y recuperación de
              activos para empresas. Su práctica se centra en la conciliación
              extrajudicial en derecho como herramienta efectiva para resolver
              conflictos financieros y comerciales sin necesidad de litigios
              prolongados.
            </p>

            <p>
              Especialista en derecho comercial y procesos ejecutivos, ha
              liderado estrategias jurídicas orientadas a la recuperación de
              liquidez empresarial, estructuración de acuerdos de pago y
              formalización de obligaciones con plena validez legal.
            </p>

            <p>
              Su enfoque práctico y personalizado permite diseñar soluciones
              jurídicas alineadas con los objetivos financieros de cada empresa,
              garantizando eficiencia, seguridad jurídica y resultados medibles.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>Servicios de Conciliación y Recuperación de Cartera</h3>

            <ul>
              <li>Gestión de cartera y recuperación de activos</li>
              <li>Conciliaciones y acuerdos de pago empresariales</li>
              <li>Derecho comercial y procesos ejecutivos</li>
              <li>Resolución de conflictos financieros</li>
              <li>Negociación estratégica de obligaciones</li>
              <li>Prevención de litigios comerciales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo en Conciliación Empresarial</h3>

        <p className={styles.methodIntro}>
          La conciliación extrajudicial en derecho permite a las empresas
          recuperar cartera y resolver conflictos financieros de forma ágil y
          estructurada, con acuerdos que tienen efectos ejecutivos conforme a la
          legislación colombiana.
        </p>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico y financiero del caso</p>
          </div>

          <div>
            <span>2</span>
            <p>Estrategia de recuperación y negociación estructurada</p>
          </div>

          <div>
            <span>3</span>
            <p>Audiencia de conciliación y formalización del acuerdo</p>
          </div>

          <div>
            <span>4</span>
            <p>Seguimiento y garantía de cumplimiento</p>
          </div>
        </div>
      </section>

      {/* ================= SEO OCULTO ================= */}
      <p className={styles.seoText}>
        Abogada conciliadora en Colombia especializada en gestión de cartera,
        recuperación de activos y derecho comercial. Servicios de conciliación
        extrajudicial en derecho para empresas, acuerdos de pago, procesos
        ejecutivos y resolución de conflictos financieros. Centro de
        conciliación empresarial con enfoque en recuperación de liquidez y
        prevención de litigios comerciales.
      </p>
    </main>
  );
}
