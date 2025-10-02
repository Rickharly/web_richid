'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, Clock, Users, Target, Zap, Calendar, Star, Award, Heart, Brain, X, Shield } from 'lucide-react'

export default function ChallengePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 pt-40" style={{ backgroundColor: '#140627' }}>
        {/* Background Light Bulbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-red-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-red-500/5 to-purple-500/5 flex items-center justify-center">
            <div className="text-center text-gray-500 p-8 border-2 border-dashed border-gray-600 rounded-lg">
              <div className="text-2xl mb-2">🖼️ IMAGE PLACEMENT</div>
              <div className="text-sm">Background: Subtle abstract pattern or texture</div>
              <div className="text-xs mt-2">Should be very subtle, not distracting from content</div>
            </div>
          </div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-red-500/20 rounded-full text-red-400 text-sm font-medium border border-red-500/30 mb-8">
                <Target className="h-4 w-4 mr-2" />
                Next Round Starts Monday
              </div>
              
              <h1 className="heading-xl text-white mb-8 leading-tight">
                Finally Break Free From The Pattern That <span className="text-gradient">Sabotages You</span> Every Time Things Start Going Well
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                The 21-Day Self-Sabotage Stop Challenge: Reprogram the automatic patterns keeping you stuck in cycles of self-destruction, so you can finally maintain the momentum you create.
                <span className="text-red-400 font-semibold"> Investment: $297</span>
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-stretch">
              {/* Left Column: Video */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex flex-col"
              >
                <div className="relative flex-1 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-red-500/30 shadow-2xl overflow-hidden min-h-[500px]">
                  {!isVideoPlaying ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                      <button
                        onClick={() => setShowVideoModal(true)}
                        className="group flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
                      >
                        <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-red-500/50">
                          <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-white text-xl font-semibold">Watch the Challenge</p>
                          <p className="text-gray-300">See how to break your sabotage patterns</p>
                          <div className="flex items-center justify-center space-x-2 mt-2">
                            <Clock className="w-4 h-4 text-red-400" />
                            <span className="text-red-400 text-sm">3-5 minutes</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-lg">Video would play here</p>
                        <p className="text-gray-400 text-sm">In production</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Right Column: CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col space-y-8"
              >
                <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl p-8 border border-red-500/30 flex-1 flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">21 Days</div>
                    <div className="text-white text-xl mb-4">Self-Sabotage Stop Challenge</div>
                    <div className="text-gray-300 mb-6">Break the cycle that keeps you stuck every time things start going well</div>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>100+ Participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4" />
                        <span>4.9/5 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => trackEvent('challenge_cta_click')}
                    className="btn-primary text-2xl px-12 py-6 w-full flex items-center justify-center shadow-2xl hover:shadow-red-500/25"
                  >
                    Join the Self-Sabotage Stop Challenge - $297
                    <ArrowRight className="h-6 w-6 ml-3" />
                  </button>
                  
                  <button 
                    onClick={() => trackEvent('learn_more_click')}
                    className="btn-secondary text-xl px-12 py-6 w-full"
                  >
                    Learn More About Breaking Self-Sabotage
                  </button>
                </div>

                <div className="flex items-center justify-center space-x-6 text-gray-400 text-sm">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-400" />
                    <span>30-Day Money Back</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-400" />
                    <span>Pattern Recognition Tools</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pattern You Know Too Well Section */}
      <section className="py-24" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-red-500/20 rounded-full text-red-400 text-sm font-medium border border-red-500/30 mb-8">
                <Target className="h-4 w-4 mr-2" />
                The Pattern You Know Too Well
              </div>
              <h2 className="heading-lg text-white mb-8">
                Does This Sound <span className="text-gradient">Familiar?</span>
              </h2>
            </motion.div>

            {/* Visual Story Flow */}
            <div className="max-w-5xl mx-auto">
              {/* Human Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="w-full max-w-md mx-auto h-64 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-2xl mb-2">👤 IMAGE PLACEMENT</div>
                    <div className="text-sm">Real person looking frustrated/confused</div>
                    <div className="text-xs mt-2">Someone who can relate to the self-sabotage pattern</div>
                  </div>
                </div>
              </motion.div>

              {/* Step 1: Things Going Well */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center border-2 border-green-500/30 mr-8">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-6 border border-green-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">Things Start Going Well</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You're making progress on a goal, a relationship is deepening, or opportunities are opening up. You can feel the momentum building…
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-green-500/50 to-red-500/50 rounded-full"></div>
              </div>

              {/* Step 2: The Sabotage */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12"
              >
                <div className="flex-1 text-right mr-8">
                  <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-6 border border-red-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">And Then It Happens</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      You do something to mess it up. Maybe you:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Stop doing the things that were working",
                        "Pick a fight with someone important",
                        "Make a decision that derails progress",
                        "Suddenly lose motivation and give up",
                        "Create drama when things were getting good"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/30">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                </div>
              </motion.div>

              {/* Arrow Down */}
              <div className="flex justify-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-red-500/50 to-yellow-500/50 rounded-full"></div>
              </div>

              {/* Step 3: The Realization */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center mb-12"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500/30 mr-8">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-6 border border-yellow-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">The Aftermath</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      "Why do I keep doing this to myself? I KNOW better than this."
                    </p>
                    <div className="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                      <p className="text-red-400 font-semibold text-lg">
                        If you feel like you're the common denominator in all your problems… you're not crazy.
                      </p>
                      <p className="text-red-400 font-semibold text-lg mt-2">
                        You're just running automatic programming.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Problem Section */}
      <section className="py-24" style={{ backgroundColor: '#0f0519' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium border border-blue-500/30 mb-8">
                <Brain className="h-4 w-4 mr-2" />
                The Real Problem
              </div>
              <h2 className="heading-lg text-white mb-8">
                The Real Problem Isn't What <span className="text-gradient">You Think</span>
              </h2>
            </motion.div>

            {/* Visual Problem Explanation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left: Common Misconceptions */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Human Image Placeholder */}
                <div className="w-full h-48 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <div className="text-xl mb-2">🧠 IMAGE PLACEMENT</div>
                    <div className="text-sm">Person looking determined but struggling</div>
                    <div className="text-xs mt-2">Someone trying hard but not getting results</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-2xl p-6 border border-gray-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <X className="h-5 w-5 text-red-400 mr-3" />
                    What Most People Think
                  </h3>
                  <div className="space-y-3">
                    {[
                      "It's about willpower",
                      "It's about discipline", 
                      "Just 'try harder'",
                      "More motivation needed"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right: The Real Truth */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-6 border border-red-500/20">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    The Real Truth
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Self-sabotage happens at the <span className="text-red-400 font-semibold">identity level</span>
                  </p>
                  <div className="space-y-3">
                    {[
                      "Deep beliefs about deserving success",
                      "Fear of what success might mean",
                      "Learned that 'good things don't last'",
                      "Automatic subconscious programming"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* The Key Insight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl p-8 border border-red-500/30 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/30">
                    <Zap className="h-8 w-8 text-red-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Key Insight</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  This isn't happening consciously. It's automatic programming - subconscious patterns running in the background, making decisions for you before your conscious mind even knows what's happening.
                </p>
                <div className="bg-red-500/30 rounded-2xl p-6 border border-red-500/50">
                  <p className="text-2xl text-red-400 font-bold leading-relaxed">
                    That's why knowing what to do isn't enough. You need to reprogram what's running underneath.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Introduction Section */}
      <section className="py-24" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-full text-red-400 text-sm font-medium border border-red-500/30 mb-8">
                <Zap className="h-4 w-4 mr-2" />
                The Solution
              </div>
              <h2 className="heading-lg text-white mb-8">
                Introducing The <span className="text-gradient">Self-Sabotage Stop Challenge</span>
              </h2>
            </motion.div>

            {/* Visual Solution Presentation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-2xl p-8 border border-gray-500/20 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <X className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">What Others Do</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    {[
                      "Positive thinking",
                      "Surface-level mindset work",
                      "Motivational quotes",
                      "Temporary fixes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-4"></div>
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Solution Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Approach</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    {[
                      "Identity-level transformation",
                      "Root cause reprogramming",
                      "Automatic pattern interruption",
                      "Permanent behavioral change"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                        <span className="text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Challenge Description Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl p-8 border border-red-500/30 h-full flex flex-col">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/30">
                      <Target className="h-8 w-8 text-red-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-6">
                    The Only 21-Day Program
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed text-center flex-1">
                    Specifically designed to interrupt and reprogram the automatic patterns that cause you to sabotage yourself every time things start going well.
                  </p>
                </div>
              </motion.div>

              {/* Deep Transformation Box */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/30 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Deep Transformation</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed flex-1">
                    This isn't about positive thinking or surface-level mindset work. This is about getting to the root of why you keep destroying the good things in your life - and installing new programming that lets you keep them.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Journey Section */}
      <section className="py-24" style={{ backgroundColor: '#0f0519' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium border border-purple-500/30 mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                Your 21-Day Journey
              </div>
              <h2 className="heading-lg text-white mb-8">
                Here's What Happens When <span className="text-gradient">You Join</span>
              </h2>
            </motion.div>

            {/* Visual Weekly Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500/50 via-red-500/50 to-green-500/50 rounded-full"></div>

              {/* Week 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center mb-16"
              >
                <div className="flex-1 pr-8">
                  <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-3xl p-8 border border-purple-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Week 1</h3>
                        <p className="text-purple-400 font-semibold">Pattern Recognition & Interrupt</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Identify your unique self-sabotage triggers",
                        "Learn to catch yourself BEFORE you sabotage",
                        "Install emergency pattern interrupt protocols",
                        "Begin rewiring your automatic responses"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full border-4 border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </motion.div>

              {/* Week 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-16"
              >
                <div className="flex-1 pr-8"></div>
                <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full border-4 border-gray-900"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-3xl p-8 border border-red-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Week 2</h3>
                        <p className="text-red-400 font-semibold">Identity Reprogramming</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Discover hidden beliefs driving self-sabotage",
                        "Reprogram your identity for sustained success",
                        "Practice new responses to success and momentum",
                        "Strengthen your success tolerance muscle"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Week 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <div className="flex-1 pr-8">
                  <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-3xl p-8 border border-green-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">Week 3</h3>
                        <p className="text-green-400 font-semibold">Momentum Maintenance</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Lock in new patterns through repetition",
                        "Develop systems to maintain progress long-term",
                        "Create your personal Success Sustainability Plan",
                        "Graduate with tools to prevent future cycles"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900"></div>
                <div className="flex-1 pl-8"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-red-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-red-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-red-500/20 rounded-full text-red-400 text-sm font-medium border border-red-500/30 mb-8">
                <Target className="h-4 w-4 mr-2" />
                What's Included
              </div>
              <h2 className="heading-lg text-white mb-8">
                What's Included in Your <span className="text-gradient">Challenge</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Everything you need to interrupt and reprogram the automatic patterns that cause you to sabotage yourself every time things start going well
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="h-8 w-8 text-red-400" />,
                  title: "21 Days of Targeted Daily Exercises",
                  description: "15-20 minutes each day, systematically reprogramming the patterns that cause self-sabotage."
                },
                {
                  icon: <Users className="h-8 w-8 text-red-400" />,
                  title: "3 Weekly Group Coaching Calls",
                  description: "Get direct support and guidance from identity transformation experts."
                },
                {
                  icon: <Zap className="h-8 w-8 text-red-400" />,
                  title: "Pattern Recognition Toolkit",
                  description: "Identify your unique sabotage triggers before they derail you."
                },
                {
                  icon: <Heart className="h-8 w-8 text-red-400" />,
                  title: "Emergency Reset Protocols",
                  description: "What to do when you catch yourself mid-sabotage."
                },
                {
                  icon: <Award className="h-8 w-8 text-red-400" />,
                  title: "Success Momentum Tracker",
                  description: "Measure your progress and celebrate wins along the way."
                },
                {
                  icon: <Calendar className="h-8 w-8 text-red-400" />,
                  title: "The Sabotage Emergency Kit",
                  description: "Instant interventions for those 'oh no, I'm doing it again' moments."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, rgba(239, 68, 68, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      {item.icon}
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* This is For You Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f0519' }}>
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-4 h-4 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 left-20 w-6 h-6 bg-blue-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium border border-blue-500/30 mb-8">
                <Users className="h-4 w-4 mr-2" />
                Is This For You?
              </div>
              <h2 className="heading-lg text-white mb-8">
                This is For You <span className="text-gradient">If:</span>
              </h2>
              <div className="text-left max-w-6xl mx-auto mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-full">
                    <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/20 h-full flex flex-col">
                      <h3 className="text-2xl text-green-400 font-bold mb-6 flex items-center">
                        <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                        This IS for you if:
                      </h3>
                      <ul className="text-lg text-gray-300 leading-relaxed space-y-4 flex-1">
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You know what to do but find yourself doing the opposite</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>Every time things start going well, you somehow mess it up</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You feel like you're the common denominator in all your setbacks</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You're tired of starting over and ready to break the cycle once and for all</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-green-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You want to finally maintain the momentum you create instead of destroying it</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20 h-full flex flex-col">
                      <h3 className="text-2xl text-red-400 font-bold mb-6 flex items-center">
                        <X className="h-6 w-6 text-red-400 mr-3" />
                        This is NOT for you if:
                      </h3>
                      <ul className="text-lg text-gray-300 leading-relaxed space-y-4 flex-1">
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You're looking for a magic pill or overnight transformation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You're not willing to do daily work for 21 days</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You want someone else to fix your problems for you</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-3 h-3 bg-red-400 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span>You're not ready to take responsibility for your patterns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-6 h-6 bg-yellow-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-10 w-3 h-3 bg-yellow-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium border border-yellow-500/30 mb-8">
                <Star className="h-4 w-4 mr-2" />
                Success Stories
              </div>
              <h2 className="heading-lg text-white mb-8">
                What People Are <span className="text-gradient">Saying</span>
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah M.",
                  text: "I didn't realize how much I was sabotaging myself until I started this challenge. For the first time in years, I'm maintaining momentum instead of destroying it. The pattern interrupts alone are worth 10x the price.",
                  result: "Pattern interrupt success",
                  image: "Professional woman, 30s, confident smile, business attire"
                },
                {
                  name: "Marcus T.",
                  text: "Every time things started going well in my business, I'd find a way to mess it up. Three weeks into this challenge, I caught myself about to sabotage a major opportunity - and I stopped myself. That's never happened before.",
                  result: "Major opportunity saved",
                  image: "Professional man, 40s, success pose, office setting"
                },
                {
                  name: "Jennifer R.",
                  text: "I finally understand why I keep doing this to myself. More importantly, I now have tools to stop it. This challenge gave me my life back.",
                  result: "Life transformation",
                  image: "Woman, 30s, peaceful/confident expression, casual setting"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl p-8 relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 50%, rgba(239, 68, 68, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10">
                    {/* Profile Image Placeholder */}
                    <div className="w-20 h-20 bg-gray-700 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center mx-auto mb-4">
                      <div className="text-center text-gray-400">
                        <div className="text-xs">👤</div>
                        <div className="text-xs mt-1">Photo</div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-gray-400 mb-4 italic">"{testimonial.image}"</div>
                    
                    <div className="flex items-center justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-red-400 text-sm font-semibold mt-1">{testimonial.result}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0f0519' }}>
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-500/5 to-blue-500/5 flex items-center justify-center">
            <div className="text-center text-gray-500 p-8 border-2 border-dashed border-gray-600 rounded-lg">
              <div className="text-2xl mb-2">💰 IMAGE PLACEMENT</div>
              <div className="text-sm">Background: Success/money visualization</div>
              <div className="text-xs mt-2">Abstract success symbols, money, or achievement imagery</div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-white mb-8">
                THE INVESTMENT
              </h2>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-3xl text-red-400 font-bold mb-4">The Self-Sabotage Stop Challenge: $297</p>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  That's less than $15 per day to break free from patterns that have been costing you opportunities, relationships, and peace of mind for years.
                </p>
                <div className="text-left max-w-2xl mx-auto">
                  <p className="text-lg text-gray-300 mb-4">Compare that to:</p>
                  <ul className="text-lg text-gray-300 leading-relaxed space-y-2">
                    <li>• The cost of starting over again and again: <span className="text-red-400 font-semibold">Priceless</span></li>
                    <li>• The opportunities you've sabotaged: <span className="text-red-400 font-semibold">Thousands or tens of thousands</span></li>
                    <li>• The relationships damaged by your patterns: <span className="text-red-400 font-semibold">Immeasurable</span></li>
                    <li>• The peace of mind you'll gain: <span className="text-red-400 font-semibold">Worth everything</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-white mb-8">
                30-DAY MONEY-BACK GUARANTEE
              </h2>
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  I'm so confident this challenge will help you break your self-sabotage patterns that I'm offering a full 30-day money-back guarantee.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Complete the 21-day challenge. If you don't see a significant shift in your ability to maintain momentum and avoid self-sabotage, I'll refund every penny.
                </p>
                <p className="text-xl text-red-400 font-semibold leading-relaxed">
                  You have nothing to lose except the patterns that have been holding you back.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" style={{ backgroundColor: '#0f0519' }}>
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <h2 className="heading-lg text-white mb-8">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "How much time does this require each day?",
                  answer: "15-20 minutes of focused work, plus optional community engagement. This is designed for busy people who need maximum impact in minimum time."
                },
                {
                  question: "What if I miss a day?",
                  answer: "Life happens. The community and coaching calls will help you get back on track. The key is progress, not perfection."
                },
                {
                  question: "Is this just mindset work?",
                  answer: "No. This is identity-level transformation work that addresses the root causes of self-sabotage, not just the symptoms."
                },
                {
                  question: "Will this work if I've tried everything else?",
                  answer: "If you've tried everything else but you're still sabotaging yourself, you haven't addressed the automatic programming level. That's exactly what this challenge does."
                },
                {
                  question: "What if my self-sabotage is really severe?",
                  answer: "This challenge is designed for people with persistent patterns. However, if you're dealing with severe mental health issues, please work with a qualified therapist in addition to this program."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-2xl p-8"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    boxShadow: '0 8px 32px rgba(239, 68, 68, 0.2), 0 0 0 1px rgba(239, 68, 68, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Q: {faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">A: {faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-red-500/5 to-purple-500/5 flex items-center justify-center">
            <div className="text-center text-gray-500 p-8 border-2 border-dashed border-gray-600 rounded-lg">
              <div className="text-2xl mb-2">🎯 IMAGE PLACEMENT</div>
              <div className="text-sm">Background: Motivational/success imagery</div>
              <div className="text-xs mt-2">People achieving goals, breaking through barriers</div>
            </div>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Human Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-12"
            >
              <div className="w-full max-w-lg mx-auto h-64 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-2xl mb-2">🚀 IMAGE PLACEMENT</div>
                  <div className="text-sm">Person taking action/breaking through</div>
                  <div className="text-xs mt-2">Someone confidently moving forward, determined look</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h2 className="heading-lg text-white mb-8">
                READY TO BREAK THE CYCLE?
              </h2>
              <div className="text-center max-w-4xl mx-auto mb-12">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  The next round of The Self-Sabotage Stop Challenge starts Monday.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Every day you wait is another day those automatic patterns are running your life.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Every opportunity you sabotage is gone forever.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Every relationship you damage takes time to repair.
                </p>
                <p className="text-xl text-red-400 font-semibold leading-relaxed mb-8">
                  But today, you can choose differently.
                </p>
                <button 
                  onClick={() => trackEvent('final_cta_click')}
                  className="btn-primary text-3xl px-16 py-8 flex items-center justify-center shadow-2xl hover:shadow-red-500/25 mx-auto"
                >
                  JOIN THE CHALLENGE NOW - $297
                  <ArrowRight className="h-8 w-8 ml-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-xl font-semibold mb-2">Self-Sabotage Stop Challenge</p>
                <p className="text-gray-400">Video coming soon</p>
                <p className="text-sm text-gray-500 mt-2">3-5 minutes</p>
              </div>
            </div>
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  )
}