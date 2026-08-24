"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosMascotasVecinosContent() {
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
            Conflictos por mascotas entre vecinos en Colombia: qué hacer y cómo
            resolverlos
          </h1>

          <p className={styles.heroText}>
            Las mascotas hacen parte de la vida cotidiana de muchas familias.
            Sin embargo, cuando existen ladridos constantes, daños, molestias en
            zonas compartidas o desacuerdos sobre la forma en que un animal es
            manejado, pueden aparecer conflictos entre vecinos.
          </p>

          <p className={styles.heroText}>
            Estas situaciones no siempre tienen que terminar en una discusión
            permanente. Dependiendo del caso, el diálogo, el cumplimiento de las
            reglas de convivencia y mecanismos como la conciliación pueden
            ayudar a las partes a buscar una solución antes de que el problema
            escale.
          </p>
        </div>

        {/* CUANDO APARECE EL CONFLICTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué las mascotas pueden generar conflictos entre vecinos?
          </h2>

          <p className={styles.paragraph}>
            Tener una mascota implica convivencia no solo dentro de una
            vivienda, sino también con las personas que viven alrededor. En
            algunos casos, una conducta que para el propietario puede parecer
            normal termina afectando el descanso, la tranquilidad o el uso de
            determinados espacios por parte de otros residentes.
          </p>

          <p className={styles.paragraph}>
            El conflicto puede surgir por una situación puntual o por molestias
            que se repiten durante semanas o meses. Lo importante es identificar
            con claridad <strong>qué está generando el desacuerdo</strong>, ya
            que no es lo mismo una discusión por ladridos frecuentes que un
            conflicto relacionado con daños o con el uso de zonas comunes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En muchos conflictos de convivencia, el problema no es únicamente
              la mascota. También influyen la falta de comunicación, las
              diferencias entre vecinos y la ausencia de acuerdos claros sobre
              cómo manejar una situación que afecta a varias personas.
            </p>
          </div>
        </div>

        {/* CONFLICTOS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas más comunes por mascotas entre vecinos
          </h2>

          <p className={styles.paragraph}>
            Aunque cada situación es diferente, algunos conflictos aparecen con
            mayor frecuencia en edificios, conjuntos residenciales y barrios:
          </p>

          <ul className={styles.list}>
            <li>
              Ladridos frecuentes que afectan el descanso de otros vecinos.
            </li>
            <li>
              Ruidos constantes generados por una mascota dentro de la vivienda.
            </li>
            <li>Daños causados a personas, bienes o espacios compartidos.</li>
            <li>Discusiones por el uso de zonas comunes.</li>
            <li>
              Problemas relacionados con la limpieza de espacios compartidos.
            </li>
            <li>
              Desacuerdos sobre la forma de manejar o controlar una mascota.
            </li>
            <li>
              Molestias generadas durante paseos o desplazamientos dentro del
              conjunto.
            </li>
            <li>
              Conflictos que comienzan con una queja puntual y terminan
              afectando la convivencia general.
            </li>
          </ul>
        </div>

        {/* QUE HACER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si tienes un problema con un vecino por una mascota?
          </h2>

          <p className={styles.paragraph}>
            Cuando surge una molestia, la reacción inicial puede marcar la
            diferencia. Una conversación agresiva puede convertir un problema
            puntual en un conflicto prolongado. Siempre que las circunstancias
            permitan el diálogo, puede ser útil intentar entender primero qué
            está ocurriendo y cuál es la preocupación de cada parte.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Identifica la situación concreta</h3>
              <p>
                Determina qué está generando el conflicto: ladridos, daños,
                limpieza, uso de zonas comunes u otra situación específica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intenta dialogar</h3>
              <p>
                Una conversación respetuosa puede permitir aclarar la situación
                y encontrar soluciones antes de que la relación entre vecinos se
                deteriore.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Revisa las reglas aplicables</h3>
              <p>
                En una propiedad horizontal puede ser importante conocer el
                reglamento y las normas internas relacionadas con la
                convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Busca una solución concreta</h3>
              <p>
                Más que mantener una discusión general, es útil establecer qué
                medidas podrían ayudar a reducir o solucionar la molestia.
              </p>
            </div>
          </div>
        </div>

        {/* LADRADOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa cuando los ladridos de un perro generan molestias?
          </h2>

          <p className={styles.paragraph}>
            Los ladridos son una de las causas más comunes de conflicto entre
            vecinos con mascotas. Sin embargo, antes de convertir la situación
            en una confrontación, puede ser útil analizar cuándo ocurren, con
            qué frecuencia se presentan y cómo están afectando a las personas
            que viven cerca.
          </p>

          <p className={styles.paragraph}>
            En algunos casos, el propietario puede no ser consciente de lo que
            ocurre mientras está fuera de casa. En otros, pueden existir
            situaciones repetitivas que requieren buscar medidas concretas para
            reducir las molestias.
          </p>

          <p className={styles.paragraph}>
            Una solución puede requerir compromisos relacionados con el manejo
            de la mascota, cambios en determinadas rutinas o acuerdos entre las
            personas involucradas, dependiendo de las circunstancias del caso.
          </p>
        </div>

        {/* PROPIEDAD HORIZONTAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Mascotas y convivencia en propiedad horizontal
          </h2>

          <p className={styles.paragraph}>
            Cuando el conflicto ocurre dentro de un edificio o conjunto
            residencial, además de la relación directa entre vecinos pueden
            existir reglas internas relacionadas con la convivencia y el uso de
            las zonas comunes.
          </p>

          <p className={styles.paragraph}>
            La administración puede tener un papel relacionado con la aplicación
            del reglamento de propiedad horizontal y las normas internas. Sin
            embargo, la forma en que puede intervenir dependerá de los hechos y
            de las reglas aplicables a cada situación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Conocer el reglamento de propiedad horizontal puede ayudar a
              entender cuáles son las reglas aplicables y evitar que el
              conflicto se base únicamente en interpretaciones personales de
              cada vecino.
            </p>
          </div>
        </div>

        {/* DAÑOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si una mascota causa daños?
          </h2>

          <p className={styles.paragraph}>
            Otra situación frecuente ocurre cuando una mascota causa daños a
            bienes o genera una afectación que da lugar a una reclamación entre
            vecinos.
          </p>

          <p className={styles.paragraph}>
            En estos casos, las personas involucradas pueden intentar dialogar
            sobre lo ocurrido y buscar una solución. Dependiendo de las
            circunstancias, una de las alternativas puede consistir en discutir
            la forma de reparar o compensar el daño.
          </p>

          <p className={styles.paragraph}>
            La manera adecuada de abordar el conflicto dependerá de los hechos
            concretos. Por eso, cuando existen diferencias importantes sobre lo
            ocurrido o sobre las posibles consecuencias, resulta recomendable
            analizar el caso antes de asumir una solución determinada.
          </p>
        </div>

        {/* CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede resolver un conflicto por mascotas mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de las circunstancias y de la naturaleza del conflicto,
            la conciliación puede ser una alternativa para que las personas
            involucradas se sienten a dialogar y exploren posibles acuerdos.
          </p>

          <p className={styles.paragraph}>
            Este espacio puede resultar útil cuando las conversaciones directas
            no han funcionado o cuando la relación entre vecinos se ha
            deteriorado hasta el punto de que cualquier intento de diálogo
            termina en una nueva discusión.
          </p>

          <p className={styles.paragraph}>
            El objetivo es analizar el problema concreto y buscar compromisos
            que permitan mejorar la convivencia, siempre que el asunto pueda ser
            tratado mediante este mecanismo.
          </p>
        </div>

        {/* POSIBLES ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipo de acuerdos pueden buscar los vecinos?
          </h2>

          <p className={styles.paragraph}>
            No existe un acuerdo estándar para todos los conflictos relacionados
            con mascotas. Las soluciones deben responder a la situación real que
            está generando el problema.
          </p>

          <ul className={styles.list}>
            <li>Compromisos para reducir molestias ocasionadas por ruidos.</li>
            <li>
              Acuerdos relacionados con horarios o determinadas actividades.
            </li>
            <li>Medidas para prevenir nuevos conflictos en zonas comunes.</li>
            <li>Compromisos relacionados con limpieza y manejo de espacios.</li>
            <li>Acuerdos sobre la reparación de daños, cuando corresponda.</li>
            <li>Formas de comunicación para manejar futuras situaciones.</li>
          </ul>

          <p className={styles.paragraph}>
            Entre más claro sea un posible compromiso, más fácil será entender
            qué se espera de cada parte y evitar que el conflicto vuelva a
            surgir por interpretaciones diferentes.
          </p>
        </div>

        {/* CUANDO ES UTIL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser útil buscar una conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>El problema continúa</h3>
              <p>
                Cuando la molestia se repite y las conversaciones anteriores no
                han permitido encontrar una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>La relación entre vecinos empeoró</h3>
              <p>
                Cuando ya existe tensión y resulta difícil mantener una
                conversación directa sobre el problema.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se necesitan compromisos claros</h3>
              <p>
                Cuando las partes quieren establecer medidas concretas para
                evitar que la situación continúe generando conflictos.
              </p>
            </div>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si los vecinos no logran llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con un acuerdo. Puede ocurrir que
            una de las personas no quiera participar, que las diferencias sean
            demasiado importantes o que la situación requiera evaluar otras
            alternativas.
          </p>

          <p className={styles.paragraph}>
            En ese caso, las opciones dependerán de las circunstancias
            concretas, del tipo de afectación y de las normas aplicables. Por
            esta razón, es importante analizar cada situación de manera
            individual.
          </p>
        </div>

        {/* RECOMENDACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo evitar que un problema por mascotas se convierta en un
            conflicto mayor
          </h2>

          <p className={styles.paragraph}>
            Muchas disputas entre vecinos comienzan con una molestia pequeña y
            terminan convirtiéndose en un problema de convivencia mucho más
            complejo. Actuar oportunamente puede evitar que las diferencias se
            acumulen.
          </p>

          <ul className={styles.list}>
            <li>
              Habla sobre el problema antes de que la molestia se acumule.
            </li>
            <li>
              Evita ataques personales y céntrate en la situación concreta.
            </li>
            <li>Escucha la posición de la otra persona.</li>
            <li>Revisa las reglas de convivencia aplicables.</li>
            <li>Busca soluciones que puedan cumplirse de manera realista.</li>
            <li>
              Considera mecanismos de diálogo cuando la comunicación directa ya
              no funciona.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Tener una mascota y mantener una buena relación con los vecinos no
              son situaciones incompatibles. En muchos casos, el conflicto puede
              reducirse cuando las personas logran identificar el problema real
              y establecer compromisos claros para manejarlo.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conflictos por mascotas entre vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Qué puedo hacer si tengo problemas con un vecino por mi
                mascota?
              </h3>
              <p>
                Puedes identificar primero qué está generando el conflicto e
                intentar una conversación respetuosa. Dependiendo del caso,
                también pueden revisarse las reglas aplicables y explorar otras
                alternativas para buscar una solución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar un conflicto por mascotas?</h3>
              <p>
                Dependiendo de las circunstancias del caso, la conciliación
                puede ser una alternativa para que las partes dialoguen y
                busquen acuerdos relacionados con la convivencia o con el
                problema que dio origen al conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si un perro genera molestias constantes?</h3>
              <p>
                Puede ser útil identificar el tipo de molestia, su frecuencia y
                las circunstancias en que ocurre para intentar encontrar medidas
                concretas que ayuden a reducir el problema.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si una mascota causa daños?</h3>
              <p>
                Las personas involucradas pueden intentar dialogar y buscar una
                solución sobre la forma de manejar la situación. Las
                alternativas dependerán de los hechos concretos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La administración puede intervenir en estos conflictos?</h3>
              <p>
                Dependiendo del reglamento y de las circunstancias, la
                administración puede tener un papel relacionado con las normas
                internas y la convivencia dentro de la propiedad horizontal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué acuerdos pueden lograr los vecinos?</h3>
              <p>
                Dependiendo del caso, pueden explorarse compromisos relacionados
                con manejo de la mascota, prevención de molestias, reparación de
                daños u otras medidas concretas de convivencia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto con un vecino relacionado con una mascota?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles para buscar una solución y
            evaluar si la conciliación puede ser una opción adecuada según las
            circunstancias de tu caso.
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
