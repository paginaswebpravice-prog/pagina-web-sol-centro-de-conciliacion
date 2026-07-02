"use client";

import { motion } from "framer-motion";
import styles from "../PerfilConciliador.module.css";
import Link from "next/link";

export default function LeidyTiradoContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dra. Leidy Tirado",
    jobTitle: "Abogada Conciliadora en Derecho Comercial y Empresarial",
    description:
      "Abogada conciliadora en Colombia especializada en derecho comercial, empresarial y protección al consumidor. Experta en conciliación extrajudicial, recuperación de cartera y cumplimiento del Estatuto del Consumidor Ley 1480 de 2011.",
    url: "https://solcentrodeconciliacion.com/about/Doc_Leidy",
    image: "https://solcentrodeconciliacion.com/doc-leidy.jpg",
    worksFor: {
      "@type": "LegalService",
      name: "Sol Centro de Conciliación",
      url: "https://solcentrodeconciliacion.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    knowsAbout: [
      "Conciliación extrajudicial en derecho",
      "Derecho comercial colombiano",
      "Protección al consumidor Ley 1480 de 2011",
      "Recuperación de cartera empresarial",
      "Garantías mobiliarias",
      "Prevención de litigios comerciales",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Militar Nueva Granada",
    },
  };

  return (
    <main className={styles.wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

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
              ABOGADA CONCILIADORA EN COLOMBIA
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.name}
            >
              Dra. Leidy Tirado
            </motion.h1>

            <h2 className={styles.role}>
              Especialista en conciliación comercial, empresarial y protección
              al consumidor en Colombia
            </h2>

            <p className={styles.summary}>
              La Dra. Leidy Tirado acompaña empresas, comerciantes y
              particulares en procesos de conciliación extrajudicial orientados
              a resolver conflictos comerciales, empresariales y contractuales
              sin necesidad de acudir a procesos judiciales prolongados. Su
              experiencia le permite estructurar estrategias jurídicas enfocadas
              en proteger los intereses económicos de las partes, preservar las
              relaciones comerciales y construir acuerdos con plena validez
              legal.
            </p>

            <p className={styles.summarySecondary}>
              Cuenta con experiencia en recuperación de cartera, negociación de
              obligaciones, incumplimientos contractuales, protección al
              consumidor conforme a la Ley 1480 de 2011, garantías mobiliarias y
              resolución de controversias empresariales. Cada proceso se
              desarrolla con un enfoque preventivo, transparente y orientado a
              generar soluciones jurídicas sostenibles para empresas y
              particulares en toda Colombia.
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
              La Dra. Leidy Tirado es abogada conciliadora con experiencia en
              derecho comercial y empresarial, especializada en mecanismos
              alternativos de solución de conflictos y conciliación
              extrajudicial en Colombia.
            </p>

            <p>
              Su práctica profesional se enfoca en la resolución estratégica de
              controversias comerciales, recuperación de cartera, acuerdos de
              pago y prevención de litigios, facilitando soluciones jurídicas
              que permitan proteger los intereses económicos de las partes y
              reducir riesgos judiciales.
            </p>

            <p>
              Cuenta con amplio conocimiento en protección al consumidor
              conforme al Estatuto del Consumidor (Ley 1480 de 2011), garantías
              mobiliarias y obligaciones mercantiles, brindando acompañamiento
              jurídico tanto a empresarios como a particulares en procesos de
              negociación y conciliación.
            </p>

            <p>
              Su metodología combina análisis jurídico, visión comercial y
              comunicación clara orientada a resultados, garantizando acuerdos
              estructurados, equilibrados y formalizados con plena validez legal
              conforme a la legislación colombiana.
            </p>
          </div>

          <div className={styles.areasBlock}>
            <h3>Servicios de Conciliación Comercial y Empresarial</h3>

            <ul>
              <li>Conciliación en conflictos comerciales y empresariales</li>
              <li>Protección al consumidor conforme a la Ley 1480 de 2011</li>
              <li>Recuperación de cartera y acuerdos de pago</li>
              <li>Diseño, negociación y revisión de contratos comerciales</li>
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
          comerciales y empresariales de forma eficiente, confidencial y con
          plena validez jurídica. La metodología aplicada prioriza estructura
          legal, claridad en las obligaciones y acuerdos ejecutables conforme a
          la legislación colombiana.
        </p>

        <div className={styles.methodGrid}>
          <div>
            <span>1</span>
            <p>Análisis jurídico y comercial integral del conflicto</p>
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

      {/* ================= SERVICIOS ESPECIALIZADOS ================= */}
      <section className={styles.servicesSection}>
        <h2>
          Servicios jurídicos y de conciliación en derecho comercial y
          empresarial
        </h2>

        <p>
          La Dra. Leidy Tirado acompaña a empresas, emprendedores y personas
          naturales en la solución de conflictos comerciales mediante
          conciliación extrajudicial y asesoría jurídica preventiva, buscando
          acuerdos que disminuyan riesgos legales y eviten procesos judiciales
          prolongados.
        </p>

        <div className={styles.servicesGrid}>
          <article>
            <h3>Conciliación en conflictos comerciales</h3>

            <p>
              Intervención jurídica en controversias derivadas de contratos,
              incumplimientos, obligaciones comerciales, negociación entre
              empresas y resolución de conflictos mercantiles mediante
              conciliación.
            </p>
          </article>

          <article>
            <h3>Recuperación de cartera y acuerdos de pago</h3>

            <p>
              Diseño de estrategias para recuperación de cartera mediante
              acuerdos de pago, conciliaciones extrajudiciales y mecanismos
              legales que reduzcan costos y tiempos para las empresas.
            </p>
          </article>

          <article>
            <h3>Protección al consumidor</h3>

            <p>
              Asesoría jurídica relacionada con el Estatuto del Consumidor,
              garantías, reclamaciones, responsabilidad de proveedores y
              solución de conflictos entre consumidores y empresas.
            </p>
          </article>

          <article>
            <h3>Negociación y revisión contractual</h3>

            <p>
              Elaboración, revisión y negociación de contratos comerciales para
              disminuir riesgos jurídicos y fortalecer la seguridad de las
              relaciones empresariales.
            </p>
          </article>

          <article>
            <h3>Prevención de litigios</h3>

            <p>
              Acompañamiento preventivo para identificar riesgos legales y
              construir soluciones antes de acudir a procesos judiciales.
            </p>
          </article>

          <article>
            <h3>Formalización de acuerdos</h3>

            <p>
              Redacción y estructuración jurídica de acuerdos conciliatorios con
              plena validez legal conforme a la legislación colombiana.
            </p>
          </article>
        </div>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section className={styles.benefitsSection}>
        <h2>
          ¿Por qué elegir a la Dra. Leidy Tirado para un proceso de
          conciliación?
        </h2>

        <p>
          Cada conflicto comercial requiere una estrategia diferente. La
          experiencia en negociación jurídica y derecho empresarial permite
          construir acuerdos eficientes, equilibrados y legalmente exigibles.
        </p>

        <ul>
          <li>
            Experiencia en conciliación extrajudicial para conflictos
            comerciales y empresariales.
          </li>

          <li>
            Acompañamiento jurídico personalizado durante todas las etapas del
            proceso.
          </li>

          <li>
            Estrategias orientadas a prevenir litigios y disminuir riesgos
            legales.
          </li>

          <li>
            Protección de los intereses económicos tanto de empresas como de
            particulares.
          </li>

          <li>
            Acuerdos estructurados con plena validez jurídica y seguridad legal.
          </li>

          <li>
            Cobertura para procesos de conciliación en todo el territorio
            colombiano.
          </li>
        </ul>
      </section>

      {/* ================= PROCESO ================= */}
      <section className={styles.processSection}>
        <h2>¿Cómo se desarrolla un proceso de conciliación comercial?</h2>

        <div className={styles.processGrid}>
          <div>
            <h3>Evaluación del caso</h3>

            <p>
              Se analiza el conflicto, la documentación disponible y las
              posibilidades jurídicas para alcanzar un acuerdo entre las partes.
            </p>
          </div>

          <div>
            <h3>Estrategia jurídica</h3>

            <p>
              Se define la mejor estrategia de negociación teniendo en cuenta
              los intereses de cada participante y el marco legal aplicable.
            </p>
          </div>

          <div>
            <h3>Conciliación</h3>

            <p>
              Se desarrolla la audiencia de conciliación buscando construir un
              acuerdo voluntario, equilibrado y jurídicamente sólido.
            </p>
          </div>

          <div>
            <h3>Formalización</h3>

            <p>
              El acuerdo alcanzado se documenta conforme a la normativa
              colombiana, otorgándole efectos jurídicos y seguridad para ambas
              partes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SEO OCULTO ================= */}
      <p className={styles.seoText}>
        Abogada conciliadora en Colombia especializada en derecho comercial,
        empresarial y protección al consumidor. Servicios de conciliación
        extrajudicial para conflictos comerciales, recuperación de cartera,
        acuerdos de pago, revisión de contratos, garantías mobiliarias y
        cumplimiento del Estatuto del Consumidor Ley 1480 de 2011. Centro de
        conciliación con cobertura nacional y acuerdos legalmente válidos
        conforme a la legislación colombiana.
      </p>
    </main>
  );
}
