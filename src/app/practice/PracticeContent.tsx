"use client";

import styles from "./practice.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faBriefcase,
  faBuilding,
  faUsers,
  faChild,
  faClipboardList,
  faHouse,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

import { motion, Variants } from "framer-motion";
import CTASection from "../components/CTAsection";
import Link from "next/link";

const areas = [
  {
    title: "Resolución de Conflictos Comerciales mediante Conciliación",
    desc: "Conciliación en conflictos empresariales relacionados con contratos mercantiles, incumplimientos, sociedades y relaciones comerciales. Facilitamos acuerdos que permiten proteger los intereses económicos y mantener relaciones comerciales estables.",
    icon: faMoneyBillWave,
    link: "/practice/asuntos-comerciales",
  },
  {
    title: "Resolución de Conflictos Civiles mediante Conciliación",
    desc: "Resolución extrajudicial de conflictos civiles vinculados a contratos, obligaciones, daños y perjuicios, y derechos patrimoniales, mediante acuerdos claros, equilibrados y jurídicamente válidos.",
    icon: faScaleBalanced,
    link: "/practice/asuntos-civiles",
  },
  {
    title: "Conciliación en Propiedad Horizontal y Copropiedades",
    desc: "Mediación y conciliación en conflictos de propiedad horizontal, cuotas de administración, uso de zonas comunes y convivencia entre copropietarios, promoviendo soluciones prácticas y duraderas.",
    icon: faBuilding,
    link: "/practice/asuntos-de-copropiedad",
  },
  {
    title: "Conciliación Laboral entre Trabajadores y Empleadores",
    desc: "Conciliación laboral entre empleadores y trabajadores en temas como despidos, liquidaciones, contratos y reclamaciones laborales, priorizando acuerdos justos y el cumplimiento normativo.",
    icon: faBriefcase,
    link: "/practice/asuntos-laborales",
  },
  {
    title: "Conciliación para Cuota Alimentaria de Hijos",
    desc: "Acompañamiento jurídico en la fijación, modificación y cumplimiento de cuotas alimentarias, garantizando la protección de los derechos de niños, niñas y adolescentes.",
    icon: faChild,
    link: "/practice/alimentos-para-menores",
  },
  {
    title: "Conciliación sobre Custodia y Régimen de Visitas",
    desc: "Orientación legal para definir acuerdos de custodia, cuidado personal y régimen de visitas, siempre priorizando el interés superior del menor y el bienestar familiar",
    icon: faClipboardList,
    link: "/practice/custodia-y-regimen-de-visitas",
  },
  {
    title: "Conciliación de Conflictos Vecinales y Convivencia",
    desc: "Mediación en conflictos de convivencia relacionados con ruidos, uso de espacios comunes, límites de propiedad y normas comunitarias, fomentando el diálogo y la armonía vecinal.",
    icon: faUsers,
    link: "/practice/asuntos-vecinales",
  },
  {
    title: "Conciliación para Liquidación de Sociedad Conyugal",
    desc: "Conciliación para la distribución justa y ordenada de los bienes adquiridos durante el matrimonio o la unión marital, evitando procesos judiciales prolongados.",
    icon: faHouse,
    link: "/practice/liquidacion-de-sociedad-conyugal",
  },
  {
    title: "Conciliación para Conflictos Familiares",
    desc: "Conciliación en conflictos familiares relacionados con separación, acuerdos parentales y responsabilidades familiares, buscando soluciones respetuosas y sostenibles.",
    icon: faUsers,
    link: "/practice/conflictos-familiares",
  },
  {
    title: "Conciliación de Deudas y Obligaciones Económicas",
    desc: "Gestión conciliada de obligaciones económicas, deudas y acuerdos de pago entre particulares o empresas, con enfoque en soluciones viables y seguras.",
    icon: faMoneyBillWave,
    link: "/practice/obligaciones-economicas",
  },
  {
    title: "Conciliación por Incumplimiento de Contratos",
    desc: "Conciliación frente a incumplimientos contractuales, permitiendo renegociar condiciones, evitar litigios y lograr acuerdos efectivos entre las partes.",
    icon: faScaleBalanced,
    link: "/practice/incumplimiento-de-contratos",
  },
  {
    title: "Conciliación en Conflictos entre Arrendador y Arrendatario",
    desc: "Mediación y conciliación en conflictos entre arrendadores y arrendatarios relacionados con cánones, restitución de inmuebles y obligaciones contractuales.",
    icon: faBuilding,
    link: "/practice/conflictos-de-arrendamiento",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Practice() {
  return (
    <>
      <section className={styles.section}>
        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.subtitle}>
            CONCILIACIÓN EXTRAJUDICIAL EN BOGOTÁ Y COLOMBIA
          </span>

          <h1 className={styles.title}>
            Servicios de Conciliación Extrajudicial en Colombia para Resolver
            Conflictos de Forma Rápida y Legal
          </h1>

          <p className={styles.description}>
            En Sol Centro de Conciliación ayudamos a personas, familias y
            empresas a resolver conflictos civiles, comerciales, laborales,
            familiares y de arrendamiento mediante conciliación extrajudicial en
            Colombia. Conozca todas nuestras áreas de práctica y encuentre la
            solución jurídica más adecuada para su caso sin acudir
            inmediatamente a un proceso judicial.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Link
                href={area.link}
                className={styles.card}
                aria-label={`Ver más sobre ${area.title}`}
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={area.icon} />
                </div>

                <h3 className={styles.cardTitle}>{area.title}</h3>
                <p className={styles.cardDesc}>{area.desc}</p>

                <span className={styles.link}>Conocer más →</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <section className={styles.infoSection}>
          <div className={styles.container}>
            <h2>¿Cuándo acudir a un centro de conciliación en Colombia?</h2>

            <p>
              La conciliación extrajudicial es una alternativa eficaz para
              resolver conflictos antes de iniciar un proceso judicial. En
              muchos casos, además de ahorrar tiempo y costos, constituye un
              requisito previo para presentar determinadas demandas, permitiendo
              que las partes intenten llegar a un acuerdo con el acompañamiento
              de un conciliador autorizado.
            </p>

            <p>
              Este mecanismo puede utilizarse cuando existen diferencias
              relacionadas con contratos, obligaciones económicas, conflictos
              familiares, arrendamientos, asuntos comerciales, relaciones
              laborales y otros temas susceptibles de conciliación conforme a la
              legislación colombiana.
            </p>

            <p>
              Si las partes alcanzan un acuerdo, este queda consignado en un
              acta de conciliación con efectos jurídicos, brindando seguridad
              legal y evitando, en muchos casos, procesos judiciales largos y
              costosos.
            </p>
          </div>
        </section>

        <section className={styles.benefitsSection}>
          <div className={styles.container}>
            <h2>
              ¿Por qué elegir la conciliación extrajudicial antes de iniciar una
              demanda?
            </h2>

            <div className={styles.benefitsGrid}>
              <article>
                <h3>Reduce tiempos de solución</h3>

                <p>
                  Muchos conflictos pueden resolverse en semanas, evitando
                  procesos judiciales que pueden extenderse durante meses o
                  incluso años.
                </p>
              </article>

              <article>
                <h3>Disminuye costos legales</h3>

                <p>
                  La conciliación permite alcanzar acuerdos sin asumir los
                  costos que normalmente implica un litigio prolongado.
                </p>
              </article>

              <article>
                <h3>Los acuerdos tienen efectos legales</h3>

                <p>
                  Las actas de conciliación producen efectos jurídicos y pueden
                  prestar mérito ejecutivo cuando la ley lo permite.
                </p>
              </article>

              <article>
                <h3>Favorece el diálogo entre las partes</h3>

                <p>
                  Se promueve una solución construida de manera conjunta,
                  preservando relaciones familiares, comerciales y laborales
                  cuando es posible.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.processSection}>
          <div className={styles.container}>
            <h2>¿Cómo funciona un proceso de conciliación extrajudicial?</h2>

            <div className={styles.processGrid}>
              <article>
                <span>1</span>

                <h3>Solicitud</h3>

                <p>
                  Se presenta la solicitud de conciliación indicando el
                  conflicto y las partes involucradas.
                </p>
              </article>

              <article>
                <span>2</span>

                <h3>Citación</h3>

                <p>
                  El centro de conciliación programa la audiencia e invita
                  formalmente a las partes a participar.
                </p>
              </article>

              <article>
                <span>3</span>

                <h3>Audiencia</h3>

                <p>
                  Con el acompañamiento del conciliador se facilita el diálogo
                  para encontrar soluciones que beneficien a ambas partes.
                </p>
              </article>

              <article>
                <span>4</span>

                <h3>Acta de conciliación</h3>

                <p>
                  Si existe acuerdo, este queda formalizado mediante un acta con
                  plena validez jurídica conforme a la legislación colombiana.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.typesSection}>
          <div className={styles.container}>
            <h2>
              ¿Qué conflictos pueden resolverse mediante conciliación
              extrajudicial?
            </h2>

            <p>
              La conciliación extrajudicial permite solucionar una amplia
              variedad de controversias entre personas naturales y empresas.
              Dependiendo del caso, es posible alcanzar acuerdos que eviten
              procesos judiciales y brinden una solución legal más rápida.
            </p>

            <ul>
              <li>Conflictos civiles y contractuales.</li>
              <li>Conflictos comerciales entre empresas.</li>
              <li>Procesos relacionados con arrendamientos.</li>
              <li>Obligaciones económicas y acuerdos de pago.</li>
              <li>Asuntos de familia como alimentos y custodia.</li>
              <li>Conflictos laborales entre empleadores y trabajadores.</li>
              <li>Conflictos de convivencia y propiedad horizontal.</li>
            </ul>
          </div>
        </section>

        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2>¿Por qué elegir Sol Centro de Conciliación?</h2>

            <p>
              En Sol Centro de Conciliación acompañamos a personas, familias,
              empresarios y organizaciones en la búsqueda de soluciones
              jurídicas eficientes mediante mecanismos alternativos de
              resolución de conflictos.
            </p>

            <p>
              Nuestro equipo de abogados conciliadores analiza cada caso de
              manera individual para construir acuerdos claros, equilibrados y
              ajustados a la legislación colombiana, priorizando siempre la
              seguridad jurídica y la protección de los intereses de las partes.
            </p>

            <p>
              Atendemos procesos de conciliación en Bogotá y en todo Colombia,
              ofreciendo acompañamiento profesional durante cada etapa del
              procedimiento.
            </p>
          </div>
        </section>
      </section>

      <CTASection />
    </>
  );
}
