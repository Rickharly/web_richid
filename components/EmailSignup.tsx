'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, ArrowRight, Shield } from 'lucide-react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    trackEvent('email_signup')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="section-padding bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-primary-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to the Inner Circle!
            </h2>
            <p className="text-primary-100 text-lg mb-6">
              You're now part of an exclusive community of high achievers transforming their identities. 
              Check your email for your welcome message and next steps.
            </p>
            <div className="bg-white/10 rounded-lg p-4 text-primary-100">
              <p className="text-sm">
                <strong>What's next:</strong> You'll receive one legendary email occasionally with exclusive 
                insights, early access to new content, and special offers. No spam, just value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Join the Inner Circle
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-8">
              Get exclusive access to identity transformation insights, early releases, 
              and special offers reserved for our most committed community members.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-primary-300">One legendary email occasionally—no spam</span>
            </div>
          </div>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-800 rounded-2xl p-8 border border-dark-700 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-3">
                  Enter your email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-dark-400" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="input-field pl-12 pr-4 py-4 text-lg"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="gdpr"
                  required
                  className="mt-1 h-4 w-4 text-primary-500 bg-dark-700 border-dark-600 rounded focus:ring-primary-500 focus:ring-2"
                />
                <label htmlFor="gdpr" className="text-dark-300 text-sm">
                  I agree to receive occasional emails about identity transformation insights and special offers. 
                  I can unsubscribe at any time. 
                  <span className="text-primary-400 font-semibold">No spam, just value.</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !email}
                className="btn-primary text-lg px-8 py-4 w-full flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    <span>Join the Inner Circle</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-dark-400 text-sm">
                Join <span className="text-primary-400 font-semibold">1,250+ members</span> who are 
                already transforming their identities
              </p>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">1,250+</div>
              <div className="text-dark-400 text-sm">Inner Circle Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">94%</div>
              <div className="text-dark-400 text-sm">Open Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">0</div>
              <div className="text-dark-400 text-sm">Spam Complaints</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-400 mb-1">21+</div>
              <div className="text-dark-400 text-sm">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}



