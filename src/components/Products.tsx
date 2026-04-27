import styles from './Products.module.css'

const products = [
  {
    id: 1,
    name: 'Desengrasante concentrado PINOLUZ',
    category: 'Desengrasante',
    price: 10500,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/05/11-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2ADesengrasante%20concentrado%20PINOLUZ%2A%0A%2APrecio%3A%2A%20%2410%2C500.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 2,
    name: 'Desinfectante DESINFECTOL tipo espadol',
    category: 'Desodorantes',
    price: 10900,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/05/12-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2ADesinfectante%20DESINFECTOL%20tipo%20espadol%2A%0A%2APrecio%3A%2A%20%2410%2C900.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 3,
    name: 'Líquido para difusores a varilla x 1lt',
    category: 'Esencias',
    price: 20000,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/04/6-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2ALiquido%20para%20difusores%20a%20varilla%20x%201lt%2A%0A%2APrecio%3A%2A%20%2420%2C000.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 4,
    name: 'Desodorante de piso concentrado x 1lt',
    category: 'Desodorantes',
    price: 10500,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/04/8-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2ADesodorante%20de%20piso%20concentrado%20x%201lt%2A%0A%2APrecio%3A%2A%20%2410%2C500.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 5,
    name: 'Aromatizante textil concentrado x 1lt',
    category: 'Aromatizantes',
    price: 17600,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/04/9-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2AAromatizante%20textil%20concentrado%20x%201lt%2A%0A%2APrecio%3A%2A%20%2417%2C600.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 6,
    name: 'Desodorante de piso concentrado x 1lt',
    category: 'Desodorantes',
    price: 16100,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/03/Diseno-sin-titulo-3-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2ADesodorante%20de%20piso%20concentrado%20%20x%201lt%2A%0A%2APrecio%3A%2A%20%2416%2C100.00%0D%0A%0D%0AGracias%21',
  },
  {
    id: 7,
    name: 'Esencia concentrada',
    category: 'Esencias',
    price: 20000,
    img: 'https://bouquetesencias.com/wp-content/uploads/2025/04/6-300x300.png',
    wa: 'https://web.whatsapp.com/send?phone=%2B542494665264&text=Me%20gustar%C3%ADa%20obtener%20este%20producto%0D%0A%0D%0A%2AEsencia%20concentrada%2A%0A%2APrecio%3A%2A%20%2420%2C000.00%0D%0A%0D%0AGracias%21',
  },
]

const fmt = (n: number) =>
  new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)

const categoryColors: Record<string, string> = {
  'Esencias':      '#2d4a2d',
  'Desodorantes':  '#3d6b3d',
  'Aromatizantes': '#c9a84c',
  'Desengrasante': '#5a7a5a',
}

export default function Products() {
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nuestros productos</span>
          <h2 className={styles.title}>
            Los más elegidos<br /><em>por nuestros clientes</em>
          </h2>
          <p className={styles.sub}>
            Consultá precio y disponibilidad directamente por WhatsApp.
            Vendemos al por mayor y al por menor.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p) => (
            <article key={p.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={p.img} alt={p.name} className={styles.img} />
                <span
                  className={styles.categoryTag}
                  style={{ background: categoryColors[p.category] || '#2d4a2d' }}
                >
                  {p.category}
                </span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.cardName}>{p.name}</h3>
                <div className={styles.cardBottom}>
                  <span className={styles.price}>{fmt(p.price)}</span>
                  <a
                    href={p.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waBtn}
                    aria-label={`Comprar ${p.name} por WhatsApp`}
                  >
                    <WAIcon /> Comprar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.verMas}>
          <a href="https://wa.link/3pc4x0" target="_blank" rel="noopener noreferrer" className={styles.verMasBtn}>
            Ver catálogo completo →
          </a>
        </div>
      </div>
    </section>
  )
}

function WAIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
