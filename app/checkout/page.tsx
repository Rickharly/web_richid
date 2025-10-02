import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CheckoutPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Checkout Section */}
      <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Order Summary */}
              <div className="space-y-8">
                <h1 className="heading-lg text-white mb-8">Complete Your Order</h1>
                
                {/* Main Product */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-20 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-lg flex items-center justify-center">
                      <span className="text-yellow-400 text-sm font-bold">Book</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">The Identity Code</h3>
                      <p className="text-gray-300">Complete Identity OS Framework</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Free + Shipping</span>
                    <span className="text-2xl font-bold text-yellow-400">$9.97</span>
                  </div>
                </div>

                {/* Order Bump */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-600 border-dashed">
                  <div className="flex items-start space-x-4">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">Extended Assessment Report</h4>
                      <p className="text-gray-300 text-sm mb-3">
                        Get your detailed identity analysis with personalized recommendations. Usually $97.
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Add to order</span>
                        <span className="text-xl font-bold text-yellow-400">$27</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Total */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <span className="text-white">Total</span>
                    <span className="text-yellow-400">$36.97</span>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white mb-6">Shipping Information</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Address</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">City</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">State</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">ZIP Code</label>
                      <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Country</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </form>

                {/* Payment Section */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
                  <h3 className="text-lg font-semibold text-white mb-4">Payment Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">Expiry</label>
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">CVC</label>
                        <input type="text" placeholder="123" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                      </div>
                      <div>
                        <label className="block text-gray-300 text-sm font-medium mb-2">ZIP</label>
                        <input type="text" placeholder="12345" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                  <span>🔒 Secure Payment</span>
                  <span>•</span>
                  <span>30-Day Guarantee</span>
                  <span>•</span>
                  <span>SSL Encrypted</span>
                </div>

                {/* Complete Order Button */}
                <button className="btn-primary text-xl px-12 py-6 w-full shadow-xl">
                  Complete Order - $36.97
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}