import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CoachingPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg text-white mb-8">
              Work Directly with Richard
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Exclusive 1-on-1 coaching with The Transformation Architect. Limited spots available. $5,000/month
            </p>
            
            {/* Coaching Visual */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-600 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-56 h-72 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-yellow-500/30 shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">1-on-1</div>
                      <div className="text-yellow-300 text-lg">Coaching</div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Private Coaching</h3>
                  <p className="text-gray-300 mb-6 text-lg">Direct access to Richard</p>
                  <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl p-6 border border-yellow-500/30">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">$5,000</div>
                    <div className="text-gray-300 text-lg">Per month</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn-primary text-xl px-12 py-6 shadow-xl">
              Apply for Private Coaching →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
