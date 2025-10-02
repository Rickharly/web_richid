'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowRight, Brain } from 'lucide-react'

export default function WhySection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="product-section relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
      {/* Background Light Bulbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-1/3 w-5 h-5 bg-yellow-400/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="heading-lg text-white mb-8">
              Are You Running Outdated Code?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I understand the struggle. You've achieved more than most people dream of, yet something feels off. Let me help you understand why.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <motion.p variants={itemVariants} className="text-2xl text-gray-300 leading-relaxed mb-8">
                You've built a business, assembled a team, maybe even raised funding or scaled past seven figures. You've done everything "right."
              </motion.p>
              <motion.div variants={itemVariants} className="inline-flex items-center px-8 py-4 bg-yellow-500/20 rounded-2xl border border-yellow-500/30">
                <Brain className="h-6 w-6 text-yellow-400 mr-3" />
                <p className="text-3xl font-bold text-yellow-400">But something's wrong.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 176, 56, 0.3)',
                boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl" style={{
                background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}></div>
              
              {/* Content */}
              <div className="relative z-10">
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-8 text-center">
                Despite all your success, you feel like you're:
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Hitting invisible ceilings you can't break through no matter how hard you push</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Playing a role that doesn't feel authentic or sustainable</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Burning out even though you're doing what you 'love'</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Stuck in patterns that worked before but now feel limiting</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Questioning everything - 'Is this really what I want?'</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:bg-gray-700/70 transition-colors">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1 border border-yellow-500/30">
                    <span className="text-yellow-400 text-sm font-bold">✗</span>
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">Comparing yourself to others and feeling like an impostor</span>
                </motion.div>
              </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center space-y-8"
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-white">
                Here's what most people don't understand:
              </motion.h3>
              <motion.p variants={itemVariants} className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Your business can only grow as much as your identity allows. Your revenue ceiling, your leadership ceiling, your fulfillment ceiling—they're all identity ceilings.
              </motion.p>
            </motion.div>

            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center rounded-3xl p-12 relative overflow-hidden"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(212, 176, 56, 0.3)',
                boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl" style={{
                background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}></div>
              
                  {/* Content */}
                  <div className="relative z-10">
                    <p className="text-3xl font-semibold text-yellow-400 italic mb-6 leading-relaxed" style={{
                      textShadow: '0 0 10px rgba(212, 176, 56, 0.3)'
                    }}>
                      "Identity is the hidden operating system behind everything. If your Identity OS is outdated, nothing else matters."
                    </p>
                    <p className="text-gray-300 text-xl">— Richard Berkut, The Transformation Architect</p>
                  </div>
            </motion.blockquote>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <motion.p variants={itemVariants} className="text-3xl font-bold text-white mb-10 leading-relaxed">
                The solution isn't motivation. It's not willpower. It's not another course. The solution is systematic identity transformation.
              </motion.p>
              <motion.button variants={itemVariants} className="btn-primary text-xl px-12 py-6 flex items-center mx-auto shadow-xl">
                Start Your Transformation Journey
                <ArrowRight className="h-6 w-6 ml-3" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}