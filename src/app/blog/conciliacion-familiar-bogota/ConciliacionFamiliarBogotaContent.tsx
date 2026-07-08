"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionFamiliarBogotaContent() {
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
            Conciliación Familiar en Bogotá • Derecho de Familia
          </span>

          <h1 className={styles.title}>
            Conciliación Familiar en Bogotá: Cómo Resolver Custodia, Cuota
            Alimentaria, Visitas y Conflictos Familiares sin Ir a un Juez
          </h1>

          <p className={styles.heroText}>
            La <strong>conciliación familiar en Bogotá</strong> es uno de los
            mecanismos más utilizados para solucionar conflictos entre padres,
            hijos, exparejas y demás integrantes de una familia mediante el
            diálogo y la construcción de acuerdos con respaldo jurídico.
          </p>

          <p className={styles.heroText}>
            En muchos asuntos de familia, intentar una conciliación antes de
            iniciar un proceso judicial puede ahorrar meses de trámites, reducir
            costos y, especialmente, proteger las relaciones familiares,
            priorizando siempre el bienestar de los niños, niñas y adolescentes
            cuando existen menores involucrados.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué es la conciliación familiar, qué
            conflictos se pueden resolver, cuándo puede ser obligatoria, cuáles
            son sus beneficios, qué documentos suelen solicitarse y cómo se
            desarrolla una audiencia de conciliación en Bogotá.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación familiar y para qué sirve?
          </h2>

          <p className={styles.paragraph}>
            La conciliación familiar es un mecanismo alternativo de solución de
            conflictos mediante el cual dos o más integrantes de una familia
            intentan llegar a acuerdos con la ayuda de un conciliador imparcial.
            Su finalidad es encontrar soluciones voluntarias que beneficien a
            todas las partes y que tengan plena validez jurídica.
          </p>

          <p className={styles.paragraph}>
            Este procedimiento busca evitar que los conflictos familiares
            escalen hasta convertirse en largos procesos judiciales, promoviendo
            el diálogo, el respeto y la construcción de acuerdos estables que
            puedan cumplirse en el tiempo.
          </p>

          <p className={styles.paragraph}>
            En Bogotá la conciliación familiar puede adelantarse en centros de
            conciliación autorizados, entidades habilitadas y otros organismos
            competentes, dependiendo del tipo de conflicto que exista entre las
            partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando se logra un acuerdo y este queda consignado en un acta de
              conciliación, dicho documento produce efectos jurídicos y puede
              hacerse cumplir en caso de incumplimiento.
            </p>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos familiares pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación familiar puede utilizarse para solucionar una amplia
            variedad de conflictos cuando estos son conciliables conforme a la
            ley colombiana.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Custodia y cuidado personal</h3>

              <p>
                Acuerdos relacionados con quién ejercerá el cuidado de los hijos
                y cómo se distribuirán las responsabilidades entre ambos padres.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuota alimentaria</h3>

              <p>
                Definición o modificación de cuotas alimentarias, forma de pago,
                gastos extraordinarios y obligaciones económicas respecto de los
                hijos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Régimen de visitas</h3>

              <p>
                Organización de horarios, vacaciones, fines de semana y demás
                espacios de convivencia entre padres e hijos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Separación de bienes</h3>

              <p>
                Acuerdos relacionados con aspectos patrimoniales derivados de la
                convivencia o separación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones familiares</h3>

              <p>
                Distribución de responsabilidades económicas y familiares cuando
                existe desacuerdo entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Otros conflictos de familia</h3>

              <p>
                Diferencias derivadas de relaciones familiares que puedan
                solucionarse mediante acuerdos voluntarios.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación familiar frente a una demanda judicial
          </h2>

          <ul className={styles.list}>
            <li>Evita procesos largos en juzgados de familia.</li>
            <li>Reduce el impacto emocional en la familia.</li>
            <li>Permite acuerdos flexibles y personalizados.</li>
            <li>Tiene validez legal en Colombia.</li>
            <li>Protege el interés superior de los menores.</li>
          </ul>
        </div>

        {/* DONDE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Centros donde puedes realizar una conciliación familiar en Bogotá
          </h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos de universidades.</li>
            <li>Entidades públicas de familia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En Bogotá existen múltiples entidades autorizadas para resolver
              conflictos familiares de forma legal y segura.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué cada vez más familias en Bogotá optan por la conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación familiar ayuda a descongestionar los juzgados de
            familia en Bogotá y promueve soluciones más humanas.
          </p>

          <p className={styles.paragraph}>
            Además, permite acuerdos más rápidos y menos traumáticos para las
            partes.
          </p>
        </div>

        {/* CUANDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es recomendable acudir a una conciliación familiar?
          </h2>

          <p className={styles.paragraph}>
            Muchas familias esperan hasta que el conflicto se vuelve demasiado
            complejo para buscar una solución. Sin embargo, acudir oportunamente
            a una audiencia de conciliación puede evitar procesos judiciales
            prolongados y facilitar un ambiente de diálogo.
          </p>

          <p className={styles.paragraph}>
            La conciliación resulta especialmente útil cuando las partes desean
            mantener una comunicación respetuosa, proteger el bienestar de los
            hijos y construir acuerdos que puedan cumplirse de manera
            voluntaria.
          </p>

          <ul className={styles.list}>
            <li>Cuando existen desacuerdos sobre la cuota alimentaria.</li>
            <li>Cuando se requiere definir la custodia de los hijos.</li>
            <li>Cuando es necesario establecer un régimen de visitas.</li>
            <li>Cuando ambas partes desean evitar un proceso judicial.</li>
            <li>Cuando buscan una solución rápida y menos conflictiva.</li>
          </ul>
        </div>

        {/* COMO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es una audiencia de conciliación familiar en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            Una audiencia de conciliación es un espacio de diálogo dirigido por
            un conciliador imparcial, quien facilita la comunicación entre las
            partes y promueve la construcción de acuerdos ajustados a la ley.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia cada persona tiene la oportunidad de exponer su
            situación, presentar sus propuestas y escuchar las alternativas
            planteadas por la otra parte. El conciliador no impone una decisión;
            su función es orientar el proceso para que sean las propias partes
            quienes construyan una solución.
          </p>

          <p className={styles.paragraph}>
            Si finalmente se alcanza un acuerdo, este queda consignado en un
            acta de conciliación que produce efectos jurídicos y puede servir
            como respaldo en caso de incumplimiento.
          </p>
        </div>

        {/* CUÁNDO ES OBLIGATORIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es obligatoria la conciliación familiar en Bogotá?
          </h2>

          <p className={styles.paragraph}>
            En diversos asuntos de familia, la conciliación puede constituir un
            requisito previo antes de acudir ante un juez. Esto significa que
            las partes deben intentar resolver el conflicto mediante el diálogo
            y la intervención de un conciliador autorizado antes de iniciar un
            proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del caso concreto y de la normativa aplicable, este
            mecanismo puede utilizarse para buscar acuerdos relacionados con
            cuota alimentaria, custodia, régimen de visitas, obligaciones
            familiares y otros asuntos que admitan conciliación.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no solo puede evitar un proceso
              judicial, sino también permitir que las partes construyan
              soluciones más rápidas, económicas y adaptadas a las necesidades
              de la familia.
            </p>
          </div>
        </div>

        {/* PREPARACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo prepararte para una audiencia de conciliación familiar?
          </h2>

          <p className={styles.paragraph}>
            Prepararse adecuadamente aumenta las posibilidades de alcanzar un
            acuerdo satisfactorio para todas las personas involucradas. Lo ideal
            es asistir con disposición al diálogo y con la documentación que
            permita sustentar las solicitudes realizadas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Define tus objetivos</h3>
              <p>
                Antes de la audiencia identifica cuáles son los acuerdos que
                deseas alcanzar y cuáles aspectos estás dispuesto a negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reúne la documentación</h3>
              <p>
                Lleva registros civiles, documentos de identidad, soportes de
                ingresos, gastos y cualquier información relacionada con el
                conflicto familiar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prioriza el bienestar familiar</h3>
              <p>
                Cuando existen hijos menores, las decisiones deben orientarse
                siempre a proteger sus derechos e intereses.
              </p>
            </div>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. Cuando las partes
            mantienen posiciones completamente diferentes, el conciliador deja
            constancia del resultado y cada persona podrá acudir a las acciones
            legales que correspondan según su caso.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, en muchas oportunidades la audiencia permite aclarar
            los puntos de desacuerdo y facilita que posteriormente las partes
            puedan negociar una solución sin necesidad de prolongar el conflicto
            durante meses o incluso años.
          </p>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si una de las partes incumple el acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            El acta de conciliación tiene efectos jurídicos y obliga a quienes
            la firman a cumplir los compromisos adquiridos. Si posteriormente
            alguna de las partes incumple lo pactado, el acuerdo puede hacerse
            valer mediante los mecanismos legales establecidos por la
            legislación colombiana.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Por esta razón es importante que todos los compromisos incluidos
              en el acta sean claros, específicos y realmente posibles de
              cumplir.
            </p>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que debes evitar antes de asistir a una conciliación
            familiar
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Asistir sin información</h3>

              <p>
                Llevar documentos incompletos o desconocer los hechos puede
                dificultar la construcción de un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No escuchar a la otra parte</h3>

              <p>
                La conciliación busca el diálogo. Mantener una posición
                totalmente inflexible suele disminuir las posibilidades de
                éxito.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Firmar sin comprender</h3>

              <p>
                Antes de aceptar cualquier acuerdo es importante leer
                detenidamente cada uno de los compromisos establecidos en el
                acta.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación familiar en Bogotá
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar la custodia?</h3>
              <p>Sí, siempre que se proteja el bienestar del menor.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar antes de demandar?</h3>
              <p>En muchos casos sí es requisito previo.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es legal?</h3>
              <p>Sí, tiene plena validez jurídica.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto familiar sin acudir a un proceso
            judicial?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver conflictos familiares de forma rápida, legal
            y sin procesos judiciales largos.
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
