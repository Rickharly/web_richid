'use client'

import { motion } from 'framer-motion'
import { BookOpen, Users, Award, Target, ArrowRight, Brain, Shield, Zap, Star, CheckCircle, Heart, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#140627' }}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: 'url(/header-background.svg)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-900/80 to-dark-900/90" />
          
          {/* Professional Photo Placeholder */}
          <div className="absolute top-20 right-20 w-64 h-80 bg-gray-800 rounded-2xl border-2 border-dashed border-gray-600 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-2xl mb-2">📸 IMAGE PLACEMENT</div>
              <div className="text-sm">Professional headshot of Richard</div>
              <div className="text-xs mt-2">Confident, approachable, transformation expert</div>
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Meet Richard
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-dark-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                The Transformation Architect
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                [MISSION STATEMENT PLACEHOLDER - Please provide Richard's core mission statement about identity transformation and helping people break free from self-sabotage patterns]
              </motion.p>
            </div>
          </div>
        </section>

        {/* Richard's Story Section - Large Image with Floating Elements */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#0f0519' }}>
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🖼️ LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Richard's transformation journey</div>
                <div className="text-sm mt-2">Military service → Business success → Transformation expert</div>
                <div className="text-xs mt-4">Should be a powerful, cinematic image showing the journey</div>
              </div>
            </div>
          </div>

          {/* Floating Content Boxes */}
          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Richard's <span className="text-gradient">Transformation Story</span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Floating Story Box */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-10 border border-red-500/30 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-6">From Military Conscript to Transformation Expert</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      [PERSONAL STORY PLACEHOLDER - Please provide Richard's detailed personal journey from Russian military service to becoming a transformation expert. Include key turning points, challenges overcome, and what led him to develop his methodology.]
                    </p>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      [CONTINUATION - How his military background shaped his understanding of identity programming and self-sabotage patterns.]
                    </p>
                  </div>
                </motion.div>

                {/* Floating Stats Box */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/30 shadow-2xl">
                    <h4 className="text-2xl font-bold text-white mb-6">Key Milestones</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Military Service</div>
                          <div className="text-gray-300 text-sm">[YEAR PLACEHOLDER]</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Business Success</div>
                          <div className="text-gray-300 text-sm">[YEAR PLACEHOLDER]</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Transformation Expert</div>
                          <div className="text-gray-300 text-sm">[YEAR PLACEHOLDER]</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section - Large Image with Floating Cards */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#140627' }}>
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🌍 LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Inspiring transformation scene</div>
                <div className="text-sm mt-2">People breaking free, achieving success, living their potential</div>
                <div className="text-xs mt-4">Should be motivational and aspirational</div>
              </div>
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Mission & <span className="text-gradient">Vision</span>
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Mission Card - Floating */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-10 border border-blue-500/30 shadow-2xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-6">
                        <Target className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-gray-200 text-xl leading-relaxed">
                      [MISSION STATEMENT PLACEHOLDER - Please provide the detailed mission statement about helping people break free from self-sabotage patterns and transform their identity programming.]
                    </p>
                  </div>
                </motion.div>

                {/* Vision Card - Floating */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mr-6">
                        <Globe className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-gray-200 text-xl leading-relaxed">
                      [VISION STATEMENT PLACEHOLDER - Please provide the vision for how identity transformation can change the world and what Richard hopes to achieve through his work.]
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24" style={{ backgroundColor: '#0f0519' }}>
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Core <span className="text-gradient">Values</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The principles that guide everything we do
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Brain className="h-8 w-8 text-red-400" />,
                    title: "Scientific Approach",
                    description: "[VALUE 1 PLACEHOLDER - Please provide the first core value and its description]"
                  },
                  {
                    icon: <Heart className="h-8 w-8 text-red-400" />,
                    title: "Authentic Transformation",
                    description: "[VALUE 2 PLACEHOLDER - Please provide the second core value and its description]"
                  },
                  {
                    icon: <Shield className="h-8 w-8 text-red-400" />,
                    title: "Integrity & Trust",
                    description: "[VALUE 3 PLACEHOLDER - Please provide the third core value and its description]"
                  },
                  {
                    icon: <Zap className="h-8 w-8 text-red-400" />,
                    title: "Breakthrough Results",
                    description: "[VALUE 4 PLACEHOLDER - Please provide the fourth core value and its description]"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-red-400" />,
                    title: "Community Support",
                    description: "[VALUE 5 PLACEHOLDER - Please provide the fifth core value and its description]"
                  },
                  {
                    icon: <Award className="h-8 w-8 text-red-400" />,
                    title: "Excellence",
                    description: "[VALUE 6 PLACEHOLDER - Please provide the sixth core value and its description]"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20 h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {value.icon}
                        <h3 className="text-xl font-bold text-white ml-3">{value.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed flex-1">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section - Large Image with Floating Elements */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#140627' }}>
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🧠 LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Scientific methodology visualization</div>
                <div className="text-sm mt-2">Brain patterns, neural networks, transformation process</div>
                <div className="text-xs mt-4">Should show the science behind identity transformation</div>
              </div>
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  The Identity OS <span className="text-gradient">Methodology</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  A scientifically-backed approach to identity transformation
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Floating Methodology Box */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-10 border border-red-500/30 shadow-2xl">
                    <h3 className="text-3xl font-bold text-white mb-6">The Science Behind Identity Programming</h3>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      [METHODOLOGY PLACEHOLDER - Please provide detailed explanation of Richard's Identity OS methodology, including the scientific principles, psychological foundations, and how it differs from other approaches.]
                    </p>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      [CONTINUATION - Specific techniques, tools, and processes used in the transformation work.]
                    </p>
                  </div>
                </motion.div>

                {/* Floating Process Steps */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-3xl p-10 border border-green-500/30 shadow-2xl">
                    <h4 className="text-2xl font-bold text-white mb-8">The 3-Phase Process</h4>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg mb-2">Pattern Recognition</div>
                          <div className="text-gray-200 text-sm">[PHASE 1 DESCRIPTION PLACEHOLDER]</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg mb-2">Identity Reprogramming</div>
                          <div className="text-gray-200 text-sm">[PHASE 2 DESCRIPTION PLACEHOLDER]</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold text-lg mb-2">Momentum Maintenance</div>
                          <div className="text-gray-200 text-sm">[PHASE 3 DESCRIPTION PLACEHOLDER]</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials & Experience Section */}
        <section className="py-24" style={{ backgroundColor: '#0f0519' }}>
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Credentials & <span className="text-gradient">Experience</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Award className="h-8 w-8 text-red-400" />,
                    title: "21+ Years Experience",
                    description: "[EXPERIENCE 1 PLACEHOLDER - Please provide specific experience details]"
                  },
                  {
                    icon: <Users className="h-8 w-8 text-red-400" />,
                    title: "287+ Success Stories",
                    description: "[EXPERIENCE 2 PLACEHOLDER - Please provide success metrics and client results]"
                  },
                  {
                    icon: <BookOpen className="h-8 w-8 text-red-400" />,
                    title: "Author & Speaker",
                    description: "[EXPERIENCE 3 PLACEHOLDER - Please provide book details, speaking engagements, etc.]"
                  },
                  {
                    icon: <Star className="h-8 w-8 text-red-400" />,
                    title: "Certifications",
                    description: "[EXPERIENCE 4 PLACEHOLDER - Please provide relevant certifications and qualifications]"
                  }
                ].map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-2xl p-8 border border-red-500/20 h-full flex flex-col text-center">
                      <div className="flex justify-center mb-4">
                        {credential.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{credential.title}</h3>
                      <p className="text-gray-300 leading-relaxed flex-1">{credential.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section - Large Image with Floating Testimonials */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#140627' }}>
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🎉 LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Celebration of success and transformation</div>
                <div className="text-sm mt-2">People achieving their goals, celebrating breakthroughs</div>
                <div className="text-xs mt-4">Should be uplifting and show the joy of transformation</div>
              </div>
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Success <span className="text-gradient">Stories</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real transformations from real people
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah M.",
                    role: "Entrepreneur",
                    result: "6-Figure Breakthrough",
                    story: "[SUCCESS STORY 1 PLACEHOLDER - Please provide detailed success story with specific results and transformation details]",
                    image: "Professional woman, 30s, confident smile"
                  },
                  {
                    name: "Marcus T.",
                    role: "Executive",
                    result: "Career Transformation",
                    story: "[SUCCESS STORY 2 PLACEHOLDER - Please provide detailed success story with specific results and transformation details]",
                    image: "Professional man, 40s, success pose"
                  },
                  {
                    name: "Jennifer R.",
                    role: "Life Coach",
                    result: "Business Growth",
                    story: "[SUCCESS STORY 3 PLACEHOLDER - Please provide detailed success story with specific results and transformation details]",
                    image: "Woman, 30s, peaceful expression"
                  }
                ].map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 shadow-2xl h-full flex flex-col">
                      {/* Profile Image Placeholder - Small for testimonials */}
                      <div className="w-20 h-20 bg-gray-700 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center mx-auto mb-6">
                        <div className="text-center text-gray-400">
                          <div className="text-xs">👤</div>
                          <div className="text-xs mt-1">Photo</div>
                        </div>
                      </div>
                      <div className="text-center text-xs text-gray-400 mb-4 italic">"{story.image}"</div>
                      
                      <div className="flex items-center justify-center space-x-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-200 leading-relaxed mb-6 italic flex-1 text-lg">"{story.story}"</p>
                      <div className="border-t border-gray-600 pt-6">
                        <div className="text-white font-semibold text-xl">{story.name}</div>
                        <div className="text-gray-300 text-sm mb-2">{story.role}</div>
                        <div className="text-red-400 text-sm font-semibold">{story.result}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Impact Section */}
        <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#0f0519' }}>
          {/* Large Parallax Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🚀 LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Parallax effect background</div>
                <div className="text-sm mt-2">Transformation impact, before/after, powerful imagery</div>
                <div className="text-xs mt-4">Should create depth and movement as user scrolls</div>
              </div>
            </div>
          </div>

          {/* Floating Impact Stats */}
          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  The <span className="text-gradient">Impact</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Real results from real transformations
                </p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { number: "287+", label: "Lives Transformed", icon: <Users className="h-8 w-8 text-red-400" /> },
                  { number: "21+", label: "Years Experience", icon: <Award className="h-8 w-8 text-red-400" /> },
                  { number: "95%", label: "Success Rate", icon: <CheckCircle className="h-8 w-8 text-red-400" /> },
                  { number: "1000+", label: "Hours of Coaching", icon: <Heart className="h-8 w-8 text-red-400" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 shadow-2xl text-center">
                      <div className="flex justify-center mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-lg">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Large Image with Floating CTA */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#140627' }}>
          {/* Large Background Image */}
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <div className="text-center text-gray-500 p-12 border-2 border-dashed border-gray-600 rounded-2xl">
                <div className="text-4xl mb-4">🎯 LARGE IMAGE PLACEMENT</div>
                <div className="text-lg">Call-to-action background</div>
                <div className="text-sm mt-2">Richard speaking, transformation scene, or success imagery</div>
                <div className="text-xs mt-4">Should inspire action and confidence</div>
              </div>
            </div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-3xl p-12 border border-red-500/30 shadow-2xl text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Transform Your Identity?</h3>
                <p className="text-gray-200 text-xl mb-10 max-w-4xl mx-auto">
                  Join hundreds of successful people who have broken free from self-sabotage patterns and achieved breakthrough results.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-6 px-12 rounded-lg transition-colors flex items-center justify-center space-x-3 text-xl shadow-2xl">
                    <span>Get The Identity Code Book</span>
                    <ArrowRight className="h-6 w-6" />
                  </button>
                  <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold py-6 px-12 rounded-lg transition-colors text-xl shadow-2xl">
                    Join the Self-Sabotage Stop Challenge
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}



