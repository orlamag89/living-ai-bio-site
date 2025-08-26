import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PainPoints from '@/components/PainPoints'
import BetaSignup from '@/components/BetaSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      <PainPoints />
      <BetaSignup />
      <Footer />
    </main>
  )
}
