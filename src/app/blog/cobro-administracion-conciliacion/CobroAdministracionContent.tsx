"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CobroAdministracionContent() {
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
            Conciliación en propiedad horizontal
          </span>

          <h1 className={styles.title}>
            Cobro de administración mediante conciliación en Colombia
          </h1>

          <p className={styles.heroText}>
            El cobro de cuotas de administración es uno de los problemas más
            frecuentes en conjuntos residenciales en Colombia. Cuando los
            propietarios o residentes dejan de pagar, se generan deudas que
            afectan el funcionamiento de la copropiedad.
          </p>

          <p className={styles.heroText}>
            La conciliación es una alternativa efectiva para recuperar estas
            obligaciones de manera rápida, legal y sin procesos judiciales
            extensos.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es el cobro de cuotas de administración en propiedad horizontal
            y por qué genera tantos conflictos?
          </h2>

          <p className={styles.paragraph}>
            Es el proceso mediante el cual la administración de un conjunto
            residencial cobra las cuotas de mantenimiento y funcionamiento a los
            propietarios o residentes.
          </p>

          <p className={styles.paragraph}>
            Estas cuotas son obligatorias y se destinan al sostenimiento de las
            zonas comunes y servicios del conjunto.
          </p>
        </div>

        {/* PROBLEMAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales problemas al cobrar cuotas de administración en
            conjuntos residenciales
          </h2>

          <ul className={styles.list}>
            <li>Morosidad en el pago de cuotas.</li>
            <li>Desacuerdos sobre valores cobrados.</li>
            <li>Falta de acuerdos de pago.</li>
            <li>Acumulación de cartera en el conjunto.</li>
            <li>Conflictos entre administración y propietarios.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, la conciliación permite recuperar estas deudas sin
              necesidad de procesos judiciales largos y costosos.
            </p>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué utilizar la conciliación para recuperar cuotas de
            administración?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Recuperación rápida</h3>
              <p>Permite llegar a acuerdos de pago sin procesos judiciales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita demandas</h3>
              <p>
                Reduce la necesidad de procesos ejecutivos contra propietarios.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>
                El acta de conciliación tiene plena validez jurídica en
                Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona el proceso de conciliación para recuperar cuotas de
            administración?
          </h2>

          <p className={styles.paragraph}>
            La administración o el propietario pueden acudir a un centro de
            conciliación para buscar un acuerdo sobre las cuotas pendientes.
          </p>

          <p className={styles.paragraph}>
            Se pueden establecer plazos, descuentos o acuerdos de pago
            flexibles.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Acuerdos que pueden lograrse mediante una conciliación por cuotas de
            administración
          </h2>

          <ul className={styles.list}>
            <li>Acuerdos de pago en cuotas.</li>
            <li>Condonación parcial de intereses.</li>
            <li>Reestructuración de deuda.</li>
            <li>Pago inmediato con descuento.</li>
            <li>Compromisos formales de pago.</li>
          </ul>
        </div>

        {/* CUANDO ACUDIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a una conciliación antes de iniciar un
            proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            En muchos casos, acudir primero a un centro de conciliación permite
            recuperar las cuotas de administración de manera más rápida que
            iniciar directamente un proceso ejecutivo. La conciliación brinda un
            espacio para negociar con el propietario moroso y establecer
            compromisos de pago que beneficien a ambas partes.
          </p>

          <p className={styles.paragraph}>
            Este mecanismo resulta especialmente útil cuando existe disposición
            para llegar a un acuerdo, evitando mayores costos procesales y
            reduciendo el tiempo necesario para recuperar la cartera vencida.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En muchos conjuntos residenciales, la conciliación permite
              recuperar la cartera sin necesidad de acudir inmediatamente a un
              juez.
            </p>
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos se necesitan para iniciar una conciliación por
            cuotas de administración?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Estado de cuenta</h3>

              <p>
                Documento donde se evidencie el valor adeudado y los periodos
                pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Certificación de deuda</h3>

              <p>
                Emitida por la administración o por quien tenga la
                representación de la copropiedad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reglamento de propiedad horizontal</h3>

              <p>
                Permite verificar las obligaciones relacionadas con las cuotas
                de administración.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soportes adicionales</h3>

              <p>
                Comunicaciones, acuerdos anteriores o cualquier documento
                relacionado con la obligación.
              </p>
            </div>
          </div>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si el propietario incumple el acuerdo de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes firman un acta de conciliación, el acuerdo
            adquiere efectos jurídicos. Si posteriormente el deudor incumple las
            obligaciones asumidas, el acreedor puede hacer valer dicho acuerdo
            mediante los mecanismos legales correspondientes.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, la conciliación no solo facilita la negociación,
            sino que también brinda seguridad jurídica frente a los compromisos
            adquiridos por las partes.
          </p>
        </div>

        {/* CASOS ESPECIALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que la conciliación resulta especialmente efectiva
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cuotas atrasadas</h3>

              <p>
                Cuando el propietario reconoce la deuda pero necesita
                facilidades de pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Intereses de mora</h3>

              <p>
                Las partes pueden negociar reducciones o nuevas condiciones para
                el pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos de pago</h3>

              <p>
                Es posible establecer cronogramas de pago ajustados a la
                capacidad económica del deudor.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos sobre el valor adeudado</h3>

              <p>
                La audiencia permite revisar las diferencias y buscar una
                solución consensuada.
              </p>
            </div>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de recuperar la cartera de administración mediante
            conciliación
          </h2>

          <ul className={styles.list}>
            <li>Reduce los tiempos de recuperación de la cartera.</li>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Disminuye costos legales para la copropiedad.</li>
            <li>Facilita acuerdos de pago flexibles.</li>
            <li>
              Contribuye a mantener una buena convivencia entre los
              propietarios.
            </li>
            <li>El acuerdo alcanzado produce efectos jurídicos.</li>
            <li>Permite negociar intereses y plazos de pago.</li>
            <li>Favorece una solución rápida y voluntaria del conflicto.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué establece la Ley 675 de 2001 sobre el pago de las cuotas de
            administración?
          </h2>

          <p className={styles.paragraph}>
            La Ley 675 de 2001 regula el régimen de propiedad horizontal en
            Colombia y establece que todos los propietarios están obligados a
            contribuir con el pago oportuno de las expensas comunes o cuotas de
            administración. Estos recursos permiten cubrir el mantenimiento de
            las zonas comunes, la seguridad, los servicios generales y el
            funcionamiento de la copropiedad.
          </p>

          <p className={styles.paragraph}>
            Cuando un propietario incumple esta obligación, la administración
            puede adelantar diferentes mecanismos para recuperar la cartera,
            entre ellos la conciliación, la celebración de acuerdos de pago y,
            cuando sea necesario, los procesos judiciales correspondientes.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Paso a paso para recuperar cuotas de administración mediante
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Paso 1</h3>

              <p>Calcular el valor total de la deuda y reunir los soportes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 2</h3>

              <p>
                Presentar la solicitud ante un centro de conciliación
                autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 3</h3>

              <p>Asistir a la audiencia para negociar un acuerdo de pago.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 4</h3>

              <p>
                Firmar el acta de conciliación con los compromisos acordados.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación vs proceso judicial para cobrar cuotas de
            administración
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Busca acuerdos voluntarios, normalmente implica menores costos y
                puede resolverse en menos tiempo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Proceso judicial</h3>

              <p>
                Procede cuando no existe acuerdo y requiere la intervención de
                un juez, lo que generalmente implica un trámite más largo.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar cobrar cuotas de administración
          </h2>

          <ul className={styles.list}>
            <li>No conservar el historial completo de pagos.</li>

            <li>Esperar demasiado tiempo para iniciar la gestión de cobro.</li>

            <li>No documentar los acuerdos alcanzados.</li>

            <li>No enviar comunicaciones previas al propietario.</li>

            <li>No acudir oportunamente a un centro de conciliación.</li>

            <li>No verificar el valor actualizado de la deuda.</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden cobrar cuotas atrasadas?</h3>
              <p>Sí, mediante conciliación o procesos legales en Colombia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no hay acuerdo?</h3>
              <p>Se puede iniciar un proceso judicial de cobro.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, el acta de conciliación tiene fuerza legal.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Por qué la conciliación es una alternativa efectiva para recuperar
            cuotas de administración?
          </h3>

          <p className={styles.ctaText}>
            Recupera cuotas de administración mediante conciliación rápida y
            efectiva en Colombia.
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
