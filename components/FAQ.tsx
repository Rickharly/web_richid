'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What exactly is included in The Identity Code package?",
      answer: "The Identity Code package includes: 1) Physical + Digital copy of The Identity Code book, 2) AI Coach access (24/7 identity navigation), 3) Free Identity Assessment (€97 value), 4) 30-Day Challenge credit (€297 value), 5) Private community access, and 6) Lifetime updates & new content. It's a complete system for identity transformation."
    },
    {
      question: "How does the 30-day money-back guarantee work?",
      answer: "We're so confident in our system that we offer a 30-day money-back guarantee. If you complete the 30-Day Challenge and don't see significant improvement in your mindset, confidence, and results, we'll refund your entire purchase. No questions asked. This applies to both the book package and the challenge."
    },
    {
      question: "What is the Identity Assessment and how long does it take?",
      answer: "The Identity Assessment is a proprietary 15-question evaluation that reveals your unique identity archetype and the specific blocks preventing your success. It takes about 5 minutes to complete and provides instant analysis of your pain programming, cultural limitations, and survival patterns. You'll receive a detailed report with personalized recommendations."
    },
    {
      question: "How does the AI Coach work?",
      answer: "Our AI Coach is trained on The Identity Code methodology and your specific assessment results. It provides 24/7 personalized guidance, answers questions about identity transformation, offers daily action guidance, helps overcome specific blocks, suggests personalized strategies, and tracks your progress. It's like having a personal identity coach available whenever you need it."
    },
    {
      question: "Is this suitable for beginners or only experienced entrepreneurs?",
      answer: "The Identity Code system is designed for anyone ready to transform their identity, from complete beginners to seasoned entrepreneurs. The book provides foundational knowledge, the assessment identifies your specific needs, and the AI coach adapts to your level. Whether you're just starting your journey or looking to break through invisible ceilings, this system will meet you where you are."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most people notice immediate shifts in awareness and mindset within the first week. Significant behavioral changes typically occur within 2-3 weeks, and major life transformations often happen within 30-60 days. However, results vary based on individual commitment and application. The key is consistent daily practice with the provided tools and exercises."
    },
    {
      question: "Do I need to read the book before taking the assessment?",
      answer: "No, you can take the assessment first to get immediate insights into your identity patterns. However, reading the book will give you deeper understanding of the concepts and help you get more value from the assessment results. Many people find it helpful to take the assessment, read the book, then revisit their assessment with new understanding."
    },
    {
      question: "What if I'm already successful but feel stuck?",
      answer: "This system is perfect for high achievers who've hit invisible ceilings. The Identity Code helps identify the subconscious programming that's keeping you from your next level of success. Many of our most successful clients were already doing well but needed to upgrade their identity to match their ambitions and break through to quantum leap results."
    },
    {
      question: "Is there ongoing support after purchase?",
      answer: "Yes! You get lifetime access to the AI Coach, private community, and all future updates. We also provide email support for any questions about the system. The 30-Day Challenge includes additional accountability and group support. Plus, you'll receive new content and advanced strategies as we continue to develop the system."
    },
    {
      question: "Can I access this on mobile devices?",
      answer: "Absolutely! The entire system is mobile-optimized. You can read the digital book, take the assessment, access the AI Coach, and participate in the 30-Day Challenge all from your phone or tablet. The AI Coach is particularly convenient for getting guidance on-the-go throughout your day."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-dark-800">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Everything you need to know about The Identity Code system and your transformation journey.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900 rounded-xl border border-dark-700 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-dark-800 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-primary-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-dark-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-dark-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16 bg-dark-900 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-dark-300 text-lg mb-6 max-w-2xl mx-auto">
              We're here to help! Book a free discovery call and get all your questions 
              answered with personalized guidance.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Book Free Discovery Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



