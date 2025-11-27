import styles from "../styles/AboutSection.module.css";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* TEXTO */}
        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            Comprometidos con soluciones efectivas y profesionales
          </h2>

          <p className={styles.description}>
            En Sol Centro de Conciliación brindamos mecanismos alternativos de
            resolución de conflictos con enfoque en la eficiencia, la
            transparencia y el acompañamiento personalizado. Nuestro compromiso
            es ofrecer procesos claros, ágiles y fundamentados en la normativa
            vigente.
          </p>

          <ul className={styles.list}>
            <li>
              <span>01.</span> Tiempos de resolución significativamente menores
              que los procesos judiciales.
            </li>
            <li>
              <span>02.</span> Estrategias jurídicas definidas desde la primera
              sesión.
            </li>
            <li>
              <span>03.</span> Comunicación directa, clara y profesional.
            </li>
            <li>
              <span>04.</span> Acompañamiento integral en cada etapa del
              proceso.
            </li>
            <li>
              <span>05.</span> Resultados verificables en acuerdos y
              recuperaciones efectivas.
            </li>
          </ul>
        </div>

        {/* IMAGEN */}
        <div className={styles.imageColumn}>
          <Image
            src="/Equipo_Sol_4_3.webp"
            alt="Equipo SOL"
            width={500}
            height={650}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
