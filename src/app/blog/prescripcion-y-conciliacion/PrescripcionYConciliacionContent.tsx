"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PrescripcionYConciliacionContent() {
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
            Prescripción, caducidad y conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            ¿La conciliación suspende la prescripción en Colombia? Guía completa
            sobre términos legales, caducidad y efectos jurídicos
          </h1>

          <p className={styles.heroText}>
            Una de las dudas más frecuentes antes de iniciar una reclamación
            consiste en saber si el tiempo para demandar continúa corriendo
            mientras se adelanta una conciliación o si dicho trámite puede
            afectar los términos legales. La respuesta depende de la naturaleza
            del conflicto y de las normas aplicables, por lo que conocer estas
            reglas resulta fundamental para proteger los derechos de las partes.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás una explicación sencilla sobre la relación
            entre la <strong>prescripción</strong>, la{" "}
            <strong>caducidad</strong> y la
            <strong> conciliación extrajudicial en Colombia</strong>, además de
            conocer cuándo es recomendable iniciar una solicitud de
            conciliación, cuáles son sus efectos jurídicos y qué riesgos existen
            cuando se dejan vencer los términos legales.
          </p>
        </div>

        {/* QUE ES LA PRESCRIPCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la prescripción y por qué es tan importante en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La prescripción es una institución jurídica mediante la cual el
            transcurso del tiempo puede afectar la posibilidad de exigir
            judicialmente un derecho. En otras palabras, aunque exista una
            obligación pendiente, la ley establece determinados plazos dentro de
            los cuales debe ejercerse la acción correspondiente.
          </p>

          <p className={styles.paragraph}>
            Estos términos buscan brindar seguridad jurídica tanto a quienes
            reclaman como a quienes deben responder por una obligación. Sin
            embargo, muchas personas desconocen que esperar demasiado tiempo
            puede impedirles iniciar un proceso judicial o dificultar
            considerablemente la protección de sus derechos.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del tipo de conflicto —civil, comercial, familiar o de
            otra naturaleza— los plazos pueden variar. Por ello, resulta
            recomendable analizar cada caso antes de dejar transcurrir largos
            periodos sin adelantar ninguna actuación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Una consulta jurídica oportuna y la presentación de una solicitud
              de conciliación cuando sea procedente pueden evitar que el paso
              del tiempo afecte la posibilidad de reclamar determinados
              derechos.
            </p>
          </div>
        </div>

        {/* QUE RELACION EXISTE ENTRE LA CONCILIACION Y LA PRESCRIPCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué relación existe entre la conciliación y la prescripción?
          </h2>

          <p className={styles.paragraph}>
            La conciliación extrajudicial tiene como finalidad que las partes
            intenten resolver el conflicto mediante el diálogo antes de acudir a
            un juez. Debido a ello, la legislación colombiana contempla efectos
            jurídicos importantes respecto de algunos términos procesales,
            siempre dentro de los eventos previstos por la ley.
          </p>

          <p className={styles.paragraph}>
            Muchas personas creen que presentar una solicitud de conciliación
            detiene automáticamente cualquier término de prescripción. Sin
            embargo, esa conclusión no siempre es correcta, ya que depende del
            tipo de acción, de la naturaleza del conflicto y del régimen
            jurídico aplicable.
          </p>

          <p className={styles.paragraph}>
            Precisamente por esa razón resulta aconsejable analizar cada caso
            antes de esperar hasta el último momento para iniciar una
            conciliación o presentar una demanda.
          </p>
        </div>

        {/* INFLUYE LA CONCILIACION EN LA PRESCRIPCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo influye la conciliación en la prescripción?
          </h2>

          <p className={styles.paragraph}>
            En diversos asuntos, la solicitud de conciliación extrajudicial
            puede producir efectos sobre los términos de prescripción mientras
            se desarrolla el procedimiento conciliatorio.
          </p>

          <p className={styles.paragraph}>
            Esto busca proteger a las partes que intentan resolver el conflicto
            de manera amistosa antes de acudir a un juez.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, los efectos concretos pueden variar según la naturaleza
            del asunto y las normas aplicables al caso.
          </p>
        </div>

        {/* DIFERENCIA ENTRE PRESCRIPCION Y CADUCIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencia entre prescripción y caducidad
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Prescripción</h3>

              <p>
                Se relaciona con la pérdida del derecho a reclamar una
                obligación por el transcurso del tiempo establecido por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Caducidad</h3>

              <p>
                Corresponde al vencimiento definitivo del plazo para ejercer una
                acción judicial específica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Importancia jurídica</h3>

              <p>
                Ambas figuras pueden afectar la posibilidad de acudir a los
                tribunales si no se actúa oportunamente.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES FRECUENTES RELACIONADOS CON LA PRESCRIPCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes relacionados con la prescripción
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Esperar demasiado</h3>

              <p>
                Muchas personas intentan negociar durante años sin adelantar
                ninguna actuación formal, lo que puede afectar los términos
                legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Desconocer los plazos</h3>

              <p>
                Cada acción tiene reglas diferentes. Pensar que todos los
                conflictos prescriben en el mismo tiempo suele generar errores
                importantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No buscar asesoría</h3>

              <p>
                Una revisión temprana permite identificar si todavía existe la
                posibilidad de reclamar y cuál es la mejor estrategia para
                hacerlo.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO CONVIENE INICIAR UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene iniciar una conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Cuando existe una deuda pendiente de pago.</li>
            <li>Ante incumplimientos contractuales.</li>
            <li>En conflictos civiles o comerciales.</li>
            <li>En controversias familiares conciliables.</li>
            <li>Antes de iniciar determinadas demandas judiciales.</li>
            <li>Cuando se busca una solución rápida y económica.</li>
          </ul>
        </div>

        {/* RIESGOS DE DEJAR PASAR DEMASIADO TIEMPO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Riesgos de dejar pasar demasiado tiempo
          </h2>

          <p className={styles.paragraph}>
            Muchas personas esperan varios años antes de reclamar una deuda o un
            incumplimiento contractual. En algunos casos esto puede provocar que
            los términos legales se agoten.
          </p>

          <p className={styles.paragraph}>
            Por esa razón, acudir tempranamente a un centro de conciliación en
            Bogotá o Colombia puede ayudar a buscar soluciones antes de que se
            presenten dificultades relacionadas con los plazos legales.
          </p>
        </div>

        {/* RECOMENDACIONES ANTES DE QUE VENZA UN TERMINO LEGAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de que venza un término legal
          </h2>

          <ul className={styles.list}>
            <li>
              Conservar todos los contratos y documentos relacionados con el
              conflicto.
            </li>
            <li>
              Guardar comprobantes de pago, correos electrónicos y
              conversaciones relevantes.
            </li>
            <li>
              No esperar hasta el último momento para buscar asesoría jurídica.
            </li>
            <li>
              Verificar si el caso requiere una conciliación como requisito
              previo.
            </li>
            <li>
              Solicitar orientación sobre los términos aplicables a la
              reclamación.
            </li>
            <li>
              Analizar si es conveniente presentar una solicitud de conciliación
              antes de acudir a un juez.
            </li>
            <li>
              Mantener actualizados los datos de contacto para recibir
              citaciones y notificaciones.
            </li>
          </ul>
        </div>

        {/* PREGUNTAS FRECUENTES SOBRE PRESCRIPCION Y CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la prescripción y la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Toda conciliación suspende la prescripción?</h3>

              <p>
                No necesariamente. Los efectos dependen del tipo de asunto y de
                las normas que regulan el caso concreto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no hay acuerdo?</h3>

              <p>
                Cuando la conciliación finaliza sin acuerdo, la persona
                interesada podrá evaluar las acciones judiciales que
                correspondan conforme a la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda?</h3>

              <p>
                No siempre. En algunos asuntos constituye un requisito previo
                antes de acudir a la jurisdicción competente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es mejor iniciar la conciliación cuanto antes?</h3>

              <p>
                Sí. Actuar oportunamente reduce el riesgo de enfrentar
                inconvenientes relacionados con los términos legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién puede orientar sobre estos términos?</h3>

              <p>
                Un abogado o un centro de conciliación puede brindar orientación
                sobre los efectos jurídicos que podrían aplicar en cada
                situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Las empresas también pueden acudir a conciliación?</h3>

              <p>
                Sí. Es un mecanismo ampliamente utilizado para resolver
                conflictos comerciales, contractuales y de cobro de
                obligaciones.
              </p>
            </div>
          </div>
        </div>

        {/* CTA BOX */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas orientación sobre conciliación en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Recibe acompañamiento para analizar tu caso, conocer los términos
            legales aplicables y explorar alternativas de solución mediante
            conciliación extrajudicial.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
