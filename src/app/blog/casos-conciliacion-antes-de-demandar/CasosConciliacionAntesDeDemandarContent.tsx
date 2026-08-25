"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CasosConciliacionAntesDeDemandarContent() {
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
            Conciliación antes de demandar en Colombia
          </span>

          <h1 className={styles.title}>
            ¿En qué casos se debe intentar una conciliación antes de demandar en
            Colombia?
          </h1>

          <p className={styles.heroText}>
            Cuando surge un problema con otra persona, una empresa, un vecino,
            un familiar o alguien con quien existe una obligación pendiente, es
            común pensar inmediatamente en presentar una demanda. Sin embargo,
            antes de iniciar un proceso judicial, vale la pena preguntarse si el
            conflicto puede resolverse mediante conciliación.
          </p>

          <p className={styles.heroText}>
            En algunos asuntos, intentar una conciliación puede ser una
            alternativa voluntaria para buscar un acuerdo. En otros casos, la
            legislación colombiana puede exigir que se intente previamente este
            mecanismo como requisito para poder acudir ante un juez, dependiendo
            del tipo de proceso y de las circunstancias particulares.
          </p>

          <p className={styles.heroText}>
            Por eso, no siempre existe una respuesta única. Lo importante es
            identificar la naturaleza del conflicto, los derechos involucrados y
            determinar si el asunto es susceptible de conciliación.
          </p>
        </div>

        {/* QUÉ SIGNIFICA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué significa conciliar antes de presentar una demanda?
          </h2>

          <p className={styles.paragraph}>
            Conciliar antes de demandar significa intentar resolver el conflicto
            mediante un diálogo formal entre las partes, con la intervención de
            un conciliador que facilita la comunicación y ayuda a construir
            posibles alternativas de solución.
          </p>

          <p className={styles.paragraph}>
            La conciliación no consiste simplemente en reunirse a conversar.
            Dependiendo del procedimiento y del resultado de la audiencia,
            pueden generarse documentos con efectos jurídicos importantes. Si
            las partes llegan a un acuerdo y este se formaliza cumpliendo los
            requisitos legales, el acta de conciliación puede producir efectos
            jurídicos respecto de lo acordado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>Un punto importante:</strong> intentar una conciliación no
              significa renunciar automáticamente a acudir ante un juez. Si no
              se alcanza un acuerdo, la posibilidad de continuar por otras vías
              dependerá de la naturaleza del caso y de los requisitos legales
              aplicables.
            </p>
          </div>
        </div>

        {/* REQUISITO DE PROCEDIBILIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo la conciliación es un requisito antes de demandar?
          </h2>

          <p className={styles.paragraph}>
            En Colombia existen situaciones en las que la conciliación puede
            funcionar como un <strong>requisito de procedibilidad</strong>. Esto
            significa que, para determinados asuntos, la persona debe acreditar
            que intentó previamente la conciliación antes de presentar la
            demanda, salvo las excepciones establecidas por la ley.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, no todos los conflictos deben pasar obligatoriamente
            por una conciliación antes de llegar a un proceso judicial. La
            necesidad de cumplir este requisito puede variar según la materia,
            el tipo de pretensión, la jurisdicción y las circunstancias del
            caso.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, antes de iniciar cualquier trámite es recomendable
            revisar si la conciliación previa es necesaria o si, por el
            contrario, puede acudirse directamente a la autoridad competente.
          </p>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que puede ser útil intentar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Aunque cada conflicto debe analizarse de forma particular, existen
            situaciones frecuentes en las que las partes pueden explorar la
            conciliación como una alternativa para intentar solucionar el
            problema sin comenzar inmediatamente un proceso judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Deudas y obligaciones económicas</h3>

              <p>
                Cuando una persona prestó dinero, entregó bienes o tiene una
                obligación pendiente de pago, la conciliación puede servir para
                intentar acordar fechas, cuotas, formas de pago o compromisos
                claros entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>

              <p>
                Las diferencias relacionadas con contratos, servicios, pagos,
                entregas o compromisos incumplidos pueden dar lugar a una
                negociación para definir cómo corregir o compensar la situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Problemas entre vecinos</h3>

              <p>
                Situaciones relacionadas con daños, ruido, obras, convivencia,
                límites o responsabilidades entre vecinos pueden beneficiarse de
                un espacio formal para buscar soluciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos familiares</h3>

              <p>
                Dependiendo del asunto y de los derechos involucrados, algunos
                conflictos familiares pueden abordarse mediante mecanismos de
                conciliación para intentar alcanzar acuerdos entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Los desacuerdos relacionados con pagos, obligaciones, daños,
                entregas o compromisos derivados de una relación de
                arrendamiento pueden ser objeto de análisis para determinar si
                es posible buscar un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños y responsabilidades</h3>

              <p>
                Cuando una persona considera que otra le causó un perjuicio, la
                conciliación puede abrir un espacio para discutir la
                responsabilidad y explorar fórmulas de reparación o
                compensación.
              </p>
            </div>
          </div>
        </div>

        {/* EJEMPLOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ejemplos prácticos de conflictos que pueden llegar a conciliación
          </h2>

          <p className={styles.paragraph}>
            A veces es más fácil entender cuándo puede utilizarse la
            conciliación observando situaciones cotidianas. Por ejemplo:
          </p>

          <ul className={styles.list}>
            <li>
              Una persona presta dinero a un familiar o amigo y el pago nunca se
              realiza en la fecha acordada.
            </li>

            <li>
              Dos personas realizan un acuerdo verbal sobre un trabajo y una de
              ellas considera que la otra incumplió lo pactado.
            </li>

            <li>
              Un vecino realiza una obra que causa daños en otra propiedad.
            </li>

            <li>
              Un arrendatario y un arrendador tienen diferencias relacionadas
              con pagos, reparaciones o la entrega del inmueble.
            </li>

            <li>
              Un cliente considera que recibió un servicio diferente al
              contratado o que el trabajo fue realizado de manera deficiente.
            </li>

            <li>
              Existen desacuerdos entre familiares sobre dinero, bienes u otras
              obligaciones susceptibles de acuerdo.
            </li>

            <li>
              Dos particulares tienen un compromiso económico pendiente y no
              logran ponerse de acuerdo sobre la forma de solucionarlo.
            </li>

            <li>
              Una persona reclama una compensación por daños que considera
              causados por otra persona.
            </li>
          </ul>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            No es lo mismo poder conciliar que estar obligado a conciliar
          </h2>

          <p className={styles.paragraph}>
            Esta diferencia es fundamental. Que un conflicto pueda resolverse
            mediante conciliación no significa necesariamente que la persona
            esté obligada a realizar una audiencia antes de acudir a un juez.
          </p>

          <p className={styles.paragraph}>
            Hay conflictos en los que las partes pueden decidir voluntariamente
            intentar un acuerdo porque consideran que es una alternativa más
            conveniente, rápida o práctica. En otros asuntos, la conciliación
            previa puede ser exigida como requisito para continuar con
            determinadas actuaciones judiciales.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Antes de presentar una demanda, conviene analizar dos preguntas:
              <strong>
                {" "}
                ¿este conflicto puede ser objeto de conciliación?
              </strong>{" "}
              y{" "}
              <strong>
                ¿en este caso la conciliación previa es obligatoria?
              </strong>{" "}
              La respuesta dependerá de la situación concreta.
            </p>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de iniciar un proceso
            judicial?
          </h2>

          <p className={styles.paragraph}>
            Incluso cuando la conciliación no sea obligatoria, intentar resolver
            el problema mediante un acuerdo puede ofrecer ventajas importantes,
            especialmente cuando las partes todavía tienen margen para negociar.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor control sobre el acuerdo</h3>

              <p>
                Las partes pueden participar directamente en la construcción de
                una solución, en lugar de dejar completamente la decisión en
                manos de un tercero.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Posibilidad de ahorrar tiempo</h3>

              <p>
                Alcanzar un acuerdo puede evitar que el conflicto se prolongue
                durante un proceso judicial, aunque los tiempos dependerán de
                cada caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soluciones más flexibles</h3>

              <p>
                Las partes pueden explorar alternativas como pagos por cuotas,
                nuevos plazos, reparaciones, entregas o compromisos específicos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menor desgaste entre las partes</h3>

              <p>
                En conflictos familiares, vecinales o comerciales, encontrar un
                acuerdo puede ayudar a evitar que la relación se deteriore aún
                más.
              </p>
            </div>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si las partes intentan conciliar y no llegan a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. Puede ocurrir que
            las partes tengan posiciones completamente diferentes o que no sea
            posible encontrar una solución aceptable para ambas.
          </p>

          <p className={styles.paragraph}>
            Cuando esto sucede, el conflicto no desaparece automáticamente. Las
            partes pueden evaluar las alternativas legales disponibles de
            acuerdo con la naturaleza del caso. En aquellos asuntos donde la
            conciliación constituye un requisito previo para acudir a la
            jurisdicción, la constancia correspondiente puede tener relevancia
            para continuar con el trámite.
          </p>

          <p className={styles.paragraph}>
            También puede ocurrir que exista un acuerdo parcial. Es decir, las
            partes resuelven algunos puntos del conflicto, pero mantienen la
            diferencia sobre otros aspectos.
          </p>
        </div>

        {/* SI HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            Si las partes alcanzan un acuerdo, este puede quedar consignado en
            un acta de conciliación. El contenido del acuerdo es especialmente
            importante porque debe dejar claro qué se acordó, quién asume cada
            compromiso y en qué condiciones debe cumplirse.
          </p>

          <p className={styles.paragraph}>
            Un acuerdo bien estructurado puede incluir fechas de pago, valores,
            cuotas, obligaciones de hacer, entrega de bienes, reparaciones u
            otros compromisos relacionados con el conflicto.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando el acta cumple los requisitos establecidos por la ley,
              puede producir efectos jurídicos importantes respecto de lo
              acordado, incluyendo prestar mérito ejecutivo y hacer tránsito a
              cosa juzgada en los términos legalmente aplicables.
            </p>
          </div>
        </div>

        {/* CÓMO SABER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo saber si mi caso debe pasar primero por conciliación?
          </h2>

          <p className={styles.paragraph}>
            Para determinarlo correctamente, no basta con saber que existe un
            conflicto. Es necesario identificar qué ocurrió, quiénes están
            involucrados, qué se está reclamando y cuál sería la vía jurídica
            aplicable.
          </p>

          <p className={styles.paragraph}>
            Antes de iniciar un proceso, resulta útil revisar aspectos como:
          </p>

          <ul className={styles.list}>
            <li>La naturaleza del conflicto.</li>
            <li>Las personas o entidades involucradas.</li>
            <li>Los derechos y obligaciones que están en discusión.</li>
            <li>La existencia de contratos, documentos o pruebas.</li>
            <li>La pretensión que se busca obtener.</li>
            <li>Si el asunto es susceptible de conciliación.</li>
            <li>
              Si la ley exige intentar una conciliación como requisito previo en
              ese caso específico.
            </li>
          </ul>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden ayudar antes de solicitar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Los documentos necesarios pueden variar según el conflicto. Sin
            embargo, antes de solicitar una audiencia puede ser útil reunir toda
            la información relacionada con el problema.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Contratos y acuerdos</h3>

              <p>
                Contratos escritos, acuerdos, cotizaciones, órdenes de servicio
                u otros documentos que permitan entender qué se pactó.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soportes de pago</h3>

              <p>
                Recibos, transferencias, consignaciones o comprobantes
                relacionados con obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conversaciones relevantes</h3>

              <p>
                Mensajes o comunicaciones que puedan ayudar a explicar el origen
                del conflicto y las gestiones realizadas previamente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información de las partes</h3>

              <p>
                Los datos necesarios para identificar y contactar a las personas
                involucradas en el conflicto.
              </p>
            </div>
          </div>
        </div>

        {/* ANTES DE DEMANDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Antes de demandar, vale la pena evaluar si existe una posibilidad
            real de acuerdo
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan necesariamente en un juzgado.
            Algunas diferencias que inicialmente parecen imposibles de resolver
            pueden encontrar una salida cuando las partes tienen la oportunidad
            de explicar su posición y plantear alternativas concretas.
          </p>

          <p className={styles.paragraph}>
            Esto no significa que la conciliación sea siempre la respuesta
            adecuada ni que todos los conflictos puedan solucionarse mediante un
            acuerdo. Cada caso tiene circunstancias particulares y debe
            analizarse según sus propios hechos.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, cuando el asunto es susceptible de conciliación,
            explorar esta alternativa puede permitir a las partes conocer si
            existe una posibilidad de resolver el problema antes de asumir un
            proceso judicial más complejo.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación antes de demandar
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Siempre es obligatorio conciliar antes de demandar?</h3>

              <p>
                No. La necesidad de intentar una conciliación previa depende del
                tipo de asunto, la jurisdicción y las condiciones previstas por
                la legislación aplicable al caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué significa que sea requisito de procedibilidad?</h3>

              <p>
                Significa que, en determinados asuntos, debe intentarse
                previamente la conciliación antes de presentar una demanda,
                salvo las excepciones establecidas por la ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué casos pueden resolverse mediante conciliación?</h3>

              <p>
                Dependiendo del caso, pueden existir conflictos relacionados con
                obligaciones, contratos, arrendamientos, daños, asuntos
                familiares y otras controversias susceptibles de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no logramos un acuerdo?</h3>

              <p>
                Las partes pueden evaluar las alternativas legales disponibles.
                Cuando la conciliación es requisito previo, la constancia
                correspondiente puede ser necesaria para continuar el trámite.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda?</h3>

              <p>
                Puede evitar la necesidad de iniciar un proceso judicial si las
                partes logran resolver el conflicto mediante un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Un acuerdo de conciliación tiene efectos legales?</h3>

              <p>
                Sí. Cuando se cumplen los requisitos legales, el acta puede
                producir efectos jurídicos importantes respecto de las
                obligaciones y compromisos acordados.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto y no sabes si debes conciliar antes de
            demandar?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles para tu situación y evalúa si la
            conciliación puede ser un camino adecuado para intentar resolver el
            conflicto mediante un acuerdo.
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
