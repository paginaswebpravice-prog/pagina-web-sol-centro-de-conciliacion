"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function ModeloActaConciliacionContent() {
  return (
    <>
      <motion.article
        id="modelo-acta-conciliacion"
        className={styles.modeloCard}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* MODELO ACTA CONCILIACION */}
        <motion.h1 className={styles.modeloTitle} itemProp="headline">
          Modelo de acta de conciliación en Colombia (ejemplo y formato)
        </motion.h1>

        <motion.p className={styles.modeloText} itemProp="description">
          Si estás buscando un{" "}
          <strong>modelo de acta de conciliación en Colombia</strong>, aquí
          encontrarás un ejemplo general que puede utilizarse como referencia
          para conciliaciones civiles, comerciales o conflictos entre
          particulares.
        </motion.p>

        <motion.p className={styles.modeloText}>
          En ciudades como <strong>Bogotá</strong>, Medellín, Cali o cualquier
          parte de Colombia, el acta de conciliación es el documento donde queda
          registrado oficialmente el acuerdo al que llegan las partes para
          resolver un conflicto sin necesidad de acudir a un proceso judicial.
        </motion.p>

        <motion.p className={styles.modeloText}>
          La conciliación extrajudicial en Colombia se ha convertido en uno de
          los mecanismos más utilizados para solucionar conflictos civiles,
          familiares y comerciales de manera más rápida, económica y eficiente.
          Por esta razón, muchas personas buscan ejemplos y formatos de actas de
          conciliación que sirvan como referencia para entender cómo deben
          estructurarse correctamente.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Un acta de conciliación bien redactada debe dejar completamente claro:
          quién debe cumplir, qué debe cumplir, cuándo debe cumplir y cómo se
          verificará el cumplimiento. Cuando estos elementos no están claros, el
          acuerdo puede volverse difícil de ejecutar en caso de incumplimiento.
        </motion.p>

        <motion.div className={styles.highlightBox}>
          <p>
            Si estás buscando un{" "}
            <strong>modelo de acta de conciliación en Colombia</strong>, es
            importante saber que no existe un único formato aplicable para todos
            los casos. El contenido del documento dependerá del tipo de
            conflicto, de los acuerdos alcanzados y de los requisitos
            establecidos por la legislación colombiana. Sin embargo, toda acta
            debe contener una estructura mínima que garantice su validez
            jurídica y facilite su cumplimiento.
          </p>
        </motion.div>

        <motion.p className={styles.modeloNote}>
          Importante: en Colombia, el acta de conciliación tiene efectos legales
          y puede prestar mérito ejecutivo. Por eso es importante que las
          obligaciones, valores, fechas y condiciones queden escritas de forma
          clara y precisa.
        </motion.p>

        {/* QUE ES UN MODELO */}
        <section>
          <h2 className={styles.subTitle}>
            ¿Qué es un modelo de acta de conciliación?
          </h2>

          <p className={styles.modeloText}>
            Un modelo de acta de conciliación es un ejemplo que sirve como guía
            para comprender cómo se estructura el documento que recoge los
            acuerdos alcanzados entre las partes durante una audiencia de
            conciliación.
          </p>

          <p className={styles.modeloText}>
            Aunque existen diferentes modelos dependiendo del asunto objeto de
            la conciliación, todos comparten elementos esenciales como la
            identificación de las partes, la descripción del conflicto, los
            compromisos asumidos y la firma de quienes intervienen en el
            procedimiento.
          </p>

          <p className={styles.modeloText}>
            Este documento constituye la prueba escrita del acuerdo y, cuando
            cumple los requisitos legales, produce importantes efectos jurídicos
            para quienes participaron en la conciliación.
          </p>
        </section>

        {/* QUE DEBE CONTENER UN MODELO DE ACTA DE CONCILIACION */}
        <motion.h2 className={styles.subTitle}>
          ¿Qué debe contener un acta de conciliación en Colombia?
        </motion.h2>

        <motion.p className={styles.modeloText}>
          Un acta de conciliación válida en Bogotá y Colombia normalmente debe
          contener:
        </motion.p>

        <ul className={styles.list}>
          <li>Nombre del centro de conciliación.</li>
          <li>Ciudad y fecha de la audiencia.</li>
          <li>Datos completos de las partes.</li>
          <li>Descripción clara del conflicto.</li>
          <li>Obligaciones precisas y verificables.</li>
          <li>Valores y fechas de cumplimiento.</li>
          <li>Cláusulas de incumplimiento.</li>
          <li>Firma de las partes y del conciliador.</li>
        </ul>

        {/* QUE INFORMACIÓN DEBE CONTENER UN MODELO DE ACTA DE CONCILIACION */}
        <section>
          <h2 className={styles.subTitle}>
            ¿Qué información debe contener un acta de conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Fecha y lugar donde se realiza la audiencia.</li>

            <li>Identificación completa de las partes.</li>

            <li>Datos del conciliador.</li>

            <li>Descripción clara del conflicto.</li>

            <li>Acuerdos alcanzados.</li>

            <li>Plazos para cumplir cada obligación.</li>

            <li>Forma de pago cuando exista dinero de por medio.</li>

            <li>Consecuencias del incumplimiento.</li>

            <li>Firma de las partes.</li>

            <li>Firma del conciliador.</li>
          </ul>
        </section>

        {/* MODELO DE ACTA DE CONCILIACION EN COLOMBIA */}
        <motion.h2 className={styles.subTitle}>
          Modelo de acta de conciliación en Colombia (copiar y pegar)
        </motion.h2>

        <motion.div className={styles.documentBox}>
          <div className={styles.documentHeader}>
            <span>DOCUMENTO MODELO</span>
            <span>Uso referencial</span>
          </div>

          <pre>
            {`ACTA DE CONCILIACIÓN No. [●]

CENTRO DE CONCILIACIÓN: [Nombre del Centro]
CIUDAD: Bogotá, Colombia
FECHA: [dd/mm/aaaa]
HORA INICIO: [●]
HORA FIN: [●]
MODALIDAD: [Presencial / Virtual]

CONCILIADOR(A):
Nombre: [●]
Documento: [●]

I. COMPARECIENTES

PARTE SOLICITANTE:
Nombre: [●]
Identificación: [●]
Dirección: [●]
Teléfono/Correo: [●]

PARTE CITADA:
Nombre: [●]
Identificación: [●]
Dirección: [●]
Teléfono/Correo: [●]

II. OBJETO DE LA CONCILIACIÓN
Las partes manifiestan que el conflicto consiste en:
[Describir el problema en pocas líneas].

III. ACUERDO CONCILIATORIO

PRIMERA. OBLIGACIÓN
[Detalle exacto de la obligación].

SEGUNDA. VALOR Y FORMA DE PAGO
Valor total: $[●]
Forma de pago:
- Cuota 1: $[●] el [fecha]
- Cuota 2: $[●] el [fecha]

TERCERA. INCUMPLIMIENTO
En caso de incumplimiento, la parte cumplida podrá exigir el cumplimiento
por las vías legales correspondientes.

IV. FIRMA

Conciliador: _______________________

Parte A: ___________________________

Parte B: ___________________________`}
          </pre>
        </motion.div>

        {/* EN QUE CASOS PUEDE UTILIZARSE UN MODELO DE ACTA DE CONCILIACION */}
        <section>
          <h2 className={styles.subTitle}>
            ¿En qué casos puede utilizarse un acta de conciliación?
          </h2>

          <p className={styles.modeloText}>
            Las actas de conciliación pueden utilizarse en numerosos conflictos
            que permiten una solución negociada. Dependiendo del asunto, el
            contenido del acuerdo será diferente, pero la estructura del
            documento conserva la misma lógica jurídica.
          </p>

          <ul className={styles.list}>
            <li>Incumplimiento de contratos.</li>

            <li>Deudas entre particulares.</li>

            <li>Conflictos de arrendamiento.</li>

            <li>Responsabilidad civil.</li>

            <li>Accidentes de tránsito.</li>

            <li>Cuotas alimentarias.</li>

            <li>Custodia y visitas.</li>

            <li>Liquidación de sociedad patrimonial.</li>

            <li>Conflictos comerciales.</li>

            <li>Problemas entre vecinos.</li>
          </ul>
        </section>

        {/* CHECKLIST PARA QUE UN ACTA DE CONCILIACION SEA VALIDA EN COLOMBIA */}
        <motion.div className={styles.modeloCTA}>
          <strong>
            Checklist para que un acta de conciliación sea válida en Colombia
          </strong>

          <ul>
            <li>Identificación completa de las partes.</li>
            <li>Descripción clara del conflicto.</li>
            <li>Obligaciones específicas y medibles.</li>
            <li>Fechas exactas de cumplimiento.</li>
            <li>Forma de pago o forma de cumplimiento.</li>
            <li>Firmas de las partes y del conciliador.</li>
            <li>Redacción clara y sin ambigüedades.</li>
          </ul>
        </motion.div>

        {/* PARA QUE SIRVE UN ACTA DE CONCILIACION */}
        <motion.h2 className={styles.subTitle}>
          ¿Para qué sirve un acta de conciliación?
        </motion.h2>

        <motion.p className={styles.modeloText}>
          El acta de conciliación sirve para dejar constancia legal del acuerdo
          alcanzado entre las partes durante una audiencia de conciliación en
          Bogotá o cualquier ciudad de Colombia.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Este documento permite formalizar acuerdos relacionados con pagos,
          obligaciones económicas, conflictos familiares, contratos,
          arrendamientos y otras controversias conciliables.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Además, en caso de incumplimiento, el acta puede utilizarse como base
          para exigir judicialmente el cumplimiento del acuerdo alcanzado.
        </motion.p>

        {/* RECOMENDACIONES ANTES DE FIRMAR UN ACTA DE CONCILIACION */}
        <motion.h2 className={styles.subTitle}>
          Recomendaciones antes de firmar un acta de conciliación
        </motion.h2>

        <motion.p className={styles.modeloText}>
          Antes de firmar un acta de conciliación en Bogotá o Colombia, es
          recomendable revisar cuidadosamente que las obligaciones sean posibles
          de cumplir y que los plazos queden completamente definidos.
        </motion.p>

        <motion.p className={styles.modeloText}>
          También es importante verificar que exista una forma clara de probar
          el cumplimiento, especialmente cuando se trata de pagos, entregas,
          obligaciones comerciales o acuerdos familiares.
        </motion.p>

        <motion.p className={styles.modeloText}>
          Un buen acuerdo conciliatorio evita futuros conflictos y permite que
          las partes cierren el problema de forma definitiva, clara y segura.
        </motion.p>

        {/* ERRORES FREQUENTES AL ELABORAR UN ACTA DE CONCILIACION */}
        <section>
          <h2 className={styles.subTitle}>
            Errores frecuentes al elaborar un acta de conciliación
          </h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>Acuerdos poco claros</h3>

              <p>
                Los compromisos deben redactarse de forma precisa para evitar
                futuras interpretaciones.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>No establecer fechas</h3>

              <p>Todo acuerdo debe indicar cuándo y cómo deberá cumplirse.</p>
            </div>

            <div className={styles.faqItem}>
              <h3>No identificar correctamente a las partes</h3>

              <p>
                Errores en nombres o documentos pueden generar inconvenientes al
                momento de exigir el cumplimiento.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>Incluir obligaciones imposibles</h3>

              <p>Los acuerdos deben ser viables y jurídicamente permitidos.</p>
            </div>
          </div>
        </section>

        {/* QUE OCURRE SI UNA PERSONA INCUMPLE EL ACTA DE CONCILIACION */}
        <section>
          <h2 className={styles.subTitle}>
            ¿Qué ocurre si una persona incumple el acta?
          </h2>

          <p className={styles.modeloText}>
            Una de las principales ventajas del acta de conciliación es que no
            se trata únicamente de un acuerdo de buena voluntad. Cuando cumple
            los requisitos legales, puede servir como título ejecutivo, lo que
            permite acudir ante un juez para solicitar su cumplimiento sin tener
            que iniciar nuevamente la discusión sobre el conflicto.
          </p>

          <p className={styles.modeloText}>
            Esto brinda mayor seguridad jurídica a quienes deciden resolver sus
            diferencias mediante conciliación y fomenta el cumplimiento
            voluntario de los compromisos adquiridos.
          </p>
        </section>

        {/* PREGUNTAS FRECUENTES SOBRE ACTAS DE CONCILIACION */}
        <section className={styles.faqSection}>
          <h2 className={styles.subTitle}>
            Preguntas frecuentes sobre el modelo de acta de conciliación
          </h2>

          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>¿Puedo descargar un modelo y utilizarlo directamente?</h3>

              <p>
                Puede servir como guía, pero cada conciliación debe adaptarse al
                caso concreto y cumplir los requisitos legales aplicables.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Todas las actas tienen el mismo formato?</h3>

              <p>
                No. La estructura general suele ser similar, pero el contenido
                cambia según el conflicto y los acuerdos alcanzados.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Quién redacta el acta?</h3>

              <p>
                Generalmente el conciliador o el centro de conciliación elaboran
                el documento con base en los acuerdos expresados por las partes.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Puede modificarse posteriormente?</h3>

              <p>
                Si ambas partes están de acuerdo pueden celebrar una nueva
                conciliación para actualizar los compromisos asumidos.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Tiene validez en todo Colombia?</h3>

              <p>
                Sí. Siempre que el procedimiento se haya realizado conforme a la
                ley, sus efectos jurídicos son reconocidos en todo el territorio
                nacional.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3>¿Necesito un abogado para conciliar?</h3>

              <p>
                Depende del caso. Aunque no siempre es obligatorio, contar con
                asesoría jurídica puede ayudar a construir acuerdos más claros y
                seguros.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>
            ¿Necesitas elaborar un acta de conciliación con validez legal?
          </h2>

          <p className={styles.ctaText}>
            En Sol Centro de Conciliación te orientamos para preparar acuerdos
            claros, completos y ajustados a la legislación colombiana. Si deseas
            resolver un conflicto de manera rápida y evitar un proceso judicial,
            nuestro equipo puede acompañarte durante todo el procedimiento de
            conciliación.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar información por WhatsApp
          </a>
        </motion.div>
      </motion.article>
    </>
  );
}
