"use client";

import Link from "next/link";
import styles from "./blog.module.css";
import { motion } from "framer-motion";

type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
};

const generalPosts: BlogPost[] = [
  {
    title: "¿Qué es la conciliación en Colombia y para qué sirve realmente?",
    slug: "que-es-la-conciliacion",
    excerpt:
      "Conoce cómo funciona la conciliación extrajudicial y cuándo puede ayudarte a evitar procesos judiciales largos.",
  },
  {
    title: "¿Cuándo conviene conciliar? Casos donde sí funciona",
    slug: "cuando-conviene-conciliar",
    excerpt:
      "Descubre en qué situaciones la conciliación puede resolver conflictos familiares, civiles y laborales.",
  },
  {
    title: "¿Qué asuntos se pueden conciliar en Colombia? (Lista completa)",
    slug: "que-asuntos-se-pueden-conciliar",
    excerpt:
      "Consulta qué conflictos pueden resolverse mediante conciliación en Colombia y cuáles requieren demanda.",
  },
  {
    title: "Conciliación paso a paso en Colombia: guía completa",
    slug: "paso-a-paso-del-tramite",
    excerpt:
      "Aprende cómo iniciar una conciliación, qué documentos necesitas y cómo se desarrolla la audiencia.",
  },
  {
    title: "Documentos clave para una conciliación exitosa",
    slug: "documentos-y-evidencia-util",
    excerpt:
      "Conoce qué pruebas y documentos pueden fortalecer tu posición durante la conciliación.",
  },
  {
    title: "¿Cómo es una audiencia de conciliación? Presencial vs virtual",
    slug: "como-es-la-audiencia",
    excerpt:
      "Descubre cómo funcionan las audiencias de conciliación y sus diferencias.",
  },
  {
    title: "Acta de conciliación: efectos legales y cómo hacerla cumplir",
    slug: "acta-de-conciliacion-efectos-y-cumplimiento",
    excerpt:
      "Entiende el valor jurídico del acta y qué hacer en caso de incumplimiento.",
  },
  {
    title: "Errores comunes en conciliación (y cómo evitarlos)",
    slug: "errores-comunes-y-como-evitarlos",
    excerpt:
      "Evita errores frecuentes que pueden afectar el resultado de una conciliación.",
  },
  {
    title: "Preguntas frecuentes sobre conciliación en Colombia",
    slug: "preguntas-frecuentes",
    excerpt:
      "Resolvemos las dudas más comunes sobre conciliación y resolución de conflictos.",
  },
];

const juridicoPosts: BlogPost[] = [
  {
    title: "Modelo de acta de conciliación en Colombia (ejemplo listo)",
    slug: "modelo-acta-conciliacion",
    excerpt:
      "Accede a un ejemplo práctico de acta de conciliación listo para usar.",
  },
  {
    title: "Actas de conciliación: ejemplos reales y recomendaciones",
    slug: "actas-ejemplos",
    excerpt:
      "Conoce ejemplos prácticos de actas utilizadas en conciliaciones reales.",
  },
  {
    title: "Acta de conciliación entre compañeros permanentes (modelo y guía)",
    slug: "acta-companeros-permanentes",
    excerpt:
      "Modelo práctico para acuerdos entre compañeros permanentes en Colombia.",
  },
  {
    title: "Acta de conciliación de alimentos (ejemplo + Artículo 411 C.C.)",
    slug: "acta-alimentos",
    excerpt:
      "Ejemplo de conciliación de alimentos y explicación legal aplicable.",
  },
  {
    title: "Acta de no conciliación laboral: modelo y cuándo usarla",
    slug: "acta-no-conciliacion-laboral",
    excerpt:
      "Aprende cuándo se utiliza una constancia de no conciliación laboral.",
  },
  {
    title: "Carta de conciliación en Colombia: modelo y cómo redactarla",
    slug: "carta-conciliacion",
    excerpt:
      "Guía práctica para redactar correctamente una solicitud de conciliación.",
  },
  {
    title: "Acta de conciliación civil: ejemplo práctico",
    slug: "acta-civil",
    excerpt:
      "Modelo de conciliación civil para conflictos económicos y contractuales.",
  },
  {
    title: "Acta de conciliación familiar: modelo y recomendaciones legales",
    slug: "documento-familia",
    excerpt:
      "Ejemplo práctico de conciliación familiar para alimentos y custodia.",
  },
  {
    title: "Amigable composición en Colombia: qué es y cómo funciona",
    slug: "amigable-composicion",
    excerpt:
      "Conoce cómo funciona este mecanismo alternativo de solución de conflictos.",
  },
  {
    title: "Audiencia de conciliación en Colombia: cómo funciona paso a paso",
    slug: "audiencia",
    excerpt: "Todo lo que debes saber sobre una audiencia de conciliación.",
  },
  {
    title: "Poder para audiencia de conciliación: modelo listo para usar",
    slug: "poder",
    excerpt:
      "Modelo práctico de poder para representación en audiencia de conciliación.",
  },
  {
    title: "Citación a audiencia de conciliación: modelo y ejemplo",
    slug: "citacion",
    excerpt:
      "Ejemplo práctico de citación para audiencia de conciliación en Colombia.",
  },
];

export default function BlogContent() {
  return (
    <section className={styles.blogSection}>
      {/* ================= HEADER ================= */}

      <div className={styles.header}>
        <h3 className={styles.subtitle}>
          Conciliación en Colombia: guías legales, modelos y resolución de
          conflictos
        </h3>

        <h1 className={styles.heading}>
          Aprende conciliación paso a paso y evita procesos judiciales
        </h1>

        <p className={styles.intro}>
          Explora artículos jurídicos, modelos de actas, audiencias y guías
          prácticas sobre conciliación extrajudicial en Colombia. Encuentra
          información útil para resolver conflictos familiares, civiles,
          laborales y comerciales de manera rápida y legal.
        </p>
      </div>

      {/* ================= SECCIÓN 1 ================= */}

      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={styles.badges}>
            <span>Guía práctica</span>
            <span>Inicio rápido</span>
          </div>

          <h2>Guía completa de conciliación en Colombia</h2>

          <p>
            Aprende cómo funciona la conciliación extrajudicial, cuándo conviene
            acudir y qué debes tener en cuenta antes de iniciar un proceso
            conciliatorio.
          </p>
        </div>

        <div className={styles.grid}>
          {generalPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <span className={styles.readMore}>Leer guía →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= SECCIÓN 2 ================= */}

      <div className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <div className={`${styles.badges} ${styles.juridicoBadges}`}>
            <span>Modelos legales</span>
            <span>Ejemplos reales</span>
          </div>

          <h2>Modelos, actas y fundamentos legales de conciliación</h2>

          <p>
            Encuentra ejemplos prácticos, modelos jurídicos y documentos
            utilizados en procesos de conciliación extrajudicial en Colombia.
          </p>
        </div>

        <div className={styles.grid}>
          {juridicoPosts.map((post) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardContent}>
                  <h3>{post.title}</h3>

                  <p>{post.excerpt}</p>

                  <span className={styles.readMore}>Ver modelo →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
