"use client";

import { useState } from "react";
import styles from "../styles/CalculatorSection.module.css";
import { motion } from "framer-motion";

const handleClick = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=573232904786&text&type=phone_number&app_absent=0",
    "_blank"
  );
};

export default function CalculatorSection() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState<number | null>(null);
  const [base, setBase] = useState<number | null>(null);
  const [iva, setIva] = useState<number | null>(null);

  const formatNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");
    return cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatNumber(e.target.value);
    setAmount(formattedValue);
  };

  const handleCalculate = () => {
    const numericValue = Number(amount.replace(/\./g, ""));
    if (!numericValue) return;

    const baseCalc = Math.round(numericValue * 0.07);
    const ivaCalc = Math.round(baseCalc * 0.19);
    const totalCalc = Math.round(baseCalc + ivaCalc);

    setBase(baseCalc);
    setIva(ivaCalc);
    setTotal(totalCalc);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* ==========================
            COLUMNA IZQUIERDA (Card)
        ========================== */}
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Calculadora de Conciliación
          </motion.h2>

          <motion.label
            className={styles.checkboxLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <input type="checkbox" />
            Si el monto de la conciliación es indeterminado, seleccione esta
            opción
          </motion.label>

          <motion.label
            className={styles.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            Monto de la conciliación
          </motion.label>

          <motion.input
            className={styles.input}
            placeholder="Ej: 50.000"
            value={amount}
            onChange={handleAmountChange}
            inputMode="numeric"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />

          <motion.button
            onClick={handleCalculate}
            className={styles.button}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            Calcular
          </motion.button>

          {/* RESULTADOS CON EFECTO */}
          {total !== null && (
            <motion.div
              className={styles.results}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p>
                <strong>Base:</strong> COP {base?.toLocaleString("es-CO")}
              </p>
              <p>
                <strong>IVA:</strong> COP {iva?.toLocaleString("es-CO")}
              </p>
              <p className={styles.total}>
                Total: COP {total.toLocaleString("es-CO")}
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* ==========================
            COLUMNA DERECHA (Texto)
        ========================== */}
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className={styles.heading}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Conciliación que construye soluciones
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            En <strong>Sol Centro de Conciliación</strong> te ayudamos a
            resolver tus conflictos de forma pacífica y profesional.
          </motion.p>

          <motion.button
            className={styles.cta}
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Programe una consulta →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
