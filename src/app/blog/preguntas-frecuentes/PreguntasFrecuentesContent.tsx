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
          <span className={styles.badge}>Preguntas frecuentes</span>

          <h2 className={styles.title}>
            Resuelve tus dudas sobre conciliación en Colombia
          </h2>

          <p className={styles.paragraph}>
            Encuentra respuestas claras sobre conciliación en Bogotá y Colombia:
            tiempos del proceso, requisitos, audiencias, actas de conciliación,
            conciliación virtual y conflictos que pueden resolverse sin acudir a
            juicio.
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
