"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ActaDeConciliacionEfectosYCumplimientoContent() {
  return (
    <section id="acta" className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className={styles.badge}>
            Guía práctica de conciliación en Colombia
          </span>

          <h2 className={styles.title}>
            Acta de conciliación: efectos legales y cumplimiento en Colombia
          </h2>

          <p className={styles.paragraph}>
            El <strong>acta de conciliación en Colombia</strong> es el documento
            más importante dentro de un proceso conciliatorio, ya sea en{" "}
            <strong>Bogotá</strong> o en cualquier ciudad del país. Allí quedan
            consignados los acuerdos alcanzados por las partes y las
            obligaciones que cada una deberá cumplir después de finalizada la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Muchas personas creen que una conciliación es simplemente una
            conversación informal, pero en realidad el acta tiene{" "}
            <strong>plena validez jurídica</strong>. Esto significa que lo que
            quede firmado puede exigirse legalmente si una de las partes
            incumple lo pactado.
          </p>

          <p className={styles.paragraph}>
            En conflictos relacionados con deudas, contratos, arrendamientos,
            alimentos, conflictos familiares, obligaciones comerciales,
            indemnizaciones laborales o acuerdos de pago, el acta de
            conciliación permite cerrar el conflicto de forma más rápida que un
            proceso judicial tradicional.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong>

            <p>
              Un acta bien redactada debe dejar completamente claro quién debe
              cumplir, qué debe cumplir, cuándo debe hacerlo y cómo debe
              realizar el cumplimiento. Mientras más específica sea el acta, más
              fácil será exigirla judicialmente en caso de incumplimiento.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Qué debe tener un acta de conciliación bien redactada
          </h3>

          <p className={styles.paragraph}>
            Uno de los errores más comunes en conciliación es firmar acuerdos
            ambiguos o incompletos. Cuando las obligaciones no quedan claramente
            definidas, pueden surgir nuevos conflictos o dificultades al momento
            de exigir judicialmente el cumplimiento.
          </p>

          <p className={styles.paragraph}>
            En Colombia, un acta de conciliación sólida normalmente incluye
            información detallada sobre obligaciones, plazos, valores y formas
            de cumplimiento.
          </p>

          <ul className={styles.list}>
            <li>Identificación completa de las partes involucradas.</li>

            <li>
              Explicación breve del conflicto o situación que originó la
              conciliación.
            </li>

            <li>Valores exactos que deberán pagarse o entregarse.</li>

            <li>Fechas concretas de cumplimiento y cronogramas de pago.</li>

            <li>Medio de pago, cuentas bancarias o lugar de entrega.</li>

            <li>Acuerdos sobre cuotas, intereses o plazos especiales.</li>

            <li>Consecuencias frente a posibles incumplimientos.</li>

            <li>Referencia a documentos anexos o soportes relacionados.</li>

            <li>Firmas de las partes y del conciliador autorizado.</li>
          </ul>

          <div className={styles.note}>
            Entre más específico sea el acuerdo, menor será el riesgo de futuras
            discusiones sobre interpretación o incumplimiento.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Efectos legales del acta de conciliación en Colombia
          </h3>

          <p className={styles.paragraph}>
            El acta de conciliación no funciona como una simple promesa verbal.
            En Colombia, este documento tiene efectos jurídicos muy importantes
            y produce consecuencias legales similares a las de una decisión
            judicial.
          </p>

          <div className={styles.effectsGrid}>
            <div className={styles.effectCard}>
              <h4>Hace tránsito a cosa juzgada</h4>

              <p>
                Significa que el conflicto conciliado no puede discutirse
                nuevamente sobre los mismos hechos y entre las mismas partes.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Presta mérito ejecutivo</h4>

              <p>
                Permite iniciar un proceso ejecutivo ante un juez si una de las
                partes incumple el acuerdo firmado.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Obliga legalmente a las partes</h4>

              <p>
                Las obligaciones pactadas dejan de ser simples compromisos y se
                convierten en obligaciones exigibles legalmente.
              </p>
            </div>

            <div className={styles.effectCard}>
              <h4>Reduce futuros conflictos</h4>

              <p>
                Un acuerdo claro evita nuevas discusiones y brinda mayor
                seguridad jurídica para ambas partes.
              </p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Gracias a estos efectos legales, muchas personas y empresas en
            Bogotá utilizan la conciliación como mecanismo para resolver
            conflictos sin necesidad de pasar años en un proceso judicial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Qué pasa si no cumplen un acta de conciliación
          </h3>

          <p className={styles.paragraph}>
            Cuando una persona incumple un acuerdo firmado en un acta de
            conciliación en Colombia, la otra parte puede acudir ante un juez
            para exigir el cumplimiento de las obligaciones pactadas.
          </p>

          <p className={styles.paragraph}>
            Dependiendo del caso, el juez puede ordenar medidas como embargos,
            pagos obligatorios, retención de bienes o ejecución de obligaciones
            económicas contenidas en el acta.
          </p>

          <p className={styles.paragraph}>
            Precisamente por eso la redacción del documento es tan importante.
            Si el acta contiene fechas claras, valores definidos y obligaciones
            específicas, el proceso ejecutivo suele ser mucho más sencillo.
          </p>

          <div className={styles.warningBox}>
            <strong>Evita acuerdos ambiguos.</strong>

            <p>
              Expresiones como “pagará más adelante”, “entregará cuando pueda” o
              “cumplirá próximamente” generan problemas jurídicos porque no
              establecen obligaciones verificables.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Recomendaciones antes de firmar un acta de conciliación
          </h3>

          <p className={styles.paragraph}>
            Antes de firmar cualquier acuerdo en una audiencia de conciliación,
            es importante revisar cuidadosamente cada cláusula y asegurarse de
            entender completamente las obligaciones asumidas.
          </p>

          <ul className={styles.list}>
            <li>Verifica que los valores estén correctos.</li>

            <li>Revisa que las fechas de pago o cumplimiento sean claras.</li>

            <li>
              Confirma que las cuotas, intereses o condiciones especiales estén
              correctamente escritas.
            </li>

            <li>Asegúrate de que los acuerdos sean posibles de cumplir.</li>

            <li>Conserva copia física y digital del acta firmada.</li>

            <li>
              Solicita aclaraciones antes de firmar cualquier punto confuso.
            </li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.faqSection}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subtitle}>
            Preguntas frecuentes sobre el acta de conciliación en Colombia
          </h3>

          <div className={styles.faqItem}>
            <h4>¿El acta de conciliación presta mérito ejecutivo?</h4>

            <p>
              Sí. En Colombia, el acta de conciliación puede utilizarse para
              iniciar un proceso ejecutivo si existe incumplimiento.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿El acta tiene la misma validez que una sentencia?</h4>

            <p>
              Tiene importantes efectos jurídicos, incluyendo cosa juzgada y
              obligatoriedad para las partes.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿Se puede exigir judicialmente el cumplimiento?</h4>

            <p>
              Sí. Si una parte incumple, el acuerdo puede ejecutarse ante un
              juez en Colombia.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h4>¿La conciliación virtual también genera un acta válida?</h4>

            <p>
              Sí. Las actas de conciliación virtual tienen la misma validez
              legal que las realizadas presencialmente.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <strong className={styles.ctaTitle}>
              ¿Necesitas revisar o redactar un acta de conciliación?
            </strong>

            <p className={styles.ctaText}>
              Recibe orientación sobre acuerdos de pago, redacción de cláusulas,
              cumplimiento de obligaciones y ejecución de actas de conciliación
              en Bogotá y Colombia.
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </motion.div>
      </div>
    </section>
  );
}
