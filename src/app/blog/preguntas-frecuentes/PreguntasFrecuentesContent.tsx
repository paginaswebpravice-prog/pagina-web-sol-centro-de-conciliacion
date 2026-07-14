"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const faqItems = [
  {
    q: "¿Qué es la conciliación en Colombia?",
    a: "Es un mecanismo legal que permite resolver conflictos mediante el diálogo y con la ayuda de un conciliador, evitando un proceso judicial.",
  },
  {
    q: "¿Qué casos se pueden conciliar?",
    a: "Se pueden conciliar asuntos civiles, comerciales, familiares y algunos conflictos laborales, dependiendo del caso concreto.",
  },
  {
    q: "¿Qué pasa si la otra parte no asiste?",
    a: "El centro de conciliación puede expedir una constancia de inasistencia que permite continuar con otras acciones legales cuando corresponda.",
  },
  {
    q: "¿La conciliación tiene validez legal?",
    a: "Sí. El acta de conciliación tiene efectos jurídicos y puede prestar mérito ejecutivo en Colombia.",
  },
  {
    q: "¿Se puede hacer conciliación virtual?",
    a: "Sí. Actualmente muchos centros de conciliación en Bogotá y Colombia realizan audiencias virtuales.",
  },
  {
    q: "¿Cuánto dura una conciliación?",
    a: "Depende del caso, pero muchos conflictos pueden resolverse en una sola audiencia si las partes llegan preparadas.",
  },
  {
    q: "¿Necesito abogado para conciliar?",
    a: "No siempre es obligatorio, pero contar con asesoría jurídica puede ayudarte a negociar mejores acuerdos.",
  },
  {
    q: "¿Qué documentos debo llevar?",
    a: "Contratos, facturas, chats, correos, comprobantes de pago y cualquier evidencia relacionada con el conflicto.",
  },
  {
    q: "¿Qué pasa si no hay acuerdo?",
    a: "Se expide una constancia que puede servir para iniciar un proceso judicial posteriormente.",
  },
  {
    q: "¿La conciliación evita una demanda?",
    a: "Sí. Uno de sus principales objetivos es solucionar conflictos sin necesidad de acudir ante un juez.",
  },
  {
    q: "¿Qué ventajas tiene la conciliación?",
    a: "Reduce costos, ahorra tiempo, evita desgaste emocional y permite acuerdos más flexibles.",
  },
  {
    q: "¿Dónde puedo conciliar en Bogotá?",
    a: "Puedes acudir a centros de conciliación autorizados, notarías, cámaras de comercio o consultorios jurídicos.",
  },
  {
    q: "¿Qué pasa después de firmar el acta?",
    a: "Las partes deben cumplir lo acordado. Si no se cumple, el acta puede utilizarse legalmente para exigir el cumplimiento.",
  },
  {
    q: "¿Se pueden conciliar deudas?",
    a: "Sí. Las deudas y acuerdos de pago son de los casos más frecuentes en conciliación en Colombia.",
  },
  {
    q: "¿La conciliación es confidencial?",
    a: "Sí. Las audiencias de conciliación tienen carácter reservado y buscan proteger a las partes involucradas.",
  },
  {
    q: "¿La conciliación reemplaza un juicio?",
    a: "En muchos casos sí, porque permite resolver el conflicto antes de acudir ante un juez.",
  },
  {
    q: "¿Puedo llevar pruebas digitales?",
    a: "Sí. Chats, correos electrónicos, audios y documentos digitales pueden servir como soporte en la conciliación.",
  },
  {
    q: "¿La conciliación sirve para conflictos familiares?",
    a: "Sí. Es común en casos de alimentos, visitas, custodia y acuerdos entre familiares.",
  },
  {
    q: "¿Quién dirige la audiencia de conciliación?",
    a: "La audiencia es dirigida por un conciliador autorizado que facilita el diálogo entre las partes.",
  },
  {
    q: "¿Qué pasa si incumplen el acuerdo?",
    a: "El acta de conciliación puede utilizarse para exigir judicialmente el cumplimiento del acuerdo.",
  },
  {
    q: "¿Se pueden negociar acuerdos de pago?",
    a: "Sí. Los acuerdos de pago son uno de los asuntos más comunes en conciliación civil y comercial.",
  },
  {
    q: "¿La audiencia puede ser presencial o virtual?",
    a: "Sí. Dependiendo del centro de conciliación y del caso, puede realizarse de ambas maneras.",
  },
  {
    q: "¿Cuánto cuesta una conciliación?",
    a: "El valor depende del centro de conciliación y del tipo de conflicto, aunque suele ser más económico que un juicio.",
  },
  {
    q: "¿Qué debo preparar antes de la audiencia?",
    a: "Es recomendable llevar documentos organizados y una propuesta clara de negociación.",
  },
  {
    q: "¿Las empresas pueden conciliar?",
    a: "Sí. Muchas empresas utilizan conciliación para resolver conflictos comerciales y contractuales.",
  },
  {
    q: "¿Qué diferencia hay entre conciliación y demanda?",
    a: "La conciliación busca acuerdos voluntarios, mientras que la demanda implica un proceso judicial ante un juez.",
  },
  {
    q: "¿Puedo solicitar conciliación desde otra ciudad?",
    a: "Sí. Actualmente muchos centros ofrecen conciliación virtual para personas en cualquier lugar de Colombia.",
  },
  {
    q: "¿La conciliación genera antecedentes judiciales?",
    a: "No. La conciliación no constituye un antecedente penal ni judicial; es un mecanismo alternativo para solucionar conflictos mediante acuerdos.",
  },
  {
    q: "¿Puedo asistir acompañado por un abogado?",
    a: "Sí. Aunque en muchos casos no es obligatorio, puedes asistir con un abogado que te asesore durante toda la audiencia.",
  },
  {
    q: "¿Qué ocurre si una persona incumple el acuerdo?",
    a: "Cuando el acuerdo consta en un acta de conciliación con efectos legales, la parte afectada puede acudir ante un juez para exigir su cumplimiento.",
  },
  {
    q: "¿La conciliación es más rápida que una demanda?",
    a: "Generalmente sí. Muchas controversias pueden solucionarse en una sola audiencia, evitando procesos judiciales prolongados.",
  },
  {
    q: "¿Puedo modificar un acuerdo firmado?",
    a: "Sí, siempre que ambas partes estén de acuerdo y se formalice un nuevo acuerdo conforme a la ley.",
  },
  {
    q: "¿Quién fija la fecha de la audiencia?",
    a: "El centro de conciliación programa la audiencia y notifica oportunamente a las partes.",
  },
  {
    q: "¿Qué sucede si llego tarde a la audiencia?",
    a: "Dependerá de cada caso y del conciliador, aunque lo recomendable es asistir puntualmente para evitar inconvenientes.",
  },
  {
    q: "¿Las empresas también pueden acudir a conciliación?",
    a: "Sí. Es frecuente que empresas utilicen la conciliación para resolver controversias comerciales, contractuales o relacionadas con el cobro de obligaciones.",
  },
  {
    q: "¿Puedo conciliar si vivo fuera de Colombia?",
    a: "Sí. Dependiendo del caso, algunas audiencias pueden realizarse virtualmente o mediante apoderado.",
  },
  {
    q: "¿Qué ventajas tiene llegar con una propuesta de acuerdo?",
    a: "Facilita la negociación, demuestra disposición para solucionar el conflicto y aumenta las posibilidades de alcanzar un acuerdo beneficioso para ambas partes.",
  },
  {
    q: "¿La conciliación sirve para conflictos entre vecinos?",
    a: "Sí. Muchos conflictos de convivencia, propiedad horizontal o uso de bienes comunes pueden solucionarse mediante conciliación.",
  },
  {
    q: "¿Es posible suspender una audiencia de conciliación?",
    a: "En algunos casos sí, cuando existen razones justificadas y el conciliador considera procedente reprogramarla.",
  },
];

