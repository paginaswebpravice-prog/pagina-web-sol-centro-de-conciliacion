"use client";

import styles from "../Article.module.css";
import componentStyles from "./styles.module.css";
import { motion } from "framer-motion";

export default function CentrosConciliacionColombiaContent() {
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
            Centros de conciliación autorizados en Colombia: qué son, cómo
            funcionan y cómo elegir uno
          </h1>

          <p className={styles.heroText}>
            Los centros de conciliación autorizados en Colombia son entidades
            habilitadas por la ley para facilitar la solución de conflictos de
            forma pacífica y sin necesidad de un proceso judicial.
          </p>

          <p className={styles.heroText}>
            Estos centros garantizan que el proceso tenga validez jurídica y sea
            realizado por conciliadores capacitados.
          </p>
        </div>

        {/* QUE SON */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué es un centro de conciliación autorizado y cuál es su función en
            Colombia?
          </h2>

          <p className={styles.paragraph}>
            Es una entidad pública o privada autorizada para administrar
            procesos de conciliación extrajudicial en Colombia.
          </p>

          <p className={styles.paragraph}>
            Su función principal es facilitar acuerdos entre las partes en
            conflicto.
          </p>
        </div>

        {/* SERVICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué servicios ofrecen los centros de conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Los centros de conciliación autorizados prestan servicios dirigidos
            a la solución pacífica de conflictos entre personas naturales,
            empresas y entidades. Dependiendo de la naturaleza del caso, el
            conciliador ayuda a construir acuerdos voluntarios que permitan
            evitar un proceso judicial.
          </p>

          <p className={styles.paragraph}>
            Además de realizar audiencias de conciliación, muchos centros
            brindan orientación sobre el procedimiento, reciben solicitudes de
            conciliación, administran el expediente y elaboran las actas
            correspondientes cuando se alcanza un acuerdo entre las partes.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Conciliación civil</h3>
              <p>
                Conflictos por contratos, deudas, responsabilidad civil, daños y
                obligaciones económicas.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación familiar</h3>
              <p>
                Cuotas alimentarias, custodia, visitas, separación de bienes y
                otros asuntos conciliables en materia familiar.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación comercial</h3>
              <p>
                Incumplimientos contractuales, conflictos entre empresas,
                proveedores y socios comerciales.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Conciliación de arrendamientos</h3>
              <p>
                Controversias relacionadas con cánones, restitución de inmuebles
                y obligaciones derivadas del contrato de arrendamiento.
              </p>
            </div>
          </div>
        </div>

        {/* QUIENES PUEDEN OPERAR */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Quién puede crear y operar un centro de conciliación autorizado en
            Colombia?
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Cámaras de comercio</h3>
              <p>
                Son uno de los principales operadores de conciliación en
                Colombia.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Notarías</h3>
              <p>
                Algunas notarías están autorizadas para prestar este servicio.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Universidades</h3>
              <p>A través de consultorios jurídicos habilitados.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Entidades públicas</h3>
              <p>Organismos autorizados por el Ministerio de Justicia.</p>
            </div>
          </div>
        </div>

        {/* COMO SABER */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo saber si un centro de conciliación está autorizado?
          </h2>

          <p className={styles.paragraph}>
            Antes de iniciar un trámite de conciliación es importante verificar
            que el centro se encuentre debidamente autorizado por el Ministerio
            de Justicia y del Derecho. Esto garantiza que el procedimiento se
            realice conforme a la legislación colombiana y que las actas
            produzcan los efectos jurídicos previstos por la ley.
          </p>

          <ul className={styles.list}>
            <li>Verificar que cuente con autorización vigente.</li>
            <li>Confirmar que el conciliador esté habilitado.</li>
            <li>Revisar la experiencia del centro.</li>
            <li>Consultar los asuntos que puede conciliar.</li>
            <li>Solicitar información sobre costos y tiempos.</li>
          </ul>
        </div>

        {/* FUNCION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cuáles son las funciones de un centro de conciliación en Colombia?
          </h2>

          <ul className={styles.list}>
            <li>Recibir solicitudes de conciliación.</li>
            <li>Designar conciliadores.</li>
            <li>Programar audiencias.</li>
            <li>Facilitar acuerdos entre las partes.</li>
            <li>Emitir actas con validez jurídica.</li>
          </ul>
        </div>

        {/* PROCESO PASO A PASO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo es el proceso en un centro de conciliación paso a paso?
          </h2>

          <p className={styles.paragraph}>
            Aunque el procedimiento puede variar ligeramente según el centro de
            conciliación, normalmente el trámite sigue varias etapas claramente
            definidas.
          </p>

          <div className={componentStyles.timeline}>
            <div className={componentStyles.timelineItem}>
              <span className={componentStyles.step}>1</span>

              <div>
                <h3>Presentación de la solicitud</h3>

                <p>
                  La persona interesada radica la solicitud explicando el
                  conflicto y suministrando la información de la otra parte.
                </p>
              </div>
            </div>

            <div className={componentStyles.timelineItem}>
              <span className={componentStyles.step}>2</span>

              <div>
                <h3>Revisión del caso</h3>

                <p>
                  El centro verifica que el asunto pueda ser objeto de
                  conciliación.
                </p>
              </div>
            </div>

            <div className={componentStyles.timelineItem}>
              <span className={componentStyles.step}>3</span>

              <div>
                <h3>Citación a audiencia</h3>

                <p>
                  Se notifica a las partes para asistir a la audiencia de
                  conciliación.
                </p>
              </div>
            </div>

            <div className={componentStyles.timelineItem}>
              <span className={componentStyles.step}>4</span>

              <div>
                <h3>Audiencia</h3>

                <p>
                  El conciliador dirige el diálogo y facilita la construcción de
                  un acuerdo.
                </p>
              </div>
            </div>

            <div className={componentStyles.timelineItem}>
              <span className={componentStyles.step}>5</span>

              <div>
                <h3>Acta o constancia</h3>

                <p>
                  Si existe acuerdo se firma el acta; si no, se expide la
                  constancia correspondiente.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IMPORTANCIA */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Por qué son importantes los centros de conciliación en Colombia?
          </h2>

          <p className={styles.paragraph}>
            Estos centros permiten descongestionar el sistema judicial y
            promover soluciones rápidas a los conflictos.
          </p>

          <p className={styles.paragraph}>
            Además, fortalecen la cultura del diálogo y la resolución pacífica.
          </p>
        </div>

        {/* ACCESO */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Cómo solicitar una conciliación en un centro autorizado paso a
            paso?
          </h2>

          <ul className={styles.list}>
            <li>Identificar un centro autorizado.</li>
            <li>Presentar solicitud formal.</li>
            <li>Adjuntar documentos del caso.</li>
            <li>Esperar citación a audiencia.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Todos los centros autorizados deben estar avalados por el
              Ministerio de Justicia de Colombia.
            </p>
          </div>
        </div>

        {/* DOCUMENTACION */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            ¿Qué documentos se necesitan para solicitar una conciliación?
          </h2>

          <p className={styles.paragraph}>
            La documentación depende del conflicto, pero presentar soportes
            completos facilita el análisis del caso y aumenta las posibilidades
            de alcanzar un acuerdo durante la audiencia.
          </p>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>Documento de identidad</h3>

              <p>
                Cédula de ciudadanía o documento que permita identificar a las
                partes.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Contratos</h3>

              <p>
                Contratos, acuerdos, pagarés u otros documentos relacionados con
                el conflicto.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Pruebas</h3>

              <p>
                Facturas, consignaciones, chats, correos electrónicos,
                fotografías o cualquier evidencia pertinente.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Información de la otra parte</h3>

              <p>
                Nombre, dirección, teléfono o correo para realizar la citación a
                la audiencia.
              </p>
            </div>
          </div>
        </div>

        {/* BENEFICIOS */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Beneficios de acudir a un centro de conciliación autorizado
          </h2>

          <p className={styles.paragraph}>
            Acudir a un centro de conciliación autorizado ofrece seguridad
            jurídica, acompañamiento profesional y la posibilidad de resolver
            conflictos en menos tiempo que un proceso judicial.
          </p>

          <ul className={styles.list}>
            <li>Evita procesos judiciales prolongados.</li>
            <li>Favorece acuerdos voluntarios entre las partes.</li>
            <li>Reduce costos frente a un litigio.</li>
            <li>Permite soluciones flexibles.</li>
            <li>El acta de conciliación tiene efectos jurídicos.</li>
            <li>Facilita la comunicación entre las partes.</li>
            <li>Contribuye a la descongestión de los despachos judiciales.</li>
            <li>Promueve una solución pacífica del conflicto.</li>
          </ul>

          <div className={styles.highlightBox}>
            <p>
              Elegir un centro de conciliación autorizado brinda mayor
              confianza, ya que el procedimiento se desarrolla bajo las normas
              colombianas y con conciliadores debidamente habilitados.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className={styles.contentSection}>
          <h2 className={styles.subtitle}>
            Preguntas frecuentes sobre los centros de conciliación autorizados
            en Colombia
          </h2>

          <div className={styles.cardsGrid}>
            <div className={styles.infoCard}>
              <h3>¿Todos los centros son oficiales?</h3>
              <p>No, solo los autorizados por el Ministerio de Justicia.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Son gratuitos?</h3>
              <p>
                Algunos servicios pueden tener costos dependiendo del tipo de
                entidad.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>¿Se puede conciliar en cualquier centro?</h3>
              <p>Sí, siempre que esté autorizado para el tipo de conflicto.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaBox}>
          <h3 className={styles.ctaTitle}>
            ¿Necesitas acudir a un centro de conciliación?
          </h3>

          <p className={styles.ctaText}>
            Te orientamos para identificar el centro adecuado y gestionar tu
            proceso de conciliación en Colombia.
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
