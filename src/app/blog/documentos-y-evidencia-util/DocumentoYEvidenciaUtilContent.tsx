"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function DocumentosYEvidenciaUtilContent() {
  return (
    <section id="documentos" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* QUE DOCUMENTOS LLEVAR A UNA CONCILIACION */}
        <span className={styles.category}>
          Guía práctica para audiencias de conciliación en Colombia
        </span>

        <h1 className={styles.title}>
          ¿Qué documentos llevar a una audiencia de conciliación en Colombia?
          Guía completa con pruebas, evidencias y recomendaciones
        </h1>

        <p className={styles.intro}>
          Preparar correctamente los documentos antes de una audiencia de
          conciliación puede marcar la diferencia entre alcanzar un acuerdo en
          la primera reunión o prolongar innecesariamente el conflicto. Aunque
          la conciliación busca que las partes dialoguen y construyan soluciones
          de manera voluntaria, los soportes documentales permiten demostrar los
          hechos, aclarar obligaciones y facilitar que el conciliador comprenda
          rápidamente el caso.
        </p>

        <p className={styles.paragraph}>
          En Colombia, muchas personas llegan a una audiencia únicamente con su
          versión de los hechos, pero sin contratos, comprobantes,
          conversaciones o documentos que respalden lo ocurrido. Esta situación
          suele generar discusiones, retrasos y dificulta la construcción de
          acuerdos sólidos.
        </p>

        <p className={styles.paragraph}>
          Por el contrario, cuando la información está organizada,
          cronológicamente ordenada y respaldada con evidencia suficiente, las
          posibilidades de lograr una conciliación exitosa aumentan
          considerablemente. Además, los acuerdos alcanzados suelen ser más
          claros y reducen el riesgo de futuros incumplimientos.
        </p>

        <div className={styles.highlightBox}>
          <strong>
            Preparar la documentación antes de la audiencia no significa
            convertir la conciliación en un juicio.
          </strong>

          <p>
            Significa facilitar el diálogo con información verificable que
            permita a las partes negociar sobre hechos claros y no únicamente
            sobre percepciones o recuerdos.
          </p>
        </div>

        <p className={styles.paragraph}>
          En conciliaciones relacionadas con deudas, contratos, arrendamientos,
          conflictos familiares, incumplimientos comerciales, alimentos,
          responsabilidad civil o acuerdos de pago, la evidencia documental
          suele convertirse en uno de los elementos más importantes para
          construir una propuesta sólida y demostrar la realidad del conflicto.
        </p>

        {/* POR QUE ES IMPORTANTE LLEVAR EVIDENCIA A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué los documentos son tan importantes en una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La función principal del conciliador no consiste en decidir quién
            tiene la razón, sino en facilitar un acuerdo entre las partes. Sin
            embargo, para construir propuestas equilibradas resulta fundamental
            comprender qué ocurrió, cuáles obligaciones existen y qué evidencia
            respalda cada versión.
          </p>

          <p className={styles.paragraph}>
            Una carpeta organizada con contratos, comprobantes de pago,
            mensajes, fotografías o cualquier otro soporte relevante permite
            identificar los puntos de acuerdo y de desacuerdo con mayor rapidez.
            Esto hace que la audiencia sea más eficiente y evita discusiones
            innecesarias sobre hechos fácilmente verificables.
          </p>

          <ul className={styles.list}>
            <li>Permiten demostrar la existencia del conflicto.</li>
            <li>Facilitan verificar fechas importantes.</li>
            <li>Respaldan obligaciones económicas.</li>
            <li>Ayudan a calcular valores pendientes.</li>
            <li>Reducen discusiones durante la audiencia.</li>
            <li>Generan mayor confianza entre las partes.</li>
          </ul>
        </div>

        {/* ES OBLIGATORIO LLEVAR DOCUMENTOS A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Es obligatorio llevar documentos a una audiencia de conciliación?
          </h2>

          <p className={styles.paragraph}>
            No existe una regla que obligue a todas las personas a presentar
            documentos durante una conciliación. Sin embargo, hacerlo es
            altamente recomendable, especialmente cuando el conflicto involucra
            pagos, contratos, incumplimientos, arrendamientos, alimentos o
            cualquier obligación que pueda demostrarse mediante soportes
            objetivos.
          </p>

          <p className={styles.paragraph}>
            Incluso cuando no se dispone de todos los documentos, es conveniente
            llevar cualquier evidencia disponible. Correos electrónicos,
            conversaciones de WhatsApp, comprobantes bancarios, fotografías o
            cotizaciones pueden aportar información relevante para comprender el
            origen del conflicto.
          </p>
        </div>

        {/* QUE DOCUMENTOS SIRVEN EN UNA CONCILIACION */}
        <h2 className={styles.subtitle}>
          ¿Qué documentos sirven en una conciliación?
        </h2>

        <p className={styles.paragraph}>
          Los documentos más útiles dependerán del tipo de conflicto, pero en
          términos generales existen ciertos soportes que suelen ser relevantes
          en la mayoría de conciliaciones civiles, comerciales, laborales o de
          familia.
        </p>

        <div className={styles.cardGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Contratos y acuerdos</h3>

            <p>
              Contratos firmados, promesas, órdenes de servicio, cotizaciones,
              acuerdos privados o cualquier documento que evidencie obligaciones
              entre las partes y condiciones pactadas.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Facturas y cuentas de cobro</h3>

            <p>
              Especialmente importantes en conflictos comerciales, prestación de
              servicios, pagos pendientes, proveedores, clientes y recuperación
              de cartera.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Comprobantes de pago</h3>

            <p>
              Transferencias, consignaciones, extractos bancarios, recibos o
              soportes que permitan demostrar pagos realizados o saldos
              pendientes.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Chats y correos</h3>

            <p>
              Conversaciones de WhatsApp, emails o mensajes donde se evidencien
              acuerdos, compromisos, incumplimientos, negociaciones previas o
              aceptación de obligaciones.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Pruebas del incumplimiento</h3>

            <p>
              Requerimientos enviados, fechas de vencimiento, comunicaciones,
              actas, solicitudes incumplidas o cualquier soporte que evidencie
              el problema.
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Soportes complementarios</h3>

            <p>
              Fotografías, reportes técnicos, entregas, capturas, grabaciones,
              archivos digitales o evidencia adicional que respalde tu versión.
            </p>
          </motion.div>
        </div>

        {/* QUE DOCUMENTOS LLEVAR A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Checklist: documentos recomendados antes de asistir a una
            conciliación
          </h2>

          <p className={styles.paragraph}>
            Antes de la audiencia, dedica unos minutos a verificar que cuentas
            con la información más importante. Esta revisión puede evitar
            contratiempos y hacer mucho más fluida la reunión.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Contrato o acuerdo relacionado con el conflicto.</li>
            <li>Facturas, recibos o cuentas de cobro.</li>
            <li>Extractos o comprobantes bancarios.</li>
            <li>Conversaciones relevantes.</li>
            <li>Correos electrónicos.</li>
            <li>Fotografías o videos, cuando sean pertinentes.</li>
            <li>Cronología de los hechos.</li>
            <li>Relación de valores pendientes.</li>
            <li>Copias digitales en PDF como respaldo.</li>
          </ul>
        </div>

        {/* EVIDENCIA UTIL SEGUN EL TIPO DE CONCILIACION */}
        <h2 className={styles.subtitle}>
          Evidencia útil según el tipo de conciliación
        </h2>

        <p className={styles.paragraph}>
          Dependiendo del conflicto, algunos documentos pueden tener mayor
          relevancia que otros. Por eso es importante identificar qué soportes
          ayudan realmente a demostrar los hechos de tu caso.
        </p>

        <div className={styles.cardGrid}>
          <div className={styles.infoCard}>
            <h3>Conciliación por deudas</h3>

            <p>
              Son fundamentales los comprobantes de pago, acuerdos de préstamo,
              letras, pagarés, mensajes de cobro y soportes bancarios.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Conciliación de arrendamiento</h3>

            <p>
              Contrato de arrendamiento, recibos, inventarios, fotografías,
              comunicaciones y evidencias de incumplimiento.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Conciliación familiar</h3>

            <p>
              Registros civiles, gastos del menor, soportes económicos, acuerdos
              previos y comunicaciones relacionadas con alimentos o visitas.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Conciliación comercial</h3>

            <p>
              Facturas, órdenes de compra, contratos de prestación de servicios,
              cotizaciones y soportes de entrega.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Conciliación laboral</h3>

            <p>
              Contratos de trabajo, desprendibles de nómina, liquidaciones,
              correos laborales y evidencia de pagos pendientes.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Incumplimientos contractuales</h3>

            <p>
              Cronogramas, acuerdos firmados, mensajes, anexos y cualquier
              soporte que permita identificar obligaciones incumplidas.
            </p>
          </div>
        </div>

        {/* QUE DOCUMENTOS LLEVAR SEGUN EL TIPO DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos llevar según el tipo de conciliación?
          </h2>

          <p className={styles.paragraph}>
            No todas las audiencias de conciliación requieren la misma
            documentación. Los soportes que resultan útiles dependen del origen
            del conflicto y de los acuerdos que se pretenden alcanzar. Preparar
            los documentos adecuados desde el inicio facilita el diálogo y
            permite que las partes expongan con mayor claridad su posición.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliaciones familiares</h3>

              <p>
                Lleva registros civiles, acuerdos anteriores, comprobantes de
                gastos, certificados escolares, soportes médicos y cualquier
                documento relacionado con alimentos, custodia o régimen de
                visitas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliaciones por arrendamiento</h3>

              <p>
                Es recomendable presentar el contrato de arrendamiento, recibos
                de pago, inventarios, fotografías del inmueble, comunicaciones
                entre las partes y soportes sobre cánones pendientes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliaciones comerciales</h3>

              <p>
                Contratos, órdenes de compra, facturas, remisiones,
                cotizaciones, comprobantes de entrega y estados de cuenta suelen
                ser documentos relevantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliaciones laborales</h3>

              <p>
                Contrato de trabajo, desprendibles de nómina, liquidaciones,
                correos laborales, certificados y demás soportes relacionados
                con la relación laboral.
              </p>
            </div>
          </div>
        </div>

        {/* COMO ORGANIZAR LA EVIDENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo organizar la evidencia correctamente
          </h2>

          <p className={styles.paragraph}>
            No se trata de presentar cientos de archivos sin orden. En muchos
            casos, una carpeta organizada con documentos claros puede ser más
            útil que grandes cantidades de información desordenada.
          </p>

          <p className={styles.paragraph}>
            Organizar la información correctamente también transmite seriedad y
            preparación durante la audiencia. Esto facilita que la otra parte
            comprenda la situación y ayuda a mantener una negociación más clara
            y profesional.
          </p>

          <ul className={styles.list}>
            <li>Ordena los documentos cronológicamente.</li>
            <li>Identifica claramente las fechas importantes.</li>
            <li>Resalta valores, obligaciones o incumplimientos.</li>
            <li>Separa los documentos principales de los complementarios.</li>
            <li>Lleva copia digital y respaldo en PDF si es posible.</li>
            <li>Evita duplicar archivos innecesarios.</li>
            <li>
              Guarda capturas completas de conversaciones importantes sin
              editar.
            </li>

            <li>
              Identifica fácilmente los soportes más importantes del caso.
            </li>
          </ul>
        </div>

        {/* COMO PRESENTAR LA EVIDENCIA DURANTE LA AUDIENCIA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo presentar la evidencia durante la audiencia de conciliación
          </h2>

          <p className={styles.paragraph}>
            No basta con llevar documentos. La forma en que se presentan también
            puede influir en el desarrollo de la audiencia. Una explicación
            clara y ordenada facilita que el conciliador comprenda rápidamente
            el caso y permite que la otra parte conozca los fundamentos de cada
            solicitud.
          </p>

          <p className={styles.paragraph}>
            Siempre que sea posible, organiza la información siguiendo el orden
            en que ocurrieron los hechos. De esta manera será más sencillo
            explicar el origen del conflicto y respaldar cada afirmación con el
            documento correspondiente.
          </p>

          <ul className={styles.list}>
            <li>Expón primero los hechos principales.</li>
            <li>
              Presenta únicamente documentos relacionados con el conflicto.
            </li>
            <li>Evita entregar información repetida.</li>
            <li>Identifica previamente los documentos más importantes.</li>
            <li>Conserva originales y lleva copias cuando sea necesario.</li>
            <li>Mantén disponible una copia digital de respaldo.</li>
          </ul>
        </div>

        {/* PUEDE PRESENTAR CORREOS ELECTRONICOS, FOTOGRAFIAS O ARCHIVOS DIGITALES? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Puedo presentar correos electrónicos, fotografías o archivos
            digitales?
          </h2>

          <p className={styles.paragraph}>
            Sí. Actualmente gran parte de las relaciones personales y
            comerciales se desarrollan mediante medios digitales. Correos
            electrónicos, fotografías, mensajes de texto, conversaciones de
            WhatsApp, archivos PDF, comprobantes electrónicos y otros documentos
            digitales pueden servir como soporte para explicar el conflicto.
          </p>

          <p className={styles.paragraph}>
            Lo recomendable es conservar la información completa, evitando
            modificar o editar los archivos. Cuando sea posible, lleva tanto la
            versión digital como una copia impresa para facilitar su consulta
            durante la audiencia.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La evidencia digital suele complementar contratos, comprobantes y
              demás documentos físicos, permitiendo reconstruir con mayor
              facilidad los hechos que dieron origen al conflicto.
            </p>
          </div>
        </div>

        {/* ¿QUE OCURRE SI LA OTRA PARTE NO PRESENTA DOCUMENTOS? */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué ocurre si la otra parte no presenta documentos?
          </h2>

          <p className={styles.paragraph}>
            Es posible que una de las partes asista a la audiencia sin
            documentos o con información limitada. Esta situación no impide que
            la conciliación se lleve a cabo, aunque puede dificultar el análisis
            del conflicto y retrasar la construcción de un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Cuando una de las partes cuenta con soportes claros y organizados,
            el conciliador dispone de mayores elementos para comprender los
            hechos y orientar la conversación hacia soluciones realistas. En
            algunos casos, si las partes lo consideran necesario, pueden acordar
            aportar información adicional en una nueva sesión.
          </p>
        </div>

        {/* ERRORES FREQUENTES AL PRESENTAR EVIDENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que pueden disminuir las posibilidades de llegar a un
            acuerdo
          </h2>

          <p className={styles.paragraph}>
            En muchas conciliaciones el problema no radica únicamente en el
            conflicto, sino en la forma en que las partes llegan preparadas a la
            audiencia. Presentar información incompleta, desconocer los hechos o
            mantener una postura inflexible puede dificultar la negociación y
            reducir las posibilidades de alcanzar un acuerdo beneficioso para
            todos.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Llegar sin preparación</h3>

              <p>
                No revisar previamente los documentos o desconocer los valores,
                fechas y obligaciones suele generar confusión durante la
                audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Presentar información desordenada</h3>

              <p>
                Cuando los documentos no siguen un orden lógico, resulta más
                difícil explicar el caso y demostrar el origen del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No escuchar a la otra parte</h3>

              <p>
                La conciliación busca construir soluciones. Escuchar los
                argumentos de la otra persona puede facilitar acuerdos que
                inicialmente parecían imposibles.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ocultar información importante</h3>

              <p>
                La transparencia favorece la confianza entre las partes y
                permite que el conciliador proponga soluciones equilibradas.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMENDACIONES ANTES DE ASISTIR A UNA AUDIENCIA DE CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Recomendaciones antes de asistir a una audiencia de conciliación
          </h2>

          <p className={styles.paragraph}>
            Además de preparar la documentación, conviene dedicar unos minutos a
            revisar la estrategia con la que se participará en la audiencia. Una
            buena preparación permite aprovechar mejor el tiempo y facilita la
            negociación.
          </p>

          <ul className={styles.list}>
            <li>Revisa todos los documentos uno o dos días antes.</li>
            <li>Confirma que los valores y fechas sean correctos.</li>
            <li>
              Define cuáles son los acuerdos mínimos que estarías dispuesto a
              aceptar.
            </li>
            <li>Organiza los documentos por orden cronológico.</li>
            <li>Lleva copias físicas y digitales.</li>
            <li>Llega con suficiente anticipación.</li>
            <li>Escucha los argumentos de la otra parte antes de responder.</li>
            <li>Mantén una actitud abierta al diálogo.</li>
          </ul>
        </div>

        {/* QUE DOCUMENTOS NORMALMENTE NO SON NECESARIOS PARA UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos normalmente no son necesarios para una conciliación?
          </h2>

          <p className={styles.paragraph}>
            Aunque es recomendable asistir con la mayor cantidad de información
            útil, no significa que debas llevar todos los documentos que tengas
            relacionados con el caso. Presentar información excesiva o
            irrelevante puede dificultar la revisión de los soportes
            verdaderamente importantes.
          </p>

          <ul className={styles.list}>
            <li>Documentos que no tengan relación con el conflicto.</li>
            <li>Copias repetidas de los mismos soportes.</li>
            <li>Conversaciones incompletas o fuera de contexto.</li>
            <li>
              Información financiera que no esté relacionada con la
              controversia.
            </li>
            <li>Documentos ilegibles o deteriorados.</li>
            <li>Archivos digitales sin identificar su origen.</li>
          </ul>

          <div className={styles.note}>
            En caso de duda, es recomendable organizar primero los documentos
            más relevantes y dejar la documentación complementaria como
            respaldo.
          </div>
        </div>

        {/* COMO PREPARAR UNA AUDIENCIA DE CONCILIACION PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Cómo preparar una audiencia de conciliación paso a paso
          </h2>

          <p className={styles.paragraph}>
            Preparar una conciliación no consiste únicamente en reunir
            documentos. Un proceso organizado permite aprovechar mejor la
            audiencia y facilita la construcción de acuerdos entre las partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Paso 1</h3>

              <p>
                Identifica claramente cuál es el conflicto que será objeto de la
                conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 2</h3>

              <p>
                Reúne todos los contratos, comprobantes, conversaciones y
                soportes relacionados con el caso.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 3</h3>

              <p>
                Organiza la información cronológicamente para facilitar su
                explicación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 4</h3>

              <p>
                Define previamente cuáles son los acuerdos que estarías
                dispuesto a aceptar durante la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 5</h3>

              <p>
                Lleva copia física y digital de los documentos más importantes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Paso 6</h3>

              <p>
                Mantén una actitud abierta al diálogo y escucha las propuestas
                de la otra parte.
              </p>
            </div>
          </div>
        </div>

        {/* QUE PASA SI NO TENGO TODOS LOS DOCUMENTOS */}
        <h2 className={styles.subtitle}>
          ¿Qué pasa si no tengo todos los documentos?
        </h2>

        <p className={styles.paragraph}>
          No siempre es necesario contar con documentos perfectos o extensos. En
          muchos casos, conversaciones, comprobantes parciales, correos o
          soportes básicos pueden ayudar a demostrar la existencia del conflicto
          y facilitar la negociación.
        </p>

        <p className={styles.paragraph}>
          Lo importante es presentar la información disponible de manera clara y
          coherente. Incluso cuando no existe un contrato formal, otros medios
          de prueba pueden ayudar a respaldar tu posición durante la audiencia.
        </p>

        {/* PREGUNTAS QUE DEBERIAS RESPONDER ANTES DE ASISTIR A UNA CONCILIACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas que deberías responder antes de asistir a una conciliación
          </h2>

          <p className={styles.paragraph}>
            Antes de la audiencia resulta conveniente hacer una revisión
            personal del caso. Tener claras estas respuestas facilita la
            negociación y permite exponer los hechos con mayor seguridad.
          </p>

          <ul className={styles.list}>
            <li>¿Cuál fue el origen del conflicto?</li>
            <li>¿Qué documentos respaldan mi versión?</li>
            <li>¿Qué obligaciones se encuentran pendientes?</li>
            <li>¿Cuál sería un acuerdo razonable para ambas partes?</li>
            <li>¿Qué aspectos no estoy dispuesto a negociar?</li>
            <li>
              ¿Qué propuesta concreta puedo presentar durante la audiencia?
            </li>
            <li>¿Qué documentos podrían solicitarme?</li>
            <li>
              ¿Tengo respaldos digitales de toda la información importante?
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div>
            <strong className={styles.ctaTitle}>
              ¿Necesitas ayuda preparando tu audiencia?
            </strong>

            <p className={styles.ctaText}>
              Recibe orientación sobre qué documentos llevar, cómo organizar la
              evidencia y cómo presentar una propuesta sólida en tu conciliación
              en Bogotá o Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.div>
    </section>
  );
}
