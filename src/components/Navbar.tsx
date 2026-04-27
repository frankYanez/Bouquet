'use client'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Productos', href: '#productos' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo-bouquet.png"
            alt="Bouquet Esencias"
            className={styles.logoMarkImg}
          />
          <span className={styles.logoText}>
            Bouquet<em>Esencias</em>
          </span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.link/3pc4x0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              <WhatsAppIcon /> Contactar
            </a>
          </li>
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.65-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.207-.242-.579-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.214 3.074.149.198 2.1 3.206 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347M12.057 21.508h-.006a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.375a9.84 9.84 0 0 1-1.51-5.26c.003-5.45 4.44-9.886 9.895-9.886 2.64.001 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.896 6.99c-.003 5.45-4.44 9.886-9.893 9.886m8.413-18.297A11.82 11.82 0 0 0 12.057.195C5.495.198.152 5.54.149 12.101a11.8 11.8 0 0 0 1.595 5.93L.05 24.204l6.322-1.658a11.82 11.82 0 0 0 5.68 1.448h.005c6.561 0 11.904-5.341 11.907-11.901a11.82 11.82 0 0 0-3.494-8.412z" />
    </svg>
  )
}
