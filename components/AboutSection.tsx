'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Target } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              About Rich Identity
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-dark-300 max-w-3xl mx-auto"
            >
              Your identity is not your personality—it's your programming. And if you don't re-write your code, AI will write it for you.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The Identity Operating System Framework
              </h3>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                From Russian military conscript to successful entrepreneur, I've developed a complete system for conscious identity transformation that has helped 287+ high-performance entrepreneurs break free from their programming and achieve extraordinary results.
              </p>
              <p className="text-dark-300 text-lg leading-relaxed">
                This isn't just another self-help approach. It's a scientifically-backed methodology that addresses the root causes of why you're stuck and provides the exact tools to upgrade your Identity OS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-900 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">The Identity Code</h4>
                      <p className="text-dark-400 text-sm">Complete transformation playbook</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">287+ Success Stories</h4>
                      <p className="text-dark-400 text-sm">Real transformations, real results</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">21+ Years Experience</h4>
                      <p className="text-dark-400 text-sm">Battle-tested methodology</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Identity?</h3>
            <p className="text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Join 287+ successful entrepreneurs who have upgraded their Identity OS and achieved breakthrough results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold py-4 px-8 rounded-lg transition-colors">
                Get The Book
              </button>
              <button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-dark-900 font-semibold py-4 px-8 rounded-lg transition-colors">
                Take Free Assessment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



