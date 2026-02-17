"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function LeidyTirado() {
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
              Abogada Conciliadora en Colombia · Especialista en Derecho
              Comercial, Empresarial y Protección al Consumidor
            </h2>

            <p className={styles.summary}>
              Abogada de la Universidad Militar, experta en gestión comercial y
              conciliación extrajudicial en derecho. Especializada en derecho
              comercial, Estatuto del Consumidor (Ley 1480 de 2011) y garantías
              mobiliarias, brinda acompañamiento estratégico a empresarios y
              particulares para resolver conflictos mediante acuerdos jurídicos
              sólidos y ejecutables.
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
                <strong>+8</strong>
                <span>Años de experiencia</span>
              </div>
              <div>
                <strong>+150</strong>
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
              src="/doc-leidy.jpg"
              alt="Dra. Leidy Tirado abogada conciliadora especialista en derecho comercial y protección al consumidor en Colombia"
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
              La Dra. Leidy Tirado es abogada conciliadora con amplia
              trayectoria en derecho comercial y empresarial, especializada en
              la resolución de conflictos mediante mecanismos alternativos de
              solución de controversias (MASC). Cuenta con profundo conocimiento
              del Estatuto del Consumidor (Ley 1480 de 2011) y del régimen de
              garantías mobiliarias.
            </p>

            <p>
              Ha asesorado a empresarios colombianos en cumplimiento normativo,
              recuperación de cartera, revisión contractual y prevención de
              litigios comerciales, facilitando acuerdos de conciliación que
              protegen los intereses económicos de las partes y reducen riesgos
              judiciales.
            </p>

            <p>
              Su enfoque combina visión jurídica con criterio comercial,
              lenguaje claro para gerencias y equipos directivos, y orientación
              a resultados, garantizando acuerdos formalizados con plena validez
              legal en Colombia.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>
              Servicios de Conciliación en Derecho Comercial y Empresarial
            </h3>

            <ul>
              <li>Conciliación en conflictos comerciales y empresariales</li>
              <li>Protección al consumidor conforme a la Ley 1480 de 2011</li>
              <li>Recuperación de cartera y acuerdos de pago</li>
              <li>Diseño y revisión de contratos comerciales</li>
              <li>Garantías mobiliarias y obligaciones mercantiles</li>
              <li>Prevención estratégica de litigios comerciales</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo en Procesos de Conciliación</h3>

        <p className={styles.methodIntro}>
          La conciliación extrajudicial en derecho permite resolver conflictos
          comerciales y empresariales de forma ágil, confidencial y con plena
          validez jurídica. El proceso aplicado garantiza estructura legal,
          claridad en las obligaciones y formalización ejecutable conforme a la
          legislación colombiana.
        </p>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico y comercial del conflicto</p>
          </div>

          <div>
            <span>2</span>
            <p>Diseño de estrategia conciliatoria orientada a resultados</p>
          </div>

          <div>
            <span>3</span>
            <p>Negociación estructurada entre las partes</p>
          </div>

          <div>
            <span>4</span>
            <p>Formalización legal del acuerdo con efectos ejecutivos</p>
          </div>
        </div>
      </section>

      {/* ================= SEO OCULTO ================= */}
      <p className={styles.seoText}>
        Abogada conciliadora en Colombia especializada en derecho comercial,
        empresarial y protección al consumidor. Servicios de conciliación
        extrajudicial en derecho para conflictos comerciales, recuperación de
        cartera, acuerdos de pago, revisión de contratos, garantías mobiliarias
        y cumplimiento del Estatuto del Consumidor Ley 1480 de 2011. Centro de
        conciliación con cobertura nacional y acuerdos con plena validez
        jurídica.
      </p>
    </main>
  );
}
