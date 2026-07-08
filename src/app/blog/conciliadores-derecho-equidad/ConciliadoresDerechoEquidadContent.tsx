"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function ConciliadoresDerechoEquidadContent() {
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
            Guía completa sobre conciliadores en Colombia
          </span>

          <h1 className={styles.title}>
            Conciliadores en Derecho y en Equidad en Colombia: diferencias,
            funciones y cuál elegir
          </h1>

          <p className={styles.heroText}>
            Cuando surge un conflicto entre particulares, familiares, vecinos,
            arrendadores, trabajadores o empresas, una de las preguntas más
            comunes es quién debe intervenir para ayudar a resolverlo. En
            Colombia existen dos figuras reconocidas dentro de los mecanismos
            alternativos de solución de conflictos: el{" "}
            <strong>conciliador en derecho</strong> y el
            <strong> conciliador en equidad</strong>.
          </p>

          <p className={styles.heroText}>
            Aunque ambos buscan facilitar acuerdos voluntarios y evitar procesos
            judiciales largos, sus funciones, formación, competencias y el tipo
            de asuntos que atienden presentan diferencias importantes que
            conviene conocer antes de iniciar una conciliación.
          </p>

          <p className={styles.heroText}>
            En esta guía encontrarás las principales diferencias entre ambas
            figuras, cuándo acudir a cada una, qué conflictos pueden resolver,
            cuál tiene mayor alcance jurídico y cómo elegir la alternativa más
            conveniente según tu caso.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un conciliador en derecho y cuáles son sus funciones?
          </h2>

          <p className={styles.paragraph}>
            El conciliador en derecho es una persona autorizada por la ley para
            dirigir procedimientos de conciliación aplicando las normas
            jurídicas vigentes. En la mayoría de los casos se trata de abogados
            que cuentan con formación especializada en conciliación y que actúan
            dentro de centros de conciliación autorizados o entidades
            habilitadas.
          </p>

          <p className={styles.paragraph}>
            Su función principal consiste en facilitar el diálogo entre las
            partes, identificar los puntos de conflicto y promover acuerdos que
            respeten la ley y protejan los derechos de quienes participan en la
            audiencia.
          </p>

          <p className={styles.paragraph}>
            Cuando las partes llegan a un acuerdo, este queda consignado en un
            acta de conciliación que puede producir efectos jurídicos
            importantes y, en muchos casos, prestar mérito ejecutivo.
          </p>
        </div>

        {/* CONCILIADOR EN EQUIDAD */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un conciliador en equidad?
          </h2>

          <p className={styles.paragraph}>
            El conciliador en equidad es un miembro de la comunidad capacitado
            para facilitar la solución pacífica de conflictos mediante criterios
            de justicia, convivencia y equidad, especialmente en asuntos que
            afectan a la comunidad.
          </p>

          <p className={styles.paragraph}>
            A diferencia del conciliador en derecho, no necesariamente debe ser
            abogado. Su labor consiste en promover el diálogo entre las personas
            teniendo en cuenta las características sociales, culturales y
            comunitarias del entorno donde surge el conflicto.
          </p>

          <p className={styles.paragraph}>
            Esta figura fortalece el acceso a la justicia para comunidades que
            buscan resolver sus diferencias de manera cercana, participativa y
            menos formal, siempre dentro de los límites establecidos por la
            legislación colombiana.
          </p>
        </div>

        {/* DIFERENCIAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Principales diferencias entre un conciliador en derecho y un
            conciliador en equidad
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Formación</h3>

              <p>
                El conciliador en derecho suele ser abogado con formación
                especializada, mientras que el conciliador en equidad es un
                líder comunitario capacitado para facilitar acuerdos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Forma de resolver el conflicto</h3>

              <p>
                El primero orienta el acuerdo conforme al ordenamiento jurídico.
                El segundo busca soluciones basadas en principios de justicia,
                convivencia y realidad social.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Tipo de asuntos</h3>

              <p>
                Los conciliadores en derecho suelen intervenir en asuntos
                civiles, comerciales, familiares o laborales, mientras que los
                conciliadores en equidad participan con frecuencia en conflictos
                comunitarios y de convivencia.
              </p>
            </div>
          </div>
        </div>

        {/* SIMILITUDES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Similitudes entre ambos tipos de conciliadores
          </h2>

          <ul className={styles.list}>
            <li>Promueven el diálogo entre las partes.</li>
            <li>Buscan soluciones voluntarias sin acudir a juicio.</li>
            <li>Favorecen acuerdos que reduzcan el conflicto.</li>
            <li>Contribuyen a descongestionar los despachos judiciales.</li>
            <li>Fortalecen el acceso a la justicia.</li>
            <li>Incentivan relaciones más respetuosas entre las personas.</li>
            <li>Ayudan a prevenir nuevos conflictos en el futuro.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Aunque su formación y metodología son diferentes, ambos
              conciliadores comparten un mismo objetivo: lograr que las personas
              resuelvan sus conflictos mediante el diálogo y la construcción
              conjunta de acuerdos.
            </p>
          </div>
        </div>

        {/* CUANDO USAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuándo conviene acudir a un conciliador en derecho y cuándo a uno
            en equidad?
          </h2>

          <p className={styles.paragraph}>
            Elegir el tipo de conciliador dependerá principalmente de la
            naturaleza del conflicto, de las normas aplicables y del contexto en
            el que se presente la controversia.
          </p>

          <ul className={styles.list}>
            <li>
              <strong>Conciliador en derecho:</strong> recomendado para asuntos
              civiles, comerciales, laborales, familiares, contractuales y
              controversias donde exista una regulación jurídica específica.
            </li>

            <li>
              <strong>Conciliador en equidad:</strong> adecuado para conflictos
              entre vecinos, problemas comunitarios, diferencias de convivencia
              y situaciones donde el diálogo social resulta determinante.
            </li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué ambas figuras son importantes para la justicia colombiana?
          </h2>

          <p className={styles.paragraph}>
            Los conciliadores en derecho y en equidad cumplen un papel esencial
            dentro de los mecanismos alternativos de solución de conflictos, ya
            que permiten que miles de controversias se resuelvan sin necesidad
            de acudir a un juez.
          </p>

          <p className={styles.paragraph}>
            Gracias a su intervención es posible reducir tiempos, costos y
            desgaste emocional para las partes, al tiempo que se fortalece una
            cultura de diálogo y convivencia pacífica.
          </p>

          <p className={styles.paragraph}>
            Además, estos mecanismos favorecen un acceso más rápido a la
            justicia y contribuyen a disminuir la congestión del sistema
            judicial colombiano.
          </p>
        </div>

        {/* CONFLICTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué conflictos puede resolver un conciliador?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conflictos familiares</h3>

              <p>
                Cuotas alimentarias, custodia, visitas, separación de bienes y
                otros acuerdos familiares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Asuntos civiles</h3>

              <p>
                Incumplimientos contractuales, deudas, arrendamientos,
                indemnizaciones y conflictos entre particulares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Convivencia</h3>

              <p>
                Problemas entre vecinos, conflictos comunitarios y desacuerdos
                que afectan la convivencia diaria.
              </p>
            </div>
          </div>
        </div>

        {/* ELEGIR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo elegir el conciliador adecuado para tu caso?
          </h2>

          <p className={styles.paragraph}>
            Antes de iniciar una conciliación conviene analizar el tipo de
            conflicto, las personas involucradas y el resultado que se espera
            obtener. Cuando el asunto requiere una interpretación jurídica
            detallada, normalmente será más conveniente acudir a un conciliador
            en derecho.
          </p>

          <p className={styles.paragraph}>
            En cambio, cuando el objetivo principal es restablecer la
            convivencia dentro de una comunidad o solucionar diferencias
            mediante acuerdos construidos con base en la equidad, un conciliador
            en equidad puede ser la alternativa más apropiada.
          </p>
        </div>

        {/* ERRORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Errores frecuentes al elegir un conciliador
          </h2>

          <ul className={styles.list}>
            <li>
              Acudir a un conciliador que no corresponde al tipo de conflicto.
            </li>
            <li>No preparar previamente la documentación necesaria.</li>
            <li>Asistir sin una propuesta clara de solución.</li>
            <li>Confundir conciliación con asesoría jurídica.</li>
            <li>
              No verificar que el conciliador esté debidamente autorizado cuando
              sea necesario.
            </li>
          </ul>
        </div>

        {/* CONCILIADORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede ejercer como conciliador en Colombia?
          </h2>

          <p className={styles.paragraph}>
            No todas las personas pueden desempeñarse como conciliadores.
            Dependiendo del tipo de conciliación, la legislación colombiana
            establece requisitos relacionados con la formación, la capacitación
            y la autorización para ejercer esta función.
          </p>

          <p className={styles.paragraph}>
            En el caso de los conciliadores en derecho, normalmente se exige
            formación jurídica y la acreditación correspondiente para actuar
            dentro de centros de conciliación autorizados. Por su parte, los
            conciliadores en equidad son líderes de la comunidad que reciben
            capacitación para facilitar la solución pacífica de conflictos
            dentro de su entorno social.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Independientemente de su modalidad, el conciliador debe actuar con
              imparcialidad, confidencialidad y respeto por los derechos de
              todas las personas involucradas en el conflicto.
            </p>
          </div>
        </div>

        {/* DIFERENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué es importante conocer la diferencia antes de iniciar una
            conciliación?
          </h2>

          <p className={styles.paragraph}>
            Elegir correctamente el tipo de conciliador puede facilitar el
            desarrollo del procedimiento y aumentar las posibilidades de
            alcanzar un acuerdo. Además, permite que el conflicto sea tratado
            por la persona más adecuada según su naturaleza, evitando retrasos o
            la necesidad de acudir posteriormente a otros mecanismos de solución
            de controversias.
          </p>

          <p className={styles.paragraph}>
            Informarse previamente también ayuda a comprender qué esperar
            durante la audiencia, cuáles son los efectos del acta de
            conciliación y qué derechos y obligaciones asumen las partes al
            suscribir un acuerdo.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre conciliadores en derecho y en equidad
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>
                ¿Cuál es la principal diferencia entre un conciliador en derecho
                y uno en equidad?
              </h3>

              <p>
                El conciliador en derecho orienta el procedimiento conforme a
                las normas jurídicas vigentes y normalmente es abogado. El
                conciliador en equidad busca soluciones basadas en criterios de
                justicia, convivencia y participación comunitaria.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Los acuerdos logrados con ambos conciliadores tienen validez
                legal?
              </h3>

              <p>
                Sí. Cuando la conciliación se realiza conforme a la legislación
                colombiana y dentro de las competencias correspondientes, los
                acuerdos pueden producir efectos jurídicos y ser exigibles.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Cuál debo elegir para resolver mi conflicto?</h3>

              <p>
                Dependerá del tipo de controversia. Los asuntos jurídicos suelen
                tramitarse ante conciliadores en derecho, mientras que muchos
                conflictos comunitarios pueden abordarse mediante conciliadores
                en equidad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>
                ¿Un conciliador puede obligar a las partes a llegar a un
                acuerdo?
              </h3>

              <p>
                No. La función del conciliador consiste en facilitar el diálogo
                y orientar la negociación. La decisión final de conciliar
                siempre depende de la voluntad de las partes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿No sabes qué tipo de conciliador necesita tu caso?
          </h3>

          <p className={styles.ctaText}>
            Cada conflicto requiere un análisis diferente. Nuestro equipo puede
            orientarte para identificar si tu caso debe ser atendido por un
            conciliador en derecho, un conciliador en equidad o si existe otro
            mecanismo más adecuado para proteger tus derechos y buscar una
            solución rápida.
          </p>

          <a
            href="https://api.whatsapp.com/send/?phone=573232904786"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un especialista
          </a>
        </div>
      </motion.article>
    </section>
  );
}
