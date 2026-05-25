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
        <span className={styles.category}>Guía práctica de conciliación</span>

        <h1 className={styles.title}>
          Documentos y evidencia útil para una conciliación en Colombia
        </h1>

        <p className={styles.intro}>
          La preparación documental es uno de los factores que más influye en el
          éxito de una audiencia de conciliación. Aunque la conciliación en
          Colombia no funciona exactamente igual que un juicio, sí requiere
          soportes claros que permitan demostrar los hechos, las obligaciones,
          los acuerdos previos y los posibles incumplimientos entre las partes.
        </p>

        <p className={styles.paragraph}>
          En Bogotá y en diferentes ciudades del país, muchas conciliaciones
          fracasan no porque las partes no quieran negociar, sino porque llegan
          sin pruebas organizadas, sin fechas claras o sin documentos que
          permitan entender realmente lo ocurrido. Cuando la información está
          incompleta o desordenada, el proceso puede volverse más lento y la
          posibilidad de alcanzar un acuerdo disminuye considerablemente.
        </p>

        <p className={styles.paragraph}>
          Por el contrario, cuando una persona presenta evidencia clara,
          organizada y fácil de revisar, el conciliador puede identificar con
          mayor rapidez los puntos de discusión y orientar una negociación más
          eficiente. Esto suele facilitar acuerdos más rápidos, reducir
          discusiones innecesarias y generar mayor confianza entre las partes.
        </p>

        <div className={styles.highlightBox}>
          <strong>
            Una conciliación bien preparada suele resolverse más rápido.
          </strong>

          <p>
            Cuando las partes presentan documentos organizados y evidencia
            verificable, el conciliador puede entender el caso con mayor
            facilidad y orientar una negociación más efectiva y equilibrada.
          </p>
        </div>

        <p className={styles.paragraph}>
          En conciliaciones relacionadas con deudas, contratos, arrendamientos,
          conflictos familiares, incumplimientos comerciales, alimentos,
          responsabilidad civil o acuerdos de pago, la evidencia documental
          suele convertirse en uno de los elementos más importantes para
          construir una propuesta sólida y demostrar la realidad del conflicto.
        </p>

        <h2 className={styles.subtitle}>
          ¿Por qué es importante llevar evidencia a una conciliación?
        </h2>

        <p className={styles.paragraph}>
          La conciliación busca que las partes lleguen a un acuerdo voluntario,
          pero para negociar adecuadamente es necesario que exista claridad
          sobre los hechos. Los documentos permiten demostrar obligaciones,
          fechas, pagos, compromisos y comunicaciones relevantes entre las
          partes.
        </p>

        <p className={styles.paragraph}>
          Además, una buena preparación documental ayuda a evitar versiones
          contradictorias durante la audiencia y facilita que el conciliador
          pueda orientar soluciones más objetivas y realistas.
        </p>

        <ul className={styles.list}>
          <li>
            Permite demostrar la existencia del conflicto y sus antecedentes.
          </li>

          <li>
            Facilita identificar incumplimientos, pagos o compromisos
            pendientes.
          </li>

          <li>Ayuda a calcular valores económicos o acuerdos de pago.</li>

          <li>Reduce discusiones innecesarias durante la audiencia.</li>

          <li>
            Mejora las posibilidades de alcanzar acuerdos rápidos y claros.
          </li>
        </ul>

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

        <h2 className={styles.subtitle}>
          Cómo organizar la evidencia correctamente
        </h2>

        <p className={styles.paragraph}>
          No se trata de presentar cientos de archivos sin orden. En muchos
          casos, una carpeta organizada con documentos claros puede ser más útil
          que grandes cantidades de información desordenada.
        </p>

        <p className={styles.paragraph}>
          Organizar la información correctamente también transmite seriedad y
          preparación durante la audiencia. Esto facilita que la otra parte
          comprenda la situación y ayuda a mantener una negociación más clara y
          profesional.
        </p>

        <ul className={styles.list}>
          <li>Ordena los documentos cronológicamente.</li>

          <li>Identifica claramente las fechas importantes.</li>

          <li>Resalta valores, obligaciones o incumplimientos.</li>

          <li>Separa los documentos principales de los complementarios.</li>

          <li>Lleva copia digital y respaldo en PDF si es posible.</li>

          <li>Evita duplicar archivos innecesarios.</li>

          <li>
            Guarda capturas completas de conversaciones importantes sin editar.
          </li>

          <li>Identifica fácilmente los soportes más importantes del caso.</li>
        </ul>

        <h2 className={styles.subtitle}>
          Errores frecuentes al presentar evidencia
        </h2>

        <p className={styles.paragraph}>
          Muchas personas llegan a conciliación con información incompleta,
          desorganizada o difícil de revisar. Esto puede generar confusión,
          retrasos e incluso afectar la posibilidad de lograr acuerdos rápidos.
        </p>

        <ul className={styles.list}>
          <li>Llevar documentos desordenados o incompletos.</li>

          <li>No revisar previamente fechas y valores.</li>

          <li>Presentar chats sin contexto o conversaciones incompletas.</li>

          <li>No llevar respaldo digital de la información.</li>

          <li>Olvidar documentos básicos como contratos o cédulas.</li>

          <li>Confiar únicamente en explicaciones verbales sin soportes.</li>
        </ul>

        <div className={styles.note}>
          <strong>Consejo importante:</strong> la conciliación busca facilitar
          acuerdos, por lo que la claridad de la información ayuda a reducir
          discusiones innecesarias y acelera el proceso de negociación. En
          muchos casos, la forma en que organizas la evidencia puede influir
          directamente en la rapidez y efectividad del acuerdo.
        </div>

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
