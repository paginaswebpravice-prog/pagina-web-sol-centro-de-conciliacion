"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function QueEsLaConciliacionContent() {
  return (
    <>
      <section
        className={styles.articleWrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* HERO */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>
              Guía completa sobre conciliación extrajudicial en Colombia
            </span>

            <h1 className={styles.title}>
              ¿Qué es la conciliación en Colombia? Guía completa, beneficios,
              requisitos y cuándo acudir a este mecanismo
            </h1>

            <p className={styles.heroText}>
              La <strong>conciliación en Colombia</strong> es uno de los
              mecanismos más utilizados para solucionar conflictos sin necesidad
              de acudir inmediatamente a un juez. Gracias a este procedimiento,
              las personas y las empresas pueden construir acuerdos con ayuda de
              un conciliador imparcial, reduciendo tiempos, costos y el desgaste
              que normalmente implica un proceso judicial.
            </p>

            <p className={styles.heroText}>
              Aunque muchas personas escuchan hablar de la conciliación cuando
              reciben una citación o necesitan presentar una demanda, lo cierto
              es que este mecanismo puede utilizarse para resolver conflictos
              civiles, comerciales, familiares, de propiedad horizontal e
              incluso determinados asuntos laborales permitidos por la ley.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás qué es la conciliación, cómo funciona,
              cuáles son sus ventajas, qué asuntos pueden conciliarse, cuándo es
              obligatoria, qué valor jurídico tiene un acta de conciliación y
              por qué este mecanismo se ha convertido en una de las principales
              herramientas para resolver conflictos en Colombia.
            </p>
          </div>

          {/* INTRO */}

          <div className={styles.contentSection}>
            <p className={styles.paragraph}>
              A diferencia de un juicio tradicional, la conciliación busca que
              las partes construyan conjuntamente una solución al conflicto. El
              conciliador no impone una decisión, sino que facilita el diálogo y
              ayuda a encontrar acuerdos equilibrados.
            </p>

            <p className={styles.paragraph}>
              Cuando se alcanza un acuerdo, este queda consignado en un{" "}
              <strong>acta de conciliación</strong>, documento que tiene efectos
              legales y presta mérito ejecutivo en Colombia.
            </p>

            <p className={styles.paragraph}>
              En Bogotá y otras ciudades del país, la conciliación se ha
              convertido en una de las herramientas más importantes para reducir
              la congestión judicial y promover soluciones más rápidas entre las
              partes.
            </p>
          </div>

          {/* PARA QUÉ SIRVE */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Para qué sirve la conciliación en Colombia?
            </h2>

            <p className={styles.paragraph}>
              La conciliación sirve para resolver conflictos legales sin acudir
              inicialmente a un juez. Este mecanismo permite alcanzar acuerdos
              voluntarios de manera más flexible y eficiente.
            </p>

            <p className={styles.paragraph}>
              En Colombia, la conciliación es utilizada frecuentemente para:
            </p>

            <ul className={styles.list}>
              <li>Conflictos familiares.</li>
              <li>Problemas de arrendamiento.</li>
              <li>Incumplimientos de contratos.</li>
              <li>Deudas y obligaciones económicas.</li>
              <li>Conflictos laborales.</li>
              <li>Responsabilidad civil.</li>
              <li>Conflictos comerciales y empresariales.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                En Bogotá, muchas empresas y personas utilizan la conciliación
                para resolver conflictos relacionados con deudas, contratos,
                arrendamientos, obligaciones civiles y asuntos familiares sin
                necesidad de iniciar procesos judiciales extensos.
              </p>
            </div>
          </div>

          {/* TIPOS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Tipos de conciliación en Bogotá y Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conciliación extrajudicial</h3>

                <p>
                  Se realiza antes de iniciar un proceso judicial y generalmente
                  se lleva a cabo en centros de conciliación autorizados.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conciliación judicial</h3>

                <p>
                  Ocurre dentro de un proceso judicial ante un juez que intenta
                  promover un acuerdo entre las partes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conciliación virtual</h3>

                <p>
                  En Colombia también es posible realizar conciliaciones
                  virtuales desde ciudades como Bogotá, Medellín o Cali.
                </p>
              </div>
            </div>
          </div>

          {/* BENEFICIOS */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios de la conciliación en Bogotá y Colombia
            </h2>

            <ul className={styles.list}>
              <li>Evita procesos judiciales prolongados.</li>
              <li>Reduce costos legales y procesales.</li>
              <li>Permite acuerdos rápidos y personalizados.</li>
              <li>Favorece el diálogo entre las partes.</li>
              <li>Brinda soluciones más flexibles.</li>
              <li>Protege relaciones familiares y comerciales.</li>
              <li>Puede desarrollarse presencial o virtualmente.</li>
              <li>El acta tiene plena validez jurídica.</li>
            </ul>
          </div>

          {/* VALIDEZ LEGAL */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿La conciliación tiene validez legal en Colombia?
            </h2>

            <p className={styles.paragraph}>
              Sí. El acta de conciliación tiene efectos jurídicos en Colombia y
              presta mérito ejecutivo, lo que significa que puede ser exigida
              judicialmente si alguna de las partes incumple el acuerdo.
            </p>

            <p className={styles.paragraph}>
              Esto convierte la conciliación en una alternativa jurídica segura,
              práctica y efectiva para resolver conflictos civiles, comerciales,
              familiares y laborales en Bogotá y todo el país.
            </p>
          </div>

          {/* CÓMO SOLICITAR */}

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo solicitar una conciliación en Bogotá?
            </h2>

            <p className={styles.paragraph}>
              Para solicitar una conciliación en Bogotá o cualquier ciudad de
              Colombia, normalmente se presenta una solicitud ante un centro de
              conciliación autorizado.
            </p>

            <p className={styles.paragraph}>
              Posteriormente se programa una audiencia en la que las partes
              intentan llegar a un acuerdo con la ayuda del conciliador.
            </p>

            <p className={styles.paragraph}>
              Si existe acuerdo, se firma un acta de conciliación con efectos
              jurídicos obligatorios.
            </p>
          </div>

          {/* CUANDO ES RECOMENDABLE */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cuándo es recomendable acudir primero a una conciliación y no
              presentar una demanda?
            </h2>

            <p className={styles.paragraph}>
              Muchas personas creen que la única alternativa frente a un
              conflicto es acudir inmediatamente a un juez. Sin embargo, en
              numerosos casos la legislación colombiana permite —e incluso
              exige— intentar primero una conciliación antes de iniciar un
              proceso judicial.
            </p>

            <p className={styles.paragraph}>
              La conciliación resulta especialmente recomendable cuando las
              partes aún tienen la posibilidad de dialogar y existe interés en
              alcanzar una solución rápida, económica y jurídicamente segura.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conflictos entre particulares</h3>

                <p>
                  Deudas, incumplimientos contractuales, daños, préstamos de
                  dinero, compraventas y otras obligaciones civiles.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Problemas familiares</h3>

                <p>
                  Cuotas alimentarias, custodia, visitas, separación de bienes y
                  acuerdos familiares que puedan resolverse mediante diálogo.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conflictos comerciales</h3>

                <p>
                  Diferencias entre empresas, proveedores, clientes, socios o
                  comerciantes relacionadas con contratos y obligaciones
                  económicas.
                </p>
              </div>
            </div>
          </div>

          {/* OCURRE DURANTE UNA AUDIENCIA DE CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre durante una audiencia de conciliación?
            </h2>

            <p className={styles.paragraph}>
              Una audiencia de conciliación es un espacio en el que las partes
              exponen su versión de los hechos ante un conciliador imparcial. El
              objetivo no consiste en determinar quién tiene la razón, sino
              identificar alternativas que permitan solucionar el conflicto
              mediante un acuerdo voluntario.
            </p>

            <p className={styles.paragraph}>
              El conciliador escucha a cada una de las partes, aclara los
              aspectos jurídicos relevantes, facilita la comunicación y propone
              escenarios de negociación cuando sea necesario, siempre respetando
              la voluntad de los participantes.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Si las partes llegan a un acuerdo, este queda consignado en un
                acta de conciliación con efectos legales. Si no existe acuerdo,
                cada una conserva el derecho de acudir posteriormente ante las
                autoridades judiciales cuando la ley lo permita.
              </p>
            </div>
          </div>

          {/* VENTAJAS DE LA CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ventajas ofrece la conciliación frente a un proceso judicial?
            </h2>

            <ul className={styles.list}>
              <li>
                Reduce significativamente los tiempos para resolver un
                conflicto.
              </li>

              <li>
                Permite que las partes participen activamente en la construcción
                del acuerdo.
              </li>

              <li>
                Evita, en muchos casos, procesos judiciales extensos y costosos.
              </li>

              <li>
                Protege las relaciones personales, familiares y comerciales.
              </li>

              <li>
                Ofrece soluciones más flexibles que una sentencia judicial.
              </li>

              <li>
                Puede realizarse de manera presencial o virtual cuando la
                normativa lo permite.
              </li>

              <li>
                El acuerdo alcanzado tiene efectos jurídicos obligatorios.
              </li>

              <li>Genera mayor tranquilidad y seguridad para ambas partes.</li>
            </ul>
          </div>

          {/* CASOS FRECUENTES EN LOS QUE LA CONCILIACIÓN AYUDA A RESOLVER CONFLICTOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos frecuentes en los que la conciliación ayuda a resolver
              conflictos
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Arrendamientos</h3>

                <p>
                  Mora en el pago del canon, restitución del inmueble,
                  incumplimientos y acuerdos entre arrendador e inquilino.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Obligaciones económicas</h3>

                <p>
                  Acuerdos de pago, reconocimiento de deudas, préstamos de
                  dinero y obligaciones civiles.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conflictos empresariales</h3>

                <p>
                  Diferencias derivadas de contratos comerciales, prestación de
                  servicios, proveedores o clientes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Relaciones familiares</h3>

                <p>
                  Acuerdos relacionados con alimentos, custodia, visitas y
                  obligaciones económicas entre familiares.
                </p>
              </div>
            </div>
          </div>

          {/* CASOS FRECUENTES EN LOS QUE LA CONCILIACIÓN AYUDA A RESOLVER CONFLICTOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Casos frecuentes en los que la conciliación ayuda a resolver
              conflictos
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Arrendamientos</h3>

                <p>
                  Mora en el pago del canon, restitución del inmueble,
                  incumplimientos y acuerdos entre arrendador e inquilino.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Obligaciones económicas</h3>

                <p>
                  Acuerdos de pago, reconocimiento de deudas, préstamos de
                  dinero y obligaciones civiles.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conflictos empresariales</h3>

                <p>
                  Diferencias derivadas de contratos comerciales, prestación de
                  servicios, proveedores o clientes.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Relaciones familiares</h3>

                <p>
                  Acuerdos relacionados con alimentos, custodia, visitas y
                  obligaciones económicas entre familiares.
                </p>
              </div>
            </div>
          </div>

          {/* COMO PREPARARSE PARA UNA AUDIENCIA DE CONCILIACIÓN */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo prepararse para una audiencia de conciliación?
            </h2>

            <p className={styles.paragraph}>
              Prepararse adecuadamente antes de asistir a una audiencia facilita
              el diálogo y aumenta las posibilidades de lograr un acuerdo
              satisfactorio para todas las partes.
            </p>

            <p className={styles.paragraph}>
              Es recomendable reunir los documentos relacionados con el
              conflicto, identificar claramente las pretensiones, calcular los
              valores que se reclaman cuando corresponda y acudir con
              disposición para escuchar propuestas razonables.
            </p>

            <p className={styles.paragraph}>
              Aunque cada caso es diferente, una buena preparación permite que
              la audiencia sea más organizada, productiva y enfocada en
              encontrar soluciones viables dentro del marco legal colombiano.
            </p>
          </div>

          {/* FAQ */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre conciliación en Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿La conciliación reemplaza un juicio?</h3>

                <p>
                  En muchos casos sí. La conciliación permite solucionar
                  conflictos sin acudir inicialmente a un juez.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Dónde hacer conciliación en Bogotá?</h3>

                <p>
                  Puede realizarse en centros de conciliación autorizados,
                  cámaras de comercio y entidades habilitadas en Colombia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Qué pasa si una parte incumple?</h3>

                <p>
                  El acuerdo conciliatorio puede exigirse judicialmente mediante
                  procesos ejecutivos en Colombia.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas iniciar una conciliación en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación extrajudicial, audiencias,
              acuerdos legales y solución de conflictos civiles, comerciales y
              familiares en Bogotá y a nivel nacional.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>
        </motion.article>
      </section>
    </>
  );
}
