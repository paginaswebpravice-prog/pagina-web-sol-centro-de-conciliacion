"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

export default function PoderContent() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <motion.article
          id="poder"
          className={styles.card}
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* PODER PARA CONCILIACION */}
          <h2>
            Poder para audiencia de conciliación en Colombia: modelo de poder
            especial, requisitos, ejemplos y cómo diligenciarlo correctamente
          </h2>

          <p>
            El <strong>poder para audiencia de conciliación en Colombia</strong>{" "}
            es el documento mediante el cual una persona autoriza a un abogado o
            a otro representante para actuar en su nombre durante un trámite de
            conciliación. Gracias a este documento es posible comparecer a una
            audiencia, presentar propuestas de arreglo, recibir comunicaciones,
            aportar documentos e incluso suscribir un acuerdo cuando el poder
            otorgado así lo permita.
          </p>

          <p>
            Este tipo de poder es ampliamente utilizado en conciliaciones
            civiles, laborales, comerciales, de familia, arrendamientos,
            conflictos entre socios, cobro de obligaciones y muchos otros
            asuntos en los que una de las partes no puede asistir personalmente
            o prefiere estar representada por un profesional del derecho.
          </p>

          <p>
            Aunque muchas personas buscan en internet un modelo para copiar, lo
            cierto es que cada poder debe adaptarse al conflicto concreto y
            definir claramente las facultades otorgadas al apoderado para evitar
            inconvenientes durante la audiencia.
          </p>

          {/* OTORGAR UN PODER */}
          <h3>¿Cuándo es recomendable otorgar un poder para conciliación?</h3>

          <p>
            Otorgar un poder puede ser una excelente alternativa cuando el
            interesado no puede asistir personalmente a la audiencia o cuando
            desea que un abogado negocie en su representación. También resulta
            útil cuando la conciliación involucra sumas importantes de dinero o
            aspectos jurídicos que requieren una estrategia adecuada.
          </p>

          <h3>¿Cuándo es recomendable otorgar un poder para conciliación?</h3>

          <p>
            Otorgar un poder puede ser una excelente alternativa cuando el
            interesado no puede asistir personalmente a la audiencia o cuando
            desea que un abogado negocie en su representación. También resulta
            útil cuando la conciliación involucra sumas importantes de dinero o
            aspectos jurídicos que requieren una estrategia adecuada.
          </p>

          <div className={styles.grid}>
            <div className={styles.innerCard}>
              <h4>Conflictos laborales</h4>

              <p>
                Liquidaciones, salarios, prestaciones sociales e
                indemnizaciones.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Conflictos civiles</h4>

              <p>
                Incumplimientos contractuales, préstamos, deudas y
                responsabilidad civil.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Conflictos familiares</h4>

              <p>
                Cuotas alimentarias, visitas, custodia y obligaciones
                económicas.
              </p>
            </div>
          </div>

          {/* FACULTADES DEL PODER */}
          <h3>¿Qué facultades puede contener un poder para conciliación?</h3>

          <p>
            Las facultades dependen de la voluntad del otorgante. Algunas
            personas autorizan únicamente la asistencia a la audiencia, mientras
            que otras permiten que el apoderado negocie y firme acuerdos
            definitivos.
          </p>

          <ul>
            <li>Presentar solicitudes.</li>

            <li>Recibir citaciones.</li>

            <li>Aportar pruebas y documentos.</li>

            <li>Negociar propuestas de arreglo.</li>

            <li>Aceptar o rechazar fórmulas de conciliación.</li>

            <li>Firmar el acta de conciliación.</li>

            <li>Solicitar copias del expediente.</li>

            <li>Recibir notificaciones.</li>
          </ul>

          {/* TIPOS DE PODER */}
          <h3>Tipos de poder para conciliación en Colombia</h3>
          <div className={styles.grid}>
            <div className={styles.innerCard}>
              <h4>Conflictos laborales</h4>

              <p>
                Liquidaciones, salarios, prestaciones sociales e
                indemnizaciones.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Conflictos civiles</h4>

              <p>
                Incumplimientos contractuales, préstamos, deudas y
                responsabilidad civil.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Conflictos familiares</h4>

              <p>
                Cuotas alimentarias, visitas, custodia y obligaciones
                económicas.
              </p>
            </div>
          </div>

          {/* USOS DEL PODER */}
          <h3>¿Para qué sirve el poder para conciliación en Colombia?</h3>

          <p>
            El poder para audiencia de conciliación en Colombia sirve para que
            una persona pueda ser representada por otra en una audiencia de
            conciliación en Bogotá o en cualquier ciudad del país. Mediante este
            poder, el apoderado puede asistir a la audiencia, presentar fórmulas
            de arreglo, negociar acuerdos, firmar el acta de conciliación y
            recibir documentos relacionados con el trámite.
          </p>

          <div className={styles.grid}>
            <div className={styles.innerCard}>
              <h4>Puede autorizar para:</h4>
              <ul>
                <li>Asistir a la audiencia de conciliación</li>
                <li>Negociar acuerdos</li>
                <li>Firmar el acta de conciliación</li>
                <li>Presentar documentos</li>
                <li>Recibir notificaciones</li>
              </ul>
            </div>

            <div className={styles.innerCard}>
              <h4>Dónde se usa este poder:</h4>
              <ul>
                <li>Centros de conciliación en Bogotá</li>
                <li>Notarías en Colombia</li>
                <li>Cámaras de comercio</li>
                <li>Consultorios jurídicos</li>
                <li>Conciliaciones virtuales</li>
              </ul>
            </div>
          </div>

          {/* MODELO DE PODER */}
          <h3>Modelo de poder (persona natural)</h3>

          <pre>
            {`PODER ESPECIAL

[Ciudad], [dd/mm/aaaa]

Yo, [Nombre completo], mayor de edad, identificado(a) con CC No. [●] de [●], confiero PODER ESPECIAL, amplio y suficiente
a [Nombre del apoderado(a)], identificado(a) con CC No. [●] y T.P. No. [●] (si aplica), para que en mi nombre y representación:

1) Comparezca a audiencia(s) de conciliación ante [Centro/Entidad] dentro del trámite solicitado por/contra [●].
2) Presente solicitudes, reciba citaciones, aporte y solicite documentos.
3) Concilié, transija y suscriba el acta de conciliación o constancias que se generen, dentro de los límites siguientes:
   - [Límite económico o condiciones: p. ej. hasta $● / plan de pago máximo ● cuotas / etc.]

Notificaciones: [correo] / [dirección].

Firma otorgante: _______________________
Nombre: [●]
CC: [●]

Firma apoderado(a) (aceptación): _______________________
Nombre: [●]
CC: [●] / T.P.: [●]`}
          </pre>

          {/* RECOMENDACIONES */}
          <h3>¿Qué información debe contener un poder especial?</h3>

          <p>
            Aunque no existe un único formato obligatorio, un poder para
            conciliación debe identificar claramente a las partes y establecer
            el alcance de la representación para evitar interpretaciones durante
            la audiencia.
          </p>

          <ul>
            <li>Nombre completo del otorgante.</li>

            <li>Número de identificación.</li>

            <li>Nombre del apoderado.</li>

            <li>Objeto del poder.</li>

            <li>Entidad donde se realizará la conciliación.</li>

            <li>Facultades otorgadas.</li>

            <li>Limitaciones económicas si existen.</li>

            <li>Fecha y firma.</li>
          </ul>

          {/* RECOMENDACIONES ANTES DE FIRMAR */}
          <h3>Recomendaciones antes de firmar un poder para conciliación</h3>

          <p>
            Antes de entregar un poder especial conviene revisar cuidadosamente
            cada una de las facultades otorgadas. Un documento bien elaborado
            brinda mayor seguridad tanto al otorgante como al apoderado durante
            la audiencia.
          </p>

          <ul>
            <li>Verificar el alcance del poder.</li>

            <li>Definir si puede conciliar.</li>

            <li>Indicar si puede firmar el acta.</li>

            <li>Establecer límites económicos.</li>

            <li>Precisar el conflicto objeto del trámite.</li>

            <li>Actualizar los datos de contacto.</li>

            <li>Conservar copia firmada del documento.</li>

            <li>Confirmar los requisitos del centro de conciliación.</li>
          </ul>

          {/* ES OBLIGATORIO AUTENTICAR UN PODER? */}
          <h3>¿Es obligatorio autenticar un poder para conciliación?</h3>

          <p>
            Depende del tipo de conciliación y de la entidad donde se adelante
            el trámite. En numerosos casos basta un poder simple firmado por el
            otorgante; sin embargo, algunos centros de conciliación, notarías o
            entidades pueden solicitar presentación personal o autenticación
            para verificar la identidad de quien otorga el documento.
          </p>

          <p>
            Antes de asistir a la audiencia es recomendable confirmar cuáles son
            los requisitos exigidos por el centro de conciliación para evitar
            aplazamientos o inadmisiones.
          </p>

          {/* ERRORES FRECUENTES AL ELABORAR UN PODER */}
          <h3>Errores frecuentes al elaborar un poder para conciliación</h3>

          <div className={styles.grid}>
            <div className={styles.innerCard}>
              <h4>No definir límites</h4>

              <p>
                El apoderado podría no tener claridad sobre el monto máximo que
                puede negociar.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Datos incompletos</h4>

              <p>
                Errores en nombres, documentos o identificación generan
                retrasos.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>Facultades ambiguas</h4>

              <p>
                No indicar si puede firmar el acuerdo suele generar
                inconvenientes durante la audiencia.
              </p>
            </div>
          </div>

          {/* PUEDE UN ABOGADO FIRMAR EL ACTA DE CONCILIACION? */}
          <h3>¿Puede un abogado firmar el acta de conciliación?</h3>

          <p>
            Sí, siempre que el poder otorgado le conceda expresamente esa
            facultad. Si el documento limita la representación únicamente a
            asistir o negociar, será necesario que el otorgante intervenga
            personalmente para aceptar el acuerdo o que previamente amplíe las
            facultades conferidas.
          </p>

          {/* PREGUNTAS FRECUENTES */}
          <h3>Preguntas frecuentes sobre el poder para conciliación</h3>

          <div className={styles.grid}>
            <div className={styles.innerCard}>
              <h4>¿Puede ser un poder simple?</h4>

              <p>
                En muchos casos sí, aunque algunas entidades pueden solicitar
                autenticación o presentación personal.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>¿Puede firmar acuerdos?</h4>

              <p>
                Sí, siempre que esa facultad se otorgue expresamente dentro del
                poder.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>¿Sirve para conciliaciones virtuales?</h4>

              <p>
                Sí. También puede utilizarse en audiencias desarrolladas
                mediante medios electrónicos cuando la entidad lo permita.
              </p>
            </div>

            <div className={styles.innerCard}>
              <h4>¿Puedo revocar el poder?</h4>

              <p>
                Sí. El otorgante puede revocar el poder siguiendo las reglas
                legales aplicables y notificando oportunamente a la entidad
                correspondiente.
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}
