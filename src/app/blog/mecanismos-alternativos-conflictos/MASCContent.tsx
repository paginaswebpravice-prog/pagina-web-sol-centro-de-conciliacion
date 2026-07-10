"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function MecanismosAlternativosConflictosContent() {
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
          <span className={styles.badge}>Conciliación y MASC en Colombia</span>

          <h1 className={styles.title}>
            Mecanismos alternativos de solución de conflictos
          </h1>

          <p className={styles.heroText}>
            Los Mecanismos Alternativos de Solución de Conflictos (MASC) en
            Colombia son herramientas legales que permiten resolver disputas sin
            necesidad de acudir a un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Son una forma rápida, económica y efectiva de acceder a la justicia.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Qué son los MASC?</h2>

          <p className={styles.paragraph}>
            Son mecanismos jurídicos que permiten a las personas resolver sus
            conflictos mediante el diálogo, la negociación o la intervención de
            un tercero neutral.
          </p>

          <p className={styles.paragraph}>
            Su objetivo es evitar procesos judiciales largos y costosos.
          </p>
        </div>

        {/* LEY 2220 */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué establece la Ley 2220 de 2022 sobre los Mecanismos Alternativos
            de Solución de Conflictos?
          </h2>

          <p className={styles.paragraph}>
            La <strong>Ley 2220 de 2022</strong> modernizó el sistema de
            Mecanismos Alternativos de Solución de Conflictos (MASC) en
            Colombia, fortaleciendo el acceso a la justicia y promoviendo una
            cultura orientada al diálogo y la construcción de acuerdos.
          </p>

          <p className={styles.paragraph}>
            Esta norma consolidó disposiciones relacionadas con la conciliación,
            actualizó el funcionamiento de los centros de conciliación y reforzó
            la importancia de resolver controversias de manera rápida,
            voluntaria y con seguridad jurídica.
          </p>

          <div className={styles.highlightBox}>
            <p>
              La Ley 2220 busca que más personas y empresas solucionen sus
              conflictos mediante acuerdos, evitando procesos judiciales largos
              cuando la ley lo permite.
            </p>
          </div>
        </div>

        {/* DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Diferencias entre conciliación, mediación, arbitraje y negociación
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>

              <p>
                Un conciliador facilita el diálogo para que las partes
                construyan un acuerdo con efectos jurídicos cuando cumple los
                requisitos legales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mediación</h3>

              <p>
                El mediador ayuda a mejorar la comunicación entre las partes,
                pero normalmente no impone decisiones ni formaliza un acuerdo
                con los mismos efectos de la conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arbitraje</h3>

              <p>
                Un tribunal arbitral o un árbitro estudia el conflicto y emite
                un laudo que resulta obligatorio para las partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negociación</h3>

              <p>
                Las partes dialogan directamente para alcanzar un acuerdo sin la
                intervención obligatoria de un tercero neutral.
              </p>
            </div>
          </div>
        </div>

        {/* PRINCIPALES MASC */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales mecanismos en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación</h3>
              <p>Un tercero facilita el acuerdo entre las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mediación</h3>
              <p>Intervención de un mediador que ayuda a dialogar.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Arbitraje</h3>
              <p>Un árbitro toma una decisión obligatoria para las partes.</p>
            </div>
          </div>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos pueden resolverse mediante los MASC?
          </h2>

          <p className={styles.paragraph}>
            Dependiendo de la naturaleza del caso y de lo permitido por la
            legislación colombiana, los MASC pueden utilizarse para resolver una
            amplia variedad de conflictos sin acudir inicialmente a un juez.
          </p>

          <ul className={styles.list}>
            <li>Conflictos civiles.</li>
            <li>Controversias comerciales.</li>
            <li>Incumplimientos contractuales.</li>
            <li>Arrendamientos urbanos y comerciales.</li>
            <li>Propiedad horizontal.</li>
            <li>Responsabilidad civil.</li>
            <li>Conflictos entre vecinos.</li>
            <li>Algunos asuntos familiares conciliables.</li>
            <li>Cobro de obligaciones.</li>
            <li>Conflictos empresariales.</li>
          </ul>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Ventajas de los MASC</h2>

          <ul className={styles.list}>
            <li>Reducen costos frente a un proceso judicial.</li>
            <li>Son más rápidos que un juicio.</li>
            <li>Promueven el diálogo entre las partes.</li>
            <li>Descongestionan el sistema judicial.</li>
            <li>Pueden tener efectos legales vinculantes.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Los MASC fortalecen el acceso a la justicia en Colombia sin
              necesidad de procesos judiciales tradicionales.
            </p>
          </div>
        </div>

        {/* CUANDO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a un Mecanismo Alternativo de Solución de
            Conflictos?
          </h2>

          <p className={styles.paragraph}>
            Los MASC son especialmente útiles cuando las partes desean conservar
            una buena relación, reducir costos y encontrar soluciones más
            rápidas que un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            También resultan recomendables cuando existe disposición para
            dialogar y construir acuerdos que beneficien a ambas partes,
            evitando la incertidumbre propia de un litigio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Acudir oportunamente a un mecanismo alternativo puede ahorrar
              meses o incluso años de trámites judiciales, además de disminuir
              los costos del conflicto.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>¿Cuándo se usan los MASC?</h2>

          <p className={styles.paragraph}>
            Se utilizan cuando las partes desean resolver un conflicto de forma
            voluntaria sin acudir a un juez.
          </p>

          <ul className={styles.list}>
            <li>Conflictos laborales.</li>
            <li>Problemas de arrendamiento.</li>
            <li>Conflictos civiles y comerciales.</li>
            <li>Disputas familiares o comunitarias.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia de los MASC</h2>

          <p className={styles.paragraph}>
            Los MASC son fundamentales para la justicia moderna porque permiten
            resolver conflictos de manera eficiente y pacífica.
          </p>

          <p className={styles.paragraph}>
            Además, fomentan la cultura del diálogo en la sociedad.
          </p>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de los MASC para personas y empresas
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Ahorro económico</h3>

              <p>
                Generalmente implican menores costos que un proceso judicial
                ordinario.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Rapidez</h3>

              <p>
                Muchos conflictos pueden solucionarse en semanas, evitando
                procesos que pueden prolongarse durante meses o años.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Mayor control</h3>

              <p>
                Las partes participan activamente en la construcción de las
                soluciones y no dependen exclusivamente de la decisión de un
                juez.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Confidencialidad</h3>

              <p>
                Algunos mecanismos ofrecen un mayor grado de reserva frente a la
                información tratada durante el procedimiento.
              </p>
            </div>
          </div>
        </div>

        {/* PASOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo iniciar un proceso mediante un MASC?
          </h2>

          <p className={styles.paragraph}>
            Aunque el procedimiento puede variar según el mecanismo elegido, en
            la mayoría de los casos el proceso sigue una estructura similar.
          </p>

          <ul className={styles.list}>
            <li>Analizar si el conflicto puede resolverse mediante un MASC.</li>

            <li>Elegir el mecanismo más adecuado para el caso.</li>

            <li>
              Presentar la solicitud ante el centro o autoridad competente.
            </li>

            <li>Convocar a la otra parte.</li>

            <li>Participar en la audiencia o reunión correspondiente.</li>

            <li>
              Construir un acuerdo o recibir la decisión cuando corresponda.
            </li>

            <li>
              Formalizar el resultado conforme a la legislación aplicable.
            </li>
          </ul>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al intentar resolver un conflicto sin acudir a un
            juez
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No conocer el mecanismo adecuado</h3>

              <p>
                Elegir un procedimiento inadecuado puede retrasar la solución
                del conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>No preparar la documentación</h3>

              <p>
                Contar con soportes y pruebas facilita la construcción de
                acuerdos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Negociar sin información</h3>

              <p>
                Comprender los derechos y obligaciones de cada parte permite
                tomar mejores decisiones durante la negociación.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Los MASC reemplazan a los jueces?</h3>
              <p>No, son una alternativa al proceso judicial.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son obligatorios?</h3>
              <p>No, son voluntarios en la mayoría de casos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Tienen validez legal?</h3>
              <p>Sí, especialmente la conciliación y el arbitraje.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres resolver tu conflicto sin juicio?
          </h3>

          <p className={styles.ctaText}>
            Los MASC pueden ayudarte a resolver tu problema de forma rápida,
            legal y eficiente en Colombia.
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
