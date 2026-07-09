"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DesocupacionInmuebleContent() {
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
            Arrendamientos y conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            ¿Cómo recuperar un inmueble arrendado mediante conciliación en
            Colombia?
          </h1>

          <p className={styles.heroText}>
            Cuando un arrendatario no entrega un inmueble al finalizar el
            contrato o incumple las obligaciones pactadas, el propietario puede
            enfrentar una situación compleja que afecta el uso de su bien y
            genera pérdidas económicas. Antes de iniciar un proceso judicial, la
            conciliación se presenta como una alternativa para buscar una
            solución rápida y voluntaria.
          </p>

          <p className={styles.heroText}>
            Durante la audiencia, las partes pueden acordar la fecha de entrega
            del inmueble, el pago de cánones pendientes, servicios públicos,
            reparaciones, entrega de llaves e incluso establecer compromisos que
            eviten un proceso de restitución de inmueble arrendado.
          </p>

          <p className={styles.heroText}>
            Si se alcanza un acuerdo, este queda consignado en un acta de
            conciliación con efectos jurídicos, brindando mayor seguridad tanto
            al arrendador como al arrendatario.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué significa la desocupación de un inmueble arrendado?
          </h2>

          <p className={styles.paragraph}>
            La desocupación de un inmueble consiste en la entrega material del
            bien por parte del arrendatario al propietario o arrendador una vez
            termina el contrato de arrendamiento o cuando existe una causal
            legal que obliga a su restitución.
          </p>

          <p className={styles.paragraph}>
            Aunque muchas entregas se realizan de forma voluntaria, también
            existen casos en los que el arrendatario permanece en el inmueble
            pese a haber finalizado el contrato, presentar mora en el pago de
            los cánones o incumplir otras obligaciones contractuales.
          </p>

          <p className={styles.paragraph}>
            Antes de acudir a un proceso judicial de restitución de inmueble
            arrendado, la conciliación ofrece un espacio para que ambas partes
            negocien una salida que reduzca tiempos, costos y desgaste
            emocional.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En muchos casos, un acuerdo conciliatorio evita meses de litigio y
              permite recuperar el inmueble de manera organizada y con respaldo
              jurídico.
            </p>
          </div>
        </div>

        {/* CUANDO CONVIENE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene intentar una conciliación antes de demandar la
            restitución del inmueble?
          </h2>

          <p className={styles.paragraph}>
            En muchos conflictos de arrendamiento, la conciliación representa el
            primer paso para intentar una solución rápida y menos costosa. Antes
            de iniciar un proceso judicial de restitución de inmueble arrendado,
            las partes pueden reunirse en una audiencia para buscar un acuerdo
            sobre la entrega voluntaria del bien y las obligaciones pendientes.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo suele ser especialmente útil cuando existe
            disposición para dialogar o cuando el conflicto está relacionado con
            el pago de cánones, servicios públicos, daños al inmueble o el plazo
            para realizar la entrega. En muchos casos, un acuerdo oportuno evita
            meses de litigio y permite que el propietario recupere su inmueble
            en menos tiempo.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no solo busca recuperar el inmueble, sino también
              resolver de forma integral las diferencias económicas entre
              arrendador y arrendatario.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué situaciones puede utilizarse la conciliación para recuperar
            un inmueble?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta útil cuando existe disposición de las partes
            para dialogar y encontrar una solución antes de iniciar un proceso
            judicial. Algunos de los casos más frecuentes son:
          </p>

          <ul className={styles.list}>
            <li>Terminación del contrato de arrendamiento.</li>
            <li>Incumplimiento en el pago de cánones.</li>
            <li>Incumplimiento en el pago de servicios públicos.</li>
            <li>Negativa del arrendatario a entregar el inmueble.</li>
            <li>Entrega con daños o deterioros.</li>
            <li>Incumplimiento de acuerdos previamente pactados.</li>
            <li>Terminación anticipada del contrato.</li>
            <li>Conflictos por inventarios o muebles entregados.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Entre más pronto se solicite la conciliación, mayores son las
              posibilidades de alcanzar un acuerdo sin acudir a un proceso de
              restitución del inmueble.
            </p>
          </div>
        </div>

        {/* ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué acuerdos pueden lograrse durante una conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cada caso es diferente, por lo que las partes tienen la posibilidad
            de construir soluciones ajustadas a sus necesidades. El conciliador
            facilita el diálogo para que el acuerdo sea claro, equilibrado y
            jurídicamente válido.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Fecha de entrega del inmueble</h3>

              <p>
                Se establece el día exacto en que el arrendatario realizará la
                entrega voluntaria del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pago de cánones pendientes</h3>

              <p>
                Las partes pueden acordar el pago total o mediante cuotas de los
                valores adeudados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reparación de daños</h3>

              <p>
                Es posible definir quién asumirá las reparaciones del inmueble o
                el pago correspondiente por los daños ocasionados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega de paz y salvo</h3>

              <p>
                También pueden pactarse condiciones relacionadas con servicios
                públicos, administración, inventarios y entrega final del
                inmueble.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de recuperar un inmueble mediante conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Menor tiempo</h3>

              <p>
                La conciliación puede resolver el conflicto mucho antes que un
                proceso judicial de restitución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ahorro económico</h3>

              <p>
                Disminuye gastos asociados a procesos judiciales prolongados y
                otras actuaciones legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>

              <p>
                Las partes pueden negociar fechas de entrega, pagos pendientes y
                demás obligaciones relacionadas con el contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El acuerdo queda plasmado en un acta de conciliación con efectos
                legales para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de conciliación para la entrega del inmueble?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento inicia con la solicitud de una audiencia de
            conciliación ante un centro autorizado. Posteriormente, el
            arrendatario es citado para participar en la reunión junto con el
            arrendador.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia, el conciliador facilita el diálogo para que
            las partes definan aspectos como la fecha de entrega, el estado del
            inmueble, los pagos pendientes, los servicios públicos, los daños
            existentes y cualquier otra obligación derivada del contrato.
          </p>

          <p className={styles.paragraph}>
            Cuando ambas partes llegan a un acuerdo, este se incorpora en un
            acta de conciliación que produce efectos jurídicos y sirve como
            respaldo del compromiso adquirido.
          </p>
        </div>

        {/* NO ASISTIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si el arrendatario no asiste a la audiencia de
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando una de las partes ha sido debidamente citada y decide no
            asistir sin una justificación válida, la audiencia podrá dejar
            constancia de dicha situación. Dependiendo del caso, este documento
            puede resultar útil si posteriormente es necesario acudir ante la
            jurisdicción competente.
          </p>

          <p className={styles.paragraph}>
            Aunque la ausencia del arrendatario impide alcanzar un acuerdo
            voluntario, intentar la conciliación demuestra la intención del
            propietario de resolver el conflicto por una vía dialogada antes de
            iniciar un proceso judicial.
          </p>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar la conciliación
          </h2>

          <p className={styles.paragraph}>
            Llevar información completa permite que la audiencia sea más
            eficiente y facilita la construcción de acuerdos claros.
          </p>

          <ul className={styles.list}>
            <li>Contrato de arrendamiento.</li>
            <li>Inventario inicial del inmueble.</li>
            <li>Registro fotográfico cuando exista.</li>
            <li>Comprobantes de pago del canon.</li>
            <li>Recibos de servicios públicos.</li>
            <li>Comunicaciones entre arrendador y arrendatario.</li>
            <li>Cotizaciones o soportes de reparaciones.</li>
            <li>Cualquier otro documento relacionado con el conflicto.</li>
          </ul>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación o proceso de restitución: ¿cuál es la diferencia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación busca que las partes lleguen voluntariamente a un
            acuerdo sobre la entrega del inmueble y las obligaciones derivadas
            del contrato de arrendamiento. En cambio, el proceso de restitución
            de inmueble arrendado es un trámite judicial que será decidido por
            un juez cuando no exista acuerdo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Promueve soluciones negociadas, suele ser más rápida y permite
                mantener una mejor relación entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso judicial</h3>

              <p>
                Implica mayores tiempos, costos procesales y una decisión
                adoptada por un juez cuando no fue posible conciliar.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar recuperar un inmueble arrendado
          </h2>

          <p className={styles.paragraph}>
            En ocasiones, el deseo de recuperar rápidamente un inmueble lleva a
            tomar decisiones que pueden complicar aún más el conflicto o generar
            responsabilidades legales para el propietario.
          </p>

          <ul className={styles.list}>
            <li>Intentar desalojar al arrendatario por cuenta propia.</li>
            <li>Suspender arbitrariamente los servicios públicos.</li>
            <li>No conservar evidencia de los incumplimientos.</li>
            <li>No documentar los daños ocasionados al inmueble.</li>
            <li>Desconocer las obligaciones establecidas en el contrato.</li>
            <li>No intentar mecanismos de solución como la conciliación.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Actuar conforme a los mecanismos legales disponibles protege los
              derechos del propietario y reduce el riesgo de nuevos conflictos
              durante el proceso de recuperación del inmueble.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación obliga a entregar el inmueble?</h3>
              <p>
                Sí, si se firma un acuerdo, este tiene efectos legales en
                Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>
                Se puede iniciar un proceso judicial de restitución de inmueble
                arrendado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es más rápido que un proceso judicial?</h3>
              <p>
                Sí, la conciliación es significativamente más rápida y menos
                costosa.
              </p>
            </div>
          </div>
        </div>

        {/* VALIDEZ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué validez tiene un acuerdo de conciliación sobre la entrega del
            inmueble?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes alcanzan un acuerdo, este queda consignado en un
            acta de conciliación elaborada por un centro autorizado. Dicho
            documento tiene efectos jurídicos y contiene los compromisos
            asumidos por el arrendador y el arrendatario respecto a la entrega
            del inmueble, el pago de obligaciones pendientes o cualquier otro
            aspecto acordado durante la audiencia.
          </p>

          <p className={styles.paragraph}>
            Contar con un acuerdo formal brinda mayor seguridad para ambas
            partes, facilita el cumplimiento de los compromisos adquiridos y
            reduce la posibilidad de futuros conflictos relacionados con el
            contrato de arrendamiento.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas recuperar un inmueble en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos de arrendamiento mediante
            conciliación rápida, legal y efectiva en Colombia.
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
