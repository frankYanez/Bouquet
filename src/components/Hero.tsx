import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      {/* Grain overlay */}
      <div className={styles.grain} aria-hidden />
      {/* Botanical decoration */}
      <div className={styles.botanicalLeft} aria-hidden>
        <LeafSVG />
      </div>
      <div className={styles.botanicalRight} aria-hidden>
        <LeafSVG mirror />
      </div>

      <div className={styles.content}>
        <div className={`${styles.badge} animate-fade-up delay-100`}>
          <span>✦ Más de 30 años de experiencia</span>
        </div>


        <div className={`${styles.logoWrap} animate-fade-up delay-200`}>
          <Image
            src="/images/LOGO-BLANCO.png"
            alt="Bouquet Esencias"
            width={300}
            height={300}
            className={styles.logoImg}
            priority
          />
        </div>
        <h1 className={`${styles.title} animate-fade-up delay-200`}>
          Fábrica de<br />
          <em>Esencias</em>
        </h1>

        <p className={`${styles.sub} animate-fade-up delay-300`}>
          Fragancias que transforman. Aromas que permanecen.<br />
          Envíos a todo el país.
        </p>

        <div className={`${styles.actions} animate-fade-up delay-400`}>
          <a href="#productos" className={styles.btnPrimary}>
            Ver productos
          </a>
          <a href="#nosotros" className={styles.btnSecondary}>
            Conocernos
          </a>
        </div>

        <div className={`${styles.stats} animate-fade-up delay-500`}>
          <div className={styles.stat}>
            <span className={styles.statNum}>30+</span>
            <span className={styles.statLabel}>Años de experiencia</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Elaboración nacional</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Aromas disponibles</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Deslizá</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}

function LeafSVG({ mirror }: { mirror?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: mirror ? 'scaleX(-1)' : 'none' }}
    >
      <path
        d="M100 380 C60 300 20 220 40 140 C60 60 120 20 140 60 C160 100 140 180 120 220 C100 260 80 300 100 380Z"
        fill="none"
        stroke="rgba(201,168,76,0.25)"
        strokeWidth="1.5"
      />
      <path
        d="M100 380 L100 100"
        fill="none"
        stroke="rgba(201,168,76,0.15)"
        strokeWidth="1"
      />
      <path d="M100 200 C80 190 60 170 55 150" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
      <path d="M100 240 C80 230 65 210 62 190" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
      <path d="M100 280 C82 268 70 248 68 228" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
      <path d="M100 200 C120 190 138 170 143 150" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
      <path d="M100 240 C118 230 133 210 136 190" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.8" />
      <circle cx="100" cy="80" r="3" fill="rgba(201,168,76,0.4)" />
      <circle cx="55" cy="148" r="2" fill="rgba(201,168,76,0.3)" />
      <circle cx="143" cy="148" r="2" fill="rgba(201,168,76,0.3)" />
    </svg>
  )
}
