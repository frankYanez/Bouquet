# Bouquet Esencias — Landing Next.js

Landing page profesional para [bouquetesencias.com](https://bouquetesencias.com), construida con Next.js 15 + TypeScript + CSS Modules.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: CSS Modules + Google Fonts
- **Deploy**: Vercel

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Correr en desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build
npm start
```

---

## Deploy en Vercel

### Opción 1 — Desde GitHub (recomendado)

1. Subí el proyecto a un repositorio GitHub
2. Entrá a [vercel.com](https://vercel.com) y conectá tu cuenta GitHub
3. Importá el repositorio
4. Vercel detecta Next.js automáticamente → **Deploy**
5. En el dashboard de Vercel → **Settings → Domains** → agregá `bouquetesencias.com`

### Opción 2 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Dominio personalizado

En Vercel → Settings → Domains → Add domain → `bouquetesencias.com`

Luego en tu proveedor DNS (Hostinger en tu caso):
- **A record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

---

## Imágenes

Las imágenes de productos se cargan desde el WordPress original mientras el dominio está en transición. Una vez migrado, descargalas a `/public/images/` y actualizá los `src` en `/src/components/Products.tsx` y `About.tsx`.

Script de descarga disponible: `descargar-imagenes.sh`

---

## Estructura

```
src/
├── app/
│   ├── layout.tsx       ← Metadata SEO + fuentes
│   ├── page.tsx         ← Ensamblado de secciones
│   └── globals.css      ← Variables CSS, animaciones, reset
└── components/
    ├── Navbar           ← Nav fija con scroll + mobile
    ├── Hero             ← Hero con botanicals SVG + shimmer
    ├── Features         ← 4 cards de beneficios
    ├── Categories       ← 3 categorías principales
    ├── About            ← Historia + imagen equipo
    ├── Products         ← Grid de 7 productos con precio
    ├── CTABanner        ← Banner de llamada a la acción
    ├── Contact          ← Datos de contacto + redes
    ├── Footer           ← Footer completo con columnas
    └── WhatsAppFloat    ← Botón flotante con pulse
```
