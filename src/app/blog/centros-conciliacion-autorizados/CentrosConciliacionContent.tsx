"use client";

import styles from "../Article.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionContent() {
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
            Centros de conciliación autorizados en Colombia: cómo funcionan y
            cómo verificar si son legales
          </h1>

          <p className={styles.heroText}>
            Los centros de conciliación autorizados en Colombia son las
            instituciones habilitadas legalmente para ofrecer servicios de
            conciliación y facilitar la resolución de conflictos entre las
            partes.
          </p>

          <p className={styles.heroText}>
            Estos centros son regulados por el Estado y garantizan que los
            acuerdos tengan validez jurídica.
          </p>
        </div>

        {/* DEFINICION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un centro de conciliación autorizado en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Es una entidad pública o privada autorizada para administrar
            procesos de conciliación en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su función es facilitar el diálogo entre las partes para resolver
            conflictos de manera legal y voluntaria.
          </p>
        </div>

        {/* QUIEN AUTORIZA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién autoriza los centros de conciliación en Colombia?
          </h2>

          <ul className={styles.list}>
            <li>Ministerio de Justicia y del Derecho.</li>
            <li>Supervisión del Estado colombiano.</li>
            <li>Regulación bajo la Ley 640 de 2001 y la Ley 2220 de 2022.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Ningún centro puede operar sin autorización del Ministerio de
              Justicia en Colombia.
            </p>
          </div>
        </div>

        {/* TIPOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Tipos de centros de conciliación autorizados en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Públicos</h3>
              <p>Operados por entidades del Estado o instituciones públicas.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Privados</h3>
              <p>
                Funcionan en cámaras de comercio, universidades o entidades
                privadas autorizadas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Institucionales</h3>
              <p>
                Asociados a organizaciones con programas de conciliación
                acreditados.
              </p>
            </div>
          </div>
        </div>

        {/* CONCILIADORES */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede actuar como conciliador en un centro de conciliación?
          </h2>

          <ul className={styles.list}>
            <li>Abogados capacitados en conciliación.</li>
            <li>Personas acreditadas por el Ministerio de Justicia.</li>
            <li>Funcionarios de centros autorizados.</li>
            <li>Profesionales con formación en MASC.</li>
          </ul>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué es importante acudir a un centro de conciliación
            autorizado?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Validez legal</h3>
              <p>Garantizan que los acuerdos tengan efectos jurídicos.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Seguridad</h3>
              <p>Aseguran procesos regulados y transparentes.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acceso a justicia</h3>
              <p>Facilitan la resolución de conflictos sin juicio.</p>
            </div>
          </div>
        </div>

        {/* COMO FUNCIONA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo funciona un proceso en un centro de conciliación autorizado?
          </h2>

          <p className={styles.paragraph}>
            Las partes presentan su conflicto ante el centro autorizado, donde
            un conciliador facilita el diálogo para lograr un acuerdo.
          </p>

          <p className={styles.paragraph}>
            Si hay acuerdo, este se formaliza en un acta con valor legal en
            Colombia.
          </p>
        </div>

        {/* VERIFICACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo verificar si un centro de conciliación está autorizado en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Antes de iniciar un proceso de conciliación es importante asegurarse
            de que el centro elegido se encuentre debidamente autorizado para
            prestar este servicio. Acudir a una entidad reconocida brinda mayor
            seguridad jurídica y garantiza que el procedimiento se desarrolle
            conforme a la normativa colombiana.
          </p>

          <p className={styles.paragraph}>
            Los centros de conciliación autorizados cumplen requisitos legales,
            cuentan con conciliadores capacitados y están habilitados para
            expedir actas de conciliación con los efectos previstos por la ley.
          </p>

          <div className={styles.highlightBox}>
            <p>
              Antes de programar una audiencia, verifica que el centro de
              conciliación esté legalmente autorizado y que los conciliadores
              cuenten con la formación exigida para ejercer sus funciones.
            </p>
          </div>
        </div>

        {/* SERVICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué servicios ofrecen los centros de conciliación autorizados?
          </h2>

          <p className={styles.paragraph}>
            Los centros de conciliación atienden una amplia variedad de
            conflictos entre personas naturales, empresas y organizaciones,
            promoviendo acuerdos voluntarios que eviten procesos judiciales
            prolongados.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación civil</h3>
              <p>
                Conflictos relacionados con deudas, contratos, responsabilidad
                civil y obligaciones entre particulares.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación comercial</h3>
              <p>
                Diferencias entre empresas, proveedores, clientes, socios y
                relaciones comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación familiar</h3>
              <p>
                Acuerdos sobre cuota alimentaria, custodia, visitas y otros
                asuntos de familia susceptibles de conciliación.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación laboral</h3>
              <p>
                Controversias relacionadas con salarios, liquidaciones,
                prestaciones sociales, indemnizaciones y acuerdos entre
                trabajador y empleador.
              </p>
            </div>
          </div>
        </div>

        {/* DOCUMENTOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos se deben llevar a un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Preparar adecuadamente la documentación facilita el desarrollo de la
            audiencia y permite que las partes expongan claramente los hechos y
            sus pretensiones.
          </p>

          <ul className={styles.list}>
            <li>Documento de identidad.</li>
            <li>Contratos o acuerdos relacionados con el conflicto.</li>
            <li>Facturas, recibos o comprobantes de pago.</li>
            <li>Correos electrónicos, chats o comunicaciones.</li>
            <li>Pruebas que respalden las reclamaciones.</li>
            <li>Liquidaciones, estados de cuenta o cálculos económicos.</li>
            <li>Cualquier otro documento relacionado con el caso.</li>
          </ul>
        </div>

        {/* TIEMPO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuánto tiempo tarda un proceso en un centro de conciliación?
          </h2>

          <p className={styles.paragraph}>
            El tiempo necesario para resolver un conflicto mediante conciliación
            depende de la complejidad del caso, la disponibilidad de las partes
            y la voluntad de negociar.
          </p>

          <p className={styles.paragraph}>
            En muchos casos, una controversia puede solucionarse en una única
            audiencia, mientras que situaciones más complejas pueden requerir
            sesiones adicionales para alcanzar un acuerdo satisfactorio.
          </p>

          <div className={styles.highlightBox}>
            <p>
              En comparación con un proceso judicial, la conciliación suele
              ofrecer una solución mucho más rápida y eficiente para resolver
              conflictos.
            </p>
          </div>
        </div>

        {/* VENTAJAS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Ventajas de acudir a un centro de conciliación autorizado en
            Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Mayor seguridad jurídica</h3>
              <p>
                Los acuerdos celebrados en centros autorizados producen los
                efectos jurídicos previstos por la legislación colombiana.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Ahorro de tiempo</h3>
              <p>
                La conciliación suele resolverse mucho más rápido que un proceso
                judicial tradicional.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Menores costos</h3>
              <p>
                Resolver un conflicto mediante conciliación generalmente implica
                menos gastos que acudir directamente a un proceso judicial.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Acuerdos construidos por las partes</h3>
              <p>
                Las soluciones son negociadas voluntariamente, lo que favorece
                su cumplimiento y reduce futuros conflictos.
              </p>
            </div>
          </div>
        </div>

        {/* RESULTADO DE LA AUDIENCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué sucede después de la audiencia de conciliación?
          </h2>

          <p className={styles.paragraph}>
            Una vez finaliza la audiencia, el resultado dependerá de si las
            partes lograron alcanzar un acuerdo o no.
          </p>

          <ul className={styles.list}>
            <li>Se firma un acta de conciliación cuando existe acuerdo.</li>
            <li>
              El acuerdo adquiere efectos jurídicos y obliga a las partes.
            </li>
            <li>Si no hay acuerdo, se expide la constancia correspondiente.</li>
            <li>
              Las partes pueden evaluar otras alternativas legales cuando el
              conflicto no se resuelve.
            </li>
          </ul>

          <p className={styles.paragraph}>
            El conciliador deja constancia del resultado de la audiencia y
            orienta a las partes sobre los efectos legales del procedimiento
            realizado.
          </p>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre los centros de conciliación autorizados
            en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Todos los centros son válidos?</h3>
              <p>No, solo los autorizados por el Ministerio de Justicia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son gratuitos?</h3>
              <p>
                Algunos centros son gratuitos y otros pueden tener costos
                administrativos.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿El acuerdo es obligatorio?</h3>
              <p>Sí, si se firma un acta de conciliación.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas conciliar un conflicto?
          </h3>

          <p className={styles.ctaText}>
            Acude a un centro de conciliación autorizado en Colombia y resuelve
            tu conflicto de forma legal y rápida.
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
