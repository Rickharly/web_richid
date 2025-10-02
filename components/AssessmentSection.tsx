'use client'

import { motion } from 'framer-motion'
import { Target, Brain, BarChart3, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react'

export default function AssessmentSection() {
  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const assessmentFeatures = [
    {
      icon: <Target className="h-6 w-6 text-primary-400" />,
      title: "Discover Your Archetype",
      description: "Identify your unique identity pattern and how it's affecting your results"
    },
    {
      icon: <Brain className="h-6 w-6 text-primary-400" />,
      title: "Uncover Hidden Blocks",
      description: "Find the pain, cultural, and survival programming holding you back"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary-400" />,
      title: "Get Your Roadmap",
      description: "Receive a personalized transformation plan based on your results"
    }
  ]

  const assessmentSteps = [
    {
      step: "01",
      title: "Answer 15 Questions",
      description: "Quick, insightful questions about your current patterns and challenges"
    },
    {
      step: "02", 
      title: "Get Instant Analysis",
      description: "AI-powered analysis reveals your archetype and core blocks"
    },
    {
      step: "03",
      title: "Receive Your Report",
      description: "Detailed report with personalized recommendations and next steps"
    }
  ]

  const archetypes = [
    { name: "The Perfectionist", description: "Struggles with 'perfect or nothing' mindset" },
    { name: "The People Pleaser", description: "Puts others' needs before their own success" },
    { name: "The Imposter", description: "Feels like a fraud despite external achievements" },
    { name: "The Overachiever", description: "Never feels like enough despite constant success" },
    { name: "The Saboteur", description: "Unconsciously undermines their own progress" },
    { name: "The Martyr", description: "Sacrifices personal goals for others' approval" }
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
              Take the Free Identity Assessment
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              <span className="text-primary-400 font-semibold">Discover your archetype + blockers</span> 
              (pain, cultural, survival programming) in just 5 minutes.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-primary-300">Takes only 5 minutes</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Assessment Visual */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
                {/* Assessment Progress Mockup */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">Identity Assessment</div>
                    <div className="text-dark-400">Question 3 of 15</div>
                  </div>

                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-primary-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-white font-semibold">
                      When facing a new challenge, I typically:
                    </div>
                    <div className="space-y-3">
                      {['Research everything before starting', 'Jump in and figure it out', 'Ask others for advice first', 'Avoid it until I have to'].map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 p-3 bg-dark-700 rounded-lg hover:bg-dark-600 cursor-pointer transition-colors">
                          <input type="radio" name="question3" className="text-primary-500" />
                          <span className="text-dark-300 text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button className="btn-tertiary">Previous</button>
                    <button className="btn-primary">Next</button>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-dark-800 border border-primary-500/20 rounded-lg p-4"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-4 w-4 text-primary-400" />
                  <span className="text-xs text-primary-400 font-semibold">Assessment Stats</span>
                </div>
                <div className="text-white font-bold text-lg">2,847</div>
                <div className="text-dark-400 text-xs">Completed This Month</div>
              </motion.div>
            </motion.div>

            {/* Assessment Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  What You'll Discover
                </h3>
                <p className="text-dark-300 text-lg leading-relaxed">
                  Our proprietary assessment analyzes your responses to reveal your unique 
                  identity archetype and the specific blocks preventing you from reaching 
                  your full potential.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {assessmentFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
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
                className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 group"
              >
                <Target className="h-5 w-5" />
                <span>Take Free Assessment</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Assessment Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {assessmentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-dark-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Archetypes Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Common Identity Archetypes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {archetypes.map((archetype, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-700 rounded-lg p-4 hover:bg-dark-600 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-1">
                    {archetype.name}
                  </h4>
                  <p className="text-dark-400 text-sm">
                    {archetype.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

