'use client'

import { motion } from 'framer-motion'
import { Zap, CheckCircle, Clock, Target, ArrowRight, Shield, Users, Award } from 'lucide-react'

export default function ChallengeSection() {
  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const challengeFeatures = [
    {
      icon: <Clock className="h-6 w-6 text-primary-400" />,
      title: "21-Day Intensive Protocol",
      description: "Daily exercises designed to interrupt and reprogram self-sabotage patterns"
    },
    {
      icon: <Target className="h-6 w-6 text-primary-400" />,
      title: "Pattern Recognition Toolkit",
      description: "Identify your unique sabotage triggers before they derail you"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary-400" />,
      title: "Emergency Reset Protocols",
      description: "What to do when you catch yourself mid-sabotage"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-400" />,
      title: "Success Momentum Tracker",
      description: "Measure your progress and celebrate wins along the way"
    }
  ]

  const dailyStructure = [
    {
      day: "Week 1",
      title: "Pattern Recognition & Interrupt",
      description: "Identify your unique self-sabotage triggers and learn to catch yourself before you sabotage"
    },
    {
      day: "Week 2", 
      title: "Identity Reprogramming",
      description: "Discover hidden beliefs driving your self-sabotage and reprogram your identity for sustained success"
    },
    {
      day: "Week 3",
      title: "Momentum Maintenance",
      description: "Lock in new patterns through repetition and create your personal Success Sustainability Plan"
    }
  ]

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Entrepreneur",
      text: "I didn't realize how much I was sabotaging myself until I started this challenge. For the first time in years, I'm maintaining momentum instead of destroying it.",
      result: "Pattern interrupt success"
    },
    {
      name: "Marcus T.",
      role: "Business Owner",
      text: "Every time things started going well in my business, I'd find a way to mess it up. Three weeks into this challenge, I caught myself about to sabotage a major opportunity - and I stopped myself.",
      result: "Major opportunity saved"
    },
    {
      name: "Jennifer R.",
      role: "Professional",
      text: "I finally understand why I keep doing this to myself. More importantly, I now have tools to stop it. This challenge gave me my life back.",
      result: "Life transformation"
    }
  ]

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              The Self-Sabotage Stop Challenge
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              <span className="text-primary-400 font-semibold">21 days. Break the cycle. Keep the momentum.</span>
              <br />
              Reprogram the automatic patterns that sabotage you every time things start going well.
            </p>
            <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-300">100% Money-Back Guarantee</span>
            </div>
          </motion.div>

          {/* Challenge Overview */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Perfect for Anyone Who Sabotages Themselves Every Time Things Start Going Well
                </h3>
                <p className="text-dark-300 text-lg leading-relaxed mb-6">
                  A 21-day intensive program to interrupt and reprogram the automatic patterns 
                  that cause you to sabotage yourself. Includes pattern recognition tools, emergency 
                  reset protocols, and identity-level transformation work.
                </p>
                <p className="text-dark-300 leading-relaxed">
                  <span className="text-primary-400 font-semibold">Break the cycle once and for all.</span> 
                  The only 21-day challenge that targets the automatic programming running your self-sabotage patterns.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                {challengeFeatures.map((feature, index) => (
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
                onClick={() => trackEvent('cta_click_challenge')}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
              >
                <Zap className="h-5 w-5" />
                <span>Join the Self-Sabotage Stop Challenge</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Challenge Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-900 rounded-2xl p-8 border border-dark-700">
                {/* Challenge Progress Mockup */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Day 8 of 21</div>
                    <div className="text-primary-400 font-semibold">Identity Reprogramming Phase</div>
                  </div>

                  <div className="w-full bg-dark-700 rounded-full h-3">
                    <div className="bg-primary-500 h-3 rounded-full" style={{ width: '38%' }}></div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Today's Challenge</h4>
                      <p className="text-dark-300 text-sm mb-3">
                        Identify one self-sabotage pattern you've been running. Write down the trigger, 
                        then practice the emergency reset protocol.
                      </p>
                      <div className="flex items-center space-x-2 text-green-400 text-sm">
                        <CheckCircle className="h-4 w-4" />
                        <span>Completed</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-dark-700 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary-400">8</div>
                        <div className="text-dark-400 text-sm">Days Completed</div>
                      </div>
                      <div className="bg-dark-700 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary-400">13</div>
                        <div className="text-dark-400 text-sm">Days Remaining</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Rate */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-dark-800 border border-green-500/20 rounded-lg p-3"
              >
                <div className="text-xs text-green-400 font-semibold mb-1">Success Rate</div>
                <div className="text-white font-bold text-lg">94%</div>
                <div className="text-dark-400 text-xs">Complete Challenge</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Daily Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              21-Day Self-Sabotage Stop Journey
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyStructure.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center h-full flex flex-col"
                >
                  <div className="text-primary-400 font-bold text-sm mb-2">{phase.day}</div>
                  <h4 className="text-lg font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-dark-400 text-sm">{phase.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Real Results from Real People
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card h-full flex flex-col"
                >
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-300 text-sm mb-4 italic flex-1">"{testimonial.text}"</p>
                  <div className="border-t border-dark-600 pt-3">
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-dark-400 text-xs">{testimonial.role}</div>
                    <div className="text-primary-400 text-xs font-semibold mt-1">{testimonial.result}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-dark-900 rounded-2xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Break Free From Self-Sabotage?
            </h3>
            <p className="text-dark-300 text-lg mb-6 max-w-2xl mx-auto">
              Join 100+ successful people who have already broken their self-sabotage patterns 
              with the 21-Day Self-Sabotage Stop Challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => trackEvent('cta_click_challenge')}
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
              >
                <Zap className="h-5 w-5" />
                <span>Break Your Sabotage Patterns - $297</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="text-dark-400 text-sm">
                30-day money-back guarantee • No contracts
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

