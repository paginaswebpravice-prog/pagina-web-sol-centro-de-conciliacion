import Link from "next/link";
import styles from "../styles/OurTeamSection.module.css";

const team = [
  { name: "Harrison Calderon", role: "Abogado", image: "/doc-harrison.jpg" },
  { name: "Leidy Tirado", role: "CCO & Abogada", image: "/doc-leidy.jpeg" },
  { name: "Angie Rivera", role: "CCO & Abogada", image: "/doc-angie.jpg" },
];

export default function OurTeamSection() {
  return (
    <section className={styles.section}>
      <span className={styles.smallTitle}>NUESTROS EXPERTOS</span>
      <h2 className={styles.title}>Conoce nuestro equipo</h2>
      <p className={styles.description}>
        Comprometidos a ayudar a las personas a recibir servicios especializados
        en resolución alternativa de conflictos con altos estándares de calidad,
        ética y profesionalismo.
      </p>

      <div className={styles.grid}>
        {team.map((member, index) => (
          <div key={index} className={styles.card}>
            <img
              src={member.image}
              className={styles.image}
              alt={member.name}
            />

            <div className={styles.cardText}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/about">
        <button className={styles.button}>CONOCE AL EQUIPO</button>
      </Link>
    </section>
  );
}
