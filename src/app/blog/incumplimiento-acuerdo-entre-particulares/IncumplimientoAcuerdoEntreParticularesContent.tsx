"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function IncumplimientoAcuerdoEntreParticularesContent() {
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
            Conflictos entre particulares y conciliación
          </span>

          <h1 className={styles.title}>
            Incumplimiento de acuerdos entre particulares en Colombia: qué hacer
            y cómo buscar una solución
          </h1>

          <p className={styles.heroText}>
            Hacer un acuerdo con otra persona parece sencillo hasta que una de
            las partes deja de cumplir lo que se había pactado. Un pago que
            nunca llega, un dinero prestado que no se devuelve, un bien que no
            se entrega o un compromiso que simplemente queda sin cumplir son
            situaciones frecuentes entre familiares, amigos, vecinos, conocidos
            y otras personas particulares.
          </p>

          <p className={styles.heroText}>
            Cuando esto ocurre, muchas personas no saben qué hacer. Algunas
            intentan resolver el problema directamente, otras piensan
            inmediatamente en demandar y otras dejan pasar el tiempo porque
            consideran que, al no existir un contrato formal, no tienen ninguna
            alternativa.
          </p>

          <p className={styles.heroText}>
            Sin embargo, cada situación debe analizarse de acuerdo con las
            condiciones del acuerdo, la naturaleza de la obligación y los
            elementos disponibles para demostrar lo que ocurrió. En los asuntos
            que sean legalmente conciliables, la conciliación puede ser una
            alternativa para que las partes intenten encontrar una solución
            antes de acudir a otras instancias.
          </p>
        </div>

        {/* QUÉ ES INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se considera un incumplimiento de un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            En términos generales, existe un conflicto por incumplimiento cuando
            una persona no realiza aquello que se había comprometido a hacer, lo
            hace de una manera diferente a la acordada o cumple solo
            parcialmente con la obligación asumida.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, dos personas pueden acordar que una prestará dinero y
            la otra lo devolverá en determinada fecha. Si llega el momento de
            realizar el pago y este no se produce, puede surgir una controversia
            relacionada con el cumplimiento de ese acuerdo.
          </p>

          <p className={styles.paragraph}>
            Pero los conflictos no se limitan a préstamos de dinero. También
            pueden presentarse cuando una persona se compromete a entregar un
            bien, realizar un trabajo, devolver una propiedad, asumir un pago o
            cumplir cualquier otra obligación que haya sido acordada entre las
            partes.
          </p>

          <div className={styles.highlightBox}>
            <p>
              <strong>
                No todos los acuerdos se presentan de la misma forma.
              </strong>{" "}
              Algunos constan en contratos escritos, otros se realizan mediante
              mensajes, correos electrónicos o conversaciones y, en algunos
              casos, las personas simplemente llegan a acuerdos verbales. Por
              eso, antes de tomar una decisión, es importante revisar qué se
              pactó y qué elementos existen para respaldar la situación.
            </p>
          </div>
        </div>

        {/* EJEMPLOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones comunes de incumplimiento entre particulares
          </h2>

          <p className={styles.paragraph}>
            Los conflictos por acuerdos incumplidos pueden surgir en situaciones
            cotidianas. Muchas veces las partes inicialmente tienen una buena
            relación y, precisamente por existir confianza, deciden no elaborar
            un contrato detallado.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos de dinero</h3>

              <p>
                Una persona entrega dinero a otra con el compromiso de recibir
                su devolución, pero llega la fecha acordada y el pago no se
                realiza.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Venta de bienes</h3>

              <p>
                Se recibe un anticipo o el pago total por un producto o bien,
                pero posteriormente una de las partes no cumple con la entrega
                en las condiciones acordadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Servicios entre particulares</h3>

              <p>
                Una persona se compromete a realizar determinado trabajo, pero
                no lo termina, lo abandona o surgen diferencias sobre lo que
                debía entregarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos sobre pagos</h3>

              <p>
                Las partes establecen cuotas, fechas o compromisos para cancelar
                una obligación, pero posteriormente el acuerdo deja de
                cumplirse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entrega o devolución de bienes</h3>

              <p>
                Una persona conserva un objeto, vehículo, equipo u otro bien y
                posteriormente se niega o demora su devolución.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Compromisos entre conocidos</h3>

              <p>
                Los conflictos también pueden surgir entre familiares, amigos,
                vecinos o socios informales que inicialmente confiaron en un
                acuerdo realizado sin mayores formalidades.
              </p>
            </div>
          </div>
        </div>

        {/* PRIMER PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer cuando una persona no cumple un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Antes de tomar decisiones apresuradas, puede ser útil organizar la
            información relacionada con el conflicto. Esto permite tener mayor
            claridad sobre qué se acordó, qué parte se cumplió y cuál es
            exactamente el problema que se busca resolver.
          </p>

          <ul className={styles.list}>
            <li>Revisar con claridad cuál fue el acuerdo entre las partes.</li>
            <li>Identificar qué obligación se considera incumplida.</li>
            <li>
              Establecer si existían fechas, valores o condiciones específicas.
            </li>
            <li>
              Conservar mensajes, documentos, comprobantes y demás información
              relacionada con el acuerdo.
            </li>
            <li>
              Intentar una comunicación clara y directa para conocer la posición
              de la otra persona.
            </li>
            <li>
              Evaluar si existe disposición para llegar a un nuevo acuerdo.
            </li>
          </ul>

          <p className={styles.paragraph}>
            En algunos casos, el problema puede solucionarse mediante una
            conversación y un nuevo compromiso de pago o cumplimiento. Sin
            embargo, cuando las partes tienen posiciones diferentes o la
            comunicación se ha deteriorado, puede ser necesario buscar un
            espacio formal que facilite el diálogo.
          </p>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            La importancia de conservar pruebas del acuerdo
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales problemas en los acuerdos informales es que,
            con el paso del tiempo, las partes pueden tener versiones diferentes
            sobre lo que realmente se pactó. Por esta razón, resulta importante
            conservar toda la información relacionada con la obligación.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de cada caso, pueden existir diferentes elementos que
            ayuden a demostrar la relación entre las partes y las condiciones
            que fueron discutidas o acordadas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documentos escritos</h3>

              <p>
                Contratos, recibos, letras, pagarés u otros documentos pueden
                contener información relevante sobre las obligaciones asumidas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mensajes y conversaciones</h3>

              <p>
                Chats, correos electrónicos y otras comunicaciones pueden
                resultar relevantes para comprender qué hablaron o acordaron las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Comprobantes de pago</h3>

              <p>
                Transferencias, consignaciones y recibos pueden ayudar a
                establecer movimientos relacionados con el acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información sobre el cumplimiento</h3>

              <p>
                Fotografías, comunicaciones posteriores, entregas parciales y
                otros elementos pueden ser útiles para reconstruir lo ocurrido.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Guardar la información desde el inicio puede evitar discusiones
              posteriores sobre cuestiones básicas, como el valor acordado, la
              fecha de pago o las condiciones en las que debía cumplirse una
              obligación.
            </p>
          </div>
        </div>

        {/* ACUERDO VERBAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si el acuerdo fue verbal o se hizo por WhatsApp?
          </h2>

          <p className={styles.paragraph}>
            No todos los acuerdos entre particulares se formalizan mediante un
            contrato firmado. En la práctica, es común que las personas lleguen
            a compromisos durante una conversación, mediante llamadas o a través
            de aplicaciones de mensajería.
          </p>

          <p className={styles.paragraph}>
            La situación jurídica y la manera de demostrar un acuerdo dependerán
            de las circunstancias concretas y del tipo de obligación
            involucrada. Por eso, no es conveniente asumir automáticamente que
            un acuerdo no tiene importancia simplemente porque no exista un
            documento formal firmado por ambas partes.
          </p>

          <p className={styles.paragraph}>
            Cuando existen mensajes o conversaciones, puede ser importante
            conservar el contexto completo. Un mensaje aislado no siempre
            explica por sí solo la totalidad de la relación o las condiciones
            acordadas.
          </p>

          <p className={styles.paragraph}>
            Si existe una controversia, las partes pueden analizar los elementos
            disponibles y, cuando el asunto sea conciliable, intentar aclarar
            las diferencias dentro de un proceso de conciliación.
          </p>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser útil la conciliación por incumplimiento de un
            acuerdo?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser especialmente útil cuando las partes
            reconocen que existe un conflicto, pero todavía existe la
            posibilidad de conversar y construir una solución.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, una persona puede no estar en condiciones de pagar una
            obligación en la fecha inicialmente acordada, pero sí tener
            disposición para proponer un nuevo plazo o realizar pagos
            periódicos. La otra parte, por su lado, puede estar dispuesta a
            aceptar una solución siempre que las condiciones queden claramente
            establecidas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Buscar un acuerdo de pago</h3>

              <p>
                Las partes pueden discutir fechas, cuotas y condiciones que
                permitan organizar el cumplimiento de una obligación pendiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Aclarar diferencias</h3>

              <p>
                La audiencia puede servir para que cada parte exponga su versión
                sobre lo ocurrido y sobre las condiciones que considera
                pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Establecer nuevos compromisos</h3>

              <p>
                Cuando existe disposición de las partes, pueden buscarse nuevas
                alternativas para resolver el conflicto de manera consensuada.
              </p>
            </div>
          </div>
        </div>

        {/* CÓMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación entre particulares?
          </h2>

          <p className={styles.paragraph}>
            El procedimiento puede variar de acuerdo con la naturaleza del
            asunto y las circunstancias del caso. En términos generales, una de
            las partes puede solicitar una audiencia ante un centro de
            conciliación competente.
          </p>

          <p className={styles.paragraph}>
            La finalidad es crear un espacio en el que las personas puedan
            exponer sus posiciones y explorar posibles soluciones con la
            intervención de un conciliador, dentro de los límites y condiciones
            establecidos por la normativa aplicable.
          </p>

          <ul className={styles.list}>
            <li>Se presenta la situación que origina el conflicto.</li>
            <li>
              Se identifica qué pretende o solicita cada una de las partes.
            </li>
            <li>Se escucha la posición de las personas involucradas.</li>
            <li>Se exploran alternativas para resolver las diferencias.</li>
            <li>
              Si se alcanza un acuerdo, este se consigna en el documento
              correspondiente.
            </li>
          </ul>

          <p className={styles.paragraph}>
            La conciliación no significa obligar a una persona a aceptar una
            propuesta. Su objetivo es facilitar un espacio para que las partes,
            dentro de lo legalmente posible, puedan construir una solución.
          </p>
        </div>

        {/* POSIBLES ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ejemplos de soluciones que pueden plantearse en una conciliación
          </h2>

          <p className={styles.paragraph}>
            Cada conflicto es diferente, por lo que no existe una única fórmula
            para resolver un incumplimiento. Las alternativas dependerán de lo
            que las partes estén dispuestas a discutir y de la naturaleza del
            asunto.
          </p>

          <ul className={styles.list}>
            <li>Establecer un nuevo plazo para cumplir la obligación.</li>
            <li>Organizar un acuerdo de pago por cuotas.</li>
            <li>Definir fechas y condiciones específicas de cumplimiento.</li>
            <li>Establecer la entrega o devolución de un bien.</li>
            <li>
              Resolver diferencias relacionadas con un servicio pendiente.
            </li>
            <li>
              Reconocer pagos o cumplimientos parciales que ya se hayan
              realizado.
            </li>
            <li>
              Acordar compromisos claros para evitar nuevas discusiones sobre la
              obligación.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Una de las principales ventajas de buscar una solución por acuerdo
              es que las partes pueden discutir alternativas que respondan a las
              circunstancias reales del conflicto, siempre dentro de lo
              permitido legalmente.
            </p>
          </div>
        </div>

        {/* SI NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si no se logra un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con una solución conciliada. Puede
            ocurrir que las partes mantengan posiciones completamente diferentes
            o que simplemente no exista disposición para llegar a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            En ese escenario, las alternativas posteriores dependerán del tipo
            de obligación, de la naturaleza del conflicto y de las normas que
            resulten aplicables al caso concreto. Algunas situaciones pueden
            requerir acudir a otras instancias judiciales o administrativas.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, antes de iniciar cualquier actuación, es
            recomendable revisar cuidadosamente las particularidades del caso y
            determinar cuál es la alternativa adecuada.
          </p>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores comunes cuando alguien incumple un acuerdo
          </h2>

          <p className={styles.paragraph}>
            Cuando existe frustración por un incumplimiento, es fácil tomar
            decisiones impulsivas. Sin embargo, algunos errores pueden complicar
            todavía más la situación.
          </p>

          <ul className={styles.list}>
            <li>
              Eliminar mensajes, comprobantes u otros documentos relacionados
              con el acuerdo.
            </li>
            <li>
              Continuar realizando nuevos acuerdos sin dejar claridad sobre las
              obligaciones pendientes.
            </li>
            <li>
              Asumir que, por tratarse de un familiar o amigo, no es necesario
              dejar ningún registro.
            </li>
            <li>
              Amenazar o intentar resolver el conflicto mediante vías que puedan
              generar nuevos problemas.
            </li>
            <li>
              Esperar demasiado tiempo sin revisar las opciones disponibles.
            </li>
            <li>
              Tomar decisiones jurídicas basándose únicamente en información
              general sin analizar las circunstancias particulares.
            </li>
          </ul>
        </div>

        {/* RECOMENDACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo evitar futuros conflictos por acuerdos entre particulares
          </h2>

          <p className={styles.paragraph}>
            La mejor manera de evitar muchas controversias es procurar que las
            condiciones importantes queden claras desde el principio. Esto no
            significa que todas las relaciones deban convertirse en documentos
            extensos o complicados, pero sí que las partes tengan claridad sobre
            aspectos básicos.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Definir qué se acuerda</h3>

              <p>
                Es importante que ambas personas comprendan claramente cuál es
                la obligación y qué debe realizar cada una.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Establecer fechas</h3>

              <p>
                Cuando existen pagos, entregas o actividades pendientes, definir
                plazos ayuda a evitar interpretaciones diferentes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Dejar registro</h3>

              <p>
                Conservar una comunicación clara sobre lo acordado puede ser
                útil si posteriormente surge una diferencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Informar cambios</h3>

              <p>
                Si una de las partes no puede cumplir en las condiciones
                inicialmente previstas, comunicarlo oportunamente puede
                facilitar una solución.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre incumplimiento de acuerdos entre
            particulares
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Qué puedo hacer si una persona incumple un acuerdo conmigo?
              </h3>

              <p>
                Puedes revisar qué se pactó, conservar la información disponible
                e intentar una solución directa. Dependiendo del caso, también
                puede evaluarse la posibilidad de acudir a conciliación u otras
                alternativas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar un incumplimiento?</h3>

              <p>
                En los asuntos legalmente conciliables, las partes pueden acudir
                a un centro de conciliación para intentar resolver diferencias
                relacionadas con obligaciones o compromisos pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirven los mensajes de WhatsApp como evidencia?</h3>

              <p>
                Los mensajes pueden contener información relevante sobre las
                conversaciones entre las partes. Su utilidad dependerá de las
                circunstancias y del análisis que corresponda en cada caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Un acuerdo verbal puede generar un conflicto jurídico?</h3>

              <p>
                Sí puede generar controversias. La validez y la forma de
                demostrar lo acordado dependerán del tipo de obligación y de las
                circunstancias particulares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si la otra persona no quiere conciliar?</h3>

              <p>
                Si no es posible alcanzar un acuerdo, pueden existir otras
                alternativas dependiendo de la naturaleza del conflicto y de las
                normas aplicables.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es necesario demandar inmediatamente?</h3>

              <p>
                No todos los conflictos requieren tomar la misma decisión. Antes
                de actuar, es importante revisar las características del acuerdo
                y las opciones que puedan resultar aplicables.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Buscar una solución antes de que el conflicto crezca
          </h2>

          <p className={styles.paragraph}>
            Un acuerdo incumplido puede terminar afectando una relación
            familiar, una amistad o la convivencia entre personas que
            inicialmente tenían una buena relación. Por eso, en algunos casos,
            intentar abrir un espacio de diálogo puede ser un primer paso útil
            para aclarar las diferencias.
          </p>

          <p className={styles.paragraph}>
            La conciliación no es una solución automática para todos los
            conflictos, ni todos los asuntos pueden tratarse de la misma manera.
            Sin embargo, cuando el caso es susceptible de conciliación y existe
            la posibilidad de construir un acuerdo, puede ser una alternativa
            para intentar resolver la controversia de manera dialogada y dentro
            del marco legal aplicable.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Una persona incumplió un acuerdo contigo?
          </h3>

          <p className={styles.ctaText}>
            Conoce si tu situación puede analizarse a través de un proceso de
            conciliación y encuentra una alternativa para intentar resolver el
            conflicto de manera dialogada.
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
