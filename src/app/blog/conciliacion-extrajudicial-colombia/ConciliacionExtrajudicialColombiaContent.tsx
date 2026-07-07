"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionExtrajudicialColombiaContent() {
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
            Mecanismos alternativos en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación extrajudicial en Colombia
          </h1>

          <p className={styles.heroText}>
            La conciliación extrajudicial en Colombia es un mecanismo
            alternativo de solución de conflictos que permite resolver disputas
            sin necesidad de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Es uno de los pilares del sistema de justicia alternativa en el
            país.
          </p>
        </div>

        {/* QUE ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación extrajudicial?
          </h2>

          <p className={styles.paragraph}>
            Es un procedimiento en el que dos o más partes intentan resolver un
            conflicto con la ayuda de un conciliador autorizado, antes de acudir
            a un juez.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es promover acuerdos voluntarios con efectos legales.
          </p>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación extrajudicial en Colombia paso a
            paso?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, el procedimiento de
            conciliación extrajudicial suele seguir una serie de etapas
            establecidas por la ley. Conocerlas permite que las partes lleguen
            mejor preparadas a la audiencia y comprendan qué pueden esperar
            durante el proceso.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud de conciliación</h3>

              <p>
                Una de las partes presenta la solicitud explicando el conflicto
                y señalando las personas que serán convocadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación a las partes</h3>

              <p>
                El centro de conciliación programa la audiencia y notifica a
                quienes deben participar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                Las partes exponen su posición mientras el conciliador facilita
                el diálogo para encontrar soluciones viables.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Acuerdo o constancia</h3>

              <p>
                Si existe acuerdo se firma un acta con efectos legales; de lo
                contrario, se deja constancia de que no fue posible conciliar.
              </p>
            </div>
          </div>
        </div>

        {/* DONDE APLICA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿En qué casos aplica?</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>
              <p>Deudas, contratos y obligaciones entre particulares.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos laborales</h3>
              <p>Salarios, liquidaciones y prestaciones sociales.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos familiares</h3>
              <p>Alimentos, custodia y régimen de visitas.</p>
            </div>
          </div>
        </div>

        {/* CASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Casos en los que la conciliación extrajudicial suele ser una
            excelente alternativa
          </h2>

          <p className={styles.paragraph}>
            La conciliación extrajudicial puede utilizarse en numerosos
            conflictos siempre que la ley permita llegar a acuerdos sobre los
            derechos discutidos. En la práctica, miles de controversias se
            solucionan cada año sin necesidad de iniciar un proceso judicial.
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos.</li>
            <li>Cobro de deudas entre particulares.</li>
            <li>Conflictos derivados de arrendamientos.</li>
            <li>Pago de obligaciones civiles.</li>
            <li>Liquidaciones laborales.</li>
            <li>Prestaciones sociales.</li>
            <li>Cuotas alimentarias.</li>
            <li>Custodia y visitas.</li>
            <li>Indemnizaciones.</li>
            <li>Conflictos comerciales.</li>
          </ul>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de acudir a una conciliación extrajudicial antes de
            presentar una demanda
          </h2>

          <p className={styles.paragraph}>
            Muchas personas creen que la única forma de resolver un conflicto es
            acudir directamente a un juez. Sin embargo, la conciliación
            extrajudicial ofrece ventajas importantes tanto para personas como
            para empresas, pues permite construir soluciones mediante el diálogo
            y con el acompañamiento de un conciliador imparcial.
          </p>

          <ul className={styles.list}>
            <li>
              Reduce significativamente el tiempo para solucionar el conflicto.
            </li>
            <li>Disminuye los costos frente a un proceso judicial.</li>
            <li>
              Permite acuerdos adaptados a las necesidades reales de las partes.
            </li>
            <li>
              Favorece el diálogo y evita el deterioro de las relaciones
              personales o comerciales.
            </li>
            <li>El acuerdo tiene efectos jurídicos obligatorios.</li>
            <li>Puede evitar años de litigio.</li>
            <li>En muchos asuntos constituye requisito antes de demandar.</li>
            <li>
              Las partes mantienen mayor control sobre la solución del
              conflicto.
            </li>
          </ul>
        </div>

        {/* NO ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo durante la conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias terminan con un acuerdo. Cuando las partes
            mantienen posiciones completamente opuestas o consideran que no
            existen condiciones para negociar, el conciliador deja constancia de
            la imposibilidad de conciliar.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del tipo de conflicto, esa constancia puede permitir que
            la persona continúe con las acciones judiciales correspondientes.
            Haber intentado la conciliación demuestra la voluntad de resolver el
            conflicto por una vía pacífica antes de acudir a un proceso ante los
            jueces.
          </p>

          <div className={styles.highlightBox}>
            <p>
              No lograr un acuerdo no significa perder derechos. En muchos
              casos, la conciliación constituye un paso previo que permite
              acudir posteriormente a la jurisdicción competente.
            </p>
          </div>
        </div>

        {/* VALIDEZ LEGAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿El acta de conciliación tiene validez legal en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Sí. Cuando las partes llegan a un acuerdo y este queda consignado en
            un acta de conciliación elaborada por un conciliador autorizado,
            dicho documento produce importantes efectos jurídicos.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del asunto conciliado, el acta puede prestar mérito
            ejecutivo y hacer tránsito a cosa juzgada, lo que brinda seguridad
            jurídica a los compromisos adquiridos por las partes y facilita
            exigir su cumplimiento en caso de incumplimiento.
          </p>
        </div>

        {/* OBLIGATORIEDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es obligatoria la conciliación extrajudicial?
          </h2>

          <p className={styles.paragraph}>
            En determinados asuntos previstos por la legislación colombiana, la
            conciliación extrajudicial constituye un requisito de procedibilidad
            antes de presentar una demanda. Esto significa que, antes de acudir
            ante un juez, las partes deben intentar resolver el conflicto
            mediante una audiencia de conciliación.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, no todos los conflictos requieren este paso previo. La
            necesidad de conciliar dependerá de la naturaleza del asunto y de
            las normas aplicables a cada caso concreto.
          </p>
        </div>

        {/* QUIENES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Quiénes pueden realizarla?</h2>

          <ul className={styles.list}>
            <li>Centros de conciliación autorizados.</li>
            <li>Notarías habilitadas.</li>
            <li>Consultorios jurídicos.</li>
            <li>Entidades públicas competentes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Solo los conciliadores autorizados por la ley pueden dirigir
              audiencias de conciliación extrajudicial en Colombia.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia en el sistema jurídico colombiano
          </h2>

          <p className={styles.paragraph}>
            La conciliación extrajudicial ayuda a descongestionar los despachos
            judiciales y promueve una cultura de resolución pacífica de
            conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, permite que las partes tengan mayor control sobre la
            solución de su conflicto.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación extrajudicial en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación extrajudicial es obligatoria antes de demandar?
              </h3>

              <p>
                En determinados asuntos sí puede constituir un requisito de
                procedibilidad antes de presentar una demanda. Todo depende del
                tipo de conflicto y de las normas aplicables.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tarda una conciliación extrajudicial?</h3>

              <p>
                El tiempo puede variar según el caso y la disponibilidad de las
                partes, aunque muchas controversias logran resolverse en una
                sola audiencia de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra parte no asiste a la audiencia?</h3>

              <p>
                Si la persona convocada no comparece, el conciliador dejará la
                constancia correspondiente, la cual puede ser necesaria para
                continuar con las acciones legales cuando la ley así lo
                establece.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acta de conciliación tiene validez legal?</h3>

              <p>
                Sí. El acta suscrita por las partes tiene efectos jurídicos y,
                según el caso, puede prestarse para exigir el cumplimiento de
                las obligaciones pactadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué conflictos pueden resolverse mediante conciliación
                extrajudicial?
              </h3>

              <p>
                Es posible conciliar numerosos conflictos civiles, comerciales,
                familiares y laborales, siempre que la legislación permita
                llegar a un acuerdo sobre los derechos discutidos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación extrajudicial puede realizarse de forma
                virtual?
              </h3>

              <p>
                Sí. Muchos centros de conciliación cuentan con audiencias
                virtuales, siempre que se cumplan los requisitos establecidos
                por la normativa colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién puede solicitar una conciliación extrajudicial?</h3>

              <p>
                Cualquier persona natural o jurídica que tenga un conflicto
                conciliable puede presentar una solicitud ante un centro de
                conciliación autorizado o ante otra entidad facultada por la
                ley.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito un abogado para asistir a una conciliación?</h3>

              <p>
                Dependiendo del asunto, las partes pueden asistir directamente o
                contar con el acompañamiento de un abogado para recibir
                orientación jurídica y proteger mejor sus intereses durante la
                audiencia.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas iniciar una conciliación en Colombia?
          </h3>

          <p className={styles.ctaText}>
            Te ayudamos a resolver tu conflicto mediante conciliación
            extrajudicial de forma rápida, legal y efectiva.
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
