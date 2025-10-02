'use client'

import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#140627' }}>
      {/* Background Light Bulbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-16 w-4 h-4 bg-yellow-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-16 right-20 w-5 h-5 bg-yellow-400/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 left-1/3 w-3 h-3 bg-yellow-400/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-24 right-1/4 w-6 h-6 bg-yellow-400/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src="/logo.svg"
                    alt="Rich Identity Logo"
                    className="h-10 w-auto"
                  />
                  <div>
                    <span className="text-2xl font-bold text-white">Rich Identity</span>
                    <p className="text-yellow-400 text-sm -mt-1">Transformation Architect</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Helping successful entrepreneurs break through invisible ceilings through systematic identity transformation.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Richard</a></li>
                  <li><a href="/book" className="text-gray-300 hover:text-yellow-400 transition-colors">The Identity Code</a></li>
                  <li><a href="/assessment" className="text-gray-300 hover:text-yellow-400 transition-colors">Free Assessment</a></li>
                  <li><a href="/challenge" className="text-gray-300 hover:text-yellow-400 transition-colors">30-Day Challenge</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-yellow-400 transition-colors">All Programs</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-6">Programs</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Identity OS Mastery</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Private Coaching</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Identity Reset Challenge</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Free Resources</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Success Stories</a></li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-yellow-400" />
                    <a href="mailto:hello@richidentity.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      hello@richidentity.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-yellow-400" />
                    <a href="tel:+1-555-0123" className="text-gray-300 hover:text-yellow-400 transition-colors">
                      +1 (555) 012-3456
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-yellow-400 mt-1" />
                    <span className="text-gray-300">
                      San Francisco, CA<br />
                      United States
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-12 border-t border-gray-700"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights on identity transformation and exclusive content from Richard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              />
              <button className="btn-primary px-8 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Rich Identity. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-yellow-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}