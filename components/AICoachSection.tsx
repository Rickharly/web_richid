'use client'

import { motion } from 'framer-motion'
import { Brain, MessageCircle, Clock, Zap, ArrowRight, CheckCircle } from 'lucide-react'

export default function AICoachSection() {
  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary-400" />,
      title: "24/7 Availability",
      description: "Get instant guidance whenever you need it, day or night"
    },
    {
      icon: <Brain className="h-6 w-6 text-primary-400" />,
      title: "Trained on The Book",
      description: "Powered by the complete Identity Code methodology"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-400" />,
      title: "Personalized Guidance",
      description: "Tailored advice based on your unique assessment results"
    }
  ]

  const capabilities = [
    "Answer questions about identity transformation",
    "Provide daily action guidance",
    "Help overcome specific blocks",
    "Suggest personalized strategies",
    "Track your progress and growth",
    "Offer motivation and accountability"
  ]

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Meet Your AI Identity Coach
                </h2>
                <p className="text-xl text-dark-300 mb-6">
                  <span className="text-primary-400 font-semibold">24/7 identity navigation</span>, 
                  trained on the book & your assessment results.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  Your personal AI coach that understands your unique identity archetype and provides 
                  instant, personalized guidance to help you break through blocks and accelerate 
                  your transformation journey.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-dark-400">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                onClick={() => trackEvent('cta_click_assessment')}
                className="btn-secondary flex items-center space-x-2 group"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Start with Free Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* AI Coach Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-900 rounded-2xl p-8 border border-dark-700">
                {/* Chat Interface Mockup */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">AI Identity Coach</div>
                      <div className="text-green-400 text-sm">Online</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                      <p className="text-white text-sm">
                        "Based on your assessment, I can see you're struggling with the 'Perfectionist' 
                        archetype. Let's work on shifting from 'perfect or nothing' to 'progress over perfection'..."
                      </p>
                    </div>

                    <div className="bg-dark-700 rounded-lg p-4 ml-8">
                      <p className="text-dark-300 text-sm">
                        "That makes sense. What's the first step I should take today?"
                      </p>
                    </div>

                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                      <p className="text-white text-sm">
                        "Great question! Let's start with the 5-minute 'Identity Reset' exercise. 
                        I'll guide you through it step by step..."
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-6">
                    <div className="flex-1 bg-dark-700 rounded-lg px-4 py-2 text-dark-400 text-sm">
                      Type your message...
                    </div>
                    <button className="bg-primary-500 hover:bg-primary-600 rounded-lg p-2 transition-colors">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Capabilities */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-dark-800 border border-primary-500/20 rounded-lg p-3 max-w-xs"
              >
                <div className="text-xs text-primary-400 font-semibold mb-2">AI Capabilities:</div>
                <div className="space-y-1">
                  {capabilities.slice(0, 3).map((capability, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-400" />
                      <span className="text-dark-300 text-xs">{capability}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

