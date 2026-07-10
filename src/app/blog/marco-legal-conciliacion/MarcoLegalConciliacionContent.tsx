"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MarcoLegalConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
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
            Legislación Colombiana • Conciliación Extrajudicial
          </span>

          <h1 className={styles.title}>
            Marco legal de la conciliación extrajudicial en Colombia: leyes,
            requisitos y efectos jurídicos
          </h1>

          <p className={styles.heroText}>
            La conciliación extrajudicial en Colombia cuenta con un sólido
            respaldo constitucional y legal que la convierte en uno de los
            mecanismos más utilizados para solucionar conflictos sin acudir a un
            proceso judicial. Gracias a este marco normativo, los acuerdos
            alcanzados entre las partes pueden producir efectos jurídicos
            equivalentes a una sentencia judicial en determinados casos.
          </p>

          <p className={styles.heroText}>
            Actualmente, la conciliación está regulada principalmente por la Ley
            2220 de 2022, la Constitución Política, el Código General del
            Proceso y otras disposiciones que fortalecen los Mecanismos
            Alternativos de Solución de Conflictos (MASC). Conocer estas normas
            permite comprender cuándo la conciliación es obligatoria, cuáles
            asuntos pueden resolverse mediante este procedimiento y qué efectos
            tiene el acta de conciliación.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás una explicación clara sobre el marco
            jurídico de la conciliación en Colombia, las principales leyes que
            la regulan y la importancia que tiene este mecanismo para
            ciudadanos, empresas y entidades públicas.
          </p>
        </div>

        {/* CONSTITUCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuál es el fundamento constitucional de la conciliación en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            El marco legal de la conciliación tiene su origen en la Constitución
            Política de Colombia, la cual reconoce el acceso a la administración
            de justicia y permite que los particulares solucionen determinados
            conflictos mediante mecanismos alternativos, siempre bajo los
            parámetros establecidos por la ley.
          </p>

          <p className={styles.paragraph}>
            Este fundamento constitucional busca facilitar una justicia más
            cercana, rápida y eficiente, permitiendo que muchas controversias
            puedan resolverse mediante el diálogo antes de acudir a un juez.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no reemplaza la justicia ordinaria. Por el
              contrario, hace parte del sistema de administración de justicia y
              constituye una herramienta reconocida por el ordenamiento jurídico
              colombiano para resolver conflictos de manera pacífica.
            </p>
          </div>
        </div>

        {/* NORMAS QUE REGULAN LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales normas que regulan la conciliación extrajudicial
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas personas creen que existe una única ley sobre
            conciliación, en realidad este mecanismo se encuentra respaldado por
            diversas normas que interactúan entre sí para regular su
            funcionamiento.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ley 2220 de 2022</h3>

              <p>
                Moderniza el Sistema Nacional de Conciliación y fortalece los
                mecanismos alternativos de solución de conflictos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ley 640 de 2001</h3>

              <p>
                Durante años fue la principal regulación de la conciliación
                extrajudicial y aún conserva disposiciones relevantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Código General del Proceso</h3>

              <p>
                Establece múltiples disposiciones relacionadas con la
                conciliación como requisito de procedibilidad en determinados
                procesos.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO LA CONCILIACION ES UN REQUISITO ANTES DE PRESENTAR UNA DEMANDA? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo la conciliación es un requisito antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            En determinados conflictos la legislación colombiana exige intentar
            una conciliación antes de acudir a los jueces. Este requisito busca
            disminuir la congestión judicial y brindar a las partes la
            posibilidad de resolver voluntariamente sus diferencias.
          </p>

          <ul className={styles.list}>
            <li>Algunos conflictos civiles.</li>

            <li>Procesos relacionados con arrendamientos.</li>

            <li>Determinados asuntos de familia.</li>

            <li>Conflictos comerciales conciliables.</li>

            <li>Algunas controversias patrimoniales.</li>
          </ul>
        </div>

        {/* LEYES PRINCIPALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Normas principales</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ley 2220 de 2022</h3>
              <p>
                Regula el sistema de conciliación en Colombia y fortalece los
                MASC.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Decreto 1829 de 2013</h3>
              <p>
                Reglamenta aspectos operativos de los centros de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Constitución Política</h3>
              <p>
                Base del derecho de acceso a la justicia y resolución
                alternativa.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS QUE OFRECE EL MARCO LEGAL DE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios que ofrece el marco legal de la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Los acuerdos celebrados dentro del procedimiento tienen respaldo
                legal y pueden hacerse cumplir cuando reúnen los requisitos
                exigidos por la normativa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de tiempos</h3>

              <p>
                Permite solucionar numerosos conflictos sin esperar los tiempos
                propios de un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor autonomía</h3>

              <p>
                Las partes conservan el control sobre la solución del conflicto,
                construyendo acuerdos que respondan a sus necesidades
                particulares.
              </p>
            </div>
          </div>
        </div>

        {/* CARACTERISTICAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Características legales</h2>

          <ul className={styles.list}>
            <li>Es un mecanismo voluntario en la mayoría de casos.</li>
            <li>Puede ser requisito previo en algunos procesos.</li>
            <li>El acta de conciliación tiene fuerza legal.</li>
            <li>Permite evitar procesos judiciales.</li>
            <li>Es administrada por centros autorizados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación tiene efectos jurídicos importantes cuando cumple
              con los requisitos establecidos en la ley.
            </p>
          </div>
        </div>

        {/* EFECTOS JURIDICOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Efectos jurídicos del acta de conciliación
          </h2>

          <p className={styles.paragraph}>
            El acta de conciliación tiene efectos de cosa juzgada y presta
            mérito ejecutivo, lo que significa que puede hacerse cumplir
            legalmente.
          </p>

          <p className={styles.paragraph}>
            Esto le da una fuerza similar a una decisión judicial.
          </p>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia en Colombia</h2>

          <p className={styles.paragraph}>
            El marco legal de la conciliación permite descongestionar los
            juzgados y fomentar la solución pacífica de conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, fortalece el acceso a la justicia de forma eficiente.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el marco legal de la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué ley regula actualmente la conciliación en Colombia?</h3>

              <p>
                El sistema de conciliación se encuentra regulado principalmente
                por la Ley 2220 de 2022, junto con otras normas como la
                Constitución Política, el Código General del Proceso y
                diferentes disposiciones reglamentarias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Todas las conciliaciones son obligatorias?</h3>

              <p>
                No. La obligatoriedad depende del tipo de conflicto. En algunos
                asuntos la conciliación constituye un requisito previo para
                presentar la demanda y en otros es completamente voluntaria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿El acta de conciliación tiene la misma validez que una
                sentencia?
              </h3>

              <p>
                El acta produce importantes efectos jurídicos, como fuerza de
                cosa juzgada y mérito ejecutivo cuando cumple los requisitos
                establecidos por la legislación colombiana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación con pleno respaldo legal?
          </h3>

          <p className={styles.ctaText}>
            Nuestro Centro de Conciliación puede orientarte sobre las normas
            aplicables a tu caso, verificar si la conciliación es procedente y
            acompañarte durante todo el proceso para buscar un acuerdo válido,
            seguro y con efectos jurídicos. Solicita información y recibe
            asesoría personalizada.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un conciliador
          </a>
        </div>
      </motion.article>
    </section>
  );
}
