import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProgramsPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg text-white mb-8">
              Identity OS Mastery
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              The complete system for permanent identity transformation. 6-month intensive program. $2,997 (Payment plans available)
            </p>
            
            {/* Program Visual */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-600 max-w-md mx-auto">
                <div className="text-center">
                  <div className="w-56 h-72 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-purple-500/30 shadow-xl">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-400">6</div>
                      <div className="text-purple-300 text-lg">Months</div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Identity OS Mastery</h3>
                  <p className="text-gray-300 mb-6 text-lg">Complete transformation system</p>
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-500/30">
                    <div className="text-4xl font-bold text-purple-400 mb-2">$2,997</div>
                    <div className="text-gray-300 text-lg">Payment plans available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="btn-primary text-xl px-12 py-6 bg-purple-500 hover:bg-purple-600 shadow-xl">
              Apply for Mastery Program →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
