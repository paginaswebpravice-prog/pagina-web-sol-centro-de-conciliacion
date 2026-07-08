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
          {/* HERO SECTION */}
          <div className={styles.heroContent}>
            <span className={styles.badge}>Conciliación familiar online</span>

            <h1 className={styles.title}>
              Conciliación familiar virtual en Colombia: cómo funciona,
              requisitos y validez legal
            </h1>

            <p className={styles.heroText}>
              Hoy en día muchas familias necesitan resolver conflictos
              relacionados con cuota alimentaria, custodia de hijos, régimen de
              visitas o acuerdos económicos, pero no siempre pueden reunirse de
              forma presencial. La conciliación familiar virtual permite
              adelantar este proceso mediante audiencias en línea con la misma
              validez jurídica que una audiencia presencial.
            </p>

            <p className={styles.heroText}>
              Esta modalidad resulta especialmente útil cuando los padres viven
              en ciudades diferentes, uno de ellos reside en el exterior o las
              circunstancias personales dificultan el desplazamiento hasta un
              centro de conciliación.
            </p>

            <p className={styles.heroText}>
              En esta guía encontrarás cómo funciona una conciliación familiar
              virtual en Colombia, cuáles son los requisitos, qué asuntos pueden
              resolverse y qué ocurre después de firmar el acta de conciliación.
            </p>
          </div>

          {/* QUE ES LA CONCILIACION VIRTUAL */}
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

          {/* ASUNTOS QUE PUEDEN CONCILIARSE VIRTUALMENTE */}
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

          {/* PORQUE CADA VEZ MAS FAMILIAS PREFEREN LA CONCILIACION VIRTUAL EN COLOMBIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Por qué cada vez más familias prefieren la conciliación virtual
              en Colombia?
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

          {/* QUE NECESITAS PARA ASISTIR A UNA AUDIENCIA DE CONCILIACIÓN FAMILIAR VIRTUAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué necesitas para asistir a una audiencia de conciliación
              familiar virtual?
            </h2>

            <ul className={styles.list}>
              <li>Documento de identificación.</li>
              <li>Correo electrónico activo.</li>
              <li>Acceso a internet estable.</li>
              <li>Computador, celular o tableta con cámara.</li>
              <li>Documentos relacionados con el conflicto.</li>
            </ul>
          </div>

          {/* COMO ES UNA AUDIENCIA DE CONCILIACIÓN FAMILIAR VIRTUAL */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Cómo es una audiencia de conciliación familiar virtual paso a
              paso?
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

          {/* QUIÉNES PUEDEN SOLICITARLA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Quiénes pueden solicitar una conciliación familiar virtual?
            </h2>

            <p className={styles.paragraph}>
              La conciliación familiar virtual está dirigida a personas que
              necesitan resolver conflictos relacionados con asuntos de familia
              sin desplazarse físicamente a un centro de conciliación. Esta
              modalidad facilita la participación de quienes viven en diferentes
              ciudades, tienen horarios complicados o incluso residen fuera de
              Colombia.
            </p>

            <p className={styles.paragraph}>
              Siempre que el asunto sea susceptible de conciliación y las partes
              acepten participar en la audiencia virtual, este mecanismo puede
              convertirse en una alternativa práctica para alcanzar acuerdos con
              plena validez jurídica.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Padres separados</h3>

                <p>
                  Para acordar temas relacionados con alimentos, custodia,
                  visitas y responsabilidades frente a sus hijos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Familias en distintas ciudades</h3>

                <p>
                  Cuando las partes viven en lugares diferentes y desean evitar
                  desplazamientos innecesarios.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Colombianos en el exterior</h3>

                <p>
                  Personas que residen fuera del país y necesitan participar en
                  una audiencia sin viajar a Colombia.
                </p>
              </div>
            </div>
          </div>

          {/* DOCUMENTOS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué documentos debes tener preparados antes de una audiencia
              virtual?
            </h2>

            <p className={styles.paragraph}>
              Contar con la documentación adecuada facilita el desarrollo de la
              audiencia y permite que el conciliador conozca mejor la situación
              planteada por las partes.
            </p>

            <ul className={styles.list}>
              <li>Documento de identidad vigente.</li>
              <li>
                Registro civil de nacimiento de los hijos, cuando aplique.
              </li>
              <li>Soportes de ingresos y gastos.</li>
              <li>Documentos relacionados con obligaciones económicas.</li>
              <li>Pruebas o soportes que ayuden a explicar el conflicto.</li>
              <li>Correo electrónico y número telefónico actualizados.</li>
            </ul>

            <div className={styles.highlightBox}>
              <p>
                Tener toda la documentación organizada antes de la audiencia
                ayuda a que el proceso sea más ágil y facilita la construcción
                de acuerdos claros y bien fundamentados.
              </p>
            </div>
          </div>

          {/* INASISTENCIA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué pasa si una de las partes no se conecta a la audiencia
              virtual?
            </h2>

            <p className={styles.paragraph}>
              La asistencia de ambas partes es fundamental para desarrollar la
              audiencia de conciliación. Si una persona no participa en la fecha
              y hora programadas, el conciliador dejará constancia de la
              situación y el trámite continuará conforme a las normas aplicables
              al caso.
            </p>

            <p className={styles.paragraph}>
              Cuando la ausencia obedece a problemas técnicos o circunstancias
              justificadas, puede ser posible reprogramar la audiencia,
              dependiendo de las condiciones del trámite y de la entidad que
              adelante la conciliación.
            </p>
          </div>

          {/* CONCILIACIÓN FAMILIAR VIRTUAL CUANDO LOS PADRES VIVEN EN CIUDADES O PAISES DIFERENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Conciliación familiar virtual cuando los padres viven en ciudades
              o países diferentes
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

          {/* ERRORES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Errores que debes evitar durante una conciliación familiar virtual
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>No probar la conexión</h3>

                <p>
                  Verifica con anticipación tu acceso a internet, cámara y
                  micrófono para evitar inconvenientes durante la audiencia.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No tener los documentos</h3>

                <p>
                  Contar con la documentación necesaria permite responder
                  oportunamente a las preguntas del conciliador.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>No escuchar a la otra parte</h3>

                <p>
                  Mantener una actitud abierta al diálogo aumenta
                  significativamente las posibilidades de llegar a un acuerdo
                  satisfactorio.
                </p>
              </div>
            </div>
          </div>

          {/* DIFERENCIAS */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Diferencias entre una conciliación familiar virtual y una
              presencial
            </h2>

            <p className={styles.paragraph}>
              Ambas modalidades tienen el mismo objetivo: ayudar a las partes a
              resolver sus diferencias mediante el diálogo y con el
              acompañamiento de un conciliador. La principal diferencia radica
              en la forma en que se desarrolla la audiencia.
            </p>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>Conciliación virtual</h3>

                <p>
                  Se realiza mediante plataformas tecnológicas y permite
                  participar desde cualquier lugar con acceso a internet.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Conciliación presencial</h3>

                <p>
                  Requiere que las partes asistan físicamente al centro de
                  conciliación en la fecha y hora programadas.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>Validez jurídica</h3>

                <p>
                  Tanto la modalidad virtual como la presencial producen
                  acuerdos con la misma fuerza legal cuando cumplen los
                  requisitos establecidos por la legislación colombiana.
                </p>
              </div>
            </div>
          </div>

          {/* DESPUÉS DEL ACTA */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              ¿Qué ocurre después de firmar el acta de conciliación?
            </h2>

            <p className={styles.paragraph}>
              Una vez las partes alcanzan un acuerdo y firman el acta de
              conciliación, nacen obligaciones que deben cumplirse conforme a lo
              pactado. El documento constituye una herramienta jurídica que
              brinda seguridad a las personas involucradas y establece
              claramente los compromisos asumidos.
            </p>

            <p className={styles.paragraph}>
              Si posteriormente alguna de las partes incumple los acuerdos, el
              acta puede utilizarse para ejercer las acciones legales que
              correspondan conforme a la normativa colombiana.
            </p>

            <div className={styles.highlightBox}>
              <p>
                Por ello es recomendable revisar cuidadosamente cada compromiso
                antes de firmar el acta y asegurarse de que todas las
                condiciones acordadas sean claras y posibles de cumplir.
              </p>
            </div>
          </div>

          {/* PREGUNTAS FRECUENTES */}
          <div className={styles.contentSection}>
            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre la conciliación familiar virtual en
              Colombia
            </h2>

            <div className={styles.cardsGrid}>
              <div className={styles.infoCard}>
                <h3>
                  ¿Puedo participar en la audiencia si vivo fuera de Colombia?
                </h3>

                <p>
                  Sí. Siempre que el trámite pueda adelantarse de forma virtual
                  y la entidad lo autorice, las personas que residen en el
                  exterior pueden conectarse desde cualquier país con acceso a
                  internet.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿Qué pasa si una de las partes no se presenta a la audiencia
                  virtual?
                </h3>

                <p>
                  El conciliador dejará constancia de la inasistencia y el
                  trámite continuará conforme a la normativa aplicable.
                  Dependiendo del caso, podrá programarse una nueva audiencia o
                  expedirse la constancia correspondiente.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿Es necesario tener conocimientos tecnológicos para
                  participar?
                </h3>

                <p>
                  No. Generalmente basta con contar con un computador, celular o
                  tableta con cámara, conexión estable a internet y seguir las
                  instrucciones enviadas por el centro de conciliación.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿La conciliación virtual sirve para fijar una cuota
                  alimentaria?
                </h3>

                <p>
                  Sí. Siempre que el asunto sea conciliable, las partes pueden
                  llegar a acuerdos sobre cuota alimentaria, forma de pago,
                  fechas y demás obligaciones relacionadas con los alimentos.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>¿Cuánto tiempo tarda una conciliación familiar virtual?</h3>

                <p>
                  La duración depende de la complejidad del conflicto y de la
                  disposición de las partes para llegar a un acuerdo. En muchos
                  casos la audiencia se desarrolla en una sola sesión.
                </p>
              </div>

              <div className={styles.infoCard}>
                <h3>
                  ¿El acta firmada virtualmente tiene la misma validez que una
                  presencial?
                </h3>

                <p>
                  Sí. Cuando la conciliación cumple los requisitos legales, el
                  acta tiene la misma fuerza jurídica que la suscrita en una
                  audiencia presencial.
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
