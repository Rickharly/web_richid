'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, CheckCircle, Star, Users, Award, Clock, Shield } from 'lucide-react'

export default function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const promiseBullets = [
    "Discover your exact Identity Archetype and why you're stuck",
    "Uncover the 3 hidden blocks keeping you from breakthrough success",
    "Get your personalized Identity OS upgrade roadmap",
    "Access the complete system used by 287+ high achievers",
    "Transform from struggling to thriving in 30 days or less"
  ]

  const objectionKillers = [
    {
      icon: <Shield className="h-6 w-6 text-primary-400" />,
      title: "30-Day Money-Back Guarantee",
      description: "Complete the challenge or get your money back. No questions asked."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-400" />,
      title: "Proven System",
      description: "287+ successful transformations with real results and testimonials."
    },
    {
      icon: <Award className="h-6 w-6 text-primary-400" />,
      title: "Instant Access",
      description: "Get immediate access to all materials and start transforming today."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-400" />,
      title: "Lifetime Updates",
      description: "Free updates and new content as the system evolves."
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
              Watch This Exclusive Welcome Message
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              In the next 3 minutes, you'll discover the exact system I used to go from 
              <span className="text-primary-400 font-semibold"> struggling to thriving</span> - 
              and how you can do the same.
            </p>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-16"
          >
            <div className="relative aspect-video bg-dark-900 rounded-2xl overflow-hidden border border-dark-700">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsPlaying(true)
                      trackEvent('play_vsl')
                    }}
                    className="group flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300"
                  >
                    <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-4">Video Player</div>
                    <div className="text-dark-400">VSL content would be embedded here</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Promise Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Here's What You'll Discover:
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {promiseBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="text-dark-300 text-lg">{bullet}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Objection Killers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {objectionKillers.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-dark-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-700 rounded-xl p-6 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-dark-300">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-400" />
                <span className="font-semibold">287+ Success Stories</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary-400" />
                <span className="font-semibold">21+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
