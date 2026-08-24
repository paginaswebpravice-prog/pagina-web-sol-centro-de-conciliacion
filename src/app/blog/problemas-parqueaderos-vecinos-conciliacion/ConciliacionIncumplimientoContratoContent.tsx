"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliacionIncumplimientoContratoContent() {
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
            CONFLICTOS CONTRACTUALES Y CONCILIACIÓN
          </span>

          <h1 className={styles.title}>
            Conciliación por incumplimiento de contrato en Colombia: cómo
            reclamar y buscar una solución
          </h1>

          <p className={styles.heroText}>
            Firmar un contrato normalmente genera expectativas claras: una
            persona entrega un producto, presta un servicio, realiza un pago o
            cumple una determinada obligación, esperando que la otra parte haga
            lo que le corresponde. El problema aparece cuando eso no sucede.
          </p>

          <p className={styles.heroText}>
            Un pago que nunca llegó, un servicio que quedó incompleto, una obra
            que no se terminó o un bien que no fue entregado son situaciones que
            pueden dar lugar a un conflicto. Antes de pensar directamente en un
            proceso judicial, en determinados casos es posible intentar resolver
            la controversia mediante una{" "}
            <strong>conciliación por incumplimiento de contrato</strong>.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que las partes se sienten a dialogar con la
            intervención de un tercero imparcial, buscando construir un acuerdo
            sobre la forma de solucionar el problema.
          </p>
        </div>

        {/* QUÉ ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un incumplimiento de contrato?
          </h2>

          <p className={styles.paragraph}>
            De manera sencilla, existe un posible incumplimiento contractual
            cuando una de las partes no realiza aquello a lo que se había
            comprometido, lo hace de forma diferente a lo acordado o cumple
            tardíamente sus obligaciones.
          </p>

          <p className={styles.paragraph}>
            No todos los incumplimientos son iguales. En algunos casos el
            problema puede solucionarse simplemente fijando una nueva fecha para
            cumplir. En otros, la relación entre las partes puede haberse
            deteriorado hasta el punto de requerir una devolución de dinero, un
            acuerdo de pago o una solución diferente.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Antes de iniciar cualquier actuación, es importante revisar qué
              fue lo acordado, qué obligaciones tenía cada parte, qué ocurrió
              realmente y cuáles son las alternativas disponibles para resolver
              el conflicto.
            </p>
          </div>
        </div>

        {/* EJEMPLOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones en las que puede surgir un conflicto contractual
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Pagos pendientes</h3>
              <p>
                Una persona o empresa recibió un producto o servicio, pero no
                realizó el pago en los términos acordados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios incompletos</h3>
              <p>
                El servicio contratado no se prestó completamente o se generó
                una discusión sobre la forma en que debía cumplirse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega incumplida</h3>
              <p>
                Un bien, producto o resultado que debía entregarse no fue
                recibido dentro de las condiciones esperadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Retrasos</h3>
              <p>
                Una obligación se cumple fuera del plazo pactado y ese retraso
                genera consecuencias para la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Devolución de dinero</h3>
              <p>
                Surge una controversia sobre valores entregados anticipadamente,
                pagos realizados o sumas que una de las partes considera que
                deben ser restituidas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Interpretación del acuerdo</h3>
              <p>
                Las partes tienen una visión diferente sobre lo que realmente se
                pactó y sobre la forma correcta de cumplir el contrato.
              </p>
            </div>
          </div>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede resolver un incumplimiento de contrato mediante
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de las características del conflicto y de la naturaleza
            de los derechos involucrados, las partes pueden acudir a un centro
            de conciliación para intentar construir una solución.
          </p>

          <p className={styles.paragraph}>
            Esto puede resultar especialmente útil cuando existe una posibilidad
            real de llegar a un entendimiento. A veces el conflicto no se debe
            únicamente a la falta de voluntad de una de las partes, sino a
            desacuerdos sobre los plazos, los valores, la calidad del
            cumplimiento o la forma en que debe solucionarse el problema.
          </p>

          <p className={styles.paragraph}>
            La conciliación crea un espacio formal para discutir esas
            diferencias y explorar alternativas que, en un proceso judicial,
            podrían tardar mucho más tiempo en resolverse.
          </p>
        </div>

        {/* QUÉ SE PUEDE ACORDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se puede acordar en una conciliación por incumplimiento
            contractual?
          </h2>

          <p className={styles.paragraph}>
            El contenido de un posible acuerdo dependerá del contrato y de las
            circunstancias específicas del caso. No existe una única fórmula,
            porque cada conflicto tiene sus propias condiciones.
          </p>

          <ul className={styles.list}>
            <li>Establecer un nuevo plazo para cumplir una obligación.</li>

            <li>
              Definir la forma y las fechas para realizar un pago pendiente.
            </li>

            <li>
              Acordar la devolución de determinadas sumas de dinero, cuando sea
              procedente.
            </li>

            <li>
              Establecer la entrega de un bien, producto o servicio pendiente.
            </li>

            <li>Resolver diferencias relacionadas con valores económicos.</li>

            <li>
              Definir compromisos concretos para poner fin a la controversia.
            </li>

            <li>
              Establecer condiciones para finalizar o reorganizar la relación
              contractual.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Una de las principales ventajas de la conciliación es que las
              partes pueden participar directamente en la construcción de la
              solución, en lugar de limitarse a esperar una decisión posterior
              de un tercero.
            </p>
          </div>
        </div>

        {/* CÓMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación por incumplimiento de contrato?
          </h2>

          <p className={styles.paragraph}>
            El proceso comienza con la identificación clara del conflicto. Es
            recomendable tener organizada la información relacionada con la
            relación contractual, las obligaciones discutidas y los documentos
            que permitan explicar qué ocurrió.
          </p>

          <p className={styles.paragraph}>
            Posteriormente, se solicita la conciliación ante un centro
            autorizado y se cita a las partes para intentar llegar a un acuerdo.
            Durante el proceso, cada parte puede exponer su posición y las
            posibles alternativas para solucionar la controversia.
          </p>

          <p className={styles.paragraph}>
            Si se logra un acuerdo, este queda consignado en el acta
            correspondiente. Si no es posible llegar a un entendimiento, las
            partes podrán analizar las alternativas que correspondan de acuerdo
            con su situación.
          </p>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden ayudar a explicar el conflicto
          </h2>

          <p className={styles.paragraph}>
            Los documentos necesarios pueden variar según el caso. Sin embargo,
            contar con información organizada facilita entender el origen del
            conflicto y las obligaciones que se encuentran en discusión.
          </p>

          <ul className={styles.list}>
            <li>Contrato, acuerdo o documento que originó la relación.</li>

            <li>Comprobantes de pago.</li>

            <li>Facturas, cotizaciones u órdenes de servicio.</li>

            <li>
              Comunicaciones entre las partes relacionadas con el
              incumplimiento.
            </li>

            <li>
              Documentos que permitan acreditar entregas, avances o actividades
              realizadas.
            </li>

            <li>
              Cualquier otro soporte relevante para explicar la controversia.
            </li>
          </ul>
        </div>

        {/* CUÁNDO ES ÚTIL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser conveniente intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos contractuales se encuentran en el mismo
            punto. Algunas situaciones pueden resolverse con una conversación
            directa, mientras que otras ya requieren un escenario más formal
            para que las partes puedan negociar.
          </p>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa interesante cuando existe
            disposición para dialogar, cuando el desacuerdo se concentra en
            obligaciones económicas o contractuales concretas o cuando las
            partes prefieren intentar una solución antes de iniciar un proceso
            judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Buscas una solución negociada</h3>
              <p>
                Las partes todavía tienen la posibilidad de dialogar y construir
                un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>El conflicto puede delimitarse</h3>
              <p>
                Es posible identificar qué obligación se discute y cuáles son
                las alternativas para solucionarla.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Quieres evitar prolongar el conflicto</h3>
              <p>
                Intentar un acuerdo puede permitir que las partes encuentren una
                salida sin mantener la controversia durante más tiempo del
                necesario.
              </p>
            </div>
          </div>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación o proceso judicial: ¿cuál es la diferencia?
          </h2>

          <p className={styles.paragraph}>
            La principal diferencia está en la forma en que se busca resolver la
            controversia. En la conciliación, las partes participan directamente
            en la construcción de un posible acuerdo con la intervención de un
            conciliador.
          </p>

          <p className={styles.paragraph}>
            En un proceso judicial, por el contrario, el conflicto es sometido a
            la decisión de una autoridad judicial. La alternativa adecuada
            dependerá de las circunstancias del caso, de la naturaleza del
            conflicto y de la posibilidad real de llegar a un acuerdo.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación no significa que el conflicto sea
              sencillo. Puede haber desacuerdos importantes. La diferencia es
              que las partes cuentan con un espacio para explorar una solución
              negociada antes de continuar con otras alternativas.
            </p>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes frente a un incumplimiento de contrato
          </h2>

          <ul className={styles.list}>
            <li>
              No revisar cuidadosamente qué fue lo que realmente se acordó.
            </li>

            <li>
              Perder o no conservar los documentos relacionados con el contrato.
            </li>

            <li>
              Dejar pasar el tiempo sin intentar establecer comunicación con la
              otra parte.
            </li>

            <li>
              Confundir un desacuerdo contractual con una situación en la que no
              existe ninguna posibilidad de negociación.
            </li>

            <li>
              Intentar resolver el problema únicamente mediante conversaciones
              informales cuando el conflicto ya requiere dejar constancia clara
              de los compromisos.
            </li>

            <li>
              Firmar acuerdos sin comprender claramente las obligaciones que se
              están asumiendo.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la conciliación por incumplimiento de
            contrato
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Puedo solicitar conciliación si la otra parte no cumplió el
                contrato?
              </h3>

              <p>
                Dependiendo de la naturaleza del conflicto y de los derechos
                involucrados, puede ser posible acudir a conciliación para
                intentar resolver la controversia mediante un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra parte acepta llegar a un acuerdo?</h3>

              <p>
                Las partes pueden definir compromisos concretos relacionados con
                pagos, entregas, plazos u otras obligaciones que permitan
                solucionar el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si no se logra una conciliación?</h3>

              <p>
                Si no se alcanza un acuerdo, las partes pueden evaluar las
                alternativas legales disponibles de acuerdo con las
                particularidades del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debo llevar el contrato a la conciliación?</h3>

              <p>
                Contar con el contrato y con los documentos relacionados con la
                controversia puede ayudar a explicar claramente qué fue lo
                acordado y cuál es el origen del desacuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿En la conciliación se puede acordar un nuevo plazo?</h3>

              <p>
                Las partes pueden explorar alternativas como nuevos plazos o
                formas de cumplimiento, siempre que el acuerdo corresponda a las
                circunstancias y posibilidades del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Un incumplimiento contractual siempre termina en demanda?
              </h3>

              <p>
                No necesariamente. Dependiendo de la situación, las partes
                pueden intentar primero mecanismos de diálogo y conciliación
                para buscar una solución negociada.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto por incumplimiento de contrato?
          </h3>

          <p className={styles.ctaText}>
            Conoce las opciones disponibles para intentar resolver tu
            controversia mediante conciliación y buscar un acuerdo sobre las
            obligaciones que se encuentran en discusión.
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
