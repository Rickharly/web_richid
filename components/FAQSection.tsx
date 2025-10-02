'use client'

import { motion } from 'framer-motion'
import { Plus, Minus, Heart } from 'lucide-react'
import { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What exactly is identity transformation?",
      answer: "Identity transformation is the process of upgrading your core beliefs, values, and self-concept to match your highest aspirations. It's about becoming the person who can achieve what you want, not just learning new strategies."
    },
    {
      question: "How is this different from other coaching programs?",
      answer: "Most programs focus on tactics and strategies. We focus on the root cause - your identity. When you transform your identity, everything else (strategy, execution, relationships) naturally improves because you become the person who can handle success."
    },
    {
      question: "How long does the transformation take?",
      answer: "Most people see initial shifts within 30 days of the Identity Reset Challenge. Deeper transformation typically takes 3-6 months with consistent practice. The Identity OS Mastery program is designed for complete transformation over 6 months."
    },
    {
      question: "What if I'm not sure which program is right for me?",
      answer: "Start with the free Identity Code book and assessment. This will give you clarity on where you are and what you need. Most people begin with the Identity Reset Challenge, then progress to more intensive programs based on their results."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid programs. If you complete the Identity Reset Challenge and don't see results, we'll refund your investment. We're confident in our methods because they work."
    },
    {
      question: "Can I work with Richard directly?",
      answer: "Yes, but spots are extremely limited. Richard only works with 5 private coaching clients per quarter. You must apply and be accepted. Most people start with our programs and then apply for private coaching if they want more personalized attention."
    },
    {
      question: "What if I'm already successful?",
      answer: "Perfect! Our programs are designed for successful entrepreneurs who've hit invisible ceilings. You've proven you can achieve - now we help you break through to the next level by upgrading your identity to match your ambitions."
    },
    {
      question: "How do I get started?",
      answer: "Take our free assessment to discover your current identity archetype and limiting patterns. Then download The Identity Code book to begin your transformation journey. From there, you can choose the program that best fits your goals and timeline."
    }
  ]

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
        <div className="absolute top-24 left-12 w-5 h-5 bg-yellow-400/25 rounded-full blur-md animate-pulse"></div>
        <div className="absolute top-40 right-16 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.9s' }}></div>
        <div className="absolute bottom-36 left-1/4 w-3 h-3 bg-yellow-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-56 right-1/3 w-6 h-6 bg-yellow-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.6s' }}></div>
        <div className="absolute bottom-24 right-12 w-4 h-4 bg-yellow-400/28 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.4s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="heading-lg text-white mb-8">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about identity transformation and our programs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="therapeutic-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6 text-yellow-400" />
                    ) : (
                      <Plus className="h-6 w-6 text-yellow-400" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-600"
                  >
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-16"
          >
            <div className="therapeutic-card max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Start Your Transformation?</h3>
              <p className="text-gray-300 text-lg mb-8">
                Take the first step with our free assessment and discover what's really holding you back.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4 flex items-center justify-center shadow-xl">
                  Take Free Assessment
                </button>
                <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                  Download The Identity Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}