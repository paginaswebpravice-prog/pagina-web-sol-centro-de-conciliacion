"use client";

import { useState } from "react";
import styles from "../styles/CalculatorSection.module.css";

export default function CalculatorSection() {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState<number | null>(null);

  const handleCalculate = () => {
    const value = Number(amount.replace(".", ""));
    if (!value) return;

    const base = value * 0.07; // EJEMPLO
    const iva = base * 0.19;
    const result = base + iva;

    setTotal(result);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* COLUMNA IZQUIERDA */}
        <div className={styles.card}>
          <h2 className={styles.title}>Calculadora de Conciliación</h2>

          <label className={styles.checkboxLabel}>
            <input type="checkbox" />
            Si el monto de la conciliación es indeterminado, selecciones esta
            opcion
          </label>

          <label className={styles.label}>Monto de la conciliación</label>
          <input
            className={styles.input}
            placeholder="Ej: 50.000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <button onClick={handleCalculate} className={styles.button}>
            Calcular
          </button>

          {total && (
            <div className={styles.results}>
              <p>
                <strong>Base:</strong> COP {total.toLocaleString()}
              </p>
              <p>
                <strong>IVA:</strong> COP {(total * 0.19).toLocaleString()}
              </p>
              <p className={styles.total}>
                Total: COP {(total * 1.19).toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA */}
        <div className={styles.textBlock}>
          <h1 className={styles.heading}>
            Conciliación que construye soluciones
          </h1>
          <p className={styles.description}>
            En <strong>Sol Centro de Conciliación</strong> te ayudamos a
            resolver tus conflictos de forma pacífica y profesional. Promovemos
            el diálogo, la empatía y la eficiencia para alcanzar acuerdos que
            beneficien a todas las partes involucradas.
          </p>

          <button className={styles.cta}>Programa una consulta →</button>
        </div>
      </div>
    </section>
  );
}
