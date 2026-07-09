"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DespidoInjustificadoConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación laboral y solución de conflictos en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación por despido injustificado en Colombia: cómo proteger
            tus derechos sin iniciar una demanda
          </h1>

          <p className={styles.heroText}>
            Un despido inesperado puede generar incertidumbre económica, afectar
            la estabilidad familiar y dar lugar a diferencias entre el
            trabajador y el empleador. En muchos casos, antes de acudir a un
            proceso judicial, es posible buscar una solución mediante la
            conciliación laboral.
          </p>

          <p className={styles.heroText}>
            Este mecanismo permite que ambas partes dialoguen con el
            acompañamiento de un conciliador imparcial para negociar aspectos
            como indemnizaciones, salarios pendientes, prestaciones sociales,
            liquidaciones y otros derechos derivados de la terminación del
            contrato de trabajo.
          </p>

          <p className={styles.heroText}>
            Cuando existe disposición para llegar a un acuerdo, la conciliación
            suele convertirse en una alternativa más rápida, menos costosa y con
            plena validez jurídica, evitando procesos judiciales que pueden
            prolongarse durante meses o incluso años.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no busca determinar quién tiene la razón, sino
              facilitar un acuerdo que permita resolver el conflicto laboral de
              manera voluntaria, segura y conforme a la legislación colombiana.
            </p>
          </div>
        </div>

        {/* QUE ES UN DESPIDO INJUSTIFICADO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se considera un despido injustificado en Colombia?
          </h2>

          <p className={styles.paragraph}>
            En términos generales, un despido injustificado ocurre cuando el
            empleador decide terminar el contrato de trabajo sin una causa legal
            que respalde su decisión o sin cumplir las condiciones previstas por
            la legislación laboral colombiana.
          </p>

          <p className={styles.paragraph}>
            Dependiendo de cada situación, el trabajador puede considerar que
            fueron vulnerados sus derechos y solicitar el reconocimiento de
            indemnizaciones, salarios pendientes, prestaciones sociales u otros
            conceptos derivados de la terminación de la relación laboral.
          </p>

          <p className={styles.paragraph}>
            No todos los despidos generan automáticamente una indemnización.
            Cada caso debe analizarse individualmente teniendo en cuenta el tipo
            de contrato, la causa invocada por el empleador, la documentación
            existente y las circunstancias particulares del vínculo laboral.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Antes de acudir ante un juez, muchas diferencias relacionadas con
              un despido pueden solucionarse mediante una audiencia de
              conciliación donde trabajador y empleador negocian directamente
              una solución.
            </p>
          </div>
        </div>

        {/* COMO AYUDA LA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo ayuda la conciliación en un despido injustificado?
          </h2>

          <p className={styles.paragraph}>
            La conciliación crea un espacio de diálogo donde trabajador y
            empleador pueden expresar sus posiciones, revisar la documentación
            disponible y construir una solución que resulte aceptable para ambas
            partes.
          </p>

          <p className={styles.paragraph}>
            Durante la audiencia pueden discutirse diferentes aspectos
            económicos y jurídicos relacionados con la terminación del contrato,
            evitando que el conflicto continúe escalando hacia un proceso
            judicial.
          </p>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, este mecanismo permite que las
            partes diseñen acuerdos adaptados a sus necesidades particulares,
            incluyendo cronogramas de pago o fórmulas de cumplimiento que
            normalmente no podrían obtenerse con la misma flexibilidad dentro de
            un juicio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En muchos conflictos laborales, una conciliación exitosa permite
              cerrar definitivamente la controversia mediante un acuerdo con
              efectos legales, brindando mayor tranquilidad tanto al trabajador
              como al empleador.
            </p>
          </div>
        </div>

        {/* ASPECTOS QUE PUEDE CONCILIARSE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué aspectos pueden conciliar trabajador y empleador?
          </h2>

          <p className={styles.paragraph}>
            Una de las principales ventajas de la conciliación laboral es que
            permite abordar diferentes obligaciones derivadas de la terminación
            del contrato de trabajo dentro de una misma audiencia. Las partes
            tienen la posibilidad de negociar soluciones ajustadas a sus
            necesidades, siempre que respeten la legislación aplicable y los
            derechos correspondientes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Indemnización por despido</h3>

              <p>
                Negociación del valor económico que podría reconocerse cuando
                existe controversia sobre la terminación del contrato.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Liquidación laboral</h3>

              <p>
                Revisión de cesantías, intereses, primas, vacaciones, salarios y
                demás conceptos pendientes de pago.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Forma y plazo de pago</h3>

              <p>
                Las partes pueden acordar pagos únicos, cuotas, fechas
                específicas o mecanismos para garantizar el cumplimiento del
                acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Otros compromisos</h3>

              <p>
                También pueden acordarse entrega de certificados laborales, paz
                y salvos, devolución de elementos de trabajo u otras
                obligaciones relacionadas con la terminación del vínculo
                laboral.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Cada conflicto laboral es diferente. Por eso, los acuerdos
              conciliatorios pueden adaptarse a las circunstancias particulares
              de cada trabajador y empleador.
            </p>
          </div>
        </div>

        {/* BENEFICIOS DE LA CONCILIACION FRENTE A UNA DEMANDA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué intentar una conciliación antes de presentar una demanda
            laboral?
          </h2>

          <p className={styles.paragraph}>
            Aunque la vía judicial continúa siendo una alternativa disponible
            cuando no existe acuerdo, muchas personas optan primero por la
            conciliación debido a los beneficios prácticos que ofrece para
            resolver controversias laborales.
          </p>

          <ul className={styles.list}>
            <li>
              Reduce significativamente los tiempos para resolver el conflicto.
            </li>
            <li>Disminuye los costos asociados a un proceso judicial.</li>
            <li>Facilita el diálogo entre trabajador y empleador.</li>
            <li>Permite negociar soluciones flexibles y personalizadas.</li>
            <li>Brinda mayor seguridad jurídica mediante un acuerdo formal.</li>
            <li>
              Evita el desgaste emocional que suele generar un litigio
              prolongado.
            </li>
            <li>
              Favorece el cumplimiento voluntario de las obligaciones pactadas.
            </li>
            <li>
              Puede realizarse de manera presencial o virtual, según el caso.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              En numerosos conflictos laborales, la conciliación permite
              alcanzar una solución satisfactoria en un tiempo considerablemente
              menor que un proceso judicial ordinario.
            </p>
          </div>
        </div>

        {/* DOCUMENTOS QUE PUEDE FACILITAR UNA CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Documentos que pueden facilitar una conciliación laboral
          </h2>

          <p className={styles.paragraph}>
            Contar con la documentación relacionada con la relación laboral
            permite que la audiencia se desarrolle con mayor claridad y facilita
            la revisión de los hechos que originaron el conflicto.
          </p>

          <ul className={styles.list}>
            <li>Contrato de trabajo.</li>
            <li>Carta de despido, cuando exista.</li>
            <li>Comprobantes de pago.</li>
            <li>Desprendibles de nómina.</li>
            <li>Liquidación entregada por el empleador.</li>
            <li>Correos electrónicos o comunicaciones relevantes.</li>
            <li>Certificados laborales.</li>
            <li>Cualquier otro documento relacionado con el conflicto.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              No siempre es necesario contar con todos estos documentos. Cada
              caso puede analizarse según la información disponible.
            </p>
          </div>
        </div>

        {/* DERECHOS QUE PUEDE RECLAMAR UN TRABAJADOR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué derechos puede reclamar un trabajador después de un despido?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de las circunstancias en las que terminó la relación
            laboral, el trabajador puede considerar que existen valores
            pendientes de pago o derechos que deben ser revisados. La
            conciliación permite analizar estas diferencias y buscar una
            solución acordada entre las partes.
          </p>

          <p className={styles.paragraph}>
            Cada caso debe evaluarse de forma individual, ya que las
            obligaciones del empleador pueden variar según el tipo de contrato,
            el tiempo laborado, la causa de terminación y la documentación
            disponible.
          </p>

          <ul className={styles.list}>
            <li>Indemnización cuando corresponda.</li>
            <li>Salarios pendientes de pago.</li>
            <li>Prestaciones sociales.</li>
            <li>Vacaciones pendientes.</li>
            <li>Horas extras, recargos y demás conceptos laborales.</li>
            <li>Entrega de certificados laborales.</li>
            <li>Liquidación definitiva del contrato.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación permite revisar estos conceptos y construir
              acuerdos sin necesidad de esperar el resultado de un proceso
              judicial.
            </p>
          </div>
        </div>

        {/* COMO SE DESARROLLA UNA AUDIENCIA DE CONCILIACION LABORAL */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se desarrolla una audiencia de conciliación laboral?
          </h2>

          <p className={styles.paragraph}>
            Una vez presentada la solicitud, trabajador y empleador son citados
            a una audiencia donde un conciliador imparcial facilita el diálogo
            entre ambas partes.
          </p>

          <p className={styles.paragraph}>
            Durante la reunión cada persona puede exponer su versión de los
            hechos, presentar la documentación disponible y explicar cuáles son
            sus pretensiones frente al conflicto laboral.
          </p>

          <p className={styles.paragraph}>
            Si existe disposición para negociar, el conciliador ayuda a
            construir una solución que satisfaga los intereses de ambas partes y
            que pueda quedar formalizada mediante un acta con efectos jurídicos.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Solicitud</h3>

              <p>
                Se presenta la petición de conciliación ante el centro
                autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Citación</h3>

              <p>
                Ambas partes reciben la convocatoria para asistir a la
                audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negociación</h3>

              <p>
                Se dialoga sobre indemnizaciones, pagos y demás diferencias
                laborales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdo</h3>

              <p>
                Si existe consenso, se firma un acta con plena validez jurídica.
              </p>
            </div>
          </div>
        </div>

        {/* QUE SUCEDE SI SE LOGRA UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre cuando trabajador y empleador llegan a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Si durante la audiencia ambas partes logran una solución, el
            conciliador deja constancia de los compromisos en un acta de
            conciliación. En este documento quedan definidos los derechos,
            obligaciones, valores reconocidos, plazos de pago y demás
            condiciones acordadas.
          </p>

          <p className={styles.paragraph}>
            El acta brinda seguridad jurídica tanto al trabajador como al
            empleador, pues refleja de manera clara los compromisos asumidos y
            constituye el respaldo legal del acuerdo alcanzado.
          </p>

          <p className={styles.paragraph}>
            En muchos casos, la existencia de un acuerdo evita nuevos conflictos
            y permite que ambas partes finalicen la relación laboral de forma
            organizada, reduciendo el riesgo de futuros procesos judiciales
            relacionados con los mismos hechos.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo conciliatorio bien elaborado proporciona claridad sobre
              las obligaciones de cada parte y contribuye a cerrar el conflicto
              de manera definitiva.
            </p>
          </div>
        </div>

        {/* QUE SUCEDE SI NO ES POSIBLE LLEGAR A UN ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede si no es posible llegar a un acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias concluyen con un acuerdo. Cuando las
            diferencias entre trabajador y empleador persisten, ambas partes
            conservan la posibilidad de acudir a las acciones legales previstas
            por la legislación colombiana.
          </p>

          <p className={styles.paragraph}>
            Sin embargo, incluso cuando inicialmente no se logra una solución,
            la conciliación suele permitir aclarar los puntos de desacuerdo y
            facilitar futuras negociaciones.
          </p>

          <p className={styles.paragraph}>
            En muchos casos, las partes retoman las conversaciones
            posteriormente y consiguen resolver el conflicto sin necesidad de un
            proceso judicial prolongado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Intentar una conciliación representa una oportunidad para
              encontrar una solución dialogada antes de acudir a mecanismos
              judiciales más complejos.
            </p>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿La conciliación reemplaza una demanda laboral?</h3>

              <p>
                En muchos casos sí, siempre que las partes alcancen un acuerdo
                satisfactorio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio conciliar?</h3>

              <p>
                Depende del caso concreto, pero suele ser una alternativa
                altamente recomendable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene validez legal?</h3>

              <p>
                Sí. El acta de conciliación tiene efectos jurídicos y puede ser
                exigida legalmente.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas resolver un conflicto por despido injustificado?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos para alcanzar acuerdos
            laborales seguros, rápidos y con respaldo jurídico.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            className={styles.ctaButton}
          >
            Solicitar orientación
          </a>
        </div>
      </motion.article>
    </section>
  );
}
