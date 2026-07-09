"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function FuncionesConciliadoresContent() {
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
          <span className={styles.badge}>Conciliación en Colombia</span>

          <h1 className={styles.title}>
            Funciones de los conciliadores en Colombia: cuál es su papel, qué
            pueden hacer y cuáles son sus límites legales
          </h1>

          <p className={styles.heroText}>
            Cuando una persona escucha la palabra <strong>conciliador</strong>,
            muchas veces piensa que se trata de alguien que toma decisiones
            similares a las de un juez. Sin embargo, su función es completamente
            diferente. El conciliador es un tercero imparcial que guía la
            conversación entre las partes para que sean ellas mismas quienes
            construyan un acuerdo que ponga fin al conflicto.
          </p>

          <p className={styles.heroText}>
            En Colombia, los conciliadores participan en asuntos civiles,
            comerciales, laborales, de familia y de convivencia, promoviendo
            soluciones rápidas, económicas y con plena validez jurídica cuando
            se alcanza un acuerdo. Su intervención permite evitar procesos
            judiciales prolongados y fomenta el diálogo como herramienta
            principal para resolver diferencias.
          </p>

          <p className={styles.heroText}>
            Conocer cuáles son las funciones, responsabilidades y límites de un
            conciliador ayuda a comprender mejor cómo se desarrolla una
            audiencia y qué se puede esperar durante el procedimiento de
            conciliación.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuál es el papel de un conciliador dentro de una audiencia de
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            El conciliador es un tercero neutral e imparcial que interviene en
            un conflicto para ayudar a las partes a llegar a un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Su papel es clave dentro de los mecanismos alternativos de solución
            de conflictos en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su labor consiste en escuchar de manera objetiva las posiciones de
            cada participante, identificar los puntos de desacuerdo, promover el
            respeto durante el diálogo y orientar a las partes para que puedan
            construir alternativas viables de solución. Aunque puede formular
            recomendaciones y hacer preguntas que faciliten la negociación,
            nunca reemplaza la voluntad de quienes participan en la
            conciliación.
          </p>

          <p className={styles.paragraph}>
            El conciliador también verifica que cualquier acuerdo alcanzado
            respete la ley, no vulnere derechos fundamentales y pueda cumplirse
            de forma clara. Gracias a ello, el acta de conciliación ofrece
            seguridad jurídica para todos los involucrados.
          </p>
        </div>

        {/* FUNCIONES PRINCIPALES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales funciones y responsabilidades de un conciliador en
            Colombia
          </h2>

          <ul className={styles.list}>
            <li>
              Escuchar a cada una de las partes con absoluta imparcialidad.
            </li>

            <li>Facilitar una comunicación respetuosa durante la audiencia.</li>

            <li>Ayudar a identificar los verdaderos puntos del conflicto.</li>

            <li>Promover alternativas de solución voluntarias.</li>

            <li>Orientar la negociación sin favorecer a ninguna persona.</li>

            <li>
              Explicar el procedimiento y los efectos jurídicos de la
              conciliación.
            </li>

            <li>Verificar que el acuerdo sea legal y ejecutable.</li>

            <li>Redactar correctamente el acta de conciliación.</li>

            <li>Garantizar igualdad de oportunidades para intervenir.</li>

            <li>Resolver dudas sobre el desarrollo del procedimiento.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              El conciliador no impone decisiones, su función es facilitar el
              acuerdo entre las partes.
            </p>
          </div>
        </div>

        {/* IMPORTANCIA DE LA IMPARCIALIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué la imparcialidad del conciliador es tan importante?
          </h2>

          <p className={styles.paragraph}>
            Uno de los principios más importantes de la conciliación es la
            imparcialidad. El conciliador debe actuar sin favorecer a ninguna de
            las partes, evitando influir en la decisión final o mostrar
            preferencias durante la audiencia. Esta neutralidad genera confianza
            y permite que el proceso se desarrolle en igualdad de condiciones.
          </p>

          <p className={styles.paragraph}>
            Si cualquiera de los participantes considera que existe un conflicto
            de interés o falta de objetividad, puede manifestarlo dentro del
            procedimiento conforme a las reglas aplicables.
          </p>
        </div>

        {/* HABILIDADES DE UN BUEN CONCILIADOR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué habilidades debe tener un buen conciliador?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Escucha activa</h3>

              <p>
                Comprende las necesidades reales de cada participante antes de
                proponer alternativas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Comunicación efectiva</h3>

              <p>
                Explica conceptos jurídicos de manera sencilla y facilita el
                diálogo.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Capacidad de negociación</h3>

              <p>
                Ayuda a encontrar puntos de acuerdo que beneficien a ambas
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Manejo de conflictos</h3>

              <p>
                Reduce tensiones y mantiene un ambiente respetuoso durante toda
                la audiencia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conocimiento jurídico</h3>

              <p>
                Debe conocer la normativa aplicable para verificar que los
                acuerdos sean válidos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ética profesional</h3>

              <p>
                Actúa con confidencialidad, transparencia y responsabilidad.
              </p>
            </div>
          </div>
        </div>

        {/* TIPOS DE CONFLICTOS QUE INTERVIENE UN CONCILIADOR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿En qué tipos de conflictos interviene un conciliador?
          </h2>

          <p className={styles.paragraph}>
            Los conciliadores pueden participar en múltiples conflictos siempre
            que la ley permita solucionarlos mediante conciliación. Entre los
            asuntos más frecuentes se encuentran:
          </p>

          <ul className={styles.list}>
            <li>Conflictos laborales.</li>

            <li>Problemas entre arrendadores e inquilinos.</li>

            <li>Obligaciones económicas.</li>

            <li>Incumplimiento de contratos.</li>

            <li>Responsabilidad civil.</li>

            <li>Conflictos familiares.</li>

            <li>Cuotas alimentarias.</li>

            <li>Separación de bienes.</li>

            <li>Accidentes de tránsito.</li>

            <li>Diferencias entre socios.</li>
          </ul>
        </div>

        {/* BENEFICIOS DE UN CONCILIADOR DURANTE EL PROCESO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué beneficios ofrece un conciliador durante el proceso?
          </h2>

          <p className={styles.paragraph}>
            La intervención de un conciliador profesional permite que las partes
            dialoguen en un ambiente organizado, con reglas claras y bajo la
            orientación de un tercero imparcial. Esto facilita la construcción
            de acuerdos estables, reduce el desgaste emocional y disminuye
            considerablemente los tiempos frente a un proceso judicial
            tradicional.
          </p>

          <p className={styles.paragraph}>
            Además, cuando el acuerdo queda consignado en un acta de
            conciliación válida, ambas partes cuentan con un documento que
            respalda jurídicamente los compromisos asumidos y brinda mayor
            seguridad para su cumplimiento.
          </p>
        </div>

        {/* LIMITACIONES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Lo que NO puede hacer un conciliador
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>No decide el conflicto</h3>
              <p>No actúa como juez ni impone soluciones.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>No favorece a ninguna parte</h3>
              <p>Debe ser completamente imparcial.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>No obliga a conciliar</h3>
              <p>El acuerdo siempre es voluntario.</p>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Importancia del conciliador</h2>

          <p className={styles.paragraph}>
            El conciliador permite que las partes encuentren soluciones sin
            necesidad de acudir a un juez, reduciendo tiempos y costos.
          </p>

          <p className={styles.paragraph}>
            Además, garantiza que el proceso sea justo, equilibrado y legal.
          </p>
        </div>

        {/* CARACTERISTICAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Características del conciliador</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Imparcialidad</h3>
              <p>No toma partido en el conflicto.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Neutralidad</h3>
              <p>No influye en beneficio de ninguna parte.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Capacitación</h3>
              <p>Debe estar formado y acreditado legalmente.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿El conciliador decide el caso?</h3>
              <p>No, solo facilita el acuerdo entre las partes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Debe ser abogado?</h3>
              <p>En la mayoría de casos sí, o estar debidamente acreditado.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Es obligatorio aceptar lo que diga?</h3>
              <p>No, todo depende del acuerdo voluntario.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas un proceso de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Un conciliador puede ayudarte a resolver tu conflicto de forma
            rápida, legal y sin procesos judiciales largos.
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
