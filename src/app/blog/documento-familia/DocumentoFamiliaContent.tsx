"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es un acta de conciliación familiar en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es un documento legal donde las partes establecen acuerdos sobre alimentos, custodia, visitas y obligaciones familiares con validez jurídica en Colombia.",
      },
    },
    {
      "@type": "Question",
      name: "¿La conciliación familiar tiene validez legal en Bogotá?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. En Bogotá y Colombia, las actas de conciliación familiar tienen efectos legales y pueden exigirse judicialmente en caso de incumplimiento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué temas se pueden conciliar en familia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuota alimentaria, custodia, visitas, gastos escolares, comunicación entre padres y acuerdos de crianza.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Acta de conciliación familiar en Colombia: modelo, ejemplo y guía completa",
  description:
    "Modelo de acta de conciliación familiar en Colombia y Bogotá. Ejemplos sobre cuota alimentaria, custodia, visitas y acuerdos familiares con validez legal.",
  author: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
  publisher: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
};

export default function DocumentoFamiliaContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <div
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className={styles.container}>
          <motion.article
            id="documento-familia"
            className={styles.card}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className={styles.title} itemProp="headline">
              Acta de conciliación familiar en Colombia: modelo, ejemplo y guía
              completa
            </h1>

            <p className={styles.paragraph} itemProp="description">
              La <strong>conciliación familiar en Colombia</strong> es uno de
              los mecanismos legales más utilizados para resolver conflictos
              relacionados con{" "}
              <strong>
                cuota alimentaria, custodia de menores, régimen de visitas,
                obligaciones económicas y acuerdos de crianza
              </strong>
              . En ciudades como <strong>Bogotá</strong>, Medellín, Cali,
              Barranquilla y otras regiones de Colombia, miles de familias
              acuden cada año a centros de conciliación para evitar procesos
              judiciales largos y desgastantes.
            </p>

            <p className={styles.paragraph}>
              El <strong>acta de conciliación familiar</strong> permite dejar
              por escrito acuerdos claros y verificables entre padres,
              representantes legales o familiares. Este documento tiene plena{" "}
              <strong>validez jurídica en Colombia</strong> y puede ser exigido
              judicialmente en caso de incumplimiento.
            </p>

            <div className={styles.highlightBox}>
              <p>
                En Bogotá y Colombia, una conciliación familiar bien redactada
                ayuda a prevenir conflictos futuros y protege especialmente los
                derechos de los menores de edad.
              </p>
            </div>

            <h2 className={styles.subtitle}>
              ¿Qué es un acta de conciliación familiar en Colombia?
            </h2>

            <p className={styles.paragraph}>
              El acta de conciliación familiar es el documento oficial donde se
              registran los acuerdos alcanzados durante una audiencia de
              conciliación. Generalmente se utiliza para resolver conflictos
              relacionados con:
            </p>

            <ul className={styles.list}>
              <li>Cuota alimentaria en Colombia.</li>
              <li>Custodia y cuidado personal de menores.</li>
              <li>Régimen de visitas.</li>
              <li>Gastos médicos y escolares.</li>
              <li>Acuerdos de crianza compartida.</li>
              <li>Responsabilidades económicas.</li>
              <li>Comunicación entre los padres.</li>
              <li>Transporte y logística de visitas.</li>
              <li>Acuerdos entre compañeros permanentes.</li>
            </ul>

            <p className={styles.paragraph}>
              En muchos casos, la conciliación familiar en Bogotá evita que las
              partes tengan que acudir a un juez de familia, permitiendo
              soluciones más rápidas, económicas y enfocadas en el bienestar del
              menor.
            </p>

            <h2 className={styles.subtitle}>
              ¿Qué debe incluir un acta de conciliación familiar en Bogotá y
              Colombia?
            </h2>

            <p className={styles.paragraph}>
              Para que un acta de conciliación familiar tenga fuerza legal en
              Colombia, debe contener acuerdos claros, específicos y fácilmente
              verificables. Entre los elementos más importantes se encuentran:
            </p>

            <ul className={styles.list}>
              <li>Identificación completa de los padres o responsables.</li>
              <li>Datos del menor o menores involucrados.</li>
              <li>Definición clara de custodia y residencia.</li>
              <li>Horarios y condiciones de visitas.</li>
              <li>Valor exacto de cuota alimentaria.</li>
              <li>Forma y fecha de pago.</li>
              <li>Distribución de gastos extraordinarios.</li>
              <li>Acuerdos de comunicación.</li>
              <li>Consecuencias del incumplimiento.</li>
              <li>Firmas de las partes y del conciliador.</li>
            </ul>

            <div className={styles.note}>
              Consejo importante en Bogotá y Colombia: evita frases ambiguas
              como “cuando pueda”, “según disponibilidad” o “de vez en cuando”.
              Las obligaciones deben quedar completamente definidas.
            </div>

            <h2 className={styles.subtitle}>
              Modelo de acta de conciliación familiar en Colombia
            </h2>

            <p className={styles.paragraph}>
              A continuación encontrarás un ejemplo general de{" "}
              <strong>acta de conciliación familiar en Colombia</strong>. Este
              modelo puede servir como referencia para conciliaciones sobre
              alimentos, custodia, visitas y acuerdos familiares en Bogotá y
              otras ciudades del país.
            </p>

            <pre className={styles.pre}>
              {`ACTA DE CONCILIACIÓN FAMILIAR No. [●]

CIUDAD: Bogotá, Colombia
FECHA: [dd/mm/aaaa]

I. PARTES
Progenitor(a) A: [●] - CC [●]
Progenitor(a) B: [●] - CC [●]

Menor: [●] - Registro Civil / TI

II. OBJETO
Acuerdos relacionados con alimentos, custodia,
visitas y responsabilidades parentales.

III. ACUERDOS

1. CUSTODIA:
El menor residirá con [●].

2. VISITAS:
El progenitor B podrá compartir con el menor:
- Fines de semana: [●]
- Vacaciones: [●]
- Fechas especiales: [●]

3. CUOTA ALIMENTARIA:
Valor mensual: $[●] COP
Forma de pago: [transferencia/consignación]
Fecha máxima de pago: [●]

4. GASTOS EXTRAORDINARIOS:
Educación, salud y actividades extracurriculares
serán asumidos así: [●]% / [●]%.

5. COMUNICACIÓN:
Las partes se comunicarán por [medio].

6. INCUMPLIMIENTO:
El incumplimiento podrá exigirse judicialmente.

FIRMAS
_____________________
_____________________`}
            </pre>

            <h2 className={styles.subtitle}>
              Efectos legales del acta de conciliación familiar en Colombia
            </h2>

            <p className={styles.paragraph}>
              En Colombia, las actas de conciliación familiar tienen importantes
              efectos jurídicos. Una vez firmadas, las partes quedan obligadas a
              cumplir lo pactado.
            </p>

            <ul className={styles.list}>
              <li>Presta mérito ejecutivo.</li>
              <li>Hace tránsito a cosa juzgada.</li>
              <li>Puede ejecutarse judicialmente.</li>
              <li>Sirve como prueba legal ante jueces.</li>
              <li>Formaliza obligaciones familiares.</li>
            </ul>

            <p className={styles.paragraph}>
              Esto significa que si una persona incumple la cuota alimentaria,
              las visitas o cualquier otra obligación pactada, la otra parte
              puede iniciar acciones legales en Colombia para exigir el
              cumplimiento.
            </p>

            <h2 className={styles.subtitle}>
              Errores frecuentes en conciliaciones familiares en Bogotá
            </h2>

            <div className={styles.errorGrid}>
              <div className={styles.errorCard}>
                <h4>No definir horarios exactos</h4>
                <p>
                  Las visitas ambiguas generan nuevos conflictos familiares.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>No especificar gastos</h4>
                <p>
                  Muchos acuerdos fallan por no definir quién paga educación,
                  salud o transporte.
                </p>
              </div>

              <div className={styles.errorCard}>
                <h4>Usar acuerdos verbales</h4>
                <p>
                  En Colombia, dejar todo por escrito brinda mayor seguridad
                  jurídica.
                </p>
              </div>
            </div>

            <h2 className={styles.subtitle}>
              Preguntas frecuentes sobre conciliación familiar en Colombia
            </h2>

            <div className={styles.faqContainer}>
              <div className={styles.faqItem}>
                <h4>
                  ¿La conciliación familiar tiene validez legal en Colombia?
                </h4>

                <p>
                  Sí. Las actas de conciliación familiar tienen efectos legales
                  y pueden ejecutarse judicialmente.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Dónde se realiza una conciliación familiar en Bogotá?</h4>

                <p>
                  Puede realizarse en centros de conciliación, notarías,
                  consultorios jurídicos y entidades autorizadas en Colombia.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Se puede modificar una cuota alimentaria después?</h4>

                <p>
                  Sí. Si cambian las circunstancias económicas o familiares, las
                  partes pueden realizar una nueva conciliación.
                </p>
              </div>

              <div className={styles.faqItem}>
                <h4>¿Qué pasa si una persona incumple el acuerdo?</h4>

                <p>
                  El acta puede ejecutarse judicialmente ante un juez en
                  Colombia.
                </p>
              </div>
            </div>

            <div className={styles.cta}>
              <strong className={styles.ctaTitle}>
                Asesoría en conciliación familiar en Bogotá y Colombia
              </strong>

              <p className={styles.ctaText}>
                Recibe orientación sobre cuota alimentaria, custodia, visitas,
                acuerdos familiares y conciliación extrajudicial en Bogotá y
                cualquier ciudad de Colombia.
              </p>

              <ul className={styles.ctaList}>
                <li>Revisión de acuerdos familiares.</li>
                <li>Redacción de actas de conciliación.</li>
                <li>Asesoría en alimentos y custodia.</li>
                <li>Orientación jurídica en conflictos familiares.</li>
              </ul>

              <a
                href="https://api.whatsapp.com/send/?phone=573232904786"
                target="_blank"
                className={styles.ctaButton}
              >
                Solicitar asesoría por WhatsApp
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </>
  );
}
