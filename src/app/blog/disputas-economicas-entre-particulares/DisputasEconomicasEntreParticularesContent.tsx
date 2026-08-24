"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DisputasEconomicasEntreParticularesContent() {
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
            CONFLICTOS ECONÓMICOS Y CONCILIACIÓN
          </span>

          <h1 className={styles.title}>
            Disputas económicas entre particulares en Colombia: cómo resolver
            deudas y conflictos por dinero
          </h1>

          <p className={styles.heroText}>
            Los problemas económicos entre particulares son más frecuentes de lo
            que parece. Un préstamo que no fue devuelto, un dinero entregado
            para realizar una compra, un pago pendiente o un acuerdo que nunca
            se cumplió pueden terminar afectando la relación entre familiares,
            amigos, vecinos, socios o cualquier otra persona.
          </p>

          <p className={styles.heroText}>
            En muchas ocasiones, el conflicto comienza con una conversación
            informal: <strong>“te pago la próxima semana”</strong>,{" "}
            <strong>“déjame organizarme”</strong> o{" "}
            <strong>“yo nunca quedé en pagar eso”</strong>. Con el paso del
            tiempo, el problema puede crecer y convertirse en una disputa sobre
            cuánto se debe, cuándo debía pagarse o incluso si realmente existía
            una obligación.
          </p>

          <p className={styles.heroText}>
            Dependiendo de las circunstancias del caso, la{" "}
            <strong>
              conciliación puede ser una alternativa para intentar resolver
              disputas económicas entre particulares
            </strong>{" "}
            y buscar un acuerdo antes de acudir a otras vías.
          </p>
        </div>

        {/* QUÉ SON */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son las disputas económicas entre particulares?
          </h2>

          <p className={styles.paragraph}>
            Son conflictos relacionados con dinero, pagos u obligaciones
            económicas que surgen directamente entre personas. No siempre existe
            una empresa, un banco o una institución involucrada. Muchas veces se
            trata de acuerdos realizados entre dos particulares.
          </p>

          <p className={styles.paragraph}>
            El origen del conflicto puede ser muy diferente en cada situación.
            Algunas disputas nacen de un préstamo de dinero; otras aparecen por
            una compra, una inversión, un negocio realizado entre conocidos o
            una obligación que una de las partes considera pendiente.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Que un acuerdo se haya realizado entre particulares no significa
              que el conflicto deba quedarse únicamente en discusiones
              informales. Dependiendo del caso, existen mecanismos que permiten
              intentar definir claramente las obligaciones y buscar una
              solución.
            </p>
          </div>
        </div>

        {/* SITUACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones frecuentes que generan conflictos por dinero
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Préstamos de dinero</h3>

              <p>
                Una persona entrega una suma de dinero a otra con el compromiso
                de que será devuelta en una fecha determinada, pero el pago no
                se realiza.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pagos pendientes</h3>

              <p>
                Se prestó un servicio, se entregó un bien o se cumplió una
                obligación, pero la contraprestación económica continúa
                pendiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Dinero entregado anticipadamente</h3>

              <p>
                Una persona entrega dinero para una compra, un servicio o una
                gestión que finalmente no se realiza como se esperaba.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos entre familiares o amigos</h3>

              <p>
                La cercanía entre las personas hace que muchas obligaciones se
                acuerden verbalmente y sin documentos formales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negocios entre particulares</h3>

              <p>
                Dos personas realizan una actividad económica conjunta y
                posteriormente surgen diferencias sobre aportes, pagos o reparto
                de dinero.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Devolución de dinero</h3>

              <p>
                Existe una discusión sobre si una determinada suma debe ser
                devuelta y bajo qué condiciones debe realizarse el pago.
              </p>
            </div>
          </div>
        </div>

        {/* DEUDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si una persona te debe dinero y no paga?
          </h2>

          <p className={styles.paragraph}>
            Antes de tomar cualquier decisión, conviene organizar la información
            relacionada con la obligación. Esto puede incluir conversaciones,
            comprobantes de pago, transferencias, documentos, mensajes o
            cualquier otro elemento que permita explicar cómo surgió el acuerdo.
          </p>

          <p className={styles.paragraph}>
            También es importante tener claridad sobre qué se está reclamando.
            En ocasiones el conflicto no consiste únicamente en que una persona
            se niegue a pagar. Puede existir una diferencia sobre el valor, los
            plazos, la forma de pago o incluso sobre los términos originales del
            acuerdo.
          </p>

          <p className={styles.paragraph}>
            Cuando las conversaciones directas no funcionan, una conciliación
            puede ofrecer un escenario más formal para intentar que las partes
            dialoguen y exploren una solución.
          </p>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede resolver una disputa económica mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del conflicto y de los derechos
            involucrados, las partes pueden acudir a un centro de conciliación
            para intentar llegar a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Esto puede ser especialmente útil cuando ambas partes reconocen que
            existe una situación pendiente, pero tienen diferencias sobre la
            forma de resolverla. Por ejemplo, una persona puede no estar en
            condiciones de pagar la totalidad de una deuda inmediatamente, pero
            sí puede proponer un acuerdo de pago por cuotas.
          </p>

          <p className={styles.paragraph}>
            La conciliación permite poner sobre la mesa alternativas que pueden
            ayudar a transformar una discusión abierta en compromisos concretos.
          </p>

          <div className={styles.highlightBox}>
            <p>
              El objetivo no es obligar a una persona a aceptar cualquier
              propuesta. La conciliación busca crear un espacio para que las
              partes puedan dialogar y, si existe voluntad, construir un acuerdo
              sobre la controversia.
            </p>
          </div>
        </div>

        {/* ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se puede acordar en una conciliación por una deuda o conflicto
            económico?
          </h2>

          <p className={styles.paragraph}>
            Las posibilidades dependen de cada situación. Sin embargo, algunos
            de los acuerdos que pueden explorarse están relacionados con la
            forma y el tiempo en que se solucionará la obligación.
          </p>

          <ul className={styles.list}>
            <li>
              Definir el valor sobre el cual existe acuerdo entre las partes.
            </li>

            <li>Establecer una fecha concreta para realizar el pago.</li>

            <li>Crear un acuerdo de pago por cuotas.</li>

            <li>Definir las fechas y valores de cada cuota.</li>

            <li>
              Establecer compromisos relacionados con una obligación pendiente.
            </li>

            <li>
              Acordar una forma de solucionar el conflicto económico entre las
              partes.
            </li>

            <li>
              Dejar claramente establecidos los compromisos asumidos por cada
              persona.
            </li>
          </ul>
        </div>

        {/* SIN CONTRATO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no existe un contrato escrito?
          </h2>

          <p className={styles.paragraph}>
            Esta es una situación bastante común, especialmente cuando el
            acuerdo se realiza entre familiares, amigos o personas que tienen
            una relación de confianza. Muchas obligaciones económicas comienzan
            simplemente con una conversación o con una transferencia de dinero.
          </p>

          <p className={styles.paragraph}>
            La ausencia de un contrato escrito no permite, por sí sola, concluir
            que no exista una obligación. Las circunstancias particulares y los
            elementos disponibles deben analizarse de acuerdo con cada caso.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, puede ser útil conservar mensajes, comprobantes,
            transferencias y cualquier otra información relacionada con el
            acuerdo original.
          </p>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Información que puede ayudar a entender la disputa
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos económicos cuentan con los mismos
            documentos. Sin embargo, tener la información organizada facilita
            explicar qué ocurrió y cuál es la obligación que se encuentra en
            discusión.
          </p>

          <ul className={styles.list}>
            <li>Comprobantes de transferencias o consignaciones.</li>

            <li>Mensajes y comunicaciones relacionadas con el acuerdo.</li>

            <li>Recibos o comprobantes de pago.</li>

            <li>Documentos firmados por las partes, si existen.</li>

            <li>
              Conversaciones en las que se mencionen valores o fechas de pago.
            </li>

            <li>
              Cualquier soporte que permita explicar el origen de la obligación.
            </li>
          </ul>
        </div>

        {/* ACUERDO DE PAGO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Acuerdos de pago: una alternativa para resolver la disputa
          </h2>

          <p className={styles.paragraph}>
            No siempre una persona que tiene una obligación pendiente se niega
            completamente a pagar. A veces el verdadero problema está en la
            imposibilidad de realizar el pago de una sola vez.
          </p>

          <p className={styles.paragraph}>
            En estos casos, una posible solución puede consistir en establecer
            un acuerdo que determine cuánto se pagará, en qué fechas y bajo qué
            condiciones.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Valor definido</h3>

              <p>
                Las partes pueden establecer claramente la suma sobre la cual
                están llegando a un acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fechas claras</h3>

              <p>
                Se pueden definir fechas específicas para evitar nuevas
                discusiones sobre cuándo debe realizarse cada pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pagos por cuotas</h3>

              <p>
                Dependiendo de lo acordado, las partes pueden estructurar una
                forma de pago que resulte viable para ambas.
              </p>
            </div>
          </div>
        </div>

        {/* CUÁNDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser conveniente intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa para considerar cuando el
            conflicto todavía tiene una posibilidad real de ser solucionado
            mediante diálogo y las partes pueden identificar qué es lo que está
            en discusión.
          </p>

          <p className={styles.paragraph}>
            Por ejemplo, puede existir una deuda reconocida, pero una
            controversia sobre los plazos. También puede haber desacuerdo sobre
            una suma de dinero, aunque ambas partes estén dispuestas a explorar
            una solución.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Existe una obligación discutida</h3>

              <p>
                Las partes pueden identificar claramente cuál es el problema
                económico que necesitan resolver.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Hay disposición para dialogar</h3>

              <p>
                Aunque exista un desacuerdo, todavía es posible explorar una
                solución negociada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Se necesita formalizar compromisos</h3>

              <p>
                Las conversaciones informales no han sido suficientes y las
                partes necesitan dejar claros los acuerdos alcanzados.
              </p>
            </div>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al manejar conflictos económicos entre
            particulares
          </h2>

          <ul className={styles.list}>
            <li>
              Confiar únicamente en acuerdos verbales sin conservar ninguna
              información relacionada con la obligación.
            </li>

            <li>
              No dejar claras las fechas en las que debía realizarse un pago.
            </li>

            <li>
              Permitir que el conflicto avance durante meses sin intentar una
              solución.
            </li>

            <li>
              Mezclar el problema económico con discusiones personales que
              dificultan encontrar una salida.
            </li>

            <li>
              Realizar nuevos acuerdos sin dejar claros los compromisos
              asumidos.
            </li>

            <li>
              Tomar decisiones apresuradas sin analizar las circunstancias
              completas del conflicto.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre disputas económicas entre particulares
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Puedo conciliar una deuda con otra persona?</h3>

              <p>
                Dependiendo de las características del caso, puede ser posible
                acudir a conciliación para intentar llegar a un acuerdo sobre
                una obligación económica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué hago si me deben dinero y no quieren pagar?</h3>

              <p>
                Es importante organizar la información relacionada con la
                obligación y evaluar las alternativas disponibles, entre ellas
                la posibilidad de intentar una conciliación cuando corresponda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo hacer un acuerdo de pago por cuotas?</h3>

              <p>
                Las partes pueden explorar acuerdos relacionados con pagos
                parciales, cuotas y fechas específicas para solucionar la
                obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Sirven los mensajes como soporte del acuerdo?</h3>

              <p>
                Las comunicaciones pueden contener información relevante sobre
                las circunstancias del acuerdo. Su alcance y utilidad dependerán
                de las características particulares del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar dinero si el acuerdo fue verbal?</h3>

              <p>
                La ausencia de un documento escrito no permite concluir
                automáticamente que no exista una obligación. Las circunstancias
                y soportes disponibles deben analizarse según cada situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no se logra un acuerdo?</h3>

              <p>
                Si no se alcanza una solución durante la conciliación, las
                partes pueden evaluar las alternativas legales que correspondan
                de acuerdo con las particularidades del conflicto.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto económico con otra persona?
          </h3>

          <p className={styles.ctaText}>
            Conoce cómo funciona la conciliación y las alternativas disponibles
            para intentar resolver deudas, pagos pendientes y otros conflictos
            económicos entre particulares.
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
