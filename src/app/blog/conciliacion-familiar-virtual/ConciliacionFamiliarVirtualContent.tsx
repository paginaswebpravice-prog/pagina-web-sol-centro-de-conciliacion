"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";
import Head from "next/head";

export default function ConciliacionFamiliarVirtualContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La conciliación familiar virtual tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Los acuerdos alcanzados mediante conciliación virtual tienen efectos jurídicos y plena validez legal.",
        },
      },
      {
        "@type": "Question",
        name: "¿Se puede participar desde otra ciudad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Una de las principales ventajas de la conciliación virtual es permitir la participación desde cualquier lugar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué se necesita para asistir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generalmente se requiere un dispositivo con cámara, conexión a internet y la documentación necesaria para el trámite.",
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <section className={styles.articleWrapper}>
        <motion.article
          className={styles.articleBlock}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.heroContent}>
            <span className={styles.badge}>Conciliación familiar online</span>

            <h1 className={styles.title}>
              Conciliación familiar virtual en Colombia
            </h1>

            <p className={styles.heroText}>
              La conciliación familiar virtual permite resolver conflictos
              relacionados con hijos, alimentos, custodia, visitas y otros
              asuntos familiares sin necesidad de acudir físicamente a un centro
              de conciliación.
            </p>

            <p className={styles.heroText}>
              Gracias a las herramientas tecnológicas disponibles en Colombia,
              las partes pueden participar en audiencias virtuales desde Bogotá,
              Medellín, Cali o cualquier otra ciudad del país e incluso desde el
              exterior.
            </p>

            <p className={styles.heroText}>
              Esta modalidad facilita el acceso a mecanismos de resolución de
              conflictos, reduce desplazamientos y permite alcanzar acuerdos
              legales de forma rápida y eficiente.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué es la conciliación familiar virtual?
            </h2>

            <p className={styles.paragraph}>
              Es una modalidad de conciliación en la cual las partes participan
              mediante plataformas tecnológicas autorizadas, permitiendo que la
              audiencia se desarrolle a distancia sin perder validez jurídica.
            </p>

            <p className={styles.paragraph}>
              El conciliador dirige la audiencia, escucha a las partes y las
              orienta para encontrar soluciones consensuadas al conflicto
              familiar.
            </p>

            <div className={styles.highlightBox}>
              <p>
                La conciliación familiar virtual ofrece la misma seguridad
                jurídica que una audiencia presencial y puede utilizarse para
                resolver numerosos conflictos familiares contemplados por la
                ley.
              </p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Asuntos familiares que pueden conciliarse virtualmente
            </h2>

            <ul className={styles.list}>
              <li>Cuotas alimentarias.</li>
              <li>Custodia y cuidado personal de menores.</li>
              <li>Régimen de visitas.</li>
              <li>Gastos extraordinarios de hijos.</li>
              <li>Acuerdos entre padres separados.</li>
              <li>Obligaciones económicas familiares.</li>
              <li>Liquidación de sociedad patrimonial.</li>
              <li>Otros conflictos familiares conciliables.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Ventajas de la conciliación virtual
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Ahorro de tiempo</h3>

                <p>
                  Permite participar sin desplazamientos y facilita la
                  programación de las audiencias.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Mayor comodidad</h3>

                <p>
                  Las partes pueden conectarse desde su hogar, oficina o ciudad
                  de residencia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Cobertura nacional</h3>

                <p>
                  Facilita la participación de personas ubicadas en distintas
                  ciudades o incluso en el extranjero.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Requisitos para participar</h2>

            <ul className={styles.list}>
              <li>Documento de identificación.</li>
              <li>Correo electrónico activo.</li>
              <li>Acceso a internet estable.</li>
              <li>Computador, celular o tableta con cámara.</li>
              <li>Documentos relacionados con el conflicto.</li>
            </ul>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo funciona una audiencia virtual?
            </h2>

            <p className={styles.paragraph}>
              Una vez presentada la solicitud, las partes reciben la citación y
              las instrucciones de conexión. Durante la audiencia, el
              conciliador escucha las posiciones de cada participante y facilita
              la construcción de acuerdos.
            </p>

            <p className={styles.paragraph}>
              Si se alcanza una solución, se elabora el acta correspondiente,
              documento que tiene efectos jurídicos y puede ser exigido en caso
              de incumplimiento.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Beneficios para familias en distintas ciudades
            </h2>

            <p className={styles.paragraph}>
              Muchas veces los padres viven en ciudades diferentes o incluso en
              países distintos. La conciliación virtual permite superar estas
              barreras geográficas y facilita la participación de todos los
              involucrados.
            </p>

            <p className={styles.paragraph}>
              Esto resulta especialmente útil en acuerdos relacionados con
              alimentos, visitas y cuidado personal de menores.
            </p>
          </div>

          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>¿Tiene validez legal?</h3>

                <p>
                  Sí. Los acuerdos alcanzados virtualmente tienen plena validez
                  jurídica.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Puedo conectarme desde otra ciudad?</h3>

                <p>
                  Sí. La modalidad virtual permite participar desde cualquier
                  lugar con conexión a internet.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Es más rápida que la presencial?</h3>

                <p>
                  En muchos casos facilita la programación y reduce tiempos de
                  desplazamiento.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas una conciliación familiar virtual?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre conciliación online, audiencias
              virtuales, cuota alimentaria, custodia, visitas y otros asuntos
              familiares en Bogotá y Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
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
