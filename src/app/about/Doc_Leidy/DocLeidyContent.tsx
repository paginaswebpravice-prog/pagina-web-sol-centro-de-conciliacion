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
              Especialista en conciliación extrajudicial, derecho comercial,
              derecho empresarial y protección al consumidor en Colombia
            </h2>

            <p className={styles.summary}>
              La Dra. Leidy Tirado brinda acompañamiento jurídico estratégico en
              procesos de conciliación extrajudicial y resolución de conflictos
              comerciales y empresariales en Colombia. Su enfoque combina visión
              jurídica, criterio empresarial y negociación estructurada para
              alcanzar acuerdos sólidos, eficientes y legalmente exigibles.
            </p>

            <p className={styles.summarySecondary}>
              Cuenta con experiencia en derecho comercial colombiano, protección
              al consumidor, recuperación de cartera, acuerdos de pago,
              garantías mobiliarias y prevención de litigios, asesorando tanto a
              empresas como a particulares en la construcción de soluciones
              jurídicas seguras y sostenibles.
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
