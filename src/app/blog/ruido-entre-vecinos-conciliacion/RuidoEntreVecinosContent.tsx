"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function RuidoEntreVecinosContent() {
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
            Conflictos cotidianos y convivencia
          </span>

          <h1 className={styles.title}>
            Ruido entre vecinos en Colombia: qué hacer y cómo resolver el
            conflicto
          </h1>

          <p className={styles.heroText}>
            Vivir cerca de otras personas implica aceptar ciertos sonidos
            propios de la vida cotidiana. Sin embargo, cuando la música, las
            fiestas, los ladridos, las obras, los equipos o cualquier otra
            actividad comienza a afectar constantemente el descanso y la
            tranquilidad, puede aparecer un verdadero conflicto entre vecinos.
          </p>

          <p className={styles.heroText}>
            Si estás atravesando una situación así, probablemente te hayas
            preguntado qué puedes hacer, a quién debes acudir o si es posible
            resolver el problema sin que la discusión termine escalando. En
            muchos casos, antes de llegar a instancias más complejas, existen
            alternativas para intentar dialogar y construir una solución entre
            las partes.
          </p>
        </div>

        {/* CUANDO EL RUIDO SE CONVIERTE EN CONFLICTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo el ruido de un vecino se convierte en un problema de
            convivencia?
          </h2>

          <p className={styles.paragraph}>
            No todos los sonidos que provienen de otro apartamento, casa o
            vivienda representan necesariamente una situación que deba
            convertirse en un conflicto. En cualquier comunidad existen ruidos
            normales relacionados con la vida diaria: conversaciones, niños,
            electrodomésticos, actividades domésticas o el tránsito habitual de
            las personas.
          </p>

          <p className={styles.paragraph}>
            El problema suele aparecer cuando las molestias son constantes,
            ocurren en horarios que afectan el descanso, se repiten después de
            haber intentado solucionarlas o alcanzan un nivel que hace difícil
            desarrollar normalmente las actividades dentro de la vivienda.
          </p>

          <p className={styles.paragraph}>
            Cada situación tiene sus propias circunstancias. Por eso, antes de
            tomar una decisión, conviene identificar{" "}
            <strong>
              qué tipo de ruido se está presentando, con qué frecuencia ocurre y
              cómo está afectando la convivencia
            </strong>
            .
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un problema por ruido no siempre comienza como un asunto jurídico.
              Muchas veces empieza con una situación cotidiana que, al no
              resolverse oportunamente, termina generando discusiones,
              enfrentamientos y una convivencia cada vez más difícil.
            </p>
          </div>
        </div>

        {/* RUIDOS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas por ruido más comunes entre vecinos
          </h2>

          <p className={styles.paragraph}>
            Los conflictos relacionados con el ruido pueden tener diferentes
            orígenes. Algunos de los casos más frecuentes son:
          </p>

          <ul className={styles.list}>
            <li>
              Música o equipos de sonido a un volumen que genera molestias.
            </li>
            <li>
              Reuniones, fiestas o celebraciones frecuentes que afectan el
              descanso de otros residentes.
            </li>
            <li>
              Ladridos constantes u otros ruidos relacionados con mascotas.
            </li>
            <li>
              Obras, remodelaciones o reparaciones realizadas en horarios que
              generan inconformidad.
            </li>
            <li>
              Golpes, arrastre de muebles o actividades repetitivas que se
              transmiten constantemente entre viviendas.
            </li>
            <li>
              Uso de instrumentos musicales u otros equipos que producen ruido
              de manera frecuente.
            </li>
            <li>
              Actividades comerciales o profesionales realizadas dentro de una
              vivienda que terminan afectando a los vecinos.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Aunque dos situaciones puedan parecer similares, la manera de
            abordarlas puede cambiar dependiendo del lugar donde ocurre el
            conflicto, las personas involucradas y las normas o acuerdos que
            resulten aplicables.
          </p>
        </div>

        {/* QUE HACER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si un vecino hace mucho ruido?
          </h2>

          <p className={styles.paragraph}>
            Cuando existe una molestia constante, es comprensible querer
            encontrar una solución inmediata. Sin embargo, reaccionar en medio
            de una discusión o responder con más ruido generalmente empeora el
            problema.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Identifica el problema concreto</h3>

              <p>
                Intenta determinar qué está generando la molestia, cuándo ocurre
                y con qué frecuencia. Entre más clara sea la situación, más
                fácil será explicarla y buscar una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Intenta dialogar</h3>

              <p>
                Cuando las circunstancias lo permitan, una conversación
                respetuosa puede ser el primer paso. En ocasiones, la otra
                persona no conoce el nivel de afectación que está generando.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Revisa las reglas aplicables</h3>

              <p>
                Si el conflicto ocurre dentro de una propiedad horizontal, puede
                ser importante conocer el reglamento y las normas internas
                relacionadas con la convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Busca una alternativa de solución</h3>

              <p>
                Cuando el diálogo directo no funciona, las partes pueden evaluar
                mecanismos que permitan discutir el problema con mayor
                organización y buscar posibles acuerdos.
              </p>
            </div>
          </div>
        </div>

        {/* ADMINISTRACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué papel puede tener la administración de un conjunto o edificio?
          </h2>

          <p className={styles.paragraph}>
            Cuando el conflicto ocurre dentro de un edificio o conjunto
            residencial, la administración puede tener un papel importante
            dependiendo de la situación y de las reglas de la propiedad
            horizontal.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, puede existir un reglamento interno que establezca
            disposiciones relacionadas con horarios, uso de espacios,
            realización de reuniones, obras o comportamientos que puedan afectar
            la convivencia.
          </p>

          <p className={styles.paragraph}>
            Esto no significa que todos los conflictos deban resolverse
            exclusivamente a través de la administración. Hay situaciones en las
            que el problema continúa entre las personas involucradas y resulta
            necesario explorar otras formas de diálogo y solución.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Conocer las reglas de convivencia aplicables puede ayudar a que la
              conversación se centre en el problema concreto y no únicamente en
              percepciones o discusiones personales entre vecinos.
            </p>
          </div>
        </div>

        {/* CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede resolver un conflicto por ruido mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de las circunstancias del caso y de la naturaleza del
            conflicto, la conciliación puede ser una alternativa para que las
            personas involucradas se sienten a dialogar y exploren posibles
            soluciones.
          </p>

          <p className={styles.paragraph}>
            A diferencia de una discusión informal, un espacio de conciliación
            busca que las partes puedan explicar su posición, identificar qué
            está generando el conflicto y evaluar compromisos que resulten
            razonables para ambas.
          </p>

          <p className={styles.paragraph}>
            El objetivo no debería ser simplemente determinar quién tiene la
            razón, sino intentar encontrar una salida concreta que permita
            reducir o eliminar la situación que está afectando la convivencia,
            siempre que el asunto sea susceptible de ser tratado mediante este
            mecanismo.
          </p>
        </div>

        {/* ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse en un conflicto entre vecinos por
            ruido?
          </h2>

          <p className={styles.paragraph}>
            Cada conflicto es diferente, por lo que no existe una fórmula única.
            Sin embargo, dependiendo de la situación, las partes pueden explorar
            compromisos relacionados con aspectos como:
          </p>

          <ul className={styles.list}>
            <li>Establecimiento de horarios para determinadas actividades.</li>
            <li>Compromisos sobre el volumen de equipos de sonido o música.</li>
            <li>
              Organización de reuniones o celebraciones de manera que reduzcan
              las molestias.
            </li>
            <li>
              Horarios para realizar obras, reparaciones o remodelaciones.
            </li>
            <li>
              Medidas relacionadas con mascotas cuando estas generan molestias
              reiteradas.
            </li>
            <li>
              Formas de comunicación entre las partes para manejar futuras
              situaciones antes de que vuelvan a convertirse en una discusión.
            </li>
          </ul>

          <p className={styles.paragraph}>
            Lo importante es que un posible acuerdo responda al problema real.
            Un compromiso demasiado general puede ser difícil de cumplir o
            interpretar. En cambio, establecer con claridad qué hará cada parte
            puede ayudar a evitar que el mismo conflicto reaparezca poco tiempo
            después.
          </p>
        </div>

        {/* CUANDO CONVIENE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser útil intentar una conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>El problema se repite</h3>

              <p>
                Cuando la molestia continúa y las conversaciones anteriores no
                han permitido llegar a una solución clara.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>La relación entre vecinos se ha deteriorado</h3>

              <p>
                Si cada conversación termina en una discusión, contar con un
                espacio organizado para dialogar puede facilitar el
                acercamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se necesitan compromisos concretos</h3>

              <p>
                Cuando las partes quieren dejar claramente establecidos los
                compromisos relacionados con la situación que genera el
                conflicto.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no es posible llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con un acuerdo. Puede ocurrir que
            una de las partes no quiera participar, que existan diferencias que
            no sea posible superar o que las circunstancias requieran acudir a
            otras autoridades o instancias.
          </p>

          <p className={styles.paragraph}>
            En ese escenario, la alternativa adecuada dependerá de los hechos
            concretos, del lugar donde se presenta la situación y de las normas
            aplicables. Por eso, es importante evitar asumir que todos los
            conflictos por ruido se resuelven exactamente de la misma manera.
          </p>

          <p className={styles.paragraph}>
            Analizar el caso concreto permite determinar qué opciones existen y
            cuál puede ser el camino más adecuado para intentar proteger la
            convivencia y resolver el problema.
          </p>
        </div>

        {/* RECOMENDACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Antes de que el problema entre vecinos escale
          </h2>

          <p className={styles.paragraph}>
            Los conflictos por ruido pueden durar meses e incluso años cuando
            las personas dejan de hablarse y cada nueva molestia se interpreta
            como una provocación. Por eso, cuando sea posible, resulta útil
            intentar abordar el problema antes de que la relación se deteriore
            por completo.
          </p>

          <ul className={styles.list}>
            <li>Evita responder a una molestia generando otra.</li>
            <li>
              Procura comunicar claramente cuál es el problema y cómo te está
              afectando.
            </li>
            <li>
              Concéntrate en hechos concretos en lugar de convertir la
              conversación en ataques personales.
            </li>
            <li>
              Revisa si existen normas internas relacionadas con la situación.
            </li>
            <li>
              Considera alternativas de diálogo cuando el problema continúa.
            </li>
            <li>
              Si el conflicto se vuelve más complejo, busca orientación sobre
              las opciones disponibles según tu caso.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Resolver un conflicto de convivencia no siempre significa que los
              vecinos tengan que convertirse en amigos. A veces, una buena
              solución consiste simplemente en establecer reglas y compromisos
              claros que permitan a cada persona continuar con su vida sin
              afectar innecesariamente a la otra.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre ruido entre vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué puedo hacer si mi vecino hace mucho ruido?</h3>

              <p>
                Puedes intentar inicialmente una comunicación respetuosa para
                explicar la situación. Si el problema continúa, es posible
                evaluar otras alternativas, como revisar las reglas aplicables o
                explorar mecanismos de diálogo y conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar un conflicto por ruido?</h3>

              <p>
                Dependiendo de las circunstancias y de la naturaleza del
                conflicto, la conciliación puede ser una alternativa para que
                las partes dialoguen y busquen compromisos relacionados con la
                convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué acuerdos pueden lograrse por problemas de ruido?</h3>

              <p>
                Los acuerdos pueden relacionarse con horarios, actividades,
                música, reuniones, obras u otras situaciones concretas que estén
                generando la molestia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el vecino no quiere llegar a un acuerdo?</h3>

              <p>
                Si no es posible alcanzar un acuerdo, pueden evaluarse otras
                alternativas o acudirse a las autoridades e instancias
                competentes según las circunstancias particulares del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La administración puede intervenir en problemas por ruido?
              </h3>

              <p>
                Dependiendo de la situación y del reglamento aplicable, la
                administración puede tener un papel relacionado con las normas
                internas y la convivencia dentro de la propiedad horizontal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Es mejor intentar un acuerdo antes de iniciar un proceso?
              </h3>

              <p>
                En muchos conflictos de convivencia puede ser útil intentar el
                diálogo o explorar mecanismos de solución antes de escalar el
                problema. La conveniencia dependerá de cada caso.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por ruido con un vecino?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles para buscar una solución al
            conflicto y evaluar si la conciliación puede ser una opción adecuada
            según las circunstancias de tu caso.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
