'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Star, Users, BookOpen, Heart, Sparkles, X } from 'lucide-react'

export default function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  return (
    <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
      {/* Header Background Image - as a rounded box */}
      <div 
        className="absolute inset-4 bg-cover bg-center bg-no-repeat rounded-[20px] shadow-2xl"
        style={{
          backgroundImage: "url('/header-background.svg')"
        }}
      ></div>

      {/* Fade from left to reveal background face */}
      <div className="absolute inset-4 bg-gradient-to-r from-[#140627]/80 via-[#140627]/40 to-transparent rounded-[20px]"></div>

      {/* Floating Elements - more organic, therapeutic feel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-24 h-24 bg-yellow-500/15 rounded-full blur-lg"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl"
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge - using your dark color with white text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-5 py-2 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30"
              style={{ backgroundColor: '#140627' }}
            >
              <Heart className="h-4 w-4 mr-2 text-yellow-400" />
              Join 47,000+ Successful Entrepreneurs
            </motion.div>

            {/* Main Headline - white text for better visibility */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-lg text-white leading-tight"
            >
              Break Through Your{' '}
              <span className="text-gradient">Invisible Ceiling</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white leading-relaxed"
            >
              Most successful founders hit a wall they can't explain. The problem isn't your strategy, team, or market. <strong className="text-yellow-400">It's your identity.</strong>
            </motion.p>

            {/* CTA Buttons - brought back */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => trackEvent('cta_click_assessment')}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center shadow-xl"
              >
                Take Free Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button 
                onClick={() => {
                  trackEvent('cta_click_video')
                  setShowVideoModal(true)
                }}
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch My Story
              </button>
            </motion.div>

            {/* Social Proof - white text for better visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full border-4 border-white flex items-center justify-center shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-gray-900 text-xs font-bold">{i + 1}</span>
                  </motion.div>
                ))}
              </div>
              <div className="text-white">
                <div className="font-semibold">47,000+ Founders</div>
                <div className="text-gray-300 text-sm">Already transformed their lives</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Empty to reveal background face */}
          <div className="relative">
            {/* This space is intentionally left empty to reveal the background face */}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Video Player */}
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-gray-900 ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Video Coming Soon</h3>
                <p className="text-gray-300">Richard's story video will be available here soon.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}