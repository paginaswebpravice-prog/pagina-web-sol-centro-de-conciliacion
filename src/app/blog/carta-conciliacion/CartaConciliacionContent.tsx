"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function CartaConciliacion() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Carta de conciliación en Colombia: modelo, formato y guía completa 2026",
    description:
      "Aprende cómo redactar una carta de conciliación en Colombia con ejemplos, formato, recomendaciones legales y modelos utilizados en Bogotá y otras ciudades.",
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
        "https://solcentrodeconciliacion.com/carta-de-conciliacion-colombia",
    },
    about: [
      "Carta de conciliación",
      "Conciliación extrajudicial en Colombia",
      "Invitación a conciliación",
      "Centro de conciliación en Bogotá",
    ],
    mentions: [
      "Bogotá",
      "Colombia",
      "Conciliación civil",
      "Conciliación comercial",
      "Acuerdo de pago",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es una carta de conciliación en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es un documento mediante el cual una persona o empresa invita formalmente a otra parte a resolver un conflicto antes de acudir a un proceso judicial.",
        },
      },
      {
        "@type": "Question",
        name: "¿La carta de conciliación tiene validez legal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Aunque la carta por sí sola no equivale a un acta de conciliación, sirve como soporte del intento de solución amistosa del conflicto.",
        },
      },
      {
        "@type": "Question",
        name: "¿En Bogotá se puede hacer conciliación virtual?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Muchos centros de conciliación en Bogotá y Colombia permiten audiencias virtuales mediante videollamada.",
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
          __html: JSON.stringify(schemaData),
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
          id="carta-conciliacion"
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.badge}>
            Guía legal de conciliación en Bogotá y Colombia
          </div>

          <motion.h1 className={styles.title} itemProp="headline">
            Carta de conciliación en Colombia: modelo, formato y guía completa
            2026
          </motion.h1>

          <motion.p className={styles.text} itemProp="description">
            La <strong>carta de conciliación en Colombia</strong> es un
            documento utilizado para invitar formalmente a una persona, empresa
            o entidad a resolver un conflicto de manera voluntaria antes de
            acudir a un proceso judicial. En ciudades como{" "}
            <strong>Bogotá</strong>, Medellín, Cali, Barranquilla y otras
            ciudades de <strong>Colombia</strong>, este documento es ampliamente
            utilizado para conflictos civiles, comerciales, familiares,
            laborales y de arrendamiento.
          </motion.p>

          <motion.p className={styles.text}>
            Muchas búsquedas en Google relacionadas con{" "}
            <strong>“modelo carta de conciliación Colombia”</strong>,{" "}
            <strong>“invitación a conciliación Bogotá”</strong> o{" "}
            <strong>“cómo hacer una carta de conciliación”</strong> tienen el
            mismo objetivo: encontrar un formato claro que permita iniciar una
            negociación formal y demostrar intención de resolver el problema sin
            necesidad de demandar.
          </motion.p>

          <motion.p className={styles.text}>
            En Colombia, especialmente en Bogotá, muchas conciliaciones
            extrajudiciales comienzan precisamente con una carta o invitación
            previa. Este documento permite establecer una propuesta inicial,
            dejar evidencia de comunicación y abrir la posibilidad de llegar a
            un acuerdo antes de acudir a un juez.
          </motion.p>

          <div className={styles.highlight}>
            <p>
              La conciliación extrajudicial en Colombia es uno de los mecanismos
              más utilizados para resolver conflictos legales de forma rápida,
              económica y con plena validez jurídica.
            </p>
          </div>

          <motion.h2 className={styles.subTitle}>
            ¿Para qué sirve una carta de conciliación en Colombia?
          </motion.h2>

          <motion.p className={styles.text}>
            La carta de conciliación sirve para comunicar formalmente la
            existencia de un conflicto y proponer una solución amistosa antes de
            iniciar un proceso judicial. Este documento puede utilizarse tanto
            por personas naturales como por empresas.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá y otras ciudades de Colombia, es común utilizar cartas de
            conciliación para:
          </motion.p>

          <ul className={styles.list}>
            <li>Acuerdos de pago y recuperación de cartera.</li>
            <li>Conflictos por arrendamientos.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Problemas entre socios.</li>
            <li>Disputas comerciales.</li>
            <li>Conflictos civiles.</li>
            <li>Problemas familiares.</li>
            <li>Acuerdos laborales.</li>
            <li>Obligaciones pendientes.</li>
            <li>Negociación de deudas.</li>
          </ul>

          <motion.p className={styles.text}>
            Además de buscar una solución rápida, la carta también puede servir
            como soporte probatorio dentro de un proceso judicial futuro,
            demostrando que existió intención de resolver el conflicto de forma
            pacífica.
          </motion.p>

          <motion.h2 className={styles.subTitle}>
            ¿Qué debe contener una carta de conciliación?
          </motion.h2>

          <motion.p className={styles.text}>
            Una carta de conciliación bien redactada debe ser clara, concreta y
            profesional. En Colombia, especialmente cuando se busca llegar a un
            acuerdo ejecutable posteriormente, es importante incluir información
            precisa.
          </motion.p>

          <div className={styles.infoBox}>
            <h3>Elementos recomendados</h3>

            <ul className={styles.list}>
              <li>Ciudad y fecha.</li>
              <li>Nombre completo de las partes.</li>
              <li>Documento o NIT.</li>
              <li>Descripción breve del conflicto.</li>
              <li>Propuesta de solución.</li>
              <li>Montos y fechas concretas.</li>
              <li>Forma de pago o cumplimiento.</li>
              <li>Invitación formal a conciliación.</li>
              <li>Datos de contacto.</li>
              <li>Firma.</li>
            </ul>
          </div>

          <motion.h2 className={styles.subTitle}>
            Modelo de carta de conciliación en Colombia
          </motion.h2>

          <motion.pre className={styles.pre}>
            {`[Ciudad], [dd] de [mes] de [aaaa]

Señor(a): [Nombre]
Documento / NIT: [●]
Dirección: [●]
Correo electrónico: [●]

Asunto: Invitación formal a conciliación en Colombia

Cordial saludo,

Por medio de la presente me permito invitarle formalmente a una audiencia de conciliación con el objetivo de resolver de manera amistosa y eficiente el conflicto relacionado con:

[Descripción breve del conflicto].

La intención de esta comunicación es buscar una solución pacífica, evitar mayores costos jurídicos y llegar a un acuerdo con plena validez legal en Bogotá o Colombia.

PROPUESTA DE SOLUCIÓN

1. Pago / obligación:
[Describir obligación].

2. Valor:
$[●] COP.

3. Forma de pago:
[Transferencia / efectivo / cuotas / entrega].

4. Fechas:
[Detalle de fechas].

5. Condiciones adicionales:
[●].

Solicito cordialmente confirmar disponibilidad para programar audiencia de conciliación ante un Centro de Conciliación autorizado en Bogotá o en cualquier ciudad de Colombia.

Quedo atento(a) a su respuesta.

Atentamente,

[Firma]

[Nombre completo]
[CC]
[Teléfono]
[Correo electrónico]`}
          </motion.pre>

          <motion.h2 className={styles.subTitle}>
            Recomendaciones para enviar una invitación a conciliación
          </motion.h2>

          <motion.p className={styles.text}>
            En Colombia, especialmente en Bogotá, es recomendable conservar
            evidencia del envío de la carta. Esto puede ser útil posteriormente
            si el conflicto termina en proceso judicial.
          </motion.p>

          <ul className={styles.list}>
            <li>Enviar por correo electrónico.</li>
            <li>Usar correo certificado.</li>
            <li>Guardar comprobantes de envío.</li>
            <li>Conservar conversaciones relacionadas.</li>
            <li>No utilizar lenguaje agresivo.</li>
            <li>Proponer soluciones concretas.</li>
            <li>Definir fechas y valores exactos.</li>
          </ul>

          <motion.h2 className={styles.subTitle}>
            Conciliación extrajudicial en Bogotá y Colombia
          </motion.h2>

          <motion.p className={styles.text}>
            La conciliación extrajudicial en Colombia es un mecanismo legal
            mediante el cual las partes intentan resolver un conflicto con la
            ayuda de un conciliador autorizado. Si se llega a un acuerdo, este
            queda contenido en un acta de conciliación con efectos jurídicos y
            fuerza ejecutiva.
          </motion.p>

          <motion.p className={styles.text}>
            En Bogotá, la conciliación es ampliamente utilizada por empresas,
            abogados y ciudadanos para resolver conflictos relacionados con
            cartera, arrendamientos, obligaciones civiles, contratos y disputas
            comerciales.
          </motion.p>

          <motion.p className={styles.text}>
            Muchas personas buscan en Google términos como{" "}
            <strong>“centro de conciliación en Bogotá”</strong>,{" "}
            <strong>“conciliación extrajudicial Colombia”</strong> o{" "}
            <strong>“modelo carta invitación conciliación”</strong>, por lo que
            incluir información detallada y contextualizada ayuda tanto al
            posicionamiento SEO tradicional como a la visibilidad en buscadores
            de IA.
          </motion.p>

          <div className={styles.cta}>
            <h3>¿Necesitas ayuda para redactar una carta de conciliación?</h3>

            <p>
              Recibe orientación sobre conciliación extrajudicial, acuerdos de
              pago, conflictos civiles, comerciales y familiares en Bogotá y
              toda Colombia.
            </p>

            <a
              href="https://api.whatsapp.com/send/?phone=573232904786"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Solicitar asesoría por WhatsApp
            </a>
          </div>

          <motion.h2 className={styles.subTitle}>
            Preguntas frecuentes sobre cartas de conciliación
          </motion.h2>

          <div className={styles.faq}>
            <div className={styles.faqItem}>
              <h4>
                ¿La carta de conciliación reemplaza el acta de conciliación?
              </h4>

              <p>
                No. La carta es una invitación o propuesta inicial. El documento
                con efectos ejecutivos es el acta de conciliación firmada ante
                un conciliador autorizado.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>
                ¿Se puede enviar una carta de conciliación por correo
                electrónico?
              </h4>

              <p>
                Sí. En Colombia es común enviar invitaciones a conciliación por
                correo electrónico siempre que pueda conservarse evidencia del
                envío.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>¿Qué pasa si la otra persona no responde?</h4>

              <p>
                La parte interesada puede continuar el trámite ante un centro de
                conciliación o iniciar acciones judiciales según el caso.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h4>¿En Bogotá existen conciliaciones virtuales?</h4>

              <p>
                Sí. Muchos centros de conciliación en Bogotá y Colombia realizan
                audiencias virtuales mediante videollamadas.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
