"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function AcuerdoPagoCanonesContent() {
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
            Conciliación de arrendamientos en Colombia
          </span>

          <h1 className={styles.title}>
            Acuerdo de pago de cánones vencidos en Colombia: modelo, ejemplo y
            guía completa para negociar deudas de arrendamiento en 2026
          </h1>

          <p className={styles.heroText}>
            ¿Tienes una deuda por{" "}
            <strong>cánones de arrendamiento vencidos</strong> o eres
            propietario de un inmueble y deseas recuperar los valores adeudados
            sin acudir inmediatamente a un proceso judicial? Un{" "}
            <strong>acuerdo de pago por cánones vencidos</strong> puede
            convertirse en la alternativa más rápida, económica y segura para
            resolver el conflicto.
          </p>

          <p className={styles.heroText}>
            Mediante la conciliación, arrendador y arrendatario pueden
            establecer nuevas condiciones de pago, acordar plazos, definir
            cuotas, negociar intereses, condonar parte de la deuda cuando sea
            conveniente y dejar todas las obligaciones consignadas en un acta
            con importantes efectos jurídicos.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué son los cánones vencidos, cuándo
            conviene celebrar un acuerdo de pago, qué debe contener, cómo
            redactarlo, ejemplos prácticos, errores frecuentes y qué ocurre si
            alguna de las partes incumple posteriormente lo pactado.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un acuerdo de pago por cánones de arrendamiento vencidos?
          </h2>

          <p className={styles.paragraph}>
            Un acuerdo de pago por cánones vencidos es un compromiso voluntario
            mediante el cual el arrendador y el arrendatario establecen nuevas
            condiciones para cancelar las sumas adeudadas derivadas del contrato
            de arrendamiento.
          </p>

          <p className={styles.paragraph}>
            En lugar de iniciar inmediatamente un proceso judicial de cobro o
            una restitución del inmueble arrendado, las partes pueden acudir a
            un centro de conciliación para negociar la deuda y documentar todos
            los compromisos en un acta de conciliación.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo resulta especialmente útil cuando el arrendatario
            reconoce la obligación, pero necesita un plazo razonable para
            cumplir con el pago, mientras que el propietario busca recuperar su
            dinero de manera más rápida y con mayores probabilidades de éxito
            que mediante un litigio prolongado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo bien elaborado ofrece seguridad jurídica para ambas
              partes, reduce la incertidumbre y permite definir con claridad qué
              debe pagar el arrendatario, cuándo debe hacerlo y cuáles serán las
              consecuencias en caso de incumplimiento.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los cánones de arrendamiento vencidos y cuándo se
            consideran una deuda exigible en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Los cánones de arrendamiento vencidos corresponden a los valores del
            arriendo que el arrendatario dejó de pagar dentro de los plazos
            establecidos en el contrato.
          </p>

          <p className={styles.paragraph}>
            La mora puede comprender uno o varios meses de alquiler, así como
            otras obligaciones derivadas del contrato, dependiendo de lo pactado
            entre las partes.
          </p>

          <p className={styles.paragraph}>
            Cuando la deuda permanece durante un tiempo prolongado, es común que
            se acumulen intereses, gastos asociados al incumplimiento y
            conflictos sobre la continuidad del contrato, razón por la cual
            resulta recomendable intentar una conciliación antes de acudir a un
            proceso judicial.
          </p>

          <ul className={styles.list}>
            <li>Cánones mensuales pendientes de pago.</li>
            <li>Intereses por mora, cuando procedan.</li>
            <li>Servicios públicos asumidos por el arrendatario.</li>
            <li>Administración, cuando corresponda.</li>
            <li>Otras obligaciones derivadas del contrato.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene celebrar un acuerdo de pago por arriendos vencidos?
          </h2>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente conveniente cuando ambas
            partes desean evitar un proceso judicial y existe disposición para
            negociar nuevas condiciones de cumplimiento.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Existe voluntad de pago</h3>

              <p>
                El arrendatario reconoce la deuda y desea cumplir mediante
                cuotas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se busca evitar una demanda</h3>

              <p>
                Un acuerdo oportuno puede evitar procesos ejecutivos o de
                restitución del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Las partes quieren conservar el contrato</h3>

              <p>
                En algunos casos el propietario prefiere mantener el
                arrendamiento si el pago puede normalizarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se requiere seguridad jurídica</h3>

              <p>
                La conciliación permite dejar todas las obligaciones claramente
                documentadas.
              </p>
            </div>
          </div>
        </div>

        {/* CAUSAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué se generan los cánones de arrendamiento vencidos?
            Principales causas de la mora
          </h2>

          <ul className={styles.list}>
            <li>Pérdida de ingresos del arrendatario.</li>
            <li>Problemas financieros temporales.</li>
            <li>Desacuerdos contractuales.</li>
            <li>Retrasos en pagos laborales o ingresos variables.</li>
            <li>Falta de planeación financiera.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación es una alternativa clave para evitar
              que las deudas de arrendamiento escalen a procesos judiciales.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de celebrar un acuerdo de pago por cánones vencidos antes
            de una demanda judicial
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Recuperación más rápida</h3>

              <p>
                En muchos casos el propietario recupera su dinero antes que
                mediante un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reducción de costos</h3>

              <p>Disminuyen los gastos derivados de litigios prolongados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Flexibilidad</h3>

              <p>
                Las partes pueden negociar cuotas, plazos e incluso descuentos
                sobre la deuda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>

              <p>
                Todo queda documentado en un acta con importantes efectos
                legales.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo hacer un acuerdo de pago por arriendos vencidos mediante
            conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Las partes pueden acudir a un centro de conciliación en Colombia
            para establecer un acuerdo formal sobre la deuda de cánones
            vencidos.
          </p>

          <p className={styles.paragraph}>
            En la audiencia se definen montos, plazos y condiciones de pago que
            quedan consignados en un acta con valor legal.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe contener un acuerdo de pago de cánones vencidos?
          </h2>

          <p className={styles.paragraph}>
            Para que un acuerdo de pago sea claro y reduzca el riesgo de nuevos
            conflictos, es recomendable que cada obligación quede perfectamente
            identificada. Cuanto más específico sea el documento, mayores serán
            las posibilidades de cumplimiento voluntario y, en caso de
            incumplimiento, más sencillo será exigir las obligaciones pactadas.
          </p>

          <p className={styles.paragraph}>
            Durante una audiencia de conciliación, el conciliador ayuda a que el
            acuerdo sea preciso, verificable y comprensible para ambas partes,
            evitando cláusulas ambiguas o interpretaciones diferentes en el
            futuro.
          </p>

          <ul className={styles.list}>
            <li>Identificación completa del arrendador y del arrendatario.</li>
            <li>Identificación del inmueble arrendado.</li>
            <li>Valor exacto de la deuda.</li>
            <li>Meses correspondientes a los cánones vencidos.</li>
            <li>Intereses pactados, si existen.</li>
            <li>Condonaciones o descuentos acordados.</li>
            <li>Número de cuotas.</li>
            <li>Valor de cada cuota.</li>
            <li>Fecha exacta de pago.</li>
            <li>Medio de pago.</li>
            <li>Consecuencias del incumplimiento.</li>
            <li>Firma de las partes y del conciliador.</li>
          </ul>
        </div>

        {/* CONTENIDO CLAVE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe contener un acuerdo de pago por cánones de arrendamiento
            vencidos?
          </h2>

          <ul className={styles.list}>
            <li>Valor total de la deuda.</li>
            <li>Plazos de pago establecidos.</li>
            <li>Cuotas mensuales o parciales.</li>
            <li>Intereses o condonaciones (si aplica).</li>
            <li>Consecuencias del incumplimiento.</li>
          </ul>
        </div>

        {/* ERRORES FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al elaborar un acuerdo de pago
          </h2>

          <p className={styles.paragraph}>
            Muchos acuerdos fracasan porque contienen cláusulas ambiguas o no
            establecen claramente las obligaciones asumidas por las partes.
          </p>

          <ul className={styles.list}>
            <li>No indicar el valor exacto de la deuda.</li>
            <li>No establecer fechas concretas de pago.</li>
            <li>No definir el medio de pago.</li>
            <li>No identificar correctamente el inmueble.</li>
            <li>No incluir consecuencias frente al incumplimiento.</li>
            <li>Redactar obligaciones ambiguas.</li>
            <li>No conservar soportes de los pagos realizados.</li>
            <li>
              No formalizar el acuerdo mediante conciliación cuando resulta
              conveniente.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo claro protege tanto al arrendador como al arrendatario
              y reduce considerablemente el riesgo de nuevos conflictos
              relacionados con el mismo contrato de arrendamiento.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre acuerdos de pago de arriendo y cánones
            vencidos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Se puede hacer un acuerdo de pago por cánones de arrendamiento
                vencidos?
              </h3>
              <p>
                Sí, mediante conciliación es posible acordar pagos y plazos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué sucede si no se logra un acuerdo durante la conciliación?
              </h3>
              <p>
                El arrendador puede iniciar un proceso judicial de cobro o
                restitución del inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿El acuerdo de pago firmado en conciliación tiene fuerza legal?
              </h3>
              <p>Sí, una vez firmado tiene fuerza legal en Colombia.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas elaborar un acuerdo de pago por cánones vencidos o
            conciliar una deuda de arrendamiento?
          </h3>

          <p className={styles.ctaText}>
            Nuestros conciliadores pueden ayudarte a negociar deudas por
            arriendo, elaborar acuerdos de pago jurídicamente sólidos y
            formalizar compromisos con plena validez legal para evitar procesos
            de cobro o restitución del inmueble.
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
