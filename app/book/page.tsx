'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, ArrowRight, Clock, Users, Award, Brain, Target, Zap, Shield, Heart, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InvisibleCeilingBreakthroughPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 pt-40" style={{ backgroundColor: '#140627' }}>
        {/* Background Light Bulbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-purple-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium border border-purple-500/30 mb-8">
                <Award className="h-4 w-4 mr-2" />
                Premium Transformation for Serious Achievers
              </div>
              
              <h1 className="heading-xl text-white mb-8 leading-tight">
                Finally Shatter The <span className="text-gradient">Invisible Ceiling</span><br />
                That's Been Keeping You Stuck At Your Current Level
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto">
                The Invisible Ceiling Breakthrough System: A comprehensive 12-week intensive to identify, dismantle, and transcend the identity limits keeping you from your full potential.
              </p>
            </motion.div>
            
            {/* Investment Box */}
            <motion.div 
              className="relative mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-3xl p-12 border border-purple-500/30 shadow-2xl">
                <div className="text-6xl font-bold text-purple-400 mb-4">$3,000</div>
                <div className="text-2xl text-white mb-6">12-Week Intensive Transformation</div>
                <div className="text-lg text-gray-300 mb-8">
                  Complete system with personal breakthrough sessions, mastermind access, and lifetime support
                </div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-6 px-12 rounded-lg transition-colors flex items-center justify-center space-x-3 text-xl shadow-2xl mx-auto">
                  <span>Join The Breakthrough System</span>
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>90-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>Lifetime Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-purple-400" />
                <span>Personal Breakthrough Sessions</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}