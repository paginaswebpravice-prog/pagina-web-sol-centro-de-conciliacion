"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionLaboralVsDemandaContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Guía práctica de derecho laboral en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación laboral vs demanda laboral en Colombia: diferencias,
            ventajas y cuál conviene según tu caso
          </h1>

          <p className={styles.heroText}>
            Si tienes un conflicto entre trabajador y empleador, es normal
            preguntarse si vale la pena intentar una conciliación laboral o si
            lo mejor es presentar directamente una demanda ante un juez. La
            respuesta depende del tipo de conflicto, de la disposición de las
            partes para negociar y de los resultados que esperas obtener.
          </p>

          <p className={styles.heroText}>
            En esta guía te explicamos las principales diferencias entre ambos
            mecanismos, cuánto pueden tardar, qué costos implican, cuándo es
            recomendable acudir primero a una conciliación y en qué situaciones
            una demanda laboral puede convertirse en la mejor alternativa para
            proteger tus derechos.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación laboral y cuándo puede ayudarte a evitar un
            proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            La conciliación laboral es un mecanismo de solución de conflictos
            mediante el cual trabajador y empleador buscan llegar a un acuerdo
            con la intervención de un conciliador imparcial. Su finalidad es
            resolver la controversia de manera rápida, evitando un proceso
            judicial cuando existe voluntad de diálogo.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia pueden discutirse asuntos como salarios
            pendientes, prestaciones sociales, liquidaciones, indemnizaciones,
            vacaciones, horas extras y otras obligaciones derivadas de la
            relación laboral. Si ambas partes llegan a un acuerdo, este queda
            consignado en un acta con plenos efectos jurídicos.
          </p>
        </div>

        {/* QUE OCURRE CUANDO ES NECESARIO PRESENTAR UNA DEMANDA LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre cuando es necesario presentar una demanda laboral?
          </h2>

          <p className={styles.paragraph}>
            La demanda laboral es el proceso mediante el cual un trabajador o,
            en determinados casos, un empleador acude ante un juez para que sea
            la autoridad judicial quien resuelva el conflicto cuando no fue
            posible llegar a un acuerdo previo.
          </p>

          <p className={styles.paragraph}>
            A diferencia de la conciliación, aquí la decisión final no depende
            de la voluntad de las partes, sino del análisis que realice el juez
            sobre las pruebas, los documentos y los argumentos presentados
            durante el proceso.
          </p>
        </div>

        {/* PRINCIPALES DIFERENCIAS ENTRE CONCILIACION Y DEMANDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación laboral vs demanda laboral: diferencias más importantes
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Tiempo de solución</h3>

              <p>
                Una conciliación puede resolverse en poco tiempo si existe
                voluntad de acuerdo, mientras que un proceso judicial puede
                extenderse durante meses o incluso años dependiendo de la
                complejidad del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Participación de las partes</h3>

              <p>
                En la conciliación las partes construyen conjuntamente la
                solución. En una demanda será el juez quien tome la decisión
                definitiva.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Costos y desgaste</h3>

              <p>
                La conciliación suele implicar menos gastos, menos trámites y un
                menor desgaste emocional para trabajador y empleador.
              </p>
            </div>
          </div>
        </div>

        {/* EN QUE CASOS ES RECOMENDABLE INTENTAR PRIMERO UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos es recomendable intentar primero una conciliación
            laboral?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos laborales requieren llegar inmediatamente a
            un juez. Cuando ambas partes están dispuestas a dialogar, la
            conciliación suele convertirse en la alternativa más rápida y
            eficiente para encontrar una solución satisfactoria.
          </p>

          <ul className={styles.list}>
            <li>Liquidaciones laborales discutidas.</li>
            <li>Pago de salarios pendientes.</li>
            <li>Prestaciones sociales.</li>
            <li>Horas extras.</li>
            <li>Vacaciones no compensadas.</li>
            <li>Indemnizaciones negociables.</li>
            <li>Acuerdos para terminar una relación laboral.</li>
          </ul>
        </div>

        {/* VENTAJAS DE LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación laboral
          </h2>

          <ul className={styles.list}>
            <li>Resolución más rápida del conflicto.</li>
            <li>Menor desgaste emocional.</li>
            <li>Reducción de costos legales.</li>
            <li>Posibilidad de acuerdos flexibles.</li>
            <li>Protección de relaciones laborales.</li>
            <li>Validez jurídica de los acuerdos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación laboral suele ser la primera alternativa
              recomendada cuando existe disposición de diálogo entre trabajador
              y empleador.
            </p>
          </div>
        </div>

        {/* CUANDO CONVIENE PRESENTAR UNA DEMANDA LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene presentar una demanda?
          </h2>

          <p className={styles.paragraph}>
            La demanda laboral puede ser necesaria cuando el empleador niega los
            derechos reclamados, existe incumplimiento grave de obligaciones
            laborales o no se logra ningún acuerdo durante la conciliación.
          </p>

          <p className={styles.paragraph}>
            También es una opción cuando la controversia requiere una decisión
            judicial para garantizar el cumplimiento de los derechos del
            trabajador.
          </p>
        </div>

        {/* CUANDO ES MEJOR PRESENTAR UNA DEMANDA LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es mejor presentar una demanda laboral?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación ofrece numerosas ventajas, existen
            situaciones en las que acudir directamente ante un juez resulta
            necesario para proteger los derechos del trabajador o del empleador.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Generalmente la demanda se recomienda cuando la otra parte se
              niega a negociar, incumple los acuerdos alcanzados o existe una
              controversia jurídica que únicamente puede ser resuelta mediante
              una sentencia judicial.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES ANTES DE INICIAR UNA CONCILIACION O UNA DEMANDA LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes antes de iniciar una conciliación o una demanda
            laboral
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No reunir las pruebas</h3>

              <p>
                Guardar contratos, desprendibles de nómina, mensajes y demás
                documentos puede ser determinante para demostrar los hechos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Algunos derechos laborales tienen términos legales para ser
                reclamados. Dejar pasar el tiempo puede afectar las
                posibilidades de éxito.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No recibir orientación jurídica</h3>

              <p>
                Conocer las alternativas disponibles ayuda a tomar decisiones
                informadas y evita iniciar procesos innecesarios.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS QUE NORMALMENTE SE UTILIZAN EN UNA CONCILIACION O UNA DEMANDA LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que normalmente se utilizan en una conciliación o demanda
            laboral
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, es recomendable contar con la mayor
            cantidad posible de documentos que permitan acreditar la relación
            laboral y los hechos discutidos.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Desprendibles de nómina.</li>
            <li>Liquidación.</li>
            <li>Comprobantes de pago.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes relacionados con el conflicto.</li>
            <li>Certificaciones laborales.</li>
          </ul>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes de conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Siempre debo intentar una conciliación antes de demandar?
              </h3>

              <p>
                Depende del tipo de conflicto y de las normas aplicables al
                caso. En muchas situaciones la conciliación puede ser una
                alternativa útil antes de acudir a la vía judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué ocurre si durante la conciliación no se llega a un acuerdo?
              </h3>

              <p>
                Si no existe consenso entre las partes, el conflicto puede
                continuar mediante el proceso judicial correspondiente ante la
                jurisdicción laboral.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿El acta de conciliación tiene la misma fuerza que una
                sentencia?
              </h3>

              <p>
                El acta de conciliación produce efectos jurídicos obligatorios
                para las partes y puede exigirse legalmente en caso de
                incumplimiento, conforme a la legislación aplicable.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>¿Tienes un conflicto laboral?</h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación laboral, acuerdos entre
            trabajador y empleador, liquidaciones, salarios e indemnizaciones en
            Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
