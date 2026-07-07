"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CompraventaBienesContent() {
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
          <span className={styles.badge}>Conciliación civil y contractual</span>

          <h1 className={styles.title}>
            Conciliación en contratos de compraventa de bienes en Colombia: guía
            completa
          </h1>

          <p className={styles.heroText}>
            La compraventa de bienes es una de las relaciones contractuales más
            comunes en Colombia. Sin embargo, no siempre comprador y vendedor
            cumplen lo pactado, lo que puede dar lugar a conflictos relacionados
            con pagos, entregas, garantías, calidad del producto o
            incumplimiento de las obligaciones asumidas.
          </p>

          <p className={styles.heroText}>
            Antes de iniciar una demanda judicial, muchas de estas controversias
            pueden solucionarse mediante conciliación, un mecanismo que permite
            a las partes negociar con la ayuda de un conciliador imparcial y
            alcanzar acuerdos con plena validez jurídica.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás cómo funciona la conciliación en los
            contratos de compraventa de bienes en Colombia, qué conflictos
            pueden resolverse, cuáles son las alternativas disponibles y qué
            ocurre cuando una de las partes incumple el acuerdo alcanzado.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un contrato de compraventa de bienes y cuándo surgen los
            conflictos?
          </h2>

          <p className={styles.paragraph}>
            En un contrato de compraventa una parte se compromete a entregar un
            bien y la otra a pagar un precio previamente acordado. Aunque puede
            parecer un negocio sencillo, en la práctica suelen presentarse
            desacuerdos cuando alguna de las obligaciones no se cumple conforme
            a lo pactado.
          </p>

          <p className={styles.paragraph}>
            Estos contratos pueden celebrarse entre personas naturales,
            empresas, comerciantes o cualquier persona que compre o venda bienes
            muebles o inmuebles, por lo que los conflictos pueden presentarse
            tanto en operaciones pequeñas como en negocios de mayor valor
            económico.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando surgen desacuerdos sobre la ejecución del contrato, la
              conciliación puede ser una herramienta eficaz para resolver el
              conflicto sin acudir inmediatamente a los tribunales.
            </p>
          </div>
        </div>

        {/* PROBLEMAS COMUNES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Problemas más comunes en los contratos de compraventa de bienes
          </h2>

          <ul className={styles.list}>
            <li>Incumplimiento en la entrega del bien.</li>
            <li>Retrasos en los pagos acordados.</li>
            <li>Entrega de bienes defectuosos.</li>
            <li>Incumplimiento de garantías.</li>
            <li>Diferencias sobre el estado del bien.</li>
            <li>Incumplimiento de condiciones contractuales.</li>
            <li>Devolución del dinero entregado.</li>
            <li>Disputas por calidad o cantidad del producto.</li>
          </ul>

          <p className={styles.paragraph}>
            En muchos casos el conflicto no surge por la existencia del contrato
            sino por diferencias respecto a la forma en que debía cumplirse. La
            conciliación busca precisamente que comprador y vendedor encuentren
            una solución antes de acudir a un proceso judicial que puede
            prolongarse durante meses o incluso años.
          </p>
        </div>

        {/* CONFLICTOS QUE PUEDEN RESOLVERSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando las partes desean
            conservar la relación comercial o buscan una solución rápida sin
            asumir los costos de un litigio judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento en la entrega</h3>

              <p>
                Cuando el vendedor no entrega el bien en la fecha acordada o
                nunca hace la entrega.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento en el pago</h3>

              <p>
                Cuando el comprador no cancela el precio pactado o incumple las
                cuotas acordadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Garantías</h3>

              <p>
                Problemas relacionados con defectos, calidad o funcionamiento
                del bien.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Devolución del dinero</h3>

              <p>
                Casos donde una de las partes solicita el reintegro parcial o
                total del dinero pagado.
              </p>
            </div>
          </div>
        </div>

        {/* PORQUE ACUDIR PRIMERO A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué acudir primero a una conciliación antes de demandar?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene sus particularidades, intentar una
            conciliación suele representar una oportunidad para solucionar el
            conflicto en menor tiempo, disminuir costos y mantener una relación
            comercial que de otra forma podría terminar completamente
            deteriorada.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Soluciones rápidas</h3>

              <p>
                Los acuerdos pueden lograrse en menor tiempo que un proceso
                judicial tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor costo</h3>

              <p>
                Se reducen gastos asociados a litigios y procedimientos
                judiciales prolongados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden construir acuerdos adaptados a sus necesidades
                comerciales y económicas.
              </p>
            </div>
          </div>
        </div>

        {/* ACUERDOS QUE PUEDEN LOGRARSE DURANTE UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse durante una conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo del caso, las partes pueden acordar la entrega del bien,
            la devolución del dinero, descuentos, reparaciones, sustitución del
            producto o nuevos plazos para el cumplimiento de las obligaciones.
          </p>

          <p className={styles.paragraph}>
            La finalidad es encontrar una solución práctica que permita superar
            el conflicto y evitar mayores perjuicios económicos.
          </p>

          <ul className={styles.list}>
            <li>Entrega del bien dentro de un nuevo plazo.</li>
            <li>Pago pendiente por parte del comprador.</li>
            <li>Devolución total del dinero.</li>
            <li>Devolución parcial del dinero.</li>
            <li>Cambio del producto por otro equivalente.</li>
            <li>Reparación del bien.</li>
            <li>Cumplimiento de la garantía.</li>
            <li>Modificación de algunas cláusulas del contrato.</li>
            <li>Pago mediante cuotas.</li>
          </ul>
        </div>

        {/* DOCUMENTACION NECESARIA PARA UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos son útiles para una conciliación por compraventa de
            bienes?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene sus particularidades, contar con la
            documentación adecuada facilita que el conciliador comprenda el
            conflicto y que las partes puedan negociar con mayor claridad.
            Presentar soportes suficientes también ayuda a construir acuerdos
            más sólidos y ajustados a la realidad de la negociación.
          </p>

          <p className={styles.paragraph}>
            No siempre es necesario aportar todos los documentos relacionados
            con la compraventa, pero sí aquellos que permitan demostrar la
            existencia del negocio jurídico, los pagos realizados o el
            incumplimiento que dio origen al conflicto.
          </p>

          <ul className={styles.list}>
            <li>Contrato de compraventa, si fue elaborado por escrito.</li>
            <li>Facturas, recibos o comprobantes de pago.</li>
            <li>Consignaciones o transferencias bancarias.</li>
            <li>
              Chats, correos electrónicos o mensajes relacionados con la
              negociación.
            </li>
            <li>Cotizaciones, órdenes de compra o pedidos.</li>
            <li>Fotografías o videos del bien cuando sean relevantes.</li>
            <li>Documentos sobre garantías ofrecidas.</li>
            <li>Cualquier otro soporte que permita demostrar los hechos.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Llevar la documentación organizada no significa que el conflicto
              esté resuelto, pero sí facilita que la audiencia avance con mayor
              rapidez y permite que las propuestas de acuerdo se fundamenten en
              información verificable.
            </p>
          </div>
        </div>

        {/* OCURRE SI UNA DE LAS PARTES INCUMPLE EL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si una de las partes incumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Cuando comprador y vendedor llegan a un acuerdo durante la audiencia
            de conciliación, este queda consignado en un acta que produce
            importantes efectos jurídicos.
          </p>

          <p className={styles.paragraph}>
            Si posteriormente alguna de las partes incumple lo pactado, la otra
            podrá acudir a las acciones legales previstas para exigir el
            cumplimiento del acuerdo, de acuerdo con la normativa colombiana.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no solo busca resolver el conflicto actual, sino
              brindar seguridad jurídica para que los compromisos realmente se
              cumplan.
            </p>
          </div>
        </div>

        {/* VALIDEZ LEGAL DE UN ACUERDO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué validez legal tiene un acuerdo de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando el acuerdo se formaliza mediante conciliación, queda
            consignado en un acta con efectos jurídicos que puede ser exigida en
            caso de incumplimiento.
          </p>

          <p className={styles.paragraph}>
            Esto brinda seguridad tanto al comprador como al vendedor y permite
            que las obligaciones pactadas tengan respaldo legal.
          </p>

          <p className={styles.paragraph}>
            El acta de conciliación constituye un documento con importantes
            efectos jurídicos, razón por la cual debe redactarse con claridad y
            reflejar con precisión las obligaciones asumidas por comprador y
            vendedor.
          </p>
        </div>

        {/* OCURRE SI NO SE LOGRA UN ACUERDO DURANTE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. En ocasiones, las
            partes mantienen posiciones diferentes sobre el incumplimiento del
            contrato, el valor adeudado o la solución más conveniente. Cuando
            esto ocurre, la conciliación finaliza sin acuerdo y cada parte
            conserva la posibilidad de acudir a los mecanismos legales que
            considere pertinentes.
          </p>

          <p className={styles.paragraph}>
            Aunque no se alcance una solución definitiva, la audiencia suele ser
            útil porque permite aclarar los puntos de desacuerdo, conocer la
            posición de la otra parte e incluso abrir la puerta a futuras
            negociaciones.
          </p>

          <div className={styles.note}>
            La conciliación busca privilegiar el diálogo entre comprador y
            vendedor, pero no obliga a aceptar propuestas con las que alguna de
            las partes no esté de acuerdo.
          </div>
        </div>

        {/* RECOMENDACIONES ANTES DE INICIAR UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de iniciar una conciliación
          </h2>

          <ul className={styles.list}>
            <li>Conservar el contrato de compraventa.</li>
            <li>Guardar comprobantes de pago.</li>
            <li>Reunir chats, correos y conversaciones.</li>
            <li>Tomar fotografías si el bien presenta defectos.</li>
            <li>Definir claramente qué solución espera obtener.</li>
            <li>Asistir con disposición para negociar.</li>
          </ul>
        </div>

        {/* PREGUNTAS FRECUENTES SOBRE LA CONCILIACION EN CONTRATOS DE COMPRAVENTA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación en contratos de
            compraventa
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo recuperar mi dinero?</h3>

              <p>
                Sí. Dependiendo del caso, puede acordarse la devolución total o
                parcial de los valores pagados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede exigir la entrega del bien?</h3>

              <p>
                Sí. La conciliación permite acordar plazos y condiciones para la
                entrega del bien comprometido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no hay acuerdo?</h3>

              <p>
                Las partes conservan la posibilidad de acudir posteriormente a
                la vía judicial para resolver el conflicto.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO CONVIENE INTENTAR UNA CONCILIACION ANTES DE PRESENTAR UNA DEMANDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene intentar una conciliación antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            En muchos conflictos derivados de la compraventa de bienes, intentar
            una conciliación antes de acudir a un proceso judicial puede
            representar un ahorro importante de tiempo, dinero y esfuerzo.
            Además, permite que las partes conserven el control sobre la
            solución del conflicto, en lugar de dejar la decisión en manos de un
            juez.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo suele ser recomendable cuando existe disposición para
            negociar, las partes desean mantener una relación comercial o
            consideran viable encontrar un acuerdo que beneficie a ambos sin
            prolongar el conflicto durante meses o incluso años.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimientos de entrega</h3>

              <p>
                Cuando el vendedor no entrega el bien en la fecha o condiciones
                inicialmente pactadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Recuperación del dinero</h3>

              <p>
                Si el comprador busca la devolución total o parcial del dinero
                pagado sin iniciar inmediatamente un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cumplimiento de garantías</h3>

              <p>
                Cuando existen diferencias sobre reparaciones, cambios del
                producto o responsabilidades derivadas de la garantía.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar tu dinero o exigir la entrega de un bien?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliaciones derivadas de contratos de
            compraventa, incumplimientos contractuales, devolución de dinero,
            garantías, entrega de bienes, acuerdos de pago y otras controversias
            civiles en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
