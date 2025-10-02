'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Play, CheckCircle, Star, ArrowRight, Clock, Users, Award, Heart, Brain, Target, Zap } from 'lucide-react'

export default function BookVSLPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const trackEvent = (eventName: string) => {
    console.log('Event:', eventName)
  }

  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 pt-40" style={{ backgroundColor: '#140627' }}>
        {/* Background Light Bulbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-yellow-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium border border-yellow-500/30 mb-8">
                <Heart className="h-4 w-4 mr-2" />
                Join 47,000+ Successful Entrepreneurs
              </div>
              
              <h1 className="heading-xl text-white mb-8 leading-tight">
                The <span className="text-gradient">Identity Code</span><br />
                <span className="text-4xl md:text-5xl">Underground Manual</span>
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                The complete framework for systematic identity transformation. 
                <span className="text-yellow-400 font-semibold"> Value: $1,700+</span> - 
                <span className="text-white font-bold"> Just $9.95 shipping</span>
              </p>
            </motion.div>
            
            {/* Video Player */}
            <motion.div 
              className="relative mb-12 max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border-2 border-yellow-500/30 shadow-2xl overflow-hidden">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800/90 to-gray-900/90">
                    <button
                      onClick={() => setShowVideoModal(true)}
                      className="group flex flex-col items-center space-y-4 hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/50">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <div className="text-center">
                        <p className="text-white text-xl font-semibold">Watch Richard's Story</p>
                        <p className="text-gray-300">The breakthrough that changed everything</p>
                        <div className="flex items-center justify-center space-x-2 mt-2">
                          <Clock className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400 text-sm">18 minutes</span>
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-900">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8" />
                      </div>
                      <p className="text-lg">Video would play here</p>
                      <p className="text-gray-400 text-sm">In production</p>
                    </div>
                  </div>
                )}
                
                {/* Video overlay elements */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  LIVE
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  18:42
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={() => trackEvent('vsl_cta_click')}
                className="btn-primary text-2xl px-16 py-6 shadow-2xl hover:shadow-yellow-500/25 flex items-center justify-center"
              >
                Get Your Book for $9.95
                <ArrowRight className="h-6 w-6 ml-3" />
              </button>
              <button 
                onClick={() => trackEvent('assessment_click')}
                className="btn-secondary text-xl px-12 py-6 flex items-center justify-center"
              >
                Take Free Assessment
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span>30-Day Money Back</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span>No Recurring Charges</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span>Lifetime Access</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
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
                The Hidden Problem That's Killing Your Growth
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                You've tried everything. Better strategies, new systems, more motivation. 
                <span className="text-yellow-400 font-semibold">But you're still hitting the same ceiling.</span>
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="space-y-8">
                  <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/30">
                    <h3 className="text-2xl font-bold text-white mb-6">The Brutal Truth:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">Your business can only grow as much as your identity allows</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">You're running outdated "identity software" from your past</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">No amount of strategy can overcome identity limitations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600">
                  <div className="text-center">
                    <Brain className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">Your Identity OS</h3>
                    <p className="text-gray-300 mb-6">The subconscious programming that controls everything</p>
                    <div className="space-y-3">
                      <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                        <div className="text-yellow-400 font-semibold">Beliefs</div>
                        <div className="text-gray-300 text-sm">What you think is possible</div>
                      </div>
                      <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                        <div className="text-yellow-400 font-semibold">Behaviors</div>
                        <div className="text-gray-300 text-sm">How you act and respond</div>
                      </div>
                      <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                        <div className="text-yellow-400 font-semibold">Results</div>
                        <div className="text-gray-300 text-sm">What you actually achieve</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Richard's Story Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
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
                How I Discovered The Identity Code
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                My journey from hitting invisible ceilings to breaking through every limitation
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 border border-gray-600">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 rounded-full mx-auto mb-6 flex items-center justify-center border border-yellow-500/30">
                      <Target className="h-16 w-16 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">The Breaking Point</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      I had built a successful business, but I was burning out. Despite all my achievements, 
                      I felt like I was hitting an invisible wall. That's when I discovered the real problem...
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">The Discovery</h3>
                      <p className="text-gray-300">I realized my identity was stuck in "scarcity mode" from my past, limiting everything I could achieve.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">The Research</h3>
                      <p className="text-gray-300">I spent 3 years studying neuroscience, psychology, and successful entrepreneurs to understand identity transformation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-yellow-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">The Breakthrough</h3>
                      <p className="text-gray-300">I developed a systematic framework that transformed my identity and unlocked exponential growth.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
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
                Everything You Get in The Identity Code
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                A complete system for systematic identity transformation. 
                <span className="text-yellow-400 font-semibold">Value: $1,700+</span> - 
                <span className="text-white font-bold"> Just $9.95 shipping</span>
              </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 h-full flex flex-col"
              >
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <CheckCircle className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">The Identity Code Book</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Complete 247-page manual with the entire Identity OS framework</p>
                    <div className="text-yellow-400 font-semibold">Value: $497</div>
                  </div>
                </div>
                
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Brain className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Digital Assessments</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Discover your current identity archetype and limiting patterns</p>
                    <div className="text-yellow-400 font-semibold">Value: $297</div>
                  </div>
                </div>
                
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Zap className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Identity Toolkit</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Worksheets, templates, and practical implementation tools</p>
                    <div className="text-yellow-400 font-semibold">Value: $197</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 h-full flex flex-col"
              >
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Target className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Advanced Identity Decoder</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Unlock the hidden patterns holding you back</p>
                    <div className="text-yellow-400 font-semibold">Value: $397</div>
                  </div>
                </div>
                
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Users className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">30-Day Email Series</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Daily guidance to support your transformation journey</p>
                    <div className="text-yellow-400 font-semibold">Value: $197</div>
                  </div>
                </div>
                
                <div className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(212, 176, 56, 0.3)',
                  boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}>
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <Award className="h-8 w-8 text-yellow-400" />
                      <h3 className="text-2xl font-bold text-white">Lifetime Access</h3>
                    </div>
                    <p className="text-gray-300 text-lg mb-4 flex-1">Keep all materials forever, no recurring fees</p>
                    <div className="text-yellow-400 font-semibold">Value: Priceless</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Total Value */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl p-8 border border-yellow-500/30 max-w-2xl mx-auto">
                <div className="text-4xl font-bold text-yellow-400 mb-2">Total Value: $1,785</div>
                <div className="text-2xl font-bold text-white mb-2">Your Price: $9.95 Shipping Only</div>
                <div className="text-gray-300 text-lg">You save $1,785 today</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
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
                Join 47,000+ Successful Entrepreneurs
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Don't just take our word for it. Here's what successful entrepreneurs say about their transformation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center h-full"
              >
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl p-8 border border-yellow-500/30 h-full flex flex-col justify-center">
                  <div className="text-5xl font-bold text-yellow-400 mb-2">47,000+</div>
                  <div className="text-gray-300 text-lg">Downloads</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center h-full"
              >
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl p-8 border border-yellow-500/30 h-full flex flex-col justify-center">
                  <div className="text-5xl font-bold text-yellow-400 mb-2">4.9/5</div>
                  <div className="text-gray-300 text-lg">Average Rating</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center h-full"
              >
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-3xl p-8 border border-yellow-500/30 h-full flex flex-col justify-center">
                  <div className="text-5xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300 text-lg">Free</div>
                </div>
              </motion.div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Tech CEO, $50M ARR",
                  content: "The Identity Code completely changed how I approach my business. I finally understand why I was hitting ceilings.",
                  rating: 5
                },
                {
                  name: "Marcus Johnson", 
                  role: "Serial Entrepreneur",
                  content: "This book gave me the framework I needed to break through my biggest limiting beliefs. Game changer.",
                  rating: 5
                },
                {
                  name: "Lisa Thompson",
                  role: "SaaS Founder",
                  content: "I went from burning out to scaling efficiently while maintaining my sanity. Richard's work is life-changing.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(212, 176, 56, 0.3)',
                    boxShadow: '0 8px 32px rgba(212, 176, 56, 0.2), 0 0 0 1px rgba(212, 176, 56, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(212, 176, 56, 0.1) 0%, rgba(212, 176, 56, 0.05) 50%, rgba(212, 176, 56, 0.1) 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl p-12 border border-red-500/30 mb-12"
            >
              <h2 className="heading-lg text-white mb-8">
                Limited Time Offer
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                This free offer won't last forever. We're only giving away 
                <span className="text-red-400 font-bold"> 1,000 copies</span> at this price.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">847</div>
                  <div className="text-gray-300">Copies Left</div>
                </div>
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">3</div>
                  <div className="text-gray-300">Days Left</div>
                </div>
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">$1,785</div>
                  <div className="text-gray-300">Value</div>
                </div>
              </div>
              
              <div className="bg-red-500/30 rounded-2xl p-6 border border-red-500/50">
                <p className="text-white text-lg font-semibold">
                  After this offer expires, The Identity Code will be sold for $497
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 " style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="heading-xl text-white mb-8">
                Ready to Break Through Your <span className="text-gradient">Invisible Ceiling</span>?
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
                Get The Identity Code free (just cover shipping) and start your transformation journey today. 
                <span className="text-yellow-400 font-semibold">This offer expires in 3 days.</span>
              </p>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-3xl p-12 border border-yellow-500/30 mb-12 max-w-3xl mx-auto">
                <div className="text-5xl font-bold text-yellow-400 mb-4">$9.95 Shipping Only</div>
                <div className="text-3xl font-bold text-white mb-2">$1,785 Value</div>
                <div className="text-gray-300 text-xl">You save $1,785 today</div>
              </div>
              
              <motion.button 
                onClick={() => trackEvent('final_cta_click')}
                className="btn-primary text-3xl px-20 py-8 shadow-2xl hover:shadow-yellow-500/25 flex items-center mx-auto mb-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Book for $9.95
                <ArrowRight className="h-8 w-8 ml-4" />
              </motion.button>
              
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">30-Day Money Back Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">No Recurring Charges</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Lifetime Access</span>
                </div>
              </div>
              
              <p className="text-gray-500 text-sm">
                *Shipping costs $9.95. Offer expires in 3 days. After that, The Identity Code will be sold for $497.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

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
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10" />
                </div>
                <p className="text-xl font-semibold mb-2">Richard's Story</p>
                <p className="text-gray-400">Video coming soon</p>
                <p className="text-sm text-gray-500 mt-2">18 minutes</p>
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
    </main>
  )
}
