import styles from './About.module.css'

const objectives = [
  'Brindar la mejor atención.',
  'Destacar por la calidad.',
  'Acompañarte y asesorarte.',
  'Innovar y reinventarnos.',
]

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src="https://bouquetesencias.com/wp-content/uploads/2025/04/trabajadores-scaled-e1745936859632.jpg"
              alt="Equipo Bouquet Esencias"
              className={styles.image}
            />
            <div className={styles.imageBadge}>
              <span className={styles.badgeNum}>30+</span>
              <span className={styles.badgeText}>años de<br />experiencia</span>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.eyebrow}>¿Quiénes somos?</span>

          <h2 className={styles.title}>
            Familia, pasión<br />y <em>perfumería artesanal</em>
          </h2>

          <p className={styles.body}>
            Somos un negocio familiar de segunda generación con más de <strong>30 años de experiencia</strong> creando
            las mejores soluciones aromáticas. Nuestro equipo está formado por expertos en el arte de la perfumería,
            quienes trabajan para desarrollar esencias que cumplan con los más altos estándares de calidad.
          </p>

          <p className={styles.body}>
            Creemos que un buen aroma puede transformar la experiencia del usuario y añadir un valor significativo
            a tus productos. Estamos aquí para ayudarte a encontrar la fragancia perfecta.
          </p>

          <div className={styles.objectives}>
            <h3 className={styles.objectivesTitle}>Nuestros objetivos</h3>
            <ul className={styles.list}>
              {objectives.map((obj, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.check}>✦</span>
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <a
            href="https://wa.link/rp9387"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Conocernos →
          </a>
        </div>
      </div>
    </section>
  )
}
