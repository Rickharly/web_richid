'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Target, Brain, Zap, BookOpen, Clock, Users, Star } from 'lucide-react'

export default function ProgramsSection() {
  const programs = [
    {
      title: "Identity Reset Challenge",
      description: "30 days to break through your biggest ceiling. Next cohort starts October 15th.",
      price: "$197",
      originalPrice: "$300",
      perfectFor: "Founders ready for rapid transformation",
      features: [
        "30-day intensive protocol",
        "Live group coaching calls",
        "Private founder community",
        "Daily transformation exercises",
        "Breakthrough guarantee"
      ],
      cta: "Secure Your Spot →",
      icon: Target,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      title: "Identity OS Mastery",
      description: "The complete 7-week transformation program. Limited to 100 founders.",
      price: "$3,000",
      originalPrice: null,
      perfectFor: "Serious founders ready for deep transformation",
      features: [
        "7 comprehensive modules",
        "Live coaching sessions",
        "Private community access",
        "Advanced assessment suite",
        "90-day follow-up support"
      ],
      cta: "Learn More →",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "💎 Work Directly with Richard",
      description: "Private coaching for serious founders. 3-month intensive transformation.",
      price: "$30,000",
      originalPrice: null,
      perfectFor: "High-achievers ready for quantum leap",
      features: [
        "3-month intensive program",
        "Private 1-on-1 sessions",
        "Personalized identity blueprint",
        "Advanced breakthrough techniques",
        "Lifetime access to Richard"
      ],
      cta: "Apply Now →",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "📖 The Identity Code (Free)",
      description: "The underground manual for systematic identity transformation.",
      price: "Free + Shipping",
      originalPrice: "$1,700+ Value",
      perfectFor: "Anyone ready to start their transformation",
      features: [
        "Complete Identity OS framework",
        "Digital assessments included",
        "Identity toolkit & worksheets",
        "Advanced identity decoder",
        "30-day email series"
      ],
      cta: "Get Free Book →",
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-gray-900 mb-6">
              Ready to Go Deeper?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your transformation pathway based on where you are and where you want to go.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`card-elevated p-8 relative overflow-hidden group ${program.bgColor} ${program.borderColor}`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <p className="text-sm text-gray-500 font-medium mb-4">
                      <strong>Perfect for:</strong> {program.perfectFor}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <div className="text-3xl font-bold text-gray-900">{program.price}</div>
                      {program.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">{program.originalPrice}</div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`btn-primary w-full flex items-center justify-center group ${
                    program.title.includes('Free') ? 'bg-green-600 hover:bg-green-700' : ''
                  }`}>
                    <span>{program.cta}</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Popular Badge */}
                  {program.title.includes('Reset Challenge') && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Not Sure Which Program is Right for You?
              </h3>
              <p className="text-gray-600 mb-6">
                Take our free assessment to discover your personalized transformation path.
              </p>
              <button className="btn-secondary text-lg px-8 py-4">
                Take Free Assessment →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}