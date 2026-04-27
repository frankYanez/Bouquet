import styles from './Categories.module.css'

const cats = [
  {
    title: 'Esencias concentradas',
    desc: 'Para todo tipo de uso. Ideal para velas, jabones, perfumes, colonias y más.',
    whatsapp: 'https://wa.link/dm6301',
    emoji: '🌿',
    accent: '#2d4a2d',
  },
  {
    title: 'Perfuminas concentradas',
    desc: 'Para elaboración al agua o al alcohol. Rendimiento superior en cada gota.',
    whatsapp: 'https://wa.link/yltohi',
    emoji: '✨',
    accent: '#c9a84c',
  },
  {
    title: 'Desodorante de piso',
    desc: 'Increíble rinde con los mejores aromas. Ideal para producción a escala.',
    whatsapp: 'https://wa.link/a08ad8',
    emoji: '🏠',
    accent: '#3d6b3d',
  },
]

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Líneas de productos</span>
          <h2 className={styles.title}>
            Todo lo que necesitás<br /><em>en un solo lugar</em>
          </h2>
          <p className={styles.sub}>
            Vendemos al por mayor y al por menor. Contactate y te asesoramos sin cargo.
          </p>
        </div>

        <div className={styles.grid}>
          {cats.map((c, i) => (
            <div key={i} className={styles.card} style={{ '--accent': c.accent } as React.CSSProperties}>
              <div className={styles.cardEmoji}>{c.emoji}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
              <a
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardBtn}
              >
                Consultar precio →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
