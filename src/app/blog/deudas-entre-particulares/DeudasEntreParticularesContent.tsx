"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DeudasEntreParticularesContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO SECTION */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación Civil para Cobro de Deudas en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cómo cobrar una deuda entre particulares mediante conciliación en
            Colombia?
          </h1>

          <p className={styles.heroText}>
            Cuando una persona presta dinero, vende un bien, realiza un trabajo
            o entrega mercancías y el pago nunca llega, es normal preguntarse
            qué hacer para recuperar ese dinero sin iniciar inmediatamente una
            demanda. En muchos casos, la conciliación permite solucionar este
            tipo de conflictos de forma más rápida, económica y con importantes
            efectos jurídicos.
          </p>

          <p className={styles.heroText}>
            Mediante una audiencia de conciliación, acreedor y deudor pueden
            negociar acuerdos de pago, establecer cuotas, fijar fechas de
            cumplimiento, reconocer la obligación e incluso pactar garantías que
            brinden mayor tranquilidad a ambas partes.
          </p>

          <p className={styles.heroText}>
            Si el acuerdo se firma, queda consignado en un acta de conciliación
            con validez legal, lo que brinda mayor seguridad frente al
            cumplimiento de la obligación y, en caso de incumplimiento, puede
            facilitar las acciones legales posteriores.
          </p>
        </div>

        {/* QUE ES LA CONCILIACION PARA COBRAR UNA DEUDA ENTRE PARTICULARES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación para cobrar una deuda entre particulares?
          </h2>

          <p className={styles.paragraph}>
            La conciliación es un mecanismo de solución de conflictos mediante
            el cual un acreedor y un deudor buscan llegar a un acuerdo
            voluntario con la intervención de un conciliador imparcial. Su
            objetivo principal es encontrar una solución que permita recuperar
            el dinero adeudado sin necesidad de acudir inicialmente a un proceso
            judicial.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento puede utilizarse cuando existen préstamos
            personales, compraventas, servicios prestados, obligaciones
            derivadas de contratos o cualquier otra deuda de carácter civil que
            pueda ser objeto de conciliación.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, este mecanismo ayuda a preservar
            las relaciones personales o comerciales, permitiendo que ambas
            partes construyan una solución ajustada a sus posibilidades reales
            de cumplimiento.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Muchas personas creen que para recuperar una deuda siempre es
              necesario demandar. Sin embargo, la conciliación suele ser el
              primer paso recomendado porque permite obtener acuerdos con
              respaldo jurídico en mucho menos tiempo.
            </p>
          </div>
        </div>

        {/* CASOS QUE PUEDEN RESOLVERSE MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipos de deudas pueden resolverse mediante conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos de dinero</h3>

              <p>
                Dinero prestado entre familiares, amigos, compañeros de trabajo
                o particulares que no ha sido devuelto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Venta de bienes</h3>

              <p>
                Incumplimientos en el pago de vehículos, equipos, muebles,
                mercancías o cualquier otra compraventa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios prestados</h3>

              <p>
                Honorarios, trabajos independientes, asesorías o servicios que
                fueron ejecutados pero nunca pagados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones civiles</h3>

              <p>
                Cualquier obligación económica entre particulares susceptible de
                ser negociada mediante conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS DE CONCILIACION PARA COBRAR UNA DEUDA ENTRE PARTICULARES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de cobrar una deuda mediante conciliación
          </h2>

          <ul className={styles.list}>
            <li>Evita iniciar inmediatamente un proceso judicial.</li>
            <li>
              Reduce considerablemente los tiempos para obtener una solución.
            </li>
            <li>Disminuye los costos asociados al conflicto.</li>
            <li>
              Permite negociar cuotas ajustadas a la capacidad económica del
              deudor.
            </li>
            <li>
              Facilita acuerdos sobre intereses, descuentos o plazos
              adicionales.
            </li>
            <li>Genera un documento con efectos jurídicos.</li>
            <li>
              Ayuda a conservar relaciones familiares, personales o comerciales.
            </li>
            <li>Brinda mayor seguridad tanto al acreedor como al deudor.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Cuando ambas partes participan activamente en la construcción del
              acuerdo, normalmente existe una mayor disposición para cumplir los
              compromisos adquiridos.
            </p>
          </div>
        </div>

        {/* ACUERDOS QUE PUEDEN RESOLVERSE MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué acuerdos pueden alcanzarse?</h2>

          <p className={styles.paragraph}>
            Durante la audiencia las partes pueden establecer diferentes
            mecanismos para cumplir la obligación económica.
          </p>

          <ul className={styles.list}>
            <li>Pago total inmediato.</li>
            <li>Pago por cuotas.</li>
            <li>Ampliación de plazos.</li>
            <li>Condonación parcial de intereses.</li>
            <li>Entrega de garantías.</li>
            <li>Reconocimiento formal de la deuda.</li>
          </ul>
        </div>

        {/* SI EL DEUDOR INCUMPLE EL ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si el deudor incumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            El acuerdo alcanzado queda consignado en un acta de conciliación.
            Este documento tiene efectos jurídicos y puede servir como base para
            exigir el cumplimiento mediante las vías legales correspondientes.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación brinda una solución amistosa sin
            sacrificar la seguridad jurídica del acreedor.
          </p>
        </div>

        {/* PRUEBAS QUE PUEDEN SER UTILIZADAS PARA DEMOSTRAR UNA DEUDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pruebas pueden servir para demostrar una deuda?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas creen que únicamente un pagaré permite cobrar una
            obligación, pero existen diferentes medios que pueden servir para
            demostrar la existencia de una deuda durante una conciliación o un
            proceso posterior.
          </p>

          <ul className={styles.list}>
            <li>Pagarés.</li>
            <li>Contratos escritos.</li>
            <li>Transferencias bancarias.</li>
            <li>Consignaciones.</li>
            <li>Comprobantes de pago.</li>
            <li>Facturas.</li>
            <li>Conversaciones donde el deudor reconoce la obligación.</li>
            <li>Correos electrónicos.</li>
            <li>Mensajes de WhatsApp.</li>
            <li>Cualquier documento relacionado con la obligación.</li>
          </ul>
        </div>

        {/* SI EL DEUDOR NO ASISTE A LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si el deudor no asiste a la conciliación?
          </h2>

          <p className={styles.paragraph}>
            La ausencia del deudor no significa que el acreedor pierda sus
            derechos. Si la audiencia no puede realizarse por la inasistencia de
            una de las partes, podrán evaluarse otras alternativas legales para
            reclamar el pago de la obligación.
          </p>

          <p className={styles.paragraph}>
            En muchos casos, la invitación a conciliar motiva al deudor a
            negociar antes de enfrentarse a un proceso judicial, lo que facilita
            encontrar soluciones satisfactorias para ambas partes.
          </p>
        </div>

        {/* PORQUE INTENTAR UNA CONCILIACION ANTES DE DEMANDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de demandar?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Más rapidez</h3>

              <p>
                Es posible resolver el conflicto en mucho menos tiempo que un
                proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor flexibilidad</h3>

              <p>
                Las partes pueden diseñar acuerdos ajustados a sus necesidades
                reales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acta de conciliación deja por escrito todos los compromisos
                asumidos.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL INTENTAR COBRAR UNA DEUDA ENTRE PARTICULARES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar cobrar una deuda entre particulares
          </h2>

          <p className={styles.paragraph}>
            Cuando una persona intenta recuperar un dinero prestado, suele
            actuar por impulso o desconocimiento. Esto puede dificultar una
            negociación o incluso complicar un eventual proceso judicial. Antes
            de tomar cualquier decisión, conviene identificar algunos errores
            frecuentes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Dejar pasar meses o años sin buscar una solución puede hacer más
                difícil recuperar la obligación y reunir las pruebas necesarias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No conservar soportes</h3>

              <p>
                Eliminar conversaciones, recibos, consignaciones o documentos
                puede afectar la demostración de la deuda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negociar únicamente de palabra</h3>

              <p>
                Siempre es recomendable dejar por escrito cualquier acuerdo
                alcanzado entre acreedor y deudor.
              </p>
            </div>
          </div>
        </div>

        {/* PROCESO DE CONCILIACION PARA COBRAR UNA DEUDA ENTRE PARTICULARES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de conciliación para cobrar una deuda?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso puede tener particularidades, normalmente una
            conciliación por deudas entre particulares sigue un procedimiento
            sencillo.
          </p>

          <ol className={styles.list}>
            <li>El acreedor presenta la solicitud de conciliación.</li>
            <li>Se cita al deudor para asistir a la audiencia.</li>
            <li>Las partes exponen su versión del conflicto.</li>
            <li>El conciliador facilita el diálogo y la negociación.</li>
            <li>Si existe acuerdo, se firma un acta con efectos jurídicos.</li>
            <li>
              Si no hay acuerdo, las partes podrán acudir a otras vías legales.
            </li>
          </ol>
        </div>

        {/* DOCUMENTOS QUE PUEDEN FACILITAR UNA CONCILIACION POR DEUDAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar una conciliación por deudas
          </h2>

          <p className={styles.paragraph}>
            Entre mayor sea la información disponible sobre la obligación, más
            fácil será analizar el caso y construir un acuerdo entre las partes.
          </p>

          <ul className={styles.list}>
            <li>Pagarés o letras de cambio.</li>
            <li>Contratos escritos.</li>
            <li>Comprobantes de consignación.</li>
            <li>Transferencias bancarias.</li>
            <li>Facturas.</li>
            <li>Mensajes de WhatsApp.</li>
            <li>Correos electrónicos.</li>
            <li>Recibos de pago.</li>
            <li>Documentos donde se reconozca la deuda.</li>
          </ul>
        </div>

        {/* CUANDO ES RECOMENDABLE ACUDIR PRIMERO A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir primero a una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación suele ser una excelente alternativa cuando todavía
            existe disposición para dialogar y encontrar una solución que
            beneficie a ambas partes. Incluso cuando la comunicación se ha
            deteriorado, un tercero imparcial puede facilitar la negociación.
          </p>

          <p className={styles.paragraph}>
            También resulta útil cuando el deudor reconoce la obligación, pero
            necesita nuevos plazos para cumplir, o cuando las partes desean
            evitar los costos y tiempos asociados a un proceso judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no significa renunciar a otros
              mecanismos legales. En muchos casos representa el primer paso para
              buscar una solución rápida y con respaldo jurídico.
            </p>
          </div>
        </div>

        {/* POR QUE MUCHAS PERSONAS PREFEREN LA CONCILIACION PARA RECUPERAR SU DINERO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué muchas personas prefieren la conciliación para recuperar su
            dinero?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor desgaste</h3>

              <p>
                Evita que el conflicto escale innecesariamente y favorece una
                solución dialogada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Los acuerdos suelen alcanzarse mucho antes que en un proceso
                judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos personalizados</h3>

              <p>
                Las partes pueden pactar cuotas, plazos, descuentos o garantías
                según las circunstancias del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Respaldo jurídico</h3>

              <p>
                El acta de conciliación formaliza los compromisos y brinda
                seguridad para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Necesito abogado?</h3>
              <p>
                No siempre. Muchas conciliaciones pueden adelantarse
                directamente por las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda antigua?</h3>
              <p>
                Sí, siempre que el asunto sea conciliable y las partes estén
                dispuestas a negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>
                Sí. Una vez firmado, las partes adquieren compromisos que deben
                cumplir.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar una deuda sin demandar?
          </h3>

          <p className={styles.ctaText}>
            Recibe orientación sobre conciliación civil, acuerdos de pago,
            recuperación de cartera y solución de conflictos económicos entre
            particulares en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar información
          </a>
        </div>
      </motion.article>
    </section>
  );
}
