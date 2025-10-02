'use client'

import { motion } from 'framer-motion'
import { BookOpen, CheckCircle, ArrowRight, Star, Users, Award } from 'lucide-react'

export default function BookSection() {
  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const bookBenefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary-400" />,
      title: "Complete Clarity",
      description: "Understand exactly what's holding you back and how to fix it"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary-400" />,
      title: "Practical Tools",
      description: "Step-by-step frameworks you can implement immediately"
    },
    {
      icon: <Award className="h-6 w-6 text-primary-400" />,
      title: "Proven Systems",
      description: "Battle-tested methods used by 287+ successful entrepreneurs"
    }
  ]

  const whatIncluded = [
    "The Identity Code Book (Physical + Digital)",
    "AI Coach Access (24/7 Identity Navigation)",
    "Free Identity Assessment (€97 Value)",
    "30-Day Challenge Credit (€297 Value)",
    "Private Community Access",
    "Lifetime Updates & New Content"
  ]

  return (
    <section className="section-padding bg-dark-900">
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
              The Identity Code
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              <span className="text-primary-400 font-semibold">"You are not your programming—you are the programmer."</span>
              <br />
              Read the playbook. Install the OS. Transform your life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Book Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-32 w-32 text-white/80" />
                  </div>
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                >
                  Bestseller
                </motion.div>
              </div>
            </motion.div>

            {/* Book Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Essential Reading for Identity Transformation
                </h3>
                <p className="text-dark-300 text-lg leading-relaxed mb-6">
                  Your identity is not your personality—it's your programming. And if you don't re-write your code, 
                  AI will write it for you. Learn the Identity Operating System Framework to break free from pain 
                  programming, cultural limitations, and survival patterns that keep you small.
                </p>
                <p className="text-dark-300 text-lg leading-relaxed">
                  From Russian military conscript to successful entrepreneur, this is the complete guide to 
                  <span className="text-primary-400 font-semibold"> conscious identity transformation</span>.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {bookBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-dark-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* What's Included */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-dark-800 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              What's Included in Your Order
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {whatIncluded.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="text-dark-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => trackEvent('cta_click_get_book')}
              className="btn-primary text-xl px-12 py-6 flex items-center space-x-3 mx-auto group"
            >
              <span>Get The Book + Complete System</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-dark-400 mt-4">
              Instant digital access + Physical book shipped worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
