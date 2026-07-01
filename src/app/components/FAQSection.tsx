"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/FAQSection.module.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question:
      "¿Qué es un centro de conciliación y qué funciones cumple en Colombia?",
    answer:
      "Un centro de conciliación es una entidad autorizada para administrar mecanismos alternativos de resolución de conflictos. Su función es facilitar acuerdos entre las partes mediante audiencias dirigidas por conciliadores, permitiendo solucionar controversias civiles, comerciales, familiares, laborales y de otras materias autorizadas por la ley, evitando en muchos casos acudir a un proceso judicial.",
  },
  {
    question: "¿Qué es la conciliación extrajudicial en derecho?",
    answer:
      "La conciliación extrajudicial en derecho es un mecanismo mediante el cual dos o más personas buscan resolver un conflicto con la ayuda de un conciliador autorizado antes de iniciar un proceso judicial. Los acuerdos logrados tienen plena validez jurídica y pueden evitar demandas largas, costosas y desgastantes.",
  },
  {
    question:
      "¿Qué tipos de conflictos pueden resolverse mediante conciliación?",
    answer:
      "Dependiendo de la legislación colombiana, es posible conciliar conflictos civiles, comerciales, familiares, laborales, de propiedad horizontal, obligaciones económicas, arrendamientos, responsabilidad civil, conflictos entre socios, acuerdos de pago y muchas otras controversias susceptibles de transacción.",
  },
  {
    question:
      "¿Cuándo es obligatoria la conciliación antes de presentar una demanda?",
    answer:
      "En determinados asuntos la conciliación constituye un requisito de procedibilidad antes de acudir ante un juez. Esto significa que las partes deben intentar resolver el conflicto mediante una audiencia de conciliación antes de iniciar el proceso judicial correspondiente, salvo las excepciones previstas por la ley.",
  },
  {
    question: "¿Qué validez jurídica tiene un acta de conciliación?",
    answer:
      "El acta de conciliación tiene plena validez legal en Colombia. Cuando las partes llegan a un acuerdo, este adquiere fuerza vinculante y presta mérito ejecutivo, por lo que puede exigirse judicialmente en caso de incumplimiento.",
  },
  {
    question:
      "¿Qué ocurre si una de las partes no asiste a la audiencia de conciliación?",
    answer:
      "Si una de las partes no comparece sin una justificación válida, el centro de conciliación dejará constancia de la inasistencia. Dependiendo del caso, esta situación puede tener consecuencias procesales cuando posteriormente se inicie un proceso judicial.",
  },
  {
    question:
      "¿Qué sucede si las partes no llegan a un acuerdo durante la conciliación?",
    answer:
      "Cuando no es posible alcanzar un acuerdo, el conciliador deja constancia del resultado de la audiencia. Posteriormente las partes podrán acudir a la vía judicial si consideran necesario hacer valer sus derechos ante un juez competente.",
  },
  {
    question: "¿Cuánto tiempo tarda un proceso de conciliación en Colombia?",
    answer:
      "El tiempo depende de la complejidad del conflicto y de la disponibilidad de las partes. Sin embargo, la conciliación suele resolverse en mucho menos tiempo que un proceso judicial, permitiendo obtener soluciones ágiles y acuerdos efectivos en una o varias sesiones.",
  },
  {
    question: "¿Se puede realizar una conciliación virtual en Colombia?",
    answer:
      "Sí. Muchos centros de conciliación autorizados ofrecen audiencias virtuales cuando las condiciones del caso lo permiten. Esta modalidad facilita la participación de personas ubicadas en diferentes ciudades del país, manteniendo la misma validez jurídica que una audiencia presencial.",
  },
  {
    question: "¿Qué documentos debo presentar para solicitar una conciliación?",
    answer:
      "Generalmente es necesario aportar los documentos que permitan demostrar la existencia del conflicto, como contratos, facturas, pagarés, comprobantes de pago, correos electrónicos, mensajes, certificados u otros soportes relacionados con la controversia.",
  },
  {
    question:
      "¿Cuáles son las ventajas de resolver un conflicto mediante conciliación?",
    answer:
      "La conciliación permite ahorrar tiempo y costos, reducir el desgaste emocional, preservar relaciones personales o comerciales, mantener la confidencialidad del conflicto y alcanzar acuerdos con respaldo jurídico sin necesidad de largos procesos judiciales.",
  },
  {
    question: "¿Qué diferencias existen entre conciliación y arbitraje?",
    answer:
      "En la conciliación las partes construyen conjuntamente un acuerdo con la ayuda del conciliador. En el arbitraje, por el contrario, uno o varios árbitros analizan el conflicto y emiten un laudo que resuelve la controversia de manera obligatoria para las partes.",
  },
  {
    question: "¿La conciliación sirve para resolver deudas y acuerdos de pago?",
    answer:
      "Sí. Es uno de los mecanismos más utilizados para negociar obligaciones económicas, préstamos, incumplimientos contractuales y acuerdos de pago entre personas o empresas, permitiendo establecer condiciones claras y legalmente exigibles.",
  },
  {
    question: "¿La conciliación también aplica para conflictos familiares?",
    answer:
      "Sí. La conciliación familiar permite resolver asuntos relacionados con cuota de alimentos, custodia de menores, régimen de visitas, liquidación de sociedad conyugal, separación de bienes y otros conflictos familiares permitidos por la legislación colombiana.",
  },
  {
    question:
      "¿Es necesario contratar un abogado para asistir a una conciliación?",
    answer:
      "En muchos casos no es obligatorio contar con abogado para participar en una audiencia de conciliación. Sin embargo, recibir asesoría jurídica especializada puede facilitar la protección de los derechos de las partes y la elaboración de acuerdos claros y equilibrados.",
  },
  {
    question:
      "¿Qué beneficios ofrece un centro de conciliación autorizado frente a un proceso judicial?",
    answer:
      "Un centro de conciliación autorizado permite resolver conflictos de forma más rápida, con menores costos, mayor flexibilidad y un enfoque colaborativo. Además, los acuerdos alcanzados cuentan con respaldo jurídico y pueden ejecutarse legalmente en caso de incumplimiento.",
  },
  {
    question: "¿Quién puede solicitar una audiencia de conciliación?",
    answer:
      "Cualquier persona natural, empresa, comerciante, sociedad o entidad que tenga un conflicto susceptible de conciliación puede presentar una solicitud ante un centro de conciliación autorizado para iniciar el procedimiento correspondiente.",
  },
  {
    question: "¿Por qué elegir SOL Centro de Conciliación y Arbitraje?",
    answer:
      "En SOL Centro de Conciliación y Arbitraje ofrecemos acompañamiento jurídico especializado, conciliadores con experiencia, atención presencial y virtual, procesos transparentes y soluciones orientadas a alcanzar acuerdos sólidos, equilibrados y con plena validez legal conforme a la legislación colombiana.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection} aria-labelledby="faq-title">
      {/* SUBTÍTULO */}
      <motion.h3
        className={styles.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Resolvemos las dudas más frecuentes sobre conciliación, centros de
        conciliación, acuerdos legales y resolución de conflictos en Colombia.
      </motion.h3>

      {/* TÍTULO SEO */}
      <motion.h2
        id="faq-title"
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Preguntas frecuentes sobre conciliación extrajudicial en Colombia,
        audiencias, actas y resolución de conflictos
      </motion.h2>

      {/* ACORDEÓN */}
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <motion.article
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <button
              className={styles.accordionButton}
              itemProp="name"
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              {item.question}

              <motion.span
                className={styles.icon}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
              >
                {activeIndex === index ? "-" : "+"}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={styles.accordionContent}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
