'use client'

import { motion } from 'framer-motion'
import { Target, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AssessmentPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12" style={{ backgroundColor: '#140627' }}>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url(/header-background.svg)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-[#140627]/90 via-[#140627]/80 to-[#140627]/90" />

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Free Identity Assessment
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
              >
                <span className="text-yellow-400 font-semibold">Discover your archetype + blockers</span> (pain, cultural, survival programming) in just 5 minutes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center space-x-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-3 mb-12"
              >
                <Clock className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-yellow-300">Takes only 5 minutes</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Assessment Preview */}
        <section className="section-padding" style={{ backgroundColor: '#140627' }}>
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative">
                  <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white mb-2">Identity Assessment</div>
                        <div className="text-gray-400">Question 3 of 15</div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <div className="space-y-4">
                        <div className="text-white font-semibold">When facing a new challenge, I typically:</div>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
                            <input type="radio" className="text-yellow-500" name="question3"/>
                            <span className="text-gray-300 text-sm">Research everything before starting</span>
                          </label>
                          <label className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
                            <input type="radio" className="text-yellow-500" name="question3"/>
                            <span className="text-gray-300 text-sm">Jump in and figure it out</span>
                          </label>
                          <label className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
                            <input type="radio" className="text-yellow-500" name="question3"/>
                            <span className="text-gray-300 text-sm">Ask others for advice first</span>
                          </label>
                          <label className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
                            <input type="radio" className="text-yellow-500" name="question3"/>
                            <span className="text-gray-300 text-sm">Avoid it until I have to</span>
                          </label>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Previous</button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-colors">Next</button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-yellow-500/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className="h-4 w-4 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-semibold">Assessment Stats</span>
                    </div>
                    <div className="text-white font-bold text-lg">2,847</div>
                    <div className="text-gray-400 text-xs">Completed This Month</div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You'll Discover</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Our proprietary assessment analyzes your responses to reveal your unique identity archetype and the specific blocks preventing you from reaching your full potential.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Target className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Your Identity Archetype</h4>
                        <p className="text-gray-400">Discover your unique identity pattern and how it shapes your decisions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Hidden Blocks</h4>
                        <p className="text-gray-400">Identify the 3 main obstacles keeping you from breakthrough success</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <ArrowRight className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Personalized Roadmap</h4>
                        <p className="text-gray-400">Get your custom Identity OS upgrade plan with specific next steps</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Discover Your Identity?</h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Take the free assessment and get your personalized identity transformation roadmap in just 5 minutes.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-xl py-6 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto group">
                  <span>Start Free Assessment</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-gray-400 mt-4 text-sm">
                  No email required • Instant results • 100% free
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}