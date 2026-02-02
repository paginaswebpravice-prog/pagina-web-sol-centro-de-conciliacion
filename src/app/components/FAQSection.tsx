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
    question: "¿Necesito un abogado para iniciar una conciliación en Colombia?",
    answer:
      "No siempre es obligatorio, pero contar con un abogado conciliador es altamente recomendable cuando existen bienes, hijos menores, obligaciones económicas o desacuerdos complejos. La asesoría legal garantiza que el acuerdo sea válido, equilibrado y conforme a la ley colombiana.",
  },
  {
    question: "¿Qué es la conciliación extrajudicial y para qué sirve?",
    answer:
      "La conciliación extrajudicial es un mecanismo alternativo de resolución de conflictos que permite a las partes llegar a acuerdos legales sin acudir a un proceso judicial. Sirve para ahorrar tiempo, costos y evitar litigios prolongados.",
  },
  {
    question: "¿Cuál es la diferencia entre divorcio y separación de cuerpos?",
    answer:
      "La separación de cuerpos suspende la convivencia, pero no disuelve el vínculo matrimonial. El divorcio, en cambio, pone fin legal al matrimonio. A través de la conciliación se puede definir cuál opción se ajusta mejor a cada situación familiar.",
  },
  {
    question:
      "¿Cómo se define la custodia y el régimen de visitas de los hijos?",
    answer:
      "En la conciliación se prioriza siempre el interés superior del menor. Las partes pueden acordar custodia, cuidado personal, régimen de visitas y responsabilidades parentales con acompañamiento jurídico especializado.",
  },
  {
    question: "¿Es posible fijar la cuota de alimentos mediante conciliación?",
    answer:
      "Sí. La conciliación es una vía eficaz para establecer cuotas de alimentos para niños, niñas y adolescentes, garantizando acuerdos claros, justos y de obligatorio cumplimiento legal.",
  },
  {
    question:
      "¿Qué pasa si una de las partes no cumple el acuerdo conciliatorio?",
    answer:
      "El acta de conciliación tiene fuerza legal y presta mérito ejecutivo. Esto significa que, en caso de incumplimiento, el acuerdo puede exigirse ante un juez sin necesidad de un nuevo proceso declarativo.",
  },
  {
    question: "¿Qué tipos de conflictos se pueden conciliar?",
    answer:
      "Se pueden conciliar asuntos civiles, comerciales, laborales, familiares, vecinales y de copropiedad, siempre que la ley lo permita. Cada caso es analizado para verificar su viabilidad jurídica.",
  },
  {
    question: "¿Cuánto tiempo tarda un proceso de conciliación?",
    answer:
      "Los procesos de conciliación suelen resolverse en menos tiempo que un juicio tradicional. En muchos casos, el conflicto puede solucionarse en una o pocas sesiones, dependiendo de la complejidad del asunto.",
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
        Resolvemos tus dudas legales paso a paso
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
        Preguntas frecuentes sobre conciliación y derecho de familia
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