export default function PreguntasFrecuentesContent() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* 50 PREGUNTAS FRECUENTES SOBRE CONCILIACION EN COLOMBIA */}
          <span className={styles.badge}>
            Guía práctica sobre conciliación en Colombia
          </span>

          <h1 className={styles.title}>
            50 preguntas frecuentes sobre conciliación en Colombia: respuestas
            claras, requisitos, costos, audiencias y actas (Guía 2026)
          </h1>

          <p className={styles.paragraph}>
            Si estás pensando en iniciar una conciliación o recibiste una
            citación, es normal que tengas dudas sobre el procedimiento. En esta
            guía encontrarás respuestas sencillas y actualizadas sobre cómo
            funciona la conciliación en Colombia, qué asuntos pueden resolverse,
            cuánto tarda el trámite, qué ocurre si una persona no asiste y
            cuáles son los efectos legales del acta de conciliación.
          </p>

          <p className={styles.paragraph}>
            Las preguntas que encontrarás a continuación reúnen las inquietudes
            más frecuentes de personas, empresas y familias que buscan
            solucionar un conflicto sin acudir inmediatamente a un proceso
            judicial.
          </p>
        </motion.div>

        {/* ¿POR QUE ES IMPORTANTE CONOCER COMO FUNCIONA LA CONCILIACION? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            ¿Por qué es importante conocer cómo funciona la conciliación?
          </h2>

          <p className={styles.paragraph}>
            Muchas personas llegan a una audiencia sin conocer cuáles son sus
            derechos, qué documentos deben presentar o qué efectos tiene un
            acuerdo de conciliación. Comprender el procedimiento permite
            negociar con mayor seguridad, evitar errores y aprovechar un
            mecanismo que puede ahorrar meses o incluso años de un proceso
            judicial.
          </p>

          <p className={styles.paragraph}>
            Además de resolver conflictos civiles, comerciales, familiares o
            laborales, la conciliación promueve soluciones construidas por las
            propias partes, lo que suele generar un mayor cumplimiento de los
            acuerdos alcanzados.
          </p>
        </motion.div>

        <div className={styles.faqGrid}>
          {faqItems.map((item, index) => (
            <motion.details
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.04,
                duration: 0.45,
              }}
              viewport={{ once: true }}
            >
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </motion.details>
          ))}
        </div>

        {/* ¿CUANDO ES RECOMENDABLE SOLICITAR UNA CONCILIACION? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            ¿Cuándo es recomendable solicitar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La conciliación es recomendable cuando existe la posibilidad de
            dialogar y alcanzar un acuerdo sin acudir inmediatamente a un juez.
            En muchos casos permite resolver diferencias en menos tiempo,
            reducir costos y conservar las relaciones personales o comerciales
            entre las partes.
          </p>

          <p className={styles.paragraph}>
            También puede ser un requisito previo para iniciar determinados
            procesos judiciales, por lo que conocer su funcionamiento ayuda a
            tomar mejores decisiones antes de presentar una demanda.
          </p>
        </motion.div>

        {/* ¿QUE BENEFICIOS OFRECE RESOLVER UN CONFLICTO MEDIANTE CONCILIACION? */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>
            ¿Qué beneficios ofrece resolver un conflicto mediante conciliación?
          </h2>

          <p className={styles.paragraph}>
            Además de reducir tiempos y costos, la conciliación permite que las
            partes participen activamente en la construcción del acuerdo. Esto
            suele generar un mayor compromiso con el cumplimiento de lo pactado
            y evita la incertidumbre propia de un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Cuando el acuerdo queda consignado en un acta de conciliación con
            efectos legales, las partes cuentan con una herramienta jurídica que
            brinda mayor seguridad para exigir el cumplimiento de las
            obligaciones asumidas.
          </p>
        </motion.div>

        {/* ¿QUIERES SABER SI TU CASO SE PUEDE CONCILIAR EN BOGOTÁ O COLOMBIA? */}
        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <strong>
            ¿Quieres saber si tu caso se puede conciliar en Bogotá o Colombia?
          </strong>

          <p>
            Recibe orientación sobre documentos, estrategia, tiempos y opciones
            legales para llegar a un acuerdo rápido y seguro.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
