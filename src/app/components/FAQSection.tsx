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
    question: "¿Necesito un abogado para presentar una conciliación?",
    answer:
      "No siempre. Si existen bienes, hijas o hijos menores, o desacuerdos materiales, es recomendable contar con asesoría para proteger tus derechos y elegir el mecanismo adecuado.",
  },
  {
    question: "¿Cuál es la diferencia entre divorcio y separación de cuerpos?",
    answer:
      "La separación de cuerpos suspende la vida en común; el divorcio disuelve el vínculo matrimonial. Te orientamos para identificar el trámite que corresponde a tu caso.",
  },
  {
    question: "¿Cómo se define la custodia de hijas e hijos?",
    answer:
      "Se privilegia el interés superior del menor. En conciliación, las partes pueden acordar custodia y visitas con acompañamiento profesional.",
  },
  {
    question: "¿Cómo se reparten los bienes?",
    answer:
      "Puede acordarse en conciliación según el régimen patrimonial aplicable. Evaluamos tu situación y proponemos un acuerdo ágil y seguro.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      {/* TÍTULOS */}
      <motion.h3
        className={styles.subtitle}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Tus preguntas, respondidas con claridad
      </motion.h3>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        PREGUNTAS FRECUENTES
      </motion.h2>

      {/* ACORDEÓN */}
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.accordionItem} ${
              activeIndex === index ? styles.active : ""
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            {/* BOTÓN */}
            <button
              className={styles.accordionButton}
              onClick={() => toggleIndex(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              {item.question}

              {/* ICONO ANIMADO */}
              <motion.span
                className={styles.icon}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {activeIndex === index ? "-" : "+"}
              </motion.span>
            </button>

            {/* CONTENIDO */}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
