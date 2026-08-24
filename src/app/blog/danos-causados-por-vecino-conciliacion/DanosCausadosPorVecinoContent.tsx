"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DanosCausadosPorVecinoContent() {
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
            Conflictos entre vecinos y conciliación
          </span>

          <h1 className={styles.title}>
            ¿Un vecino causó daños a tu propiedad? Qué hacer y cómo buscar una
            solución en Colombia
          </h1>

          <p className={styles.heroText}>
            Una filtración que termina dañando el techo, una obra que afecta la
            vivienda vecina, un vehículo golpeado, objetos deteriorados o daños
            ocasionados durante una discusión pueden convertirse rápidamente en
            un problema entre vecinos.
          </p>

          <p className={styles.heroText}>
            Cuando esto ocurre, es normal preguntarse{" "}
            <strong>
              quién debe responder por los daños, cómo demostrar lo sucedido y
              qué hacer si la otra persona se niega a asumir la reparación
            </strong>
            . Antes de llevar el conflicto a una instancia judicial, en
            determinados casos puede ser posible intentar una solución mediante
            diálogo y conciliación.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás una explicación clara sobre qué hacer
            cuando un vecino causa daños a tu propiedad, qué pruebas conviene
            conservar y cómo puede funcionar una conciliación para intentar
            resolver el conflicto.
          </p>
        </div>

        {/* CUÁNDO PUEDE OCURRIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipo de daños puede causar un vecino?
          </h2>

          <p className={styles.paragraph}>
            Los conflictos entre vecinos no siempre comienzan por una discusión
            directa. En muchos casos, el problema aparece después de que ocurre
            una situación que afecta una vivienda, un apartamento, un vehículo o
            cualquier otro bien.
          </p>

          <p className={styles.paragraph}>
            Cada situación debe analizarse según sus circunstancias. No es lo
            mismo un daño accidental que una afectación ocasionada por falta de
            mantenimiento, una obra realizada sin las precauciones necesarias o
            una conducta que termina perjudicando a otra persona.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Filtraciones y humedades</h3>

              <p>
                Daños ocasionados por tuberías, filtraciones de agua, fugas o
                situaciones provenientes de otro apartamento o inmueble.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños durante obras</h3>

              <p>
                Remodelaciones, reparaciones o trabajos que generan afectaciones
                en paredes, techos, instalaciones o bienes de un vecino.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños a bienes</h3>

              <p>
                Situaciones que afectan vehículos, objetos, puertas, ventanas,
                zonas privadas u otros bienes pertenecientes a otra persona.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños en propiedad horizontal</h3>

              <p>
                Conflictos en edificios y conjuntos donde también puede ser
                necesario determinar si existe responsabilidad de un
                propietario, residente, tercero o incluso de acuerdo con las
                circunstancias, de otras personas involucradas.
              </p>
            </div>
          </div>
        </div>

        {/* QUÉ HACER INICIALMENTE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué hacer si un vecino causa daños a tu casa, apartamento o bienes?
          </h2>

          <p className={styles.paragraph}>
            Después de descubrir un daño, es importante no actuar únicamente
            desde la molestia del momento. Una discusión puede hacer más difícil
            encontrar una solución y, además, con el paso del tiempo algunas
            pruebas pueden desaparecer.
          </p>

          <p className={styles.paragraph}>
            Lo más conveniente es organizar la información relacionada con lo
            ocurrido antes de iniciar una reclamación formal o solicitar una
            audiencia de conciliación.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Documenta el daño:</strong> toma fotografías y videos que
              permitan identificar claramente la afectación.
            </li>

            <li>
              <strong>Registra cuándo ocurrió:</strong> anota fechas,
              circunstancias y cualquier situación relevante relacionada con el
              daño.
            </li>

            <li>
              <strong>Conserva comunicaciones:</strong> guarda mensajes, correos
              electrónicos u otros intercambios relacionados con el problema.
            </li>

            <li>
              <strong>Reúne documentos:</strong> conserva facturas,
              cotizaciones, presupuestos o comprobantes de reparaciones cuando
              sean pertinentes.
            </li>

            <li>
              <strong>Identifica el origen del daño:</strong> especialmente en
              casos de filtraciones, humedades o daños técnicos, puede ser
              importante determinar de dónde proviene la afectación.
            </li>

            <li>
              <strong>Intenta una conversación:</strong> en algunos casos el
              conflicto puede solucionarse si existe disposición para reconocer
              el problema y acordar una forma de reparación.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              <strong>Un punto importante:</strong> antes de exigir un pago o
              atribuir una responsabilidad, conviene contar con la mayor
              cantidad posible de información sobre cómo ocurrió el daño y cuál
              fue su causa. Esto puede ser fundamental si posteriormente las
              partes necesitan acudir a una conciliación o a otra instancia para
              resolver el conflicto.
            </p>
          </div>
        </div>

        {/* PRUEBAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pruebas pueden servir para reclamar daños a un vecino?
          </h2>

          <p className={styles.paragraph}>
            No existe una única prueba que sirva para todos los conflictos. La
            información relevante dependerá del tipo de daño y de la forma en la
            que ocurrió. Sin embargo, entre los elementos que pueden ayudar a
            explicar la situación se encuentran los siguientes:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Fotografías y videos</h3>

              <p>
                Permiten registrar el estado del inmueble o del bien afectado y
                mostrar la evolución del daño cuando este cambia con el tiempo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Facturas y cotizaciones</h3>

              <p>
                Pueden ayudar a demostrar los gastos realizados o el valor
                aproximado de las reparaciones necesarias.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Informes técnicos</h3>

              <p>
                En problemas relacionados con filtraciones, estructuras,
                instalaciones o reparaciones, un concepto técnico puede ayudar a
                identificar el origen de la afectación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mensajes y comunicaciones</h3>

              <p>
                Las conversaciones entre las partes pueden aportar contexto
                sobre lo ocurrido, los reclamos realizados o las posibles
                soluciones discutidas.
              </p>
            </div>
          </div>
        </div>

        {/* FILTRACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Daños por filtraciones, humedades y problemas entre apartamentos
          </h2>

          <p className={styles.paragraph}>
            Uno de los conflictos más frecuentes entre vecinos, especialmente en
            edificios y conjuntos residenciales, tiene que ver con filtraciones
            de agua y humedades. El problema puede comenzar en un apartamento y
            terminar afectando techos, paredes, pisos, muebles o instalaciones
            de otro inmueble.
          </p>

          <p className={styles.paragraph}>
            En estas situaciones, una de las principales dificultades consiste
            en determinar{" "}
            <strong>cuál es realmente el origen de la filtración</strong>. No
            siempre es evidente si proviene de una tubería privada, de otra
            unidad residencial o de una zona o instalación común.
          </p>

          <p className={styles.paragraph}>
            Por esta razón, antes de llegar a conclusiones puede ser útil contar
            con una revisión técnica y conservar los documentos relacionados con
            las reparaciones realizadas o necesarias.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando existe una discusión sobre el origen del daño, intentar
              resolver el problema únicamente mediante acusaciones puede
              aumentar el conflicto. Contar con información técnica y pruebas
              claras puede facilitar una conversación y la búsqueda de un
              acuerdo.
            </p>
          </div>
        </div>

        {/* CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Se puede acudir a conciliación por daños causados por un vecino?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del conflicto y de los derechos
            involucrados, las partes pueden acudir a un centro de conciliación
            para intentar construir una solución relacionada con los daños y
            perjuicios que se discuten.
          </p>

          <p className={styles.paragraph}>
            La conciliación no consiste simplemente en decidir quién tiene la
            razón. El objetivo es abrir un espacio en el que las personas puedan
            exponer su posición, explicar lo ocurrido y, cuando exista
            disposición, buscar alternativas que permitan solucionar el
            conflicto.
          </p>

          <p className={styles.paragraph}>
            Esto puede resultar especialmente útil cuando las personas continúan
            viviendo cerca o deben mantener una relación como vecinos. Un
            conflicto judicial prolongado puede aumentar la tensión, mientras
            que un acuerdo claro puede ayudar a definir responsabilidades y
            compromisos concretos.
          </p>
        </div>

        {/* QUÉ SE PUEDE ACORDAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué se puede acordar en una conciliación por daños entre vecinos?
          </h2>

          <p className={styles.paragraph}>
            El contenido de un posible acuerdo dependerá de las circunstancias
            del caso. No todos los conflictos se resuelven de la misma manera.
            En algunos casos la solución puede consistir en reparar directamente
            el daño y, en otros, las partes pueden acordar una compensación
            económica u otra forma de cumplimiento.
          </p>

          <ul className={styles.list}>
            <li>La reparación total o parcial de los daños.</li>

            <li>
              El pago de una suma de dinero relacionada con la afectación
              discutida.
            </li>

            <li>
              La realización de obras o reparaciones dentro de un plazo
              determinado.
            </li>

            <li>
              Un calendario de pagos cuando las partes acuerdan una obligación
              económica.
            </li>

            <li>
              Compromisos para evitar que una situación similar vuelva a
              ocurrir.
            </li>

            <li>
              Acuerdos relacionados con el acceso necesario para realizar
              reparaciones.
            </li>

            <li>
              Otros compromisos que permitan solucionar el conflicto, siempre
              que el asunto pueda ser objeto de conciliación.
            </li>
          </ul>
        </div>

        {/* CUANDO NO HAY ACUERDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si el vecino no reconoce el daño o no quiere llegar a un
            acuerdo?
          </h2>

          <p className={styles.paragraph}>
            No todos los conflictos terminan con un acuerdo. Puede ocurrir que
            una de las personas considere que no causó el daño, que exista una
            discusión sobre el origen del problema o que simplemente no haya
            disposición para negociar.
          </p>

          <p className={styles.paragraph}>
            Cuando no es posible resolver la situación directamente, es
            importante analizar las características concretas del caso antes de
            decidir qué camino seguir. El tipo de daño, la relación entre las
            partes, las pruebas disponibles y las circunstancias en las que
            ocurrió el hecho pueden cambiar la forma en la que debe abordarse el
            conflicto.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La falta de acuerdo no significa que el problema desaparezca.
              Conservar adecuadamente las pruebas y buscar orientación sobre las
              alternativas disponibles puede ayudarte a tomar una decisión más
              informada sobre los pasos siguientes.
            </p>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que pueden complicar un conflicto por daños entre vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Esperar demasiado</h3>

              <p>
                Dejar pasar el tiempo sin documentar el daño puede hacer más
                difícil demostrar posteriormente cómo ocurrió la afectación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Reparar sin registrar</h3>

              <p>
                En algunos casos, realizar inmediatamente todas las reparaciones
                sin fotografías, documentos o registros puede dificultar la
                reconstrucción posterior de lo sucedido.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Discutir sin buscar soluciones</h3>

              <p>
                Las discusiones constantes pueden empeorar la convivencia y
                alejar a las partes de una solución concreta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Dar por sentado quién es responsable</h3>

              <p>
                En problemas técnicos, como filtraciones o daños estructurales,
                puede ser necesario revisar cuidadosamente el origen antes de
                atribuir una responsabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* CUÁNDO PUEDE SER BUENA IDEA CONCILIAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo puede ser una buena opción intentar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación puede ser una alternativa para considerar cuando
            existe un conflicto concreto entre las partes y todavía hay
            posibilidad de conversar sobre una solución.
          </p>

          <p className={styles.paragraph}>
            Puede resultar particularmente útil cuando las personas quieren
            definir de manera clara cómo se realizará una reparación, quién
            asumirá determinados costos, en qué fechas se cumplirán los
            compromisos o cómo evitar nuevos conflictos.
          </p>

          <ul className={styles.list}>
            <li>Cuando existe una discusión sobre una reparación o un pago.</li>

            <li>
              Cuando ambas partes quieren evitar que el problema continúe
              afectando la convivencia.
            </li>

            <li>
              Cuando es necesario establecer compromisos concretos y plazos de
              cumplimiento.
            </li>

            <li>
              Cuando se busca una solución dialogada antes de considerar otras
              alternativas.
            </li>

            <li>
              Cuando las partes desean explorar la posibilidad de llegar a un
              acuerdo sobre un asunto susceptible de conciliación.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre daños causados por vecinos
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Qué hago si un vecino dañó mi apartamento?</h3>

              <p>
                Documenta los daños, conserva las pruebas disponibles, intenta
                identificar cómo ocurrió el problema y evalúa las alternativas
                para buscar una solución con la otra parte.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Puedo reclamar por una filtración proveniente de otro
                apartamento?
              </h3>

              <p>
                Sí puede generarse un conflicto que requiera una solución, pero
                es importante determinar el origen de la filtración y analizar
                las circunstancias específicas del caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué pasa si el vecino no quiere pagar?</h3>

              <p>
                Si no es posible llegar a una solución directa, puede evaluarse
                la conciliación u otras alternativas según las circunstancias
                concretas del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo llevar fotos y facturas a una conciliación?</h3>

              <p>
                La documentación relacionada con el conflicto puede ayudar a
                explicar la situación y facilitar la conversación entre las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La conciliación sirve para conflictos entre vecinos?</h3>

              <p>
                Dependiendo del tipo de conflicto y de los derechos
                involucrados, puede ser una alternativa para intentar construir
                acuerdos y resolver diferencias sin prolongar innecesariamente
                el problema.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si las partes llegan a un acuerdo?</h3>

              <p>
                El acuerdo puede establecer compromisos claros sobre la solución
                del conflicto, de acuerdo con las condiciones definidas por las
                partes y el marco jurídico aplicable.
              </p>
            </div>
          </div>
        </div>

        {/* CIERRE */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Resolver el problema antes de que se convierta en un conflicto mayor
          </h2>

          <p className={styles.paragraph}>
            Un daño entre vecinos puede parecer inicialmente un problema
            sencillo, pero puede complicarse cuando existen desacuerdos sobre su
            origen, sobre quién debe asumir la reparación o sobre el valor de
            los perjuicios.
          </p>

          <p className={styles.paragraph}>
            Documentar lo ocurrido, mantener una comunicación adecuada y buscar
            una solución antes de que la situación escale puede marcar una gran
            diferencia. Cuando las circunstancias lo permitan, la conciliación
            puede ofrecer un espacio para dialogar y construir acuerdos claros
            sobre la forma de resolver el conflicto.
          </p>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Tienes un conflicto con un vecino por daños a tu propiedad?
          </h3>

          <p className={styles.ctaText}>
            Conoce las alternativas disponibles para buscar una solución
            mediante conciliación. Cuéntanos brevemente tu caso y recibe
            orientación sobre el proceso.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Consultar mi caso
          </a>
        </div>
      </motion.article>
    </section>
  );
}
