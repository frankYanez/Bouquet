import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Categories from '@/components/Categories'
import About from '@/components/About'
import Products from '@/components/Products'
import CTABanner from '@/components/CTABanner'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
        <About />
        <Products />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
