import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bouquet Esencias | Fábrica de esencias aromáticas — Tandil',
  description: 'Fábrica de esencias aromáticas con más de 30 años de experiencia. Esencias concentradas, perfuminas, desodorantes de piso y más. Envíos a todo el país.',
  keywords: 'esencias, perfuminas, desodorante de piso, fábrica de esencias, Tandil, aromas, fragancias, por mayor',
  openGraph: {
    title: 'Bouquet Esencias | Fábrica de esencias aromáticas',
    description: 'Más de 30 años creando las mejores soluciones aromáticas. Envíos a todo el país.',
    url: 'https://bouquetesencias.com',
    siteName: 'Bouquet Esencias',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
