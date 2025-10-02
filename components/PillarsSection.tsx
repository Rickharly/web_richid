'use client'

import { motion } from 'framer-motion'
import { Brain, DollarSign, Heart, Users, Briefcase, Award, Smile } from 'lucide-react'

export default function PillarsSection() {
  const pillars = [
    {
      icon: Brain,
      title: 'Mindset',
      description: 'Upgrade your mental programming and break through limiting beliefs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Wealth',
      description: 'Build your money machine and create financial freedom',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Health',
      description: 'Master your body and energy for peak performance',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Relationships',
      description: 'Create deep, meaningful connections that elevate your life',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Business',
      description: 'Scale your business exponentially with proven systems',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Leadership',
      description: 'Become a great leader who inspires and transforms others',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Smile,
      title: 'Happiness',
      description: 'Find lasting joy and fulfillment in every area of life',
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-black mb-6"
            >
              Pillars for an Extraordinary Life
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Master every area of your life with our comprehensive identity transformation system
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-none p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="mt-6 flex items-center text-black font-semibold group-hover:text-gray-600 transition-colors">
                    <span className="text-sm">Explore</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="btn-primary text-xl py-6 px-12">
              Start now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
