"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroDineroConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación Civil y Obligaciones Económicas
          </span>

          <h1 className={styles.title}>
            Cobro de dinero mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            Cuando una persona incumple una obligación económica, muchas veces
            la primera reacción es pensar en una demanda. Sin embargo, antes de
            iniciar un proceso judicial, existe la posibilidad de recuperar el
            dinero mediante un procedimiento más rápido, económico y flexible:
            la conciliación.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que acreedor y deudor se sienten a negociar
            con la intervención de un conciliador imparcial para encontrar una
            solución que beneficie a ambas partes y facilite el cumplimiento de
            la obligación.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona el cobro de dinero mediante conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Es un mecanismo mediante el cual una persona busca recuperar una
            suma de dinero adeudada a través de un acuerdo conciliatorio,
            evitando inicialmente acudir a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, las partes pueden negociar condiciones de
            pago, plazos, cuotas y otros compromisos que permitan solucionar el
            conflicto de forma voluntaria.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos puede utilizarse la conciliación para recuperar una
            deuda?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos personales</h3>

              <p>
                Dinero prestado entre familiares, amigos o conocidos que no ha
                sido devuelto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ventas a crédito</h3>

              <p>Obligaciones derivadas de compraventas pendientes de pago.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios prestados</h3>

              <p>Honorarios o pagos pendientes por trabajos realizados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones civiles</h3>

              <p>
                Cualquier deuda entre particulares susceptible de conciliación.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué utilizar la conciliación para recuperar dinero sin acudir a
            un juez?
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Reduce costos legales.</li>
            <li>Permite acuerdos personalizados.</li>
            <li>Facilita el cumplimiento voluntario.</li>
            <li>Permite establecer cuotas de pago.</li>
            <li>Genera seguridad jurídica.</li>
            <li>Protege relaciones personales y comerciales.</li>
            <li>Puede realizarse de forma presencial o virtual.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En muchos casos, una conciliación exitosa permite recuperar el
              dinero en pocas semanas, evitando largos procesos judiciales y
              costos adicionales para ambas partes.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden alcanzarse durante una conciliación por deudas?
          </h2>

          <p className={styles.paragraph}>
            Durante la audiencia pueden alcanzarse diferentes tipos de acuerdos
            según las necesidades de las partes.
          </p>

          <ul className={styles.list}>
            <li>Pago total inmediato.</li>
            <li>Pago por cuotas periódicas.</li>
            <li>Ampliación de plazos.</li>
            <li>Reducción o condonación de intereses.</li>
            <li>Reconocimiento formal de la deuda.</li>
            <li>Entrega de garantías de pago.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué validez jurídica tiene un acuerdo de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Si las partes llegan a un acuerdo, este queda consignado en un acta
            de conciliación que tiene efectos jurídicos y constituye una prueba
            formal de los compromisos adquiridos.
          </p>

          <p className={styles.paragraph}>
            Esto brinda mayor seguridad al acreedor y fomenta el cumplimiento
            voluntario de las obligaciones pactadas.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si el deudor incumple el acuerdo de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando una de las partes incumple lo pactado en la conciliación,
            pueden iniciarse las acciones legales correspondientes para exigir
            el cumplimiento de la obligación económica.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación representa una alternativa amistosa
            sin renunciar a la protección jurídica que ofrece la ley colombiana.
          </p>
        </div>

        {/* TIPOS DE DEUDAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipos de deudas pueden cobrarse mediante conciliación en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación es una herramienta útil para resolver múltiples
            conflictos relacionados con obligaciones económicas. Siempre que el
            asunto sea conciliable conforme a la ley, las partes pueden negociar
            la forma de pago antes de acudir a un proceso judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos entre particulares</h3>

              <p>
                Dinero prestado a familiares, amigos o conocidos que no ha sido
                devuelto dentro del plazo acordado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Facturas pendientes</h3>

              <p>
                Obligaciones derivadas de ventas de bienes o prestación de
                servicios que permanecen sin pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos contractuales</h3>

              <p>
                Deudas originadas por contratos civiles o comerciales entre
                personas naturales o jurídicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reconocimiento de obligaciones</h3>

              <p>
                Casos en los que el deudor acepta la existencia de la deuda y
                desea acordar un plan de pago.
              </p>
            </div>
          </div>
        </div>

        {/* PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo recuperar una deuda mediante conciliación? Paso a paso
          </h2>

          <p className={styles.paragraph}>
            El procedimiento de conciliación es sencillo y busca que las partes
            encuentren una solución voluntaria antes de iniciar un proceso
            judicial.
          </p>

          <ul className={styles.list}>
            <li>Presentar la solicitud de conciliación.</li>
            <li>Identificar correctamente al deudor.</li>
            <li>Adjuntar pruebas de la obligación económica.</li>
            <li>Programar la audiencia de conciliación.</li>
            <li>Negociar las condiciones del pago.</li>
            <li>Firmar el acta de conciliación si existe acuerdo.</li>
            <li>
              En caso de incumplimiento, iniciar las acciones legales
              correspondientes.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Contar con documentos como contratos, facturas, comprobantes de
              consignación, pagarés, mensajes o cualquier evidencia de la
              obligación facilita el éxito del proceso conciliatorio.
            </p>
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos recomendados para solicitar una conciliación por cobro de
            dinero
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso puede requerir documentos adicionales, normalmente
            es recomendable presentar toda la evidencia disponible que demuestre
            la existencia de la obligación económica.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Contrato o acuerdo entre las partes.</li>
            <li>Pagarés o letras de cambio.</li>
            <li>Facturas o cuentas de cobro.</li>
            <li>Comprobantes de consignación o transferencias.</li>
            <li>Mensajes, correos electrónicos o conversaciones.</li>
            <li>Cualquier otra prueba relacionada con la deuda.</li>
          </ul>
        </div>

        {/* CUANDO CONCILIAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene intentar una conciliación antes de presentar una
            demanda?
          </h2>

          <p className={styles.paragraph}>
            La conciliación suele ser la mejor alternativa cuando existe
            disposición de las partes para negociar o cuando se busca recuperar
            el dinero en el menor tiempo posible sin asumir los costos y la
            duración de un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Si el deudor reconoce la obligación, desea llegar a un acuerdo de
            pago o ambas partes buscan conservar una relación comercial o
            personal, la conciliación puede ofrecer resultados más rápidos y
            satisfactorios.
          </p>

          <p className={styles.paragraph}>
            Cuando no existe voluntad de cumplir o el acuerdo conciliatorio es
            incumplido, el acreedor puede acudir posteriormente a las acciones
            judiciales que correspondan conforme a la legislación colombiana.
          </p>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar recuperar una deuda
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No conservar pruebas</h3>

              <p>
                Muchas personas no guardan contratos, comprobantes o
                conversaciones que acrediten la obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Dejar pasar largos periodos puede dificultar la recuperación del
                dinero y afectar las posibilidades de cobro.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No intentar una negociación</h3>

              <p>
                En muchos casos un acuerdo conciliatorio permite obtener el pago
                mucho más rápido que una demanda.
              </p>
            </div>
          </div>
        </div>
        {/* POR QUE ELEGIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué elegir la conciliación para recuperar una deuda?
          </h2>

          <p className={styles.paragraph}>
            La conciliación representa una alternativa eficiente para solucionar
            conflictos relacionados con obligaciones económicas, ya que promueve
            el diálogo entre acreedor y deudor, reduce tiempos de espera y
            facilita la celebración de acuerdos adaptados a las necesidades de
            ambas partes.
          </p>

          <p className={styles.paragraph}>
            Además de disminuir costos frente a un proceso judicial, el acta de
            conciliación brinda seguridad jurídica y puede convertirse en un
            respaldo importante en caso de incumplimiento del acuerdo alcanzado.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>

              <p>
                No necesariamente. Muchas conciliaciones pueden realizarse
                directamente por las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda antigua?</h3>

              <p>
                Sí, siempre que el asunto sea legalmente conciliable y exista
                voluntad de negociación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación es obligatoria?</h3>

              <p>
                En algunos asuntos puede constituir un requisito previo antes de
                presentar una demanda judicial.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar un dinero adeudado?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos de pago,
            recuperación de obligaciones económicas y solución de conflictos
            entre particulares en Colombia.
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
