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
              Dra. Angie Rivera Abogada conciliadora en Colombia
            </motion.h1>

            <h2 className={styles.role}>
              Abogada conciliadora en Colombia con experiencia en conciliación
              comercial, recuperación de cartera, negociación de acuerdos de
              pago, derecho comercial, procesos ejecutivos y resolución
              extrajudicial de conflictos empresariales.
            </h2>

            <p className={styles.summary}>
              La <strong>Dra. Angie Rivera</strong> es abogada conciliadora en
              Colombia con experiencia en conciliación extrajudicial en derecho,
              recuperación de cartera, derecho comercial y negociación
              estratégica de conflictos empresariales. Acompaña a empresas,
              organizaciones y particulares en la construcción de acuerdos
              jurídicos que permiten solucionar controversias de forma más
              rápida, eficiente y segura, evitando procesos judiciales largos y
              costosos.
              <br />
              <br />
              Su práctica profesional se enfoca en la recuperación de activos,
              estructuración de acuerdos de pago, conciliaciones comerciales,
              incumplimientos contractuales y resolución de conflictos
              financieros, brindando asesoría integral durante todas las etapas
              del proceso conciliatorio.
              <br />
              <br />
              Gracias a su combinación de conocimientos en derecho comercial,
              negociación y mecanismos alternativos de solución de conflictos,
              desarrolla estrategias jurídicas orientadas a proteger la
              estabilidad económica de sus clientes, fortalecer las relaciones
              comerciales y lograr acuerdos con plena validez jurídica conforme
              a la legislación colombiana.
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

      <section className={styles.servicesSection}>
        <h2>¿En qué casos puede ayudarte la Dra. Angie Rivera?</h2>

        <p>
          La conciliación extrajudicial permite resolver una gran variedad de
          conflictos comerciales y financieros sin acudir inmediatamente a un
          proceso judicial. La Dra. Angie Rivera brinda acompañamiento jurídico
          durante todas las etapas de la negociación para alcanzar acuerdos
          seguros y ejecutables.
        </p>

        <div className={styles.servicesGrid}>
          <article>
            <h3>Conciliación comercial entre empresas</h3>

            <p>
              Solución de conflictos derivados de contratos comerciales,
              incumplimientos, obligaciones económicas, proveedores, clientes y
              relaciones entre sociedades.
            </p>
          </article>

          <article>
            <h3>Recuperación de cartera</h3>

            <p>
              Diseño de estrategias jurídicas para recuperar obligaciones
              vencidas mediante negociación y conciliación, reduciendo tiempos y
              costos judiciales.
            </p>
          </article>

          <article>
            <h3>Acuerdos de pago</h3>

            <p>
              Elaboración y formalización de acuerdos de pago que brindan
              seguridad jurídica tanto al acreedor como al deudor.
            </p>
          </article>

          <article>
            <h3>Derecho comercial</h3>

            <p>
              Asesoría en controversias empresariales relacionadas con
              contratos, obligaciones mercantiles y relaciones comerciales.
            </p>
          </article>

          <article>
            <h3>Prevención de litigios</h3>

            <p>
              Implementación de soluciones conciliatorias que disminuyen el
              riesgo de procesos judiciales y favorecen la continuidad de las
              relaciones comerciales.
            </p>
          </article>

          <article>
            <h3>Negociación estratégica</h3>

            <p>
              Representación y acompañamiento durante procesos de negociación
              para alcanzar acuerdos equilibrados, sostenibles y legalmente
              válidos.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <h2>
          Beneficios de resolver conflictos mediante conciliación comercial
        </h2>

        <p>
          La conciliación comercial constituye uno de los mecanismos más
          eficientes para resolver controversias entre empresas y particulares.
          Permite alcanzar acuerdos sin recurrir a procesos judiciales
          prolongados, preservando las relaciones comerciales y reduciendo
          significativamente los costos legales.
        </p>

        <ul>
          <li>Reducción de tiempos frente a un proceso judicial.</li>

          <li>Menores costos legales.</li>

          <li>Acuerdos con plena validez jurídica.</li>

          <li>Protección de las relaciones comerciales.</li>

          <li>Mayor flexibilidad durante la negociación.</li>

          <li>Confidencialidad durante todo el procedimiento.</li>

          <li>Disminución del riesgo económico.</li>

          <li>Mayor probabilidad de cumplimiento voluntario.</li>
        </ul>
      </section>

      <section className={styles.processSection}>
        <h2>¿Cómo es un proceso de conciliación comercial?</h2>

        <div className={styles.processGrid}>
          <div>
            <h3>1. Estudio del caso</h3>

            <p>
              Se analizan los documentos, contratos y obligaciones para
              determinar la mejor estrategia jurídica.
            </p>
          </div>

          <div>
            <h3>2. Preparación de la conciliación</h3>

            <p>
              Se estructura la propuesta jurídica que será presentada durante la
              audiencia.
            </p>
          </div>

          <div>
            <h3>3. Audiencia de conciliación</h3>

            <p>
              Las partes negocian con acompañamiento profesional buscando un
              acuerdo justo.
            </p>
          </div>

          <div>
            <h3>4. Formalización del acuerdo</h3>

            <p>
              El acuerdo conciliatorio queda consignado en un acta con plena
              validez legal.
            </p>
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
