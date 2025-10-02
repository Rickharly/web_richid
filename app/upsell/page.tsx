import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function UpsellPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Upsell Section */}
      <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-lg text-white mb-8">
              🎉 Congratulations on Your Order!
            </h1>
            <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
              Before you go, here's a special one-time offer just for you...
            </p>
            
            {/* Upsell Offer */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl p-12 border border-red-500/30 mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Identity Reset Challenge
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                30 days to break through your biggest ceiling. Complete every day, get your money back.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">What's Included:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <span className="text-red-400">✓</span>
                      <span>30-day intensive protocol</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-red-400">✓</span>
                      <span>Live group coaching calls</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-red-400">✓</span>
                      <span>Private founder community</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-red-400">✓</span>
                      <span>Daily transformation exercises</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-red-400">✓</span>
                      <span>Breakthrough guarantee</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-600">
                    <div className="text-5xl font-bold text-red-400 mb-2">$197</div>
                    <div className="text-gray-300 text-lg line-through mb-2">$300 Regular Price</div>
                    <div className="text-yellow-400 font-semibold">One-time payment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-600 mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">Our Guarantee</h3>
              <p className="text-gray-300 text-lg">
                Complete every single day of the 30-day challenge, and if you don't see breakthrough results, 
                we'll refund every penny. No questions asked.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-2xl px-16 py-8 bg-red-500 hover:bg-red-600 shadow-xl">
                Yes, Add Challenge - $197
              </button>
              <button className="btn-secondary text-xl px-12 py-6">
                No Thanks, Continue
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mt-6">
              This offer is only available for the next 10 minutes
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
