"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConflictosArrendamientoContent() {
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
            Guía sobre conflictos de arrendamiento en Colombia
          </span>

          <h1 className={styles.title}>
            Conflictos entre arrendador y arrendatario en Colombia: cómo
            resolverlos sin llegar a un juicio
          </h1>

          <p className={styles.heroText}>
            Los conflictos entre arrendadores y arrendatarios son una de las
            causas más frecuentes de consultas jurídicas en Colombia. Retrasos
            en el pago del canon, incumplimiento del contrato, daños al
            inmueble, problemas con la entrega del bien o desacuerdos sobre
            reparaciones pueden afectar tanto al propietario como al inquilino y
            generar procesos largos si no se gestionan oportunamente.
          </p>

          <p className={styles.heroText}>
            Antes de acudir a un proceso judicial, muchas de estas diferencias
            pueden resolverse mediante un proceso de conciliación. Este
            mecanismo permite que las partes dialoguen con el acompañamiento de
            un conciliador imparcial, encuentren soluciones mutuamente
            beneficiosas y suscriban acuerdos con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cuáles son los conflictos más comunes en
            los contratos de arrendamiento, cuándo es recomendable acudir a
            conciliación, qué documentos pueden ser necesarios y qué
            alternativas existen cuando no es posible llegar a un acuerdo.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los conflictos entre arrendador y arrendatario?
          </h2>

          <p className={styles.paragraph}>
            Los conflictos de arrendamiento son desacuerdos que surgen entre el
            propietario del inmueble (arrendador) y quien lo ocupa mediante un
            contrato de arrendamiento (arrendatario). Generalmente aparecen
            cuando alguna de las partes considera que la otra ha incumplido las
            obligaciones pactadas o las establecidas por la legislación
            colombiana.
          </p>

          <p className={styles.paragraph}>
            Estos conflictos pueden relacionarse con el pago del canon de
            arrendamiento, el estado del inmueble, la terminación del contrato,
            la devolución de depósitos, reparaciones, servicios públicos o
            cualquier otra obligación derivada de la relación contractual.
          </p>

          <p className={styles.paragraph}>
            Aunque muchas personas creen que la única alternativa es acudir a un
            juez, en realidad numerosos conflictos pueden solucionarse mediante
            conciliación, logrando acuerdos más rápidos, económicos y
            satisfactorios para ambas partes.
          </p>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos más frecuentes entre arrendadores y arrendatarios
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento en el pago del canon de arrendamiento.</li>
            <li>
              Negativa del arrendatario a entregar el inmueble al finalizar el
              contrato.
            </li>
            <li>Daños ocasionados al inmueble durante la ocupación.</li>
            <li>
              Desacuerdos sobre quién debe asumir determinadas reparaciones.
            </li>
            <li>Incumplimiento de las cláusulas pactadas en el contrato.</li>
            <li>
              Problemas relacionados con servicios públicos o administración.
            </li>
            <li>
              Terminación anticipada del contrato por cualquiera de las partes.
            </li>
            <li>
              Incumplimiento en la devolución de depósitos o garantías cuando
              existan.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos de estos casos, una audiencia de conciliación permite
              construir acuerdos sobre pagos pendientes, entrega del inmueble,
              cronogramas de desocupación, reparaciones o compensaciones
              económicas, evitando procesos judiciales más extensos.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué resolver un conflicto de arrendamiento mediante
            conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solución más rápida</h3>

              <p>
                En muchos casos es posible alcanzar acuerdos en mucho menos
                tiempo que un proceso judicial relacionado con un contrato de
                arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                La conciliación suele representar menores costos económicos para
                ambas partes al evitar litigios prolongados y múltiples
                actuaciones judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos con efectos legales</h3>

              <p>
                Cuando se alcanza un acuerdo, este queda consignado en un acta
                de conciliación que produce efectos jurídicos y puede ser
                exigible conforme a la ley.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se resuelven estos conflictos?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación autorizado en
            Colombia para exponer sus diferencias y buscar una solución
            amigable.
          </p>

          <p className={styles.paragraph}>
            Si se logra un acuerdo, este queda registrado en un acta con efectos
            legales obligatorios.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene intentar una conciliación antes de iniciar un
            proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            En muchos conflictos de arrendamiento, la conciliación representa
            una alternativa eficaz antes de acudir ante un juez. Cuando todavía
            existe la posibilidad de dialogar, este mecanismo permite encontrar
            soluciones consensuadas que pueden ahorrar tiempo, costos y el
            desgaste que implica un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Tanto arrendadores como arrendatarios pueden presentar propuestas,
            negociar plazos de pago, acordar la entrega del inmueble o definir
            compromisos sobre reparaciones y obligaciones pendientes, siempre
            con el acompañamiento de un conciliador imparcial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación suele ser especialmente útil cuando ambas partes
              desean conservar una buena relación contractual o resolver el
              conflicto de forma rápida y sin acudir a un litigio.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos de arrendamiento que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Pago de cánones vencidos</h3>

              <p>
                Las partes pueden acordar plazos, descuentos, acuerdos de pago o
                nuevas condiciones para ponerse al día.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega del inmueble</h3>

              <p>
                Es posible establecer fechas de entrega, condiciones de
                desocupación y entrega de llaves evitando procesos posteriores.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños o reparaciones</h3>

              <p>
                Arrendador y arrendatario pueden definir quién asumirá
                determinadas reparaciones o compensaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Terminación del contrato</h3>

              <p>
                También pueden acordarse condiciones para finalizar el contrato
                de forma anticipada sin mayores conflictos.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar una conciliación de arrendamiento
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso puede requerir documentación diferente, es
            recomendable reunir todos los soportes relacionados con el conflicto
            para facilitar el análisis durante la audiencia.
          </p>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Documento de identidad de las partes.</li>
            <li>Comprobantes de pago del canon de arrendamiento.</li>
            <li>Recibos de servicios públicos cuando sean relevantes.</li>
            <li>Fotografías o videos sobre el estado del inmueble.</li>
            <li>
              Conversaciones, correos electrónicos o mensajes relacionados con
              el conflicto.
            </li>
            <li>Cualquier otro documento que respalde las reclamaciones.</li>
          </ul>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de pago de deudas de arriendo.</li>
            <li>Entrega voluntaria del inmueble.</li>
            <li>Reducción o ajuste del canon.</li>
            <li>Compensación por daños.</li>
            <li>Terminación anticipada del contrato.</li>
          </ul>
        </div>

        {/* ERRORES FREQUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que aumentan los conflictos de arrendamiento
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No documentar los acuerdos</h3>

              <p>
                Los acuerdos verbales suelen generar malentendidos y
                dificultades para demostrar posteriormente lo pactado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ignorar los incumplimientos</h3>

              <p>
                Dejar pasar el tiempo sin buscar una solución puede agravar el
                conflicto y dificultar un acuerdo posterior.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No buscar asesoría</h3>

              <p>
                Una orientación oportuna permite conocer los derechos y
                obligaciones de cada parte antes de que el conflicto escale.
              </p>
            </div>
          </div>
        </div>

        {/* NO TERMINA CON ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si la conciliación no termina con un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos logran resolverse durante una audiencia de
            conciliación. Cuando las partes mantienen posiciones completamente
            opuestas o no existe disposición para negociar, será necesario
            evaluar la posibilidad de acudir a la jurisdicción competente para
            que el conflicto sea decidido por un juez.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, incluso cuando no se alcanza un acuerdo total, la
            conciliación puede servir para aclarar los puntos de discusión,
            reducir el alcance del conflicto y facilitar una solución posterior.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no significa renunciar a los derechos.
              En caso de no lograr un acuerdo, las partes podrán ejercer las
              acciones legales que correspondan conforme a la legislación
              colombiana.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conflictos entre arrendador y
            arrendatario
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Es obligatorio acudir primero a conciliación?</h3>

              <p>
                Dependiendo del tipo de conflicto y de la normativa aplicable,
                la conciliación puede ser una alternativa recomendable o un
                requisito previo antes de iniciar determinadas acciones
                judiciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si una de las partes no cumple el acuerdo?</h3>

              <p>
                El acta de conciliación produce efectos jurídicos y, en
                determinadas circunstancias, puede hacerse cumplir mediante los
                mecanismos previstos por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación sirve para acuerdos de pago?</h3>

              <p>
                Sí. Es uno de los asuntos más frecuentes y permite establecer
                plazos, cuotas y compromisos que beneficien a ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto entre arrendador y arrendatario?
          </h3>

          <p className={styles.ctaText}>
            Si enfrentas problemas relacionados con el pago del canon, entrega
            del inmueble, incumplimiento del contrato, reparaciones, terminación
            del arrendamiento u otros desacuerdos, podemos orientarte sobre las
            alternativas de conciliación para buscar una solución ágil, legal y
            evitar, cuando sea posible, un proceso judicial prolongado.
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
