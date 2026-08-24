"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoAcuerdoVerbalContent() {
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
            Conciliación y acuerdos entre particulares
          </span>

          <h1 className={styles.title}>
            Incumplimiento de un acuerdo verbal en Colombia: qué hacer y cómo
            buscar una solución
          </h1>

          <p className={styles.heroText}>
            Muchas personas hacen acuerdos sin firmar un contrato. Un préstamo
            entre conocidos, la realización de un trabajo, la venta de un
            producto, la devolución de dinero o el compromiso de cumplir una
            determinada obligación pueden comenzar simplemente con una
            conversación.
          </p>

          <p className={styles.heroText}>
            El problema aparece cuando una de las partes cambia de opinión o
            simplemente <strong>no cumple con lo que había acordado</strong>. En
            ese momento surgen preguntas como: ¿un acuerdo verbal vale?, ¿cómo
            puedo demostrar lo que se pactó?, ¿puedo exigir el cumplimiento?,
            ¿es necesario demandar o puedo intentar una conciliación?
          </p>

          <p className={styles.heroText}>
            La respuesta depende de las circunstancias concretas del caso, del
            tipo de acuerdo realizado y de las pruebas disponibles. Sin embargo,
            antes de asumir que un acuerdo verbal "no sirve para nada", es
            importante revisar qué ocurrió y qué elementos pueden demostrar lo
            pactado.
          </p>
        </div>

        {/* QUÉ ES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se entiende por un acuerdo verbal?
          </h2>

          <p className={styles.paragraph}>
            Un acuerdo verbal es aquel en el que las personas manifiestan su
            voluntad y establecen determinados compromisos{" "}
            <strong>
              sin dejar necesariamente todo el acuerdo en un contrato escrito
            </strong>
            .
          </p>

          <p className={styles.paragraph}>
            Esto ocurre con más frecuencia de lo que parece. Dos personas pueden
            ponerse de acuerdo sobre una fecha de pago, el valor de un servicio,
            la devolución de un dinero o la forma en que se cumplirá determinada
            obligación sin firmar un documento formal.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, no todos los negocios o actos jurídicos funcionan de la
            misma manera. Existen situaciones en las que la ley exige
            formalidades específicas. Por eso, cuando existe un conflicto, es
            importante analizar{" "}
            <strong>
              qué tipo de acuerdo se realizó y cuáles eran exactamente las
              obligaciones asumidas
            </strong>
            .
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>
                El mayor problema de los acuerdos verbales suele ser probatorio.
              </strong>{" "}
              No siempre basta con afirmar que existió un acuerdo; también puede
              ser necesario demostrar qué se pactó, entre quiénes, en qué
              condiciones y cuál fue el incumplimiento.
            </p>
          </div>
        </div>

        {/* VALIDEZ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Un acuerdo verbal tiene validez en Colombia?
          </h2>

          <p className={styles.paragraph}>
            En términos generales, el hecho de que un acuerdo no esté redactado
            en un documento no significa automáticamente que carezca de efectos.
            La validez de una relación o negocio jurídico depende de diferentes
            elementos y también del tipo de asunto del que se trate.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, ante un incumplimiento no conviene limitarse a
            pensar únicamente en si existe o no un contrato firmado. También es
            necesario revisar si existen mensajes, pagos, conversaciones,
            actuaciones posteriores o cualquier otro elemento que permita
            reconstruir lo que las partes acordaron.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, una persona puede afirmar que prestó dinero y que se
            acordó una fecha para su devolución. Aunque no exista un contrato
            firmado, podrían existir transferencias bancarias, conversaciones o
            mensajes posteriores relacionados con la deuda.
          </p>
        </div>

        {/* EJEMPLOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones comunes en las que se incumple un acuerdo verbal
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos de dinero</h3>

              <p>
                Una persona presta dinero a un familiar, amigo o conocido y se
                acuerda verbalmente una fecha o forma de pago que posteriormente
                no se cumple.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios o trabajos</h3>

              <p>
                Se acuerda verbalmente la realización de un trabajo, su valor y
                las condiciones, pero una de las partes no cumple con lo
                prometido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compraventas entre particulares</h3>

              <p>
                Las partes llegan a un acuerdo sobre la entrega de un bien o el
                pago de un valor, pero posteriormente una de ellas incumple.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Devolución de dinero</h3>

              <p>
                Una persona reconoce que debe devolver una suma de dinero, se
                compromete verbalmente a hacerlo y después deja de cumplir.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos entre vecinos</h3>

              <p>
                Se establecen compromisos relacionados con daños, pagos,
                convivencia o el uso de determinados espacios, pero una de las
                partes no respeta lo acordado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negocios entre conocidos</h3>

              <p>
                La confianza lleva a las personas a realizar acuerdos sin
                contratos detallados, lo que puede generar dificultades cuando
                aparece un incumplimiento.
              </p>
            </div>
          </div>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo demostrar que existió un acuerdo verbal?
          </h2>

          <p className={styles.paragraph}>
            Cuando no existe un contrato firmado, es fundamental revisar todos
            los elementos que puedan ayudar a demostrar la relación entre las
            partes y el contenido de lo que se acordó.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de las circunstancias, pueden existir diferentes medios
            de prueba o elementos relevantes para analizar el caso.
          </p>

          <ul className={styles.list}>
            <li>
              Conversaciones por WhatsApp, mensajes de texto o aplicaciones de
              mensajería.
            </li>
            <li>
              Correos electrónicos relacionados con el acuerdo o su
              cumplimiento.
            </li>
            <li>Comprobantes de transferencias, consignaciones o pagos.</li>
            <li>Mensajes en los que una persona reconoce una obligación.</li>
            <li>
              Personas que tengan conocimiento de la existencia del acuerdo.
            </li>
            <li>Documentos o comunicaciones elaborados después del acuerdo.</li>
            <li>
              Facturas, recibos, entregas o cualquier evidencia relacionada con
              el cumplimiento parcial de lo pactado.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              No todos los elementos tienen el mismo valor ni aplican de la
              misma manera en todos los casos. Lo importante es conservar la
              información relacionada con el acuerdo y evitar alterar o eliminar
              conversaciones, comprobantes u otros documentos que puedan ser
              relevantes.
            </p>
          </div>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer cuando una persona incumple un acuerdo verbal?
          </h2>

          <p className={styles.paragraph}>
            Lo primero es intentar identificar con claridad{" "}
            <strong>
              qué fue lo que se acordó y cuál es el incumplimiento concreto
            </strong>
            . No es lo mismo una persona que dejó de pagar una deuda que alguien
            que incumplió parcialmente un compromiso o que interpreta el acuerdo
            de una manera diferente.
          </p>

          <p className={styles.paragraph}>
            En algunos conflictos puede ser útil intentar inicialmente una
            conversación directa. Sin embargo, cuando el problema ya ha generado
            discusiones, negativas o pérdida de confianza, la intervención de un
            tercero neutral puede facilitar una solución.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Revisar lo que se pactó</h3>

              <p>
                Identifica cuál era la obligación, quién debía cumplirla, en qué
                plazo y qué ocurrió posteriormente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Reunir la información disponible</h3>

              <p>
                Conserva mensajes, comprobantes, conversaciones y demás
                elementos relacionados con el acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Intentar una solución directa</h3>

              <p>
                En algunos casos, una conversación clara permite resolver el
                problema antes de que el conflicto aumente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Evaluar la conciliación</h3>

              <p>
                Si existe disposición para buscar una solución, la conciliación
                puede permitir que las partes construyan un acuerdo.
              </p>
            </div>
          </div>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Conciliación por incumplimiento de un acuerdo verbal
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa para abordar conflictos
            relacionados con obligaciones, pagos, devoluciones de dinero y otros
            asuntos susceptibles de conciliación.
          </p>

          <p className={styles.paragraph}>
            Durante el procedimiento, las partes tienen la oportunidad de
            explicar su posición y buscar una solución con la intervención de un
            conciliador. El objetivo no es simplemente determinar quién tiene la
            razón, sino explorar{" "}
            <strong>
              una fórmula de acuerdo que permita resolver el conflicto
            </strong>
            .
          </p>

          <p className={styles.paragraph}>
            Dependiendo del caso, las personas pueden llegar a acuerdos sobre
            pagos, plazos, cumplimiento de obligaciones, devolución de dinero o
            compensaciones, siempre dentro de lo jurídicamente permitido.
          </p>
        </div>

        {/* QUÉ SE PUEDE ACORDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se puede acordar en una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La solución dependerá del conflicto concreto. Una de las ventajas de
            la conciliación es que permite a las partes participar activamente
            en la construcción del acuerdo.
          </p>

          <ul className={styles.list}>
            <li>El pago total o parcial de una obligación.</li>
            <li>La fijación de nuevas fechas o plazos para cumplir.</li>
            <li>El establecimiento de cuotas de pago.</li>
            <li>La devolución de dinero o de determinados bienes.</li>
            <li>El cumplimiento de una obligación pendiente.</li>
            <li>La entrega de un bien o la realización de una actividad.</li>
            <li>Compromisos relacionados con la reparación de un perjuicio.</li>
            <li>
              Otras fórmulas de solución que sean legalmente procedentes según
              el caso.
            </li>
          </ul>
        </div>

        {/* CUANDO NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan necesariamente en una conciliación
            exitosa. Puede ocurrir que las partes no logren ponerse de acuerdo o
            que una de ellas mantenga una posición completamente diferente sobre
            los hechos.
          </p>

          <p className={styles.paragraph}>
            En esos casos, las alternativas posteriores dependerán de la
            naturaleza del conflicto y de las acciones que jurídicamente puedan
            proceder. También será importante analizar las pruebas disponibles y
            las particularidades de la obligación discutida.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no consiste en obligar a las partes a aceptar una
              solución. Su función es ofrecer un espacio formal para intentar
              construir un acuerdo antes de continuar, cuando corresponda, por
              otras vías.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA DE FORMALIZAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            La importancia de dejar claros los acuerdos para evitar nuevos
            conflictos
          </h2>

          <p className={styles.paragraph}>
            Uno de los problemas más frecuentes en los acuerdos verbales es que,
            con el paso del tiempo, cada persona puede recordar o interpretar lo
            ocurrido de manera diferente.
          </p>

          <p className={styles.paragraph}>
            Por eso, cuando las partes logran solucionar una controversia, es
            importante que los compromisos queden claramente definidos: qué debe
            hacer cada persona, en qué fecha, bajo qué condiciones y qué ocurre
            si existen pagos o entregas pendientes.
          </p>

          <p className={styles.paragraph}>
            Tener claridad sobre estos aspectos reduce la posibilidad de que el
            conflicto vuelva a aparecer posteriormente por diferencias sobre el
            contenido del acuerdo.
          </p>
        </div>

        {/* CUÁNDO BUSCAR AYUDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene buscar orientación sobre el incumplimiento de un
            acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Puede ser conveniente buscar orientación cuando existe una discusión
            sobre la obligación, cuando las partes tienen versiones diferentes
            sobre lo que se acordó o cuando no está claro cuál es el mecanismo
            adecuado para intentar resolver el conflicto.
          </p>

          <p className={styles.paragraph}>
            También es recomendable revisar el caso antes de tomar decisiones
            apresuradas, especialmente cuando existen sumas importantes de
            dinero o cuando el conflicto puede tener consecuencias jurídicas
            adicionales.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el incumplimiento de acuerdos verbales
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Un acuerdo verbal vale legalmente?</h3>

              <p>
                En muchos casos puede producir efectos jurídicos, aunque depende
                del tipo de acuerdo y de los requisitos legales aplicables. Uno
                de los principales retos suele ser demostrar lo que se pactó.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿WhatsApp sirve para demostrar un acuerdo?</h3>

              <p>
                Las conversaciones y mensajes pueden ser relevantes para
                demostrar determinados hechos, dependiendo de las circunstancias
                y de la valoración que corresponda en cada caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda acordada verbalmente?</h3>

              <p>
                Dependiendo de las circunstancias y de que el asunto sea
                susceptible de conciliación, las partes pueden intentar llegar a
                un acuerdo sobre el pago o cumplimiento de la obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra persona niega el acuerdo?</h3>

              <p>
                Será importante revisar los elementos disponibles que permitan
                demostrar la relación entre las partes y las condiciones que
                presuntamente fueron acordadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debo demandar inmediatamente?</h3>

              <p>
                No necesariamente. Dependiendo del asunto, puede ser posible
                intentar primero mecanismos de diálogo o conciliación antes de
                acudir a otras instancias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si se logra un acuerdo en conciliación?</h3>

              <p>
                El acuerdo alcanzado se formaliza mediante el acta
                correspondiente y produce los efectos jurídicos establecidos por
                la legislación aplicable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Incumplieron un acuerdo que hiciste verbalmente?
          </h3>

          <p className={styles.ctaText}>
            Si tienes un conflicto relacionado con una obligación, un pago, la
            devolución de dinero o un compromiso incumplido, puedes conocer si
            la conciliación es una alternativa adecuada para intentar construir
            una solución.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
