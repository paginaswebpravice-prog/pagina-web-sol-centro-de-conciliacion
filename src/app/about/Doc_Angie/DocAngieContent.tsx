"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function DocAngieContent() {
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
              Cartera, Recuperación de Activos y Derecho Comercial
            </h2>

            <p className={styles.summary}>
              Abogada conciliadora con experiencia en gestión estratégica de
              cartera, recuperación de activos y resolución de conflictos
              financieros y comerciales mediante conciliación extrajudicial en
              derecho en Colombia. Especialista en derecho comercial y procesos
              ejecutivos, acompaña a empresas y particulares en la negociación
              de obligaciones, estructuración de acuerdos de pago y
              formalización de soluciones jurídicas con plena validez legal.
              <br />
              <br />
              Su enfoque profesional está orientado a proteger la estabilidad
              financiera de cada cliente mediante estrategias de conciliación
              ágiles y enfocadas en resultados, evitando procesos judiciales
              extensos y reduciendo riesgos legales y económicos. Combina
              análisis jurídico, visión financiera y capacidad de negociación
              para construir acuerdos claros, ejecutables y alineados con los
              objetivos de cada empresa o particular.
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
              La Dra. Angie Rivera es abogada conciliadora en Colombia con
              experiencia en gestión de cartera, recuperación de activos y
              resolución de conflictos financieros y comerciales mediante
              mecanismos alternativos de solución de conflictos (MASC). Su
              práctica profesional se enfoca en diseñar estrategias jurídicas
              orientadas a proteger la estabilidad financiera de empresas y
              particulares a través de acuerdos eficientes y legalmente sólidos.
            </p>

            <p>
              Especialista en derecho comercial y procesos ejecutivos, ha
              participado en conciliaciones relacionadas con incumplimientos de
              pago, obligaciones mercantiles, recuperación de cartera vencida,
              acuerdos de financiación y negociación de obligaciones
              empresariales. Su experiencia le permite estructurar soluciones
              jurídicas ágiles que favorecen la recuperación de liquidez y la
              continuidad operativa de las organizaciones.
            </p>

            <p>
              A lo largo de su trayectoria ha acompañado empresas en procesos de
              negociación estratégica con deudores, formalización de acuerdos de
              pago y prevención de litigios comerciales, facilitando escenarios
              de conciliación que reducen costos judiciales y fortalecen la
              seguridad jurídica de las partes involucradas.
            </p>

            <p>
              Su enfoque combina análisis jurídico, visión financiera y
              capacidad de negociación, permitiendo construir soluciones
              prácticas, sostenibles y alineadas con los objetivos económicos de
              cada cliente. Cada proceso es desarrollado con acompañamiento
              cercano, claridad en las obligaciones y formalización válida
              conforme a la legislación colombiana.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>Servicios de Conciliación y Recuperación de Cartera</h3>

            <ul>
              <li>Gestión estratégica de cartera y recuperación de activos</li>

              <li>
                Conciliación extrajudicial en conflictos financieros y
                comerciales
              </li>

              <li>
                Negociación y formalización de acuerdos de pago empresariales
              </li>

              <li>Derecho comercial y acompañamiento en procesos ejecutivos</li>

              <li>Reestructuración de obligaciones y acuerdos mercantiles</li>

              <li>
                Prevención de litigios comerciales y recuperación de liquidez
              </li>

              <li>
                Asesoría jurídica en obligaciones contractuales y cobro
                estratégico
              </li>

              <li>
                Soluciones conciliatorias para empresas y particulares en
                Colombia
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= METODOLOGÍA ================= */}
      <section className={styles.methodSection}>
        <h3>Metodología de Trabajo en Conciliación Empresarial</h3>

        <p className={styles.methodIntro}>
          La conciliación extrajudicial en derecho permite resolver conflictos
          financieros y comerciales de forma más rápida, estratégica y segura,
          evitando procesos judiciales extensos. La metodología aplicada está
          orientada a recuperar cartera, proteger intereses económicos y lograr
          acuerdos ejecutables conforme a la legislación colombiana.
        </p>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico y financiero integral del caso</p>
          </div>

          <div>
            <span>2</span>
            <p>
              Diseño de estrategia de negociación y recuperación de obligaciones
            </p>
          </div>

          <div>
            <span>3</span>
            <p>Audiencia de conciliación y construcción del acuerdo</p>
          </div>

          <div>
            <span>4</span>
            <p>Formalización legal, seguimiento y garantía de cumplimiento</p>
          </div>
        </div>
      </section>

      {/* ================= SEO OCULTO ================= */}
      <p className={styles.seoText}>
        Abogada conciliadora en Colombia especializada en gestión de cartera,
        recuperación de activos, acuerdos de pago y derecho comercial. Servicios
        de conciliación extrajudicial en derecho para empresas y particulares,
        resolución de conflictos financieros, negociación de obligaciones
        mercantiles, recuperación de liquidez empresarial, conciliación
        comercial y prevención de litigios. Centro de conciliación empresarial
        con cobertura nacional y acuerdos con plena validez jurídica conforme a
        la legislación colombiana.
      </p>
    </main>
  );
}
