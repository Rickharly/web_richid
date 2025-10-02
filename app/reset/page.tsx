'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, ArrowRight, Clock, Users, Award, Brain, Target, Zap, Shield, Heart, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AutomaticProgrammingResetPage() {
  return (
    <main className="relative" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 pt-40" style={{ backgroundColor: '#140627' }}>
        {/* Background Light Bulbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full blur-sm animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium border border-blue-500/30 mb-8">
                <Brain className="h-4 w-4 mr-2" />
                Mid-Tier Transformation for Deeper Work
              </div>
              
              <h1 className="heading-xl text-white mb-8 leading-tight">
                Finally Take Control Of The <span className="text-gradient">Automatic Programming</span><br />
                That's Been Running Your Life Without Your Permission
              </h1>
              
              <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto">
                The Automatic Programming Reset: An 8-week systematic method to identify, interrupt, and completely reprogram the subconscious patterns making decisions for you.
              </p>
            </motion.div>
            
            {/* Investment Box */}
            <motion.div 
              className="relative mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-12 border border-blue-500/30 shadow-2xl">
                <div className="text-6xl font-bold text-blue-400 mb-4">$697</div>
                <div className="text-2xl text-white mb-6">8-Week Systematic Reprogramming</div>
                <div className="text-lg text-gray-300 mb-8">
                  Complete system with personal coaching sessions, pattern reset toolkit, and 90-day integration support
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-12 rounded-lg transition-colors flex items-center justify-center space-x-3 text-xl shadow-2xl mx-auto">
                  <span>Join The Programming Reset</span>
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
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span>60-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span>8 Personal Coaching Sessions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-400" />
                <span>90-Day Integration Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* You Know The Feeling Section */}
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
                You Know The <span className="text-gradient">Feeling</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                You know what you should do. You've read the books, taken the courses, maybe even hired coaches. You understand the strategies and have all the information you need.
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
                    <h3 className="text-2xl font-bold text-white mb-6">But when it comes time to actually do it...</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">Something else takes over</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">It's like there's another version of you making decisions</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">A version that chooses the familiar over the beneficial</p>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-red-400 text-sm font-bold">✗</span>
                        </div>
                        <p className="text-gray-300 text-lg">Repeats the same patterns even when you desperately want to change</p>
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
                    <Brain className="h-20 w-20 text-blue-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">You're Not Crazy</h3>
                    <p className="text-gray-300 mb-6">You're just running automatic programming</p>
                    <div className="space-y-3">
                      <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                        <div className="text-blue-400 font-semibold">95% of Decisions</div>
                        <div className="text-gray-300 text-sm">Are made automatically by your subconscious</div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                        <div className="text-blue-400 font-semibold">Installed Years Ago</div>
                        <div className="text-gray-300 text-sm">Often in childhood or difficult circumstances</div>
                      </div>
                      <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30">
                        <div className="text-blue-400 font-semibold">Not Designed For Now</div>
                        <div className="text-gray-300 text-sm">For the life you want to live today</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth About Automatic Programming Section */}
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
                The Truth About <span className="text-gradient">Automatic Programming</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                95% of your daily decisions are made automatically by your subconscious mind. These aren't conscious choices - they're automatic responses based on programming that was installed years ago.
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
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full mx-auto mb-6 flex items-center justify-center border border-blue-500/30">
                      <Target className="h-16 w-16 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">This programming controls everything</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      How you respond to stress, what you believe you deserve, how you handle success and failure, and your default patterns in every area of life.
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
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Installed When You Were Young</h3>
                      <p className="text-gray-300">Most programming was installed when you were young, scared, or trying to survive difficult circumstances.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Not Designed For Your Current Life</h3>
                      <p className="text-gray-300">It's not designed for the life you want to live now. But because it's automatic, you can't just "think" your way out of it.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-xl border border-gray-600">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-400 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">You Need Subconscious Access</h3>
                      <p className="text-gray-300">You need to access the subconscious level where these patterns actually live and systematically reprogram them.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reset System Section */}
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
                Introducing The <span className="text-gradient">Automatic Programming Reset</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                The only systematic 8-week method to identify, interrupt, and completely reprogram the automatic patterns that have been making decisions for you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4">This isn't therapy. It's not coaching. It's not mindset work.</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    This is subconscious reprogramming. We're going directly to where your automatic patterns live and systematically changing them from the inside out.
                  </p>
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
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full mx-auto mb-6 flex items-center justify-center border border-blue-500/30">
                      <Zap className="h-16 w-16 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Systematic Reprogramming</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Complete process of resetting your automatic programming. Unlike surface-level approaches, this program works at the subconscious level where your automatic patterns actually live.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How The Reset Works Section */}
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
                Here's How The <span className="text-gradient">Reset Works</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  weeks: "Weeks 1-2",
                  title: "The Automatic Pattern Audit",
                  description: "Complete assessment of what programming is currently running and identify the specific patterns controlling your decisions."
                },
                {
                  weeks: "Weeks 3-4", 
                  title: "Pattern Interrupt Mastery",
                  description: "Learn to catch automatic patterns before they take over and develop the skill to pause between trigger and response."
                },
                {
                  weeks: "Weeks 5-6",
                  title: "New Programming Installation", 
                  description: "Systematically install new patterns aligned with your goals and use advanced techniques to make new patterns automatic."
                },
                {
                  weeks: "Weeks 7-8",
                  title: "Integration & Maintenance",
                  description: "Lock in your new patterns for long-term sustainability and create your personal Programming Maintenance Protocol."
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl p-8 border border-blue-500/30 h-full flex flex-col">
                    <div className="text-blue-400 font-bold text-sm mb-4">{phase.weeks}</div>
                    <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-1">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
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
                What's Included In Your <span className="text-gradient">Reset</span>
              </h2>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 h-full flex flex-col"
              >
                {[
                  {
                    icon: <Brain className="h-8 w-8 text-blue-400" />,
                    title: "8 Weeks of Systematic Reprogramming Modules",
                    description: "Step-by-step process to completely reset your automatic programming"
                  },
                  {
                    icon: <Target className="h-8 w-8 text-blue-400" />,
                    title: "The Automatic Pattern Audit",
                    description: "Complete assessment tool to identify exactly what's running unconsciously"
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-blue-400" />,
                    title: "Pattern Interrupt Mastery Training",
                    description: "Advanced techniques to catch and stop automatic responses before they control you"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-blue-400" />,
                    title: "8 Weekly 1-on-1 Coaching Sessions",
                    description: "Personal guidance and support throughout your transformation"
                  },
                  {
                    icon: <Heart className="h-8 w-8 text-blue-400" />,
                    title: "Pattern Reset Toolkit",
                    description: "Ongoing resources and tools for maintaining your new programming"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-blue-400" />,
                    title: "Private Mastermind Group Access",
                    description: "Connect with others doing serious pattern work"
                  }
                ].map((item, index) => (
                  <div key={index} className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="absolute inset-0 rounded-3xl" style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center space-x-4 mb-4">
                        {item.icon}
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg mb-4 flex-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-6 h-full flex flex-col"
              >
                {[
                  {
                    icon: <Globe className="h-8 w-8 text-blue-400" />,
                    title: "90-Day Integration Support",
                    description: "Extended support to ensure your changes stick long-term"
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-blue-400" />,
                    title: "Emergency Override System",
                    description: "What to do when old programming tries to take control in crisis moments"
                  }
                ].map((item, index) => (
                  <div key={index} className="rounded-3xl p-8 relative overflow-hidden h-full flex flex-col" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="absolute inset-0 rounded-3xl" style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center space-x-4 mb-4">
                        {item.icon}
                        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-lg mb-4 flex-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* This Is For You Section */}
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
                This Is <span className="text-gradient">For You</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-2xl p-8 border border-green-500/30 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">This IS for you if:</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">You know what to do but find yourself unable to consistently do it</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">You feel like something else is making decisions for you</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">You've tried other programs but the changes don't stick</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">You're ready to invest in systematic, comprehensive transformation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-300">You want to understand and change what's running automatically in your subconscious</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/30 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">✗</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">This is NOT for you if:</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 text-xl font-bold mt-1 flex-shrink-0">✗</span>
                      <p className="text-gray-300">You're looking for a quick fix or surface-level solution</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 text-xl font-bold mt-1 flex-shrink-0">✗</span>
                      <p className="text-gray-300">You're not ready to examine and change deep patterns</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 text-xl font-bold mt-1 flex-shrink-0">✗</span>
                      <p className="text-gray-300">You want someone else to do the work for you</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 text-xl font-bold mt-1 flex-shrink-0">✗</span>
                      <p className="text-gray-300">You're not willing to invest 8 weeks in systematic transformation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-red-400 text-xl font-bold mt-1 flex-shrink-0">✗</span>
                      <p className="text-gray-300">You're not ready for the responsibility that comes with conscious choice-making</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                What People Are <span className="text-gradient">Saying</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "David K.",
                  role: "Entrepreneur",
                  content: "I finally understand why I kept sabotaging myself. The Automatic Pattern Audit showed me programming I didn't even know was running. Now I'm making conscious choices for the first time in my adult life.",
                  rating: 5
                },
                {
                  name: "Lisa M.", 
                  role: "Executive",
                  content: "This isn't therapy or coaching - it's actual reprogramming. I can feel the difference in how I respond to situations. It's like I upgraded my operating system.",
                  rating: 5
                },
                {
                  name: "Robert S.",
                  role: "Business Owner",
                  content: "I've spent thousands on other programs that gave me temporary motivation. This gave me permanent change. My automatic responses are completely different now.",
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
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl" style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)',
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

      {/* Investment Section */}
      <section className="py-24" style={{ backgroundColor: '#140627' }}>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="heading-lg text-white mb-8">
                The <span className="text-gradient">Investment</span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-12">
                The Automatic Programming Reset: $697
              </p>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-12 border border-blue-500/30 mb-12">
                <div className="text-6xl font-bold text-blue-400 mb-4">$697</div>
                <div className="text-2xl text-white mb-6">Complete 8-Week System</div>
                <div className="text-lg text-gray-300 mb-8">
                  Includes 8 personal coaching sessions, pattern reset toolkit, and 90 days of integration support.
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white mb-4">Consider what your automatic programming has cost you:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Opportunities you didn't take because of automatic fear responses</li>
                      <li>• Relationships damaged by automatic defensive patterns</li>
                      <li>• Goals abandoned because of automatic self-sabotage</li>
                      <li>• Years of your life lived on autopilot instead of by conscious choice</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white mb-4">The value of finally taking conscious control:</h4>
                    <div className="text-3xl font-bold text-blue-400">Priceless</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-500/30 mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">60-Day Money-Back Guarantee</h3>
                <p className="text-gray-300 text-lg">
                  Complete the first 4 weeks of the Automatic Programming Reset. If you don't have a clear understanding of your automatic patterns and the tools to interrupt them, I'll refund your entire investment.
                </p>
              </div>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-12 rounded-lg transition-colors flex items-center justify-center space-x-3 text-xl shadow-2xl mx-auto mb-8">
                <span>Join The Automatic Programming Reset</span>
                <ArrowRight className="h-6 w-6" />
              </button>
              
              <p className="text-gray-500 text-sm">
                The next cohort starts in 2 weeks. Every day you wait is another day your automatic programming is making decisions for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
