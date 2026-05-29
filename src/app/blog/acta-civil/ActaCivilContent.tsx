"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaCivilContent() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Acta de conciliación civil en Colombia: modelo, ejemplos y guía completa",
    description:
      "Guía completa sobre actas de conciliación civil en Colombia. Modelos, ejemplos, efectos legales, acuerdos de pago y conciliación civil en Bogotá.",
    author: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    publisher: {
      "@type": "Organization",
      name: "Centro de Conciliación",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://solcentrodeconciliacion.com/acta-conciliacion-civil-colombia",
    },
    about: [
      "Conciliación civil en Colombia",
      "Acta de conciliación",
      "Acuerdo de pago",
      "Conciliación extrajudicial",
      "Bogotá",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es un acta de conciliación civil en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento legal mediante el cual las partes dejan por escrito un acuerdo para resolver un conflicto civil sin acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿El acta de conciliación presta mérito ejecutivo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. En Colombia, el acta de conciliación puede ejecutarse judicialmente en caso de incumplimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué conflictos civiles pueden conciliarse en Bogotá y Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se pueden conciliar conflictos relacionados con deudas, contratos, arrendamientos, obligaciones civiles, daños y acuerdos de pago.",
        },
      },
    ],
  };

  return (
    <div
      className={styles.wrapper}
      itemScope
      itemType="https://schema.org/Article"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div className={styles.container}>
        <motion.article
          id="acta-civil"
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            Conciliación civil en Bogotá y Colombia
          </div>

          <motion.h1 className={styles.title} itemProp="headline">
            Acta de conciliación civil en Colombia: modelo, ejemplos y guía
            completa 2026
          </motion.h1>

          <motion.p className={styles.text} itemProp="description">
            El <strong>acta de conciliación civil en Colombia</strong> es uno de
            los mecanismos más utilizados para resolver conflictos relacionados
            con{" "}
            <strong>
              deudas, acuerdos de pago, contratos, incumplimientos,
              arrendamientos, obligaciones civiles y responsabilidad contractual
            </strong>
            . En ciudades como <strong>Bogotá</strong>, Medellín, Cali,
            Barranquilla y otras ciudades de <strong>Colombia</strong>, miles de
            personas y empresas utilizan la conciliación civil para solucionar
            disputas sin necesidad de iniciar un proceso judicial largo y
            costoso.
          </motion.p>

          <motion.p className={styles.text}>
            La conciliación civil permite transformar un conflicto en un acuerdo
            legal claro y verificable. Cuando las partes llegan a un consenso,
            el conciliador deja constancia en un{" "}
            <strong>acta de conciliación</strong>, documento que tiene efectos
            jurídicos y puede ejecutarse ante un juez en caso de incumplimiento.
          </motion.p>

          <motion.p className={styles.text}>
            Muchas búsquedas en Google relacionadas con{" "}
            <strong>“modelo de acta de conciliación civil”</strong>,{" "}
            <strong>“conciliación civil en Bogotá”</strong> o{" "}
            <strong>“acuerdo de pago conciliación Colombia”</strong> buscan
            precisamente entender cómo redactar correctamente un acuerdo para
            que sea válido legalmente y realmente sirva como herramienta de
            solución del conflicto.
          </motion.p>

          <div className={styles.highlightBox}>
            <p>
              En Colombia, especialmente en Bogotá, una conciliación civil bien
              redactada puede evitar años de litigio judicial y permitir
              acuerdos rápidos con plena validez legal.
            </p>
          </div>

          <motion.h2 className={styles.subtitle}>
            ¿Qué es la conciliación civil en Colombia?
          </motion.h2>

          <motion.p className={styles.text}>
            La conciliación civil es un mecanismo alternativo de solución de
            conflictos mediante el cual dos o más personas intentan resolver una
            disputa con la ayuda de un conciliador autorizado.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá y otras ciudades de Colombia, este procedimiento se usa
            frecuentemente cuando existen conflictos económicos o civiles entre
            particulares, empresas, arrendadores, arrendatarios, contratistas o
            acreedores.
          </motion.p>

          <motion.p className={styles.text}>
            A diferencia de un proceso judicial, la conciliación busca construir
            acuerdos voluntarios, ágiles y prácticos que beneficien a ambas
            partes y reduzcan costos legales.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            ¿Para qué sirve un acta de conciliación civil?
          </motion.h2>

          <motion.p className={styles.text}>
            El acta de conciliación civil sirve para dejar por escrito las
            obligaciones, compromisos y acuerdos alcanzados por las partes.
          </motion.p>

          <ul className={styles.list}>
            <li>Acuerdos de pago de deudas.</li>
            <li>Reconocimiento de obligaciones.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Entrega de bienes o servicios.</li>
            <li>Problemas de arrendamiento.</li>
            <li>Conflictos civiles entre particulares.</li>
            <li>Responsabilidad civil.</li>
            <li>Daños y perjuicios.</li>
            <li>Problemas comerciales.</li>
            <li>Negociación de cartera.</li>
          </ul>

          <motion.p className={styles.text}>
            En Bogotá, muchas empresas utilizan la conciliación civil como una
            herramienta para recuperar cartera y formalizar acuerdos de pago sin
            acudir inmediatamente a demandas ejecutivas.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            ¿Qué debe contener un acta de conciliación civil en Colombia?
          </motion.h2>

          <motion.p className={styles.text}>
            Un acta de conciliación bien estructurada es fundamental para evitar
            futuros problemas legales. En Colombia, especialmente cuando existen
            obligaciones económicas, el documento debe contener información
            precisa y verificable.
          </motion.p>

          <div className={styles.infoCard}>
            <h3>Elementos clave del acta</h3>

            <ul className={styles.list}>
              <li>Identificación completa de las partes.</li>
              <li>Descripción clara del conflicto.</li>
              <li>Reconocimiento de obligaciones.</li>
              <li>Valores exactos.</li>
              <li>Fechas concretas de cumplimiento.</li>
              <li>Forma de pago.</li>
              <li>Medios de verificación.</li>
              <li>Consecuencias del incumplimiento.</li>
              <li>Firmas de las partes.</li>
              <li>Firma del conciliador autorizado.</li>
            </ul>
          </div>

          <motion.div className={styles.note}>
            Consejo importante para conciliaciones en Bogotá y Colombia: evita
            obligaciones ambiguas. Mientras más específico sea el acuerdo, más
            fácil será exigir su cumplimiento judicialmente.
          </motion.div>

          <motion.h2 className={styles.subtitle}>
            Efectos legales del acta de conciliación civil
          </motion.h2>

          <motion.p className={styles.text}>
            En Colombia, el acta de conciliación civil tiene importantes efectos
            jurídicos reconocidos por la ley.
          </motion.p>

          <ul className={styles.list}>
            <li>Hace tránsito a cosa juzgada.</li>
            <li>Presta mérito ejecutivo.</li>
            <li>Obliga legalmente a las partes.</li>
            <li>Permite iniciar procesos ejecutivos.</li>
            <li>Puede servir como prueba judicial.</li>
            <li>Formaliza acuerdos civiles y comerciales.</li>
          </ul>

          <motion.p className={styles.text}>
            Esto significa que si una persona incumple el acuerdo, la otra parte
            puede acudir ante un juez para exigir el pago o cumplimiento de las
            obligaciones pactadas.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            Modelo de acta de conciliación civil en Colombia
          </motion.h2>

          <motion.pre className={styles.pre}>
            {`ACTA DE CONCILIACIÓN CIVIL No. [●]

CENTRO DE CONCILIACIÓN: [●]
CIUDAD: Bogotá, Colombia
FECHA: [●]

I. COMPARECIENTES

PARTE A (ACREEDOR):
Nombre: [●]
CC / NIT: [●]

PARTE B (DEUDOR):
Nombre: [●]
CC / NIT: [●]

II. OBJETO DE LA CONCILIACIÓN

Las partes manifiestan que existe un conflicto derivado de:
[describir obligación / contrato / deuda].

III. ACUERDOS

PRIMERO.
La parte deudora reconoce adeudar la suma de $[●] COP.

SEGUNDO.
La obligación será pagada en [●] cuotas mensuales de $[●].

TERCERO.
Los pagos deberán realizarse los días [●] de cada mes mediante transferencia bancaria a la cuenta [●].

CUARTO.
Cada pago será acreditado mediante comprobante enviado al correo [●].

QUINTO.
En caso de incumplimiento, la parte acreedora podrá exigir judicialmente el saldo total pendiente.

SEXTO.
Cumplido el acuerdo, las partes se declaran a paz y salvo.

Firmas…`}
          </motion.pre>

          <motion.h2 className={styles.subtitle}>
            ¿Qué pasa si incumplen el acta de conciliación?
          </motion.h2>

          <motion.p className={styles.text}>
            Si una de las partes incumple el acuerdo, la otra puede iniciar un{" "}
            <strong>proceso ejecutivo en Colombia</strong> para exigir el pago o
            cumplimiento de la obligación.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá y otras ciudades de Colombia, esto puede implicar medidas
            como embargo de cuentas bancarias, bienes o salarios dependiendo del
            tipo de obligación y del proceso judicial correspondiente.
          </motion.p>

          <motion.p className={styles.text}>
            Por esta razón, es fundamental que el acuerdo quede redactado de
            forma clara, precisa y profesional.
          </motion.p>

          <motion.h2 className={styles.subtitle}>
            Recomendaciones para una conciliación civil exitosa
          </motion.h2>

          <ul className={styles.list}>
            <li>Definir montos exactos.</li>
            <li>Establecer fechas específicas.</li>
            <li>Guardar soportes de pago.</li>
            <li>Usar medios verificables.</li>
            <li>Evitar obligaciones ambiguas.</li>
            <li>Conservar copia del acta.</li>
            <li>Revisar el acuerdo antes de firmar.</li>
            <li>Buscar orientación legal si es necesario.</li>
          </ul>

          <div className={styles.ctaBox}>
            <h3 className={styles.ctaTitle}>
              ¿Necesitas realizar una conciliación civil en Bogotá o Colombia?
            </h3>

            <p className={styles.ctaText}>
              Recibe orientación sobre acuerdos de pago, conciliación
              extrajudicial, recuperación de cartera, conflictos civiles y
              elaboración de actas de conciliación con validez legal.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>

          <motion.h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conciliación civil en Colombia
          </motion.h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>¿El acta de conciliación civil tiene validez legal?</h4>

              <p>
                Sí. En Colombia, el acta tiene efectos jurídicos y puede
                ejecutarse judicialmente en caso de incumplimiento.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>¿Las deudas pueden resolverse mediante conciliación?</h4>

              <p>
                Sí. Los acuerdos de pago y recuperación de cartera son algunos
                de los asuntos más conciliados en Bogotá y Colombia.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>¿Qué pasa si no cumplen el acuerdo?</h4>

              <p>
                La parte afectada puede iniciar un proceso ejecutivo para exigir
                judicialmente el cumplimiento del acta.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>¿Dónde se realiza una conciliación civil en Colombia?</h4>

              <p>
                Puede realizarse en centros de conciliación autorizados,
                consultorios jurídicos o entidades habilitadas en Bogotá y todo
                Colombia.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
