'use client'

import { motion } from 'framer-motion'
import { Target, CheckCircle, Zap, Users, Clock, Calendar, Heart, Sparkles } from 'lucide-react'

export default function IdentityResetSection() {
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
        <div className="absolute top-24 left-12 w-4 h-4 bg-red-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-36 right-16 w-5 h-5 bg-red-400/25 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-36 left-1/4 w-3 h-3 bg-red-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-52 right-1/3 w-6 h-6 bg-red-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.3s' }}></div>
        <div className="absolute bottom-24 right-12 w-4 h-4 bg-red-400/28 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.1s' }}></div>
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
              Identity Reset Challenge
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              30 days to break through your biggest ceiling. Next cohort starts October 15th. Limited spots available.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column: Challenge Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-600">
                  <div className="text-center">
                    <div className="w-56 h-72 bg-gradient-to-br from-red-500/30 to-red-600/30 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-red-500/30 shadow-xl">
                      <div className="text-center">
                        <Target className="h-20 w-20 text-red-400 mx-auto mb-4" />
                        <div className="text-5xl font-bold text-red-400">30</div>
                        <div className="text-red-300 text-lg">Days</div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Identity Reset Challenge</h3>
                    <p className="text-gray-300 mb-6 text-lg">Break through your biggest ceiling</p>
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-500/30">
                      <div className="text-4xl font-bold text-red-400 mb-2">30 Days</div>
                      <div className="text-gray-300 text-lg">Intensive Program</div>
                    </div>
                  </div>
                </div>
                {/* Sparkle effect for magical touch */}
                <div className="absolute top-8 right-8">
                  <Sparkles className="h-8 w-8 text-red-400" />
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
                    <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">30-day intensive protocol</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Live group coaching calls</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Private founder community</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Daily transformation exercises</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Breakthrough guarantee</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="rounded-3xl p-8 relative overflow-hidden" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, rgba(239, 68, 68, 0.1) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <Heart className="h-6 w-6 text-red-400" />
                    <h4 className="text-xl font-semibold text-white">Perfect for:</h4>
                  </div>
                  <p className="text-gray-300 text-lg">Founders ready for rapid transformation</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-red-500/10 rounded-2xl p-6 border border-red-500/30">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-5 w-5 text-red-400" />
                  <span className="font-semibold text-white">Next Cohort Starts:</span>
                </div>
                <p className="text-gray-300 text-lg">October 15th, 2024</p>
              </motion.div>

              <motion.a 
                href="/challenge" 
                variants={itemVariants} 
                className="btn-primary text-xl px-10 py-6 w-full flex items-center justify-center bg-red-500 hover:bg-red-600"
              >
                <Zap className="h-6 w-6 mr-3" />
                Secure Your Spot →
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="therapeutic-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8">Join Thousands Who've Transformed</h3>
              <div className="flex items-center justify-center space-x-12 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-red-400" />
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-gray-400">Participants</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-red-400" />
                  <div>
                    <div className="text-2xl font-bold">30</div>
                    <div className="text-gray-400">Days</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-red-400" />
                  <div>
                    <div className="text-2xl font-bold">Guaranteed</div>
                    <div className="text-gray-400">Results</div>
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