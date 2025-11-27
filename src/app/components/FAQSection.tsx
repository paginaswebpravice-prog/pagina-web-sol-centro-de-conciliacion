"use client";

import { useState } from "react";
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
    <>
      <section className={styles.faqSection}>
        <h3 className={styles.subtitle}>
          Tus preguntas, respondidas con claridad
        </h3>
        <h2 className={styles.heading}>PREGUNTAS FRECUENTES</h2>
        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.accordionButton}
                onClick={() => toggleIndex(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-header-${index}`}
              >
                {item.question}
                <span className={styles.icon}>
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-header-${index}`}
                className={styles.accordionContent}
                style={{ maxHeight: activeIndex === index ? "500px" : "0" }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
