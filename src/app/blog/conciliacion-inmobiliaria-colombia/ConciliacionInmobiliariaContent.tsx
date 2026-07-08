"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionInmobiliariaContent() {
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
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>
            Conciliación Inmobiliaria en Colombia: Cómo Resolver Conflictos de
            Arrendamiento, Compraventa y Propiedad Horizontal
          </h1>

          <p className={styles.heroText}>
            La conciliación inmobiliaria en Colombia es un mecanismo alternativo
            para resolver conflictos relacionados con bienes inmuebles sin
            necesidad de acudir a procesos judiciales largos y costosos.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite llegar a acuerdos legales entre las partes de
            forma rápida, eficiente y con plena validez jurídica.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación inmobiliaria y cuándo puede utilizarse en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación inmobiliaria es un mecanismo alternativo de solución
            de conflictos mediante el cual propietarios, arrendadores,
            arrendatarios, compradores, vendedores y demás personas involucradas
            en una controversia relacionada con un bien inmueble pueden llegar a
            acuerdos con la ayuda de un conciliador imparcial, evitando en
            muchos casos acudir a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            En Colombia este mecanismo es ampliamente utilizado para solucionar
            diferencias derivadas de contratos de arrendamiento, compraventa de
            inmuebles, propiedad horizontal, incumplimientos contractuales,
            restitución de inmuebles y otras controversias civiles que admiten
            conciliación.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, la conciliación permite que las
            propias partes construyan soluciones ajustadas a sus necesidades,
            preservando las relaciones comerciales y evitando que el conflicto
            continúe escalando.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo logrado mediante conciliación tiene efectos jurídicos y
              brinda mayor seguridad para ambas partes frente al cumplimiento de
              las obligaciones pactadas.
            </p>
          </div>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos inmobiliarios que pueden resolverse mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Conflictos relacionados con cánones de arrendamiento,
                incumplimientos, entrega del inmueble, reparaciones y
                terminación del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compraventa de inmuebles</h3>

              <p>
                Diferencias por incumplimiento del contrato, retrasos en la
                entrega, devolución de dinero o interpretación de obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Propiedad horizontal</h3>

              <p>
                Controversias entre propietarios, administraciones, consejos de
                administración o copropietarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega y restitución</h3>

              <p>
                Acuerdos relacionados con la devolución del inmueble,
                inventarios y estado de conservación del bien.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos contractuales</h3>

              <p>
                Solución de diferencias derivadas del incumplimiento de
                obligaciones pactadas en contratos inmobiliarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos de pago</h3>

              <p>
                Negociación de obligaciones económicas pendientes mediante
                nuevos plazos, descuentos o formas de pago.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué elegir la conciliación inmobiliaria antes que una demanda
            judicial?
          </h2>

          <p className={styles.paragraph}>
            Cuando surge un conflicto relacionado con un inmueble, muchas
            personas piensan inmediatamente en acudir a un proceso judicial. Sin
            embargo, la conciliación ofrece una alternativa mucho más ágil que
            permite a las partes dialogar y construir soluciones con
            acompañamiento de un conciliador imparcial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo de solución</h3>

              <p>
                Los conflictos pueden resolverse en semanas, evitando procesos
                judiciales que suelen extenderse durante meses o incluso años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de costos</h3>

              <p>
                Disminuye gastos asociados a litigios prolongados y facilita
                acuerdos económicos entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor flexibilidad</h3>

              <p>
                Las soluciones pueden adaptarse a las necesidades específicas
                del caso, algo que normalmente no ocurre en un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acta de conciliación genera obligaciones para las partes y
                ofrece respaldo legal sobre los acuerdos alcanzados.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de una conciliación inmobiliaria paso a paso?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, la conciliación
            inmobiliaria suele desarrollarse mediante un procedimiento claro que
            busca facilitar el diálogo entre las partes y alcanzar acuerdos
            voluntarios.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                Se presenta la solicitud explicando el conflicto y la solución
                que se pretende alcanzar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación cita a las partes para participar en
                la audiencia correspondiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                El conciliador escucha a ambas partes, identifica los puntos de
                desacuerdo y facilita la negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acuerdo</h3>

              <p>
                Si existe consenso, el acuerdo queda consignado en un acta con
                efectos jurídicos para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse durante una conciliación inmobiliaria?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del conflicto, las partes tienen la posibilidad de
            construir acuerdos ajustados a sus intereses, siempre que respeten
            la legislación colombiana y sean jurídicamente viables.
          </p>

          <ul className={styles.list}>
            <li>Acuerdos de pago por obligaciones pendientes.</li>
            <li>Entrega voluntaria del inmueble.</li>
            <li>Restitución del bien inmueble.</li>
            <li>Terminación anticipada de contratos.</li>
            <li>Modificación de cláusulas contractuales.</li>
            <li>Compensaciones económicas.</li>
            <li>Reparación de daños ocasionados al inmueble.</li>
            <li>Cumplimiento de obligaciones pendientes.</li>
          </ul>
        </div>

        {/* CUANDO ACUDIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a una conciliación inmobiliaria en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas creen que la única forma de solucionar un conflicto
            relacionado con un inmueble es presentar una demanda. Sin embargo,
            en numerosos casos la conciliación permite encontrar soluciones
            mucho más rápidas, económicas y satisfactorias para todas las partes
            involucradas.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo resulta especialmente útil cuando todavía existe
            disposición para dialogar y negociar, evitando que el conflicto
            continúe escalando y genere mayores costos o demoras.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Acudir a una conciliación desde las primeras etapas del conflicto
              puede facilitar acuerdos duraderos y evitar largos procesos
              judiciales.
            </p>
          </div>
        </div>

        {/* CONFLICTOS RESOLVERSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conflictos entre arrendadores e inquilinos que pueden resolverse
            mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento en el pago del canon</h3>

              <p>
                Es posible negociar acuerdos de pago, plazos y alternativas para
                evitar un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega del inmueble</h3>

              <p>
                La conciliación permite acordar fechas de entrega, condiciones y
                compromisos entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños al inmueble</h3>

              <p>
                También pueden establecerse acuerdos sobre reparaciones,
                indemnizaciones o compensaciones económicas.
              </p>
            </div>
          </div>
        </div>

        {/* CONFLICTOS COMPRAVENTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación en conflictos relacionados con la compraventa de
            inmuebles
          </h2>

          <p className={styles.paragraph}>
            Los desacuerdos durante una compraventa pueden surgir por
            incumplimientos contractuales, retrasos en la entrega del inmueble,
            diferencias en los pagos o controversias sobre las obligaciones
            asumidas por compradores y vendedores.
          </p>

          <p className={styles.paragraph}>
            La conciliación ofrece un espacio neutral para revisar el contrato,
            escuchar a ambas partes y construir soluciones que permitan
            finalizar la negociación o corregir los incumplimientos sin acudir
            inmediatamente a un proceso judicial.
          </p>
        </div>

        {/* DOCUMENTOS NECESARIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que suelen presentarse en una conciliación inmobiliaria
          </h2>

          <ul className={styles.list}>
            <li>Documento de identidad de las partes.</li>
            <li>Contrato de arrendamiento o de compraventa.</li>
            <li>Comprobantes de pago.</li>
            <li>
              Correos electrónicos o mensajes relacionados con el conflicto.
            </li>
            <li>Fotografías o videos cuando existan daños en el inmueble.</li>
            <li>Inventarios, actas de entrega o recibo.</li>
            <li>Cualquier documento que respalde las reclamaciones.</li>
          </ul>

          <p className={styles.paragraph}>
            Contar con estos documentos facilita que el conciliador comprenda
            mejor el conflicto y ayude a las partes a construir acuerdos claros
            y ajustados a la realidad del caso.
          </p>
        </div>

        {/* PASO A PASO DE UNA CONCILIACION INMOBILIARIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso de una conciliación inmobiliaria
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Presentación de la solicitud</h3>

              <p>
                La persona interesada expone el conflicto y solicita la
                audiencia de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación de las partes</h3>

              <p>
                El centro de conciliación programa la audiencia e informa la
                fecha de realización.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia y acuerdo</h3>

              <p>
                Si existe voluntad de las partes, el conciliador facilita un
                acuerdo que queda consignado en un acta con efectos legales.
              </p>
            </div>
          </div>
        </div>

        {/* QUE OCURRE SI UNA DE LAS PARTES INCUMPLE EL ACTA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si una de las partes incumple el acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando se alcanza un acuerdo, este queda consignado en un acta de
            conciliación que produce efectos jurídicos. Por ello, las
            obligaciones asumidas deben cumplirse en los términos establecidos
            por las partes.
          </p>

          <p className={styles.paragraph}>
            Si posteriormente alguna de las personas incumple lo pactado, el
            acta puede servir como soporte para hacer valer los derechos
            correspondientes de acuerdo con la legislación colombiana.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Por esta razón es importante que todos los acuerdos sean claros,
              precisos y reflejen realmente la voluntad de las partes.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL INTENTAR RESOLVER UN CONFLICTO INMOBILIARIO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar resolver un conflicto inmobiliario
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No dejar acuerdos por escrito</h3>

              <p>
                Los acuerdos verbales suelen generar nuevos desacuerdos con el
                paso del tiempo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Entre más avance el conflicto, más difícil puede resultar
                encontrar una solución negociada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No acudir a un conciliador</h3>

              <p>
                La intervención de un tercero imparcial facilita el diálogo y
                ayuda a construir acuerdos equilibrados para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar cualquier conflicto inmobiliario?</h3>
              <p>
                La mayoría de conflictos civiles relacionados con inmuebles sí
                pueden conciliarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal en Colombia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>Se puede acudir a la vía judicial correspondiente.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto inmobiliario?
          </h3>

          <p className={styles.ctaText}>
            Resuelve tus conflictos inmobiliarios mediante conciliación en
            Colombia de forma rápida, legal y efectiva.
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
