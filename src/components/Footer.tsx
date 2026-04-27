import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>B</span>
              <div>
                <span className={styles.logoName}>Bouquet Esencias</span>
                <span className={styles.logoTagline}>Fábrica de esencias aromáticas</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Más de 30 años creando fragancias de calidad para tus productos.
              Tandil, Buenos Aires.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.colLinks}>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Productos</h4>
            <ul className={styles.colLinks}>
              <li><a href="#productos">Esencias concentradas</a></li>
              <li><a href="#productos">Perfuminas</a></li>
              <li><a href="#productos">Desodorantes de piso</a></li>
              <li><a href="#productos">Aromatizantes</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contacto</h4>
            <ul className={styles.colLinks}>
              <li><a href="tel:+542494665264">0249 15-466-5264</a></li>
              <li><a href="mailto:bouquetaroma@gmail.com">bouquetaroma@gmail.com</a></li>
              <li><span style={{ opacity: 0.6 }}>Colectora Macaya 1625, Tandil</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © {year} Bouquet Esencias — Todos los derechos reservados
          </span>
          <span className={styles.dev}>
            Desarrollado por{' '}
            <a href="https://github.com/franciscoyanez" target="_blank" rel="noopener noreferrer">
              Francisco Yañez
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
