import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* TEXTO LADO IZQUIERDO */}
        <div className={styles.info}>
          <h2>¿Tienes preguntas o quieres agendar una consulta?</h2>
          <p>
            Escríbenos y con gusto te ayudaremos a planear tu proceso legal con
            nuestros expertos.
          </p>
        </div>

        {/* FORMULARIO */}
        <form className={styles.form}>
          <h3>Estamos para ayudarte</h3>

          <div className={styles.row}>
            <div>
              <label>Nombre*</label>
              <input type="text" placeholder="Ej: Juan" required />
            </div>

            <div>
              <label>Apellido*</label>
              <input type="text" placeholder="Ej: Castañeda" required />
            </div>
          </div>

          <div className={styles.row}>
            <div>
              <label>Teléfono*</label>
              <input type="tel" placeholder="Ej: 305 2991059" required />
            </div>

            <div>
              <label>Email*</label>
              <input type="email" placeholder="Ej: correo@email.com" required />
            </div>
          </div>

          <div>
            <label>Mensaje*</label>
            <textarea
              placeholder="Quiero más información sobre..."
              rows={5}
              required
            ></textarea>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" required />
            <span>
              Autorizo el uso de mis datos según la{" "}
              <a href="#">política de privacidad</a>
            </span>
          </div>

          <button className={styles.ctaButton} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
