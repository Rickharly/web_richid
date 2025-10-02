'use client'

import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech CEO, $50M ARR",
      content: "Richard's identity work completely transformed how I lead. I went from constantly doubting myself to making bold decisions with confidence. Our revenue grew 300% in 18 months.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Serial Entrepreneur",
      content: "I was stuck at $2M revenue for 3 years. The Identity Code showed me exactly what was holding me back. Now I'm scaling to $20M with ease and actually enjoying the process.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, HealthTech Startup",
      content: "The Identity Reset Challenge was a game-changer. I finally stopped trying to be someone I'm not and embraced my authentic leadership style. My team's performance improved dramatically.",
      rating: 5
    },
    {
      name: "David Park",
      role: "E-commerce Founder",
      content: "Working directly with Richard was worth every penny. He helped me identify the limiting beliefs I didn't even know I had. My business and personal life are both thriving now.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "SaaS Founder",
      content: "The Identity OS Mastery program gave me the complete framework I needed. I went from burning out to scaling efficiently while maintaining my sanity and relationships.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Real Estate Entrepreneur",
      content: "Richard's approach is different from anything else out there. He doesn't just give you strategies - he helps you become the person who can execute them. Life-changing work.",
      rating: 5
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="product-section relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
      {/* Background Light Bulbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-36 right-20 w-5 h-5 bg-yellow-400/25 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.6s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-yellow-400/35 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-52 right-1/4 w-6 h-6 bg-yellow-400/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-400/28 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-20"
          >
            <motion.h2 variants={itemVariants} className="heading-lg text-white mb-8">
              Why Others Recommend Us
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what successful entrepreneurs say about their transformation journey.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl" style={{
                  background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                <p className="text-gray-300 text-lg leading-relaxed mb-6 flex-1">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
                </div>
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
            <div className="therapeutic-card max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8">Join 47,000+ Successful Entrepreneurs</h3>
              <div className="flex items-center justify-center space-x-12 text-gray-300">
                <div className="flex items-center space-x-3">
                  <Heart className="h-8 w-8 text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">47,000+</div>
                    <div className="text-gray-400">Transformations</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-gray-400">Average Rating</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Quote className="h-8 w-8 text-yellow-400" />
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}