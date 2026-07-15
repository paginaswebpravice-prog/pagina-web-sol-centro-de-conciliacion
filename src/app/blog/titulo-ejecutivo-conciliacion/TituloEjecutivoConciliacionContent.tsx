"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function TituloEjecutivoConciliacionContent() {
  return (
    <section className={styles.articleWrapper}>
      <motion.article
        className={styles.articleBlock}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* HERO */}
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            Acta de conciliación con mérito ejecutivo en Colombia
          </span>

          <h1 className={styles.title}>
            Título Ejecutivo en la Conciliación en Colombia: Cómo Hacer Cumplir
            un Acta de Conciliación
          </h1>

          <p className={styles.heroText}>
            Una de las principales ventajas de acudir a un centro de
            conciliación en Colombia es que el acuerdo alcanzado entre las
            partes puede quedar plasmado en un{" "}
            <strong>acta de conciliación con mérito ejecutivo</strong>. Esto
            significa que, si alguna de las personas incumple lo pactado, la
            otra podrá acudir ante un juez para exigir su cumplimiento sin tener
            que iniciar un proceso declarativo para demostrar nuevamente la
            existencia de la obligación.
          </p>

          <p className={styles.heroText}>
            En otras palabras, la conciliación no solamente busca resolver un
            conflicto de forma pacífica. También ofrece una importante garantía
            jurídica para las partes, pues el acuerdo puede convertirse en un
            instrumento legal con fuerza suficiente para exigir pagos, entregas
            de bienes, cumplimiento de contratos u otras obligaciones.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás qué significa que un acta preste mérito
            ejecutivo, cuándo puede ejecutarse judicialmente, cuáles son sus
            requisitos y qué ocurre cuando una de las partes decide incumplir lo
            acordado.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un título ejecutivo y por qué es tan importante?
          </h2>

          <p className={styles.paragraph}>
            Un título ejecutivo es un documento reconocido por la ley que
            contiene una obligación{" "}
            <strong>clara, expresa y actualmente exigible</strong>. Gracias a
            ello, la persona beneficiaria puede acudir directamente ante un juez
            para solicitar el cumplimiento forzado de esa obligación cuando el
            deudor no la cumple voluntariamente.
          </p>

          <p className={styles.paragraph}>
            En Colombia existen diferentes documentos que pueden prestar mérito
            ejecutivo, entre ellos algunos contratos, pagarés, letras de cambio,
            sentencias judiciales y, de manera muy importante, las actas de
            conciliación celebradas conforme a la ley.
          </p>

          <p className={styles.paragraph}>
            Esto convierte a la conciliación en una alternativa muy valiosa, ya
            que además de resolver el conflicto permite dejar un respaldo
            jurídico que facilita reclamar posteriormente el cumplimiento del
            acuerdo.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Cuando un acta de conciliación presta mérito ejecutivo, el
              conflicto no desaparece si alguien incumple. La ley permite
              utilizar esa misma acta para exigir judicialmente el cumplimiento
              de lo pactado.
            </p>
          </div>
        </div>

        {/* ACTA COMO TITULO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo el acta de conciliación presta mérito ejecutivo?
          </h2>

          <p className={styles.paragraph}>
            No basta con que exista una conciliación. Para que el acta pueda
            ejecutarse judicialmente debe contener obligaciones suficientemente
            determinadas que permitan conocer exactamente qué debe cumplirse,
            quién debe hacerlo y en qué condiciones.
          </p>

          <ul className={styles.list}>
            <li>Obligaciones claras y específicas.</li>
            <li>Compromisos expresamente aceptados por las partes.</li>
            <li>Obligaciones actualmente exigibles.</li>
            <li>Firma de las partes y del conciliador.</li>
            <li>
              Celebración dentro de un procedimiento legal de conciliación.
            </li>
            <li>Identificación completa de quienes suscriben el acuerdo.</li>
          </ul>

          <p className={styles.paragraph}>
            Cuando estos requisitos se cumplen, el acta adquiere una enorme
            fortaleza jurídica, ya que puede utilizarse como fundamento de un
            proceso ejecutivo sin necesidad de volver a discutir la existencia
            del acuerdo.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué el mérito ejecutivo hace tan importante la conciliación?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>

              <p>
                El acuerdo queda respaldado por un documento con efectos legales
                que puede hacerse cumplir judicialmente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menos tiempo en procesos judiciales</h3>

              <p>
                En caso de incumplimiento no es necesario iniciar un proceso
                para probar nuevamente la obligación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Protección para ambas partes</h3>

              <p>
                Tanto quien debe cumplir como quien tiene derecho a exigir el
                acuerdo conocen claramente cuáles son sus obligaciones.
              </p>
            </div>
          </div>
        </div>

        {/* TIPOS DE ACUERDOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué tipo de acuerdos conciliatorios pueden convertirse en título
            ejecutivo?
          </h2>

          <p className={styles.paragraph}>
            La fuerza ejecutiva del acta de conciliación puede presentarse en
            numerosos asuntos civiles, comerciales, familiares y, en algunos
            casos, laborales. Todo dependerá del contenido del acuerdo alcanzado
            por las partes.
          </p>

          <ul className={styles.list}>
            <li>Acuerdos de pago.</li>
            <li>Pago de deudas.</li>
            <li>Restitución de dinero.</li>
            <li>Cumplimiento de contratos.</li>
            <li>Entrega de bienes.</li>
            <li>Obligaciones derivadas de arrendamientos.</li>
            <li>Conflictos comerciales.</li>
            <li>Obligaciones patrimoniales entre particulares.</li>
          </ul>

          <p className={styles.paragraph}>
            Siempre será necesario revisar el contenido específico del acta para
            determinar si reúne los requisitos exigidos por la legislación
            colombiana.
          </p>
        </div>

        {/* PROCESO EJECUTIVO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo se ejecuta un acta de conciliación incumplida?
          </h2>

          <p className={styles.paragraph}>
            Cuando una persona incumple el acuerdo conciliatorio, la parte
            afectada puede acudir ante la jurisdicción competente mediante un
            proceso ejecutivo.
          </p>

          <p className={styles.paragraph}>
            En este procedimiento el juez verifica que el acta cumpla los
            requisitos legales para prestar mérito ejecutivo y, si corresponde,
            podrá ordenar el cumplimiento de las obligaciones e incluso adoptar
            medidas como embargos, secuestro de bienes u otras actuaciones
            previstas por la ley.
          </p>

          <div className={styles.highlightBox}>
            <p>
              El proceso ejecutivo busca hacer efectivo el cumplimiento del
              acuerdo ya existente; no pretende volver a discutir el conflicto
              que ya fue resuelto mediante conciliación.
            </p>
          </div>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores que pueden dificultar la ejecución de un acta de
            conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Obligaciones ambiguas</h3>

              <p>
                Si el acuerdo no define claramente lo que debe cumplirse, su
                ejecución puede resultar más compleja.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Fechas imprecisas</h3>

              <p>
                Es importante establecer plazos concretos para facilitar la
                exigibilidad de las obligaciones.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información incompleta</h3>

              <p>
                La identificación correcta de las partes y de los compromisos
                evita inconvenientes posteriores.
              </p>
            </div>
          </div>
        </div>

        {/* INCUMPLIMIENTO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué pasa si no se cumple el acuerdo?
          </h2>

          <p className={styles.paragraph}>
            Si una de las partes incumple lo pactado en la conciliación, la otra
            puede iniciar un proceso ejecutivo ante un juez.
          </p>

          <ul className={styles.list}>
            <li>Se presenta el acta como título ejecutivo.</li>
            <li>El juez ordena el cumplimiento forzado.</li>
            <li>Pueden aplicarse medidas de embargo o ejecución.</li>
          </ul>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Diferencia con otros documentos</h2>

          <ul className={styles.list}>
            <li>Contrato: requiere pruebas adicionales en algunos casos.</li>
            <li>Sentencia: proviene de un juez.</li>
            <li>
              Acta de conciliación: nace del acuerdo entre partes pero es
              ejecutiva.
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre el título ejecutivo en conciliación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Toda acta de conciliación presta mérito ejecutivo?</h3>

              <p>
                Siempre que contenga obligaciones claras, expresas y exigibles
                podrá utilizarse como título ejecutivo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Qué ocurre si la otra persona no paga?</h3>

              <p>
                Es posible iniciar un proceso ejecutivo para solicitar que un
                juez haga cumplir lo pactado en el acta.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es mejor conciliar que demandar?</h3>

              <p>
                En muchos casos sí, porque permite resolver el conflicto más
                rápido y, además, deja un documento con fuerza ejecutiva en caso
                de incumplimiento.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas hacer cumplir un acta de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Recibe asesoría para iniciar procesos ejecutivos y hacer valer tus
            acuerdos de conciliación en Colombia.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </a>
        </div>
      </motion.article>
    </section>
  );
}
