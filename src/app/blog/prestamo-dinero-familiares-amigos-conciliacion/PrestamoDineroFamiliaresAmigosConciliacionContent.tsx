"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function PrestamoDineroFamiliaresAmigosConciliacionContent() {
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
            PRÉSTAMOS ENTRE FAMILIARES Y AMIGOS
          </span>

          <h1 className={styles.title}>
            ¿Le prestaste dinero a un familiar o amigo y no te paga? La
            conciliación puede ayudar a buscar una solución
          </h1>

          <p className={styles.heroText}>
            Prestar dinero a un familiar o a un amigo suele comenzar como un
            acto de confianza. Muchas veces no se firma un contrato, no se
            establecen condiciones detalladas y todo queda resumido en una
            conversación: <strong>“cuando pueda te lo devuelvo”</strong> o{" "}
            <strong>“el próximo mes te pago”</strong>.
          </p>

          <p className={styles.heroText}>
            El problema aparece cuando pasa el tiempo y el dinero no regresa. Lo
            que inicialmente parecía una ayuda puede convertirse en una
            discusión incómoda que afecta la relación personal y genera dudas
            sobre qué hacer para intentar recuperar el dinero.
          </p>

          <p className={styles.heroText}>
            Dependiendo de las circunstancias del caso,{" "}
            <strong>
              la conciliación puede ser una alternativa para que las partes
              intenten dialogar y buscar un acuerdo sobre el dinero prestado
            </strong>
            , especialmente cuando las conversaciones informales ya no están
            funcionando.
          </p>
        </div>

        {/* SITUACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cuando prestar dinero se convierte en un problema
          </h2>

          <p className={styles.paragraph}>
            Los préstamos entre familiares y amigos tienen una particularidad:
            normalmente se realizan en un contexto de confianza. Por esa razón,
            muchas personas no consideran necesario firmar documentos o dejar
            por escrito la fecha exacta en la que el dinero deberá ser devuelto.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, con el paso del tiempo pueden aparecer diferencias. Una
            persona puede considerar que se trató de un préstamo, mientras la
            otra puede tener una interpretación diferente sobre el acuerdo.
            También puede existir una discusión sobre el valor pendiente o sobre
            la fecha en que debía realizarse el pago.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Los conflictos por dinero entre personas cercanas suelen ser más
              difíciles de manejar porque el problema económico termina mezclado
              con la relación familiar o de amistad. Por eso, encontrar un
              espacio adecuado para dialogar puede ayudar a ordenar la
              situación.
            </p>
          </div>
        </div>

        {/* CASOS COMUNES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones frecuentes en préstamos entre familiares y amigos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Dinero prestado para una emergencia</h3>

              <p>
                Una persona solicita ayuda económica para resolver una situación
                urgente y se compromete a devolver el dinero posteriormente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Préstamo sin contrato escrito</h3>

              <p>
                El dinero se entrega únicamente con base en la confianza entre
                las personas, sin firmar un documento formal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Promesas de pago incumplidas</h3>

              <p>
                La persona reconoce inicialmente la obligación, pero las fechas
                de pago se aplazan una y otra vez.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pagos parciales</h3>

              <p>
                Se devuelve una parte del dinero, pero posteriormente surgen
                diferencias sobre cuánto continúa pendiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Préstamos entre familiares</h3>

              <p>
                Padres, hijos, hermanos u otros familiares pueden tener
                desacuerdos cuando las condiciones del préstamo nunca quedaron
                completamente claras.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Préstamos entre amigos</h3>

              <p>
                Una amistad puede verse afectada cuando el dinero prestado no es
                devuelto y las conversaciones empiezan a generar tensión.
              </p>
            </div>
          </div>
        </div>

        {/* QUÉ HACER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si le prestaste dinero a un familiar o amigo y no te
            paga?
          </h2>

          <p className={styles.paragraph}>
            Lo primero es intentar identificar claramente qué fue lo que se
            acordó. Aunque la conversación haya sido informal, puede existir
            información que ayude a reconstruir las condiciones del préstamo.
          </p>

          <p className={styles.paragraph}>
            Antes de que la discusión continúe creciendo, puede ser útil
            organizar los elementos relacionados con el dinero entregado y con
            las conversaciones posteriores sobre su devolución.
          </p>

          <ul className={styles.list}>
            <li>Revisar cuándo y cómo se entregó el dinero.</li>

            <li>
              Organizar comprobantes de transferencias, consignaciones o pagos.
            </li>

            <li>
              Conservar mensajes relacionados con el préstamo o con la fecha de
              devolución.
            </li>

            <li>
              Identificar si la persona ha reconocido la existencia de la deuda.
            </li>

            <li>Tener claridad sobre el valor que se considera pendiente.</li>

            <li>
              Intentar establecer una conversación enfocada en encontrar una
              solución.
            </li>
          </ul>
        </div>

        {/* SIN CONTRATO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Y si el préstamo fue verbal y nunca firmamos un contrato?
          </h2>

          <p className={styles.paragraph}>
            Esta es una de las dudas más comunes. Cuando existe una relación de
            confianza, muchas personas entregan dinero sin pensar que
            posteriormente necesitarán demostrar cómo surgió el acuerdo.
          </p>

          <p className={styles.paragraph}>
            La ausencia de un contrato escrito no permite concluir
            automáticamente que no exista una obligación. Las circunstancias del
            caso y la información disponible deben analizarse de manera
            particular.
          </p>

          <p className={styles.paragraph}>
            Por eso, pueden ser relevantes elementos como conversaciones,
            transferencias, comprobantes de pago o mensajes en los que se haga
            referencia al dinero entregado o a la intención de devolverlo.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cada situación puede ser diferente. No es lo mismo un préstamo
              claramente reconocido por ambas personas que un conflicto en el
              que incluso existe desacuerdo sobre si el dinero fue entregado
              como préstamo, ayuda o regalo.
            </p>
          </div>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo puede ayudar la conciliación en un préstamo de dinero?
          </h2>

          <p className={styles.paragraph}>
            Cuando hablar directamente ya no funciona, la conciliación puede
            permitir que las partes se reúnan en un espacio orientado a buscar
            una solución sobre el conflicto económico.
          </p>

          <p className={styles.paragraph}>
            Esto puede resultar útil cuando existe disposición para resolver la
            situación, pero las partes no logran ponerse de acuerdo sobre el
            valor pendiente, las fechas o la forma en que se realizará el pago.
          </p>

          <p className={styles.paragraph}>
            En lugar de continuar con conversaciones repetitivas sin llegar a
            ninguna conclusión, las partes pueden explorar alternativas
            concretas para solucionar el conflicto.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Un espacio para dialogar</h3>

              <p>
                Permite que las partes expongan su posición y expliquen cómo
                entienden la situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Buscar una solución</h3>

              <p>
                Las personas pueden explorar alternativas relacionadas con el
                pago y la forma de solucionar la controversia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Definir compromisos</h3>

              <p>
                Si se alcanza un acuerdo, las partes pueden dejar claramente
                establecidos los compromisos asumidos.
              </p>
            </div>
          </div>
        </div>

        {/* ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Acuerdo de pago por dinero prestado: ¿qué se puede definir?
          </h2>

          <p className={styles.paragraph}>
            No siempre la solución consiste en exigir el pago total de una sola
            vez. En algunas situaciones, la persona que recibió el dinero puede
            reconocer la obligación, pero no tener la posibilidad de pagarla
            inmediatamente.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de lo que las partes estén dispuestas a acordar, pueden
            explorarse diferentes formas de solucionar el conflicto.
          </p>

          <ul className={styles.list}>
            <li>El valor que será objeto del acuerdo.</li>

            <li>La fecha o fechas en las que se realizarán los pagos.</li>

            <li>La posibilidad de establecer pagos por cuotas.</li>

            <li>El valor correspondiente a cada cuota.</li>

            <li>Los compromisos asumidos por cada una de las partes.</li>

            <li>
              Las condiciones que permitan cerrar el conflicto y evitar nuevas
              diferencias.
            </li>
          </ul>
        </div>

        {/* RELACIÓN PERSONAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            El problema no siempre es solo el dinero
          </h2>

          <p className={styles.paragraph}>
            Cuando el préstamo ocurre entre personas cercanas, la discusión
            puede afectar mucho más que la situación económica. Una deuda puede
            terminar generando problemas familiares, distanciamientos o la
            ruptura de una amistad.
          </p>

          <p className={styles.paragraph}>
            En algunos casos, ambas personas quieren resolver el conflicto, pero
            la relación personal hace que sea difícil hablar del tema sin volver
            a discusiones anteriores.
          </p>

          <p className={styles.paragraph}>
            Buscar una alternativa para abordar directamente el problema
            económico puede ayudar a separar la obligación pendiente de los
            demás conflictos personales que hayan surgido.
          </p>
        </div>

        {/* CUÁNDO CONSIDERAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser conveniente intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa para considerar cuando las
            conversaciones directas no han permitido solucionar el conflicto,
            pero todavía existe la posibilidad de que las partes dialoguen y
            exploren un acuerdo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Reconoce que existe un problema</h3>

              <p>
                Las partes tienen claridad sobre que existe una situación
                económica pendiente por resolver.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Las conversaciones no funcionan</h3>

              <p>
                Se ha intentado hablar del tema, pero las promesas o discusiones
                no han permitido llegar a una solución concreta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Existe disposición para negociar</h3>

              <p>
                Aunque haya diferencias, todavía existe la posibilidad de
                explorar alternativas de solución.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMENDACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones para evitar conflictos por préstamos entre personas
            cercanas
          </h2>

          <p className={styles.paragraph}>
            Aunque nadie presta dinero pensando en un conflicto futuro, dejar
            claras algunas condiciones desde el comienzo puede evitar
            malentendidos.
          </p>

          <ul className={styles.list}>
            <li>
              Definir claramente si el dinero es un préstamo, una ayuda o un
              regalo.
            </li>

            <li>Acordar cuándo se espera que el dinero sea devuelto.</li>

            <li>
              Conservar los comprobantes relacionados con la entrega del dinero.
            </li>

            <li>
              Dejar por escrito, cuando sea posible, los aspectos principales
              del acuerdo.
            </li>

            <li>
              Hablar sobre posibles cambios en las condiciones antes de que el
              problema crezca.
            </li>

            <li>
              Evitar asumir que la relación familiar o de amistad elimina la
              necesidad de establecer acuerdos claros.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre préstamos de dinero entre familiares y
            amigos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué hago si le presté dinero a un familiar y no me paga?</h3>

              <p>
                Puede ser útil organizar la información relacionada con el
                préstamo e intentar establecer una solución. Dependiendo del
                caso, las partes pueden explorar la conciliación para buscar un
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Puedo reclamar un préstamo si nunca firmamos un contrato?
              </h3>

              <p>
                La ausencia de un contrato escrito no permite concluir
                automáticamente que no exista una obligación. Las circunstancias
                y soportes disponibles deben analizarse según cada situación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar una deuda con un familiar o amigo?</h3>

              <p>
                Dependiendo de las características del conflicto, las partes
                pueden acudir a conciliación para intentar llegar a un acuerdo
                sobre una obligación económica.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede hacer un acuerdo de pago por cuotas?</h3>

              <p>
                Las partes pueden explorar alternativas relacionadas con pagos
                parciales, cuotas, fechas y otras condiciones que permitan
                solucionar el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Los mensajes pueden ayudar a explicar el préstamo?</h3>

              <p>
                Las conversaciones y comunicaciones pueden contener información
                relacionada con el acuerdo. Su alcance dependerá de las
                circunstancias particulares del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si no se logra un acuerdo?</h3>

              <p>
                Si las partes no alcanzan una solución, pueden evaluar las
                alternativas disponibles de acuerdo con las circunstancias
                particulares del conflicto.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Prestaste dinero y ahora tienes un conflicto con esa persona?
          </h3>

          <p className={styles.ctaText}>
            Conoce cómo funciona la conciliación y cómo las partes pueden
            intentar encontrar una solución frente a préstamos, deudas y
            acuerdos de pago entre familiares o amigos.
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
