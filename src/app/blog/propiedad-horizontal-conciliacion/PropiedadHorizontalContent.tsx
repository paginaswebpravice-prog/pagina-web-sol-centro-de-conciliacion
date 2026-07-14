"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PropiedadHorizontalContent() {
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
            Conciliación • Propiedad Horizontal • Ley 675 de 2001
          </span>

          <h1 className={styles.title}>
            Conciliación en Propiedad Horizontal en Colombia: Cómo Resolver
            Conflictos entre Vecinos, Administración y Copropietarios sin Llegar
            a un Proceso Judicial
          </h1>

          <p className={styles.heroText}>
            Vivir en un edificio o conjunto residencial implica compartir
            espacios, respetar reglas de convivencia y mantener una relación
            permanente con otros propietarios, residentes y la administración.
            Cuando estas relaciones se deterioran, pueden surgir conflictos que
            afectan la tranquilidad de todos.
          </p>

          <p className={styles.heroText}>
            La conciliación en propiedad horizontal es uno de los mecanismos más
            efectivos para solucionar este tipo de diferencias de forma rápida,
            confidencial y con plena validez jurídica. En muchos casos permite
            alcanzar acuerdos sin necesidad de iniciar un proceso judicial largo
            y costoso.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué conflictos pueden resolverse mediante
            conciliación, cuándo acudir a un centro de conciliación, cuáles son
            los beneficios del procedimiento y qué aspectos debes tener en
            cuenta antes de presentar una solicitud.
          </p>
        </div>

        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la propiedad horizontal y cómo funciona en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La propiedad horizontal es el régimen jurídico que regula edificios,
            conjuntos residenciales, conjuntos comerciales y desarrollos
            inmobiliarios donde coexisten bienes privados y bienes comunes. Su
            funcionamiento está principalmente regulado por la Ley 675 de 2001,
            la cual establece derechos, deberes y mecanismos para garantizar la
            adecuada convivencia entre los copropietarios.
          </p>

          <p className={styles.paragraph}>
            Este régimen busca equilibrar el derecho de cada propietario sobre
            su inmueble con la obligación de respetar los intereses colectivos
            de la copropiedad. Por ello existen reglamentos internos, órganos de
            administración, asambleas, consejos de administración y
            administradores que participan en la toma de decisiones.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, cuando aparecen desacuerdos sobre el uso de zonas
            comunes, cuotas de administración, convivencia o decisiones
            administrativas, la conciliación puede convertirse en una
            alternativa eficiente para evitar que el conflicto escale hasta un
            proceso judicial.
          </p>

          <div className={styles.highlightBox}>
            <p>
              No todos los desacuerdos entre vecinos requieren una demanda. En
              muchos casos es posible alcanzar acuerdos duraderos mediante una
              audiencia de conciliación en la que ambas partes participan
              voluntariamente con la ayuda de un conciliador imparcial.
            </p>
          </div>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuáles son los conflictos más frecuentes en propiedad horizontal?
          </h2>

          <p className={styles.paragraph}>
            Los conflictos dentro de una copropiedad pueden surgir por múltiples
            razones. Algunos se originan por diferencias entre vecinos, mientras
            que otros involucran directamente a la administración, al consejo de
            administración o incluso a la asamblea de copropietarios.
          </p>

          <ul className={styles.list}>
            <li>Ruido excesivo durante horarios de descanso.</li>

            <li>Incumplimiento del reglamento de propiedad horizontal.</li>

            <li>Conflictos relacionados con mascotas.</li>

            <li>Uso indebido de parqueaderos.</li>

            <li>Apropiación de zonas comunes.</li>

            <li>Daños ocasionados en bienes comunes.</li>

            <li>Cobro de cuotas de administración.</li>

            <li>Expensas comunes extraordinarias.</li>

            <li>Problemas con el administrador.</li>

            <li>Sanciones impuestas por la administración.</li>

            <li>Decisiones adoptadas por la asamblea.</li>

            <li>Inconformidades con el consejo de administración.</li>
          </ul>

          <p className={styles.paragraph}>
            Aunque cada caso presenta características diferentes, muchos de
            estos conflictos pueden solucionarse mediante el diálogo cuando
            existe voluntad de ambas partes para encontrar alternativas
            razonables.
          </p>
        </div>

        {/* TIPOS DE CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos entre vecinos</h3>

              <p>
                Diferencias relacionadas con ruidos, convivencia, daños,
                mascotas, parqueaderos o afectaciones al uso pacífico de la
                copropiedad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos con la administración</h3>

              <p>
                Inconformidades frente a decisiones administrativas, cobros,
                multas, reglamentos internos o actuaciones del administrador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cobro de cuotas</h3>

              <p>
                Acuerdos relacionados con cuotas ordinarias, extraordinarias,
                intereses y formas de pago para evitar procesos judiciales
                posteriores.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            La conciliación permite que las partes construyan conjuntamente la
            solución, lo que normalmente facilita el cumplimiento de los
            acuerdos alcanzados y mejora la convivencia dentro de la
            copropiedad.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Beneficios de la conciliación</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mejora la convivencia</h3>
              <p>
                Permite resolver conflictos entre vecinos de forma pacífica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita procesos legales</h3>
              <p>Reduce la necesidad de demandas en juzgados civiles.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos legales</h3>
              <p>El acta de conciliación tiene validez jurídica en Colombia.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona la conciliación?</h2>

          <p className={styles.paragraph}>
            Las partes involucradas pueden acudir a un centro de conciliación en
            Colombia para exponer el conflicto y buscar una solución amigable.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este queda consignado en un acta con efectos legales
            obligatorios.
          </p>
        </div>

        {/* SOLUCIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Soluciones más comunes</h2>

          <ul className={styles.list}>
            <li>Acuerdos de convivencia entre vecinos.</li>
            <li>Pagos de administración pendientes.</li>
            <li>Compensaciones por daños.</li>
            <li>Regulación del uso de zonas comunes.</li>
            <li>Resolución de sanciones internas.</li>
          </ul>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ventajas ofrece la conciliación frente a un proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto requiere un análisis particular, la
            conciliación suele ser una alternativa atractiva porque permite
            reducir tiempos, costos y el desgaste que implica un litigio.
            Además, favorece soluciones construidas por las propias partes, lo
            que incrementa las posibilidades de cumplimiento del acuerdo
            alcanzado.
          </p>

          <ul className={styles.list}>
            <li>Reduce tiempos de resolución.</li>

            <li>Disminuye costos jurídicos.</li>

            <li>Protege la convivencia entre vecinos.</li>

            <li>Favorece soluciones flexibles.</li>

            <li>Evita procesos judiciales prolongados.</li>

            <li>El acuerdo tiene efectos legales.</li>

            <li>Puede incluir compromisos de pago.</li>

            <li>Permite restaurar las relaciones entre las partes.</li>
          </ul>
        </div>

        {/* QUE DICE LA LEY 675 DE 2001 */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué dice la Ley 675 de 2001 sobre la solución de conflictos en
            propiedad horizontal?
          </h2>

          <p className={styles.paragraph}>
            La <strong>Ley 675 de 2001</strong> regula el régimen de propiedad
            horizontal en Colombia y establece el marco jurídico para la
            administración, conservación y adecuada convivencia dentro de
            edificios y conjuntos residenciales. Aunque muchas diferencias
            pueden resolverse mediante diálogo directo, cuando esto no es
            posible la conciliación constituye un mecanismo idóneo para buscar
            acuerdos antes de acudir a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            En la práctica, acudir a un centro de conciliación permite que
            propietarios, residentes, administradores y miembros del consejo de
            administración expongan sus posiciones con la intervención de un
            conciliador imparcial, quien facilita la comunicación sin imponer
            decisiones.
          </p>

          <p className={styles.paragraph}>
            Cuando las partes logran un acuerdo, este queda consignado en un
            acta con efectos jurídicos, brindando seguridad y claridad sobre las
            obligaciones que cada una asume para solucionar el conflicto.
          </p>
        </div>

        {/* COMO SE DESARROLLA UNA CONCILIACION EN PROPIEDAD HORIZONTAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se desarrolla una conciliación en propiedad horizontal?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, la mayoría de
            conciliaciones siguen un procedimiento sencillo que busca
            privilegiar el diálogo y evitar la confrontación entre las partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                La persona interesada presenta una solicitud explicando el
                conflicto y aportando la información necesaria para citar a la
                otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación programa la audiencia e informa la
                fecha, hora y lugar donde se desarrollará la reunión.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                Cada participante expone su posición mientras el conciliador
                promueve alternativas que permitan construir un acuerdo
                equilibrado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acta</h3>

              <p>
                Si existe consenso, se firma un acta de conciliación con efectos
                jurídicos que obliga a cumplir los compromisos adquiridos.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS QUE PUEDEN FACILITAR UNA CONCILIACION EN PROPIEDAD HORIZONTAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar una conciliación en propiedad
            horizontal
          </h2>

          <p className={styles.paragraph}>
            Llevar la documentación adecuada permite que el conciliador
            comprenda mejor el conflicto y ayuda a que las partes negocien con
            información objetiva. Dependiendo del caso, pueden resultar útiles
            documentos como:
          </p>

          <ul className={styles.list}>
            <li>Reglamento de propiedad horizontal.</li>

            <li>Actas de asamblea de copropietarios.</li>

            <li>Actas del consejo de administración.</li>

            <li>Estados de cuenta de cuotas de administración.</li>

            <li>Fotografías o videos relacionados con el conflicto.</li>

            <li>Correos electrónicos y comunicaciones oficiales.</li>

            <li>Mensajes enviados entre las partes.</li>

            <li>Requerimientos realizados por la administración.</li>

            <li>Comprobantes de pago.</li>

            <li>Cualquier otro documento relacionado con la controversia.</li>
          </ul>
        </div>

        {/* ERRORES FRECUENTES QUE DIFICULTAN RESOLVER CONFLICTOS ENTRE VECINOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes que dificultan resolver conflictos entre vecinos
          </h2>

          <p className={styles.paragraph}>
            En muchas ocasiones el conflicto se agrava por decisiones tomadas en
            medio de la molestia. Antes de acudir a un proceso judicial conviene
            evitar algunas conductas que suelen empeorar la situación.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No conservar pruebas</h3>

              <p>
                Fotografías, comunicaciones y documentos permiten explicar mejor
                lo ocurrido durante la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Entre más rápido se gestione el conflicto, mayores serán las
                posibilidades de encontrar una solución satisfactoria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negarse al diálogo</h3>

              <p>
                Mantener una posición completamente inflexible suele impedir
                acuerdos beneficiosos para ambas partes.
              </p>
            </div>
          </div>
        </div>

        {/* ¿QUE SUCEDEN SI UNA DE LAS PARTES INCUMPLE EL ACUERDO DE CONCILIACION? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si una de las partes incumple el acuerdo de
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando durante la audiencia las partes alcanzan un acuerdo y este
            queda consignado en un acta de conciliación, nacen obligaciones que
            deben ser cumplidas dentro de los plazos establecidos.
          </p>

          <p className={styles.paragraph}>
            Si posteriormente alguna persona incumple los compromisos asumidos,
            la otra parte podrá analizar las acciones legales que correspondan
            para exigir su cumplimiento, teniendo en cuenta las características
            específicas del caso.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Alcanzar un acuerdo claro, preciso y realista aumenta
              significativamente las probabilidades de que las partes lo cumplan
              voluntariamente y se preserve una buena convivencia dentro de la
              copropiedad.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se pueden resolver conflictos entre vecinos?</h3>
              <p>
                Sí, mediante conciliación se pueden resolver conflictos de
                convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La administración puede conciliar?</h3>
              <p>
                Sí, la administración puede participar en procesos de
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio ir a juicio?</h3>
              <p>
                No, la conciliación es una alternativa previa al proceso
                judicial.
              </p>
            </div>
          </div>
        </div>

        {/* CUANDO ES RECOMENDABLE SOLICITAR ASESORÍA JURÍDICA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable solicitar asesoría jurídica?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas diferencias pueden resolverse mediante diálogo,
            existen situaciones en las que resulta conveniente recibir
            orientación jurídica antes de iniciar una conciliación. Esto permite
            identificar los derechos, obligaciones y alternativas disponibles
            según las circunstancias del caso.
          </p>

          <p className={styles.paragraph}>
            La asesoría también ayuda a preparar la documentación, evaluar
            posibles propuestas de acuerdo y participar en la audiencia con
            mayor claridad sobre los efectos legales que puede producir el acta
            de conciliación.
          </p>

          <p className={styles.paragraph}>
            Cada conflicto en propiedad horizontal tiene características
            particulares. Por ello, una evaluación previa puede contribuir a que
            la conciliación sea más eficiente y aumente las posibilidades de
            alcanzar un acuerdo estable y beneficioso para todas las partes.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes conflictos en tu conjunto residencial?
          </h3>

          <p className={styles.ctaText}>
            Resuelve problemas de propiedad horizontal mediante conciliación
            rápida, legal y efectiva en Colombia.
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
