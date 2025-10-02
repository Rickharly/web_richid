'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, BookOpen, Brain, Target, Zap, ArrowRight, Mail, Download } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
  const [showUpsell, setShowUpsell] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  useEffect(() => {
    trackEvent('thankyou_view')
    
    // Show upsell after 3 seconds
    const timer = setTimeout(() => {
      setShowUpsell(true)
      trackEvent('upsell_view')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleUpsellAccept = () => {
    trackEvent('upsell_accept')
    // Redirect to upsell checkout
    window.location.href = '/upsell'
  }

  const handleUpsellDecline = () => {
    trackEvent('upsell_decline')
    setShowUpsell(false)
  }

  const handleStartAssessment = () => {
    trackEvent('assessment_start')
    window.location.href = '/assessment'
  }

  const handleCreateAccount = () => {
    trackEvent('account_created')
    // Create account logic
    console.log('Creating account...')
  }

  const nextSteps = [
    {
      icon: <Target className="h-6 w-6 text-primary-400" />,
      title: "Take Your Free Assessment",
      description: "Discover your identity archetype and specific blocks",
      action: "Start Assessment",
      onClick: handleStartAssessment
    },
    {
      icon: <Brain className="h-6 w-6 text-primary-400" />,
      title: "Meet Your AI Coach",
      description: "Get 24/7 personalized guidance and support",
      action: "Access AI Coach",
      onClick: () => console.log('Access AI Coach')
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary-400" />,
      title: "Download Your Book",
      description: "Get instant access to The Identity Code",
      action: "Download Now",
      onClick: () => console.log('Download Book')
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to Your Transformation!
            </h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Your order has been confirmed. Check your email for your receipt and access details.
            </p>
          </motion.div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800 rounded-2xl p-8 mb-8 border border-dark-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Order Confirmation</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-dark-700">
                <span className="text-dark-300">Order ID</span>
                <span className="text-white font-mono">#RI-2024-001234</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-dark-700">
                <span className="text-dark-300">Email</span>
                <span className="text-white">your@email.com</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-dark-700">
                <span className="text-dark-300">Amount Paid</span>
                <span className="text-primary-400 font-bold text-lg">€97.00</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-dark-300">Status</span>
                <span className="text-green-400 font-semibold">Completed</span>
              </div>
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-800 rounded-2xl p-8 mb-8 border border-dark-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">What You Get</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">The Identity Code Book</h3>
                    <p className="text-dark-400 text-sm">Physical + Digital copy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">AI Coach Access</h3>
                    <p className="text-dark-400 text-sm">24/7 personalized guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Identity Assessment</h3>
                    <p className="text-dark-400 text-sm">Free archetype analysis</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">30-Day Challenge Credit</h3>
                    <p className="text-dark-400 text-sm">€297 value included</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Private Community</h3>
                    <p className="text-dark-400 text-sm">Exclusive member access</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Download className="h-5 w-5 text-primary-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Lifetime Updates</h3>
                    <p className="text-dark-400 text-sm">Free future content</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-8">Your Next Steps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-dark-400 text-sm mb-4">
                    {step.description}
                  </p>
                  <button
                    onClick={step.onClick}
                    className="btn-primary text-sm px-4 py-2 w-full"
                  >
                    {step.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Create Account CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center bg-dark-800 rounded-2xl p-8 border border-dark-700"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              Create Your Account
            </h3>
            <p className="text-dark-300 mb-6">
              Get instant access to your AI Coach, Assessment, and all digital content.
            </p>
            <button
              onClick={handleCreateAccount}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto group"
            >
              <Mail className="h-5 w-5" />
              <span>Create Account & Get Started</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Upsell Modal */}
      {showUpsell && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-dark-800 rounded-2xl p-8 max-w-md w-full border border-dark-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              One More Thing...
            </h3>
            <p className="text-dark-300 text-center mb-6">
              Complete your transformation with the 30-Day Identity OS Challenge. 
              Get your money back if you don't complete every day.
            </p>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-400 mb-2">€297</div>
              <div className="text-dark-400 text-sm">One-time payment</div>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleUpsellAccept}
                className="btn-primary w-full py-3"
              >
                Yes, Add the Challenge
              </button>
              <button
                onClick={handleUpsellDecline}
                className="btn-tertiary w-full py-3"
              >
                No Thanks, Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}



