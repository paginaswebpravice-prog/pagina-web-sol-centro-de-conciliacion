"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function leidyTirado() {
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
              Dra. Leidy Tirado
            </motion.h1>

            <h2 className={styles.role}>
              Abogado Conciliador · Especialista en Resolución de Conflictos
            </h2>

            <p className={styles.summary}>
              Profesional con amplia experiencia en conciliaciones civiles,
              comerciales y empresariales. Enfoque estratégico orientado a la
              solución eficiente y jurídicamente sólida de controversias.
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

            {/* Datos clave integrados */}
            <div className={styles.metrics}>
              <div>
                <strong>+12</strong>
                <span>Años de experiencia</span>
              </div>
              <div>
                <strong>+800</strong>
                <span>Casos gestionados</span>
              </div>
              <div>
                <strong>Nacional</strong>
                <span>Cobertura</span>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img src="/doc-leidy.jpg" alt="Abogada conciliadora en Colombia" />
          </div>
        </div>
      </section>

      {/* ================= PERFIL + AREAS ================= */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <div className={styles.profileBlock}>
            <h3>Perfil Profesional</h3>
            <p>
              Abogado conciliador acreditado con trayectoria en la gestión
              estratégica de conflictos civiles y comerciales. Ha asesorado a
              empresas y particulares en procesos de conciliación extrajudicial
              y judicial, promoviendo acuerdos eficientes que garantizan
              seguridad jurídica y reducción de riesgos procesales.
            </p>
            <p>
              Su práctica se caracteriza por el análisis técnico riguroso,
              negociación estructurada y acompañamiento integral durante todas
              las etapas del proceso conciliatorio.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>Áreas de Práctica</h3>
            <ul>
              <li>Conciliaciones civiles y comerciales</li>
              <li>Conflictos contractuales</li>
              <li>Recuperación de cartera</li>
              <li>Responsabilidad civil</li>
              <li>Acuerdos empresariales estratégicos</li>
              <li>Prevención de litigios</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo</h3>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico del caso</p>
          </div>

          <div>
            <span>2</span>
            <p>Diseño de estrategia conciliatoria</p>
          </div>

          <div>
            <span>3</span>
            <p>Negociación estructurada</p>
          </div>

          <div>
            <span>4</span>
            <p>Formalización legal del acuerdo</p>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className={styles.cta}>
        <h3>Solicite una evaluación profesional de su caso</h3>
        <Link href="/contacto" className={styles.primaryBtn}>
          Agendar Consulta
        </Link>
      </section>
    </main>
  );
}
