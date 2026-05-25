"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ComoEsLaAudienciaContent() {
  return (
    <section id="audiencia" className={styles.articleWrapper}>
      <motion.div
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          Cómo es la audiencia de conciliación en Colombia: presencial o virtual
        </h2>

        <p className={styles.paragraph}>
          La <strong>audiencia de conciliación en Colombia</strong> es el
          espacio donde las partes, con la ayuda de un conciliador, buscan
          llegar a un acuerdo para resolver un conflicto sin necesidad de acudir
          a un juez. En ciudades como <strong>Bogotá</strong>, estas audiencias
          pueden realizarse de forma presencial o virtual, dependiendo del
          centro de conciliación, el tipo de conflicto y la disponibilidad de
          las partes.
        </p>

        <p className={styles.paragraph}>
          El objetivo de la audiencia no es determinar quién tiene la razón,
          sino construir un acuerdo legal que permita solucionar el problema de
          manera rápida, económica y segura. A diferencia de un proceso
          judicial, la conciliación busca facilitar el diálogo y encontrar
          soluciones prácticas que beneficien a ambas partes.
        </p>

        <p className={styles.paragraph}>
          En Colombia, las audiencias de conciliación son utilizadas para
          resolver conflictos civiles, comerciales, familiares, deudas,
          arrendamientos, alimentos, incumplimientos contractuales y algunos
          asuntos laborales. Muchas personas recurren a este mecanismo porque
          permite ahorrar tiempo, reducir costos jurídicos y evitar procesos
          judiciales largos y desgastantes.
        </p>

        <div className={styles.note}>
          Un acuerdo logrado en conciliación tiene validez jurídica en Colombia
          y puede exigirse legalmente si alguna de las partes incumple lo
          pactado.
        </div>

        <h3 className={styles.subtitle}>
          ¿Qué sucede antes de la audiencia de conciliación?
        </h3>

        <p className={styles.paragraph}>
          Antes de la audiencia, normalmente se presenta una solicitud de
          conciliación ante un centro autorizado. Posteriormente, la otra parte
          recibe una citación donde se informa la fecha, hora, modalidad y datos
          de la audiencia.
        </p>

        <p className={styles.paragraph}>
          Durante esta etapa previa, es recomendable organizar documentos,
          contratos, conversaciones, soportes de pago y cualquier evidencia que
          ayude a explicar claramente el conflicto. Llegar preparado suele
          aumentar considerablemente las probabilidades de alcanzar un acuerdo.
        </p>

        <h3 className={styles.subtitle}>
          Etapas de una audiencia de conciliación en Bogotá y Colombia
        </h3>

        <p className={styles.paragraph}>
          Aunque cada audiencia puede desarrollarse de manera diferente según el
          caso, la mayoría de conciliaciones en Colombia siguen una estructura
          similar desde el inicio hasta el resultado final.
        </p>

        <ul className={styles.list}>
          <li>
            <strong>Instalación:</strong> el conciliador verifica la identidad
            de las partes, explica las reglas de la audiencia, el alcance legal
            del proceso y el objetivo de la conciliación.
          </li>

          <li>
            <strong>Exposición de los hechos:</strong> cada parte explica su
            versión del conflicto, lo ocurrido y lo que espera solucionar
            mediante el acuerdo.
          </li>

          <li>
            <strong>Revisión de documentos:</strong> se analizan contratos,
            facturas, chats, comprobantes, acuerdos previos o cualquier soporte
            relacionado con el caso.
          </li>

          <li>
            <strong>Espacio de negociación:</strong> las partes presentan
            propuestas, acuerdos de pago, compromisos, plazos o posibles
            soluciones al conflicto.
          </li>

          <li>
            <strong>Construcción del acuerdo:</strong> si existe disposición
            para negociar, el conciliador ayuda a estructurar un acuerdo claro y
            viable para ambas partes.
          </li>

          <li>
            <strong>Redacción del acta:</strong> si se llega a un acuerdo, se
            redacta el acta de conciliación indicando obligaciones, montos,
            fechas y condiciones de cumplimiento.
          </li>

          <li>
            <strong>Cierre de la audiencia:</strong> si no hay acuerdo, el
            conciliador puede expedir una constancia que permita acudir a otras
            vías legales.
          </li>
        </ul>

        <h3 className={styles.subtitle}>
          Audiencia presencial de conciliación
        </h3>

        <p className={styles.paragraph}>
          En la audiencia presencial, las partes asisten físicamente al centro
          de conciliación en Bogotá o en cualquier ciudad de Colombia. Allí, el
          conciliador dirige la reunión, organiza el diálogo y ayuda a construir
          soluciones que puedan quedar formalizadas en un acuerdo escrito.
        </p>

        <p className={styles.paragraph}>
          Este tipo de audiencia permite una interacción más directa entre las
          partes y suele ser utilizada en conflictos donde resulta importante
          revisar documentos físicos, aclarar detalles personalmente o facilitar
          conversaciones más cercanas.
        </p>

        <p className={styles.paragraph}>
          Además, muchas personas consideran que la modalidad presencial
          facilita la negociación porque permite una comunicación más fluida y
          un mayor control del desarrollo de la audiencia.
        </p>

        <h3 className={styles.subtitle}>
          Audiencia virtual de conciliación en Colombia
        </h3>

        <p className={styles.paragraph}>
          Actualmente, muchos centros de conciliación en Bogotá y Colombia
          realizan audiencias virtuales mediante plataformas digitales. Esta
          modalidad se volvió más frecuente porque permite ahorrar tiempo,
          desplazamientos y facilita la participación de personas que se
          encuentran en diferentes ciudades o incluso fuera del país.
        </p>

        <p className={styles.paragraph}>
          La conciliación virtual tiene la misma validez legal que una audiencia
          presencial, siempre que se cumplan los requisitos de identificación,
          participación y aceptación de las partes.
        </p>

        <div className={styles.categoryCard}>
          <h3>Audiencia virtual: lo mínimo para que salga bien</h3>

          <ul className={styles.list}>
            <li>Buena conexión a internet.</li>

            <li>Documento de identidad a la mano.</li>

            <li>Soportes en PDF listos para enviar.</li>

            <li>Estar en un lugar tranquilo y sin interrupciones.</li>

            <li>Tener acceso al enlace o plataforma con anticipación.</li>

            <li>Ingresar con algunos minutos de antelación.</li>

            <li>Disposición real para negociar y escuchar propuestas.</li>
          </ul>
        </div>

        <h3 className={styles.subtitle}>
          ¿Qué pasa si una de las partes no asiste?
        </h3>

        <p className={styles.paragraph}>
          Cuando una de las partes no asiste a la audiencia de conciliación, el
          centro puede expedir una constancia de inasistencia. Dependiendo del
          caso, este documento puede permitir continuar con otras acciones
          legales o procesos judiciales.
        </p>

        <p className={styles.paragraph}>
          Sin embargo, muchas conciliaciones fracasan simplemente porque alguna
          de las partes no tiene intención real de negociar. Por eso, asistir
          preparado y con disposición para dialogar suele ser fundamental para
          aprovechar realmente el proceso.
        </p>

        <h3 className={styles.subtitle}>
          ¿Qué pasa si sí se logra un acuerdo?
        </h3>

        <p className={styles.paragraph}>
          Cuando las partes llegan a un acuerdo, el conciliador redacta un acta
          de conciliación donde se establecen claramente las obligaciones,
          fechas, montos, compromisos y condiciones de cumplimiento.
        </p>

        <p className={styles.paragraph}>
          En Colombia, el acta de conciliación tiene efectos jurídicos y puede
          prestar mérito ejecutivo. Esto significa que, si alguna de las partes
          incumple lo acordado, el documento puede utilizarse legalmente para
          exigir el cumplimiento.
        </p>

        <h3 className={styles.subtitle}>
          Recomendaciones antes de asistir a una audiencia
        </h3>

        <p className={styles.paragraph}>
          Una buena preparación puede marcar la diferencia entre una audiencia
          exitosa y una negociación fallida. Por eso, antes de asistir a una
          conciliación es recomendable definir objetivos claros y revisar toda
          la documentación relevante.
        </p>

        <ul className={styles.list}>
          <li>
            Organiza previamente contratos, facturas y soportes importantes.
          </li>

          <li>Lleva una propuesta clara sobre lo que deseas negociar.</li>

          <li>Define límites mínimos y alternativas de negociación.</li>

          <li>Mantén una actitud respetuosa y abierta al diálogo.</li>

          <li>Escucha las propuestas de la otra parte antes de responder.</li>

          <li>Revisa cuidadosamente cualquier acuerdo antes de firmarlo.</li>
        </ul>

        <div className={styles.note}>
          La conciliación en Colombia no busca que una parte gane y la otra
          pierda, sino que ambas encuentren una solución práctica, viable y
          legal para resolver el conflicto de manera más rápida que un proceso
          judicial tradicional.
        </div>

        <div className={styles.cta}>
          <span className={styles.ctaTitle}>
            Asesoría para audiencia de conciliación en Bogotá
          </span>

          <p className={styles.paragraph}>
            Recibe orientación previa para preparar documentos, estructurar una
            estrategia de negociación y asistir a tu audiencia con mayor
            claridad y seguridad jurídica.
          </p>

          <ul className={styles.ctaList}>
            <li>Preparación para audiencia de conciliación.</li>

            <li>Revisión de documentos y soportes.</li>

            <li>Estrategia de negociación.</li>

            <li>Redacción y revisión de acuerdos.</li>

            <li>Orientación para conciliaciones virtuales.</li>

            <li>Asesoría en conflictos civiles, familiares y comerciales.</li>
          </ul>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.div>
    </section>
  );
}
