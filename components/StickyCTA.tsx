'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Target, X, ArrowRight } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show CTA after scrolling 50% of the page
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isDismissed])

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  const handleDismiss = () => {
    setIsDismissed(true)
    setIsVisible(false)
  }

  const handleGetBook = () => {
    trackEvent('sticky_cta_click_get_book')
    // Scroll to top or navigate to checkout
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTakeAssessment = () => {
    trackEvent('sticky_cta_click_assessment')
    // Navigate to assessment page
    window.location.href = '/assessment'
  }

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md border-t border-dark-700 shadow-2xl"
          style={{ backgroundColor: 'rgba(20, 6, 39, 0.95)' }}
        >
          <div className="container-custom py-4">
            <div className="flex items-center justify-between">
              {/* Content */}
              <div className="flex-1 pr-4">
                <div className="mb-2">
                  <span className="text-white font-semibold text-sm">
                    Ready to Transform Your Identity?
                  </span>
                </div>
                <p className="text-dark-300 text-xs">
                  Get The Identity Code + AI Coach + Assessment + 30-Day Challenge
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleTakeAssessment}
                  className="btn-secondary text-xs px-4 py-2 flex items-center space-x-1"
                >
                  <Target className="h-3 w-3" />
                  <span>Free Assessment</span>
                </button>
                
                <button
                  onClick={handleGetBook}
                  className="btn-primary text-xs px-4 py-2 flex items-center space-x-1"
                >
                  <span>Get The Book</span>
                  <ArrowRight className="h-3 w-3" />
                </button>

                <button
                  onClick={handleDismiss}
                  className="p-2 text-dark-400 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
