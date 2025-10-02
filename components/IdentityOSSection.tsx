'use client'

import { motion } from 'framer-motion'
import { Brain, CheckCircle, Users, Star, Award, Heart, Sparkles } from 'lucide-react'

export default function IdentityOSSection() {
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
        <div className="absolute top-20 left-20 w-5 h-5 bg-purple-400/25 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-44 right-20 w-4 h-4 bg-purple-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-purple-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-56 right-1/4 w-3 h-3 bg-purple-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-purple-400/28 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.3s' }}></div>
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
              Identity OS Mastery
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The complete system for permanent identity transformation. 6-month intensive program with 1-on-1 coaching.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column: Program Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 shadow-2xl border border-gray-600">
                  <div className="text-center">
                    <div className="w-56 h-72 bg-gradient-to-br from-purple-500/30 to-purple-600/30 rounded-2xl mx-auto mb-8 flex items-center justify-center border border-purple-500/30 shadow-xl">
                      <div className="text-center">
                        <Brain className="h-20 w-20 text-purple-400 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-purple-400">6</div>
                        <div className="text-purple-300 text-lg">Months</div>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Identity OS Mastery</h3>
                    <p className="text-gray-300 mb-6 text-lg">Complete transformation system</p>
                    <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-6 border border-purple-500/30">
                      <div className="text-4xl font-bold text-purple-400 mb-2">6 Months</div>
                      <div className="text-gray-300 text-lg">Intensive Program</div>
                    </div>
                  </div>
                </div>
                {/* Sparkle effect for magical touch */}
                <div className="absolute top-8 right-8">
                  <Sparkles className="h-8 w-8 text-purple-400" />
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
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">6-month intensive program</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Weekly 1-on-1 coaching calls</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Complete identity audit & blueprint</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Advanced identity protocols</span>
                  </li>
                  <li className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">Lifetime access to materials</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="therapeutic-card">
                <div className="flex items-center space-x-4 mb-4">
                  <Heart className="h-6 w-6 text-purple-400" />
                  <h4 className="text-xl font-semibold text-white">Perfect for:</h4>
                </div>
                <p className="text-gray-300 text-lg">Serious entrepreneurs ready for deep transformation</p>
              </motion.div>

              <motion.a 
                href="/programs" 
                variants={itemVariants} 
                className="btn-primary text-xl px-10 py-6 w-full flex items-center justify-center bg-purple-500 hover:bg-purple-600"
              >
                <Award className="h-6 w-6 mr-3" />
                Apply for Mastery Program →
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
              <h3 className="text-2xl font-bold text-white mb-8">Elite Transformation Results</h3>
              <div className="flex items-center justify-center space-x-12 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-gray-400">Elite Members</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-gray-400">Months</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-purple-400" />
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-gray-400">Success Rate</div>
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