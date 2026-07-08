"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function DanosYPerjuiciosContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Conciliación Civil e Indemnizaciones
          </span>

          <h1 className={styles.title}>
            Daños y perjuicios en Colombia: cómo reclamar una indemnización
            mediante conciliación sin acudir a un juicio
          </h1>

          <p className={styles.heroText}>
            Cuando una persona causa un perjuicio económico a otra, pueden
            surgir reclamaciones relacionadas con indemnizaciones,
            compensaciones o reparación de daños. Antes de acudir a un proceso
            judicial, la conciliación ofrece una alternativa eficaz para buscar
            soluciones rápidas y mutuamente beneficiosas.
          </p>

          <p className={styles.heroText}>
            La conciliación permite que las partes dialoguen con la ayuda de un
            conciliador imparcial y lleguen a acuerdos sobre la reparación de
            los daños ocasionados, evitando litigios largos y costosos.
          </p>

          <div className={styles.highlightBox}>
            <p>
              No todos los conflictos relacionados con daños y perjuicios
              terminan en un juzgado. Cuando ambas partes tienen disposición
              para negociar, la conciliación permite alcanzar acuerdos rápidos,
              reducir costos y obtener una solución con efectos legales.
            </p>
          </div>
        </div>

        {/* QUE SON LOS DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué son los daños y perjuicios y cuándo pueden reclamarse en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Los daños y perjuicios corresponden a las afectaciones económicas,
            patrimoniales o materiales que una persona o empresa puede sufrir
            como consecuencia de la acción, omisión o incumplimiento de otra.
            Estas situaciones son frecuentes en relaciones comerciales,
            contratos de arrendamiento, prestación de servicios, compraventas,
            obras civiles y diferentes negocios jurídicos donde una de las
            partes incumple las obligaciones asumidas.
          </p>

          <p className={styles.paragraph}>
            Cuando una actuación ocasiona pérdidas económicas, deterioro de
            bienes, gastos adicionales o afecta el patrimonio de otra persona,
            es posible buscar mecanismos que permitan obtener una reparación. En
            muchos casos, la conciliación constituye una alternativa efectiva
            para negociar una indemnización sin necesidad de iniciar
            inmediatamente un proceso judicial, permitiendo que las partes
            construyan una solución de común acuerdo.
          </p>

          <p className={styles.paragraph}>
            Es importante tener presente que no todos los daños tienen el mismo
            origen ni generan las mismas consecuencias. Por ello, durante una
            conciliación es recomendable explicar con claridad qué ocurrió,
            cuáles fueron las afectaciones ocasionadas, qué pruebas existen y
            cuál sería la solución que permita reparar el perjuicio sufrido.
            Entre mayor sea la información disponible, mayores serán las
            posibilidades de alcanzar un acuerdo satisfactorio.
          </p>

          <p className={styles.paragraph}>
            Tanto personas naturales como empresas pueden acudir a la
            conciliación para resolver este tipo de conflictos. En lugar de
            esperar varios meses o incluso años a que un juez tome una decisión,
            las partes tienen la oportunidad de negociar directamente aspectos
            como el valor de la indemnización, la forma de pago, los plazos de
            cumplimiento o incluso la reparación del daño ocasionado.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La conciliación no busca determinar un ganador o un perdedor. Su
              objetivo principal es facilitar el diálogo para que las partes
              encuentren una solución que permita reparar los daños ocasionados,
              reducir el desgaste económico y evitar, cuando sea posible, un
              proceso judicial prolongado.
            </p>
          </div>
        </div>

        {/* QUE DEBE DEMOSTRAR UNA PERSONA PARA RECLAMAR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué debe demostrar una persona para reclamar daños y perjuicios?
          </h2>

          <p className={styles.paragraph}>
            Para que una reclamación por daños y perjuicios tenga posibilidades
            de llegar a un acuerdo durante una conciliación, es importante
            contar con elementos que permitan explicar qué ocurrió, cuál fue la
            afectación sufrida y por qué la otra parte tendría responsabilidad
            sobre los hechos.
          </p>

          <p className={styles.paragraph}>
            No siempre es necesario presentar una gran cantidad de documentos,
            pero sí resulta recomendable llevar pruebas que faciliten el diálogo
            y permitan que ambas partes comprendan el alcance del perjuicio
            ocasionado.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Existencia del daño</h3>

              <p>
                Debe evidenciarse que realmente ocurrió una afectación
                económica, material o patrimonial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Relación con los hechos</h3>

              <p>
                Es importante explicar cómo la conducta de la otra parte
                ocasionó el perjuicio reclamado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Valor aproximado</h3>

              <p>
                Siempre que sea posible conviene estimar el costo del daño
                mediante facturas, cotizaciones o soportes similares.
              </p>
            </div>
          </div>
        </div>

        {/* CASOS QUE PUEDEN RESOLVERSE MEDIANTE CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué casos pueden conciliarse los daños y perjuicios?
          </h2>

          <p className={styles.paragraph}>
            Aunque muchas personas relacionan la conciliación únicamente con
            conflictos familiares o de arrendamiento, en realidad también
            constituye una excelente alternativa para resolver reclamaciones por
            daños y perjuicios de naturaleza civil y comercial. Siempre que el
            asunto sea conciliable y exista voluntad de diálogo, las partes
            pueden negociar diferentes formas de reparación sin necesidad de
            acudir inmediatamente a un juez.
          </p>

          <p className={styles.paragraph}>
            Cada conflicto presenta particularidades distintas, por lo que las
            soluciones pueden adaptarse a las necesidades de las partes
            involucradas. Estas son algunas de las situaciones más frecuentes en
            las que la conciliación suele ser utilizada:
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>
              <p>
                Cuando una persona o empresa incumple las obligaciones pactadas
                y genera pérdidas económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños en inmuebles</h3>
              <p>
                Conflictos relacionados con viviendas, oficinas, locales
                comerciales o inmuebles entregados en arrendamiento.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños materiales</h3>
              <p>
                Deterioro o destrucción de bienes muebles, maquinaria, equipos,
                mercancías o vehículos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestación de servicios</h3>
              <p>
                Servicios ejecutados de forma deficiente que ocasionan pérdidas
                al cliente o contratante.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos entre empresas</h3>
              <p>
                Diferencias comerciales entre proveedores, contratistas,
                distribuidores o clientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Perjuicios económicos</h3>
              <p>
                Pérdidas financieras ocasionadas por actuaciones negligentes o
                incumplimientos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Responsabilidad civil</h3>
              <p>
                Casos donde una persona debe reparar los daños ocasionados a
                otra.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños durante remodelaciones</h3>
              <p>
                Afectaciones ocasionadas durante obras civiles o adecuaciones de
                inmuebles.
              </p>
            </div>
          </div>

          <div className={styles.highlightBox}>
            <p>
              Cada caso debe analizarse de manera individual. Una adecuada
              valoración jurídica permite determinar si el conflicto puede
              resolverse mediante conciliación y cuál es la mejor estrategia
              para buscar una reparación integral.
            </p>
          </div>
        </div>

        {/* SITUACIONES FRECUENTES DONDE SE RECLAMAN DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Situaciones frecuentes donde se reclaman daños y perjuicios
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Incumplimiento de contratos</h3>

              <p>
                Cuando una persona o empresa incumple obligaciones y genera
                pérdidas económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños en inmuebles</h3>

              <p>
                Conflictos relacionados con reparaciones, deterioros o daños
                causados a viviendas o locales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Prestación de servicios</h3>

              <p>
                Servicios ejecutados de forma deficiente que ocasionan
                perjuicios al cliente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conflictos comerciales</h3>

              <p>
                Diferencias entre empresas, proveedores o clientes por pérdidas
                económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Daños ocasionados por terceros</h3>

              <p>
                Situaciones donde una actuación genera afectaciones
                patrimoniales a otra persona.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Incumplimientos civiles</h3>

              <p>
                Casos donde una obligación no se cumple y produce perjuicios
                indemnizables.
              </p>
            </div>
          </div>
        </div>

        {/* VENTAJAS DE CONCILIACIÓN */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué conviene intentar una conciliación antes de iniciar un
            proceso judicial?
          </h2>

          <p className={styles.paragraph}>
            En numerosos conflictos relacionados con daños y perjuicios, la
            conciliación representa una alternativa más rápida, económica y
            flexible que un proceso judicial. Además de permitir que las partes
            participen directamente en la construcción del acuerdo, reduce el
            desgaste emocional y facilita soluciones adaptadas a las
            circunstancias particulares del caso.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor rapidez</h3>
              <p>
                Muchos conflictos pueden solucionarse en semanas, evitando
                procesos que podrían prolongarse durante meses o incluso años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>
              <p>
                Disminuye gastos relacionados con procesos judiciales,
                honorarios y actuaciones prolongadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos flexibles</h3>
              <p>
                Permite negociar pagos, plazos, reparaciones, reposiciones u
                otras alternativas que difícilmente serían ordenadas por un
                juez.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor control</h3>
              <p>
                Son las propias partes quienes construyen el acuerdo según sus
                intereses y necesidades.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Confidencialidad</h3>
              <p>
                La información discutida durante la conciliación se desarrolla
                dentro de un ambiente reservado.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Validez jurídica</h3>
              <p>
                El acuerdo queda consignado en un acta con efectos legales y
                fuerza obligatoria para quienes la suscriben.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Incluso cuando no se logra un acuerdo total, la conciliación permite
            identificar los verdaderos puntos de discusión y, en algunos casos,
            alcanzar acuerdos parciales que reducen considerablemente la
            complejidad de un eventual proceso judicial.
          </p>
        </div>

        {/* COMO FUNCIONA UNA CONCILIACIÓN POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona una conciliación por daños y perjuicios?
          </h2>

          <p className={styles.paragraph}>
            Aunque cada caso presenta características diferentes, la mayoría de
            conciliaciones siguen un procedimiento sencillo cuyo objetivo es
            facilitar un acuerdo entre las partes sin acudir inmediatamente a un
            proceso judicial.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>1. Solicitud</h3>

              <p>
                Una de las partes presenta la solicitud explicando el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>2. Citación</h3>

              <p>Se convoca a la otra parte para participar en la audiencia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>3. Audiencia</h3>

              <p>
                Ambas partes exponen sus posiciones con la orientación del
                conciliador.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>4. Negociación</h3>

              <p>Se analizan alternativas para lograr una reparación justa.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>5. Acuerdo</h3>

              <p>Si existe consenso, se firma un acta con efectos jurídicos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>6. Cumplimiento</h3>

              <p>
                Cada parte ejecuta los compromisos asumidos en la conciliación.
              </p>
            </div>
          </div>
        </div>

        {/* ACUERDOS POSIBLES EN UNA CONCILIACIÓN POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipo de acuerdos pueden alcanzarse durante una conciliación?
          </h2>

          <p className={styles.paragraph}>
            Uno de los principales beneficios de la conciliación consiste en que
            las partes tienen libertad para construir soluciones ajustadas a la
            realidad del conflicto. Esto permite que la reparación de los daños
            y perjuicios no se limite únicamente al pago de dinero, sino que
            puedan acordarse diferentes alternativas que satisfagan los
            intereses de ambas partes.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Pago total de la indemnización.</strong> Cuando existe
              acuerdo sobre el valor de los perjuicios ocasionados.
            </li>

            <li>
              <strong>Pago mediante cuotas.</strong> Las partes pueden
              establecer un cronograma de pagos acorde con la capacidad
              económica del responsable.
            </li>

            <li>
              <strong>Reposición o reparación de bienes.</strong> En algunos
              casos la mejor solución consiste en reparar el daño o entregar un
              bien equivalente.
            </li>

            <li>
              <strong>Compensaciones parciales.</strong> Puede negociarse una
              reparación proporcional cuando existen diferencias sobre la
              cuantía del perjuicio.
            </li>

            <li>
              <strong>Reconocimiento de responsabilidades.</strong> La
              conciliación permite dejar por escrito los compromisos asumidos
              por cada parte.
            </li>

            <li>
              <strong>Plazos específicos de cumplimiento.</strong> Se pueden
              fijar fechas concretas para realizar pagos, reparaciones o
              cualquier otra obligación acordada.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La flexibilidad de la conciliación permite encontrar soluciones
              prácticas que beneficien a ambas partes y reduzcan el riesgo de
              futuros conflictos o incumplimientos.
            </p>
          </div>
        </div>

        {/* PRUEBAS QUE PUEDEN FORTALECER UNA RECLAMACIÓN POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Pruebas que pueden fortalecer una reclamación por daños y perjuicios
          </h2>

          <p className={styles.paragraph}>
            Contar con documentación organizada facilita las negociaciones y
            ayuda a demostrar el origen del daño y el valor aproximado de los
            perjuicios reclamados.
          </p>

          <ul className={styles.list}>
            <li>Contratos o acuerdos firmados.</li>
            <li>Facturas, recibos o comprobantes de pago.</li>
            <li>Cotizaciones de reparación.</li>
            <li>Fotografías y videos.</li>
            <li>Correos electrónicos o conversaciones.</li>
            <li>Informes técnicos cuando existan.</li>
            <li>Peritajes o conceptos especializados.</li>
            <li>Cualquier documento relacionado con el conflicto.</li>
          </ul>
        </div>

        {/* VALIDEZ LEGAL DEL ACUERDO CONCILIATORIO POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué validez legal tiene un acuerdo de conciliación por daños y
            perjuicios?
          </h2>

          <p className={styles.paragraph}>
            Uno de los aspectos que genera mayor tranquilidad para quienes
            deciden conciliar es que los acuerdos alcanzados no quedan
            simplemente en un compromiso verbal. Cuando las partes llegan a un
            entendimiento durante la audiencia, este se plasma en un acta de
            conciliación que produce efectos jurídicos y obliga a cumplir lo
            pactado conforme a la legislación colombiana.
          </p>

          <p className={styles.paragraph}>
            El acta puede contener compromisos relacionados con el pago de una
            indemnización, la reparación de bienes, la entrega de dinero, el
            cumplimiento de obligaciones pendientes o cualquier otra solución
            que sea legalmente conciliable. Al quedar firmada por las partes y
            el conciliador, constituye un documento que brinda seguridad
            jurídica y evita futuras discusiones sobre el contenido del acuerdo.
          </p>

          <p className={styles.paragraph}>
            En caso de incumplimiento, la parte afectada puede acudir a los
            mecanismos legales correspondientes para exigir el cumplimiento de
            las obligaciones pactadas, sin necesidad de volver a discutir el
            conflicto desde el inicio. Por esta razón, la conciliación es
            considerada una herramienta eficiente para solucionar controversias
            relacionadas con daños y perjuicios de forma rápida, segura y con
            respaldo jurídico.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Un acuerdo bien construido durante la conciliación ofrece
              seguridad para ambas partes, reduce la incertidumbre y facilita el
              cumplimiento de las obligaciones asumidas sin prolongar el
              conflicto.
            </p>
          </div>
        </div>

        {/* ERRORES FRECUENTES AL RECLAMAR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al reclamar daños y perjuicios
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No conservar pruebas</h3>

              <p>
                La falta de soportes dificulta demostrar la existencia del
                perjuicio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No cuantificar el daño</h3>

              <p>
                Es recomendable estimar el valor aproximado de la afectación
                antes de negociar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Esperar demasiado tiempo</h3>

              <p>
                Actuar oportunamente facilita reunir pruebas y alcanzar
                acuerdos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No intentar dialogar</h3>

              <p>
                En muchos casos una conciliación puede resolver el conflicto sin
                llegar a un juicio.
              </p>
            </div>
          </div>
        </div>

        {/* PREGUNTAS FRECUENTES EN UNA CONCILIACIÓN POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conciliación por daños y perjuicios
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Siempre debo presentar una demanda?</h3>

              <p>
                No. En muchos casos es posible intentar una conciliación antes
                de acudir a un proceso judicial, lo que puede ahorrar tiempo y
                costos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puedo reclamar una indemnización mediante conciliación?</h3>

              <p>
                Sí. Las partes pueden negociar el monto, la forma de pago y
                demás condiciones relacionadas con la reparación del perjuicio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Necesito presentar pruebas?</h3>

              <p>
                Es recomendable llevar contratos, facturas, fotografías,
                correos, mensajes, cotizaciones y cualquier documento que ayude
                a demostrar los daños ocasionados.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si la otra persona no acepta conciliar?</h3>

              <p>
                Si no existe acuerdo o alguna de las partes no comparece, podrán
                evaluarse las demás alternativas legales previstas por la
                legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Puede pactarse un pago por cuotas?</h3>

              <p>
                Sí. Es uno de los acuerdos más comunes cuando se busca facilitar
                el cumplimiento de la indemnización.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿La audiencia puede realizarse virtualmente?</h3>

              <p>
                Dependiendo del centro de conciliación, existen casos en los que
                la audiencia puede desarrollarse mediante herramientas
                virtuales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuánto tiempo puede durar una conciliación?</h3>

              <p>
                Depende de la complejidad del conflicto y de la disposición de
                las partes para negociar, aunque normalmente resulta mucho más
                rápida que un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo tiene fuerza legal?</h3>

              <p>
                Sí. El acta de conciliación produce efectos jurídicos y obliga a
                cumplir los compromisos adquiridos.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMENDACIONES ANTES DE INICIAR UNA CONCILIACIÓN POR DAÑOS Y PERJUICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de iniciar una conciliación por daños y
            perjuicios
          </h2>

          <p className={styles.paragraph}>
            Una adecuada preparación incrementa las posibilidades de alcanzar un
            acuerdo satisfactorio durante la audiencia de conciliación.
          </p>

          <ul className={styles.list}>
            <li>Reúne toda la documentación relacionada con el caso.</li>
            <li>Organiza las pruebas en orden cronológico.</li>
            <li>Calcula el valor aproximado de los perjuicios.</li>
            <li>Define cuál sería una propuesta de acuerdo razonable.</li>
            <li>Mantén disposición para negociar alternativas.</li>
            <li>
              Solicita orientación jurídica cuando el conflicto sea complejo o
              de alta cuantía.
            </li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              La conciliación busca construir soluciones beneficiosas para ambas
              partes. Llegar preparado, con información clara y expectativas
              realistas, suele facilitar acuerdos más rápidos y estables.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas reclamar una indemnización por daños y perjuicios?
          </h3>

          <p className={styles.ctaText}>
            Si sufriste pérdidas económicas, daños materiales, incumplimientos
            contractuales o cualquier otra afectación que pueda generar una
            indemnización, nuestro equipo puede orientarte para determinar si tu
            caso puede resolverse mediante conciliación.
          </p>

          <p className={styles.ctaText}>
            Analizamos tu situación, revisamos la documentación disponible y te
            acompañamos durante el proceso para buscar un acuerdo que proteja
            tus intereses, reduzca tiempos y evite, cuando sea posible, un
            proceso judicial prolongado.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría sobre daños y perjuicios
          </a>
        </div>
      </motion.article>
    </section>
  );
}
