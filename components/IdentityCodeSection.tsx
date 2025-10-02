'use client'

import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, Download, Users, Star, Heart, Sparkles } from 'lucide-react'

export default function IdentityCodeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="product-section relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
      {/* Background Light Bulbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-5 h-5 bg-yellow-400/25 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-32 right-24 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 bg-yellow-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-48 right-1/4 w-3 h-3 bg-yellow-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.1s' }}></div>
        <div className="absolute bottom-16 right-16 w-4 h-4 bg-yellow-400/28 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.8s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="heading-lg text-white mb-8">
              The Identity Code
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The underground manual for systematic identity transformation. Complete framework for upgrading your identity OS.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column: Book Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-600">
                  <div className="text-center">
                    <div className="w-56 h-72 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-yellow-500/30 shadow-xl">
                      <div className="text-center">
                        <BookOpen className="h-20 w-20 text-yellow-400 mx-auto mb-4" />
                        <div className="text-yellow-400 text-2xl font-bold">The Identity Code</div>
                        <div className="text-yellow-300 text-sm">Complete Framework</div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">The Identity Code</h3>
                    <p className="text-gray-300 mb-6 text-lg">Complete Identity OS Framework</p>
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-2xl p-6 border border-yellow-500/30">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">Complete Framework</div>
                      <div className="text-gray-300 text-lg">Free with shipping</div>
                    </div>
                  </div>
                </div>
                {/* Sparkle effect for magical touch */}
                <div className="absolute top-8 right-8">
                  <Sparkles className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
            </motion.div>

            {/* Right Column: Features and CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView="visible"
              variants={containerVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-10"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-3xl font-bold text-white mb-8">What's Included:</h3>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Complete Identity OS framework</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Digital assessments included</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Identity toolkit & worksheets</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Advanced identity decoder</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">30-day email series</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-3xl p-8 relative overflow-hidden" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 176, 56, 0.3)',
                boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <Heart className="h-6 w-6 text-yellow-400" />
                    <h4 className="text-xl font-semibold text-white">Perfect for:</h4>
                  </div>
                  <p className="text-gray-300 text-lg">Anyone ready to start their transformation journey</p>
                </div>
              </motion.div>

              <a href="/book-vsl" className="btn-primary text-xl px-10 py-6 w-full flex items-center justify-center shadow-xl">
                <Download className="h-6 w-6 mr-3" />
                Get Your Free Book →
              </a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto rounded-3xl p-8 relative overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 176, 56, 0.3)',
              boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl" style={{
                background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Join Thousands Who've Transformed</h3>
                <div className="flex items-center justify-center space-x-12 text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold">47,000+</div>
                      <div className="text-gray-400">Downloads</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold">4.9/5</div>
                      <div className="text-gray-400">Rating</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-8 w-8 text-yellow-400" />
                    <div>
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-gray-400">Free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}