import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhySection from '@/components/WhySection'
import IdentityCodeSection from '@/components/IdentityCodeSection'
import IdentityResetSection from '@/components/IdentityResetSection'
import IdentityOSSection from '@/components/IdentityOSSection'
import PrivateCoachingSection from '@/components/PrivateCoachingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <WhySection />
      <IdentityCodeSection />
      <IdentityResetSection />
      <IdentityOSSection />
      <PrivateCoachingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}