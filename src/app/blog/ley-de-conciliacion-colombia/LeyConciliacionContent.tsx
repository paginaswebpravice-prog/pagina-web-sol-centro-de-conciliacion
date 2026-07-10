"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function LeyConciliacionContent() {
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
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Legislación sobre conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            Ley de conciliación en Colombia: normas vigentes, requisitos y cómo
            funciona en 2026
          </h1>

          <p className={styles.heroText}>
            Si te preguntas cuál es la{" "}
            <strong>ley que regula la conciliación en Colombia</strong>, es
            importante saber que este mecanismo se encuentra desarrollado
            principalmente por la <strong>Ley 640 de 2001</strong>, la
            <strong> Ley 2220 de 2022</strong> y otras disposiciones que
            fortalecen los mecanismos alternativos de solución de conflictos
            (MASC). Estas normas permiten resolver numerosas controversias sin
            acudir directamente a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            La conciliación se ha convertido en una de las herramientas más
            utilizadas para solucionar conflictos civiles, comerciales,
            familiares, de arrendamiento, propiedad horizontal y obligaciones
            económicas, ofreciendo una alternativa más rápida, flexible y
            colaborativa frente a un litigio.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué normas regulan la conciliación, cuándo
            puede ser obligatoria, cuáles son sus efectos jurídicos, qué asuntos
            pueden conciliarse y por qué un acta de conciliación tiene plena
            validez legal cuando se celebra conforme a la legislación
            colombiana.
          </p>
        </div>

        {/* DEFINICIÓN */}
        {/* DEFINICIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación según la legislación colombiana?
          </h2>

          <p className={styles.paragraph}>
            La conciliación es un{" "}
            <strong>
              mecanismo alternativo de solución de conflictos (MASC)
            </strong>{" "}
            mediante el cual dos o más personas buscan resolver una controversia
            con la ayuda de un conciliador imparcial, evitando, cuando es
            posible, acudir a un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Más que un simple procedimiento, la conciliación constituye una
            herramienta de acceso a la justicia reconocida por el ordenamiento
            jurídico colombiano. Su finalidad es promover acuerdos construidos
            por las propias partes, privilegiando el diálogo, la buena fe y la
            solución pacífica de los conflictos.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del tipo de controversia, la conciliación puede ser un
            requisito previo antes de presentar una demanda o una alternativa
            voluntaria para alcanzar acuerdos con efectos jurídicos. Cuando las
            partes concilian, el acuerdo queda consignado en un acta que genera
            obligaciones y brinda seguridad jurídica.
          </p>
        </div>

        {/* MARCO NORMATIVO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué leyes regulan la conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La conciliación en Colombia no depende de una única norma. Se trata
            de un mecanismo respaldado por un conjunto de disposiciones legales
            que regulan su funcionamiento, los efectos jurídicos de los
            acuerdos, los centros de conciliación y las actuaciones de los
            conciliadores.
          </p>

          <p className={styles.paragraph}>
            A lo largo de los años, la legislación ha evolucionado para
            facilitar el acceso a la justicia, fortalecer los mecanismos
            alternativos de solución de conflictos (MASC) y permitir que cada
            vez más personas y empresas puedan resolver sus diferencias mediante
            acuerdos voluntarios.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Ley 640 de 2001:</strong> estableció el marco general de
              la conciliación extrajudicial en derecho y definió buena parte de
              su funcionamiento.
            </li>

            <li>
              <strong>Ley 2220 de 2022:</strong> modernizó el Sistema Nacional
              de Conciliación, fortaleció los MASC e incorporó nuevas
              herramientas para facilitar el acceso a la justicia.
            </li>

            <li>
              <strong>Código General del Proceso:</strong> contiene
              disposiciones que regulan distintos aspectos relacionados con la
              conciliación dentro del sistema judicial colombiano.
            </li>

            <li>
              <strong>Normativa del Ministerio de Justicia:</strong> desarrolla
              aspectos relacionados con el funcionamiento de los centros de
              conciliación y la prestación del servicio.
            </li>

            <li>
              <strong>Otras normas especiales:</strong> dependiendo del
              conflicto, pueden existir disposiciones adicionales en materias
              civiles, comerciales, familiares, inmobiliarias o de propiedad
              horizontal.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Actualmente, la <strong>Ley 640 de 2001</strong> y la
              <strong> Ley 2220 de 2022</strong> constituyen los principales
              referentes normativos de la conciliación en Colombia, razón por la
              cual ambas normas suelen estudiarse de manera conjunta cuando se
              analiza el funcionamiento del sistema de conciliación.
            </p>
          </div>
        </div>

        {/* ¿CUÁNDO ES OBLIGATORIA? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo la conciliación es obligatoria en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Una de las preguntas más frecuentes es si la conciliación siempre
            debe realizarse antes de presentar una demanda. La respuesta es que
            <strong> depende del tipo de conflicto</strong>. La legislación
            colombiana establece que, para determinados asuntos, la conciliación
            constituye un requisito previo antes de acudir ante un juez,
            mientras que en otros casos puede realizarse de manera completamente
            voluntaria.
          </p>

          <p className={styles.paragraph}>
            El objetivo de este requisito no es impedir el acceso a la justicia,
            sino brindar a las partes la oportunidad de encontrar una solución
            dialogada que les permita ahorrar tiempo, costos y el desgaste
            propio de un proceso judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cuando la ley la exige</h3>

              <p>
                En determinados conflictos previstos por la legislación, la
                conciliación puede ser un requisito antes de presentar una
                demanda, siempre que el asunto sea conciliable.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cuando es voluntaria</h3>

              <p>
                Muchas personas y empresas deciden acudir a conciliación por
                iniciativa propia para resolver sus diferencias de manera más
                rápida y preservar las relaciones entre las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cada caso debe analizarse</h3>

              <p>
                La necesidad de conciliar previamente depende de la naturaleza
                del conflicto, de la normativa aplicable y de las circunstancias
                particulares del caso.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Antes de iniciar un proceso judicial, resulta recomendable
              verificar si el asunto admite conciliación y si la legislación
              exige cumplir este paso previo. Un análisis oportuno puede evitar
              retrasos procesales y facilitar una solución más rápida del
              conflicto.
            </p>
          </div>
        </div>

        {/* BENEFICIOS LEGALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Importancia jurídica de la conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>El acta de conciliación tiene fuerza de cosa juzgada.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Evita procesos judiciales</h3>
              <p>Permite resolver conflictos sin acudir a jueces.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acceso a justicia</h3>
              <p>Facilita soluciones rápidas y efectivas.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cómo funciona legalmente?</h2>

          <p className={styles.paragraph}>
            Las partes acuden a un centro de conciliación autorizado en Colombia
            donde un conciliador facilita el diálogo.
          </p>

          <p className={styles.paragraph}>
            Si se llega a un acuerdo, este se formaliza en un acta con efectos
            jurídicos obligatorios.
          </p>
        </div>

        {/* CUANDO ES OBLIGATORIA LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo es obligatoria la conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Una de las dudas más frecuentes es si la conciliación siempre debe
            realizarse antes de presentar una demanda. La respuesta es que
            <strong>
              {" "}
              depende del tipo de conflicto y de lo establecido por la ley.
            </strong>
          </p>

          <p className={styles.paragraph}>
            En determinados asuntos civiles, comerciales y de familia, la
            conciliación extrajudicial puede constituir un requisito de
            procedibilidad, es decir, un paso previo antes de acudir ante un
            juez. En otros casos, las partes pueden acudir directamente a la
            jurisdicción competente sin necesidad de intentar una conciliación.
          </p>

          <p className={styles.paragraph}>
            Por esta razón resulta importante analizar cada caso concreto. Un
            centro de conciliación puede orientar a las partes sobre si el
            asunto admite conciliación y si este mecanismo puede ayudar a
            resolver el conflicto de forma más rápida, económica y colaborativa.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Aunque la conciliación no es obligatoria para todos los
              conflictos, intentar un acuerdo suele representar una oportunidad
              para ahorrar tiempo, reducir costos y conservar las relaciones
              entre las partes antes de iniciar un proceso judicial.
            </p>
          </div>
        </div>

        {/* TIPOS DE CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Conflictos que pueden conciliarse</h2>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Arrendamientos.</li>
            <li>Propiedad horizontal.</li>
            <li>Conflictos inmobiliarios.</li>
            <li>Obligaciones económicas.</li>
          </ul>
        </div>

        {/* EFECTOS JURIDICOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué efectos jurídicos tiene un acta de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Cuando las partes alcanzan un acuerdo dentro de un procedimiento de
            conciliación y este queda consignado en un acta conforme a la
            legislación colombiana, dicho documento produce importantes efectos
            jurídicos. Por esta razón, la conciliación no consiste únicamente en
            una conversación entre las partes, sino en un mecanismo reconocido
            por el ordenamiento jurídico para resolver conflictos de manera
            válida y segura.
          </p>

          <p className={styles.paragraph}>
            El acta de conciliación deja constancia de los compromisos asumidos
            por los participantes, establece con claridad las obligaciones
            pactadas y brinda seguridad jurídica respecto de lo acordado.
            Además, permite prevenir nuevos conflictos derivados de
            interpretaciones diferentes sobre el mismo asunto.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Obligaciones claras</h3>

              <p>
                El acuerdo define los compromisos asumidos por cada una de las
                partes, incluyendo plazos, condiciones y formas de cumplimiento
                cuando corresponda.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                El documento brinda certeza sobre lo acordado y disminuye la
                posibilidad de que el conflicto vuelva a presentarse por la
                misma causa.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Respaldo legal</h3>

              <p>
                Los acuerdos celebrados mediante conciliación producen los
                efectos previstos por la legislación colombiana y pueden generar
                consecuencias jurídicas para quienes los suscriben.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Antes de firmar un acta de conciliación es recomendable que las
              partes comprendan plenamente el alcance de cada compromiso
              asumido, ya que el acuerdo tiene efectos jurídicos y busca poner
              fin al conflicto de manera definitiva.
            </p>
          </div>
        </div>

        {/* VENTAJAS DE LA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de la conciliación frente a un proceso judicial
          </h2>

          <p className={styles.paragraph}>
            Aunque acudir a un juez es una alternativa prevista por la
            legislación colombiana, en muchos conflictos la conciliación ofrece
            una oportunidad para encontrar soluciones de manera más rápida y
            colaborativa. Esto no significa que sea la mejor opción para todos
            los casos, pero sí representa una alternativa que vale la pena
            analizar antes de iniciar un litigio.
          </p>

          <p className={styles.paragraph}>
            Al participar en una audiencia de conciliación, las partes conservan
            un mayor control sobre el resultado del conflicto, ya que son ellas
            quienes construyen el acuerdo con el acompañamiento de un
            conciliador imparcial, en lugar de esperar la decisión que
            posteriormente pueda adoptar un juez.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>

              <p>
                Dependiendo de cada caso, una conciliación puede resolverse en
                un tiempo considerablemente menor que un proceso judicial
                tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>

              <p>
                La búsqueda de acuerdos puede reducir gastos asociados a
                litigios prolongados, desplazamientos, actuaciones judiciales y
                otros costos derivados del proceso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Soluciones construidas por las partes</h3>

              <p>
                Los participantes tienen la posibilidad de negociar condiciones
                que se ajusten mejor a sus necesidades, siempre dentro del marco
                legal correspondiente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conservación de relaciones</h3>

              <p>
                En asuntos comerciales, familiares, civiles o de arrendamiento,
                la conciliación puede contribuir a mantener una relación
                respetuosa entre las partes después de resolver el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor confidencialidad</h3>

              <p>
                Muchas controversias pueden abordarse en un escenario más
                reservado, favoreciendo el diálogo y evitando una mayor
                exposición del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad jurídica</h3>

              <p>
                Cuando se alcanza un acuerdo conforme a la ley, este queda
                consignado en un acta con los efectos jurídicos previstos por la
                legislación colombiana.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no pretende reemplazar la función de los jueces.
              Su finalidad es ofrecer un camino adicional para que las personas
              puedan resolver determinados conflictos mediante el diálogo,
              evitando que una controversia escale innecesariamente hasta un
              proceso judicial.
            </p>
          </div>
        </div>

        {/* QUE CONFLICTOS PUEDEN RESOLVERSE MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            La legislación colombiana permite que una gran cantidad de
            controversias puedan resolverse mediante conciliación, siempre que
            el asunto sea susceptible de acuerdo entre las partes. Este
            mecanismo busca promover el diálogo y encontrar soluciones que
            beneficien a todos los involucrados sin necesidad de iniciar un
            proceso judicial.
          </p>

          <p className={styles.paragraph}>
            No todos los conflictos son iguales. Algunos involucran obligaciones
            económicas, otros relaciones familiares, contratos, arrendamientos o
            diferencias entre empresas. Precisamente por esa razón la
            conciliación se ha convertido en una herramienta ampliamente
            utilizada para solucionar controversias de diferentes naturalezas.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos civiles</h3>

              <p>
                Cobro de obligaciones, incumplimiento de contratos,
                indemnizaciones, préstamos entre particulares y otros asuntos
                patrimoniales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos comerciales</h3>

              <p>
                Diferencias entre empresas, proveedores, clientes, socios
                comerciales, distribución de productos y ejecución de contratos
                mercantiles.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arrendamientos</h3>

              <p>
                Pago de cánones, entrega del inmueble, terminación del contrato,
                reparaciones, servicios públicos y demás obligaciones derivadas
                del arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Asuntos de familia</h3>

              <p>
                Cuota alimentaria, custodia, visitas, regulación de acuerdos
                familiares y otros asuntos permitidos por la legislación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Propiedad horizontal</h3>

              <p>
                Conflictos entre copropietarios, administración, cuotas de
                administración, uso de zonas comunes y convivencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Obligaciones económicas</h3>

              <p>
                Acuerdos de pago, refinanciaciones, reconocimiento de deudas y
                otras obligaciones patrimoniales.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              La posibilidad de conciliar depende del tipo de conflicto y de lo
              previsto por la legislación colombiana. Cada caso debe analizarse
              de manera individual para determinar si puede resolverse mediante
              este mecanismo.
            </p>
          </div>
        </div>

        {/* QUE ASUNTOS NO PUEDEN RESOLVERSE MEDIANTE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué asuntos no pueden resolverse mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque la conciliación tiene un amplio campo de aplicación, existen
            materias que, por su naturaleza, no pueden resolverse mediante
            acuerdos entre las partes. En estos casos corresponde a las
            autoridades competentes adoptar las decisiones previstas por la ley.
          </p>

          <p className={styles.paragraph}>
            Esto ocurre porque determinados derechos son irrenunciables o
            involucran intereses públicos que no pueden quedar sujetos
            únicamente a la voluntad de quienes participan en el conflicto.
          </p>

          <ul className={styles.list}>
            <li>Asuntos que la ley considere no conciliables.</li>

            <li>Derechos que no pueden ser objeto de negociación.</li>

            <li>Conflictos que requieren una decisión exclusiva de un juez.</li>

            <li>
              Materias relacionadas con el orden público cuando la legislación
              así lo establece.
            </li>

            <li>
              Otros asuntos expresamente excluidos por la normatividad
              colombiana.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Antes de iniciar un trámite de conciliación es recomendable
              verificar si el conflicto puede resolverse mediante este mecanismo
              o si corresponde acudir directamente ante la autoridad judicial
              competente.
            </p>
          </div>
        </div>

        {/* PROCESO DE CONCILIACION PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso de conciliación paso a paso?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso tiene particularidades, el procedimiento de
            conciliación suele desarrollarse siguiendo varias etapas que buscan
            garantizar la participación de las partes y facilitar la
            construcción de un acuerdo.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                Una de las partes presenta la solicitud de conciliación
                indicando el conflicto y la información básica necesaria para
                iniciar el trámite.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>
                El centro de conciliación realiza la convocatoria de las partes
                para asistir a la audiencia en la fecha programada.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                El conciliador escucha a las partes, promueve el diálogo y
                facilita la construcción de posibles soluciones al conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Negociación</h3>

              <p>
                Las partes presentan propuestas, analizan alternativas y buscan
                puntos de encuentro que permitan resolver la controversia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Acuerdo</h3>

              <p>
                Si existe consenso, el conciliador deja constancia del acuerdo
                mediante un acta con los efectos jurídicos previstos por la
                legislación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Cierre del trámite</h3>

              <p>
                Cuando no es posible llegar a un acuerdo, el procedimiento
                concluye y las partes conservan las acciones que la ley les
                permita ejercer.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            En la práctica, muchas controversias logran resolverse durante la
            audiencia gracias al diálogo y a la intervención imparcial del
            conciliador, evitando procesos judiciales más largos y complejos.
          </p>
        </div>

        {/* ERRORES MAS COMUNES ANTES DE SOLICITAR UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores más comunes antes de solicitar una conciliación
          </h2>

          <p className={styles.paragraph}>
            Muchas personas creen que la conciliación consiste únicamente en
            asistir a una reunión para conversar. Sin embargo, una buena
            preparación puede marcar la diferencia entre alcanzar un acuerdo
            satisfactorio o terminar el trámite sin resultados. Conocer los
            errores más frecuentes ayuda a aprovechar mejor este mecanismo de
            solución de conflictos.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No llevar soportes</h3>

              <p>
                Contratos, facturas, comprobantes de pago, conversaciones,
                correos electrónicos y demás documentos pueden ser fundamentales
                para explicar el origen del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No tener claros los objetivos</h3>

              <p>
                Antes de asistir a la audiencia es recomendable definir qué
                solución se espera obtener y cuáles aspectos podrían negociarse.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negarse completamente al diálogo</h3>

              <p>
                La conciliación parte de la voluntad de buscar alternativas.
                Llegar con una posición totalmente inflexible puede dificultar
                cualquier acuerdo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No conocer los derechos y obligaciones</h3>

              <p>
                Comprender el alcance del conflicto permite participar de manera
                más informada durante la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                En algunos conflictos es conveniente actuar oportunamente para
                evitar que la controversia aumente o que las relaciones entre
                las partes se deterioren aún más.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Asistir sin disposición para escuchar</h3>

              <p>
                Escuchar la posición de la otra parte suele facilitar la
                construcción de acuerdos equilibrados y duraderos.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Prepararse adecuadamente para una audiencia de conciliación no
              significa renunciar a los propios derechos. Significa llegar con
              información clara, expectativas realistas y disposición para
              analizar posibles soluciones.
            </p>
          </div>
        </div>

        {/* COMO ELEGIR UN CENTRO DE CONCILIACION AUTORIZADO EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo elegir un centro de conciliación autorizado en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Elegir un centro de conciliación es una decisión importante. Además
            de verificar que se encuentre autorizado para prestar este servicio,
            también conviene analizar aspectos relacionados con la experiencia,
            la atención al usuario y la facilidad para desarrollar el
            procedimiento.
          </p>

          <p className={styles.paragraph}>
            No todos los conflictos son iguales. Algunos requieren mayor
            conocimiento en asuntos civiles, comerciales, familiares o de
            arrendamiento, por lo que resulta útil acudir a un centro que tenga
            experiencia en el tipo de controversia que se desea resolver.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Autorización</h3>

              <p>
                Verifique que el centro esté debidamente autorizado para prestar
                servicios de conciliación conforme a la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Experiencia</h3>

              <p>
                Un equipo con experiencia en distintos tipos de conflictos puede
                facilitar el desarrollo adecuado del procedimiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Claridad en la información</h3>

              <p>
                Es importante que el centro explique el procedimiento, los
                documentos necesarios y el alcance jurídico de la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Atención al usuario</h3>

              <p>
                Una orientación oportuna permite resolver dudas antes de iniciar
                el trámite y facilita la preparación de la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ubicación o modalidad virtual</h3>

              <p>
                Dependiendo del caso, puede resultar conveniente elegir un
                centro que ofrezca atención presencial o alternativas mediante
                medios tecnológicos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Especialización</h3>

              <p>
                Algunos centros atienden con mayor frecuencia asuntos
                relacionados con conflictos empresariales, civiles, comerciales
                o familiares.
              </p>
            </div>
          </div>
        </div>

        {/* MITOS Y REALIDADES SOBRE LA CONCILIACION EN COLOMBIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Mitos y realidades sobre la conciliación en Colombia
          </h2>

          <p className={styles.paragraph}>
            Alrededor de la conciliación existen diversas ideas equivocadas que
            pueden hacer que algunas personas descarten este mecanismo sin
            conocer realmente cómo funciona. A continuación se presentan algunos
            de los mitos más frecuentes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mito: Conciliar significa perder.</h3>

              <p>
                <strong>Realidad:</strong> La conciliación busca construir
                soluciones que resulten aceptables para ambas partes dentro del
                marco legal.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mito: El conciliador decide quién tiene la razón.</h3>

              <p>
                <strong>Realidad:</strong> El conciliador facilita el diálogo,
                pero las decisiones corresponden exclusivamente a las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mito: Solo sirve para conflictos pequeños.</h3>

              <p>
                <strong>Realidad:</strong> Dependiendo de la legislación
                aplicable, numerosos conflictos civiles, comerciales y
                familiares pueden resolverse mediante conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mito: El acuerdo no tiene valor.</h3>

              <p>
                <strong>Realidad:</strong> El acta de conciliación produce los
                efectos jurídicos establecidos por la ley cuando se cumplen los
                requisitos correspondientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mito: Siempre es obligatorio llegar a un acuerdo.</h3>

              <p>
                <strong>Realidad:</strong> Nadie está obligado a aceptar
                propuestas con las que no esté de acuerdo. La conciliación es un
                mecanismo basado en la voluntad de las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mito: Si no hay acuerdo, se pierde el tiempo.</h3>

              <p>
                <strong>Realidad:</strong> Incluso cuando no se logra un
                acuerdo, la audiencia permite aclarar posiciones y puede
                facilitar las actuaciones posteriores que autorice la ley.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Comprender cómo funciona realmente la conciliación permite tomar
              decisiones más informadas y aprovechar este mecanismo cuando el
              conflicto puede resolverse mediante el diálogo y la construcción
              de acuerdos.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre la ley de conciliación en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Cuál es la principal ley que regula la conciliación en
                Colombia?
              </h3>

              <p>
                La conciliación está regulada principalmente por la Ley 640 de
                2001 y actualmente se complementa con la Ley 2220 de 2022, que
                fortaleció el Sistema Nacional de Conciliación y modernizó
                varios aspectos de los mecanismos alternativos de solución de
                conflictos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación siempre es obligatoria antes de presentar una
                demanda?
              </h3>

              <p>
                No. La obligatoriedad depende del tipo de conflicto y de lo que
                establezca la legislación aplicable. Existen asuntos donde la
                conciliación constituye un requisito de procedibilidad y otros
                en los que es completamente voluntaria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué valor jurídico tiene un acta de conciliación?</h3>

              <p>
                Cuando el acuerdo cumple los requisitos legales, el acta de
                conciliación produce efectos jurídicos y obliga a las partes a
                cumplir lo pactado, brindando seguridad jurídica al acuerdo
                alcanzado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué conflictos pueden resolverse mediante conciliación?</h3>

              <p>
                Dependiendo de la legislación vigente, pueden conciliarse
                numerosos conflictos civiles, comerciales, de arrendamiento,
                propiedad horizontal, obligaciones económicas y diversos asuntos
                de familia que permitan este mecanismo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Es posible realizar una conciliación utilizando medios
                virtuales?
              </h3>

              <p>
                Sí. La normativa colombiana ha incorporado herramientas
                tecnológicas que permiten desarrollar procedimientos de
                conciliación mediante medios digitales cuando las condiciones
                del caso lo permiten.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Qué sucede si durante la audiencia no se logra un acuerdo?
              </h3>

              <p>
                Si las partes no alcanzan una solución, el trámite concluye y,
                según el caso, podrán acudir a los mecanismos judiciales u otras
                alternativas previstas por la ley para resolver el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Quién puede solicitar una conciliación?</h3>

              <p>
                Cualquier persona natural o jurídica que tenga un conflicto
                susceptible de conciliación puede presentar la solicitud ante un
                centro de conciliación autorizado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿La conciliación ayuda a evitar procesos judiciales largos?
              </h3>

              <p>
                En muchos casos sí. Cuando las partes alcanzan un acuerdo
                satisfactorio, pueden evitar litigios que normalmente implican
                mayores costos, incertidumbre y tiempos de resolución más
                extensos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas orientación sobre la ley de conciliación o deseas iniciar
            un proceso de conciliación?
          </h3>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación orientamos a personas, familias y
            empresas que desean resolver conflictos mediante conciliación. Si
            tienes dudas sobre la Ley 640 de 2001, la Ley 2220 de 2022, el
            procedimiento aplicable a tu caso o quieres conocer si tu conflicto
            puede solucionarse mediante un acuerdo conciliatorio, nuestro equipo
            puede brindarte información y acompañamiento durante el proceso.
          </p>

          <p className={styles.ctaText}>
            Resolver un conflicto de forma oportuna puede ahorrar tiempo, costos
            y evitar procesos judiciales innecesarios. Agenda tu consulta y
            conoce las alternativas que ofrece la conciliación en Colombia para
            proteger tus derechos y buscar una solución legal, rápida y
            efectiva.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un conciliador ahora
          </a>
        </div>
      </motion.article>
    </section>
  );
}
