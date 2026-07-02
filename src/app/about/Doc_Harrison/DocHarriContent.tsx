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
              Especialista en conciliación de familia, laboral y conflictos
              civiles en Colombia
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

      <section className={styles.servicesSection}>
        <h2>Servicios de conciliación que lidera el Dr. Harrison Perez</h2>

        <p>
          Como abogado conciliador en Colombia acompaña procesos de conciliación
          extrajudicial relacionados con conflictos familiares, laborales y
          civiles, ayudando a construir acuerdos con plena validez jurídica y
          evitando procesos judiciales innecesarios.
        </p>

        <div className={styles.servicesGrid}>
          <article>
            <h3>Conciliación en derecho de familia</h3>

            <p>
              Procesos relacionados con alimentos, custodia, regulación de
              visitas, separación de bienes, liquidación de sociedad conyugal y
              acuerdos familiares.
            </p>
          </article>

          <article>
            <h3>Conciliación laboral</h3>

            <p>
              Liquidaciones laborales, terminación de contratos, conciliación
              por despidos, acuerdos entre empleadores y trabajadores y solución
              de conflictos laborales.
            </p>
          </article>

          <article>
            <h3>Conciliación civil</h3>

            <p>
              Acuerdos económicos, incumplimientos contractuales, obligaciones
              civiles, recuperación de cartera y resolución de controversias
              patrimoniales.
            </p>
          </article>
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

      <section className={styles.benefitsSection}>
        <h2>¿Por qué realizar una conciliación con el Dr. Harrison Perez?</h2>

        <p>
          La conciliación permite resolver conflictos mediante acuerdos legales,
          reduciendo tiempos, costos y el desgaste propio de un proceso
          judicial.
        </p>

        <ul>
          <li>Evita procesos judiciales prolongados.</li>
          <li>Protege los intereses de todas las partes.</li>
          <li>Acuerdos con plena validez jurídica.</li>
          <li>Menores costos legales.</li>
          <li>Mayor rapidez para solucionar conflictos.</li>
          <li>Acompañamiento jurídico durante todo el proceso.</li>
          <li>Negociaciones imparciales y estructuradas.</li>
          <li>Cobertura para usuarios de toda Colombia.</li>
        </ul>
      </section>

      <section className={styles.processSection}>
        <h2>¿Cómo es el proceso de conciliación?</h2>

        <div className={styles.processGrid}>
          <div>
            <h3>1. Estudio del caso</h3>

            <p>
              Se analiza la situación jurídica y la viabilidad de la
              conciliación.
            </p>
          </div>

          <div>
            <h3>2. Citación</h3>

            <p>Se programa la audiencia conciliatoria con las partes.</p>
          </div>

          <div>
            <h3>3. Audiencia</h3>

            <p>Se desarrolla la negociación y construcción del acuerdo.</p>
          </div>

          <div>
            <h3>4. Acta</h3>

            <p>Se formaliza el acuerdo con plena validez jurídica.</p>
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
