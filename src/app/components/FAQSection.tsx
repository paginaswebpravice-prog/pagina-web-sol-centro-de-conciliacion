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
    question: "¿Necesito un abogado para iniciar una conciliación?",
    answer:
      "No siempre es obligatorio, pero contar con asesoría legal es altamente recomendable cuando existen bienes, hijas o hijos menores, obligaciones económicas o desacuerdos relevantes. Un abogado te ayuda a proteger tus derechos y a estructurar un acuerdo válido y seguro.",
  },
  {
    question:
      "¿Cuál es la diferencia entre divorcio y separación de cuerpos en Colombia?",
    answer:
      "La separación de cuerpos suspende la convivencia, pero no disuelve el vínculo matrimonial. El divorcio, en cambio, pone fin legal al matrimonio. En conciliación puedes definir cuál trámite se ajusta mejor a tu situación particular.",
  },
  {
    question: "¿Cómo se define la custodia y el régimen de visitas?",
    answer:
      "Siempre se prioriza el interés superior del menor. A través de la conciliación, las partes pueden acordar custodia, visitas y responsabilidades parentales con el acompañamiento de profesionales especializados.",
  },
  {
    question: "¿Cómo se realiza la división de bienes en una conciliación?",
    answer:
      "La distribución de bienes puede acordarse mediante conciliación según el régimen patrimonial aplicable. Analizamos tu caso para proponer un acuerdo claro, equilibrado y jurídicamente válido.",
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
            <button
              className={styles.accordionButton}
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
